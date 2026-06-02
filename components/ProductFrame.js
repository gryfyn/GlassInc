// Sharp-cornered app/browser window frame with an accent radial glow behind it.
// Brand rule: zero border-radius on the frame. Accent-only glow. (spec §4.1)
export default function ProductFrame({
  tone = "dark",
  glow = true,
  label = "",
  className = "",
  children,
}) {
  const onDark = tone === "dark";
  const surface = onDark ? "#0E0E11" : "#FFFFFF";
  const border = onDark ? "#1E1E22" : "#E4E4E8";
  const barText = onDark ? "#8A8F98" : "#8A8A96";
  return (
    <div className={`relative ${className}`}>
      {glow && <span aria-hidden className={`glow-accent ${onDark ? "glow-accent--on-dark" : ""}`} />}
      <div
        className="relative overflow-hidden"
        style={{ background: surface, border: `1px solid ${border}`, borderRadius: 0 }}
      >
        {/* top bar */}
        <div className="flex items-center gap-2 px-4 h-9" style={{ borderBottom: `1px solid ${border}` }}>
          <span style={{ width: 7, height: 7, background: "#2563EB", display: "inline-block" }} />
          <span className="text-[11px] tracking-[0.08em] uppercase" style={{ color: barText }}>
            {label || "Glass Inc"}
          </span>
        </div>
        {/* body */}
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}
