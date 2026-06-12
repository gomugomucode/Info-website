import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_URL } from "./site";

export interface OGPostParams {
  title: string;
  category: string;
  author: string;
  description?: string;
}

export async function generatePostOGImage(params: OGPostParams) {
  return ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          color: "white",
          fontFamily: '"Inter", sans-serif',
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "900px",
            borderLeft: "8px solid #06b6d4",
            padding: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            borderRadius: "12px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <div style={{ fontSize: "24px", fontWeight: "bold", color: "#06b6d4" }}>
              {SITE_NAME}
            </div>
            <div style={{ fontSize: "18px", opacity: 0.7 }}>
              {params.category}
            </div>
          </div>
          
          <div style={{ fontSize: "48px", fontWeight: "extrabold", lineHeight: "1.2", marginBottom: "20px", letterSpacing: "-0.02em" }}>
            {params.title}
          </div>
          
          {params.description && (
            <div style={{ fontSize: "22px", opacity: 0.8, lineHeight: "1.5", marginBottom: "30px", maxWidth: "800px" }}>
              {params.description}
            </div>
          )}
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ fontSize: "18px", fontWeight: "medium" }}>
              By {params.author}
            </div>
            <div style={{ fontSize: "18px", opacity: 0.6 }}>
              {SITE_URL}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
