import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const source = join(
  process.cwd(),
  "audit/corrected-mdx/content/notes/security/blue-team-complete-guide.mdx",
);
const target = join(
  process.cwd(),
  "content/notes/security/blue-team-complete-guide.mdx",
);

let content = readFileSync(source, "utf8");

content = content.replace(
  'readingTime: "350 min read"\r\n---',
  'readingTime: "350 min read"\r\nfeatured: true\r\n---',
);

const shellStyleMarker = "Shell Style\r\nsection contents";
const shellStart = content.indexOf(shellStyleMarker);
const introStart = content.indexOf("Blue T eam Notes");

if (introStart === -1 || shellStart === -1) {
  throw new Error("Could not find intro markers in blue-team guide");
}

const hubIntro = `Canonical blue team reference for **info.anupambaral.com.np**. This hub page links defensive workflows across Windows hunting, network forensics, and Linux host analysis. The sections below retain the full one-liner archive for field use.

## Learning path

1. **This guide** — SOC workflows, hunting one-liners, and forensics tooling
2. [Windows Event Log Analysis](/notes/windows/windows-event-log-analysis-advanced-threat-detection-guide) — host-side threat detection
3. [PowerShell Auditing](/notes/windows/powershell-auditing) — script and execution auditing
4. [Wireshark & TShark](/notes/networking/wireshark) — packet-level confirmation of suspicious traffic

## Hub cross-links

| Area | Start here |
| --- | --- |
| Network forensics | [Wireshark & TShark](/notes/networking/wireshark) |
| Recon traffic patterns | [Nmap Scanning Guide](/notes/networking/nmap-scanning-guide) |
| Windows hunting | [Event Log Analysis](/notes/windows/windows-event-log-analysis-advanced-threat-detection-guide) |
| Linux correlation | [Essential Linux Commands](/notes/linux/essential-linux-commands-for-cybersecurity-specialists) |

---

## Reference archive

`;

content =
  content.slice(0, introStart) + hubIntro + content.slice(shellStart);

const footer = `## Related guides

- [Wireshark & TShark — Network Forensics Guide](/notes/networking/wireshark)
- [Nmap Scanning & Host Discovery](/notes/networking/nmap-scanning-guide)
- [Windows Event Log Analysis](/notes/windows/windows-event-log-analysis-advanced-threat-detection-guide)
- [PowerShell Auditing](/notes/windows/powershell-auditing)
- [Essential Linux Commands](/notes/linux/essential-linux-commands-for-cybersecurity-specialists)

## Continue learning

→ Next: [Windows Event Log Analysis](/notes/windows/windows-event-log-analysis-advanced-threat-detection-guide)

`;

content = content.replace(
  "---\r\n\r\n## Educational Use Notice",
  `${footer}---\r\n\r\n## Educational Use Notice`,
);

writeFileSync(target, content, "utf8");
console.log(`Restored ${target} (${content.length} bytes)`);
