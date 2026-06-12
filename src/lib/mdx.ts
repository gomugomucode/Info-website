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

export type TopicClusterId = `hub:${string}` | `cat:${string}`;

/**
 * Identifies the primary semantic cluster a post belongs to.
 * Hierarchy: Subcategory Hub > General Category
 */
export function getTopicCluster(post: Post): TopicClusterId {
  const sub = post.frontmatter.subcategory?.toLowerCase();
  if (sub && isNoteSubcategory(sub)) {
    return `hub:${sub}`;
  }
  return `cat:${post.frontmatter.category.toLowerCase()}`;
}

/**
 * Retrieves all posts belonging to a specific semantic cluster.
 * Sorted by authority (Pillars first, then recent).
 */
export function getClusterPosts(clusterId: string): Post[] {
  const [type, id] = clusterId.split(":");
  let posts: Post[] = [];

  if (type === "hub") {
    posts = getNotesBySubcategory(id);
  } else if (type === "cat") {
    posts = getPostsByCategory(id);
  }

  return posts.sort((a, b) => {
    // Prioritize Pillars in the cluster
    const subA = a.frontmatter.subcategory?.toLowerCase();
    const subB = b.frontmatter.subcategory?.toLowerCase();
    
    const isPillarA = subA && isNoteSubcategory(subA) && HUB_PILLARS[subA]?.includes(a.slug);
    const isPillarB = subB && isNoteSubcategory(subB) && HUB_PILLARS[subB]?.includes(b.slug);

    if (isPillarA && !isPillarB) return -1;
    if (!isPillarA && isPillarB) return 1;
    
    // Fallback to date
    return a.frontmatter.date.localeCompare(b.frontmatter.date);
  });
}

export function getRelatedPosts(currentPost: Post, limit: number = 2): Post[] {
  // 1. Identify the current post's cluster to define the primary candidate pool
  const primaryClusterId = getTopicCluster(currentPost);
  const clusterCandidates = getClusterPosts(primaryClusterId);
  
  // 2. Broaden the pool to include other posts with shared tags (Cross-Cluster signals)
  const allPosts = getAllPosts().filter((p) => p.slug !== currentPost.slug);
  
  // SCORING WEIGHTS
  const WEIGHTS = {
    CLUSTER_MATCH: 15, // High boost for belonging to the same semantic cluster
    TAG: 3,           // Medium signal: shared conceptual markers
    CATEGORY: 2,      // Weak signal: general top-level category match
    PILLAR: 5,        // Authority boost: prioritize canonical guides
  };

  const scoredPosts = allPosts.map((post) => {
    let score = 0;

    // A. Cluster Membership (Pillar/Subcategory priority)
    if (getTopicCluster(post) === primaryClusterId) {
      score += WEIGHTS.CLUSTER_MATCH;
    }

    // B. Shared Tags (Additive)
    const sharedTags = post.frontmatter.tags?.filter((tag) => 
      currentPost.frontmatter.tags?.includes(tag)
    ) || [];
    score += sharedTags.length * WEIGHTS.TAG;

    // C. Category Match (Fallback)
    if (
      post.frontmatter.category.toLowerCase() === currentPost.frontmatter.category.toLowerCase()
    ) {
      score += WEIGHTS.CATEGORY;
    }

    // D. Pillar Guide Boost
    const sub = post.frontmatter.subcategory?.toLowerCase();
    if (sub && isNoteSubcategory(sub)) {
      const isPillar = HUB_PILLARS[sub]?.includes(post.slug);
      if (isPillar) score += WEIGHTS.PILLAR;
    }

    return { post, score };
  });

  return scoredPosts
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}

import { HUB_PILLARS, isNoteSubcategory } from "./hub-config";

/**
 * Automatically transforms raw MDX content into an internally-linked graph.
 * Identifies key terms from pillar guides and wraps them in links.
 */
export function linkifyContent(content: string, currentPostSlug: string): string {
  if (!content) return content;

  // 1. Map of keyword -> target URL
  // We derive this from HUB_PILLARS to ensure we link to authority content.
  const linkMap: Record<string, string> = {};
  
  Object.entries(HUB_PILLARS).forEach(([sub, slugs]) => {
    slugs.forEach(slug => {
      const post = getPostBySlug(slug, "notes");
      // Use the title as the keyword. In a real-world scenario, this would be a curated list.
      const keyword = post.frontmatter.title;
      const url = `/notes/${sub}/${slug}`;
      
      // Only map if it's a meaningful phrase (not too short, not too long)
      if (keyword && keyword.length > 3) {
        linkMap[keyword] = url;
      }
    });
  });

  // 2. Process content
  let linkedContent = content;
  
  // Sort keywords by length (longest first) to avoid partial matches (e.g. "Linux" vs "Linux CLI")
  const sortedKeywords = Object.keys(linkMap).sort((a, b) => b.length - a.length);

  sortedKeywords.forEach(keyword => {
    const url = linkMap[keyword];
    
    // Avoid linking the same slug as the current post
    if (url.endsWith(currentPostSlug)) return;

    /**
     * REGEX EXPLANATION:
     * - Lookbehind (?<!...): Ensure the word isn't already inside a Markdown link [keyword](...)
     * - Boundary \b: Match whole words only
     * - Case-insensitive: 'i' flag
     * - Avoid code blocks: We avoid matching if the line starts with ``` or is inside `...`
     * 
     * Note: Simple JS regex doesn't support complex lookbehinds across all environments perfectly,
     * so we use a refined replacement strategy.
     */
    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b(${escapedKeyword})\\b`, 'gi');

    linkedContent = linkedContent.replace(regex, (match) => {
      // Check if the match is within a Markdown link [text](url)
      // We search backwards from the match position to see if there's an opening '['
      const position = linkedContent.indexOf(match);
      const beforeMatch = linkedContent.substring(0, position);
      
      // If there's an unmatched '[' before the match, it's likely inside a link
      const openBrackets = (beforeMatch.match(/\[/g) || []).length;
      const closeBrackets = (beforeMatch.match(/\]/g) || []).length;
      
      if (openBrackets > closeBrackets) return match;

      // Avoid linking the same word twice in a very short span (simple heuristic)
      // In a production environment, this would be a stateful parser.
      
      return `[${match}](${url})`;
    });
  });

  return linkedContent;
}

