import argparse
import hashlib
import json
import os
import re
import subprocess
from collections import Counter, defaultdict
from dataclasses import dataclass, field
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CONTENT_DIR = ROOT / "content"
DOCS_DIR = ROOT / "docs"
REPORT_DIR = ROOT / "scratch" / "sanitation-reports"

FOOTER = """---

## Educational Use Notice

This content is provided strictly for educational purposes, defensive security awareness, system administration, diagnostics, and ethical learning environments.

Always obtain proper authorization before testing systems or networks. The information published on this website is intended to promote responsible security practices, auditing, monitoring, and infrastructure hardening.

---
"""

DEFENSIVE_NOTICE = (
    "> [Defensive notice: Actionable exploit, malware, credential theft, phishing, "
    "or unauthorized access instructions were omitted. Use authorized defensive "
    "testing, monitoring, and hardening workflows instead.]"
)


@dataclass
class FileReport:
    path: str
    kind: str
    status: str = "scanned"
    changed: bool = False
    removed_spam: int = 0
    removed_unsafe: int = 0
    duplicate_lines_removed: int = 0
    review_flags: list[str] = field(default_factory=list)
    before_chars: int = 0
    after_chars: int = 0


SPAM_PATTERNS = [
    ("comment_interested", re.compile(r"(?im)^.*comment\s+[\"'“”â€œâ€]*interested[\"'“”â€œâ€]*.*$")),
    ("follow_for_more", re.compile(r"(?im)^.*follow\s+for\s+more.*$")),
    ("part_coming_soon", re.compile(r"(?im)^.*part\s+\d+\s+coming\s+soon.*$")),
    ("profile_cta", re.compile(r"(?im)^.*(?:available|posted)\s+on\s+(?:my\s+)?profile.*$")),
    ("telegram_cta", re.compile(r"(?im)^.*\bt\s*e\s*l\s*e\s*g\s*r\s*a\s*m\b.*(?:g\s*r\s*o\s*u\s*p|channel|join|dm|message|send).*$")),
    ("instagram_cta", re.compile(r"(?im)^.*\binstagram\b.*@[\w.-]+.*$")),
    ("tiktok_cta", re.compile(r"(?im)^.*\btiktok\b.*(?:follow|@[\w.-]+).*$")),
    ("save_share_follow", re.compile(r"(?im)^.*\bsave\b.*\bshare\b.*\bfollow\b.*$")),
    ("repost_support", re.compile(r"(?im)^.*\brepost\b.*\bsupport\b.*(?:community|c\s*o\s*m\s*m\s*u\s*n\s*i\s*t\s*y).*$")),
    ("follow_social_brand", re.compile(r"(?im)^.*\bfollow\b.*(?:hex\s*sec|hexsec|social\s+media|for\s+more).*$")),
    ("pdf_send_cta", re.compile(r"(?im)^.*(?:want\s+the\s+pdf\s+version|pdf\s+version|full\s+tool\s+list|pdf\)?\s+is\s+available).*$")),
    ("special_thanks_social", re.compile(r"(?im)^.*special\s+thanks\s+to\s+(?:instagram\s+)?@[\w.-]+.*$")),
    ("hexsec_brand", re.compile(r"(?i)\bhex\s*sec(?:\s*team|\s*tools|\s*cheatsheet)?\b")),
    ("hexsec_compact", re.compile(r"(?i)\bhexsec(?:team|_tools|cheatsheet)?\b")),
    ("hexsec_embedded", re.compile(r"(?i)@?\s*h\s*e\s*x[\s_]*s\s*e\s*c(?:\s*t\s*e\s*a\s*m|\s*t\s*o\s*o\s*l\s*s|\s*c\s*o\s*m\s*m\s*u\s*n\s*i\s*t\s*y)?")),
    ("by_hexsec", re.compile(r"(?im)^.*\bby\s+hex\s*sec\b.*$")),
    ("educational_promo", re.compile(r"(?im)^.*educational\s+purposes\s+only.*(?:responsible|ethical).*$")),
    ("mojibake_icon_line", re.compile(r"(?im)^[\sÂâðŸ™œ“”’‘€¢–—\W]*(?:ðŸ|â|Â)[^\n]*$")),
]


