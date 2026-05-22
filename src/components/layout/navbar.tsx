"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, Terminal, Command } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { CommandPalette } from "@/components/layout/command-palette";

// Separated Navigation links structure
const NAV_ITEMS = [
  { name: "Blog", url: "/blog" },
  { name: "Cheatsheets", url: "/blog?category=cheatsheets" },
  { name: "Notes", url: "/blog?category=notes" },
  { name: "AI Tools", url: "/tools" },
  { name: "About", url: "/about" },
];

function NavLinks() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null);

  const isActive = (url: string) => {
    if (url === "/blog?category=cheatsheets") {
      return pathname === "/blog" && searchParams.get("category") === "cheatsheets";
    }
    if (url === "/blog?category=notes") {
      return pathname === "/blog" && searchParams.get("category") === "notes";
    }
    if (url === "/blog") {
      return pathname === "/blog" && !searchParams.get("category") && !searchParams.get("q");
    }
    return pathname === url;
  };

  return (
    <nav className="hidden lg:flex items-center gap-1.5 relative">
      {NAV_ITEMS.map((item, idx) => {
        const active = isActive(item.url);
        return (
          <Link
            key={item.name}
            href={item.url}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            className={`relative px-3.5 py-1.5 rounded-lg text-sm font-semibold tracking-wide transition-colors duration-200 outline-none select-none ${
              active
                ? "text-cyan-600 dark:text-cyan-400 font-bold"
                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
            }`}
          >
            {/* Sliding background hover highlight */}
            {hoveredIdx === idx && (
              <motion.span
                layoutId="navHoverPill"
                className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800/40 rounded-lg -z-10"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}

            {/* Glowing underline for active route */}
            {active && (
              <motion.span
                layoutId="activeIndicator"
                className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}

            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [os, setOs] = React.useState<"mac" | "win">("win");

  // Detect scroll offset to toggle glassmorphic border/blur
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on initial mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect OS for keyboard hint (Ctrl K / ⌘K)
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      setOs(isMac ? "mac" : "win");
    }
  }, []);

  // Sync keyboard event and custom triggers globally to toggle Search Modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    const handleOpenSearch = () => {
      setIsSearchOpen(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-global-search", handleOpenSearch);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-global-search", handleOpenSearch);
    };
  }, []);

  // Lock scroll when mobile menu is active
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-neutral-200/50 bg-white/70 backdrop-blur-md dark:border-neutral-800/50 dark:bg-neutral-950/70 shadow-sm shadow-neutral-100/10"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* LEFT SECTION: Logo/Brand */}
            <div className="flex items-center gap-8 shrink-0">
              <Link href="/" className="flex items-center space-x-2 group relative">
                <div className="relative flex items-center justify-center p-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.15)] transition-all">
                  <Terminal className="h-4.5 w-4.5 text-slate-700 dark:text-neutral-200 group-hover:text-cyan-500 transition-colors" />
                  <div className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 animate-pulse" />
                </div>
                <span className="font-extrabold text-[15px] sm:text-base tracking-tight text-neutral-900 dark:text-white select-none">
                  anupam
                  <span className="bg-gradient-to-r from-cyan-500 to-emerald-400 bg-clip-text text-transparent">
                    .info
                  </span>
                </span>
              </Link>
            </div>

            {/* CENTER SECTION: Links (Suspense boundary protects build params) */}
            <React.Suspense fallback={<div className="hidden lg:flex h-6 w-96 bg-transparent" />}>
              <NavLinks />
            </React.Suspense>

            {/* RIGHT SECTION: Global Actions */}
            <div className="flex items-center gap-3">
              {/* Desktop Command Palette Search Mockup Trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="hidden md:flex items-center gap-2 h-9 w-60 xl:w-72 text-left px-3 text-xs font-semibold rounded-lg border border-neutral-200 bg-neutral-50/50 hover:bg-neutral-100 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:bg-neutral-800 dark:hover:border-neutral-700 text-neutral-400 dark:text-neutral-500 transition-all select-none focus:outline-none focus:ring-2 focus:ring-cyan-500/50 cursor-pointer group"
                aria-label="Open search command palette"
              >
                <Search className="h-3.5 w-3.5 group-hover:text-cyan-500 transition-colors shrink-0" />
                <span className="flex-1 truncate">Search hub, notes...</span>
                <kbd className="inline-flex h-5 select-none items-center gap-0.5 rounded border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-950 px-1.5 font-mono text-[9px] font-medium opacity-100 text-neutral-400 dark:text-neutral-500 shrink-0">
                  {os === "mac" ? (
                    <>
                      <span className="text-[10px]">⌘</span>K
                    </>
                  ) : (
                    "Ctrl K"
                  )}
                </kbd>
              </button>

              {/* Mobile Search Button (Compact) */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white/50 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/50 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors text-neutral-600 dark:text-neutral-400 cursor-pointer"
                aria-label="Open search command palette"
              >
                <Search className="h-4.5 w-4.5" />
              </button>

              {/* Theme Toggle Component */}
              <ThemeToggle />

              {/* GitHub Link */}
              <a
                href="https://github.com/anupambaral"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white/50 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/50 hover:bg-neutral-50 hover:text-cyan-500 hover:border-cyan-500/30 dark:hover:bg-neutral-900 dark:hover:text-emerald-400 dark:hover:border-emerald-500/30 transition-all text-neutral-800 dark:text-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 cursor-pointer"
                aria-label="GitHub Profile"
              >
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>

              {/* Hamburger Mobile Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white/50 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/50 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors text-neutral-800 dark:text-neutral-200 cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-4.5 w-4.5 animate-in fade-in zoom-in duration-200" />
                ) : (
                  <Menu className="h-4.5 w-4.5 animate-in fade-in zoom-in duration-200" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-30 lg:hidden flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-neutral-950/60 backdrop-blur-sm dark:bg-neutral-950/80"
            />

            {/* Sidebar drawer content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full max-w-xs h-full bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-l border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Mobile Drawer Header */}
                <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800/80 pb-4">
                  <div className="flex items-center space-x-2">
                    <Terminal className="h-4.5 w-4.5 text-cyan-500" />
                    <span className="font-extrabold text-[15px] text-neutral-900 dark:text-white">
                      anupam.info
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1 rounded-md text-neutral-400 dark:text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
                  >
                    <X className="h-4.5 w-4.5" />
                  </button>
                </div>

                {/* Mobile Action Triggers */}
                <div className="space-y-3">
                  {/* Search trigger inside drawer */}
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setTimeout(() => setIsSearchOpen(true), 150);
                    }}
                    className="flex items-center gap-3 w-full h-10 px-4 text-xs font-semibold rounded-lg border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900/60 dark:hover:bg-neutral-800 text-neutral-400 dark:text-neutral-500 transition-colors cursor-pointer"
                  >
                    <Search className="h-4 w-4" />
                    <span>Search hub, articles...</span>
                    <span className="ml-auto font-mono text-[9px] px-1 bg-neutral-200/50 dark:bg-neutral-800 rounded">
                      ⌘K
                    </span>
                  </button>
                </div>

                {/* Vertical links list */}
                <nav className="flex flex-col gap-1.5">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.name}
                      href={item.url}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-3 rounded-lg text-sm font-semibold tracking-wide text-neutral-700 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:bg-neutral-900/60 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Mobile Drawer Footer */}
              <div className="border-t border-neutral-100 dark:border-neutral-800/80 pt-6 space-y-4">
                {/* Social buttons */}
                <div className="flex items-center gap-3 justify-center">
                  <a
                    href="https://github.com/anupambaral"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-10 rounded-lg border border-neutral-200 bg-neutral-50/50 dark:border-neutral-800 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-700 dark:text-neutral-300"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  </a>
                  <a
                    href="https://twitter.com/anupambaral"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-10 rounded-lg border border-neutral-200 bg-neutral-50/50 dark:border-neutral-800 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-700 dark:text-neutral-300"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/anupambaral"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-10 rounded-lg border border-neutral-200 bg-neutral-50/50 dark:border-neutral-800 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-700 dark:text-neutral-300"
                  >
                    <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
                <div className="text-center text-[10px] font-semibold text-neutral-400 dark:text-neutral-500 select-none">
                  &copy; {new Date().getFullYear()} Anupam Baral
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Command Palette search Modal */}
      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
