"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Folder, FileText } from "lucide-react";
import { Post } from "@/lib/mdx";

interface DocsSidebarProps {
  posts: Post[];
}

const SUBCATEGORY_LABELS: Record<string, string> = {
  linux: "Linux CLI & Systems",
  networking: "Network & Sniffing",
  security: "Threat Detection",
  web: "Vulnerability Assessment",
  windows: "Windows Auditing",
};

export function DocsSidebar({ posts }: DocsSidebarProps) {
  const pathname = usePathname();
  const [openSections, setOpenSections] = React.useState<Record<string, boolean>>({
    linux: true,
    networking: true,
    security: true,
    web: true,
    windows: true,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Group posts by subcategory
  const groupedPosts = React.useMemo(() => {
    const groups: Record<string, Post[]> = {
      linux: [],
      networking: [],
      security: [],
      web: [],
      windows: [],
    };

    posts.forEach((post) => {
      // Determine subcategory based on frontmatter, or default to folder extraction
      const sub = post.frontmatter.subcategory?.toLowerCase() || "linux";
      if (groups[sub]) {
        groups[sub].push(post);
      } else {
        // Fallback for dynamic groups
        groups[sub] = [post];
      }
    });

    // Sort files within each group by title
    Object.keys(groups).forEach((key) => {
      groups[key].sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title));
    });

    return groups;
  }, [posts]);

  return (
    <aside className="w-full space-y-6 select-none pr-2">
      <div className="font-bold text-xs uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4 px-2">
        Documentation Topics
      </div>
      
      <div className="space-y-4">
        {Object.entries(groupedPosts).map(([subKey, subPosts]) => {
          if (subPosts.length === 0) return null;
          const isOpen = openSections[subKey] ?? true;
          const label = SUBCATEGORY_LABELS[subKey] || subKey.charAt(0).toUpperCase() + subKey.slice(1);

          return (
            <div key={subKey} className="space-y-1.5">
              <button
                onClick={() => toggleSection(subKey)}
                className="w-full flex items-center justify-between px-2.5 py-1.5 text-sm font-semibold rounded-lg text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-neutral-100 dark:hover:bg-neutral-900/50 cursor-pointer group text-left"
              >
                <div className="flex items-center gap-2">
                  <Folder className="h-4.5 w-4.5 text-cyan-500/80 group-hover:text-cyan-500 shrink-0" />
                  <span className="truncate">{label}</span>
                </div>
                {isOpen ? (
                  <ChevronDown className="h-3.5 w-3.5 text-neutral-400 shrink-0" />
                ) : (
                  <ChevronRight className="h-3.5 w-3.5 text-neutral-400 shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="ml-4 pl-3.5 border-l border-neutral-200 dark:border-neutral-800 space-y-1">
                  {subPosts.map((post) => {
                    const postUrl = `/blog/${post.slug}`;
                    const isActive = pathname === postUrl;

                    return (
                      <Link
                        key={post.slug}
                        href={postUrl}
                        className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[13px] font-medium transition-colors truncate ${
                          isActive
                            ? "bg-cyan-50/70 border-cyan-100 text-cyan-700 dark:bg-cyan-950/20 dark:border-cyan-900/40 dark:text-cyan-400 font-bold"
                            : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 hover:bg-neutral-50/50 dark:hover:bg-neutral-900/30"
                        }`}
                      >
                        <FileText className="h-4 w-4 opacity-70 shrink-0" />
                        <span className="truncate">{post.frontmatter.title}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
export default DocsSidebar;
