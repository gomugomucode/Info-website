"""Shared config for content audit scripts."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CONTENT = ROOT / "content"
AUDIT = ROOT / "audit"
PDF_DIRS = [ROOT / "pdf_document", ROOT / "Telegram Desktop"]

# slug -> (pdf_filename_substring, status, merge_target, topic)
NOTE_META = {
    "essential-linux-commands-for-cybersecurity-specialists": (
        "Essential Linux Commands",
        "REWRITE",
        None,
        "Linux CLI pillar",
    ),
    "kali-linux-toolkit-guide": ("Kali", "KEEP", None, "Kali hub"),
    "master-termux-handbook": ("Master Termux", "REWRITE", None, "Termux"),
    "100-linux-command": ("+100 Linux Command", "MERGE", "essential-linux-commands-for-cybersecurity-specialists", "Linux CLI dup"),
    "a-z-kali-linux-commands": ("A", "MERGE", "essential-linux-commands-for-cybersecurity-specialists", "Kali dup"),
    "linux-defensive-essentials": ("", "MERGE", "essential-linux-commands-for-cybersecurity-specialists", "Defensive CLI"),
    "kali-linux-hacking-cheat-sheet20-essential-tools": ("KALI LINUX HACKING", "MERGE", "kali-linux-toolkit-guide", "Kali tools dup"),
    "100-kali-linux-commands-every-ethical-hacker-must-know-part-1": ("PART_1", "MERGE", "kali-linux-toolkit-guide", "Kali commands dup"),
    "100-kali-linux-commands-every-ethical-hacker-must-know-part-3": ("Part_3", "MERGE", "kali-linux-toolkit-guide", "Kali commands dup"),
    "top-50-kali-linux-tools-guide-for-offensive-professionals-pdf-20250818": (
        "Top_50_Kali",
        "MERGE",
        "kali-linux-toolkit-guide",
        "Kali tools dup",
    ),
    "kali-linux-revealed": ("Kali_Linux_REVELEALED", "DELETE", "kali-linux-toolkit-guide", "Full book OCR"),
    "nmap-scanning-guide": ("NMAP", "REWRITE", None, "Nmap hub"),
    "wireshark": ("Wireshark", "REWRITE", None, "Wireshark hub"),
    "networking-security-interview-qa-guide-osi-to-firewall": (
        "Interview",
        "REWRITE",
        None,
        "Interview Q&A",
    ),
    "10-github-repositories-for-learning-ethical-hacking-2026": (
        "GitHub Repositories",
        "DELETE",
        None,
        "Listicle stub",
    ),
    "blue-team-complete-guide": ("Blue Team", "KEEP", None, "Blue Team hub"),
    "bug-bounty-playbook": ("Bug Bounty Playbook", "REWRITE", None, "Bug bounty hub"),
    "metasploit-for-beginners": ("Metasploit for Beginners", "REWRITE", None, "Metasploit hub"),
    "reverse-shells-cheatsheet": ("reverse shell", "KEEP", None, "Shells reference"),
    "top-10-mobile-penetration-testing-tools-for-ethical-hackers": (
        "Mobile Penetration",
        "REWRITE",
        None,
        "Mobile tools",
    ),
    "wireless-penetration-testing-bettercap": ("Bettercap", "REWRITE", None, "Wireless"),
    "python-guide": ("Python Guide", "MERGE", "blue-team-complete-guide", "Python book dump"),
    "black-hat-python-a-must-read-for-ethical-hackers-pentesters": (
        "Black_Hat_Python",
        "MERGE",
        "blue-team-complete-guide",
        "Python offensive",
    ),
    "oscp-cheatsheet": ("OSCP CheatSheet", "DELETE", None, "Placeholder"),
    "creatively-malicious-prompt-engineering": (
        "Creatively Malicious",
        "DELETE",
        None,
        "Placeholder",
    ),
    "hacking-drone-with-dronesploit-part1": ("DroneSploit part1", "DELETE", None, "Placeholder"),
    "top-20-free-cyber-security-tools-you-must-learn-in-2026": (
        "Top 20 FREE",
        "DELETE",
        None,
        "Thin listicle",
    ),
    "web-security-fundamentals": ("Web Security", "KEEP", None, "Web hub"),
    "sqlmap-guide": ("SqlMap Guide", "REWRITE", None, "SQLMap hub"),
    "nessus-vulnerability-scanning": ("Nessus", "KEEP", None, "Scanning"),
    "nuclei-plugin-burp-suite-template-creation-guide": ("Nuclei Plugin", "REWRITE", None, "Burp/Nuclei"),
    "api-gateway-security-implementation-and-best-practices": (
        "API Gateway",
        "KEEP",
        None,
        "API security",
    ),
    "top-10-web-vulnerability-scanners-every-ethical-hacker-must-know": (
        "Web_Vulnerability_Scanners",
        "MERGE",
        "web-security-fundamentals",
        "Scanner list dup",
    ),
    "web-application-hacking": ("Web Application Hacking", "MERGE", "web-security-fundamentals", "AppSec dup"),
    "windows-defensive-cmd": ("", "KEEP", None, "Windows CMD hub"),
    "powershell-auditing": ("", "KEEP", None, "PowerShell hub"),
    "windows-event-log-analysis-advanced-threat-detection-guide": (
        "Event Log Analysis",
        "REWRITE",
        None,
        "Event logs",
    ),
    "basic-windows-cmd-for-pentesters": ("Basic Windows CMD", "MERGE", "windows-defensive-cmd", "CMD dup"),
    "windows-cli-100-commands-every-hacker-should-know-compressed": (
        "Windows CLI 100",
        "MERGE",
        "windows-defensive-cmd",
        "CMD dup",
    ),
    "powershell-cheat-sheet-every-windows-user-saves-compressed": (
        "PowerShell Cheat Sheet",
        "MERGE",
        "powershell-auditing",
        "PS dup",
    ),
}

CHEATSHEET_SLUGS = [
    "ai-langchain-cheatsheet",
    "deployment-cheatsheet",
    "docker-cheatsheet",
    "fastapi-cheatsheet",
    "git-cheat-sheet",
    "langchain-ai-cheatsheet",
    "linux-terminal-cheatsheet",
    "networking-cheatsheet",
    "nextjs-cheatsheet",
    "react-cheatsheet",
    "sql-cheatsheet",
    "tailwindcss-cheatsheet",
    "web-development-cheatsheet",
]
