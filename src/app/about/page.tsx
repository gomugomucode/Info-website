import Link from "next/link";
import { ArrowUpRight, BookOpen, Route } from "lucide-react";
import { NOTE_SUBCATEGORIES, SITE_DESCRIPTION } from "@/lib/site";
import { HUB_PILLARS } from "@/lib/hub-config";

export const metadata = {
  title: "About This Hub",
  description: SITE_DESCRIPTION,
};

const HUB_LABELS: Record<(typeof NOTE_SUBCATEGORIES)[number], string> = {
  linux: "Linux CLI & Systems",
  networking: "Network & Sniffing",
  security: "Threat Detection & SecOps",
  web: "Web Security & Auditing",
  windows: "Windows Auditing",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl mb-8">
        About This Hub
      </h1>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-xl text-neutral-600 dark:text-neutral-400">
          A structured cybersecurity reference library — field guides, checklists, and
          learning paths for defenders, auditors, and practitioners.
        </p>

        <h2>What this site is</h2>
        <p>
          This hub organizes technical notes into topic libraries you can study in sequence or
          look up on demand. Content is written for hands-on security work: host auditing,
          packet analysis, web testing methodology, and blue team operations.
        </p>

        <h2>How content is organized</h2>
        <p>
          Each topic hub groups related guides. Pillar pages are the starting points — deeper
          references and tool-specific notes link inward from there.
        </p>
        <ul>
          {NOTE_SUBCATEGORIES.map((hub) => (
            <li key={hub}>
              <Link href={`/notes/${hub}`}>
                <strong>{HUB_LABELS[hub]}</strong>
              </Link>
              {" — "}
              {HUB_PILLARS[hub].length} featured pillar
              {HUB_PILLARS[hub].length === 1 ? "" : "s"}
            </li>
          ))}
        </ul>

        <h2>Learning paths</h2>
        <p>
          Curated step-by-step tracks connect guides across hubs — for example, recon with
          Nmap, validation in Wireshark, and defensive workflows in the blue team library.
        </p>

        <h2>Author</h2>
        <p>
          Maintained by Anupam Baral. Guides reflect real audit and defensive workflows;
          always obtain authorization before testing systems you do not own.
        </p>

        <div className="flex flex-wrap gap-4 not-prose mt-6">
          <Link
            href="/notes"
            className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 transition-colors"
          >
            <BookOpen className="h-4 w-4" />
            Browse reference library
          </Link>
          <Link
            href="/notes#learning-paths"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 dark:hover:bg-neutral-900 transition-colors"
          >
            <Route className="h-4 w-4" />
            View learning paths
          </Link>
          <a
            href="https://github.com/gomugomucode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 dark:hover:bg-neutral-900 transition-colors"
          >
            GitHub <ArrowUpRight className="ml-2 h-4 w-4 text-neutral-400" />
          </a>
        </div>
      </div>
    </div>
  );
}
