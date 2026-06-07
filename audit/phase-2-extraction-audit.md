# Phase 2 — Extraction Quality Audit

Comparison of MDX body text against matched PDF sources in `pdf_document/`.

| MDX Slug | PDF Source | Extraction Score | Defects |
| -------- | ---------- | ---------------- | ------- |
| `essential-linux-commands-for-cybersecurity-specialists` | `Essential Linux Commands for Cybersecurity Specialists.pdf.pdf` | 50 | OCR spaced-letter corruption; HTML entities instead of MDX components |
| `kali-linux-toolkit-guide` | `100KaliLinuxCommandsEveryHackerMustKnowPart02.pdf` | 90 | Repeated content blocks |
| `master-termux-handbook` | `Master Termux Handbook (2).pdf` | 90 | Repeated content blocks |
| `100-linux-command` | `+100 Linux Command (2).pdf` | 50 | OCR spaced-letter corruption; HTML entities instead of MDX components |
| `a-z-kali-linux-commands` | `+100 Linux Command (2).pdf` | 65 | OCR spaced-letter corruption |
| `linux-defensive-essentials` | not found | N/A | No PDF mapped |
| `kali-linux-hacking-cheat-sheet20-essential-tools` | `KALI LINUX HACKING CHEAT SHEET20 Essential tools.pdf` | 70 | HTML entities instead of MDX components; Missing headings vs PDF structure |
| `100-kali-linux-commands-every-ethical-hacker-must-know-part-1` | `100_Kali_Linux_Commands_Every_Ethical_Hacker_Must_Know–PART_1.pdf` | 90 | Repeated content blocks |
| `100-kali-linux-commands-every-ethical-hacker-must-know-part-3` | `100_Kali_Linux_Commands_Every_Ethical_Hacker_Must_Know_–_Part_3.pdf` | 90 | Repeated content blocks |
| `top-50-kali-linux-tools-guide-for-offensive-professionals-pdf-20250818` | `Top_50_Kali_Linux_Tools_Guide_for_Offensive_Professionals_pdf_20250818.pdf` | 50 | OCR spaced-letter corruption; HTML entities instead of MDX components |
| `kali-linux-revealed` | `Kali_Linux_REVELEALED.pdf` | 25 | OCR spaced-letter corruption; HTML entities instead of MDX components; Oversized book dump |
| `nmap-scanning-guide` | `NMAP COMMANDS CHEAT SHEET.pdf` | 75 | HTML entities instead of MDX components; Broken tables (missing separator row) |
| `wireshark` | `TShark Wireshark Power but CLI-First.pdf` | 75 | HTML entities instead of MDX components; Possible duplicate merge bloat |
| `networking-security-interview-qa-guide-osi-to-firewall` | `Networking_&_Security_Interview_Q&A_Guide_OSI_to_Firewall.pdf` | 35 | OCR spaced-letter corruption; HTML entities instead of MDX components; Missing headings vs PDF structure |
| `10-github-repositories-for-learning-ethical-hacking-2026` | `10 GitHub Repositories for Learning Ethical Hacking 2026.pdf` | 55 | Generic sanitized placeholder body |
| `blue-team-complete-guide` | `Blue team handbook _ incident response edition.pdf` | 15 | OCR spaced-letter corruption; HTML entities instead of MDX components; Broken tables (missing separator row); Oversized book dump |
| `bug-bounty-playbook` | `Bug Bounty Playbook.pdf` | 10 | OCR spaced-letter corruption; HTML entities instead of MDX components; Missing headings vs PDF structure; Oversized book dump |
| `metasploit-for-beginners` | `Metasploit for Beginners.pdf` | 50 | OCR spaced-letter corruption; HTML entities instead of MDX components |
| `reverse-shells-cheatsheet` | `Linux and windows reverse shell scripts.pdf` | 90 | Repeated content blocks |
| `top-10-mobile-penetration-testing-tools-for-ethical-hackers` | `Top 10 Mobile Penetration Testing Tools for Ethical Hackers.pdf` | 65 | OCR spaced-letter corruption |
| `wireless-penetration-testing-bettercap` | `Wireless Penetration Testing_ Bettercap .pdf` | 40 | OCR spaced-letter corruption; HTML entities instead of MDX components; Repeated content blocks |
| `python-guide` | `Python Guide.pdf` | 25 | OCR spaced-letter corruption; HTML entities instead of MDX components; Oversized book dump |
| `black-hat-python-a-must-read-for-ethical-hackers-pentesters` | `Black_Hat_Python_–_A_Must_Read_for_Ethical_Hackers_&_Pentesters_.pdf` | 15 | OCR spaced-letter corruption; HTML entities instead of MDX components; Broken tables (missing separator row); Oversized book dump |
| `oscp-cheatsheet` | `OSCP CheatSheet.pdf` | 20 | Generic sanitized placeholder body; Missing headings vs PDF structure; Incomplete extraction vs PDF |
| `creatively-malicious-prompt-engineering` | `Creatively Malicious Prompt Engineering.pdf` | 35 | Generic sanitized placeholder body; Incomplete extraction vs PDF |
| `hacking-drone-with-dronesploit-part1` | `Hacking Drone with DroneSploit part1.pdf` | 55 | Generic sanitized placeholder body |
| `top-20-free-cyber-security-tools-you-must-learn-in-2026` | `Top 20 FREE Cyber Security Tools You MUST Learn in 2026 (1).pdf` | 75 | Missing headings vs PDF structure; Repeated content blocks |
| `web-security-fundamentals` | `Web Security Basic To expert.pdf` | 80 | Broken tables (missing separator row); Repeated content blocks |
| `sqlmap-guide` | `SqlMap Guide.pdf` | 70 | HTML entities instead of MDX components; Missing headings vs PDF structure |
| `nessus-vulnerability-scanning` | `🧿 Vulnerability Scanning with Nessus - hexsec.pdf` | 75 | HTML entities instead of MDX components; Broken tables (missing separator row) |
| `nuclei-plugin-burp-suite-template-creation-guide` | `Nuclei Plugin & Burp Suite – Template Creation Guide.pdf` | 50 | OCR spaced-letter corruption; HTML entities instead of MDX components |
| `api-gateway-security-implementation-and-best-practices` | `API Gateway Security Implementation and Best Practices.pdf` | 85 | HTML entities instead of MDX components |
| `top-10-web-vulnerability-scanners-every-ethical-hacker-must-know` | `Top_10_Web_Vulnerability_Scanners_Every_Ethical_Hacker_Must_Know.pdf` | 35 | OCR spaced-letter corruption; HTML entities instead of MDX components; Missing headings vs PDF structure |
| `web-application-hacking` | `Web Application Hacking.pdf` | 25 | OCR spaced-letter corruption; HTML entities instead of MDX components; Missing headings vs PDF structure; Repeated content blocks |
| `windows-defensive-cmd` | (hand-crafted) | 85 | None — original content |
| `powershell-auditing` | (hand-crafted) | 85 | None — original content |
| `windows-event-log-analysis-advanced-threat-detection-guide` | `Windows Event Log Analysis - Advanced Threat Detection Guide.pdf` | 85 | HTML entities instead of MDX components |
| `basic-windows-cmd-for-pentesters` | `Basic Windows CMD for Pentesters – Defensive Cheat Sheet.pdf` | 75 | HTML entities instead of MDX components; Repeated content blocks |
| `windows-cli-100-commands-every-hacker-should-know-compressed` | `Windows CLI 100 Commands Every Hacker Should Know_compressed.pdf` | 50 | OCR spaced-letter corruption; HTML entities instead of MDX components |
| `powershell-cheat-sheet-every-windows-user-saves-compressed` | `PowerShell Cheat Sheet Every Windows User Saves-compressed.pdf` | 50 | OCR spaced-letter corruption; Missing headings vs PDF structure |

