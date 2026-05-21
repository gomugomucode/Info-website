import { getAllTools, getCategories } from "@/lib/tools";
import { ToolCard } from "@/components/ui/tool-card";

export const metadata = {
  title: "AI & Developer Tools",
  description: "A curated directory of AI tools, developer tools, APIs, and resources.",
};

export default function ToolsPage() {
  const tools = getAllTools();
  const categories = getCategories();

  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <div className="mb-12 space-y-4">
        <h1 className="inline-block font-extrabold text-4xl tracking-tight text-neutral-900 dark:text-neutral-50 lg:text-5xl">
          Developer & AI Tools
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
          A curated directory of useful AI tools, developer tools, APIs, and resources that I use and recommend.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
      
      {tools.length === 0 && (
        <p className="text-neutral-600 dark:text-neutral-400">No tools found.</p>
      )}
    </div>
  );
}
