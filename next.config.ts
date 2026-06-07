import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ── Linux stubs & duplicates ──────────────────────────────────────────
      {
        source: "/notes/linux/linux-commands-every-cybersecurity-specialist-needs",
        destination: "/notes/linux/essential-linux-commands-for-cybersecurity-specialists",
        permanent: true,
      },
      {
        source: "/notes/linux/kali-linux-cheat-sheet-for-penetration-testers",
        destination: "/notes/linux/kali-linux-toolkit-guide",
        permanent: true,
      },
      {
        source: "/notes/linux/top-50-kali-linux-tools",
        destination: "/notes/linux/kali-linux-toolkit-guide",
        permanent: true,
      },
      {
        source: "/notes/linux/50-kali-linux-tools-my-compressed",
        destination: "/notes/linux/kali-linux-toolkit-guide",
        permanent: true,
      },
      {
        source: "/notes/linux/kali-linux-revelealed",
        destination: "/notes/linux/kali-linux-revealed",
        permanent: true,
      },
      {
        source: "/notes/linux/a-z-kali-linux-command",
        destination: "/notes/linux/a-z-kali-linux-commands",
        permanent: true,
      },
      {
        source: "/notes/linux/termux-handbook",
        destination: "/notes/linux/master-termux-handbook",
        permanent: true,
      },
      {
        source: "/notes/linux/linux-and-windows-reverse-shell-scripts",
        destination: "/notes/security/reverse-shells-cheatsheet",
        permanent: true,
      },

      // ── Networking stubs & duplicates ─────────────────────────────────────
      {
        source: "/notes/networking/firewall-security-commands",
        destination: "/notes/networking/networking-security-interview-qa-guide-osi-to-firewall",
        permanent: true,
      },
      {
        source: "/notes/networking/nmap-commands-cheat-sheet",
        destination: "/notes/networking/nmap-scanning-guide",
        permanent: true,
      },
      {
        source: "/notes/networking/wireshark-tshark-cli",
        destination: "/notes/networking/wireshark",
        permanent: true,
      },
      {
        source: "/notes/networking/tshark-wireshark-power-but-cli-first",
        destination: "/notes/networking/wireshark",
        permanent: true,
      },

      // ── Security stubs & duplicates ───────────────────────────────────────
      {
        source: "/notes/security/oscp-cheatsheet-page",
        destination: "/notes/security/oscp-cheatsheet",
        permanent: true,
      },
      {
        source: "/notes/security/bug-bounty-methodology-2026-compressed",
        destination: "/notes/security/bug-bounty-playbook",
        permanent: true,
      },
      {
        source: "/notes/security/bug-hunting-guide",
        destination: "/notes/security/bug-bounty-playbook",
        permanent: true,
      },
      {
        source: "/notes/security/the-complete-guide-to-metasploit-tutorial",
        destination: "/notes/security/metasploit-for-beginners",
        permanent: true,
      },
      {
        source: "/notes/security/metasploit-advanced-techniques-exploitation-mastery",
        destination: "/notes/security/metasploit-for-beginners",
        permanent: true,
      },
      {
        source: "/notes/security/windows-event-log-analysis",
        destination: "/notes/windows/windows-event-log-analysis-advanced-threat-detection-guide",
        permanent: true,
      },
      {
        source: "/notes/security/api-gateway-hardening",
        destination: "/notes/web/api-gateway-security-implementation-and-best-practices",
        permanent: true,
      },
      {
        source: "/notes/security/blue-team-notes",
        destination: "/notes/security/blue-team-complete-guide",
        permanent: true,
      },
      {
        source: "/notes/security/blue-team-toolkit",
        destination: "/notes/security/blue-team-complete-guide",
        permanent: true,
      },

      // ── Web stubs & duplicates ────────────────────────────────────────────
      {
        source: "/notes/web/sqlmap-sql-injection-attack",
        destination: "/notes/web/sqlmap-guide",
        permanent: true,
      },
      {
        source: "/notes/web/web-security-basic-to-expert",
        destination: "/notes/web/web-security-fundamentals",
        permanent: true,
      },
      {
        source: "/notes/web/hacking-project-to-get-started",
        destination: "/notes/web",
        permanent: true,
      },
      {
        source: "/notes/web/vulnerability-scanning-with-nessus-hexsec",
        destination: "/notes/web/nessus-vulnerability-scanning",
        permanent: true,
      },
      {
        source: "/notes/web/sqlmap-defensive-guide",
        destination: "/notes/web/sqlmap-guide",
        permanent: true,
      },

      // ── Windows stubs & duplicates ────────────────────────────────────────
      {
        source: "/notes/windows/basic-windows-cmd-for-pentesters-defensive-cheat-sheet",
        destination: "/notes/windows/basic-windows-cmd-for-pentesters",
        permanent: true,
      },
      {
        source: "/notes/windows/reverse-shells-windows-hexseccheatsheet",
        destination: "/notes/security/reverse-shells-cheatsheet",
        permanent: true,
      },

      // ── Phase 1 content consolidation ─────────────────────────────────────
      {
        source: "/notes/linux/linux-defensive-essentials",
        destination: "/notes/linux/essential-linux-commands-for-cybersecurity-specialists",
        permanent: true,
      },
      {
        source: "/notes/linux/100-linux-command",
        destination: "/notes/linux/essential-linux-commands-for-cybersecurity-specialists",
        permanent: true,
      },
      {
        source: "/notes/linux/a-z-kali-linux-commands",
        destination: "/notes/linux/essential-linux-commands-for-cybersecurity-specialists",
        permanent: true,
      },
      {
        source: "/notes/linux/kali-linux-hacking-cheat-sheet20-essential-tools",
        destination: "/notes/linux/kali-linux-toolkit-guide",
        permanent: true,
      },
      {
        source: "/notes/linux/100-kali-linux-commands-every-ethical-hacker-must-know-part-1",
        destination: "/notes/linux/kali-linux-toolkit-guide",
        permanent: true,
      },
      {
        source: "/notes/linux/100-kali-linux-commands-every-ethical-hacker-must-know-part-3",
        destination: "/notes/linux/kali-linux-toolkit-guide",
        permanent: true,
      },
      {
        source: "/notes/linux/top-50-kali-linux-tools-guide-for-offensive-professionals-pdf-20250818",
        destination: "/notes/linux/kali-linux-toolkit-guide",
        permanent: true,
      },
      {
        source: "/notes/linux/kali-linux-revealed",
        destination: "/notes/linux/kali-linux-toolkit-guide",
        permanent: true,
      },
      {
        source: "/notes/windows/basic-windows-cmd-for-pentesters",
        destination: "/notes/windows/windows-defensive-cmd",
        permanent: true,
      },
      {
        source: "/notes/windows/windows-cli-100-commands-every-hacker-should-know-compressed",
        destination: "/notes/windows/windows-defensive-cmd",
        permanent: true,
      },
      {
        source: "/notes/windows/powershell-cheat-sheet-every-windows-user-saves-compressed",
        destination: "/notes/windows/powershell-auditing",
        permanent: true,
      },
      {
        source: "/notes/web/web-application-hacking",
        destination: "/notes/web/web-security-fundamentals",
        permanent: true,
      },
      {
        source: "/notes/security/top-20-free-cyber-security-tools-you-must-learn-in-2026",
        destination: "/notes",
        permanent: true,
      },
      {
        source: "/notes/security/oscp-cheatsheet",
        destination: "/notes/security/bug-bounty-playbook",
        permanent: true,
      },
      {
        source: "/notes/security/python-guide",
        destination: "/notes/security/blue-team-complete-guide",
        permanent: true,
      },
      {
        source: "/notes/security/black-hat-python-a-must-read-for-ethical-hackers-pentesters",
        destination: "/notes/security/blue-team-complete-guide",
        permanent: true,
      },
      {
        source: "/notes/networking/10-github-repositories-for-learning-ethical-hacking-2026",
        destination: "/notes",
        permanent: true,
      },
      {
        source: "/notes/web/top-10-web-vulnerability-scanners-every-ethical-hacker-must-know",
        destination: "/notes/web/web-security-fundamentals",
        permanent: true,
      },
      {
        source: "/notes/security/creatively-malicious-prompt-engineering",
        destination: "/notes",
        permanent: true,
      },
      {
        source: "/notes/security/hacking-drone-with-dronesploit-part1",
        destination: "/notes",
        permanent: true,
      },

      // ── Archived dev cheatsheets (moved to audit/archived/cheatsheets/) ─
      {
        source: "/blog/ai-langchain-cheatsheet",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/deployment-cheatsheet",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/docker-cheatsheet",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/fastapi-cheatsheet",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/git-cheat-sheet",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/langchain-ai-cheatsheet",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/linux-terminal-cheatsheet",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/networking-cheatsheet",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/nextjs-cheatsheet",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/react-cheatsheet",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/sql-cheatsheet",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/tailwindcss-cheatsheet",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/web-development-cheatsheet",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