UNSAFE_LINE_PATTERNS = [
    re.compile(r"(?i)\b(?:msfvenom|meterpreter|exploit/multi/handler|multi/handler)\b"),
    re.compile(r"(?i)(?:/bin/(?:ba)?sh\s+-i|cmd\.exe|powershell\.exe).*(?:/dev/tcp|nc\s+-e|ncat\s+-e|socket|pty\.spawn)"),
    re.compile(r"(?i)\b(?:reverse\s+shell|bind\s+shell)\b.*\b(?:payload|script|one-?liner|listener|connect\s+back|download|execute)\b"),
    re.compile(r"(?i)\b(?:credential\s+harvester|steal(?:ing)?\s+(?:login\s+)?credentials|credential\s+theft)\b"),
    re.compile(r"(?i)\b(?:phishing\s+kit|site\s+cloner|spear-phishing|clone\s+a\s+legitimate\s+website)\b"),
    re.compile(r"(?i)\b(?:malware\s+dropper|persistence\s+payload|keylogger|exfiltrate|exfiltration)\b"),
    re.compile(r"(?i)\b(?:payloadallthethings|payloadsallthethings)\b"),
    re.compile(r"(?i)\bfork\s+bomb\b|:\s*\(\s*\)\s*\{"),
    re.compile(r"(?i)\b(?:run\s+them\s+against|start\s+throwing).*?(?:target|asset)"),
    re.compile(r"(?i)\b(?:dump\s+(?:the\s+)?(?:database|credentials|hashes|passwords))\b"),
]

AGGRESSIVE_REFRAMES = [
    (re.compile(r"(?i)\bblack\s+hat\b"), "defensive security"),
    (re.compile(r"(?i)\breverse\s+shells?\b"), "unauthorized remote shell activity"),
    (re.compile(r"(?i)\bbind\s+shells?\b"), "unauthorized remote access listeners"),
    (re.compile(r"(?i)\b(?:ethical\s+)?hackers?\b"), "security analyst"),
    (re.compile(r"(?i)\bhacking\b"), "security auditing"),
    (re.compile(r"(?i)\bexploitation\b"), "defensive validation"),
    (re.compile(r"(?i)\bexploit\b"), "validate"),
    (re.compile(r"(?i)\bpayloads?\b"), "test vectors"),
    (re.compile(r"(?i)\battack(?:s|ing)?\b"), "security test"),
    (re.compile(r"(?i)\battacker\b"), "unauthorized actor"),
    (re.compile(r"(?i)\bvictim\b"), "affected system"),
]


FRONTMATTER_REFRAMES = [
    (re.compile(r"(?i)\bhex\s*sec(?:\s*team|\s*tools|\s*cheatsheet)?\b"), ""),
    (re.compile(r"(?i)\bhexsec(?:team|_tools|cheatsheet)?\b"), ""),
    (re.compile(r"(?i)\breverse\s+shells?\b"), "Unauthorized Remote Shell Activity"),
    (re.compile(r"(?i)\bblack\s+hat\b"), "Defensive Security"),
    (re.compile(r"(?i)\bhacking\b"), "Security Auditing"),
    (re.compile(r"(?i)\b(?:ethical\s+)?hackers?\b"), "Security Analysts"),
    (re.compile(r"(?i)\bexploitation\b"), "Defensive Validation"),
    (re.compile(r"(?i)\bexploit\b"), "Validate"),
    (re.compile(r"(?i)\boffensive\s+professionals\b"), "Authorized Security Professionals"),
]


def rel(path: Path) -> str:
    return str(path.relative_to(ROOT)).replace("\\", "/")


def sha256_text(text: str) -> str:
    return hashlib.sha256(text.encode("utf-8", errors="ignore")).hexdigest()


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="ignore")


def split_frontmatter(text: str) -> tuple[str, str]:
    normalized = text.replace("\r\n", "\n")
    if not normalized.startswith("---\n"):
        return "", normalized
    match = re.search(r"\n---\s*\n", normalized[4:])
    if not match:
        match = re.search(r"---\s*\n", normalized[4:])
    if not match:
        return "", normalized
    end = 4 + match.end()
    return normalized[:end], normalized[end:]


