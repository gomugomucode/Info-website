import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "About Me",
  description: "Learn more about Anupam Baral and the purpose of this knowledge hub.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl mb-8">
        About
      </h1>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-xl text-neutral-600 dark:text-neutral-400">
          Hi, I'm Anupam Baral. I'm a developer passionate about building software and exploring AI.
        </p>

        <h2>Why this site?</h2>
        <p>
          While my <a href="https://anupambaral.com.np" target="_blank" rel="noopener noreferrer">portfolio site</a> serves as a professional overview of my work, this `info.np` domain is my dedicated knowledge hub. I built this site to share tutorials, document technical notes, curate my favorite AI tools, and log my ongoing learning journey.
        </p>

        <h2>What you'll find here</h2>
        <ul>
          <li><strong>Tutorials:</strong> Deep dives into Next.js, FastAPI, LangChain, and other modern web technologies.</li>
          <li><strong>Tech Notes:</strong> Quick references, cheat sheets, and snippets I find myself constantly looking up.</li>
          <li><strong>AI Tools:</strong> A directory of the most useful AI developer tools I've tested and recommend.</li>
          <li><strong>Case Studies:</strong> Breakdowns of how I built specific features or architectures for my projects.</li>
        </ul>

        <h2>Connect</h2>
        <p>
          I'm always open to discussing technology, startups, and open source.
        </p>
        <div className="flex gap-4 not-prose mt-6">
          <Link href="/contact" className="inline-flex items-center rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors">
            Get in touch
          </Link>
          <a href="https://https://github.com/gomugomucode" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 dark:hover:bg-neutral-900 transition-colors">
            GitHub <ArrowUpRight className="ml-2 h-4 w-4 text-neutral-400" />
          </a>
        </div>
      </div>
    </div>
  );
}
