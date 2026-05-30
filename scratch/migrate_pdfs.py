"""
PDF -> MDX Migration Script
===========================
Extracts text from all PDFs in /docs, cleans OCR corruption,
filters harmful content, and generates clean MDX files in /content/notes.
"""

import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

import fitz  # PyMuPDF
import os
import re
import sys
import unicodedata
from pathlib import Path
from datetime import datetime

# ─── Paths ────────────────────────────────────────────────────────────────────
BASE_DIR = Path(__file__).resolve().parent.parent
DOCS_DIR = BASE_DIR / "docs"
NOTES_DIR = BASE_DIR / "content" / "notes"

# ─── Category Routing ─────────────────────────────────────────────────────────
CATEGORY_MAP = {
    # linux
    "linux": "linux",
    "kali": "linux",
    "termux": "linux",
    "bash": "linux",
    "shell scripting": "linux",
    "100 linux": "linux",
    "essential linux": "linux",
    "a-z kali": "linux",
    "master termux": "linux",
    "black hat python": "linux",
    "kali linux revealed": "linux",
    "top 50 kali": "linux",
    "50 kali": "linux",
    "top_50_kali": "linux",
    "kali_linux_revelealed": "linux",

    # networking
    "nmap": "networking",
    "wireshark": "networking",
    "tshark": "networking",
    "firewall": "networking",
    "network": "networking",
    "osi": "networking",
    "interview": "networking",
    "github repositories": "networking",
    "10 github": "networking",

    # security
    "metasploit": "security",
    "blue team": "security",
    "oscp": "security",
    "bug bounty": "security",
    "bug hunting": "security",
    "hacking project": "security",
    "hacking drone": "security",
    "dronesploit": "security",
    "mobile penetration": "security",
    "top 20 free": "security",
    "cyber security tools": "security",
    "python guide": "security",
    "creatively malicious": "security",
    "windows event log": "security",
    "wireless penetration": "security",
    "bettercap": "security",

    # web
    "sqlmap": "web",
    "sql injection": "web",
    "web application": "web",
    "web security": "web",
    "api gateway": "web",
    "nuclei": "web",
    "burp suite": "web",
    "vulnerability scan": "web",
    "nessus": "web",
    "web vulnerability": "web",
    "top 10 web": "web",

    # windows
    "windows cmd": "windows",
    "windows cli": "windows",
    "powershell": "windows",
    "reverse shell": "windows",
    "windows hacker": "windows",
    "cmd for pentesters": "windows",
    "basic windows": "windows",
}

def categorize(pdf_name: str) -> str:
    lower = pdf_name.lower()
    for keyword, cat in CATEGORY_MAP.items():
        if keyword.lower() in lower:
            return cat
    return "security"  # default fallback

# ─── Slug Generation ──────────────────────────────────────────────────────────
def slugify(text: str) -> str:
    text = text.lower()
    # Remove emoji and special chars
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_]+', '-', text)
    text = re.sub(r'-+', '-', text)
    text = text.strip('-')
    return text

# ─── OCR Corruption Cleaner ───────────────────────────────────────────────────
LIGATURE_MAP = {
    'ﬁ': 'fi', 'ﬂ': 'fl', 'ﬀ': 'ff', 'ﬃ': 'ffi', 'ﬄ': 'ffl',
    'ﬅ': 'st', 'ﬆ': 'st', '\u00ad': '',  # soft hyphen
    '\u2019': "'", '\u2018': "'", '\u201c': '"', '\u201d': '"',
    '\u2013': '-', '\u2014': '-', '\u2022': '-', '\u25cf': '-',
    '\u00a0': ' ', '\ufeff': '',
}