## Per-File Defect Checklist

### essential-linux-commands-for-cybersecurity-specialists
- **PDF:** `Essential Linux Commands for Cybersecurity Specialists.pdf.pdf`
- **Score:** 50
  - [ ] OCR spaced-letter corruption
  - [ ] HTML entities instead of MDX components

### kali-linux-toolkit-guide
- **PDF:** `100KaliLinuxCommandsEveryHackerMustKnowPart02.pdf`
- **Score:** 90
  - [ ] Repeated content blocks

### master-termux-handbook
- **PDF:** `Master Termux Handbook (2).pdf`
- **Score:** 90
  - [ ] Repeated content blocks

### 100-linux-command
- **PDF:** `+100 Linux Command (2).pdf`
- **Score:** 50
  - [ ] OCR spaced-letter corruption
  - [ ] HTML entities instead of MDX components

### a-z-kali-linux-commands
- **PDF:** `+100 Linux Command (2).pdf`
- **Score:** 65
  - [ ] OCR spaced-letter corruption

### kali-linux-hacking-cheat-sheet20-essential-tools
- **PDF:** `KALI LINUX HACKING CHEAT SHEET20 Essential tools.pdf`
- **Score:** 70
  - [ ] HTML entities instead of MDX components
  - [ ] Missing headings vs PDF structure

