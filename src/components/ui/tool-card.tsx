import { ArrowUpRight } from "lucide-react";
import type { Tool } from "@/lib/tools";

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col items-start justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-primary-500/50 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-primary-500/50"
    >
      <div className="flex w-full items-start justify-between">
        <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-primary-600 dark:text-neutral-50 dark:group-hover:text-primary-500 transition-colors">
          {tool.name}
        </h3>
        <ArrowUpRight className="h-5 w-5 text-neutral-400 group-hover:text-primary-500 transition-colors" />
      </div>
      <span className="mt-2 inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/10 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-emerald-400/20">
        {tool.category}
      </span>
      <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
        {tool.description}
      </p>
    </a>
  );
}
