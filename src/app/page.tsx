import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { getFeaturedPosts, getLatestPosts } from "@/lib/mdx";
import { PostCard } from "@/components/blog/post-card";
import { CategoryBadge } from "@/components/blog/category-badge";

const CATEGORIES = [
  "Tutorials",
  "Tech Notes",
  "Case Studies",
  "Journal",
];

export default function Home() {
  const featuredPosts = getFeaturedPosts(3);
  const latestPosts = getLatestPosts(3);

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="pt-20 pb-10 sm:pt-32 sm:pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border border-primary-500/30 bg-primary-500/10 px-3 py-1 text-sm font-medium text-primary-600 dark:text-primary-400 mb-8">
            <Terminal className="mr-2 h-4 w-4" />
            <span>Developer Knowledge Hub</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-6xl mb-6">
            Building software, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
              sharing the journey.
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Welcome to my knowledge hub. Here I share tutorials, AI experiments, developer notes, Next.js guides, and real-world full-stack engineering insights.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/blog"
              className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
            >
              Start Reading
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tutorials */}
      {featuredPosts.length > 0 && (
        <section className="px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Featured Posts</h2>
              <Link href="/blog" className="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 flex items-center gap-1">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="px-4">
        <div className="container mx-auto max-w-5xl rounded-3xl bg-neutral-50 dark:bg-neutral-900/30 p-8 sm:p-12 border border-neutral-200 dark:border-neutral-800 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">Explore by Category</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {CATEGORIES.map((category) => (
              <CategoryBadge key={category} category={category} className="px-6 py-3 text-sm" />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      {latestPosts.length > 0 && (
        <section className="px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Latest Articles</h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {latestPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