# Patterns that indicate website/social footer garbage
FOOTER_PATTERNS = [
    r'(?i)follow\s+(us\s+)?for\s+more\s+cyber\s+content',
    r'(?i)all\s+commands\s+and\s+resources\s+are\s+available',
    r'(?i)join\s*[:\s]*\s*[\U00010000-\U0010ffff\u2600-\u27ff]*',
    r'(?i)thanks\s+for\s+(watching|reading)',
    r'(?i)subscribe\s+(to|for)',
    r'(?i)click\s+(?:here|the\s+link)',
    r'(?i)previous\s*/\s*next',
    r'(?i)^\s*next\s*$',
    r'(?i)^\s*previous\s*$',
    r'(?i)page\s+\d+\s+of\s+\d+',
    r'(?i)^\s*\d+\s*$',  # bare page numbers
    r'(?i)copyright\s+©',
    r'(?i)©\s+\d{4}',
    r'(?i)all\s+rights\s+reserved',
    r'(?i)printed\s+by',
    r'(?i)www\.[a-z]+\.[a-z]+',
    r'(?i)https?://[^\s]+',
    r'(?i)@[a-zA-Z0-9_]+',   # social handles
    r'(?i)telegram\s*:',
    r'(?i)discord\s*:',
    r'(?i)📲\s*join',
    r'(?i)responsible\s+use\.',
    r'(?i)^\s*─+\s*$',
    r'(?i)^\s*[-=]{5,}\s*$',
]

# Harmful content patterns to filter out
HARMFUL_PATTERNS = [
    # Reverse shells
    r'(?i)(bash\s*-i\s*>&?\s*/dev/tcp)',
    r'(?i)(nc\s+-[elvp]+\s+\d+\s+-e\s+/bin)',
    r'(?i)(python.*socket.*subprocess.*bind)',
    r'(?i)(msfvenom.*reverse.*shell)',
    r'(?i)(msfvenom.*-p\s+windows/meterpreter)',
    r'(?i)(msfvenom.*-p\s+linux/.*reverse)',
    # Persistence
    r'(?i)(schtasks.*\/create.*\/ru\s+system)',
    r'(?i)(reg\s+add.*run.*malware)',
    # Credential theft
    r'(?i)(mimikatz.*sekurlsa)',
    r'(?i)(hashdump)',
    r'(?i)(lsadump)',
    # Phishing
    r'(?i)(setoolkit.*spear.*phishing)',
    r'(?i)(social\s+engineering\s+toolkit.*phishing)',
]

HARMFUL_BLOCK_KEYWORDS = [
    'create a reverse shell payload',
    'generate a meterpreter payload',
    'dump password hashes',
    'harvest credentials',
    'bypass antivirus detection',
    'create a backdoor',
    'install a keylogger',
    'persistence mechanism',
    'establish persistence',
    'exfiltrate data',
    'deploy ransomware',
    'encrypt victim files',
]

def is_harmful_line(line: str) -> bool:
    ll = line.lower()
    for kw in HARMFUL_BLOCK_KEYWORDS:
        if kw in ll:
            return True
    for pat in HARMFUL_PATTERNS:
        if re.search(pat, line):
            return True
    return False

def is_footer_line(line: str) -> bool:
    for pat in FOOTER_PATTERNS:
        if re.search(pat, line):
            return True
    return False

def fix_ligatures(text: str) -> str:
    for orig, replacement in LIGATURE_MAP.items():
        text = text.replace(orig, replacement)
    return text

def fix_spaced_chars(text: str) -> str:
    """Fix OCR spaced characters like 'w i r e s h a r k' → 'wireshark'."""
    # Match sequences of single chars separated by spaces (≥3 occurrences)
    def replace_spaced(m):
        word = m.group(0).replace(' ', '')
        return word
    # Pattern: single char, space, single char, space... (at least 3 pairs)
    pattern = r'\b([A-Za-z0-9] ){2,}[A-Za-z0-9]\b'
    text = re.sub(pattern, replace_spaced, text)
    return text

def clean_ocr_line(line: str) -> str:
    line = fix_ligatures(line)
    line = fix_spaced_chars(line)
    # Remove HTML entities
    line = line.replace('&gt;', '>').replace('&lt;', '<').replace('&amp;', '&')
    line = line.replace('&#123;', '{').replace('&#125;', '}')
    # Fix bullet symbols
    line = re.sub(r'^[●•◆▪■□▸►▶→\u2023\u2043\u25aa\u25ab]\s*', '- ', line)
    # Remove page markers
    line = re.sub(r'^\s*\d{1,3}\s*$', '', line)
    # Normalize multiple spaces (but not leading indent)
    line = re.sub(r'([^\s])\s{3,}([^\s])', r'\1 \2', line)
    return line

