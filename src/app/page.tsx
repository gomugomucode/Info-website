import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Terminal,
  Network,
  Globe,
  Monitor,
  BookOpen,
  Route,
} from "lucide-react";
import { getFeaturedNotes, getLatestBlogPosts } from "@/lib/mdx";
import { LEARNING_PATHS } from "@/lib/learning-paths";
import { PostCard } from "@/components/blog/post-card";
import { SITE_DESCRIPTION, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cybersecurity Learning Hub",
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

const TOPIC_HUBS = [
  {
    id: "linux",
    label: "Linux & CLI",
    description: "Host auditing, Kali toolkit, and defensive command reference.",
    href: "/notes/linux",
    icon: Terminal,
    color: "text-emerald-500",
    border: "hover:border-emerald-500/30",
  },
  {
    id: "networking",
    label: "Networking",
    description: "Nmap recon, Wireshark forensics, and protocol analysis.",
    href: "/notes/networking",
    icon: Network,
    color: "text-indigo-500",
    border: "hover:border-indigo-500/30",
  },
  {
    id: "security",
    label: "SecOps & Offense",
    description: "Blue team workflows, bug bounty, and authorized testing.",
    href: "/notes/security",
    icon: Shield,
    color: "text-red-500",
    border: "hover:border-red-500/30",
  },
  {
    id: "web",
    label: "Web Security",
    description: "OWASP fundamentals, scanning, and API hardening.",
    href: "/notes/web",
    icon: Globe,
    color: "text-cyan-500",
    border: "hover:border-cyan-500/30",
  },
  {
    id: "windows",
    label: "Windows",
    description: "Event log hunting, PowerShell auditing, and CMD defense.",
    href: "/notes/windows",
    icon: Monitor,
    color: "text-blue-500",
    border: "hover:border-blue-500/30",
  },
] as const;

export default function Home() {
  const featuredNotes = getFeaturedNotes(6);
  const latestBlogPosts = getLatestBlogPosts(3);
  const previewPaths = LEARNING_PATHS.slice(0, 2);

  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="pt-20 pb-10 sm:pt-32 sm:pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-8">
            <Shield className="mr-2 h-4 w-4" />
            <span>Cybersecurity Learning Hub</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-6xl mb-6">
            Learn defensive security,{" "}
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-500">
              one topic at a time.
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Structured reference guides for Linux, networking, web application security,
            Windows forensics, and authorized offensive testing — built for practitioners
            and certification prep.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-4 flex-wrap gap-y-3">
            <Link
              href="/notes"
              className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 transition-colors"
            >
              Browse Reference Library
            </Link>
            <Link
              href="/notes/linux"
              className="rounded-md border border-neutral-300 dark:border-neutral-700 px-3.5 py-2.5 text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              Start with Linux
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Topic Hubs
            </h2>
            <Link
              href="/notes"
              className="text-sm font-medium text-cyan-600 hover:text-cyan-500 dark:text-cyan-400 flex items-center gap-1"
            >
              All topics <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TOPIC_HUBS.map((hub) => {
              const Icon = hub.icon;
              return (
                <Link
                  key={hub.id}
                  href={hub.href}
                  className={`group p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 transition-all hover:shadow-md ${hub.border}`}
                >
                  <Icon className={`h-6 w-6 mb-3 ${hub.color}`} />
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {hub.label}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {hub.description}
                  </p>
                </Link>
              );
            })}
            <Link
              href="/notes"
              className="group p-5 rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-950/20 flex flex-col justify-center items-center text-center hover:border-cyan-500/40 transition-all"
            >
              <BookOpen className="h-6 w-6 mb-3 text-neutral-400 group-hover:text-cyan-500 transition-colors" />
              <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                View full library
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-2 mb-8">
            <Route className="h-5 w-5 text-cyan-500" />
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Learning Paths
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {previewPaths.map((path) => (
              <div
                key={path.id}
                className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40"
              >
                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
                  {path.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                  {path.description}
                </p>
                <ol className="mt-4 space-y-2">
                  {path.steps.map((step, i) => (
                    <li key={step.href}>
                      <Link
                        href={step.href}
                        className="text-sm font-medium text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 hover:underline"
                      >
                        {i + 1}. {step.title}
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/notes#learning-paths"
              className="text-sm font-medium text-cyan-600 hover:text-cyan-500 dark:text-cyan-400 inline-flex items-center gap-1"
            >
              See all learning paths <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {featuredNotes.length > 0 && (
        <section className="px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Featured Guides
              </h2>
              <Link
                href="/notes"
                className="text-sm font-medium text-cyan-600 hover:text-cyan-500 dark:text-cyan-400 flex items-center gap-1"
              >
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredNotes.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {latestBlogPosts.length > 0 && (
        <section className="px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Latest Articles
              </h2>
              <Link
                href="/blog"
                className="text-sm font-medium text-cyan-600 hover:text-cyan-500 dark:text-cyan-400 flex items-center gap-1"
              >
                View blog <ArrowRight className="h-4 w-4" />
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
