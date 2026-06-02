import GlassLogo from "./GlassLogo";

// Logo + wordmark lockup. Single seam where a real logo image would later drop in. (spec §8)
export default function Brand({ onDark = false, size = "sm", sublabel = "Software Studio" }) {
  const textColor = onDark ? "text-glass-text-dark" : "text-glass-text-1";
  const subColor = onDark ? "text-glass-text-muted" : "text-glass-text-3";
  return (
    <span className="flex items-center gap-3">
      <GlassLogo size={size} onDark={onDark} />
      <span className="flex flex-col leading-none">
        <span className={`text-[17px] font-extrabold tracking-[-0.02em] ${textColor}`}>Glass Inc</span>
        {sublabel && <span className={`t-eyebrow mt-1 ${subColor}`}>{sublabel}</span>}
      </span>
    </span>
  );
}
