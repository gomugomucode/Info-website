import { notFound } from "next/navigation";
import Link from "next/link";
import { Terminal, Network, Shield, Globe, Monitor, ArrowLeft, Home, ChevronRight, BookOpen, Clock, FileText, Search } from "lucide-react";
import { getHubPillarNotes, getNotesBySubcategory } from "@/lib/mdx";
import { getLearningPathsForHub } from "@/lib/learning-paths";
import { buildBreadcrumbSchema } from "@/lib/schemas";
import { getHubOgImageUrl } from "@/lib/hub-config";
import { SITE_URL, absoluteUrl } from "@/lib/site";
import { CategoryNotesList } from "./category-notes-list";

interface SubcategoryData {
  title: string;
  description: string;
  longDescription: string;
  icon: any;
  color: string;
  iconColor: string;
  themeColor: string;
  accentBg: string;
}

const SUBCATEGORY_DETAILS: Record<string, SubcategoryData> = {
  linux: {
    title: "Linux CLI & Systems",
    description: "Linux systems hardening, Kali CLI, and administrative commands.",
    longDescription: "Deep dive reference manuals for Essential Linux diagnostics, host auditing, privilege escalation vectors, defensive command hardening, and Kali Linux toolsets.",
    icon: Terminal,
    color: "text-emerald-500",
    iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    themeColor: "emerald",
    accentBg: "bg-emerald-500/5",
  },
  networking: {
    title: "Network & Sniffing",
    description: "Packet analysis, Wireshark filters, and network mapping.",
    longDescription: "Comprehensive packet-level network analysis commands, Wireshark and Tshark syntax, nmap scan profiles, and firewall rule auditing configurations.",
    icon: Network,
    color: "text-indigo-500",
    iconColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    themeColor: "indigo",
    accentBg: "bg-indigo-500/5",
  },
  security: {
    title: "Threat Detection & SecOps",
    description: "Blue team analysis, scripting, and exploit analysis.",
    longDescription: "Defensive threat detection metrics, Blue Team defensive toolkits, scripting diagnostics with Python, Metasploit frameworks, and drone threat analysis.",
    icon: Shield,
    color: "text-red-500",
    iconColor: "text-red-400 bg-red-500/10 border-red-500/20",
    themeColor: "red",
    accentBg: "bg-red-500/5",
  },
  web: {
    title: "Web Security & Auditing",
    description: "OWASP audits, vulnerability scanning, and API defense.",
    longDescription: "Technical guidelines on OWASP Top 10 vulnerabilities, automated scanning with sqlmap, nessus, and nuclei templates, and API gateway hardening practices.",
    icon: Globe,
    color: "text-cyan-500",
    iconColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    themeColor: "cyan",
    accentBg: "bg-cyan-500/5",
  },
  windows: {
    title: "Windows Auditing",
    description: "Event log correlation and powershell threat hunting.",
    longDescription: "Enterprise Windows security log event IDs, threat hunting with PowerShell, registry persistence detection, and privilege escalation mitigation scripts.",
    icon: Monitor,
    color: "text-blue-500",
    iconColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    themeColor: "blue",
    accentBg: "bg-blue-500/5",
  },
};

