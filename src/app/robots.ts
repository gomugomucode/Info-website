import { MetadataRoute } from "next";

const SITE_URL = "https://info.anupambaral.com.np";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all legitimate crawlers (Googlebot, Bingbot, etc.)
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",    // search route is for client use, not for indexing
          "/_next/",  // Next.js internals
        ],
      },
      {
        // Block AI training scrapers that ignore robots by default.
        // Add more here if you start seeing them in your server logs.
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "CCBot",
          "anthropic-ai",
          "Claude-Web",
          "Omgilibot",
          "FacebookBot",
        ],
        disallow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
