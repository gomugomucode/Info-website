// ─── schema.org types (scoped to what this site needs) ──────────────────────

interface SchemaPerson {
  "@type": "Person";
  "@id": string;
  name: string;
  alternateName: string;
  url: string;
  jobTitle: string;
  description: string;
  knowsAbout: string[];
  /**
   * sameAs is the primary disambiguation signal.
   * Google uses this list to distinguish this Anupam Baral (cybersecurity author/gomugomucode)
   * from the solar-energy founder and the defence officer who share the same name.
   */
  sameAs: string[];
}

interface SchemaWebSite {
  "@type": "WebSite";
  "@id": string;
  name: string;
  url: string;
  description: string;
  inLanguage: string;
  author: { "@id": string };
  /**
   * SearchAction wires Google's Sitelinks Search Box directly to /api/search.
   * Once indexed, users can search your site from the Google results page.
   */
  potentialAction: {
    "@type": "SearchAction";
    target: { "@type": "EntryPoint"; urlTemplate: string };
    "query-input": string;
  };
}

interface SchemaGraph {
  "@context": "https://schema.org";
  "@graph": [SchemaPerson, SchemaWebSite];
}

import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

// ─── constants ───────────────────────────────────────────────────────────────

// Every URL here should resolve to a page that mentions "Anupam Baral".
// Order matters: put the highest-authority profiles first.
const SAME_AS_URLS: string[] = [
  "https://github.com/gomugomucode",         // primary code identity
  "https://medium.com/@gomugomucode",         // publication history
  "https://anupambaral.com.np",              // personal portfolio
];

// ─── builder ─────────────────────────────────────────────────────────────────

/**
 * Returns a JSON-LD @graph combining a Person node and a WebSite node.
 * The two nodes reference each other via their @id values so crawlers can
 * understand that this site is authored by this specific person.
 *
 * Usage:
 *   <script
 *     type="application/ld+json"
 *     dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchemaGraph()) }}
 *   />
 */
export function buildSchemaGraph(): SchemaGraph {
  const personId  = `${SITE_URL}/#person`;
  const websiteId = `${SITE_URL}/#website`;

  const person: SchemaPerson = {
    "@type":         "Person",
    "@id":           personId,
    name:            "Anupam Baral",
    alternateName:   "gomugomucode",
    url:             SITE_URL,
    jobTitle:        "Cybersecurity Researcher",
    description:
      "Cybersecurity researcher and author from Nepal. Publishes structured " +
      "reference guides on blue team operations, Linux auditing, network forensics, " +
      "web security testing, and Windows threat hunting.",
    knowsAbout: [
      "Cybersecurity",
      "Blue Team Operations",
      "Incident Response",
      "Network Forensics",
      "Wireshark",
      "Nmap",
      "Linux Security",
      "Kali Linux",
      "Web Application Security",
      "OWASP",
      "Bug Bounty",
      "Windows Security",
      "PowerShell Auditing",
      "Penetration Testing",
    ],
    sameAs: SAME_AS_URLS,
  };

  const website: SchemaWebSite = {
    "@type":       "WebSite",
    "@id":         websiteId,
    name:          SITE_NAME,
    url:           SITE_URL,
    description:   SITE_DESCRIPTION,
    inLanguage:    "en-US",
    author:        { "@id": personId },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type":       "EntryPoint",
        urlTemplate:   absoluteUrl("/api/search?q={search_term_string}"),
      },
      "query-input": "required name=search_term_string",
    },
  };

  return {
    "@context": "https://schema.org",
    "@graph":   [person, website],
  };
}

// ─── per-article schema (notes & blog) ───────────────────────────────────────

interface ArticleSchemaInput {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  subcategory?: string;
}

export function buildArticleSchema(input: ArticleSchemaInput) {
  const personId = `${SITE_URL}/#person`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: input.url,
    datePublished: input.datePublished,
    author: { 
      "@type": "Person",
      "@id": personId,
      name: "Anupam Baral"
    },
    publisher: { 
      "@type": "Organization",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME 
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": input.url },
    articleSection: input.subcategory,
    inLanguage: "en-US",
    // Enhancement: adding keyword signals
    keywords: input.subcategory,
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
