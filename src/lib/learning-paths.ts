export interface LearningPath {
  id: string;
  title: string;
  description: string;
  steps: { title: string; href: string }[];
}

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: "linux-foundation",
    title: "Linux for Cybersecurity",
    description: "CLI auditing → Kali toolkit → mobile lab",
    steps: [
      {
        title: "Linux CLI Essentials",
        href: "/notes/linux/essential-linux-commands-for-cybersecurity-specialists",
      },
      {
        title: "Kali Linux Toolkit",
        href: "/notes/linux/kali-linux-toolkit-guide",
      },
      {
        title: "Termux Mobile Lab",
        href: "/notes/linux/master-termux-handbook",
      },
    ],
  },
  {
    id: "web-security",
    title: "Web Application Security",
    description: "OWASP fundamentals → scanning → SQL injection",
    steps: [
      {
        title: "Web Security & Hardening",
        href: "/notes/web/web-security-fundamentals",
      },
      { title: "SQLmap Guide", href: "/notes/web/sqlmap-guide" },
      {
        title: "Nessus Vulnerability Scanning",
        href: "/notes/web/nessus-vulnerability-scanning",
      },
      {
        title: "API Gateway Security",
        href: "/notes/web/api-gateway-security-implementation-and-best-practices",
      },
    ],
  },
  {
    id: "blue-team",
    title: "Defensive Security / Blue Team",
    description: "SOC workflows → Windows hunting → network forensics",
    steps: [
      {
        title: "Blue Team Complete Guide",
        href: "/notes/security/blue-team-complete-guide",
      },
      {
        title: "Windows Event Log Analysis",
        href: "/notes/windows/windows-event-log-analysis-advanced-threat-detection-guide",
      },
      { title: "PowerShell Auditing", href: "/notes/windows/powershell-auditing" },
      { title: "Wireshark Forensics", href: "/notes/networking/wireshark" },
    ],
  },
  {
    id: "offensive-foundation",
    title: "Authorized Offensive Testing",
    description: "Recon → web → bug bounty methodology",
    steps: [
      { title: "Nmap Scanning", href: "/notes/networking/nmap-scanning-guide" },
      { title: "Bug Bounty Playbook", href: "/notes/security/bug-bounty-playbook" },
      {
        title: "Reverse Shells Reference",
        href: "/notes/security/reverse-shells-cheatsheet",
      },
    ],
  },
];

/** Learning paths whose steps include guides under `/notes/{subcategory}/`. */
export function getLearningPathsForHub(subcategory: string): LearningPath[] {
  const prefix = `/notes/${subcategory}/`;
  return LEARNING_PATHS.filter((path) =>
    path.steps.some((step) => step.href.startsWith(prefix)),
  );
}