def clean_text_block(raw_text: str) -> list[str]:
    """Clean raw OCR text and return list of cleaned lines."""
    lines = raw_text.split('\n')
    cleaned = []
    prev_line = ''
    seen_lines = set()  # for dedup

    for line in lines:
        line = clean_ocr_line(line)
        line = line.rstrip()

        # Skip empty duplicates
        if line == prev_line and line.strip() == '':
            continue

        # Skip footer/nav garbage
        if is_footer_line(line):
            continue

        # Skip harmful content
        if is_harmful_line(line):
            cleaned.append('> **Note:** Specific exploit instructions omitted. See authorized red team engagement procedures.')
            prev_line = line
            continue

        # Deduplicate repeated content blocks
        stripped = line.strip()
        if stripped and len(stripped) > 20:
            key = re.sub(r'\s+', '', stripped.lower())
            if key in seen_lines:
                continue
            seen_lines.add(key)

        cleaned.append(line)
        prev_line = line

    return cleaned

# ─── PDF Text Extraction ──────────────────────────────────────────────────────
def extract_pdf_text(pdf_path: Path) -> str:
    """Extract all text from a PDF using PyMuPDF."""
    try:
        doc = fitz.open(str(pdf_path))
        pages_text = []
        for page_num, page in enumerate(doc):
            text = page.get_text("text")
            pages_text.append(text)
        doc.close()
        return '\n'.join(pages_text)
    except Exception as e:
        print(f"  [ERROR] Failed to extract {pdf_path.name}: {e}")
        return ''

# ─── Structure Analysis ───────────────────────────────────────────────────────
def detect_heading(line: str) -> tuple[int, str] | None:
    """Detect if a line looks like a heading. Returns (level, text) or None."""
    stripped = line.strip()
    if not stripped:
        return None

    # Already markdown heading
    m = re.match(r'^(#{1,4})\s+(.+)', stripped)
    if m:
        return (len(m.group(1)), m.group(2))

    # Numbered section heading like "1. File Operations:" or "1 . File Operations"
    m = re.match(r'^(\d{1,2})\s*[.\)]\s+([A-Z][^a-z]{0,2}.{3,60}):?\s*$', stripped)
    if m:
        return (2, m.group(2).rstrip(':'))

    # ALL CAPS short line (likely a heading)
    if stripped.isupper() and 3 < len(stripped) < 80 and not stripped.startswith('-'):
        return (2, stripped.title())

    # Title case short line ending with colon
    m = re.match(r'^([A-Z][A-Za-z\s&/\-]{3,60}):$', stripped)
    if m:
        return (3, m.group(1))

    return None

def is_code_line(line: str) -> bool:
    """Heuristic: does this line look like a shell command?"""
    stripped = line.strip()
    if not stripped:
        return False
    patterns = [
        r'^(sudo|apt|pip|npm|git|nmap|grep|awk|sed|cat|ls|cd|cp|mv|rm|tar|curl|wget|ssh|netstat|ss|ip\s|iptables|ufw|systemctl|service|find|chmod|chown|ps|kill|pkill|top|htop|df|du|free|echo|export|env|python|python3|bash|sh|/bin|/usr|/etc|/var)',
        r'^[\$#]\s+',  # shell prompt
        r'^\s{4,}',  # indented block
    ]
    for p in patterns:
        if re.match(p, stripped, re.IGNORECASE):
            return True
    return False

def is_bullet(line: str) -> bool:
    return bool(re.match(r'^[-*•]\s+', line.strip()))

