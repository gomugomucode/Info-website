import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs, getAllPosts, parseTOC, getRelatedPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { TableOfContents } from "@/components/blog/toc";
import { CategoryBadge } from "@/components/blog/category-badge";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { Pre } from "@/components/blog/pre";
import { PostCard } from "@/components/blog/post-card";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  try {
    const post = getPostBySlug(resolvedParams.slug);
    return {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
    };
  } catch (e) {
    return {
      title: "Post Not Found",
    };
  }
}

// Custom components for MDX
const components = {
  h1: (props: any) => <h1 className="mt-8 mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl" {...props} />,
  h2: (props: any) => <h2 className="mt-10 mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800 text-3xl font-semibold tracking-tight transition-colors scroll-m-20" {...props} />,
  h3: (props: any) => <h3 className="mt-8 mb-4 text-2xl font-semibold tracking-tight scroll-m-20" {...props} />,
  p: (props: any) => <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />,
  ul: (props: any) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
  ol: (props: any) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />,
  li: (props: any) => <li {...props} />,
  blockquote: (props: any) => (
    <blockquote className="mt-6 border-l-2 border-neutral-300 dark:border-neutral-700 pl-6 italic text-neutral-600 dark:text-neutral-400" {...props} />
  ),
  pre: Pre,
  code: (props: any) => {
    // rehype-pretty-code handles syntax highlighting block code differently
    // For inline code, we want our custom style
    if (props["data-language"]) {
      return <code {...props} />;
    }
    return (
      <code className="relative rounded bg-neutral-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200" {...props} />
    );
  },
  a: (props: any) => (
    <a className="font-medium text-primary-600 underline underline-offset-4 hover:text-primary-500 dark:text-primary-400" {...props} />
  ),
};

import { visit } from "unist-util-visit";

const extractRawCodePlugin = () => (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children;
      if (codeEl.tagName !== "code") return;
      node.properties["raw"] = codeEl.children?.[0].value;
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
            // Prevent lines from collapsing in `display: grid` mode, and allow empty lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
        },
      ],
    ],
  },
};

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  let post;
  try {
    post = getPostBySlug(resolvedParams.slug);
  } catch (e) {
    notFound();
  }

  const toc = await parseTOC(post.content);
  const relatedPosts = getRelatedPosts(post, 2);

  return (
    <>
      <ReadingProgress />
      <article className="container mx-auto max-w-5xl px-4 py-16 sm:py-24">
        <Link href="/blog" className="inline-flex items-center mb-8 text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to knowledge base
        </Link>
        
        <div className="mb-10 text-center max-w-3xl mx-auto">
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

        <div className="flex flex-col lg:flex-row gap-12 relative">
          <div className="prose prose-neutral dark:prose-invert max-w-none flex-1 w-full lg:max-w-[700px]">
            {/* @ts-expect-error - RSC Async component */}
            <MDXRemote source={post.content} components={components} options={mdxOptions} />
          </div>

          <aside className="hidden lg:block w-[250px] shrink-0">
            <div className="sticky top-24">
              <TableOfContents toc={toc} />
            </div>
          </aside>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-24 border-t border-neutral-200 dark:border-neutral-800 pt-12">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-8">
              Read Next
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-3xl">
              {relatedPosts.map((relatedPost) => (
                <PostCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
