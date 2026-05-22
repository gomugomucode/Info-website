import { getAllPosts } from "@/lib/mdx";
import { PostCard } from "@/components/blog/post-card";
import { SearchBar } from "@/components/ui/search-bar";
import { Suspense } from "react";

export const metadata = {
  title: "Developer Knowledge Base",
  description: "Browse cheatsheets, blog posts, developer notes, and quick references.",
};

const CATEGORY_LABELS: Record<string, string> = {
  cheatsheets: "Cheatsheets",
  notes: "Developer Notes",
  blog: "Blog",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams.q?.toLowerCase();
  const category = resolvedSearchParams.category?.toLowerCase();

  let posts = getAllPosts();

  if (query) {
    posts = posts.filter(
      (post) =>
        post.frontmatter.title.toLowerCase().includes(query) ||
        post.frontmatter.description.toLowerCase().includes(query) ||
        post.frontmatter.tags?.some((t) => t.toLowerCase().includes(query))
    );
  }

  if (category) {
    posts = posts.filter(
      (post) =>
        post.frontmatter.category?.toLowerCase() === category ||
        post.type === category
    );
  }

  const pageTitle = category
    ? CATEGORY_LABELS[category] ?? `${category.charAt(0).toUpperCase()}${category.slice(1)}`
    : "Developer Knowledge Base";

  const pageDesc = category
    ? `Browse all ${pageTitle.toLowerCase()} on anupam.info.`
    : "Cheatsheets, blog posts, developer notes, and quick references — all in one place.";

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
        </div>
      </div>

      <Suspense fallback={<div className="h-10 w-full max-w-sm mb-10 rounded-md bg-neutral-100 dark:bg-neutral-800 animate-pulse" />}>
        <SearchBar />
      </Suspense>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-neutral-600 dark:text-neutral-400">No posts found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