# ─── MDX Generator ────────────────────────────────────────────────────────────
def build_mdx(title: str, category: str, cleaned_lines: list[str], date_str: str) -> str:
    """Convert cleaned lines into proper MDX structure."""

    # Derive tags from title
    words = re.findall(r'[a-z]+', title.lower())
    tag_candidates = [w for w in words if len(w) > 3 and w not in {
        'with', 'from', 'that', 'this', 'have', 'will', 'your', 'every',
        'must', 'know', 'more', 'each', 'than', 'them', 'they', 'also',
        'into', 'part', 'most', 'some', 'been', 'were', 'when', 'what',
        'about', 'guide', 'cheat', 'sheet', 'command', 'commands',
        'essential', 'advanced', 'complete', 'ultimate', 'comprehensive'
    }]
    tags = list(dict.fromkeys(tag_candidates))[:6]  # dedup, max 6

    # Title-based description
    desc_map = {
        'linux': 'A comprehensive Linux command reference for cybersecurity professionals, system administrators, and defensive security practitioners.',
        'kali': 'A defensive and educational reference for Kali Linux tools, commands, and security assessment workflows.',
        'networking': 'Network security monitoring, traffic analysis, and infrastructure hardening reference guide.',
        'security': 'Cybersecurity defensive techniques, threat detection, and authorized security assessment reference.',
        'web': 'Web application security auditing, vulnerability assessment, and defensive hardening guide.',
        'windows': 'Windows command-line reference for system administration, auditing, and defensive security.',
        'metasploit': 'Authorized penetration testing framework reference for security professionals and ethical hackers.',
        'nmap': 'Network discovery and security auditing with Nmap — authorized scanning and enumeration reference.',
        'wireshark': 'Network traffic analysis and packet inspection with Wireshark and TShark.',
        'sqlmap': 'SQL injection detection and database auditing guide for authorized security assessments.',
    }
    description = f'A professional reference guide for {title}.'
    for kw, desc in desc_map.items():
        if kw in title.lower():
            description = desc
            break

    # Estimate reading time (~200 words/min)
    word_count = sum(len(l.split()) for l in cleaned_lines)
    reading_time = max(2, round(word_count / 200))

    # Build sections
    sections: list[str] = []
    current_section: list[str] = []
    in_code_block = False
    code_buffer: list[str] = []

    def flush_code():
        nonlocal code_buffer
        if code_buffer:
            sections.append('```bash')
            sections.extend(code_buffer)
            sections.append('```')
            sections.append('')
            code_buffer = []

    def flush_section():
        nonlocal current_section
        if current_section:
            # Remove leading/trailing blank lines
            while current_section and not current_section[0].strip():
                current_section.pop(0)
            while current_section and not current_section[-1].strip():
                current_section.pop()
            sections.extend(current_section)
            if current_section:
                sections.append('')
            current_section = []

    i = 0
    while i < len(cleaned_lines):
        line = cleaned_lines[i]
        stripped = line.strip()

        # Skip bare page numbers
        if re.match(r'^\d{1,3}$', stripped):
            i += 1
            continue

        # Already-fenced code block
        if stripped.startswith('```'):
            if in_code_block:
                flush_code()
                in_code_block = False
            else:
                flush_section()
                in_code_block = True
                lang = stripped[3:].strip() or 'bash'
                code_buffer = []
            i += 1
            continue

        if in_code_block:
            code_buffer.append(line)
            i += 1
            continue

        # Heading detection
        heading = detect_heading(line)
        if heading:
            flush_section()
            flush_code()
            level, text = heading
            # Don't re-emit the title as a heading
            if text.strip().lower() == title.lower():
                i += 1
                continue
            sections.append(f"{'#' * level} {text}")
            sections.append('')
            i += 1
            continue

        # Code line clustering
        if is_code_line(stripped) and not is_bullet(stripped):
            flush_section()
            # Collect consecutive code-like lines
            code_lines = []
            j = i
            while j < len(cleaned_lines):
                cl = cleaned_lines[j].strip()
                if cl == '':
                    # Allow one blank line in code block
                    if j + 1 < len(cleaned_lines) and is_code_line(cleaned_lines[j + 1].strip()):
                        j += 1
                        continue
                    else:
                        break
                if is_code_line(cl) or (cl.startswith('-') and is_code_line(cl[2:])):
                    code_lines.append(cl)
                    j += 1
                else:
                    break
            if len(code_lines) >= 1:
                sections.append('```bash')
                sections.extend(code_lines)
                sections.append('```')
                sections.append('')
                i = j
                continue

        # Normal content
        if not stripped:
            flush_code()
            if current_section and current_section[-1] != '':
                current_section.append('')
        else:
            # Clean up bullets
            bullet_m = re.match(r'^[-*]\s+(.+)', stripped)
            if bullet_m:
                current_section.append(f'- {bullet_m.group(1)}')
            else:
                # Wrap long inline paragraphs
                current_section.append(stripped)

        i += 1

    flush_code()
    flush_section()

    # Remove consecutive blank lines
    final_lines = []
    prev_blank = False
    for line in sections:
        if line == '':
            if prev_blank:
                continue
            prev_blank = True
        else:
            prev_blank = False
        final_lines.append(line)

    body = '\n'.join(final_lines).strip()

    # Add Overview section if body doesn't start with a heading
    if body and not body.startswith('#'):
        body = '## Overview\n\n' + body

    # Defensive notice
    defensive_notice = '''> [!IMPORTANT]
> **Authorized Use Only**
> This reference is intended for defensive security, authorized auditing, system administration, and ethical learning. Always obtain written permission before testing any system or network.'''

    tag_yaml = ', '.join(f'"{t}"' for t in tags) if tags else '"linux", "security"'

    mdx = f"""---
title: "{title}"
description: "{description}"
date: "{date_str}"
tags: [{tag_yaml}]
category: "notes"
subcategory: "{category}"
difficulty: "Intermediate"
readingTime: "{reading_time} min read"
---

# {title}

{defensive_notice}

{body}

---

## Educational Use Notice

This content is provided strictly for educational purposes, defensive security awareness, system administration, diagnostics, and ethical learning environments.

Always obtain proper authorization before testing systems or networks. The information published on this website is intended to promote responsible security practices, auditing, monitoring, and infrastructure hardening.
"""
    return mdx

