# Phase 5 — Pillar Content Plan

## Authority Hubs

### 1. Linux Learning Hub — `/notes/linux`
- **Pillar:** `essential-linux-commands-for-cybersecurity-specialists`
- **Children:** `kali-linux-toolkit-guide`, `master-termux-handbook`
- **Path:** CLI → Kali toolkit → Mobile lab
- **Learning path:** `linux-foundation` in `src/lib/learning-paths.ts`

### 2. Nmap Learning Hub — `/notes/networking/nmap-scanning-guide`
- **Children:** firewall section in `networking-security-interview-qa-guide-osi-to-firewall`
- **Links:** Wireshark hub, Kali toolkit recon section
- **Learning path:** `offensive-foundation` step 1

### 3. Metasploit Learning Hub — `/notes/security/metasploit-for-beginners`
- **Links:** Kali toolkit exploitation section, `reverse-shells-cheatsheet`

### 4. Windows Security Hub — `/notes/windows`
- **Pillars:** `windows-defensive-cmd`, `powershell-auditing`, `windows-event-log-analysis-advanced-threat-detection-guide`
- **Path:** CMD audit → PowerShell hunting → Event log correlation

### 5. Bug Bounty Learning Hub — `/notes/security/bug-bounty-playbook`
- **Children:** `web-security-fundamentals`, `sqlmap-guide`, `nuclei-plugin-burp-suite-template-creation-guide`
- **Path:** Methodology → OWASP → Tooling

### 6. SQLMap Learning Hub — `/notes/web/sqlmap-guide`
- **Links:** `web-security-fundamentals` (SQLi), Kali toolkit web section

### 7. Blue Team Hub — `/notes/security/blue-team-complete-guide`
- **Children:** `wireshark`, `windows-event-log-analysis-advanced-threat-detection-guide`, `powershell-auditing`
- **Learning path:** `blue-team`

### 8. Web Security Hub — `/notes/web/web-security-fundamentals`
- **Children:** `sqlmap-guide`, `nessus-vulnerability-scanning`, `api-gateway-security-implementation-and-best-practices`, `nuclei-plugin-burp-suite-template-creation-guide`
- **Learning path:** `web-security`

## Pillar Footer Template

Each pillar MDX should end with:

```mdx
## Related Resources
- [Hub parent link]
- [Learning path next step]

## Continue Learning
→ Next: [href from learning-paths.ts]
```

## Implementation Status

| Hub | Pillar status | Footer added | Learning path linked |
| --- | ------------- | ------------ | -------------------- |
| Linux | REWRITE pending | No | Yes |
| Nmap | MDX fixed | No | Yes |
| Metasploit | REWRITE pending | No | Partial |
| Windows | KEEP pillars | No | Yes |
| Bug Bounty | REWRITE pending | No | Yes |
| SQLMap | REWRITE pending | No | Yes |
| Blue Team | KEEP (expand) | No | Yes |
| Web Security | KEEP (expand) | No | Yes |