def sanitize_frontmatter_value(value: str) -> str:
    value = normalize_unicode_noise(value.strip())
    quote = ""
    if len(value) >= 2 and value[0] in {'"', "'"} and value[-1] == value[0]:
        quote = value[0]
        value = value[1:-1]
    for pattern, replacement in FRONTMATTER_REFRAMES:
        value = pattern.sub(replacement, value)
    value = re.sub(r"\s{2,}", " ", value).strip()
    value = re.sub(r"\s+\.", ".", value)
    if quote or any(ch in value for ch in [":", "#", "[", "]", "{", "}", '"']):
        value = value.replace('"', '\\"')
        return f'"{value}"'
    return value


def extract_frontmatter_fields(inner: str) -> list[tuple[str, str]]:
    keys = ["title", "description", "date", "tags", "category", "subcategory", "difficulty", "readingTime", "featured"]
    key_pattern = "|".join(re.escape(key) for key in keys)
    matches = list(re.finditer(rf"(?ms)(^|\n)?({key_pattern})\s*:\s*", inner))
    if not matches:
        fields = []
        for line in inner.splitlines():
            if ":" not in line:
                continue
            key, value = line.split(":", 1)
            fields.append((key.strip(), value.strip()))
        return fields

    fields = []
    for index, match in enumerate(matches):
        key = match.group(2)
        start = match.end()
        end = matches[index + 1].start() if index + 1 < len(matches) else len(inner)
        value = inner[start:end].strip()
        fields.append((key, value))
    return fields


def clean_frontmatter(frontmatter: str) -> str:
    if not frontmatter:
        return ""
    inner = frontmatter.strip()
    if inner.startswith("---"):
        inner = inner[3:]
    if inner.endswith("---"):
        inner = inner[:-3]
    fields = extract_frontmatter_fields(inner)
    lines = ["---"]
    seen = set()
    for key, value in fields:
        if not key or key in seen:
            continue
        seen.add(key)
        if key == "tags" and value.strip().startswith("["):
            tag_value = value.strip()
            for pattern, replacement in FRONTMATTER_REFRAMES:
                tag_value = pattern.sub(replacement, tag_value)
            tag_value = re.sub(r",\s*,+", ",", tag_value).strip(" ,")
            tag_value = re.sub(r'"\s*,\s*""', '"', tag_value)
            tag_value = re.sub(r'-"\s*,', '",', tag_value)
            lines.append(f"{key}: {tag_value}")
        else:
            lines.append(f"{key}: {sanitize_frontmatter_value(value)}")
    lines.append("---")
    return "\n".join(lines) + "\n"


def strip_existing_footer(body: str) -> str:
    marker = "## Educational Use Notice"
    idx = body.find(marker)
    if idx == -1:
        return re.sub(r"(?:\n\s*---\s*)+\Z", "", body.strip())
    start = body.rfind("---", 0, idx)
    if start == -1:
        start = idx
    return re.sub(r"(?:\n\s*---\s*)+\Z", "", body[:start].rstrip())


def normalize_spaced_ocr(line: str) -> str:
    # Repair headings like "W e b  A p p l i c a t i o n" while avoiding code-like lines.
    if "`" in line or "|" in line or re.search(r"[\\/{}()[\]=]", line):
        return line
    stripped = line.strip()
    if len(stripped) < 7:
        return line
    tokens = stripped.split()
    single_letters = sum(1 for token in tokens if re.fullmatch(r"[A-Za-z]", token))
    if single_letters < 4 or single_letters / max(len(tokens), 1) < 0.65:
        return line
    words = []
    current = []
    gap_chunks = re.split(r"(\s{2,})", stripped)
    for chunk in gap_chunks:
        if not chunk:
            continue
        if chunk.isspace() and len(chunk) >= 2:
            if current:
                words.append("".join(current))
                current = []
            continue
        parts = chunk.split()
        if parts and all(re.fullmatch(r"[A-Za-z]", part) for part in parts):
            current.extend(parts)
        else:
            if current:
                words.append("".join(current))
                current = []
            words.append(chunk.strip())
    if current:
        words.append("".join(current))
    return " ".join(word for word in words if word)


def normalize_unicode_noise(text: str) -> str:
    replacements = {
        "â€¢": "-",
        "â€”": "-",
        "â€“": "-",
        "â€˜": "'",
        "â€™": "'",
        "â€œ": '"',
        "â€": '"',
        "â†’": "->",
        "Â": "",
        "ðŸ“˜": "",
        "ðŸ”“": "",
        "ðŸ”": "",
        "ðŸ“š": "",
    }
    for bad, good in replacements.items():
        text = text.replace(bad, good)
    return text


