import { getAllTools } from "@/lib/tools";
import { ToolCard } from "@/components/ui/tool-card";
import { absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "Security Tools Directory",
  description:
    "Curated security tools for authorized reconnaissance, web testing, network forensics, and blue team operations.",
  alternates: {
    canonical: absoluteUrl("/tools"),
  },
};

export default function ToolsPage() {
  const tools = getAllTools();

  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <div className="mb-12 space-y-4">
        <h1 className="inline-block font-extrabold text-4xl tracking-tight text-neutral-900 dark:text-neutral-50 lg:text-5xl">
          Security Tools Directory
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Tools referenced across the reference library for authorized auditing,
          vulnerability validation, packet analysis, and endpoint hunting.
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
