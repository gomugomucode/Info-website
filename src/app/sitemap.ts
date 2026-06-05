import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

// ─── config ──────────────────────────────────────────────────────────────────

const SITE_URL = "https://info.anupambaral.com.np";

/**
 * Maps every content folder to the URL prefix it renders at.
 *
 * ⚠️  VERIFY THESE MATCH YOUR ACTUAL APP ROUTES before deploying.
 *     If notes render at /blog/[slug] instead of /notes/linux/[slug],
 *     update urlPrefix accordingly. A sitemap entry that 404s is worse
 *     than a missing one — Google penalises crawl errors.
 *
 *     priority guide:
 *       1.0  = homepage
 *       0.9  = section index pages
 *       0.8  = blog posts (highest-intent content)
 *       0.7  = notes (reference material, updated rarely)
 *       0.65 = cheatsheets (reference, rarely updated)
 */
const CONTENT_SOURCES = [
  {
    dir:             "content/blog",
    urlPrefix:       "blog",
    changeFrequency: "monthly" as const,
    priority:        0.8,
  },
  {
    dir:             "content/cheatsheets",
    urlPrefix:       "cheatsheets",
    changeFrequency: "monthly" as const,
    priority:        0.65,
  },
  {
    dir:             "content/notes/linux",
    urlPrefix:       "notes/linux",
    changeFrequency: "monthly" as const,
    priority:        0.7,
  },
  {
    dir:             "content/notes/networking",
    urlPrefix:       "notes/networking",
    changeFrequency: "monthly" as const,
    priority:        0.7,
  },
  {
    dir:             "content/notes/security",
    urlPrefix:       "notes/security",
    changeFrequency: "monthly" as const,
    priority:        0.7,
  },
  {
    dir:             "content/notes/web",
    urlPrefix:       "notes/web",
    changeFrequency: "monthly" as const,
    priority:        0.7,
  },
  {
    dir:             "content/notes/windows",
    urlPrefix:       "notes/windows",
    changeFrequency: "monthly" as const,
    priority:        0.7,
  },
] as const;

// ─── static routes ───────────────────────────────────────────────────────────

const STATIC_ROUTES: MetadataRoute.Sitemap = [
  {
    url:             SITE_URL,
    lastModified:    new Date(),
    changeFrequency: "weekly",
    priority:        1.0,
  },
  {
    url:             `${SITE_URL}/blog`,
    lastModified:    new Date(),
    changeFrequency: "daily",   // new posts land here first
    priority:        0.9,
  },
  {
    url:             `${SITE_URL}/tools`,
    lastModified:    new Date(),
    changeFrequency: "weekly",
    priority:        0.75,
  },
  {
    url:             `${SITE_URL}/about`,
    lastModified:    new Date(),
    changeFrequency: "yearly",
    priority:        0.5,
  },
  {
    url:             `${SITE_URL}/contact`,
    lastModified:    new Date(),
    changeFrequency: "yearly",
    priority:        0.3,
  },
];

// ─── helpers ─────────────────────────────────────────────────────────────────

/**
 * Returns every .mdx filename (without extension) inside a directory.
 * Returns [] if the directory does not exist — safe to call on any path.
 */
function getSlugs(relDir: string): string[] {
  const absDir = path.join(process.cwd(), relDir);
  if (!fs.existsSync(absDir)) return [];
  return fs
    .readdirSync(absDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

/**
 * Extracts the `date` field from MDX frontmatter without pulling in
 * gray-matter as a dependency. Falls back to the file's mtime if no
 * date is found in the frontmatter.
 *
 * Handles both quoted and unquoted date values, e.g.:
 *   date: 2025-11-30
 *   date: "2025-11-30"
 *   date: '2025-11-30'
 */
function getLastModified(absFilePath: string): Date {
  try {
    const raw = fs.readFileSync(absFilePath, "utf-8");

    // Match the YAML front-matter block between the first two --- delimiters
    const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (fmMatch) {
      const dateMatch = fmMatch[1].match(
        /^date:\s*["']?(\d{4}-\d{2}-\d{2}[^"'\n]*)["']?/m
      );
      if (dateMatch?.[1]) {
        const parsed = new Date(dateMatch[1].trim());
        if (!isNaN(parsed.getTime())) return parsed;
      }
    }
  } catch {
    // file unreadable — fall through to mtime
  }

  // Fallback: file modification time from the OS
  return fs.statSync(absFilePath).mtime;
}

// ─── sitemap builder ─────────────────────────────────────────────────────────

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamicRoutes: MetadataRoute.Sitemap = CONTENT_SOURCES.flatMap(
    ({ dir, urlPrefix, changeFrequency, priority }) =>
      getSlugs(dir).map((slug) => ({
        url:             `${SITE_URL}/${urlPrefix}/${slug}`,
        lastModified:    getLastModified(path.join(process.cwd(), dir, `${slug}.mdx`)),
        changeFrequency,
        priority,
      }))
  );

  return [...STATIC_ROUTES, ...dynamicRoutes];
}
