// Subtle SVG grain for dark sections. ~3.5% opacity, overlay blend. (spec §4.5)
export default function GrainOverlay({ className = "" }) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity: 0.035, mixBlendMode: "overlay" }}
    >
      <svg className="w-full h-full">
        <filter id="grain-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-noise)" />
      </svg>
    </div>
  );
}
