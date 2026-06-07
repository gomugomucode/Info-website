import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { buildSchemaGraph } from "@/lib/schemas";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_SHORT_NAME,
  SITE_URL,
  absoluteUrl,
} from "@/lib/site";
import "./globals.css";

// ─── fonts ───────────────────────────────────────────────────────────────────

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ─── site-wide metadata ──────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_NAME,
    template: "%s | Anupam Baral",
  },

  description: SITE_DESCRIPTION,

  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Anupam Baral", url: SITE_URL }],

  // ── indexing ──────────────────────────────────────────────────────────────
  // "index, follow" is the default but stating it explicitly prevents any
  // parent robots.txt setting from silently overriding child pages.
  robots: {
    index:               true,
    follow:              true,
    googleBot: {
      index:             true,
      follow:            true,
      "max-image-preview": "large",
      "max-snippet":     -1,
    },
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    title:       SITE_NAME,
    description: SITE_DESCRIPTION,
    url:         SITE_URL,
    siteName:    SITE_SHORT_NAME,
    locale:      "en_US",
    type:        "website",
    // Replace the src value once you have a real OG image at /public/og.png
    // Recommended size: 1200×630px
    images: [
      {
        url:    absoluteUrl("/og.jpg"),
        width:  1200,
        height: 630,
        alt:    SITE_NAME,
      },
    ],
  },

  // ── Twitter / X card ──────────────────────────────────────────────────────
  // "summary_large_image" renders the full-width preview card in feeds.
  twitter: {
    card:        "summary_large_image",
    title:       SITE_NAME,
    description: SITE_DESCRIPTION,
    images:      [absoluteUrl("/og.jpg")],
  },
};

// ─── root layout ─────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const schema = buildSchemaGraph();

  return (
    <html lang="en" suppressHydrationWarning>
      {/*
       * JSON-LD lives in <head> so Googlebot reads it before any JS executes.
       * dangerouslySetInnerHTML is safe here — the content is our own
       * controlled schema object, never user input.
       *
       * The @graph contains two linked nodes:
       *   • Person  — identifies you and lists sameAs URLs to disambiguate
       *               from the other "Anupam Baral" entities in search
       *   • WebSite — wires the /api/search route into Google's Sitelinks
       *               Search Box feature
       */}
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}