export async function generateStaticParams() {
  return [
    { subcategory: "linux" },
    { subcategory: "networking" },
    { subcategory: "security" },
    { subcategory: "web" },
    { subcategory: "windows" },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ subcategory: string }> }) {
  const resolvedParams = await params;
  const sub = resolvedParams.subcategory.toLowerCase();
  const data = SUBCATEGORY_DETAILS[sub];
  
  if (!data) {
    return {
      title: "Subcategory Not Found",
    };
  }

  return {
    title: `${data.title} Hub`,
    description: data.longDescription,
    alternates: {
      canonical: absoluteUrl(`/notes/${sub}`),
    },
    openGraph: {
      title: `${data.title} — Cybersecurity Learning Hub`,
      description: data.longDescription,
      url: absoluteUrl(`/notes/${sub}`),
      images: [
        {
          url: getHubOgImageUrl(sub),
          width: 1200,
          height: 630,
          alt: `${data.title} — Cybersecurity Learning Hub`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      images: [getHubOgImageUrl(sub)],
    },
  };
}

export default async function SubcategoryHubPage({ params }: { params: Promise<{ subcategory: string }> }) {
  const resolvedParams = await params;
  const subcategory = resolvedParams.subcategory.toLowerCase();
  const subDetails = SUBCATEGORY_DETAILS[subcategory];

  if (!subDetails) {
    notFound();
  }

  const posts = getNotesBySubcategory(subcategory);
  const pillarNotes = getHubPillarNotes(subcategory);
  const hubPaths = getLearningPathsForHub(subcategory);
  const CategoryIcon = subDetails.icon;
  const subcategoryLabel =
    subcategory.charAt(0).toUpperCase() + subcategory.slice(1);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Notes", url: absoluteUrl("/notes") },
    { name: subcategoryLabel, url: absoluteUrl(`/notes/${subcategory}`) },
  ]);

  // Calculate statistics
  const count = posts.length;
  const totalMinutes = posts.reduce((acc, p) => {
    const timeStr = p.frontmatter.readingTime || "5 min read";
    const mins = parseInt(timeStr.replace(/[^0-9]/g, "")) || 5;
    return acc + mins;
  }, 0);
  const totalHours = Math.round((totalMinutes / 60) * 10) / 10;

  // Sibling categories for internal linking side panel
  const siblingHubs = Object.entries(SUBCATEGORY_DETAILS)
    .filter(([key]) => key !== subcategory)
    .map(([key, value]) => ({
      id: key,
      title: value.title,
      description: value.description,
      icon: value.icon,
      color: value.color,
    }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 dark:text-neutral-400 select-none">
        <Link href="/" className="flex items-center gap-1 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
          <Home className="h-3.5 w-3.5" />
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-neutral-400 dark:text-neutral-600 shrink-0" />
        <Link href="/notes" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
          Notes
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-neutral-400 dark:text-neutral-600 shrink-0" />
        <span className="text-neutral-900 dark:text-neutral-100 font-bold capitalize">
          {subcategory}
        </span>
      </nav>

      {/* Grid Layout: Main listing + Sidebar Hub Links */}
      <div className="grid gap-10 lg:grid-cols-4 items-start">
        
        {/* Main Content (Columns 1-3) */}
        <div className="lg:col-span-3 space-y-10">
          
          {/* Header Banner */}
          <div className={`p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30 flex flex-col md:flex-row gap-6 items-start md:items-center relative overflow-hidden`}>
            <div className={`absolute top-0 right-0 w-64 h-64 rounded-full filter blur-3xl opacity-20 -z-10 ${subDetails.accentBg}`} />
            
            <div className={`p-4 rounded-2xl border ${subDetails.iconColor} shrink-0`}>
              <CategoryIcon className="h-8 w-8" />
            </div>
            
            <div className="space-y-3 flex-1">
              <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                {subDetails.title}
              </h1>
              <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                {subDetails.longDescription}
              </p>
              
              <div className="flex gap-4 text-xs font-semibold text-neutral-500 dark:text-neutral-400 flex-wrap">
                <span className="flex items-center gap-1">
                  <FileText className="h-3.5 w-3.5" />
                  {count} {count === 1 ? "Reference guide" : "Reference guides"}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  ~{totalHours} hrs reading time
                </span>
              </div>
            </div>
          </div>

          {pillarNotes.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
                Featured pillars
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {pillarNotes.map((note) => (
                  <Link
                    key={note.slug}
                    href={`/notes/${subcategory}/${note.slug}`}
                    className="group p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 hover:border-cyan-500/30 transition-all"
                  >
                    <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {note.frontmatter.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400 line-clamp-2">
                      {note.frontmatter.description}
                    </p>
                    {note.frontmatter.readingTime && (
                      <p className="mt-3 text-[10px] font-semibold text-neutral-400 dark:text-neutral-500">
                        {note.frontmatter.readingTime}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {hubPaths.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
                Recommended learning paths
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {hubPaths.map((path) => (
                  <div
                    key={path.id}
                    className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/20"
                  >
                    <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                      {path.title}
                    </h3>
                    <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                      {path.description}
                    </p>
                    <ol className="mt-3 space-y-1.5">
                      {path.steps
                        .filter((step) =>
                          step.href.startsWith(`/notes/${subcategory}/`),
                        )
                        .map((step, i) => (
                          <li key={step.href}>
                            <Link
                              href={step.href}
                              className="text-xs font-medium text-cyan-600 hover:underline dark:text-cyan-400"
                            >
                              {i + 1}. {step.title}
                            </Link>
                          </li>
                        ))}
                      {path.steps
                        .filter(
                          (step) =>
                            !step.href.startsWith(`/notes/${subcategory}/`),
                        )
                        .slice(0, 2)
                        .map((step) => (
                          <li key={step.href}>
                            <Link
                              href={step.href}
                              className="text-xs font-medium text-neutral-500 hover:text-cyan-600 dark:text-neutral-400 dark:hover:text-cyan-300"
                            >
                              → {step.title}
                            </Link>
                          </li>
                        ))}
                    </ol>
                  </div>
                ))}
              </div>
            </section>
          )}

          <CategoryNotesList initialPosts={posts} subcategory={subcategory} themeColor={subDetails.themeColor} />
          
        </div>

        {/* Sibling Category Sidebar (Column 4) - SEO internal linking booster */}
        <aside className="space-y-6 lg:sticky lg:top-24">
          <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30 space-y-4">
            <h2 className="text-sm font-bold text-neutral-900 dark:text-neutral-50 uppercase tracking-wider">
              Explore Other Topics
            </h2>
            <div className="space-y-3">
              {siblingHubs.map((hub) => {
                const HubIcon = hub.icon;
                return (
                  <Link
                    key={hub.id}
                    href={`/notes/${hub.id}`}
                    className="flex items-start gap-3 p-3 rounded-xl border border-neutral-100 hover:border-cyan-500/20 bg-neutral-50/50 hover:bg-neutral-100/30 dark:border-neutral-900 dark:hover:border-cyan-500/10 dark:bg-neutral-950/20 dark:hover:bg-neutral-950/40 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shrink-0 group-hover:border-cyan-500/30">
                      <HubIcon className={`h-4 w-4 ${hub.color}`} />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-cyan-500 transition-colors">
                        {hub.title}
                      </span>
                      <p className="text-[10px] leading-relaxed text-neutral-500 dark:text-neutral-400 line-clamp-2">
                        {hub.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Lead capture sidebar magnet placeholder */}
          <div className="p-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-teal-500/5 dark:from-cyan-950/20 dark:to-teal-950/10 text-center space-y-4">
            <BookOpen className="h-8 w-8 text-cyan-500 mx-auto" />
            <div className="space-y-1">
              <h3 className="text-xs font-bold text-neutral-900 dark:text-neutral-50 uppercase tracking-wider">
                Full Reference Library
              </h3>
              <p className="text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                Browse all topic hubs, learning paths, and cross-linked guides.
              </p>
            </div>
            <Link
              href="/notes"
              className="inline-flex justify-center w-full rounded-lg bg-cyan-600 hover:bg-cyan-500 px-3 py-2 text-xs font-semibold text-white transition-colors"
            >
              View All Notes
            </Link>
          </div>
        </aside>
        
      </div>
    </div>
    </>
  );
}
