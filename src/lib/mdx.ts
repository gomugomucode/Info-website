import fs from "fs";
import path from "path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";
import { HUB_PILLARS, isNoteSubcategory } from "./hub-config";

const contentDirectory = path.join(process.cwd(), "content");

export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  category: string;
  featured?: boolean;
  readingTime?: string;
  subcategory?: string;
  difficulty?: string;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  type: "blog" | "cheatsheets" | "notes";
}

const ALL_TYPES: Post["type"][] = ["blog", "cheatsheets", "notes"];

// Helper to recursively walk a directory and find all .mdx and .md files
function getFilesRecursively(dir: string): string[] {
  let results: string[] = [];
  if (!fs.existsSync(dir)) return [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(filePath));
    } else if (file.endsWith(".mdx") || file.endsWith(".md") || file.endsWith(".txt")) {
      results.push(filePath);
    }
  });
  return results;
}

export function getPostSlugs(type: Post["type"]): string[] {
  const directory = path.join(contentDirectory, type);
  const files = getFilesRecursively(directory);
  return files.map((file) => path.basename(file));
}

export function findFilePathBySlug(slug: string, type?: Post["type"]): { filePath: string; type: Post["type"] } | null {
  const realSlug = slug.replace(/\.(mdx?|txt)$/, "");
  const typesToSearch: Post["type"][] = type ? [type] : ALL_TYPES;

  for (const t of typesToSearch) {
    const directory = path.join(contentDirectory, t);
    const files = getFilesRecursively(directory);
    const foundFile = files.find((file) => {
      const base = path.basename(file).replace(/\.(mdx?|txt)$/, "");
      return base.toLowerCase() === realSlug.toLowerCase();
    });
    if (foundFile) {
      return { filePath: foundFile, type: t };
    }
  }
  return null;
}

export function getPostBySlug(slug: string, type?: Post["type"]): Post {
  const resolved = findFilePathBySlug(slug, type);
  if (resolved) {
    const fileContents = fs.readFileSync(resolved.filePath, "utf8");
    const realSlug = slug.replace(/\.(mdx?|txt)$/, "");
    const isTxt = resolved.filePath.endsWith(".txt");
    let frontmatter: PostFrontmatter;
    let content: string;

    if (isTxt && !fileContents.startsWith("---")) {
      // Generate default frontmatter for .txt files without gray-matter headers
      const titleFromSlug = realSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      frontmatter = {
        title: titleFromSlug,
        description: `Reference notes for ${titleFromSlug}.`,
        date: new Date().toISOString().split("T")[0],
        tags: ["notes"],
        category: "notes",
      };
      content = fileContents;
    } else {
      const parsed = matter(fileContents);
      frontmatter = parsed.data as PostFrontmatter;
      content = parsed.content;
    }

    return {
      slug: realSlug,
      frontmatter,
      content,
      type: resolved.type,
    };
  }

  throw new Error(`Post not found: ${slug}`);
}

export function getAllPosts(types: Post["type"][] = ALL_TYPES): Post[] {
  let allPosts: Post[] = [];

  types.forEach((type) => {
    const slugs = getPostSlugs(type);
    const posts = slugs.map((slug) => getPostBySlug(slug, type));
    allPosts = [...allPosts, ...posts];
  });

  // Sort posts by date in descending order
  return allPosts.sort((post1, post2) => (post1.frontmatter.date > post2.frontmatter.date ? -1 : 1));
}

export function getFeaturedPosts(limit: number = 3): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.frontmatter.featured).slice(0, limit);
}

export function getPostsByCategory(category: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.frontmatter.category.toLowerCase() === category.toLowerCase());
}

export function getNotesBySubcategory(subcategory: string): Post[] {
  const allNotes = getAllPosts(["notes"]);
  return allNotes.filter(
    (post) => post.frontmatter.subcategory?.toLowerCase() === subcategory.toLowerCase()
  );
}

export function getLatestPosts(limit: number = 3): Post[] {
  const allPosts = getAllPosts();
  return allPosts.slice(0, limit);
}

