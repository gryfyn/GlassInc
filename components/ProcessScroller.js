"use client";
// Auxia-style "how it works": a pinned two-column scroller. As you scroll the
// section, the active step advances and the right-hand visual cross-fades with
// a blur lift. Only renders the tall pinned layout when it can actually animate
// (desktop + motion); otherwise a clean stacked layout — no empty runway.
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessagesSquare, Hammer, PackageCheck } from "lucide-react";
import ProjectCover from "./ProjectCover";
import GrainOverlay from "./GrainOverlay";

const STEPS = [
  { Icon: MessagesSquare, name: "Talk", cover: "ai", desc: "A free, honest call about your biggest operational problem. No pitch, no jargon — just whether we're the right fit." },
  { Icon: Hammer, name: "Build", cover: "software", desc: "You work directly with the person building it. Weekly progress, clear documentation, no account managers in between." },
  { Icon: PackageCheck, name: "Deliver", cover: "analytics", desc: "Software your team actually uses — proper handover, built for adoption, measured by whether it's still running six months on." },
];

function Visual({ cover, label }) {
  return (
    <div className="relative h-full border border-glass-graphite-border bg-glass-ink overflow-hidden">
      <ProjectCover variant={cover} className="h-full" />
      <span className="glow-accent glow-accent--on-dark" aria-hidden />
      <span className="absolute top-3 left-3 t-eyebrow text-glass-accent-on-dark">{label}</span>
    </div>
  );
}

export default function ProcessScroller() {
  const section = useRef(null);
  const fill = useRef(null);
  const [active, setActive] = useState(0);
  const [enhanced, setEnhanced] = useState(false);

  useEffect(() => {
    const ok =
      window.matchMedia("(min-width: 1024px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (ok) setEnhanced(true);
  }, []);

  useEffect(() => {
    if (!enhanced || !section.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const st = ScrollTrigger.create({
      trigger: section.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const p = self.progress;
        setActive(Math.min(STEPS.length - 1, Math.floor(p * STEPS.length * 0.999)));
        if (fill.current) fill.current.style.transform = `scaleY(${p})`;
      },
    });
    ScrollTrigger.refresh();
    return () => st.kill();
  }, [enhanced]);

  /* ---------- Stacked fallback (mobile / reduced-motion / pre-hydration) ---------- */
  if (!enhanced) {
    return (
      <section className="relative bg-glass-graphite text-glass-text-dark">
        <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />
        <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
          <span className="t-eyebrow text-glass-accent-on-dark">04 — How it works</span>
          <h2 className="t-h2 mt-4 mb-12 text-glass-cream-text">Three steps. No mystery.</h2>
          <div data-stagger className="grid md:grid-cols-3 gap-8">
            {STEPS.map((s, i) => (
              <div key={s.name}>
                <div className="relative aspect-[16/10] mb-5">
                  <Visual cover={s.cover} label={`0${i + 1} · ${s.name}`} />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="icon-tile icon-tile-dark"><s.Icon strokeWidth={1.5} className="w-5 h-5" /></span>
                  <h3 className="text-[18px] font-semibold text-glass-cream-text">{s.name}</h3>
                </div>
                <p className="text-[14px] leading-relaxed text-glass-text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ---------- Enhanced desktop: pinned scroller ---------- */
  return (
    <section ref={section} className="relative bg-glass-graphite text-glass-text-dark h-[280vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />
        <GrainOverlay />
        <div className="relative mx-auto max-w-6xl w-full px-6 md:px-8 lg:px-12 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="t-eyebrow text-glass-accent-on-dark">04 — How it works</span>
            <h2 className="t-h2 mt-4 mb-10 text-glass-cream-text">Three steps. No mystery.</h2>
            <div className="flex gap-6">
              <div className="relative w-px self-stretch bg-glass-graphite-border">
                <span ref={fill} className="absolute top-0 left-0 w-px h-full bg-glass-accent origin-top" style={{ transform: "scaleY(0)" }} />
              </div>
              <ul className="space-y-8 flex-1">
                {STEPS.map((s, i) => (
                  <li
                    key={s.name}
                    style={{
                      opacity: active === i ? 1 : 0.3,
                      transform: active === i ? "translateY(0)" : "translateY(6px)",
                      transition: "opacity .5s ease, transform .5s cubic-bezier(.16,1,.3,1)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="icon-tile icon-tile-dark"><s.Icon strokeWidth={1.5} className="w-5 h-5" /></span>
                      <span className="text-[13px] font-bold text-glass-text-muted">0{i + 1}</span>
                      <h3 className="text-[20px] font-semibold tracking-[-0.01em] text-glass-cream-text">{s.name}</h3>
                    </div>
                    <p className="text-[15px] leading-relaxed text-glass-text-muted max-w-md">{s.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative aspect-[16/10]">
            {STEPS.map((s, i) => (
              <div
                key={s.name}
                className="absolute inset-0"
                style={{
                  opacity: active === i ? 1 : 0,
                  filter: active === i ? "blur(0px)" : "blur(8px)",
                  transform: active === i ? "translateY(0)" : "translateY(24px)",
                  transition: "opacity .7s ease, filter .7s ease, transform .7s cubic-bezier(.16,1,.3,1)",
                }}
              >
                <Visual cover={s.cover} label={s.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
