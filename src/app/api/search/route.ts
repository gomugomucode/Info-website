import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/mdx";
import { getAllTools } from "@/lib/tools";

export async function GET() {
  try {
    const posts = getAllPosts();
    const tools = getAllTools();

    const searchPosts = posts.map((post) => ({
      slug: post.slug,
      title: post.frontmatter.title || "",
      description: post.frontmatter.description || "",
      category: post.frontmatter.category || "Blog",
      tags: post.frontmatter.tags || [],
      type: post.type,
      readingTime: post.frontmatter.readingTime || "",
      date: post.frontmatter.date || "",
    }));

    const searchTools = tools.map((tool) => ({
      name: tool.name || "",
      category: tool.category || "Development",
      description: tool.description || "",
      url: tool.url || "",
      tags: tool.tags || [],
    }));

    return NextResponse.json({
      posts: searchPosts,
      tools: searchTools,
    });
  } catch (error) {
    console.error("Search API index generation failed:", error);
    return NextResponse.json(
      { error: "Failed to generate search index" },
      { status: 500 }
    );
  }
}
