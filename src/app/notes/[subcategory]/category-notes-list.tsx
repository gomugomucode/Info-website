"use client";

import * as React from "react";
import Link from "next/link";
import { Search, BarChart2, Clock, Calendar, ArrowRight, Tag, X } from "lucide-react";
import type { Post } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

interface CategoryNotesListProps {
  initialPosts: Post[];
  subcategory: string;
  themeColor: string;
}

const DIFFICULTY_COLORS: Record<string, string> = {
  beginner: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/30",
  intermediate: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900/30",
  advanced: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/20 dark:text-red-400 dark:border-red-900/30",
};

const THEME_ACCENT_COLORS: Record<string, string> = {
  emerald: "focus:ring-emerald-500/50 focus:border-emerald-500 text-emerald-500 bg-emerald-500/10",
  indigo: "focus:ring-indigo-500/50 focus:border-indigo-500 text-indigo-500 bg-indigo-500/10",
  red: "focus:ring-red-500/50 focus:border-red-500 text-red-500 bg-red-500/10",
  cyan: "focus:ring-cyan-500/50 focus:border-cyan-500 text-cyan-500 bg-cyan-500/10",
  blue: "focus:ring-blue-500/50 focus:border-blue-500 text-blue-500 bg-blue-500/10",
};

export function CategoryNotesList({ initialPosts, subcategory, themeColor }: CategoryNotesListProps) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedDifficulty, setSelectedDifficulty] = React.useState<string>("all");
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  // Extract all unique tags dynamically
  const uniqueTags = React.useMemo(() => {
    const tagsSet = new Set<string>();
    initialPosts.forEach((post) => {
      post.frontmatter.tags?.forEach((tag) => tagsSet.add(tag.toLowerCase()));
    });
    return Array.from(tagsSet).sort();
  }, [initialPosts]);

  // Toggle tag selection
  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Filter posts
  const filteredPosts = React.useMemo(() => {
    return initialPosts.filter((post) => {
      // Search query filter
      const matchesSearch =
        searchQuery === "" ||
        post.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.frontmatter.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.frontmatter.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      // Difficulty filter
      const matchesDifficulty =
        selectedDifficulty === "all" ||
        post.frontmatter.difficulty?.toLowerCase() === selectedDifficulty;

      // Tags filter (must match all selected tags)
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((selectedTag) =>
          post.frontmatter.tags?.map((t) => t.toLowerCase()).includes(selectedTag)
        );

      return matchesSearch && matchesDifficulty && matchesTags;
    });
  }, [initialPosts, searchQuery, selectedDifficulty, selectedTags]);

  const activeFocusRing = THEME_ACCENT_COLORS[themeColor] || THEME_ACCENT_COLORS.cyan;

  return (
    <div className="space-y-8">
      {/* Filtering Toolbar */}
      <div className="space-y-4">
        
        {/* Search & Difficulty Select */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 dark:text-neutral-500" />
            <input
              type="text"
              placeholder="Search reference guides, commands, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 ${activeFocusRing}`}
            />
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 md:pb-0">
            {["all", "beginner", "intermediate", "advanced"].map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold capitalize transition-colors cursor-pointer border ${
                  selectedDifficulty === diff
                    ? "bg-neutral-900 border-neutral-900 text-white dark:bg-neutral-100 dark:border-neutral-100 dark:text-neutral-950"
                    : "bg-white border-neutral-200 hover:bg-neutral-50 text-neutral-600 dark:bg-neutral-950 dark:border-neutral-800 dark:hover:bg-neutral-900 dark:text-neutral-400"
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

        {/* Tag Cloud */}
        {uniqueTags.length > 0 && (
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mr-1 flex items-center gap-1 shrink-0 select-none">
              <Tag className="h-3 w-3" />
              Filter Tags:
            </span>
            {uniqueTags.map((tag) => {
              const isSelected = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1 ${
                    isSelected
                      ? "bg-cyan-500/10 text-cyan-600 border border-cyan-500/20 dark:bg-cyan-500/20 dark:text-cyan-400"
                      : "bg-neutral-50 hover:bg-neutral-100 text-neutral-600 border border-neutral-200 dark:bg-neutral-950 dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-900"
                  }`}
                >
                  #{tag}
                  {isSelected && <X className="h-3 w-3" />}
                </button>
              );
            })}
            {selectedTags.length > 0 && (
              <button
                onClick={() => setSelectedTags([])}
                className="text-xs font-bold text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors ml-1 cursor-pointer"
              >
                Clear all
              </button>
            )}
          </div>
        )}
      </div>

      {/* Grid listing */}
      {filteredPosts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2">
          {filteredPosts.map((post) => {
            const diffKey = (post.frontmatter.difficulty || "beginner").toLowerCase();
            const diffColor = DIFFICULTY_COLORS[diffKey] || DIFFICULTY_COLORS.beginner;
            
            return (
              <article
                key={post.slug}
                className="group relative flex flex-col justify-between p-6 rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900/30 hover:border-cyan-500/50 dark:hover:border-cyan-500/40 hover:shadow-md transition-all"
              >
                <div className="space-y-4">
                  {/* Meta / Difficulty Badge */}
                  <div className="flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <time dateTime={post.frontmatter.date}>{formatDate(post.frontmatter.date)}</time>
                    </span>
                    
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border capitalize ${diffColor}`}>
                      {post.frontmatter.difficulty || "Beginner"}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
                      <Link href={`/notes/${subcategory}/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.frontmatter.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400 line-clamp-3 font-normal">
                      {post.frontmatter.description}
                    </p>
                  </div>
                </div>

                {/* Footer specs */}
                <div className="pt-6 border-t border-neutral-50 dark:border-neutral-900/60 mt-4 flex items-center justify-between text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.frontmatter.readingTime || "10 min read"}
                  </span>
                  
                  <span className="inline-flex items-center gap-1 text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform">
                    Read manual
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 border border-dashed border-neutral-300 dark:border-neutral-800 rounded-2xl">
          <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
            No reference guides found matching the selected filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedDifficulty("all");
              setSelectedTags([]);
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-xs font-bold text-white dark:bg-neutral-100 dark:hover:bg-neutral-200 dark:text-neutral-950 cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
export default CategoryNotesList;
