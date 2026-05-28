"use client";

import * as React from "react";
import { List, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TOCItem } from "./toc";

interface MobileTocDrawerProps {
  toc: TOCItem[];
}

export function MobileTocDrawer({ toc }: MobileTocDrawerProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -70% 0%" }
    );

    const elements = document.querySelectorAll("h2, h3");
    elements.forEach((elem) => observer.observe(elem));

    return () => observer.disconnect();
  }, []);

  if (!toc || toc.length === 0) return null;

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 lg:hidden flex h-11 w-11 items-center justify-center rounded-full bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-500 text-white shadow-lg cursor-pointer transition-transform duration-200 active:scale-95"
        aria-label="Table of contents"
      >
        <List className="h-5 w-5" />
      </button>

      {/* Slide-over Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-neutral-950/60 backdrop-blur-sm dark:bg-neutral-950/80"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full max-w-xs h-full bg-white dark:bg-neutral-950 border-l border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 flex flex-col justify-between"
            >
              <div className="flex-1 overflow-y-auto">
                <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800/80 pb-4 mb-6">
                  <span className="font-bold text-sm text-neutral-900 dark:text-white">
                    On this page
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-md text-neutral-400 dark:text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
                  >
                    <X className="h-4.5 w-4.5" />
                  </button>
                </div>

                <ul className="space-y-3.5 text-[13px]">
                  {toc.map((item, index) => {
                    const isActive = activeId === item.url.replace("#", "");
                    return (
                      <li
                        key={index}
                        style={{ paddingLeft: `${(item.depth - 2) * 0.75}rem` }}
                      >
                        <a
                          href={item.url}
                          onClick={() => setIsOpen(false)}
                          className={`block py-1 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors ${
                            isActive
                              ? "text-cyan-600 font-bold dark:text-cyan-400"
                              : "text-neutral-500 dark:text-neutral-400 font-medium"
                          }`}
                        >
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
export default MobileTocDrawer;
