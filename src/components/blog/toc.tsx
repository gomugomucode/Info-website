"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface TOCItem {
  title: string;
  url: string;
  depth: number;
}

interface TOCProps {
  toc: TOCItem[];
}

export function TableOfContents({ toc }: TOCProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" }
    );

    const elements = document.querySelectorAll("h2, h3");
    elements.forEach((elem) => observer.observe(elem));
    
    return () => observer.disconnect();
  }, []);

  if (!toc || toc.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">On this page</h3>
      <ul className="space-y-2.5 text-sm">
        {toc.map((item, index) => {
          const isActive = activeId === item.url.replace("#", "");
          return (
            <li
              key={index}
              style={{ paddingLeft: `${(item.depth - 2) * 1}rem` }}
            >
              <a
                href={item.url}
                className={cn(
                  "block hover:text-primary-600 dark:hover:text-primary-400 transition-colors",
                  isActive
                    ? "text-primary-600 font-medium dark:text-primary-400"
                    : "text-neutral-500 dark:text-neutral-400"
                )}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
