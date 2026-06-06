import Link from "next/link";
import { ArrowRight, Terminal, BookOpen, FileSpreadsheet, Notebook, Wrench } from "lucide-react";
import { getFeaturedCheatsheets, getLatestBlogPosts, getLatestNotes } from "@/lib/mdx";
import { PostCard } from "@/components/blog/post-card";
import { CategoryBadge } from "@/components/blog/category-badge";

const CATEGORIES = [
  { label: "Cheatsheets", url: "/blog?category=cheatsheets", icon: FileSpreadsheet, color: "text-indigo-500" },
  { label: "Dev Notes", url: "/notes", icon: Notebook, color: "text-emerald-500" },
  { label: "Blog", url: "/blog", icon: BookOpen, color: "text-cyan-500" },
  { label: "AI Tools", url: "/tools", icon: Wrench, color: "text-cyan-400" },
];

export default function Home() {
  const featuredCheatsheets = getFeaturedCheatsheets(3);
  const latestBlogPosts = getLatestBlogPosts(3);
  const latestNotes = getLatestNotes(3);

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
            My personal knowledge system — cheatsheets, developer notes, AI experiments, and full-stack engineering insights.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-4 flex-wrap gap-y-3">
            <Link
              href="/blog?category=cheatsheets"
              className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
            >
              Browse Cheatsheets
            </Link>
            <Link
              href="/blog"
              className="rounded-md border border-neutral-300 dark:border-neutral-700 px-3.5 py-2.5 text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              Read the Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Cheatsheets */}
      {featuredCheatsheets.length > 0 && (
        <section className="px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Featured Cheatsheets</h2>
              <Link href="/blog?category=cheatsheets" className="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 flex items-center gap-1">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredCheatsheets.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Explore by Category */}
      <section className="px-4">
        <div className="container mx-auto max-w-5xl rounded-3xl bg-neutral-50 dark:bg-neutral-900/30 p-8 sm:p-12 border border-neutral-200 dark:border-neutral-800 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">Explore by Category</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.label}
                href={cat.url}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-400 dark:hover:border-cyan-500/30 transition-all shadow-sm hover:shadow-md"
              >
                <cat.icon className={`h-4 w-4 ${cat.color}`} />
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Developer Notes */}
      {latestNotes.length > 0 && (
        <section className="px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Latest Dev Notes</h2>
              <Link href="/notes" className="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 flex items-center gap-1">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {latestNotes.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Blog Posts */}
      {latestBlogPosts.length > 0 && (
        <section className="px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Latest Articles</h2>
              <Link href="/blog" className="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 flex items-center gap-1">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {latestBlogPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
