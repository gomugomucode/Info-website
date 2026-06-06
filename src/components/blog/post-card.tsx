import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { Post } from "@/lib/mdx";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const postUrl = post.type === "notes"
    ? `/notes/${(post.frontmatter.subcategory || "linux").toLowerCase()}/${post.slug}`
    : `/blog/${post.slug}`;

  return (
    <article className="group relative flex flex-col items-start justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50 hover:border-primary-500/50 dark:hover:border-primary-500/50">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={post.frontmatter.date} className="text-neutral-500 dark:text-neutral-400">
          {formatDate(post.frontmatter.date)}
        </time>
        <span className="relative z-10 rounded-full bg-neutral-100 px-3 py-1.5 font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
          {post.frontmatter.category}
        </span>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-neutral-900 group-hover:text-primary-600 dark:text-neutral-50 dark:group-hover:text-primary-500 transition-colors">
          <Link href={postUrl}>
            <span className="absolute inset-0" />
            {post.frontmatter.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
          {post.frontmatter.description}
        </p>
      </div>
      {post.frontmatter.readingTime && (
        <div className="mt-4 flex items-center gap-x-2 text-xs text-neutral-500 dark:text-neutral-400">
          <span>{post.frontmatter.readingTime}</span>
        </div>
      )}
    </article>
  );
}
