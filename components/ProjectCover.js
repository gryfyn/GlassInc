// On-palette project cover art — ink panel, faint grid, a single accent motif.
// No photography, no rainbow. Line art only (design-system.md §8 Pattern A/D).

const INK = "#0A0A0B";
const LINE = "#1E1E22";
const ACCENT = "#2563EB";
const ACCENT2 = "#60A5FA";

function Frame({ children }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-glass-ink" aria-hidden="true">
      <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
        <defs>
          <pattern id="pcgrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0 L0 0 L0 20" fill="none" stroke={LINE} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="240" fill={INK} />
        <rect width="400" height="240" fill="url(#pcgrid)" opacity="0.7" />
        {children}
        {/* corner ticks */}
        <g stroke={ACCENT2} strokeWidth="1.4" fill="none" opacity="0.8">
          <path d="M16 30 L16 16 L30 16" />
          <path d="M384 210 L384 224 L370 224" />
        </g>
      </svg>
    </div>
  );
}

function SoftwareMotif() {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="118" y="64" width="164" height="112" rx="4" stroke={LINE} strokeWidth="1.5" />
      <line x1="118" y1="88" x2="282" y2="88" stroke={LINE} strokeWidth="1.5" />
      <circle cx="130" cy="76" r="2.4" fill={ACCENT2} stroke="none" />
      <circle cx="140" cy="76" r="2.4" fill={LINE} stroke="none" />
      <rect x="130" y="102" width="64" height="8" rx="2" fill={ACCENT} opacity="0.85" stroke="none" />
      <rect x="130" y="120" width="120" height="6" rx="2" fill={LINE} stroke="none" />
      <rect x="130" y="134" width="96" height="6" rx="2" fill={LINE} stroke="none" />
      <rect x="130" y="148" width="110" height="6" rx="2" fill={LINE} stroke="none" />
    </g>
  );
}

function OperationsMotif() {
  const bars = [60, 92, 70, 120, 96, 140, 110];
  return (
    <g fill="none" strokeLinecap="round">
      <line x1="96" y1="176" x2="304" y2="176" stroke={LINE} strokeWidth="1.5" />
      {bars.map((h, i) => (
        <rect key={i} x={104 + i * 28} y={176 - h * 0.7} width="14" height={h * 0.7} rx="2"
          fill={i === 5 ? ACCENT : LINE} opacity={i === 5 ? 0.9 : 1} stroke="none" />
      ))}
      <polyline points="111,150 139,134 167,142 195,108 223,120 251,92 279,104"
        stroke={ACCENT2} strokeWidth="1.75" />
      {[[111,150],[195,108],[279,104]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="2.6" fill={ACCENT2} stroke="none" />
      ))}
    </g>
  );
}

function OpenMotif() {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="140" y="74" width="120" height="92" rx="6" stroke={LINE} strokeWidth="1.5" strokeDasharray="6 7" />
      <line x1="200" y1="104" x2="200" y2="136" stroke={ACCENT} strokeWidth="2" />
      <line x1="184" y1="120" x2="216" y2="120" stroke={ACCENT} strokeWidth="2" />
    </g>
  );
}

function AnalyticsMotif() {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <line x1="80" y1="184" x2="320" y2="184" stroke={LINE} strokeWidth="1.5" />
      <line x1="80" y1="56" x2="80" y2="184" stroke={LINE} strokeWidth="1.5" />
      <polyline points="92,150 132,118 172,134 212,86 252,104 292,58 314,78" stroke={ACCENT} strokeWidth="2" />
      <polyline points="92,168 132,156 172,162 212,134 252,146 292,120 314,132" stroke={LINE} strokeWidth="1.5" />
      {[[132,118],[212,86],[292,58]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.6" fill={ACCENT2} stroke="none" />
      ))}
    </g>
  );
}

function WebMotif() {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="96" y="56" width="208" height="128" rx="4" stroke={LINE} strokeWidth="1.5" />
      <line x1="96" y1="80" x2="304" y2="80" stroke={LINE} strokeWidth="1.5" />
      <circle cx="108" cy="68" r="2.4" fill={ACCENT2} stroke="none" />
      <circle cx="118" cy="68" r="2.4" fill={LINE} stroke="none" />
      <circle cx="128" cy="68" r="2.4" fill={LINE} stroke="none" />
      <rect x="150" y="63" width="142" height="10" rx="2" fill={LINE} stroke="none" />
      <rect x="112" y="96" width="84" height="44" rx="2" fill={ACCENT} opacity="0.85" stroke="none" />
      <rect x="208" y="96" width="84" height="8" rx="2" fill={LINE} stroke="none" />
      <rect x="208" y="112" width="64" height="8" rx="2" fill={LINE} stroke="none" />
      <rect x="208" y="128" width="74" height="8" rx="2" fill={LINE} stroke="none" />
      <rect x="112" y="152" width="180" height="6" rx="2" fill={LINE} stroke="none" />
      <rect x="112" y="166" width="120" height="6" rx="2" fill={LINE} stroke="none" />
    </g>
  );
}

function GalleryMotif() {
  const tiles = [[110, 64], [180, 64], [250, 64], [110, 126], [180, 126], [250, 126]];
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      {tiles.map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="58" height="50" rx="3"
          stroke={LINE} strokeWidth="1.5" fill={i === 3 ? ACCENT : "none"} fillOpacity={i === 3 ? 0.85 : 0} />
      ))}
      <circle cx="139" cy="83" r="5" stroke={ACCENT2} strokeWidth="1.4" />
      <path d="M120 108 L134 94 L150 108" stroke={ACCENT2} strokeWidth="1.4" />
    </g>
  );
}

function AiMotif() {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="112" y="56" width="96" height="128" rx="4" stroke={LINE} strokeWidth="1.5" />
      <rect x="126" y="74" width="64" height="8" rx="2" fill={LINE} stroke="none" />
      <rect x="126" y="92" width="48" height="6" rx="2" fill={ACCENT} opacity="0.85" stroke="none" />
      <rect x="126" y="106" width="68" height="6" rx="2" fill={LINE} stroke="none" />
      <rect x="126" y="120" width="56" height="6" rx="2" fill={LINE} stroke="none" />
      <g>
        <line x1="244" y1="96" x2="282" y2="78" stroke={LINE} strokeWidth="1.4" />
        <line x1="244" y1="96" x2="282" y2="120" stroke={LINE} strokeWidth="1.4" />
        <line x1="282" y1="78" x2="296" y2="150" stroke={LINE} strokeWidth="1.4" />
        <line x1="282" y1="120" x2="296" y2="150" stroke={LINE} strokeWidth="1.4" />
        <circle cx="244" cy="96" r="5" fill={ACCENT} stroke="none" />
        <circle cx="282" cy="78" r="4" fill={ACCENT2} stroke="none" />
        <circle cx="282" cy="120" r="4" fill={ACCENT2} stroke="none" />
        <circle cx="296" cy="150" r="4" fill={ACCENT2} stroke="none" />
      </g>
    </g>
  );
}

const MOTIFS = {
  software: SoftwareMotif,
  operations: OperationsMotif,
  open: OpenMotif,
  analytics: AnalyticsMotif,
  web: WebMotif,
  gallery: GalleryMotif,
  ai: AiMotif,
};

export default function ProjectCover({ variant = "software", className = "" }) {
  const Motif = MOTIFS[variant] || SoftwareMotif;
  return (
    <div className={`relative ${className}`}>
      <Frame>
        <Motif />
      </Frame>
    </div>
  );
}
