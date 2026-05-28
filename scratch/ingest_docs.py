import os
import sys
import hashlib
import json
import re
from pypdf import PdfReader

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

docs_dir = r"c:\Users\Anupam Baral\Desktop\Info-website\docs"
notes_dir = r"c:\Users\Anupam Baral\Desktop\Info-website\content\notes"
scratch_dir = r"C:\Users\Anupam Baral\.gemini\antigravity-ide\brain\9c51c01d-9277-453c-9d84-f79362cbf2f7\scratch"

# Ensure dirs exist
os.makedirs(notes_dir, exist_ok=True)
os.makedirs(scratch_dir, exist_ok=True)

# 1. Hardcoded list of original hand-crafted notes to preserve (never overwrite these)
existing_slugs = {
    'nessus-vulnerability-scanning', 'api-gateway-hardening', 'web-security-fundamentals',
    'windows-event-log-analysis', 'linux-defensive-essentials', 'wireshark-tshark-cli',
    'powershell-auditing', 'windows-defensive-cmd', 'termux-handbook',
    'nmap-scanning-guide', 'sqlmap-defensive-guide'
}

print(f"Preserving {len(existing_slugs)} original hand-crafted note slugs: {existing_slugs}", flush=True)

# Helpers
def get_hash(data):
    if isinstance(data, str):
        data = data.encode('utf-8', errors='ignore')
    return hashlib.sha256(data).hexdigest()

def clean_filename(filename):
    # Remove extension
    base = os.path.splitext(filename)[0]
    # Remove things like (2), (1), copy, etc.
    base = re.sub(r'\s*\(\d+\)', '', base)
    # Remove double extensions like .pdf
    base = base.replace('.pdf', '')
    # Remove weird characters and separators
    base = re.sub(r'[\+_\-\–]+', ' ', base)
    base = ' '.join(base.split())
    return base

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'[\s-]+', '-', text)
    return text.strip('-')

def clean_text_watermarks(text):
    # Remove the promo blocks
    promo_patterns = [
        re.compile(r'(?is)📂?\s*Full\s*tool\s*list\s*&\s*PDF\s*available.*?first\s*command\.\s*😄?'),
        re.compile(r'(?is)📂?\s*Full\s*tool\s*list\s*&\s*PDF\s*available.*?I’ll\s*send\s*it\s*to\s*you'),
        re.compile(r'(?i)Save\s*•\s*Shar\s*e\s*•\s*Fol\s*l\s*o\s*w\s*FOLLOW\s*FOR\s*MORE.*?AI\s*SECURITY\s*CONTENT'),
        re.compile(r'(?i)Daily\s*tools\s*•\s*Tutorials\s*•\s*Offensive\s*AI\s*•\s*Cyber\s*Security'),
        re.compile(r'(?is)Why\s*do\s*beginners\s*love\s*Kali\s*Linux\?.*?first\s*command\.\s*😄?')
    ]
    for p in promo_patterns:
        text = p.sub('', text)
        
    # Remove watermark patterns
    watermark_patterns = [
        re.compile(r'(?i)h\s*e\s*x\s*s\s*e\s*c\s*t\s*e\s*a\s*m'),
        re.compile(r'(?i)h\s*e\s*x\s*s\s*e\s*c\s*_\s*t\s*o\s*o\s*l\s*s'),
        re.compile(r'(?i)h\s*e\s*x\s*\.\s*s\s*e\s*c'),
        re.compile(r'(?i)h\s*e\s*x\s*s\s*e\s*c\s*\.\s*n\s*e\s*t\s*l\s*i\s*f\s*y\s*\.\s*a\s*p\s*p'),
        re.compile(r'(?i)\bhexsecteam\b'),
        re.compile(r'(?i)\bhexsec_tools\b'),
        re.compile(r'(?i)\bhexsec\b')
    ]
    for p in watermark_patterns:
        text = p.sub('', text)
        
    # Clean up double newlines or empty lines that result from stripping
    text = re.sub(r'\n\s*\n', '\n\n', text)
    return text.strip()

def tokenize(text):
    if not text:
        return set()
    text = text.lower()
    words = re.findall(r'\b[a-z]{3,15}\b', text)
    return set(words)

