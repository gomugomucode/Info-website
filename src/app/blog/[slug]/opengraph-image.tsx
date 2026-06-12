import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/mdx";
import { generatePostOGImage } from "@/lib/og-utils";

export async function generateOGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  try {
    const post = getPostBySlug(slug, "blog");
    return generatePostOGImage({
      title: post.frontmatter.title,
      category: post.frontmatter.category,
      author: "Anupam Baral",
      description: post.frontmatter.description,
    });
  } catch (e) {
    return generatePostOGImage({
      title: "Article Not Found",
      category: "Blog",
      author: "Anupam Baral",
    });
  }
}

export const runtime = "edge";
