import Link from "next/link";
import { cn } from "@/lib/utils";

interface CategoryBadgeProps {
  category: string;
  className?: string;
}

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  return (
    <Link
      href={`/blog?category=${encodeURIComponent(category.toLowerCase())}`}
      className={cn(
        "relative z-10 rounded-full bg-neutral-100 px-3 py-1.5 font-medium text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700 transition-colors text-xs",
        className
      )}
    >
      {category}
    </Link>
  );
}
