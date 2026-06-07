import { NOTE_SUBCATEGORIES, type NoteSubcategory, absoluteUrl } from "./site";

/** Canonical pillar slugs per topic hub — order determines display priority. */
export const HUB_PILLARS: Record<NoteSubcategory, string[]> = {
  linux: [
    "essential-linux-commands-for-cybersecurity-specialists",
    "kali-linux-toolkit-guide",
  ],
  networking: ["wireshark", "nmap-scanning-guide"],
  security: ["blue-team-complete-guide", "bug-bounty-playbook"],
  web: ["web-security-fundamentals", "sqlmap-guide"],
  windows: [
    "windows-event-log-analysis-advanced-threat-detection-guide",
    "powershell-auditing",
  ],
};

export function isNoteSubcategory(value: string): value is NoteSubcategory {
  return (NOTE_SUBCATEGORIES as readonly string[]).includes(value);
}

export function getHubOgImageUrl(subcategory: string): string {
  const normalized = subcategory.toLowerCase();
  if (isNoteSubcategory(normalized)) {
    return absoluteUrl(`/og/${normalized}.jpg`);
  }
  return absoluteUrl("/og.jpg");
}