def normalize_markdown_text(text: str) -> str:
    text = normalize_unicode_noise(text)
    text = re.sub(r"[ \t]+$", "", text, flags=re.MULTILINE)
    text = re.sub(r"\n{4,}", "\n\n\n", text)
    text = re.sub(r"(?m)^([A-Za-z][A-Za-z0-9 /&+-]{2,80})\1$", r"\1", text)
    text = re.sub(r"\b([A-Za-z][A-Za-z-]{2,})(?:\s+\1\b){1,}", r"\1", text, flags=re.IGNORECASE)
    text = re.sub(r"([.!?])([A-Z])", r"\1 \2", text)
    text = re.sub(r"\[!\s+(IMPORTANT|TIP|WARNING|NOTE|CAUTION)\]", r"[!\1]", text, flags=re.IGNORECASE)
    return text.strip()


def escape_mdx_line(line: str) -> str:
    if not line:
        return line
    blockquote_prefix = ""
    remainder = line
    match = re.match(r"^(\s*>\s?)(.*)$", line)
    if match:
        blockquote_prefix = match.group(1)
        remainder = match.group(2)

    if remainder.count("`") % 2:
        escaped = remainder.replace("{", "&#123;").replace("}", "&#125;")
        escaped = escaped.replace("<", "&lt;").replace(">", "&gt;")
        escaped = re.sub(r"^(?=\s*(?:import|export)\b)", "&#8203;", escaped)
        return blockquote_prefix + escaped

    parts = remainder.split("`")
    escaped_parts = []
    for index, part in enumerate(parts):
        if index % 2:
            escaped_parts.append(part)
            continue
        part = part.replace("{", "&#123;").replace("}", "&#125;")
        part = part.replace("<", "&lt;").replace(">", "&gt;")
        part = re.sub(r"^(?=\s*(?:import|export)\b)", "&#8203;", part)
        escaped_parts.append(part)
    return blockquote_prefix + "`".join(escaped_parts)


def remove_spam(text: str, hits: Counter) -> tuple[str, int]:
    removed = 0
    for name, pattern in SPAM_PATTERNS:
        matches = pattern.findall(text)
        if matches:
            removed += len(matches)
            hits[name] += len(matches)
            text = pattern.sub("", text)
    return text, removed


def reframe_text(text: str) -> str:
    for pattern, replacement in AGGRESSIVE_REFRAMES:
        text = pattern.sub(replacement, text)
    text = re.sub(r"(?i)\bmust\s+know\b", "reference", text)
    text = re.sub(r"(?i)\boffensive\s+professionals\b", "authorized security professionals", text)
    text = re.sub(r"(?i)\boffensive\s+ai\b", "AI security risk analysis", text)
    return text


def line_fingerprint(line: str) -> str:
    return re.sub(r"\W+", "", line).lower()


def clean_body(body: str, report: FileReport, spam_hits: Counter) -> str:
    body = strip_existing_footer(body)
    body = normalize_unicode_noise(body)
    body, removed_spam = remove_spam(body, spam_hits)
    report.removed_spam += removed_spam

    cleaned_lines = []
    previous_fp = ""
    in_code = False
    unsafe_notice_pending = False

    for original_line in body.split("\n"):
        line = original_line.rstrip()
        if line.strip().startswith("```"):
            in_code = not in_code
            cleaned_lines.append(line)
            previous_fp = ""
            continue

        if not in_code:
            line = normalize_spaced_ocr(line)
            line, line_spam_removed = remove_spam(line, spam_hits)
            if line_spam_removed:
                report.removed_spam += line_spam_removed
            if not re.search(r"[A-Za-z0-9]", line):
                previous_fp = ""
                continue
            line = reframe_text(line)
            is_unsafe = any(pattern.search(line) for pattern in UNSAFE_LINE_PATTERNS)
            if is_unsafe:
                report.removed_unsafe += 1
                if not unsafe_notice_pending:
                    cleaned_lines.append(DEFENSIVE_NOTICE)
                    unsafe_notice_pending = True
                previous_fp = ""
                continue
            unsafe_notice_pending = False
            line = escape_mdx_line(line)

            fp = line_fingerprint(line)
            if fp and fp == previous_fp and len(fp) > 8:
                report.duplicate_lines_removed += 1
                continue
            previous_fp = fp if fp else ""

        cleaned_lines.append(line)

    cleaned = "\n".join(cleaned_lines)
    cleaned = normalize_markdown_text(cleaned)
    fence_count = sum(1 for line in cleaned.splitlines() if line.strip().startswith("```"))
    if fence_count % 2:
        without_trailing_fence = re.sub(r"\n```\s*\Z", "", cleaned)
        repaired_count = sum(1 for line in without_trailing_fence.splitlines() if line.strip().startswith("```"))
        if repaired_count % 2 == 0:
            cleaned = without_trailing_fence
            fence_count = repaired_count
    if fence_count % 2:
        report.review_flags.append("unmatched_code_fence")
    if re.search(r"(?:â|ðŸ|�)", cleaned):
        report.review_flags.append("unresolved_mojibake")
    if report.removed_unsafe >= 10:
        report.review_flags.append("large_unsafe_removal")
    if re.search(r"(?i)\b(reverse\s+shell|credential\s+harvester|phishing\s+kit|msfvenom|meterpreter)\b", cleaned):
        report.review_flags.append("unsafe_keyword_context_remaining")

    return cleaned


