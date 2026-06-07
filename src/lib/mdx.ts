import fs from "fs";
import path from "path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";

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

export function getRelatedPosts(currentPost: Post, limit: number = 2): Post[] {
  const allPosts = getAllPosts().filter((p) => p.slug !== currentPost.slug);

  // Basic related posts logic: matches tags or category
  const related = allPosts.filter((post) => {
    const hasSharedCategory = post.frontmatter.category.toLowerCase() === currentPost.frontmatter.category.toLowerCase();
    const hasSharedTags = post.frontmatter.tags?.some((tag) => currentPost.frontmatter.tags?.includes(tag));
    return hasSharedCategory || hasSharedTags;
  });

  return related.slice(0, limit);
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