/** Latest blog posts only (type === "blog") */
export function getLatestBlogPosts(limit: number = 3): Post[] {
  return getAllPosts(["blog"]).slice(0, limit);
}

/** Featured cheatsheets or, if none are marked featured, the most recent ones */
export function getFeaturedCheatsheets(limit: number = 3): Post[] {
  const sheets = getAllPosts(["cheatsheets"]);
  const featured = sheets.filter((p) => p.frontmatter.featured);
  return (featured.length > 0 ? featured : sheets).slice(0, limit);
}

/** Latest developer notes */
export function getLatestNotes(limit: number = 3): Post[] {
  return getAllPosts(["notes"]).slice(0, limit);
}

/** Featured notes, or most recent if none are marked featured */
export function getFeaturedNotes(limit: number = 6): Post[] {
  const notes = getAllPosts(["notes"]);
  const featured = notes.filter((p) => p.frontmatter.featured);
  return (featured.length > 0 ? featured : notes).slice(0, limit);
}

/** Pillar guides for a topic hub — uses HUB_PILLARS order, then featured, then recent. */
export function getHubPillarNotes(subcategory: string): Post[] {
  const normalized = subcategory.toLowerCase();
  const allNotes = getNotesBySubcategory(normalized);
  if (allNotes.length === 0) return [];

  if (isNoteSubcategory(normalized)) {
    const slugs = HUB_PILLARS[normalized];
    const ordered = slugs
      .map((slug) => allNotes.find((post) => post.slug === slug))
      .filter((post): post is Post => post !== undefined);

    if (ordered.length > 0) return ordered;
  }

  const featured = allNotes.filter((post) => post.frontmatter.featured);
  const fallback = featured.length > 0 ? featured : allNotes;
  const limit = isNoteSubcategory(normalized) ? HUB_PILLARS[normalized].length : 3;
  return fallback.slice(0, limit);
}

export function getRelatedPosts(currentPost: Post, limit: number = 2): Post[] {
  const allPosts = getAllPosts().filter((p) => p.slug !== currentPost.slug);

  // SCORING WEIGHTS
  // -------------------------------------------------------------------------
  const WEIGHTS = {
    SUBCATEGORY: 10, // Strongest signal: within the same specific topic hub
    TAG: 3,          // Medium signal: shared conceptual markers
    CATEGORY: 2,    // Weak signal: general top-level category match
    PILLAR: 5,       // Boost: prioritize canonical guides in the result set
  };

  const scoredPosts = allPosts.map((post) => {
    let score = 0;

    // 1. Subcategory Match (Strongest)
    if (
      post.frontmatter.subcategory && 
      currentPost.frontmatter.subcategory && 
      post.frontmatter.subcategory.toLowerCase() === currentPost.frontmatter.subcategory?.toLowerCase()
    ) {
      score += WEIGHTS.SUBCATEGORY;
    }

    // 2. Shared Tags (Additive)
    const sharedTags = post.frontmatter.tags?.filter((tag) => 
      currentPost.frontmatter.tags?.includes(tag)
    ) || [];
    score += sharedTags.length * WEIGHTS.TAG;

    // 3. Category Match (Fallback)
    if (
      post.frontmatter.category.toLowerCase() === currentPost.frontmatter.category.toLowerCase()
    ) {
      score += WEIGHTS.CATEGORY;
    }

    // 4. Pillar Guide Boost
    // If the post is a defined pillar in its subcategory, it gets a visibility boost
    const sub = post.frontmatter.subcategory?.toLowerCase();
    if (sub && isNoteSubcategory(sub)) {
      const isPillar = HUB_PILLARS[sub]?.includes(post.slug);
      if (isPillar) score += WEIGHTS.PILLAR;
    }

    return { post, score };
  });

  // Filter out zero-score matches, sort by score descending, then take limit
  return scoredPosts
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}

export async function parseTOC(content: string) {
  const slugger = new GithubSlugger();
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const toc = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const depth = match[1].length;
    const title = match[2];
    // Remove markdown links from title if any
    const cleanTitle = title.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
    const url = `#${slugger.slug(cleanTitle)}`;

    toc.push({
      title: cleanTitle,
      url,
      depth,
    });
  }

  return toc;
}
