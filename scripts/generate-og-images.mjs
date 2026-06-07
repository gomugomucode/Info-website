import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";

const SITE_NAME = "Cybersecurity Learning Hub";

const hubs = [
  {
    id: "default",
    outDir: "public",
    filename: "og.jpg",
    title: SITE_NAME,
    subtitle: "Linux · Networking · Web · Windows · Blue Team",
    accent: "#06b6d4",
  },
  {
    id: "linux",
    outDir: "public/og",
    filename: "linux.jpg",
    title: "Linux CLI & Systems",
    subtitle: "Hardening, auditing & Kali toolkit",
    accent: "#10b981",
  },
  {
    id: "networking",
    outDir: "public/og",
    filename: "networking.jpg",
    title: "Network & Sniffing",
    subtitle: "Wireshark, Nmap & protocol forensics",
    accent: "#6366f1",
  },
  {
    id: "security",
    outDir: "public/og",
    filename: "security.jpg",
    title: "Threat Detection & SecOps",
    subtitle: "Blue team, SOC & defensive tooling",
    accent: "#ef4444",
  },
  {
    id: "web",
    outDir: "public/og",
    filename: "web.jpg",
    title: "Web Security & Auditing",
    subtitle: "OWASP, scanning & API defense",
    accent: "#06b6d4",
  },
  {
    id: "windows",
    outDir: "public/og",
    filename: "windows.jpg",
    title: "Windows Auditing",
    subtitle: "Event logs & PowerShell hunting",
    accent: "#3b82f6",
  },
];

function hubImage(hub) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background: "linear-gradient(135deg, #0a0a0a 0%, #171717 55%, #0f172a 100%)",
        color: "#fafafa",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontSize: "22px",
          fontWeight: 600,
          color: hub.accent,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "999px",
            background: hub.accent,
          }}
        />
        {SITE_NAME}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: "900px",
          }}
        >
          {hub.title}
        </div>
        <div
          style={{
            fontSize: "28px",
            lineHeight: 1.4,
            color: "#a3a3a3",
            maxWidth: "820px",
          }}
        >
          {hub.subtitle}
        </div>
      </div>
      <div style={{ fontSize: "20px", color: "#737373" }}>info.anupambaral.com.np</div>
    </div>
  );
}

async function main() {
  for (const hub of hubs) {
    const dir = join(process.cwd(), hub.outDir);
    mkdirSync(dir, { recursive: true });

    const image = new ImageResponse(hubImage(hub), {
      width: 1200,
      height: 630,
    });

    const buffer = Buffer.from(await image.arrayBuffer());
    writeFileSync(join(dir, hub.filename), buffer);
    console.log(`Wrote ${hub.outDir}/${hub.filename}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
