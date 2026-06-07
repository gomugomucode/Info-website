#!/usr/bin/env python3
"""Scan all MDX files for formatting issues and generate audit report."""
from __future__ import annotations

import re
import sys
from dataclasses import dataclass, field
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CONTENT_DIRS = [ROOT / "content", ROOT / "audit" / "archived" / "cheatsheets"]
REPORT_PATH = ROOT / "audit" / "mdx-formatting-audit.md"
CORRECTED_DIR = ROOT / "audit" / "corrected-mdx"

SEVERITY_ORDER = {"critical": 0, "high": 1, "medium": 2, "low": 3}


@dataclass
class Issue:
    line: int
    problem_type: str
    severity: str
    message: str
    suggested_fix: str


@dataclass
class FileResult:
    path: Path
    issues: list[Issue] = field(default_factory=list)


def split_frontmatter(text: str) -> tuple[str, str]:
    if text.startswith("---"):
        parts = text.split("---", 2)
        if len(parts) >= 3:
            return parts[0] + "---" + parts[1] + "---", parts[2]
    return "", text


def split_table_cells(row: str) -> list[str]:
    inner = row.strip().strip("|")
    cells: list[str] = []
    current: list[str] = []
    i = 0
    while i < len(inner):
        ch = inner[i]
        if ch == "\\" and i + 1 < len(inner):
            current.append(inner[i : i + 2])
            i += 2
            continue
        if ch == "|":
            cells.append("".join(current).strip())
            current = []
        else:
            current.append(ch)
        i += 1
    cells.append("".join(current).strip())
    return cells


def is_table_row(line: str) -> bool:
    s = line.strip()
    return s.startswith("|") and s.endswith("|") and s.count("|") >= 2


def is_separator_row(line: str) -> bool:
    cells = split_table_cells(line)
    if not cells:
        return False
    return all(re.match(r"^:?-{3,}:?$", c.strip()) for c in cells)


def has_ocr_spaced_letters(line: str) -> bool:
    for match in re.finditer(r"[A-Za-z](?: [A-Za-z]){4,}", line):
        parts = match.group().split()
        if len(parts) >= 5 and all(len(p) == 1 for p in parts):
            return True
    return False


def is_arrow_table_line(line: str) -> bool:
    return "" in line or ("→" in line and re.search(r"\s{6,}", line))


