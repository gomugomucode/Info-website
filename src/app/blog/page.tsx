import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import { PostCard } from "@/components/blog/post-card";
import { SearchBar } from "@/components/ui/search-bar";
import { absoluteUrl } from "@/lib/site";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Cybersecurity Articles & Updates",
  description:
    "Articles, release notes, and commentary on cybersecurity tools, techniques, and learning resources.",
  alternates: {
    canonical: absoluteUrl("/blog"),
  },
};

const CATEGORY_LABELS: Record<string, string> = {
  cheatsheets: "Quick Reference",
  notes: "Reference Guides",
  blog: "Articles",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams.q?.toLowerCase();
  const category = resolvedSearchParams.category?.toLowerCase();

  let posts = getAllPosts(["blog", "cheatsheets"]);

  if (query) {
    posts = posts.filter(
      (post) =>
        post.frontmatter.title.toLowerCase().includes(query) ||
        post.frontmatter.description.toLowerCase().includes(query) ||
        post.frontmatter.tags?.some((t) => t.toLowerCase().includes(query)),
    );
  }

  if (category === "cheatsheets") {
    posts = posts.filter((post) => post.type === "cheatsheets");
  } else if (category === "blog") {
    posts = posts.filter((post) => post.type === "blog");
  }

  const pageTitle = category
    ? (CATEGORY_LABELS[category] ??
      `${category.charAt(0).toUpperCase()}${category.slice(1)}`)
    : "Cybersecurity Articles";

  const pageDesc =
    category === "cheatsheets"
      ? "Quick-reference cheatsheets for security tools and workflows."
      : category
        ? `Browse ${pageTitle.toLowerCase()} on the cybersecurity learning hub.`
        : "Articles and updates from the cybersecurity reference library.";

  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8 mb-12">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-extrabold text-4xl tracking-tight text-neutral-900 dark:text-neutral-50 lg:text-5xl">
            {pageTitle}
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            {pageDesc}
          </p>
          {!category && (
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Looking for in-depth guides? Visit the{" "}
              <a href="/notes" className="text-cyan-600 hover:underline dark:text-cyan-400">
                reference library
              </a>
              .
            </p>
          )}
        </div>
      </div>

      <Suspense
        fallback={
          <div className="h-10 w-full max-w-sm mb-10 rounded-md bg-neutral-100 dark:bg-neutral-800 animate-pulse" />
        }
      >
        <SearchBar />
      </Suspense>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12 space-y-3">
          <p className="text-neutral-600 dark:text-neutral-400">
            No posts found matching your criteria.
          </p>
          {category === "cheatsheets" && (
            <p className="text-sm text-neutral-500">
              Cheatsheets are being consolidated into{" "}
              <a href="/notes" className="text-cyan-600 hover:underline dark:text-cyan-400">
                topic hubs
              </a>
              .
            </p>
          )}
        </div>
      )}
    </div>
  );
}