# ─── Duplicate File Handling ──────────────────────────────────────────────────
def get_best_pdf(pdf_list: list[Path]) -> Path:
    """From a list of duplicate PDFs, pick the largest one (most content)."""
    return max(pdf_list, key=lambda p: p.stat().st_size)

def deduplicate_pdfs(pdf_files: list[Path]) -> list[Path]:
    """Remove near-duplicate PDFs (same slug), keeping the largest."""
    slug_map: dict[str, list[Path]] = {}
    for pdf in pdf_files:
        slug = slugify(pdf.stem)
        slug_map.setdefault(slug, []).append(pdf)

    result = []
    for slug, pdfs in slug_map.items():
        result.append(get_best_pdf(pdfs))
    return result

# ─── Output Slug for Each PDF ─────────────────────────────────────────────────
# Manual overrides for cleaner slugs
SLUG_OVERRIDES = {
    '+100 Linux Command': 'linux-essential-commands-100',
    '+100 Linux Command (2)': None,  # skip duplicate
    'Blue Team Toolkit.pdf': None,  # skip pure duplicate
    'Reverse Shells - Windows - HexSecCheatSheet (2)': None,
    'bug hunting guide.pdf (2)': None,
    'bug hunting guide.pdf': 'bug-hunting-guide',
    'Linux and windows reverse shell scripts': 'defensive-shell-awareness',
    'Creatively Malicious Prompt Engineering': 'ai-prompt-injection-defense',
    'Basic Windows CMD for Pentesters – Defensive Cheat Sheet': 'windows-cmd-defensive-cheatsheet',
    'Hacking Drone with DroneSploit part1': 'dronesploit-security-guide-part1',
    'Hacking Drone with DroneSploit part2': 'dronesploit-security-guide-part2',
    '📡 Wireshark': None,  # dup
    'WIRESHARK ': 'wireshark-complete-guide',
    'Essential Linux Commands for Cybersecurity Specialists.pdf': 'linux-commands-cybersecurity-specialists',
    'Linux Commands Every Cybersecurity Specialist Needs.pdf': 'linux-commands-specialist-needs',
    'Linux Commands Every Cybersecurity Specialist Needs.pdf.pdf': None,  # dup
    'Master Termux Handbook (2)': None,  # dup
    'Blue Team Toolkit.pdf.pdf': None,  # dup
    'bug hunting guide.pdf.pdf': None,  # dup
    '100KaliLinuxCommandsEveryHackerMustKnowPart02': '100-kali-linux-commands-part-2',
    '100_Kali_Linux_Commands_Every_Ethical_Hacker_Must_Know_–_Part_3': '100-kali-linux-commands-part-3',
    '100_Kali_Linux_Commands_Every_Ethical_Hacker_Must_Know–PART_1': '100-kali-linux-commands-part-1',
    'OSCP CheatSheet_page': None,  # large duplicate, skip
    'Reverse Shells - Windows - HexSecCheatSheet': 'windows-defensive-shell-reference',
    '🧿 Vulnerability Scanning with Nessus - hexsec': 'nessus-vulnerability-scanning-guide',
    'sqlmap - SQL Injection attack': 'sqlmap-sql-injection-defense',
    'SqlMap Guide': 'sqlmap-usage-guide',
    'Hacking Project To Get Started': 'ethical-hacking-projects-guide',
    'Linux Commands Every Cybersecurity Specialist Needs.pdf.pdf.pdf': None,  # dup
}

