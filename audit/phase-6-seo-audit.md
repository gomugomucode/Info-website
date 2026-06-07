# Phase 6 — SEO Audit

## Issues & Fixes

| Issue | Affected | Fix | Status |
| ----- | -------- | --- | ------ |
| Thin content (<300 words) | 5 files | DELETE or expand to 800+ | In progress |
| Duplicate on-disk slugs with redirects | 20 note files | Delete after redirect verify | Executing |
| Generic descriptions | ~0 notes | Unique 120–160 char descriptions on rewrite | Pending |
| Missing internal links | Most PDF extracts | Hub footer + 3–5 contextual links | Pending |
| Missing Article/Breadcrumb schema | All notes | JSON-LD in notes page.tsx | Done |
| Weak titles (OCR slugs) | 100-linux-command, a-z-kali | Rename during REWRITE | Pending |
| Sitemap cheatsheet mismatch | 13 cheatsheets at wrong prefix | Removed from sitemap.ts | Done |
| Stale indexable URLs | MERGE/DELETE files still built | Delete MDX after redirects | Executing |

## Thin Content Files

- `hello-world` (174 words) — REWRITE
- `reverse-shells-cheatsheet` (169 words) — KEEP
- `nessus-vulnerability-scanning` (216 words) — KEEP
- `web-security-fundamentals` (202 words) — KEEP
- `powershell-auditing` (250 words) — KEEP