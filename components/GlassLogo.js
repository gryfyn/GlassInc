// Glass Inc logo mark — a vertical rectangle, sharp corners, ZERO border-radius.
// A tall narrow "glass pane". One accent only. No gradient, no pulse.

const SIZES = {
  sm: { w: 16, h: 26, b: 1.5 },
  md: { w: 20, h: 34, b: 2 },
  lg: { w: 28, h: 46, b: 2.5 },
};

export default function GlassLogo({ size = "md", onDark = false, className = "" }) {
  const { w, h, b } = SIZES[size] || SIZES.md;
  const color = onDark ? "#60A5FA" : "#2563EB";
  return (
    <span
      aria-hidden="true"
      className={className}
      style={{
        position: "relative",
        display: "inline-block",
        width: w,
        height: h,
        border: `${b}px solid ${color}`,
        borderRadius: 0,
        flex: "none",
      }}
    >
      {/* faint horizontal mullion */}
      <span
        style={{
          position: "absolute",
          top: "32%",
          left: 0,
          right: 0,
          height: b,
          backgroundColor: color,
          opacity: 0.35,
        }}
      />
    </span>
  );
}