TITLE_OVERRIDES = {
    '+100 Linux Command': 'Essential Linux Commands: 100+ Reference Guide',
    'Linux and windows reverse shell scripts': 'Defensive Shell Awareness Guide',
    'Creatively Malicious Prompt Engineering': 'AI Prompt Injection: Defensive Awareness',
    'Basic Windows CMD for Pentesters – Defensive Cheat Sheet': 'Windows CMD Defensive Cheatsheet',
    '100KaliLinuxCommandsEveryHackerMustKnowPart02': '100 Kali Linux Commands Every Hacker Must Know – Part 2',
    '100_Kali_Linux_Commands_Every_Ethical_Hacker_Must_Know_–_Part_3': '100 Kali Linux Commands – Part 3',
    '100_Kali_Linux_Commands_Every_Ethical_Hacker_Must_Know–PART_1': '100 Kali Linux Commands – Part 1',
    'WIRESHARK ': 'Wireshark Complete Guide',
    'Hacking Project To Get Started': 'Ethical Hacking Projects: Getting Started',
    'Reverse Shells - Windows - HexSecCheatSheet': 'Windows Defensive Shell Reference',
    '🧿 Vulnerability Scanning with Nessus - hexsec': 'Vulnerability Scanning with Nessus',
    'sqlmap - SQL Injection attack': 'SQLMap & SQL Injection Defense',
    'Black_Hat_Python_–_A_Must_Read_for_Ethical_Hackers_&_Pentesters_': 'Black Hat Python: Ethical Hacker\'s Reference',
    'KALI LINUX HACKING CHEAT SHEET20 Essential tools': 'Kali Linux Hacking Cheat Sheet: 20 Essential Tools',
    'A–Z Kali Linux Commands': 'A-Z Kali Linux Commands Reference',
    'A-Z Kali Linux COMMAND': 'A-Z Kali Linux Commands (Extended)',
    '10 GitHub Repositories for Learning Ethical Hacking 2026': '10 GitHub Repositories for Learning Ethical Hacking',
}

