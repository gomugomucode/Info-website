import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";
import { NOTE_SUBCATEGORIES, SITE_URL, absoluteUrl } from "@/lib/site";

/**
 * Priority guide:
 *   1.0  — homepage
 *   0.9  — section indexes (/notes, /blog)
 *   0.85 — topic hubs (/notes/linux, etc.)
 *   0.8  — blog posts
 *   0.7  — notes (pillar/reference content)
 *   0.65 — cheatsheets
 */
function buildStaticRoutes(): MetadataRoute.Sitemap {
  const now = new Date();

  const hubRoutes: MetadataRoute.Sitemap = NOTE_SUBCATEGORIES.map((sub) => ({
    url: absoluteUrl(`/notes/${sub}`),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: absoluteUrl("/notes"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...hubRoutes,
    {
      url: absoluteUrl("/blog"),
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/tools"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: absoluteUrl("/about"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}

function postUrl(
  type: "blog" | "cheatsheets" | "notes",
  slug: string,
  subcategory?: string,
): string {
  if (type === "notes") {
    return absoluteUrl(`/notes/${subcategory ?? "linux"}/${slug}`);
  }
  // Blog and cheatsheets both render at /blog/[slug]
  return absoluteUrl(`/blog/${slug}`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = buildStaticRoutes();
  const posts = getAllPosts();

  const dynamicRoutes: MetadataRoute.Sitemap = posts.map((post) => {
    const isNotes = post.type === "notes";
    const isCheatsheet = post.type === "cheatsheets";
    
    // DYNAMIC PRIORITY BOOST
    // -------------------------------------------------------------------------
    let priority = isNotes ? 0.7 : isCheatsheet ? 0.65 : 0.8;
    
    // Boost Pillar guides to 0.9 (same as section indexes) to ensure fast discovery
    const sub = post.frontmatter.subcategory?.toLowerCase();
    if (sub && isNoteSubcategory(sub)) {
      const isPillar = HUB_PILLARS[sub]?.includes(post.slug);
      if (isPillar) priority = 0.9;
    }

    return {
      url: postUrl(post.type, post.slug, post.frontmatter.subcategory),
      lastModified: new Date(post.frontmatter.date),
      changeFrequency: "monthly" as const,
      priority: priority,
    };
  });

  return [...staticRoutes, ...dynamicRoutes];
}