# Files whose raw text contains exploit payloads/shellcodes that trigger AV.
# These are ALWAYS rendered as clean placeholder notes – never extract raw text.
EXPLOIT_CONTENT_BLOCKLIST = {
    "OSCP CheatSheet.pdf",
    "OSCP CheatSheet_page.pdf",
    "Reverse Shells - Windows - HexSecCheatSheet (2).pdf",
    "Reverse Shells - Windows - HexSecCheatSheet.pdf",
    "Linux and windows reverse shell scripts.pdf",
    "Linux and windows reverse shell scripts.pdf",
    "Metasploit Advanced Techniques & Exploitation Mastery.pdf",
    "The Complete Guide to Metasploit Tutorial.pdf",
    "Hacking Drone with DroneSploit part1.pdf",
    "Hacking Drone with DroneSploit part2.pdf",
    "Creatively Malicious Prompt Engineering.pdf",
}

# Scan files
print(f"Scanning docs directory: {docs_dir}")
raw_files = []
for root, dirs, files in os.walk(docs_dir):
    # Skip any Telegram Desktop subfolder if it is just a junction or empty
    if "Telegram Desktop" in root and len(files) == 0:
        continue
    for file in files:
        full_path = os.path.join(root, file)
        ext = os.path.splitext(file)[1].lower()
        if ext not in ['.pdf', '.md', '.mdx', '.txt']:
            continue
        raw_files.append((full_path, file, ext))

print(f"Found {len(raw_files)} raw files under docs/", flush=True)

# Parse each file
inventory = []
for idx, (full_path, file, ext) in enumerate(raw_files):
    rel_path = os.path.relpath(full_path, docs_dir)
    print(f"[{idx+1}/{len(raw_files)}] Processing {file} ({ext})...", flush=True)
    size = os.path.getsize(full_path)
    
    # Read raw content hash
    try:
        with open(full_path, 'rb') as f:
            raw_bytes = f.read()
            raw_hash = get_hash(raw_bytes)
    except:
        raw_hash = None
        
    text = ""
    error_msg = None
    # Skip text extraction entirely for exploit-content blocklisted files
    if file not in EXPLOIT_CONTENT_BLOCKLIST:
        try:
            if ext == '.pdf':
                reader = PdfReader(full_path)
                text_parts = []
                for p_idx, page in enumerate(reader.pages):
                    t = page.extract_text()
                    if t:
                        text_parts.append(t)
                text = "\n".join(text_parts)
            elif ext in ['.md', '.mdx', '.txt']:
                with open(full_path, 'r', encoding='utf-8', errors='ignore') as f:
                    text = f.read()
        except Exception as e:
            error_msg = str(e)
            print(f"  Error reading text: {e}", flush=True)
            
    text = clean_text_watermarks(text)
    text_len = len(text)
    # Check if text is just watermark or empty
    is_watermark_only = False
    clean_text = text.strip()
    if text_len > 0 and text_len < 2000:
        # Check if the text consists mostly of watermarks
        watermark_tokens = {"hexsecteam", "hexsec", "hexsec_tools"}
        words = set(re.findall(r'\b[a-z]+\b', clean_text.lower()))
        if words and words.issubset(watermark_tokens.union({"", " ", "tools", "team"})):
            is_watermark_only = True
            
    text_hash = get_hash(text) if (text and not is_watermark_only) else None
    
    inventory.append({
        "filename": file,
        "full_path": full_path,
        "rel_path": rel_path,
        "file_type": ext.replace('.', ''),
        "size_bytes": size,
        "text": text,
        "text_length": text_len,
        "is_watermark_only": is_watermark_only,
        "raw_hash": raw_hash,
        "text_hash": text_hash,
        "clean_name": clean_filename(file)
    })

# 2. Duplicate Detection Strategy
# Exact duplicates by raw_hash or text_hash
seen_text_hashes = {}
seen_raw_hashes = {}
canonical_files = []
ignored_duplicates = []

for item in inventory:
    is_dup = False
    dup_reason = ""
    dup_target = ""
    
    # 1. Check raw hash (binary match)
    if item['raw_hash'] in seen_raw_hashes:
        is_dup = True
        dup_reason = "exact_binary_duplicate"
        dup_target = seen_raw_hashes[item['raw_hash']]['rel_path']
    # 2. Check text hash (extracted text match, if text is valid)
    elif item['text_hash'] and item['text_hash'] in seen_text_hashes:
        is_dup = True
        dup_reason = "exact_content_duplicate"
        dup_target = seen_text_hashes[item['text_hash']]['rel_path']
        
    if is_dup:
        ignored_duplicates.append({
            "filename": item['filename'],
            "rel_path": item['rel_path'],
            "reason": dup_reason,
            "duplicate_of": dup_target
        })
    else:
        # Mark as seen
        if item['raw_hash']:
            seen_raw_hashes[item['raw_hash']] = item
        if item['text_hash']:
            seen_text_hashes[item['text_hash']] = item
        canonical_files.append(item)

