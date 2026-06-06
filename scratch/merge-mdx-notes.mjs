import fs from "fs";
import path from "path";

const EDUCATIONAL_NOTICE = /^---\s*\n## Educational Use Notice[\s\S]*$/m;

function parseMdx(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw new Error(`Invalid MDX frontmatter: ${filePath}`);
  return { frontmatter: match[1], body: match[2].trimEnd() };
}

function stripEducationalNotice(body) {
  return body.replace(EDUCATIONAL_NOTICE, "").trimEnd();
}

function mergeNotes({
  targetPath,
  primaryPath,
  secondaryPath,
  sectionTitle,
  frontmatter,
}) {
  const primary = parseMdx(primaryPath);
  const secondary = parseMdx(secondaryPath);

  const primaryBody = stripEducationalNotice(primary.body);
  const secondaryBody = stripEducationalNotice(secondary.body);

  const mergedBody = `${primaryBody}

---

## ${sectionTitle}

${secondaryBody}

---

## Educational Use Notice

This content is provided strictly for educational purposes, defensive security awareness, system administration, diagnostics, and ethical learning environments.

Always obtain proper authorization before testing systems or networks. The information published on this website is intended to promote responsible security practices, auditing, monitoring, and infrastructure hardening.

---
`;

  const fmLines = Object.entries(frontmatter)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return `${key}: [${value.map((v) => `"${v}"`).join(", ")}]`;
      }
      return `${key}: "${String(value).replace(/"/g, '\\"')}"`;
    })
    .join("\n");

  fs.writeFileSync(targetPath, `---\n${fmLines}\n---\n\n${mergedBody}`);
  console.log(`Merged → ${targetPath}`);
}

const root = path.resolve("content/notes");

mergeNotes({
  targetPath: path.join(root, "networking/wireshark.mdx"),
  primaryPath: path.join(root, "networking/wireshark.mdx"),
  secondaryPath: path.join(root, "networking/tshark-wireshark-power-but-cli-first.mdx"),
  sectionTitle: "Part 2: TShark CLI Reference",
  frontmatter: {
    title: "Wireshark & TShark Complete Guide",
    description:
      "Comprehensive GUI and CLI network packet analysis reference — Wireshark capture, filtering, forensics, and TShark command-line workflows.",
    date: "2026-06-06",
    tags: ["wireshark", "tshark", "network-analysis", "packet-capture", "forensics"],
    category: "notes",
    subcategory: "networking",
    difficulty: "Intermediate",
    readingTime: "80 min read",
  },
});

mergeNotes({
  targetPath: path.join(root, "security/blue-team-complete-guide.mdx"),
  primaryPath: path.join(root, "security/blue-team-notes.mdx"),
  secondaryPath: path.join(root, "security/blue-team-toolkit.mdx"),
  sectionTitle: "Appendix: Blue Team Toolkit Reference",
  frontmatter: {
    title: "Blue Team Complete Guide",
    description:
      "Authoritative blue team reference — Windows/Linux/macOS hunting one-liners, SOC workflows, forensics, and the full defensive toolkit catalog.",
    date: "2026-06-06",
    tags: ["blue-team", "soc", "incident-response", "forensics", "defense"],
    category: "notes",
    subcategory: "security",
    difficulty: "Advanced",
    readingTime: "350 min read",
  },
});
