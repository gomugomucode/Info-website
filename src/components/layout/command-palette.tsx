"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  BookOpen,
  Wrench,
  History,
  CornerDownLeft,
  X,
  FileSpreadsheet,
  Notebook,
  ExternalLink,
  ChevronRight,
  Command,
} from "lucide-react";

interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  url: string;
  type: "blog" | "cheatsheets" | "notes" | "tool";
  isExternal?: boolean;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const [activeTab, setActiveTab] = React.useState<"all" | "blog" | "cheatsheets" | "notes" | "tools">("all");
  const [items, setItems] = React.useState<SearchItem[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [recents, setRecents] = React.useState<SearchItem[]>([]);
  const [os, setOs] = React.useState<"mac" | "win">("win");

  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);

  // Detect OS for keyboard shortcuts hint
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      setOs(isMac ? "mac" : "win");
    }
  }, []);

  // Handle global keyboard shortcuts to toggle the palette
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle, but we handle safe triggers
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Load recent searches from localStorage
  React.useEffect(() => {
    if (isOpen) {
      const stored = localStorage.getItem("anupam-info-recent-searches");
      if (stored) {
        try {
          setRecents(JSON.parse(stored));
        } catch (e) {
          console.error("Failed to parse recent searches", e);
        }
      }
    }
  }, [isOpen]);

  // Fetch index data on opening
  React.useEffect(() => {
    if (isOpen && items.length === 0) {
      const fetchIndex = async () => {
        setLoading(true);
        try {
          const res = await fetch("/api/search");
          if (!res.ok) throw new Error("Search index fetch failed");
          const data = await res.json();

          const mappedPosts: SearchItem[] = (data.posts || []).map((post: any) => ({
            id: `post-${post.slug}`,
            title: post.title,
            description: post.description,
            category: post.category,
            tags: post.tags,
            url: `/blog/${post.slug}`,
            type: post.type,
          }));

          const mappedTools: SearchItem[] = (data.tools || []).map((tool: any) => ({
            id: `tool-${tool.name.toLowerCase()}`,
            title: tool.name,
            description: tool.description,
            category: tool.category,
            tags: tool.tags,
            url: tool.url,
            type: "tool",
            isExternal: true,
          }));

          setItems([...mappedPosts, ...mappedTools]);
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      fetchIndex();
    }
  }, [isOpen, items.length]);

  // Lock body scroll when open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
      setActiveTab("all");
      setSelectedIndex(0);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Filter items based on active tab and search query
  const filteredItems = React.useMemo(() => {
    let result = items;

    // Filter by tab
    if (activeTab === "blog") {
      result = result.filter((item) => item.type === "blog");
    } else if (activeTab === "cheatsheets") {
      result = result.filter((item) => item.type === "cheatsheets");
    } else if (activeTab === "tools") {
      result = result.filter((item) => item.type === "tool");
    } else if (activeTab === "notes") {
      result = result.filter((item) => item.type === "notes");
    }

    // Filter by query
    if (query.trim() !== "") {
      const q = query.toLowerCase();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [items, activeTab, query]);

  // Reset selected index when filters change
  React.useEffect(() => {
    setSelectedIndex(0);
  }, [query, activeTab]);

  // Save selected search to recents
  const saveToRecents = (item: SearchItem) => {
    const nextRecents = [item, ...recents.filter((r) => r.id !== item.id)].slice(0, 5);
    setRecents(nextRecents);
    localStorage.setItem("anupam-info-recent-searches", JSON.stringify(nextRecents));
  };

  const handleSelect = (item: SearchItem) => {
    saveToRecents(item);
    onClose();
    if (item.isExternal) {
      window.open(item.url, "_blank", "noopener,noreferrer");
    } else {
      router.push(item.url);
    }
  };

  // Keyboard navigation inside modal
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < (query ? filteredItems.length : recents.length + 6) - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : (query ? filteredItems.length : recents.length + 6) - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (query && filteredItems[selectedIndex]) {
        handleSelect(filteredItems[selectedIndex]);
      } else if (!query) {
        // Handle select when query is empty (combines recents and quick nav)
        const recentCount = recents.length;
        if (selectedIndex < recentCount) {
          handleSelect(recents[selectedIndex]);
        } else {
          // It's a quick nav item
          const navIndex = selectedIndex - recentCount;
          const quickNavs = [
            { url: "/blog", external: false },
            { url: "/blog?category=cheatsheets", external: false },
            { url: "/blog?category=notes", external: false },
            { url: "/tools", external: false },
            { url: "/about", external: false },
          ];
          const target = quickNavs[navIndex];
          if (target) {
            onClose();
            router.push(target.url);
          }
        }
      }
    } else if (e.key === "Tab") {
      // Rotate through categories tab
      e.preventDefault();
      const tabs: Array<"all" | "blog" | "cheatsheets" | "notes" | "tools"> = ["all", "blog", "cheatsheets", "notes", "tools"];
      const nextIndex = (tabs.indexOf(activeTab) + (e.shiftKey ? -1 : 1) + tabs.length) % tabs.length;
      setActiveTab(tabs[nextIndex]);
    }
  };

  // Auto-scroll selected element into view
  React.useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector('[data-active="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/60 backdrop-blur-sm dark:bg-neutral-950/80"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0 }}
            className="relative w-full max-w-xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 shadow-2xl rounded-xl overflow-hidden focus:outline-none flex flex-col max-h-[80vh]"
            onKeyDown={handleKeyDown}
          >
            {/* Search Input Box */}
            <div className="flex items-center px-4 py-3.5 border-b border-neutral-200 dark:border-neutral-800">
              <Search className="h-5 w-5 text-neutral-400 dark:text-neutral-500 mr-3 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search articles, notes, AI tools, cheatsheets..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-neutral-900 dark:text-neutral-50 placeholder-neutral-400 dark:placeholder-neutral-500 text-sm focus:outline-none font-medium leading-none"
              />
              <div className="flex items-center gap-1.5 shrink-0 ml-2">
                <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-0.5 rounded border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 px-1.5 font-mono text-[9px] font-medium text-neutral-400 dark:text-neutral-500">
                  ESC
                </kbd>
                <button
                  onClick={onClose}
                  className="p-1 rounded-md text-neutral-400 dark:text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-700 dark:hover:text-neutral-200 cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex items-center gap-1 px-3 py-2 bg-neutral-50/50 dark:bg-neutral-950/20 border-b border-neutral-200 dark:border-neutral-800 overflow-x-auto scrollbar-none">
              {(["all", "blog", "cheatsheets", "notes", "tools"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 rounded-md text-[11px] font-semibold tracking-wider uppercase transition-colors shrink-0 cursor-pointer ${
                    activeTab === tab
                      ? "bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400 border border-cyan-500/20"
                      : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 border border-transparent"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Results Panel */}
            <div ref={listRef} className="flex-1 overflow-y-auto p-2 min-h-[150px] max-h-[50vh] scrollbar-thin">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-10 gap-3 text-neutral-400">
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-neutral-300 dark:border-neutral-700 border-t-cyan-500" />
                  <p className="text-xs font-medium">Pre-fetching knowledge hub index...</p>
                </div>
              ) : query ? (
                /* Matching Results */
                filteredItems.length > 0 ? (
                  <div className="space-y-1">
                    {filteredItems.map((item, idx) => {
                      const isActive = idx === selectedIndex;
                      const Icon = item.type === "tool" ? Wrench : item.type === "notes" ? Notebook : item.type === "cheatsheets" ? FileSpreadsheet : BookOpen;
                      return (
                        <div
                          key={item.id}
                          data-active={isActive}
                          onClick={() => handleSelect(item)}
                          onMouseEnter={() => setSelectedIndex(idx)}
                          className={`flex items-start p-3 rounded-lg cursor-pointer transition-colors group relative ${
                            isActive
                              ? "bg-slate-100/80 dark:bg-slate-800/50 border-l-2 border-cyan-500 pl-2.5"
                              : "hover:bg-slate-50/50 dark:hover:bg-slate-900/30 border-l-2 border-transparent"
                          }`}
                        >
                          <div
                            className={`p-2 rounded-md mr-3 shrink-0 ${
                              isActive
                                ? "bg-cyan-500/10 text-cyan-500 dark:bg-cyan-500/20 dark:text-cyan-400"
                                : "bg-neutral-100 text-neutral-500 dark:bg-neutral-800/60 dark:text-neutral-400"
                            }`}
                          >
                            <Icon className="h-4.5 w-4.5" />
                          </div>
                          <div className="flex-1 min-w-0 pr-8">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors truncate">
                                {item.title}
                              </span>
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400 shrink-0">
                                {item.category}
                              </span>
                            </div>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-0.5 font-normal">
                              {item.description}
                            </p>
                          </div>

                          {/* Interactive indicator at the far right */}
                          {isActive && (
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 flex items-center gap-1">
                              {item.isExternal ? (
                                <ExternalLink className="h-3 w-3 text-emerald-400" />
                              ) : (
                                <CornerDownLeft className="h-3 w-3 text-cyan-400" />
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  /* No matches */
                  <div className="text-center py-10 px-4">
                    <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-300">
                      No results found for &ldquo;<span className="text-cyan-500">{query}</span>&rdquo;
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                      Check your spelling or filter categories for alternative matches.
                    </p>
                  </div>
                )
              ) : (
                /* Empty state: Recents & Quick Nav */
                <div className="space-y-4 py-2">
                  {/* Recents list if available */}
                  {recents.length > 0 && (
                    <div>
                      <h3 className="px-3 text-[10px] font-bold text-neutral-400 dark:text-neutral-500 tracking-wider uppercase mb-2">
                        Recent Searches
                      </h3>
                      <div className="space-y-0.5">
                        {recents.map((item, idx) => {
                          const isActive = idx === selectedIndex;
                          const Icon = item.type === "tool" ? Wrench : item.type === "notes" ? Notebook : item.type === "cheatsheets" ? FileSpreadsheet : BookOpen;
                          return (
                            <div
                              key={`recent-${item.id}`}
                              data-active={isActive}
                              onClick={() => handleSelect(item)}
                              onMouseEnter={() => setSelectedIndex(idx)}
                              className={`flex items-center px-3 py-2 rounded-lg cursor-pointer transition-colors group relative ${
                                isActive ? "bg-slate-100/80 dark:bg-slate-800/50" : "hover:bg-slate-50/50 dark:hover:bg-slate-900/30"
                              }`}
                            >
                              <History className="h-4 w-4 text-neutral-400 mr-3 shrink-0 group-hover:text-cyan-500 transition-colors" />
                              <div className="flex-1 min-w-0 pr-8 flex items-center justify-between">
                                <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 truncate">
                                  {item.title}
                                </span>
                                <span className="text-[9px] font-bold text-neutral-400 dark:text-neutral-500 lowercase ml-2">
                                  in {item.category}
                                </span>
                              </div>
                              {isActive && (
                                <CornerDownLeft className="h-3 w-3 absolute right-3 text-cyan-500" />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Quick Navigation Items */}
                  <div>
                    <h3 className="px-3 text-[10px] font-bold text-neutral-400 dark:text-neutral-500 tracking-wider uppercase mb-2">
                      Quick Navigation
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 px-1">
                      {[
                        { title: "Blog", url: "/blog", desc: "Articles, writeups & deep dives", icon: BookOpen, color: "text-cyan-500" },
                        { title: "Cheatsheets", url: "/blog?category=cheatsheets", desc: "Quick reference commands & syntax", icon: FileSpreadsheet, color: "text-indigo-500" },
                        { title: "Notes", url: "/blog?category=notes", desc: "Dev notes, configs & snippets", icon: Notebook, color: "text-emerald-500" },
                        { title: "AI Tools", url: "/tools", desc: "Curated AI engineering stacks", icon: Wrench, color: "text-cyan-500" },
                        { title: "About", url: "/about", desc: "Bio, portfolio & social profiles", icon: ChevronRight, color: "text-neutral-500" },
                      ].map((nav, index) => {
                        const globalIdx = recents.length + index;
                        const isActive = globalIdx === selectedIndex;
                        const NavIcon = nav.icon;
                        return (
                          <div
                            key={nav.title}
                            data-active={isActive}
                            onClick={() => {
                              onClose();
                              router.push(nav.url);
                            }}
                            onMouseEnter={() => setSelectedIndex(globalIdx)}
                            className={`flex items-center p-2.5 rounded-lg cursor-pointer border transition-colors ${
                              isActive
                                ? "bg-slate-100/80 dark:bg-slate-800/40 border-cyan-500/20"
                                : "bg-transparent border-transparent hover:bg-slate-50/50 dark:hover:bg-slate-900/10"
                            }`}
                          >
                            <div className={`p-1.5 rounded bg-neutral-100 dark:bg-neutral-800/80 mr-2.5 shrink-0 ${nav.color}`}>
                              <NavIcon className="h-4 w-4" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-[11px] font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                                {nav.title}
                              </div>
                              <div className="text-[9px] text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-0.5 font-normal leading-tight">
                                {nav.desc}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Keyboard Shortcuts Hint Bar */}
            <div className="hidden sm:flex items-center justify-between px-4 py-2.5 bg-neutral-50 dark:bg-neutral-950/40 border-t border-neutral-200 dark:border-neutral-800 text-[10px] text-neutral-500 dark:text-neutral-500 font-medium">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1 rounded bg-neutral-200/50 dark:bg-neutral-800 leading-none">↑↓</kbd> to navigate
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1 rounded bg-neutral-200/50 dark:bg-neutral-800 leading-none">↵</kbd> to select
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1 rounded bg-neutral-200/50 dark:bg-neutral-800 leading-none">TAB</kbd> to filter
                </span>
              </div>
              <div className="flex items-center gap-1 font-semibold">
                <Command className="h-3 w-3 shrink-0" />
                <span>anupam.info hub</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
