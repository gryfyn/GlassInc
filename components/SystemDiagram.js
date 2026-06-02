// lucide line-art system flow for the healthcare project. On-brand, no client data. (spec §4.3)
import { ClipboardList, CalendarClock, Users, FileBarChart } from "lucide-react";

const NODES = [
  { Icon: ClipboardList, label: "Intake" },
  { Icon: CalendarClock, label: "Scheduling" },
  { Icon: Users, label: "Staff" },
  { Icon: FileBarChart, label: "Reporting" },
];

export default function SystemDiagram() {
  return (
    <div className="bg-glass-ink p-6 md:p-8" aria-hidden>
      <div className="flex items-center justify-between gap-2">
        {NODES.map(({ Icon, label }, i) => (
          <div key={label} className="flex items-center gap-2 flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <span
                className="flex items-center justify-center"
                style={{ width: 48, height: 48, border: "1px solid #1E1E22", background: "#161618" }}
              >
                <Icon strokeWidth={1.5} className="w-5 h-5 text-glass-accent-on-dark" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.08em] text-glass-text-muted">{label}</span>
            </div>
            {i < NODES.length - 1 && (
              <span className="flex-1 h-px relative" style={{ background: "#1E1E22" }}>
                <span
                  className="bp-travel absolute -top-0.5 left-0"
                  style={{ width: 6, height: 6, background: "#2563EB" }}
                />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