def detect_issues(rel_path: Path, body: str) -> list[Issue]:
    issues: list[Issue] = []
    lines = body.splitlines()

    fence_lines = [i for i, ln in enumerate(lines, 1) if ln.strip().startswith("```")]
    if len(fence_lines) % 2 != 0:
        issues.append(
            Issue(
                fence_lines[-1],
                "Broken code blocks",
                "critical",
                "Unmatched code fence (odd number of ``` markers)",
                "Add closing ``` on its own line or remove stray opening fence",
            )
        )

    in_fence = False
    for i, line in enumerate(lines, 1):
        stripped = line.strip()
        if stripped.startswith("```"):
            if not in_fence and i > 1:
                prev = lines[i - 2].strip()
                if prev and not prev.startswith("#") and not prev.startswith("|") and not prev.startswith("```"):
                    if not prev.startswith("-") and not prev.startswith("*") and not re.match(r"^\d+\.", prev):
                        issues.append(
                            Issue(
                                i,
                                "Missing blank lines around code fences",
                                "low",
                                "Opening code fence immediately follows paragraph text",
                                "Insert a blank line before the opening fence",
                            )
                        )
            in_fence = not in_fence
            continue

        if in_fence:
            continue

        if re.match(r"^\d{1,3}$", stripped):
            issues.append(
                Issue(
                    i,
                    "Corrupted PDF extraction artifacts",
                    "high",
                    f"Lone page number `{stripped}` from PDF pagination",
                    "Remove page number or convert to section heading",
                )
            )

        if stripped.startswith("❖"):
            issues.append(
                Issue(
                    i,
                    "Corrupted PDF extraction artifacts",
                    "medium",
                    "PDF section marker `❖` instead of Markdown heading",
                    "Convert to `## Section title` heading",
                )
            )

        if stripped.startswith("▪"):
            issues.append(
                Issue(
                    i,
                    "Broken lists",
                    "medium",
                    "List item uses `▪` without Markdown list marker",
                    "Prefix with `- ` and remove `▪`",
                )
            )

        if is_arrow_table_line(line):
            issues.append(
                Issue(
                    i,
                    "Tables converted into paragraphs",
                    "high",
                    "Arrow/space-aligned columns suggest table rendered as plain text",
                    "Convert to a Markdown table with header and `| --- |` separator row",
                )
            )

        if has_ocr_spaced_letters(line):
            issues.append(
                Issue(
                    i,
                    "Corrupted PDF extraction artifacts",
                    "high",
                    "OCR spaced-letter corruption (single letters separated by spaces)",
                    "Rejoin spaced letters into words",
                )
            )

        if "" in line or "" in line or "" in line:
            issues.append(
                Issue(
                    i,
                    "Corrupted PDF extraction artifacts",
                    "medium",
                    "Non-standard PDF bullet/arrow character",
                    "Replace with ASCII `->`, `-`, or Markdown equivalents",
                )
            )

        if stripped.startswith("> [!"):
            issues.append(
                Issue(
                    i,
                    "Invalid MDX syntax",
                    "high",
                    "GitHub-style alert `> [!IMPORTANT]` is not valid MDX",
                    "Replace with `<Callout type=\"warning\" title=\"...\">` component",
                )
            )

        if re.match(r"^\d+\.\s+.+\?\s*$", stripped):
            issues.append(
                Issue(
                    i,
                    "Questions merged with answers",
                    "medium",
                    "Numbered interview question without heading structure",
                    "Use `### Q{n}: ...` heading and separate answer paragraph",
                )
            )

        if re.match(r"^\[\d+\]\s+\S", stripped):
            issues.append(
                Issue(
                    i,
                    "References mixed into body content",
                    "medium",
                    "Numeric citation `[n]` inline in body",
                    "Move to a `## References` section at document end",
                )
            )
        if re.match(r"^[A-Z][a-z]+,\s+[A-Z]\.\s*\(\d{4}\)", stripped):
            issues.append(
                Issue(
                    i,
                    "References mixed into body content",
                    "medium",
                    "Bibliography entry inline in body",
                    "Move to a `## References` section at document end",
                )
            )

        if re.match(r"^[a-z]\)\s", stripped):
            issues.append(
                Issue(
                    i,
                    "Broken lists",
                    "low",
                    "Lettered sub-list without parent list context",
                    "Use indented `- ` items or numbered sub-lists",
                )
            )

    table_blocks: list[tuple[int, list[str]]] = []
    current_block: list[str] = []
    block_start = 0
    for i, line in enumerate(lines):
        if is_table_row(line) or is_separator_row(line):
            if not current_block:
                block_start = i + 1
            current_block.append(line)
        else:
            if current_block:
                table_blocks.append((block_start, current_block))
                current_block = []
    if current_block:
        table_blocks.append((block_start, current_block))

    for start_line, block in table_blocks:
        col_counts: list[int] = []
        has_separator = False
        for row in block:
            if is_separator_row(row):
                has_separator = True
                continue
            if is_table_row(row):
                col_counts.append(len(split_table_cells(row)))
        if not has_separator and len(block) >= 2:
            issues.append(
                Issue(
                    start_line,
                    "Markdown tables that may not render correctly",
                    "high",
                    "Table block missing `| --- |` separator row",
                    "Add separator row after header, e.g. `| --- | --- |`",
                )
            )
        if col_counts and len(set(col_counts)) > 1:
            issues.append(
                Issue(
                    start_line,
                    "Markdown tables that may not render correctly",
                    "high",
                    f"Inconsistent column counts within table: {col_counts}",
                    "Align all rows to the same number of columns",
                )
            )
        if start_line > 1:
            prev = lines[start_line - 2].strip()
            if prev and not is_table_row(lines[start_line - 2]):
                issues.append(
                    Issue(
                        start_line,
                        "Missing blank lines around tables",
                        "low",
                        "Table immediately follows non-table content",
                        "Insert blank line before table",
                    )
                )
        end_idx = start_line - 1 + len(block)
        if end_idx < len(lines):
            after = lines[end_idx].strip()
            if after and not is_table_row(lines[end_idx]):
                issues.append(
                    Issue(
                        end_idx + 1,
                        "Missing blank lines around tables",
                        "low",
                        "Content immediately follows table without blank line",
                        "Insert blank line after table",
                    )
                )

    seen: set[tuple[int, str, str]] = set()
    unique: list[Issue] = []
    for iss in issues:
        key = (iss.line, iss.problem_type, iss.message[:60])
        if key not in seen:
            seen.add(key)
            unique.append(iss)
    return sorted(unique, key=lambda x: (x.line, SEVERITY_ORDER.get(x.severity, 9)))