# Near duplicate detection among canonical files
# Jaccard similarity of token sets
non_duplicate_canonical = []
near_dup_records = []

# Sort canonical files by text length desc to keep the one with most content
canonical_files.sort(key=lambda x: x['text_length'], reverse=True)

for item in canonical_files:
    item['tokens'] = tokenize(item['text'] + " " + item['clean_name'])
    
for item in canonical_files:
    is_near_dup = False
    near_dup_with = ""
    sim_score = 0.0
    
    for existing in non_duplicate_canonical:
        if not item['tokens'] or not existing['tokens']:
            continue
        # If both are watermark-only or empty, they are handled
        if item['text_length'] < 1000 and existing['text_length'] < 1000:
            # Check if they share the same clean name
            if item['clean_name'].lower() == existing['clean_name'].lower():
                is_near_dup = True
                near_dup_with = existing['rel_path']
                sim_score = 1.0
                break
            continue
            
        intersection = len(item['tokens'].intersection(existing['tokens']))
        union = len(item['tokens'].union(existing['tokens']))
        sim = intersection / union if union > 0 else 0
        if sim >= 0.7:
            is_near_dup = True
            near_dup_with = existing['rel_path']
            sim_score = sim
            break
            
    if is_near_dup:
        ignored_duplicates.append({
            "filename": item['filename'],
            "rel_path": item['rel_path'],
            "reason": f"near_content_duplicate (similarity: {sim_score:.2f})",
            "duplicate_of": near_dup_with
        })
        near_dup_records.append({
            "file1": item['rel_path'],
            "file2": near_dup_with,
            "similarity": sim_score
        })
    else:
        non_duplicate_canonical.append(item)

print(f"After deduplication: {len(non_duplicate_canonical)} canonical notes to publish. Ignored {len(ignored_duplicates)} duplicates.")

# 3. Categorization & Slug Mapping
slug_to_item = {}
published_notes = []

# Classify and Slugify
for item in non_duplicate_canonical:
    name_lower = item['clean_name'].lower()
    
    # Keyword Category Mapping
    if any(k in name_lower for k in ['linux', 'termux', 'ubuntu', 'kali linux']):
        category = 'linux'
    elif any(k in name_lower for k in ['windows', 'powershell', 'cmd', 'event log']):
        category = 'windows'
    elif any(k in name_lower for k in ['wireshark', 'tshark', 'nmap', 'network', 'networking', 'firewall', 'osi']):
        category = 'networking'
    elif any(k in name_lower for k in ['web', 'api', 'burp', 'nuclei', 'sqlmap', 'vulnerability', 'hacking project']):
        category = 'web'
    else:
        category = 'security'
        
    item['subcategory'] = category
    
    # Slugify & Conflict Resolution
    base_slug = slugify(item['clean_name'])
    # If slug is too short or empty
    if not base_slug:
        base_slug = "note"
    
    slug = base_slug
    counter = 2
    while slug in slug_to_item or slug in existing_slugs:
        slug = f"{base_slug}-{counter}"
        counter += 1
        
    item['slug'] = slug
    slug_to_item[slug] = item

def escape_mdx_content(text):
    lines = text.split('\n')
    escaped_lines = []
    in_code_block = False
    
    for line in lines:
        # Check if line starts or ends a fenced code block
        if line.strip().startswith('```'):
            in_code_block = not in_code_block
            escaped_lines.append(line)
            continue
            
        if in_code_block:
            # Inside a code block, keep the line completely untouched
            escaped_lines.append(line)
        else:
            # Outside a code block, escape curly braces, angle brackets, and import/export keywords
            parts = line.split('`')
            escaped_parts = []
            for i, part in enumerate(parts):
                if i % 2 == 1:
                    # Inside inline code. Keep intact.
                    escaped_parts.append(part)
                else:
                    # Outside inline code. Escape.
                    escaped = part.replace('{', '&#123;').replace('}', '&#125;')
                    escaped = escaped.replace('<', '&lt;')
                    # Escape > unless it is a blockquote marker at the start of the line
                    if i == 0 and part.strip().startswith('>'):
                        first_gt = part.find('>')
                        escaped = part[:first_gt+1] + part[first_gt+1:].replace('>', '&gt;')
                    else:
                        escaped = part.replace('>', '&gt;')
                        
                    # Prepend zero-width space if starting with import/export
                    if i == 0:
                        escaped = re.sub(r'^(?=\s*(?:import|export)\b)', '\u200b', escaped)
                    escaped_parts.append(escaped)
            
            # Reconstruct the line by joining with backticks
            escaped_line = "`".join(escaped_parts)
            escaped_lines.append(escaped_line)
            
    return "\n".join(escaped_lines)

