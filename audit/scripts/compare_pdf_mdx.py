#!/usr/bin/env python3
"""Phase 2: Compare MDX files against source PDFs."""
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from config import AUDIT, CONTENT, PDF_DIRS, NOTE_META


def find_pdf(substring: str) -> Path | None:
    if not substring:
        return None
    sub = substring.lower()
    for d in PDF_DIRS:
        if not d.exists():
            continue
        for p in d.glob("*.pdf"):
            if sub in p.name.lower():
                return p
    return None


def extract_pdf_text(pdf_path: Path) -> str:
    try:
        from pypdf import PdfReader

        reader = PdfReader(str(pdf_path))
        return "\n".join((page.extract_text() or "") for page in reader.pages)
    except Exception:
        return ""


def analyze_defects(body: str, pdf_text: str) -> dict:
    flags = []
    if re.search(r"\w \w \w \w", body):
        flags.append("OCR spaced-letter corruption")
    if "&lt;" in body or "&gt;" in body:
        flags.append("HTML entities instead of MDX components")
    if re.search(r"^\|[^|\n]+\|[^|\n]+\|", body, re.MULTILINE) and "| --- |" not in body:
        flags.append("Broken tables (missing separator row)")
    if body.count("```") % 2 != 0:
        flags.append("Missing code fences")
    if "Security & Hardening Reference" in body and len(body) < 4000:
        flags.append("Generic sanitized placeholder body")
    pdf_h = len(re.findall(r"^[A-Z][^\n]{10,80}$", pdf_text[:5000], re.MULTILINE))
    mdx_h = len(re.findall(r"^#{1,3}\s", body, re.MULTILINE))
    if pdf_text and mdx_h < max(2, pdf_h // 5):
        flags.append("Missing headings vs PDF structure")
    if len(body) > 100_000:
        flags.append("Oversized book dump")
    dup_lines = len(set(body.splitlines())) < len(body.splitlines()) * 0.85
    if dup_lines and len(body.splitlines()) > 50:
        flags.append("Repeated content blocks")
    wc_body = len(body.split())
    wc_pdf = len(pdf_text.split())
    if pdf_text and wc_body < wc_pdf * 0.15 and wc_pdf > 500:
        flags.append("Incomplete extraction vs PDF")
    if pdf_text and wc_body > wc_pdf * 1.5 and wc_pdf > 1000:
        flags.append("Possible duplicate merge bloat")

    score = 100
    penalties = {
        "OCR spaced-letter corruption": 35,
        "HTML entities instead of MDX components": 15,
        "Broken tables (missing separator row)": 10,
        "Missing code fences": 10,
        "Generic sanitized placeholder body": 45,
        "Missing headings vs PDF structure": 15,
        "Oversized book dump": 25,
        "Repeated content blocks": 10,
        "Incomplete extraction vs PDF": 20,
        "Possible duplicate merge bloat": 10,
    }
    for f in flags:
        score -= penalties.get(f, 5)
    return {"flags": flags, "score": max(0, min(100, score))}


def main():
    lines = [
        "# Phase 2 — Extraction Quality Audit",
        "",
        "Comparison of MDX body text against matched PDF sources in `pdf_document/`.",
        "",
        "| MDX Slug | PDF Source | Extraction Score | Defects |",
        "| -------- | ---------- | ---------------- | ------- |",
    ]
    details = ["", "## Per-File Defect Checklist", ""]

    for slug, (pdf_sub, status, _, topic) in NOTE_META.items():
        mdx_path = None
        for p in CONTENT.rglob(f"{slug}.mdx"):
            mdx_path = p
            break
        if not mdx_path:
            continue
        text = mdx_path.read_text(encoding="utf-8", errors="ignore")
        body = text.split("---", 2)[-1] if text.startswith("---") else text
        pdf = find_pdf(pdf_sub)
        pdf_text = extract_pdf_text(pdf) if pdf else ""
        if not pdf and status in ("KEEP", "REWRITE") and pdf_sub == "":
            lines.append(f"| `{slug}` | (hand-crafted) | 85 | None — original content |")
            continue
        if not pdf:
            lines.append(f"| `{slug}` | not found | N/A | No PDF mapped |")
            continue
        result = analyze_defects(body, pdf_text)
        flag_str = "; ".join(result["flags"]) if result["flags"] else "Minor or none"
        lines.append(
            f"| `{slug}` | `{pdf.name}` | {result['score']} | {flag_str} |"
        )
        details.append(f"### {slug}")
        details.append(f"- **PDF:** `{pdf.name}`")
        details.append(f"- **Score:** {result['score']}")
        if result["flags"]:
            for f in result["flags"]:
                details.append(f"  - [ ] {f}")
        else:
            details.append("  - [x] No major extraction defects detected")
        details.append("")

    AUDIT.mkdir(parents=True, exist_ok=True)
    (AUDIT / "phase-2-extraction-audit.md").write_text(
        "\n".join(lines + details), encoding="utf-8"
    )
    print("Wrote phase-2-extraction-audit.md")


if __name__ == "__main__":
    main()