def convert_arrow_table_block(lines: list[str], start: int) -> tuple[list[str], int]:
    """Convert consecutive arrow-aligned rows to markdown table."""
    rows: list[tuple[str, str]] = []
    i = start
    while i < len(lines) and is_arrow_table_line(lines[i]):
        raw = lines[i]
        if "" in raw:
            parts = re.split(r"\s*\s*→\s*", raw)
        elif "→" in raw:
            parts = re.split(r"\s*→\s*", raw, maxsplit=1)
        else:
            parts = re.split(r"\s{6,}", raw, maxsplit=1)
        left = parts[0].strip() if parts else raw.strip()
        right = parts[1].strip() if len(parts) > 1 else ""
        if left.upper() in ("TCP", "UDP") and not right:
            rows.append((left, right))
            i += 1
            continue
        rows.append((left, right))
        i += 1

    if len(rows) < 2:
        return [lines[start]], start + 1

    out = ["", "| TCP | UDP |", "| --- | --- |"]
    header_done = False
    for left, right in rows:
        if left.upper() in ("TCP", "UDP") and not right and not header_done:
            continue
        if left.upper() == "TCP" and right.upper() == "UDP":
            continue
        out.append(f"| {left} | {right} |")
    out.append("")
    return out, i


def fix_ocr_spaced_letters(line: str) -> str:
    def replacer(match: re.Match[str]) -> str:
        parts = match.group().split()
        if len(parts) >= 5 and all(len(p) == 1 for p in parts):
            return "".join(parts)
        return match.group()

    fixed = re.sub(r"[A-Za-z](?: [A-Za-z]){4,}", replacer, line)
    return re.sub(r"([a-z])([A-Z])", r"\1 \2", fixed)


def apply_auto_fixes(body: str, issues: list[Issue]) -> str:
    lines = body.splitlines()
    new_lines: list[str] = []
    i = 0
    issue_types = {iss.problem_type for iss in issues}

    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        if re.match(r"^\d{1,3}$", stripped):
            i += 1
            continue

        if stripped.startswith("▪"):
            new_lines.append(f"- {stripped.lstrip('▪').strip()}")
            i += 1
            continue

        if stripped.startswith("❖"):
            title = stripped.lstrip("❖").strip()
            new_lines.extend(["", f"## {title}", ""])
            i += 1
            continue

        if stripped.startswith("> [!IMPORTANT]"):
            new_lines.append("")
            new_lines.append('<Callout type="warning" title="Defensive & Authorized Auditing Purposes Only">')
            i += 1
            while i < len(lines) and lines[i].strip().startswith(">"):
                alert_body = lines[i].strip().lstrip(">").strip()
                if alert_body != "**Defensive & Authorized Auditing Purposes Only**":
                    new_lines.append(alert_body)
                i += 1
            new_lines.append("</Callout>")
            new_lines.append("")
            continue

        m = re.match(r"^(\d+)\.\s+(.+\?)\s*$", stripped)
        if m:
            new_lines.extend(["", f"### Q{m.group(1)}: {m.group(2)}", ""])
            i += 1
            continue

        if is_arrow_table_line(line):
            converted, next_i = convert_arrow_table_block(lines, i)
            new_lines.extend(converted)
            i = next_i
            continue

        new_lines.append(fix_ocr_spaced_letters(line))
        i += 1

    result = "\n".join(new_lines)
    result = re.sub(r"([^\n])\n(```)", r"\1\n\n\2", result)
    result = re.sub(r"(```[^\n]*\n(?:.*\n)*?```)\n([^\n\s])", r"\1\n\n\2", result)
    result = re.sub(r"([^\n|])\n(\|)", r"\1\n\n\2", result)
    result = re.sub(r"(\n\|[^\n]+\n\|[^\n]+\n(?:\|[^\n]+\n)+)\n(\S)", r"\1\n\n\2", result)
    result = re.sub(r"\n{4,}", "\n\n\n", result)
    return result


def collect_mdx_files() -> list[Path]:
    files: list[Path] = []
    for d in CONTENT_DIRS:
        if d.exists():
            files.extend(sorted(d.rglob("*.mdx")))
    return files