def read_tracked_head(path: Path) -> str:
    git_path = rel(path)
    return subprocess.check_output(["git", "show", f"HEAD:{git_path}"], cwd=ROOT).decode("utf-8", errors="ignore")


def clean_content_file(path: Path, write: bool, spam_hits: Counter, from_git_head: bool = False) -> FileReport:
    original = read_tracked_head(path) if from_git_head else read_text(path)
    report = FileReport(path=rel(path), kind=path.suffix.lower().lstrip("."), before_chars=len(original))
    frontmatter, body = split_frontmatter(original)
    frontmatter = clean_frontmatter(frontmatter)
    cleaned_body = clean_body(body, report, spam_hits)
    cleaned = (frontmatter.rstrip() + "\n\n" if frontmatter else "") + cleaned_body.rstrip() + "\n\n" + FOOTER + "\n"
    report.after_chars = len(cleaned)
    report.changed = cleaned != original.replace("\r\n", "\n")
    report.status = "cleaned" if report.changed else "unchanged"
    if write and report.changed:
        tmp_path = path.with_name(f".{path.name}.sanitize.tmp")
        tmp_path.write_bytes(cleaned.encode("utf-8", errors="replace"))
        os.replace(tmp_path, path)
    return report


def extract_pdf_text(path: Path) -> str:
    try:
        from pypdf import PdfReader
    except Exception:
        return ""
    try:
        reader = PdfReader(str(path))
        return "\n".join(page.extract_text() or "" for page in reader.pages)
    except Exception:
        return ""


def scan_docs(spam_hits: Counter) -> tuple[list[FileReport], dict[str, list[str]]]:
    reports = []
    hashes = defaultdict(list)
    for path in sorted(DOCS_DIR.rglob("*")):
        if not path.is_file() or path.suffix.lower() not in {".pdf", ".md", ".mdx", ".txt"}:
            continue
        report = FileReport(path=rel(path), kind=path.suffix.lower().lstrip("."), status="source_scanned")
        if path.suffix.lower() == ".pdf":
            text = extract_pdf_text(path)
            if not text:
                report.review_flags.append("pdf_text_not_extracted")
        else:
            text = read_text(path)
        report.before_chars = len(text)
        if text:
            hashes[sha256_text(normalize_markdown_text(text))].append(rel(path))
            _, spam_count = remove_spam(text, spam_hits)
            report.removed_spam = spam_count
            if any(pattern.search(text) for pattern in UNSAFE_LINE_PATTERNS):
                report.review_flags.append("unsafe_source_pdf_left_unchanged" if path.suffix.lower() == ".pdf" else "unsafe_source_left_unchanged")
            if spam_count:
                report.review_flags.append("spam_source_left_unchanged")
        reports.append(report)
    duplicates = {digest: paths for digest, paths in hashes.items() if len(paths) > 1}
    return reports, duplicates


def find_near_duplicate_content(content_reports: list[FileReport]) -> list[dict[str, object]]:
    fingerprints = {}
    for report in content_reports:
        path = ROOT / report.path
        if not path.exists():
            continue
        text = strip_existing_footer(split_frontmatter(read_text(path))[1])
        tokens = set(re.findall(r"\b[a-z]{4,20}\b", text.lower()))
        if tokens:
            fingerprints[report.path] = tokens

    results = []
    paths = sorted(fingerprints)
    for i, left in enumerate(paths):
        for right in paths[i + 1:]:
            a = fingerprints[left]
            b = fingerprints[right]
            if min(len(a), len(b)) < 25:
                continue
            score = len(a & b) / len(a | b)
            if score >= 0.82:
                results.append({"file1": left, "file2": right, "similarity": round(score, 3)})
    return results


