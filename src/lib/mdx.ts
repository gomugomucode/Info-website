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
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  type: "blog" | "cheatsheets" | "notes";
}

const ALL_TYPES: Post["type"][] = ["blog", "cheatsheets", "notes"];

export function getPostSlugs(type: Post["type"]) {
  const directory = path.join(contentDirectory, type);
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory).filter((file) => file.endsWith(".mdx") || file.endsWith(".md"));
}

/**
 * Get a single post by slug.
 * If `type` is omitted, searches across all folders (blog → cheatsheets → notes).
 */
export function getPostBySlug(slug: string, type?: Post["type"]): Post {
  const realSlug = slug.replace(/\.mdx?$/, "");

  const typesToSearch: Post["type"][] = type ? [type] : ALL_TYPES;

  for (const t of typesToSearch) {
    let fullPath = path.join(contentDirectory, t, `${realSlug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(contentDirectory, t, `${realSlug}.md`);
    }
    if (fs.existsSync(fullPath)) {
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      return {
        slug: realSlug,
        frontmatter: data as PostFrontmatter,
        content,
        type: t,
      };
    }
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
