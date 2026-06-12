import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts, parseTOC, getRelatedPosts, Post } from "@/lib/mdx";
import { notFound, permanentRedirect } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, BarChart } from "lucide-react";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { TableOfContents } from "@/components/blog/toc";
import { CategoryBadge } from "@/components/blog/category-badge";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { Pre } from "@/components/blog/pre";
import { PostCard } from "@/components/blog/post-card";

// New components
import { Callout } from "@/components/blog/callout";
import { TerminalCommand } from "@/components/blog/terminal-command";
import { Breadcrumbs } from "@/components/blog/breadcrumbs";
import { DocsSidebar } from "@/components/blog/docs-sidebar";
import { MobileTocDrawer } from "@/components/blog/mobile-toc-drawer";

export async function generateStaticParams() {
  const posts = getAllPosts(["blog", "cheatsheets"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  try {
    const post = getPostBySlug(resolvedParams.slug);
    return {
      title: `${post.frontmatter.title} | Security Knowledge Base`,
      description: post.frontmatter.description,
      openGraph: {
        title: post.frontmatter.title,
        description: post.frontmatter.description,
      },
      twitter: {
        card: "summary_large_image",
        title: post.frontmatter.title,
        description: post.frontmatter.description,
      },
    };
  } catch (e) {
    return {
      title: "Post Not Found",
    };
  }
}

// Custom components for MDX
const components = {
  h1: (props: any) => <h1 className="mt-8 mb-4 text-3xl font-extrabold tracking-tight lg:text-4xl text-neutral-900 dark:text-white" {...props} />,
  h2: (props: any) => <h2 className="mt-10 mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800 text-2xl font-semibold tracking-tight transition-colors scroll-m-20 text-neutral-900 dark:text-neutral-50" {...props} />,
  h3: (props: any) => <h3 className="mt-8 mb-4 text-xl font-semibold tracking-tight scroll-m-20 text-neutral-900 dark:text-neutral-100" {...props} />,
  p: (props: any) => <p className="leading-7 [&:not(:first-child)]:mt-4 text-neutral-700 dark:text-neutral-300" {...props} />,
  ul: (props: any) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-neutral-700 dark:text-neutral-300" {...props} />,
  ol: (props: any) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2 text-neutral-700 dark:text-neutral-300" {...props} />,
  li: (props: any) => <li {...props} />,
  blockquote: (props: any) => (
    <blockquote className="mt-6 border-l-2 border-neutral-300 dark:border-neutral-700 pl-6 italic text-neutral-600 dark:text-neutral-400" {...props} />
  ),
  pre: Pre,
  code: (props: any) => {
    if (props["data-language"]) {
      return <code {...props} />;
    }
    return (
      <code className="relative rounded bg-neutral-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200" {...props} />
    );
  },
  a: (props: any) => (
    <a className="font-medium text-cyan-600 underline underline-offset-4 hover:text-cyan-500 dark:text-cyan-400" {...props} />
  ),
  // Register custom elements
  Callout,
  TerminalCommand,
};

import { visit } from "unist-util-visit";

const extractRawCodePlugin = () => (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children;
      if (codeEl?.tagName !== "code") return;
      node.properties["raw"] = codeEl.children?.[0]?.value;
    }
  });
};

const mdxOptions = {
  mdxOptions: {
    rehypePlugins: [
      rehypeSlug,
      extractRawCodePlugin,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          keepBackground: true,
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
        },
      ],
    ],
  },
};