def write_reports(content_reports, doc_reports, duplicates, near_duplicates, spam_hits, write_mode: bool) -> None:
    REPORT_DIR.mkdir(parents=True, exist_ok=True)
    all_reports = content_reports + doc_reports
    cleaned = [r for r in content_reports if r.changed]
    manual = [r for r in all_reports if r.review_flags]

    sanitation_lines = [
        "# Sanitation Report",
        "",
        f"Mode: {'write' if write_mode else 'dry-run'}",
        f"Content files scanned: {len(content_reports)}",
        f"Content files cleaned: {len(cleaned)}",
        f"Source docs scanned: {len(doc_reports)}",
        f"Unsafe content removals: {sum(r.removed_unsafe for r in content_reports)}",
        f"Spam/branding removals: {sum(r.removed_spam for r in all_reports)}",
        "",
        "## Files Cleaned",
        "",
    ]
    if cleaned:
        sanitation_lines.extend(f"- `{r.path}`" for r in cleaned)
    else:
        sanitation_lines.append("- None")
    sanitation_lines.extend(["", "## Manual Review Flags", ""])
    if manual:
        sanitation_lines.extend(f"- `{r.path}`: {', '.join(r.review_flags)}" for r in manual)
    else:
        sanitation_lines.append("- None")
    (REPORT_DIR / "sanitation-report.md").write_text("\n".join(sanitation_lines) + "\n", encoding="utf-8")

    duplicate_lines = [
        "# Duplicate Cleanup Report",
        "",
        f"Duplicate lines removed from content: {sum(r.duplicate_lines_removed for r in content_reports)}",
        "",
        "## Exact Duplicate Source Text Groups",
        "",
    ]
    if duplicates:
        for paths in duplicates.values():
            duplicate_lines.append("- " + ", ".join(f"`{p}`" for p in paths))
    else:
        duplicate_lines.append("- None")
    duplicate_lines.extend(["", "## Near Duplicate Public Content", ""])
    if near_duplicates:
        duplicate_lines.extend(
            f"- `{item['file1']}` <-> `{item['file2']}` ({item['similarity']})"
            for item in near_duplicates
        )
    else:
        duplicate_lines.append("- None")
    (REPORT_DIR / "duplicate-cleanup-report.md").write_text("\n".join(duplicate_lines) + "\n", encoding="utf-8")

    (REPORT_DIR / "removed-spam-phrases.json").write_text(
        json.dumps(dict(sorted(spam_hits.items())), indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )

    content_map = {
        "mode": "write" if write_mode else "dry-run",
        "content": [r.__dict__ for r in content_reports],
        "source_docs": [r.__dict__ for r in doc_reports],
    }
    (REPORT_DIR / "normalized-content-map.json").write_text(
        json.dumps(content_map, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )


def main() -> int:
    parser = argparse.ArgumentParser(description="Sanitize public MDX/Markdown content and report on source docs.")
    parser.add_argument("--write", action="store_true", help="Write cleaned content files. Reports are always written.")
    parser.add_argument(
        "--from-git-head",
        action="store_true",
        help="Use the tracked HEAD version of content files as the input baseline before writing sanitized output.",
    )
    args = parser.parse_args()

    spam_hits = Counter()
    content_paths = sorted(
        path
        for path in CONTENT_DIR.rglob("*")
        if path.is_file() and path.suffix.lower() in {".mdx", ".md", ".txt"}
    )
    content_reports = [clean_content_file(path, args.write, spam_hits, args.from_git_head) for path in content_paths]
    doc_reports, duplicates = scan_docs(spam_hits)
    near_duplicates = find_near_duplicate_content(content_reports)
    write_reports(content_reports, doc_reports, duplicates, near_duplicates, spam_hits, args.write)

    print(f"Content files scanned: {len(content_reports)}")
    print(f"Content files changed: {sum(1 for report in content_reports if report.changed)}")
    print(f"Source docs scanned: {len(doc_reports)}")
    print(f"Reports written to: {REPORT_DIR}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
