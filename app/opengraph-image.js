import { ImageResponse } from "next/og";
import { SITE } from "../lib/site";

// On-brand Open Graph image: brand name + tagline on the dark accent ink.
export const runtime = "edge";
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0A0A0B",
          color: "#F0F0F4",
          fontFamily: "sans-serif",
        }}
      >
        {/* Glass-pane mark — a tall narrow rectangle, the brand logo. */}
        <div style={{ display: "flex", alignItems: "center", gap: "28px", marginBottom: "48px" }}>
          <div
            style={{
              width: "44px",
              height: "72px",
              border: "5px solid #60A5FA",
            }}
          />
          <div style={{ fontSize: "44px", fontWeight: 800, letterSpacing: "-0.02em" }}>
            {SITE.name}
          </div>
        </div>

        <div
          style={{
            fontSize: "68px",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            maxWidth: "900px",
          }}
        >
          We build software that runs your business.
        </div>

        <div style={{ marginTop: "40px", fontSize: "30px", color: "#60A5FA", fontWeight: 600 }}>
          {SITE.tagline}
        </div>

        <div style={{ marginTop: "20px", fontSize: "24px", color: "#8A8F98" }}>
          East Africa · Gulf region · Remote worldwide
        </div>
      </div>
    ),
    { ...size }
  );
}
