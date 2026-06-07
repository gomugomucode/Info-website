# MDX Formatting Audit

**Generated:** automated scan of `34` MDX files

## Summary

| Metric | Count |
| --- | --- |
| Files scanned | 34 |
| Files with issues | 18 |
| Total issues | 122 |

### Issues by severity

| Severity | Count |
| --- | --- |
| high | 33 |
| low | 89 |

### Issues by type

| Problem type | Count |
| --- | --- |
| Missing blank lines around code fences | 54 |
| Missing blank lines around tables | 35 |
| Markdown tables that may not render correctly | 17 |
| Tables converted into paragraphs | 13 |
| Invalid MDX syntax | 3 |

## Files without issues

- `content/blog/hello-world.mdx`
- `content/notes/linux/essential-linux-commands-for-cybersecurity-specialists.mdx`
- `content/notes/linux/kali-linux-toolkit-guide.mdx`
- `content/notes/linux/master-termux-handbook.mdx`
- `content/notes/networking/wireshark.mdx`
- `content/notes/security/bug-bounty-playbook.mdx`
- `content/notes/security/metasploit-for-beginners.mdx`
- `content/notes/security/top-10-mobile-penetration-testing-tools-for-ethical-hackers.mdx`
- `content/notes/security/wireless-penetration-testing-bettercap.mdx`
- `content/notes/web/api-gateway-security-implementation-and-best-practices.mdx`
- `content/notes/web/nessus-vulnerability-scanning.mdx`
- `content/notes/web/nuclei-plugin-burp-suite-template-creation-guide.mdx`
- `content/notes/web/sqlmap-guide.mdx`
- `content/notes/web/web-security-fundamentals.mdx`
- `content/notes/windows/windows-defensive-cmd.mdx`
- `content/notes/windows/windows-event-log-analysis-advanced-threat-detection-guide.mdx`

## Detailed findings

### `audit/archived/cheatsheets/networking-cheatsheet.mdx`

**Issues:** 25 | **Corrected copy:** `audit/corrected-mdx/audit/archived/cheatsheets/networking-cheatsheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 7 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 12 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 12 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 18 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |
| 33 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 33 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 41 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |
| 54 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 54 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 61 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |
| 88 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 88 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 97 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |
| 154 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 154 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 155 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 156 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 157 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 158 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 161 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 163 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |
| 243 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 248 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 254 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 260 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |

### `audit/archived/cheatsheets/ai-langchain-cheatsheet.mdx`

**Issues:** 15 | **Corrected copy:** `audit/corrected-mdx/audit/archived/cheatsheets/ai-langchain-cheatsheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 13 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 13 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 16 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 22 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |
| 84 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 84 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 90 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |
| 118 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 124 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 135 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 147 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 154 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 347 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 347 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 354 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |

### `audit/archived/cheatsheets/web-development-cheatsheet.mdx`

**Issues:** 12 | **Corrected copy:** `audit/corrected-mdx/audit/archived/cheatsheets/web-development-cheatsheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 52 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 52 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 58 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |
| 174 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 174 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 180 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |
| 283 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 283 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 291 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |
| 292 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 292 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 300 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |

### `audit/archived/cheatsheets/deployment-cheatsheet.mdx`

**Issues:** 11 | **Corrected copy:** `audit/corrected-mdx/audit/archived/cheatsheets/deployment-cheatsheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 307 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 307 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 308 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 309 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 310 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 311 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 312 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 313 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |
| 348 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 373 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 424 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |

### `audit/archived/cheatsheets/react-cheatsheet.mdx`

**Issues:** 7 | **Corrected copy:** `audit/corrected-mdx/audit/archived/cheatsheets/react-cheatsheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 16 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 51 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 92 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 136 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 166 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 178 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 193 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |

### `audit/archived/cheatsheets/fastapi-cheatsheet.mdx`

**Issues:** 6 | **Corrected copy:** `audit/corrected-mdx/audit/archived/cheatsheets/fastapi-cheatsheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 7 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 26 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 50 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 66 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 82 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 128 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |

### `audit/archived/cheatsheets/git-cheat-sheet.mdx`

