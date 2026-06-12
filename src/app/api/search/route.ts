import { NextResponse, NextRequest } from "next/server";
import { getAllPosts } from "@/lib/mdx";
import { getAllTools } from "@/lib/tools";
import { sortItemsByScore } from "@/lib/search";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");

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
      subcategory: post.frontmatter.subcategory || "",
    }));

    const searchTools = tools.map((tool) => ({
      name: tool.name || "",
      title: tool.name || "", // normalized for search logic
      category: tool.category || "Development",
      description: tool.description || "",
      url: tool.url || "",
      tags: tool.tags || [],
    }));

    if (query) {
      return NextResponse.json({
        posts: sortItemsByScore(searchPosts, query),
        tools: sortItemsByScore(searchTools, query),
      });
    }

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
