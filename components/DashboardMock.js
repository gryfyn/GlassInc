// Fictional-but-realistic dashboard built from design tokens only.
// One accent (#2563EB) + grays. No real/client data. (spec §4.2)
const ACCENT = "#2563EB";
const LINE = "#1E1E22";
const MUTED = "#8A8F98";

function Bars() {
  const bars = [42, 64, 50, 80, 58, 90, 72];
  return (
    <svg viewBox="0 0 280 120" className="w-full" aria-hidden>
      {[30, 60, 90].map((y) => (
        <line key={y} x1="0" y1={y} x2="280" y2={y} stroke={LINE} strokeWidth="1" />
      ))}
      {bars.map((h, i) => (
        <rect key={i} x={8 + i * 39} y={110 - h} width="22" height={h} fill={i === 5 ? ACCENT : "#2A2A30"} />
      ))}
      <polyline
        points="19,70 58,46 97,58 136,28 175,44 214,22 253,38"
        fill="none"
        stroke="#60A5FA"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StatCard({ k, v }) {
  return (
    <div className="px-3 py-2.5" style={{ border: `1px solid ${LINE}` }}>
      <div className="text-[10px] uppercase tracking-[0.08em]" style={{ color: MUTED }}>{k}</div>
      <div className="text-[18px] font-bold text-glass-text-dark mt-0.5">{v}</div>
    </div>
  );
}

export default function DashboardMock({ variant = "operations" }) {
  const stats =
    variant === "analytics"
      ? [["Sessions", "12.4k"], ["Conversion", "3.2%"], ["Avg. time", "4m 12s"]]
      : [["Active", "128"], ["Pending", "17"], ["Resolved", "94%"]];
  const rows =
    variant === "analytics"
      ? ["Acquisition", "Engagement", "Retention", "Revenue"]
      : ["Intake queue", "Daily schedule", "Staff roster", "Reports"];
  return (
    <div className="grid grid-cols-[64px_1fr] bg-glass-ink text-glass-text-dark" aria-hidden>
      {/* nav rail */}
      <div className="flex flex-col gap-3 p-3" style={{ borderRight: `1px solid ${LINE}` }}>
        <span style={{ width: 16, height: 26, border: `2px solid ${ACCENT}`, borderRadius: 0 }} />
        {[0, 1, 2, 3].map((i) => (
          <span key={i} style={{ height: 6, background: i === 0 ? ACCENT : "#2A2A30" }} />
        ))}
      </div>
      {/* main */}
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {stats.map(([k, v]) => (
            <StatCard key={k} k={k} v={v} />
          ))}
        </div>
        <div className="px-3 py-3" style={{ border: `1px solid ${LINE}` }}>
          <Bars />
        </div>
        <div style={{ border: `1px solid ${LINE}` }}>
          {rows.map((r, i) => (
            <div
              key={r}
              className="flex items-center justify-between px-3 py-2 text-[12px]"
              style={{ borderTop: i ? `1px solid ${LINE}` : "none", color: MUTED }}
            >
              <span>{r}</span>
              <span style={{ width: 40, height: 6, background: i === 1 ? ACCENT : "#2A2A30" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