**Issues:** 6 | **Corrected copy:** `audit/corrected-mdx/audit/archived/cheatsheets/git-cheat-sheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 8 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 35 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 60 | high | Invalid MDX syntax | GitHub-style alert `> [!IMPORTANT]` is not valid MDX | Replace with `<Callout type="warning" title="...">` component |
| 80 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 92 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 101 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |

### `audit/archived/cheatsheets/linux-terminal-cheatsheet.mdx`

**Issues:** 6 | **Corrected copy:** `audit/corrected-mdx/audit/archived/cheatsheets/linux-terminal-cheatsheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 7 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 41 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 63 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 78 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 116 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 138 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |

### `audit/archived/cheatsheets/sql-cheatsheet.mdx`

**Issues:** 6 | **Corrected copy:** `audit/corrected-mdx/audit/archived/cheatsheets/sql-cheatsheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 7 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 26 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 74 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 95 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 95 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 101 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |

### `audit/archived/cheatsheets/docker-cheatsheet.mdx`

**Issues:** 5 | **Corrected copy:** `audit/corrected-mdx/audit/archived/cheatsheets/docker-cheatsheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 7 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 41 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 80 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 116 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 132 | high | Invalid MDX syntax | GitHub-style alert `> [!IMPORTANT]` is not valid MDX | Replace with `<Callout type="warning" title="...">` component |

### `audit/archived/cheatsheets/nextjs-cheatsheet.mdx`

**Issues:** 5 | **Corrected copy:** `audit/corrected-mdx/audit/archived/cheatsheets/nextjs-cheatsheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 7 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 29 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 64 | high | Invalid MDX syntax | GitHub-style alert `> [!IMPORTANT]` is not valid MDX | Replace with `<Callout type="warning" title="...">` component |
| 68 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 109 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |

### `audit/archived/cheatsheets/tailwindcss-cheatsheet.mdx`

**Issues:** 5 | **Corrected copy:** `audit/corrected-mdx/audit/archived/cheatsheets/tailwindcss-cheatsheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 7 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 34 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 55 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 55 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 62 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |

### `audit/archived/cheatsheets/langchain-ai-cheatsheet.mdx`

**Issues:** 4 | **Corrected copy:** `audit/corrected-mdx/audit/archived/cheatsheets/langchain-ai-cheatsheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 7 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 30 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 61 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 121 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |

### `content/notes/windows/powershell-auditing.mdx`

**Issues:** 3 | **Corrected copy:** `audit/corrected-mdx/content/notes/windows/powershell-auditing.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 10 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 10 | high | Markdown tables that may not render correctly | Inconsistent column counts within table: [3, 3, 4, 3, 3] | Align all rows to the same number of columns |
| 15 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |

### `content/notes/networking/networking-security-interview-qa-guide-osi-to-firewall.mdx`

**Issues:** 2 | **Corrected copy:** `audit/corrected-mdx/content/notes/networking/networking-security-interview-qa-guide-osi-to-firewall.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 608 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 609 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |

### `content/notes/security/blue-team-complete-guide.mdx`

**Issues:** 2 | **Corrected copy:** `audit/corrected-mdx/content/notes/security/blue-team-complete-guide.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 406 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 407 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |

### `content/notes/networking/nmap-scanning-guide.mdx`

**Issues:** 1 | **Corrected copy:** `audit/corrected-mdx/content/notes/networking/nmap-scanning-guide.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 18 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |

### `content/notes/security/reverse-shells-cheatsheet.mdx`

**Issues:** 1 | **Corrected copy:** `audit/corrected-mdx/content/notes/security/reverse-shells-cheatsheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 10 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |

## Corrected MDX output

Auto-corrected copies are in `audit/corrected-mdx/` (mirrors original paths).

**Automated fixes applied:**

- PDF page numbers removed
- `❖` / `▪` converted to headings and Markdown lists
- `> [!IMPORTANT]` alerts converted to `<Callout>` components
- Numbered questions with `?` converted to `### Q{n}:` headings
- Arrow-aligned table paragraphs converted to Markdown tables (where detected)
- Blank lines inserted around tables and code fences

**Manual review still required for:**

- OSI layer descriptions without list structure (`networking-security-interview-qa-guide-osi-to-firewall.mdx`)
- Large book-dump files (`blue-team-complete-guide.mdx`)
- Content flagged `REWRITE` in `audit/phase-7-rewrite-plan.md`

Re-run: `python audit/scripts/mdx_formatting_audit.py`