### 100-kali-linux-commands-every-ethical-hacker-must-know-part-1
- **PDF:** `100_Kali_Linux_Commands_Every_Ethical_Hacker_Must_Know–PART_1.pdf`
- **Score:** 90
  - [ ] Repeated content blocks

### 100-kali-linux-commands-every-ethical-hacker-must-know-part-3
- **PDF:** `100_Kali_Linux_Commands_Every_Ethical_Hacker_Must_Know_–_Part_3.pdf`
- **Score:** 90
  - [ ] Repeated content blocks

### top-50-kali-linux-tools-guide-for-offensive-professionals-pdf-20250818
- **PDF:** `Top_50_Kali_Linux_Tools_Guide_for_Offensive_Professionals_pdf_20250818.pdf`
- **Score:** 50
  - [ ] OCR spaced-letter corruption
  - [ ] HTML entities instead of MDX components

### kali-linux-revealed
- **PDF:** `Kali_Linux_REVELEALED.pdf`
- **Score:** 25
  - [ ] OCR spaced-letter corruption
  - [ ] HTML entities instead of MDX components
  - [ ] Oversized book dump

### nmap-scanning-guide
- **PDF:** `NMAP COMMANDS CHEAT SHEET.pdf`
- **Score:** 75
  - [ ] HTML entities instead of MDX components
  - [ ] Broken tables (missing separator row)

### wireshark
- **PDF:** `TShark Wireshark Power but CLI-First.pdf`
- **Score:** 75
  - [ ] HTML entities instead of MDX components
  - [ ] Possible duplicate merge bloat

### networking-security-interview-qa-guide-osi-to-firewall
- **PDF:** `Networking_&_Security_Interview_Q&A_Guide_OSI_to_Firewall.pdf`
- **Score:** 35
  - [ ] OCR spaced-letter corruption
  - [ ] HTML entities instead of MDX components
  - [ ] Missing headings vs PDF structure

### 10-github-repositories-for-learning-ethical-hacking-2026
- **PDF:** `10 GitHub Repositories for Learning Ethical Hacking 2026.pdf`
- **Score:** 55
  - [ ] Generic sanitized placeholder body

### blue-team-complete-guide
- **PDF:** `Blue team handbook _ incident response edition.pdf`
- **Score:** 15
  - [ ] OCR spaced-letter corruption
  - [ ] HTML entities instead of MDX components
  - [ ] Broken tables (missing separator row)
  - [ ] Oversized book dump

### bug-bounty-playbook
- **PDF:** `Bug Bounty Playbook.pdf`
- **Score:** 10
  - [ ] OCR spaced-letter corruption
  - [ ] HTML entities instead of MDX components
  - [ ] Missing headings vs PDF structure
  - [ ] Oversized book dump

### metasploit-for-beginners
- **PDF:** `Metasploit for Beginners.pdf`
- **Score:** 50
  - [ ] OCR spaced-letter corruption
  - [ ] HTML entities instead of MDX components

### reverse-shells-cheatsheet
- **PDF:** `Linux and windows reverse shell scripts.pdf`
- **Score:** 90
  - [ ] Repeated content blocks

### top-10-mobile-penetration-testing-tools-for-ethical-hackers
- **PDF:** `Top 10 Mobile Penetration Testing Tools for Ethical Hackers.pdf`
- **Score:** 65
  - [ ] OCR spaced-letter corruption

### wireless-penetration-testing-bettercap
- **PDF:** `Wireless Penetration Testing_ Bettercap .pdf`
- **Score:** 40
  - [ ] OCR spaced-letter corruption
  - [ ] HTML entities instead of MDX components
  - [ ] Repeated content blocks

### python-guide
- **PDF:** `Python Guide.pdf`
- **Score:** 25
  - [ ] OCR spaced-letter corruption
  - [ ] HTML entities instead of MDX components
  - [ ] Oversized book dump