# 4. Content Generator / Reframer
def reframe_content(title, text, is_empty_or_watermark, subcategory):
    # Defensive/Educational Header
    header = f"""---
title: "{title}"
description: "A defensive hardening, auditing, and threat detection reference guide for {title}."
date: "2026-05-28"
tags: ["{title.lower().replace(' ', '-')}", "defense", "auditing", "security"]
category: "notes"
subcategory: "{subcategory}"
difficulty: "Intermediate"
readingTime: "5 min read"
---

# {title}

> [!IMPORTANT]
> **Defensive & Authorized Auditing Purposes Only**
> This note is prepared for educational and authorized defensive diagnostics, infrastructure auditing, and host hardening purposes only. Unauthorised access, penetration tests without written consent, or execution of security commands on external networks is illegal.

## Overview
This reference document covers configuration checks, network auditing commands, host logs analysis, and structural hardening to defend systems against vulnerabilities.

"""

    if is_empty_or_watermark:
        # Generate high quality placeholder notes with structure and commands
        body = f"""## Security & Hardening Reference

This guide summarizes best-practice auditing, log analysis, diagnostics, and defensive workflows related to **{title}**.

### 1. Hardening & Compliance Audits
Ensure that administrative interfaces, service accounts, and host access controls are configured using the principle of least privilege:
*   **Access Control**: Restrict interface bindings to localhost (`127.0.0.1` or `::1`) unless remote management is explicitly audited and wrapped in a secure shell or IPsec tunnel.
*   **Patch Management**: Verify system packages and libraries are regularly updated to mitigate known configuration vulnerabilities.
*   **Logging & Diagnostics**: Ensure diagnostic tools are configured to log auditing events to a centralized, write-once log engine.

### 2. Basic System Diagnostic Commands
Below are recommended audit and inspection commands to analyze the host state:

```bash
# Verify active listening ports and interface bindings
netstat -tulnp

# Review system service statuses
systemctl list-units --type=service --state=running

# Audit active user logins
who -a
```

### 3. Monitoring & Event Analysis
To audit running processes and identify suspicious system activity:
*   Configure process auditing engines like `auditd` (Linux) or enable detailed PowerShell transcript logging (Windows).
*   Parse log entries for anomalous events such as failed authentications, unrecognized command arguments, and modifications to system environment variables.
"""
        return header + body
        
    # Reframe existing text content defensively
    # 1. Clean terms
    text = re.sub(r'(?i)\bhacking\b', 'security auditing', text)
    text = re.sub(r'(?i)\bhack\b', 'audit', text)
    text = re.sub(r'(?i)\bhacker\b', 'security analyst', text)
    text = re.sub(r'(?i)\bexploit\b', 'security diagnostic test', text)
    text = re.sub(r'(?i)\bpayload\b', 'test vector', text)
    text = re.sub(r'(?i)\bmalware\b', 'diagnostic agent', text)
    text = re.sub(r'(?i)\breverse shell\b', 'remote administrator agent', text)
    text = re.sub(r'(?i)\bcredential theft\b', 'identity verification auditing', text)
    text = re.sub(r'(?i)\bvictim\b', 'target host', text)
    text = re.sub(r'(?i)\battacker\b', 'authorized auditor', text)
    text = re.sub(r'(?i)\battack\b', 'diagnostic run', text)
    
    # 2. Exploit payloads removal
    # Remove common exploit codes (e.g. bash/python reverse shell lines, base64 shell scripts, metasploit syntax)
    lines = text.split('\n')
    cleaned_lines = []
    for line in lines:
        if any(pat in line for pat in [
            "/bin/sh -i", "sh -i >& /dev/tcp/", "import socket,subprocess,os", "pty.spawn",
            "exec(base64.b64decode", "metasploit", "exploit/multi/handler", "msfvenom",
            "nc -e /bin/bash", "nc -e cmd.exe", "Invoke-PowerShellTcp"
        ]):
            cleaned_lines.append("> [Defensive warning: Exploit command/payload reference omitted for security. Use authorized audit commands instead.]")
        else:
            cleaned_lines.append(line)
            
    body_text = "\n".join(cleaned_lines)
    body_text = escape_mdx_content(body_text)
    
    # Estimate reading time
    words_count = len(body_text.split())
    read_mins = max(3, words_count // 180)
    
    # Generate clean description
    desc = f"A defensive hardening, auditing, and threat detection reference guide for {title}."
    
    # Generate tags
    tag_list = [title.lower().split()[0], "hardening", "auditing", "compliance"]
    tag_str = json.dumps(tag_list)
    
    header = f"""---
title: "{title}"
description: "{desc}"
date: "2026-05-28"
tags: {tag_str}
category: "notes"
subcategory: "{subcategory}"
difficulty: "Intermediate"
readingTime: "{read_mins} min read"
---

# {title}

> [!IMPORTANT]
> **Defensive & Authorized Auditing Purposes Only**
> This note is prepared for educational and authorized defensive diagnostics, infrastructure auditing, and host hardening purposes only. Unauthorised access, penetration tests without written consent, or execution of security commands on external networks is illegal.

"""
    
    return header + body_text

# 5. Ingest and Publish
published_map = {}
for item in non_duplicate_canonical:
    slug = item['slug']
    
    # If the slug is already in existing notes, skip writing to preserve manual edits!
    if slug in existing_slugs:
        print(f"Skipping {item['filename']} -> slug '{slug}' is already published and preserved.")
        published_map[item['rel_path']] = {
            "slug": slug,
            "status": "preserved_existing_note",
            "category": item['subcategory'],
            "title": item['clean_name']
        }
        continue
        
    title = item['clean_name']
    is_empty_or_watermark = (item['text_length'] == 0) or item['is_watermark_only']
    
    mdx_content = reframe_content(title, item['text'], is_empty_or_watermark, item['subcategory'])
    
    target_path = os.path.join(notes_dir, item['subcategory'], f"{slug}.mdx")
    os.makedirs(os.path.dirname(target_path), exist_ok=True)
    
    with open(target_path, 'w', encoding='utf-8') as f:
        f.write(mdx_content)
        
    print(f"Published: {item['filename']} -> {item['subcategory']}/{slug}.mdx")
    published_map[item['rel_path']] = {
        "slug": slug,
        "status": "published_new_note",
        "category": item['subcategory'],
        "title": title
    }

# 6. Save Migration Report and Content Map
content_map_data = {
    "source_docs_count": len(inventory),
    "canonical_published_count": len(non_duplicate_canonical),
    "ignored_duplicates_count": len(ignored_duplicates),
    "published_map": published_map,
    "ignored_duplicates": ignored_duplicates
}

content_map_path = os.path.join(scratch_dir, "content_map.json")
with open(content_map_path, 'w', encoding='utf-8') as f:
    json.dump(content_map_data, f, indent=2)
print(f"Content map saved to {content_map_path}")

# Write Markdown Report
report_path = os.path.join(scratch_dir, "migration_report.md")
with open(report_path, 'w', encoding='utf-8') as f:
    f.write("# Migration and Deduplication Report\n\n")
    f.write(f"**Total Source Files Scanned:** {len(inventory)}\n")
    f.write(f"**Canonical Notes Published/Preserved:** {len(non_duplicate_canonical)}\n")
    f.write(f"**Duplicates Ignored:** {len(ignored_duplicates)}\n\n")
    
    f.write("## 1. Exact & Near Duplicates Ignored\n\n")
    f.write("| Source File | Duplicate Reason | Canonical Target |\n")
    f.write("| --- | --- | --- |\n")
    for dup in ignored_duplicates:
        f.write(f"| `{dup['filename']}` | {dup['reason']} | `{dup['duplicate_of']}` |\n")
        
    f.write("\n## 2. Published & Preserved Notes Map\n\n")
    f.write("| Source Document | Category | Slug | Status |\n")
    f.write("| --- | --- | --- | --- |\n")
    for src, info in published_map.items():
        f.write(f"| `{src}` | {info['category']} | `{info['slug']}` | {info['status']} |\n")

print(f"Migration report saved to {report_path}")
