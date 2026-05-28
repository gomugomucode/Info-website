import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  subcategory?: string;
  title: string;
}

export function Breadcrumbs({ subcategory, title }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-6 select-none flex-wrap">
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
      >
        <Home className="h-3.5 w-3.5" />
      </Link>
      
      <ChevronRight className="h-3.5 w-3.5 text-neutral-400 dark:text-neutral-600 shrink-0" />
      
      <Link
        href="/blog?category=notes"
        className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
      >
        Notes
      </Link>

      {subcategory && (
        <>
          <ChevronRight className="h-3.5 w-3.5 text-neutral-400 dark:text-neutral-600 shrink-0" />
          <Link
            href={`/blog?q=${subcategory.toLowerCase()}`}
            className="capitalize hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            {subcategory}
          </Link>
        </>
      )}

      <ChevronRight className="h-3.5 w-3.5 text-neutral-400 dark:text-neutral-600 shrink-0" />
      <span className="text-neutral-900 dark:text-neutral-100 truncate max-w-[200px] sm:max-w-xs">
        {title}
      </span>
    </nav>
  );
}
export default Breadcrumbs;
