#!/usr/bin/env python3
"""Phase 1: Build master inventory CSV and markdown report."""
import csv
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from config import AUDIT, CONTENT, NOTE_META, CHEATSHEET_SLUGS

FRONTMATTER_RE = re.compile(r"^---\s*\n(.*?)\n---\s*\n", re.DOTALL)
BOILERPLATE_RE = re.compile(
    r"---\s*\n\s*## Educational Use Notice[\s\S]*$", re.MULTILINE
)
TITLE_RE = re.compile(r'^title:\s*["\']?(.+?)["\']?\s*$', re.MULTILINE)
DESC_RE = re.compile(r'^description:\s*["\']?(.+?)["\']?\s*$', re.MULTILINE)
GENERIC_DESC = "defensive hardening, auditing, and threat detection reference guide"


def parse_frontmatter(text: str) -> tuple[dict, str]:
    m = FRONTMATTER_RE.match(text)
    if not m:
        return {}, text
    fm = m.group(1)
    body = text[m.end() :]
    meta = {}
    for line in fm.splitlines():
        if ":" in line:
            k, _, v = line.partition(":")
            meta[k.strip()] = v.strip().strip('"').strip("'")
    return meta, body


def word_count(body: str) -> int:
    body = BOILERPLATE_RE.sub("", body)
    body = re.sub(r"```[\s\S]*?```", " ", body)
    body = re.sub(r"[^\w\s]", " ", body)
    return len([w for w in body.split() if len(w) > 1])


def score_extraction(body: str, slug: str) -> int:
    score = 100
    if re.search(r"\w \w \w \w", body):
        score -= 35
    if "&lt;" in body or "&gt;" in body or "&#123;" in body:
        score -= 15
    if body.count("```") < 2 and slug not in ("nmap-scanning-guide", "windows-defensive-cmd"):
        score -= 10
    if "Hardening & Compliance Audits" in body and "Security & Hardening Reference" in body:
        score -= 40  # placeholder pattern
    if len(body) > 200_000:
        score -= 25
    if re.search(r">\s*\[!IMPORTANT\]", body):
        score -= 5
    headings = len(re.findall(r"^#{2,3}\s", body, re.MULTILINE))
    if headings < 2 and word_count(body) > 500:
        score -= 20
    return max(0, min(100, score))


def score_content(body: str, meta: dict, slug: str, status: str) -> int:
    if status == "DELETE":
        return max(5, min(20, word_count(body) // 20))
    if status == "ARCHIVE":
        return 80
    score = 70
    desc = meta.get("description", "")
    if GENERIC_DESC in desc.lower() or desc.lower().startswith("a defensive hardening"):
        score -= 15
    wc = word_count(body)
    if wc < 300:
        score -= 25
    elif wc > 15000 and status != "REWRITE":
        score -= 10
    if re.search(r"\w \w \w \w", body):
        score -= 25
    if "<Callout" in body or "<TerminalCommand" in body:
        score += 10
    if "## Related Resources" in body or "## Learning path" in body:
        score += 8
    if status == "KEEP":
        score += 5
    return max(0, min(100, score))


def category_for(path: Path) -> str:
    parts = path.parts
    if "cheatsheets" in parts:
        return "Cheatsheets"
    if "blog" in parts:
        return "Blog"
    if "notes" in parts:
        idx = parts.index("notes")
        if idx + 1 < len(parts):
            sub = parts[idx + 1]
            return {
                "linux": "Linux",
                "networking": "Networking",
                "security": "Security",
                "web": "Web Security",
                "windows": "Windows",
            }.get(sub, "Security")
    return "Unknown"


def status_for(path: Path, slug: str) -> tuple[str, str | None, str]:
    if "cheatsheets" in path.parts:
        return "ARCHIVE", None, "Dev reference"
    if slug in NOTE_META:
        _, status, merge, topic = NOTE_META[slug]
        return status, merge, topic
    if "blog" in path.parts:
        return "REWRITE", None, "Site intro"
    return "KEEP", None, "Uncategorized"


def main():
    rows = []
    for mdx in sorted(CONTENT.rglob("*.mdx")):
        rel = mdx.relative_to(ROOT := CONTENT.parent)
        slug = mdx.stem
        text = mdx.read_text(encoding="utf-8", errors="ignore")
        meta, body = parse_frontmatter(text)
        status, merge, topic = status_for(mdx, slug)
        ext = score_extraction(body, slug)
        cont = score_content(body, meta, slug, status)
        quality = int(ext * 0.4 + cont * 0.6)
        rows.append(
            {
                "file": str(rel).replace("\\", "/"),
                "slug": slug,
                "category": category_for(mdx),
                "word_count": word_count(body),
                "extraction_score": ext,
                "content_score": cont,
                "quality_score": quality,
                "topic": topic,
                "status": status,
                "merge_into": merge or "",
                "title": meta.get("title", slug),
            }
        )

    AUDIT.mkdir(parents=True, exist_ok=True)
    csv_path = AUDIT / "inventory.csv"
    with csv_path.open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(
            f,
            fieldnames=[
                "file",
                "slug",
                "category",
                "word_count",
                "extraction_score",
                "content_score",
                "quality_score",
                "topic",
                "status",
                "merge_into",
                "title",
            ],
        )
        w.writeheader()
        w.writerows(rows)

    md_lines = [
        "# Phase 1 — Content Inventory",
        "",
        f"**Generated:** audit run | **Total files:** {len(rows)}",
        "",
        "| File | Category | Words | Extraction | Content | Quality | Topic | Status |",
        "| ---- | -------- | ----- | ---------- | ------- | ------- | ----- | ------ |",
    ]
    for r in rows:
        md_lines.append(
            f"| `{r['file']}` | {r['category']} | {r['word_count']} | "
            f"{r['extraction_score']} | {r['content_score']} | {r['quality_score']} | "
            f"{r['topic']} | {r['status']} |"
        )
    md_lines.extend(
        [
            "",
            "## Summary by Status",
            "",
        ]
    )
    from collections import Counter

    c = Counter(r["status"] for r in rows)
    for k, v in sorted(c.items()):
        md_lines.append(f"- **{k}:** {v}")
    (AUDIT / "phase-1-inventory.md").write_text("\n".join(md_lines), encoding="utf-8")
    print(f"Wrote {csv_path} and phase-1-inventory.md ({len(rows)} files)")


if __name__ == "__main__":
    main()
