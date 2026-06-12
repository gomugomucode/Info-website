import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/mdx";
import { generatePostOGImage } from "@/lib/og-utils";

export async function generateOGImage({ params }: { params: Promise<{ subcategory: string; slug: string }> }) {
  const { slug } = await params;
  
  try {
    const post = getPostBySlug(slug, "notes");
    return generatePostOGImage({
      title: post.frontmatter.title,
      category: post.frontmatter.subcategory || post.frontmatter.category,
      author: "Anupam Baral",
      description: post.frontmatter.description,
    });
  } catch (e) {
    return generatePostOGImage({
      title: "Reference Note Not Found",
      category: "Security",
      author: "Anupam Baral",
    });
  }
}

export const runtime = "edge";