def clean_pdf_title(stem: str) -> str:
    """Clean PDF filename into a readable title."""
    if stem in TITLE_OVERRIDES:
        return TITLE_OVERRIDES[stem]
    # Remove emoji
    stem = re.sub(r'[\U00010000-\U0010ffff\u2600-\u27ff]+', '', stem).strip()
    # Replace underscores/hyphens with spaces
    stem = stem.replace('_', ' ').replace('-', ' ')
    # Clean up repeated spaces
    stem = re.sub(r'\s+', ' ', stem).strip()
    # Remove .pdf artifacts
    stem = re.sub(r'\.pdf', '', stem, flags=re.IGNORECASE).strip()
    # Title case (but preserve acronyms)
    words = stem.split()
    titled = []
    for w in words:
        if w.isupper() and len(w) > 1:
            titled.append(w)  # preserve acronyms
        else:
            titled.append(w.capitalize())
    return ' '.join(titled)

# ─── Main Migration Logic ─────────────────────────────────────────────────────
def process_pdf(pdf_path: Path, date_str: str) -> tuple[str, str] | None:
    """
    Process one PDF and return (output_path, mdx_content) or None to skip.
    """
    stem = pdf_path.stem

    # Check for explicit skip
    if stem in SLUG_OVERRIDES and SLUG_OVERRIDES[stem] is None:
        print(f"  [SKIP] {pdf_path.name} (duplicate/excluded)")
        return None

    # Derive slug and title
    slug = SLUG_OVERRIDES.get(stem, slugify(stem))
    if not slug:
        return None

    title = clean_pdf_title(stem)
    category = categorize(pdf_path.name)

    print(f"  [PROCESS] {pdf_path.name}")
    print(f"    Title: {title}")
    print(f"    Category: {category} | Slug: {slug}")

    # Extract text
    raw_text = extract_pdf_text(pdf_path)
    if not raw_text.strip():
        print(f"    [WARN] No text extracted, skipping.")
        return None

    # Clean OCR
    cleaned_lines = clean_text_block(raw_text)
    if not cleaned_lines:
        print(f"    [WARN] No content after cleaning.")
        return None

    # Generate MDX
    mdx_content = build_mdx(title, category, cleaned_lines, date_str)

    output_path = NOTES_DIR / category / f"{slug}.mdx"
    return str(output_path), mdx_content


def delete_old_notes():
    """Delete all existing corrupted notes."""
    count = 0
    for mdx_file in NOTES_DIR.rglob('*.mdx'):
        mdx_file.unlink()
        count += 1
    print(f"  Deleted {count} old notes.")


def main():
    import sys
    sys.stdout.reconfigure(encoding='utf-8')
    print("=" * 60)
    print("PDF -> MDX Migration")
    print(f"  Source: {DOCS_DIR}")
    print(f"  Output: {NOTES_DIR}")
    print("=" * 60)

    date_str = datetime.now().strftime("%Y-%m-%d")

    # Ensure output directories
    for subdir in ['linux', 'networking', 'security', 'web', 'windows']:
        (NOTES_DIR / subdir).mkdir(parents=True, exist_ok=True)

    # Delete old corrupted notes
    print("\n[1] Deleting old corrupted notes...")
    delete_old_notes()

    # Collect all PDFs
    pdf_files = list(DOCS_DIR.glob('*.pdf'))
    print(f"\n[2] Found {len(pdf_files)} PDFs to process.")

    # Process each PDF
    print("\n[3] Processing PDFs...")
    written = 0
    skipped = 0
    errors = 0

    for pdf_path in sorted(pdf_files):
        try:
            result = process_pdf(pdf_path, date_str)
            if result is None:
                skipped += 1
                continue
            output_path_str, mdx_content = result
            output_path = Path(output_path_str)
            output_path.write_text(mdx_content, encoding='utf-8')
            size_kb = len(mdx_content.encode('utf-8')) / 1024
            print(f"    [OK] Saved -> {output_path.relative_to(NOTES_DIR)} ({size_kb:.1f} KB)")
            written += 1
        except Exception as e:
            print(f"  [ERROR] {pdf_path.name}: {e}")
            import traceback
            traceback.print_exc()
            errors += 1

    print("\n" + "=" * 60)
    print(f"Migration complete!")
    print(f"  Written:  {written} notes")
    print(f"  Skipped:  {skipped} (duplicates/excluded)")
    print(f"  Errors:   {errors}")
    print("=" * 60)


if __name__ == '__main__':
    main()
