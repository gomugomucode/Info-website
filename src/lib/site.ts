/**
 * Central site configuration for metadata, sitemap, robots, and JSON-LD.
 * Override in production with NEXT_PUBLIC_SITE_URL if the domain changes.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://info.anupambaral.com.np"
).replace(/\/$/, "");

export const SITE_NAME = "Cybersecurity Learning Hub | Anupam Baral";

export const SITE_SHORT_NAME = "Anupam Baral Info";

export const SITE_DESCRIPTION =
  "Structured cybersecurity learning guides — Linux, networking, web security, " +
  "Windows forensics, blue team operations, and bug bounty reference notes.";

/** Topic hub routes under /notes — must match content/notes/* folders. */
export const NOTE_SUBCATEGORIES = [
  "linux",
  "networking",
  "security",
  "web",
  "windows",
] as const;

export type NoteSubcategory = (typeof NOTE_SUBCATEGORIES)[number];

export function absoluteUrl(path: string = "/"): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
