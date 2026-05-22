"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch by waiting until mounted
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-lg border border-neutral-200 bg-neutral-50/50 dark:border-neutral-800 dark:bg-neutral-900/50 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white/50 backdrop-blur-md transition-all hover:bg-neutral-50 hover:text-cyan-500 hover:border-cyan-500/30 dark:border-neutral-800 dark:bg-neutral-950/50 dark:hover:bg-neutral-900 dark:hover:text-emerald-400 dark:hover:border-emerald-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 cursor-pointer"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ y: -10, opacity: 0, rotate: -45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 10, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="text-emerald-400 flex items-center justify-center"
          >
            <Sun className="h-[18px] w-[18px]" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ y: -10, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 10, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="text-neutral-800 flex items-center justify-center"
          >
            <Moon className="h-[18px] w-[18px]" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