def generate_report(results: list[FileResult]) -> str:
    total_issues = sum(len(r.issues) for r in results)
    files_with_issues = [r for r in results if r.issues]
    by_severity: dict[str, int] = {}
    by_type: dict[str, int] = {}
    for r in results:
        for iss in r.issues:
            by_severity[iss.severity] = by_severity.get(iss.severity, 0) + 1
            by_type[iss.problem_type] = by_type.get(iss.problem_type, 0) + 1

    out = [
        "# MDX Formatting Audit",
        "",
        f"**Generated:** automated scan of `{len(results)}` MDX files",
        "",
        "## Summary",
        "",
        "| Metric | Count |",
        "| --- | --- |",
        f"| Files scanned | {len(results)} |",
        f"| Files with issues | {len(files_with_issues)} |",
        f"| Total issues | {total_issues} |",
        "",
        "### Issues by severity",
        "",
        "| Severity | Count |",
        "| --- | --- |",
    ]
    for sev in ("critical", "high", "medium", "low"):
        if sev in by_severity:
            out.append(f"| {sev} | {by_severity[sev]} |")

    out.extend(["", "### Issues by type", "", "| Problem type | Count |", "| --- | --- |"])
    for ptype, count in sorted(by_type.items(), key=lambda x: -x[1]):
        out.append(f"| {ptype} | {count} |")

    out.extend(["", "## Files without issues", ""])
    clean = [r for r in results if not r.issues]
    if clean:
        for r in clean:
            out.append(f"- `{r.path.as_posix()}`")
    else:
        out.append("_None — all scanned files have at least one issue._")

    out.extend(["", "## Detailed findings", ""])

    for r in sorted(files_with_issues, key=lambda x: (-len(x.issues), str(x.path))):
        rel = r.path.as_posix()
        out.append(f"### `{rel}`")
        out.append("")
        out.append(f"**Issues:** {len(r.issues)} | **Corrected copy:** `audit/corrected-mdx/{rel}`")
        out.append("")
        out.append("| Line | Severity | Problem type | Issue | Suggested fix |")
        out.append("| ---: | --- | --- | --- | --- |")
        for iss in r.issues:
            msg = iss.message.replace("|", "\\|")
            fix = iss.suggested_fix.replace("|", "\\|")
            out.append(f"| {iss.line} | {iss.severity} | {iss.problem_type} | {msg} | {fix} |")
        out.append("")

    out.extend(
        [
            "## Corrected MDX output",
            "",
            "Auto-corrected copies are in `audit/corrected-mdx/` (mirrors original paths).",
            "",
            "**Automated fixes applied:**",
            "",
            "- PDF page numbers removed",
            "- `❖` / `▪` converted to headings and Markdown lists",
            "- `> [!IMPORTANT]` alerts converted to `<Callout>` components",
            "- Numbered questions with `?` converted to `### Q{n}:` headings",
            "- Arrow-aligned table paragraphs converted to Markdown tables (where detected)",
            "- Blank lines inserted around tables and code fences",
            "",
            "**Manual review still required for:**",
            "",
            "- OSI layer descriptions without list structure (`networking-security-interview-qa-guide-osi-to-firewall.mdx`)",
            "- Large book-dump files (`blue-team-complete-guide.mdx`)",
            "- Content flagged `REWRITE` in `audit/phase-7-rewrite-plan.md`",
            "",
            "Re-run: `python audit/scripts/mdx_formatting_audit.py`",
            "",
        ]
    )
    return "\n".join(out) + "\n"


def main() -> int:
    files = collect_mdx_files()
    results: list[FileResult] = []
    CORRECTED_DIR.mkdir(parents=True, exist_ok=True)

    corrected_written: set[Path] = set()
    for mdx_path in files:
        text = mdx_path.read_text(encoding="utf-8", errors="replace")
        fm, body = split_frontmatter(text)
        rel = mdx_path.relative_to(ROOT)
        issues = detect_issues(rel, body)
        results.append(FileResult(path=rel, issues=issues))

        if issues:
            fixed_body = apply_auto_fixes(body, issues)
            out_path = CORRECTED_DIR / rel
            out_path.parent.mkdir(parents=True, exist_ok=True)
            out_path.write_text((fm + fixed_body) if fm else fixed_body, encoding="utf-8")
            corrected_written.add(out_path)

    if CORRECTED_DIR.exists():
        for existing in CORRECTED_DIR.rglob("*.mdx"):
            if existing not in corrected_written:
                existing.unlink()

    REPORT_PATH.write_text(generate_report(results), encoding="utf-8")
    total = sum(len(r.issues) for r in results)
    print(f"Scanned {len(files)} files, found {total} issues")
    print(f"Report: {REPORT_PATH}")
    print(f"Corrected MDX: {CORRECTED_DIR}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
