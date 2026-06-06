import Link from "next/link";
import { Terminal, Network, Shield, Globe, Monitor, ArrowRight, BookOpen, Clock, Activity } from "lucide-react";
import { getAllPosts } from "@/lib/mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity Reference Library | Anupam Baral",
  description: "Technical, production-grade reference guides for security auditing, threat detection, systems hardening, and network analysis.",
  alternates: {
    canonical: "https://info.anupambaral.com.np/notes",
  },
};

const SUBCATEGORIES = [
  {
    id: "linux",
    title: "Linux CLI & Systems",
    description: "Defensive hardening, host auditing, SUID binary exploitation diagnostics, and essential command reference guides.",
    icon: Terminal,
    color: "from-emerald-500/20 to-emerald-500/5 hover:border-emerald-500/30",
    iconColor: "text-emerald-500",
    borderColor: "hover:border-emerald-500/30 dark:hover:border-emerald-500/30",
    gradientText: "from-emerald-400 to-teal-400",
  },
  {
    id: "networking",
    title: "Network & Sniffing",
    description: "Packet analysis with Wireshark/Tshark, firewall configurations, nmap scanning workflows, and network protocol forensics.",
    icon: Network,
    color: "from-indigo-500/20 to-indigo-500/5 hover:border-indigo-500/30",
    iconColor: "text-indigo-500",
    borderColor: "hover:border-indigo-500/30 dark:hover:border-indigo-500/30",
    gradientText: "from-indigo-400 to-violet-400",
  },
  {
    id: "security",
    title: "Threat Detection & SecOps",
    description: "Blue team operation notes, Python scripting for cybersecurity, metasploit payloads, and drone exploitation audits.",
    icon: Shield,
    color: "from-red-500/20 to-red-500/5 hover:border-red-500/30",
    iconColor: "text-red-500",
    borderColor: "hover:border-red-500/30 dark:hover:border-red-500/30",
    gradientText: "from-red-400 to-rose-400",
  },
  {
    id: "web",
    title: "Vulnerability Assessment",
    description: "OWASP Top 10 auditing, sqlmap extraction guides, Burp Suite Nuclei integration, and API gateway security analysis.",
    icon: Globe,
    color: "from-cyan-500/20 to-cyan-500/5 hover:border-cyan-500/30",
    iconColor: "text-cyan-500",
    borderColor: "hover:border-cyan-500/30 dark:hover:border-cyan-500/30",
    gradientText: "from-cyan-400 to-sky-400",
  },
  {
    id: "windows",
    title: "Windows Auditing",
    description: "Event log correlation, PowerShell threat hunting scripts, persistence detection, and Windows privilege escalation baselines.",
    icon: Monitor,
    color: "from-blue-500/20 to-blue-500/5 hover:border-blue-500/30",
    iconColor: "text-blue-500",
    borderColor: "hover:border-blue-500/30 dark:hover:border-blue-500/30",
    gradientText: "from-blue-400 to-indigo-400",
  },
];

export default function NotesPage() {
  const allNotes = getAllPosts(["notes"]);

  // Calculate dynamic stats
  const totalNotes = allNotes.length;
  
  // Calculate total estimated reading time
  const totalMinutes = allNotes.reduce((acc, curr) => {
    const timeStr = curr.frontmatter.readingTime || "5 min read";
    const mins = parseInt(timeStr.replace(/[^0-9]/g, "")) || 5;
    return acc + mins;
  }, 0);
  const totalHours = Math.round((totalMinutes / 60) * 10) / 10;

  // Group notes for quick links list
  const subcategoryMap = new Map<string, typeof allNotes>();
  SUBCATEGORIES.forEach((sub) => subcategoryMap.set(sub.id, []));
  
  allNotes.forEach((note) => {
    const sub = note.frontmatter.subcategory?.toLowerCase() || "linux";
    const list = subcategoryMap.get(sub);
    if (list) {
      list.push(note);
    }
  });

  return (
    <div className="container mx-auto max-w-6xl px-4 py-16 sm:py-24 space-y-16">
      
      {/* Hero Header */}
      <header className="max-w-3xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
          <BookOpen className="h-3.5 w-3.5" />
          <span>Security Knowledge Base</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl lg:text-6xl">
          Cybersecurity <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
            Reference Library
          </span>
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Production-grade checklists, security audit procedures, active command references, and defensive hardening configurations.
        </p>

        {/* Global Statistics */}
        <div className="pt-6 flex flex-wrap justify-center gap-6 text-sm font-medium text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/20">
            <Activity className="h-4 w-4 text-cyan-500" />
            <span>{totalNotes} Reference Manuals</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/20">
            <Clock className="h-4 w-4 text-emerald-500" />
            <span>~{totalHours} Hours of Materials</span>
          </div>
        </div>
      </header>

      {/* Categories Grid */}
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {SUBCATEGORIES.map((sub) => {
          const notes = subcategoryMap.get(sub.id) || [];
          const count = notes.length;
          const CategoryIcon = sub.icon;
          const recentNotes = notes.slice(0, 3);

          return (
            <div
              key={sub.id}
              className={`flex flex-col justify-between p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-all dark:border-neutral-800 dark:bg-neutral-900/40 ${sub.borderColor}`}
            >
              <div className="space-y-4">
                {/* Header Icon + Count */}
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${sub.color}`}>
                    <CategoryIcon className={`h-6 w-6 ${sub.iconColor}`} />
                  </div>
                  <span className="text-xs font-bold text-neutral-400 dark:text-neutral-500">
                    {count} {count === 1 ? "Guide" : "Guides"}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                    {sub.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {sub.description}
                  </p>
                </div>

                {/* Quick Internal Links list (SEO Equity passer) */}
                {recentNotes.length > 0 && (
                  <div className="pt-4 border-t border-neutral-100 dark:border-neutral-900">
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-2">
                      Featured References
                    </span>
                    <ul className="space-y-2">
                      {recentNotes.map((note) => (
                        <li key={note.slug}>
                          <Link
                            href={`/notes/${sub.id}/${note.slug}`}
                            className="text-xs font-medium text-neutral-700 hover:text-cyan-600 dark:text-neutral-400 dark:hover:text-cyan-400 transition-colors line-clamp-1 flex items-center gap-1.5 group"
                          >
                            <span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-cyan-500 transition-colors shrink-0" />
                            {note.frontmatter.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <Link
                  href={`/notes/${sub.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 group"
                >
                  Enter Library
                  <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