const difficultyColors: Record<string, string> = {
  beginner: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/40",
  intermediate: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900/40",
  advanced: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/20 dark:text-red-400 dark:border-red-900/40",
};

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  let post: Post;
  try {
    post = getPostBySlug(resolvedParams.slug);
  } catch (e) {
    notFound();
  }

  if (post.type === "notes") {
    const sub = post.frontmatter.subcategory?.toLowerCase() || "linux";
    permanentRedirect(`/notes/${sub}/${post.slug}`);
  }

  const toc = await parseTOC(post.content);
  const relatedPosts = getRelatedPosts(post, 2);

  // Load all posts of the same category to render the Docs Sidebar
  const allNotesPosts = getAllPosts(["notes"]);
  // After the permanentRedirect above, only non-notes (blog) posts reach here.
  // isNotesCategory is always false at this point; kept for layout-branch clarity.
  const isNotesCategory = false;

  // Calculate Next and Previous links
  let prevPost: Post | null = null;
  let nextPost: Post | null = null;
  if (isNotesCategory && allNotesPosts.length > 0) {
    // Sort all notes consistently by folder then filename/slug
    const sortedNotes = [...allNotesPosts].sort((a, b) => {
      const subA = a.frontmatter.subcategory || "";
      const subB = b.frontmatter.subcategory || "";
      if (subA !== subB) return subA.localeCompare(subB);
      return a.frontmatter.title.localeCompare(b.frontmatter.title);
    });

    const currentIndex = sortedNotes.findIndex((p) => p.slug === post.slug);
    if (currentIndex !== -1) {
      prevPost = currentIndex > 0 ? sortedNotes[currentIndex - 1] : null;
      nextPost = currentIndex < sortedNotes.length - 1 ? sortedNotes[currentIndex + 1] : null;
    }
  }

  const diffKey = (post.frontmatter.difficulty || "Beginner").toLowerCase();
  const diffBadgeColor = difficultyColors[diffKey] || difficultyColors.beginner;

  return (
    <>
      <ReadingProgress />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        
        {/* Breadcrumb Navigation at top */}
        <div className="mb-6 max-w-3xl lg:max-w-none mx-auto">
          <Breadcrumbs subcategory={post.frontmatter.subcategory} title={post.frontmatter.title} />
        </div>

        {isNotesCategory ? (
          /* 3-Column Docs Layout */
          <div className="flex flex-col lg:flex-row gap-10 relative">
            
            {/* LEFT COLUMN: Sidebar Navigation */}
            <aside className="hidden lg:block w-[240px] shrink-0 border-r border-neutral-100 dark:border-neutral-900 pr-6">
              <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-none">
                <DocsSidebar posts={allNotesPosts} />
              </div>
            </aside>

            {/* MIDDLE COLUMN: Core Content Pane */}
            <main className="flex-1 w-full lg:max-w-[700px] mx-auto min-w-0">
              <header className="mb-10 pb-6 border-b border-neutral-100 dark:border-neutral-900">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4">
                  {post.frontmatter.title}
                </h1>
                
                <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400 flex-wrap font-medium">
                  <time dateTime={post.frontmatter.date}>{formatDate(post.frontmatter.date)}</time>
                  <span>•</span>
                  <span>{post.frontmatter.readingTime || "5 min read"}</span>
                  
                  {/* Difficulty Badge */}
                  {post.frontmatter.difficulty && (
                    <>
                      <span>•</span>
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${diffBadgeColor}`}>
                        <BarChart className="h-3 w-3" />
                        {post.frontmatter.difficulty}
                      </span>
                    </>
                  )}
                </div>
              </header>

              {/* MDX Body Remote Component */}
              <div className="prose prose-neutral dark:prose-invert max-w-none w-full">
                {/* @ts-expect-error - RSC Async component */}
                <MDXRemote source={post.content} components={components} options={mdxOptions} />
              </div>

              {/* PREV / NEXT Link panel */}
              {(prevPost || nextPost) && (
                <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row gap-4 justify-between">
                  {prevPost ? (
                    <Link
                      href={`/blog/${prevPost.slug}`}
                      className="flex-1 group flex items-start gap-3 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/40 hover:bg-neutral-50/50 dark:hover:bg-neutral-900/10 transition-all text-left"
                    >
                      <ChevronLeft className="h-5 w-5 mt-0.5 text-neutral-400 group-hover:text-cyan-500 transition-colors shrink-0" />
                      <div className="space-y-1 truncate">
                        <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Previous</div>
                        <div className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors truncate">
                          {prevPost.frontmatter.title}
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="flex-1 hidden sm:block" />
                  )}

                  {nextPost ? (
                    <Link
                      href={`/blog/${nextPost.slug}`}
                      className="flex-1 group flex items-start justify-between gap-3 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/40 hover:bg-neutral-50/50 dark:hover:bg-neutral-900/10 transition-all text-right"
                    >
                      <div className="space-y-1 truncate text-left sm:text-right flex-1">
                        <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Next</div>
                        <div className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors truncate">
                          {nextPost.frontmatter.title}
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 mt-0.5 text-neutral-400 group-hover:text-cyan-500 transition-colors shrink-0" />
                    </Link>
                  ) : (
                    <div className="flex-1 hidden sm:block" />
                  )}
                </div>
              )}
            </main>

            {/* RIGHT COLUMN: Table of Contents */}
            <aside className="hidden lg:block w-[240px] shrink-0">
              <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-none pl-4 border-l border-neutral-100 dark:border-neutral-900">
                <TableOfContents toc={toc} />
              </div>
            </aside>
            
            {/* Mobile TOC Drawer floating button & content panel */}
            <MobileTocDrawer toc={toc} />
          </div>
        ) : (
          /* Standard 1-Column Layout for general blog articles */
          <article className="max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center mb-8 text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to knowledge base
            </Link>
            
            <div className="mb-10 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl mb-6">
                {post.frontmatter.title}
              </h1>
              <div className="flex items-center justify-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 flex-wrap">
                <time dateTime={post.frontmatter.date}>{formatDate(post.frontmatter.date)}</time>
                {post.frontmatter.readingTime && (
                  <>
                    <span>•</span>
                    <span>{post.frontmatter.readingTime}</span>
                  </>
                )}
                <span>•</span>
                <CategoryBadge category={post.frontmatter.category} className="text-xs py-1" />
              </div>
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {/* @ts-expect-error - RSC Async component */}
              <MDXRemote source={post.content} components={components} options={mdxOptions} />
            </div>
          </article>
        )}

        {/* Read Next Section */}
        {relatedPosts.length > 0 && (
          <div className="mt-24 border-t border-neutral-200 dark:border-neutral-800 pt-12 max-w-3xl lg:max-w-none mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-8">
              Read Next
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 max-w-4xl">
              {relatedPosts.map((relatedPost) => (
                <PostCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
