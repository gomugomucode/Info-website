"use client";

import * as React from "react";
import { Search } from "lucide-react";

export function SearchBar() {
  const [os, setOs] = React.useState<"mac" | "win">("win");

  // Detect OS for keyboard shortcut hint
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      setOs(isMac ? "mac" : "win");
    }
  }, []);

  const handleTriggerSearch = () => {
    window.dispatchEvent(new CustomEvent("open-global-search"));
  };

  return (
    <div className="w-full max-w-md mb-10">
      <button
        onClick={handleTriggerSearch}
        type="button"
        className="w-full flex items-center gap-3 h-11 px-4 text-left text-sm rounded-xl border border-neutral-200 bg-white/50 backdrop-blur-md hover:bg-neutral-50 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/30 dark:hover:bg-neutral-900/60 dark:hover:border-neutral-700 text-neutral-400 dark:text-neutral-500 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50 cursor-pointer group"
      >
        <Search className="h-4.5 w-4.5 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors shrink-0" />
        <span className="flex-1 font-semibold text-neutral-400 dark:text-neutral-500 truncate select-none">
          Search blog, cheatsheets, notes, tools...
        </span>
        <kbd className="inline-flex h-6 select-none items-center gap-0.5 rounded border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-950 px-2 font-mono text-[10px] font-bold text-neutral-400 dark:text-neutral-500 shrink-0">
          {os === "mac" ? (
            <>
              <span className="text-xs">⌘</span>K
            </>
          ) : (
            "Ctrl K"
          )}
        </kbd>
      </button>
    </div>
  );
}