### black-hat-python-a-must-read-for-ethical-hackers-pentesters
- **PDF:** `Black_Hat_Python_–_A_Must_Read_for_Ethical_Hackers_&_Pentesters_.pdf`
- **Score:** 15
  - [ ] OCR spaced-letter corruption
  - [ ] HTML entities instead of MDX components
  - [ ] Broken tables (missing separator row)
  - [ ] Oversized book dump

### oscp-cheatsheet
- **PDF:** `OSCP CheatSheet.pdf`
- **Score:** 20
  - [ ] Generic sanitized placeholder body
  - [ ] Missing headings vs PDF structure
  - [ ] Incomplete extraction vs PDF

### creatively-malicious-prompt-engineering
- **PDF:** `Creatively Malicious Prompt Engineering.pdf`
- **Score:** 35
  - [ ] Generic sanitized placeholder body
  - [ ] Incomplete extraction vs PDF

### hacking-drone-with-dronesploit-part1
- **PDF:** `Hacking Drone with DroneSploit part1.pdf`
- **Score:** 55
  - [ ] Generic sanitized placeholder body

### top-20-free-cyber-security-tools-you-must-learn-in-2026
- **PDF:** `Top 20 FREE Cyber Security Tools You MUST Learn in 2026 (1).pdf`
- **Score:** 75
  - [ ] Missing headings vs PDF structure
  - [ ] Repeated content blocks

### web-security-fundamentals
- **PDF:** `Web Security Basic To expert.pdf`
- **Score:** 80
  - [ ] Broken tables (missing separator row)
  - [ ] Repeated content blocks

### sqlmap-guide
- **PDF:** `SqlMap Guide.pdf`
- **Score:** 70
  - [ ] HTML entities instead of MDX components
  - [ ] Missing headings vs PDF structure

### nessus-vulnerability-scanning
- **PDF:** `🧿 Vulnerability Scanning with Nessus - hexsec.pdf`
- **Score:** 75
  - [ ] HTML entities instead of MDX components
  - [ ] Broken tables (missing separator row)

### nuclei-plugin-burp-suite-template-creation-guide
- **PDF:** `Nuclei Plugin & Burp Suite – Template Creation Guide.pdf`
- **Score:** 50
  - [ ] OCR spaced-letter corruption
  - [ ] HTML entities instead of MDX components

### api-gateway-security-implementation-and-best-practices
- **PDF:** `API Gateway Security Implementation and Best Practices.pdf`
- **Score:** 85
  - [ ] HTML entities instead of MDX components

### top-10-web-vulnerability-scanners-every-ethical-hacker-must-know
- **PDF:** `Top_10_Web_Vulnerability_Scanners_Every_Ethical_Hacker_Must_Know.pdf`
- **Score:** 35
  - [ ] OCR spaced-letter corruption
  - [ ] HTML entities instead of MDX components
  - [ ] Missing headings vs PDF structure

### web-application-hacking
- **PDF:** `Web Application Hacking.pdf`
- **Score:** 25
  - [ ] OCR spaced-letter corruption
  - [ ] HTML entities instead of MDX components
  - [ ] Missing headings vs PDF structure
  - [ ] Repeated content blocks

### windows-event-log-analysis-advanced-threat-detection-guide
- **PDF:** `Windows Event Log Analysis - Advanced Threat Detection Guide.pdf`
- **Score:** 85
  - [ ] HTML entities instead of MDX components

### basic-windows-cmd-for-pentesters
- **PDF:** `Basic Windows CMD for Pentesters – Defensive Cheat Sheet.pdf`
- **Score:** 75
  - [ ] HTML entities instead of MDX components
  - [ ] Repeated content blocks

### windows-cli-100-commands-every-hacker-should-know-compressed
- **PDF:** `Windows CLI 100 Commands Every Hacker Should Know_compressed.pdf`
- **Score:** 50
  - [ ] OCR spaced-letter corruption
  - [ ] HTML entities instead of MDX components

### powershell-cheat-sheet-every-windows-user-saves-compressed
- **PDF:** `PowerShell Cheat Sheet Every Windows User Saves-compressed.pdf`
- **Score:** 50
  - [ ] OCR spaced-letter corruption
  - [ ] Missing headings vs PDF structure
