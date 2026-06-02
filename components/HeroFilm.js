"use client";
// HeroFilm — a silent, looping ~26s motion piece that lives inside the hero
// ProductFrame (replaces the static DashboardMock). Pure CSS + GSAP, no audio,
// no external service. Single accent on dark, locked brand tokens only.
//
// Loop (4 beats): glass logo reveal → capability montage → real work → sign-off.
// Honors prefers-reduced-motion (static sign-off frame) and pauses offscreen.
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import GlassLogo from "./GlassLogo";

const ACCENT = "#60A5FA";
const TEXT = "#E8F0FF";
const MUTED = "#8A8F98";

const CAPABILITIES = ["Custom Software", "Automation", "Data Analytics", "Design"];
const TAGLINE = ["Clarity.", "Precision.", "Innovation."];
const WORK = [
  { tag: "Healthcare · 2024–2025", title: "Resident Treatment Facility Management System" },
  { tag: "SME · 2024", title: "Business Operations Management System" },
];

export default function HeroFilm() {
  const root = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context((self) => {
      const q = self.selector;
      const scenes = q(".hf-scene");
      // Start every scene hidden; the timeline reveals them in turn.
      gsap.set(scenes, { autoAlpha: 0 });

      if (reduce) {
        // No motion: show the sign-off frame as a static poster.
        gsap.set(q("[data-scene='signoff']"), { autoAlpha: 1 });
        gsap.set(q("[data-scene='signoff'] .hf-anim"), { autoAlpha: 1, y: 0, scale: 1 });
        return;
      }

      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power3.out" },
      });
      tlRef.current = tl;

      // ---- Scene 1 · Glass logo reveal (0 – 6s) ----
      tl.set("[data-scene='reveal']", { autoAlpha: 1 }, 0)
        .fromTo(".hf-pane", { autoAlpha: 0, scale: 1.08 }, { autoAlpha: 1, scale: 1, duration: 1.2 }, 0.2)
        .fromTo(".hf-shimmer", { xPercent: -160 }, { xPercent: 260, duration: 1.6, ease: "power2.inOut" }, 0.4)
        .fromTo(".hf-logo", { autoAlpha: 0, scale: 0.7, filter: "blur(8px)" }, { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 1 }, 1.1)
        .fromTo(".hf-reveal-tag .hf-word", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.18 }, 1.9)
        .to("[data-scene='reveal']", { autoAlpha: 0, duration: 0.8 }, 5.4);

      // ---- Scene 2 · Capability montage (6 – 13s) ----
      tl.set("[data-scene='montage']", { autoAlpha: 1 }, 6)
        .fromTo("[data-scene='montage'] .hf-eyebrow", { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 6.1);
      CAPABILITIES.forEach((_, i) => {
        const at = 6.5 + i * 1.45;
        tl.fromTo(
          `.hf-cap-${i}`,
          { autoAlpha: 0, y: 26, filter: "blur(6px)" },
          { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.55 },
          at
        ).to(`.hf-cap-${i}`, { autoAlpha: 0, y: -26, filter: "blur(6px)", duration: 0.45 }, at + 0.95);
      });
      tl.to("[data-scene='montage']", { autoAlpha: 0, duration: 0.7 }, 12.4);

      // ---- Scene 3 · Real work (13 – 21s) ----
      tl.set("[data-scene='work']", { autoAlpha: 1 }, 13)
        .fromTo("[data-scene='work'] .hf-eyebrow", { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 13.1)
        .fromTo("[data-scene='work'] .hf-card", { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.35 }, 13.5)
        .fromTo("[data-scene='work'] .hf-card-sweep", { xPercent: -160 }, { xPercent: 260, duration: 1.4, ease: "power2.inOut", stagger: 0.35 }, 13.8)
        .to("[data-scene='work']", { autoAlpha: 0, duration: 0.8 }, 20.2);

      // ---- Scene 4 · Sign-off (21 – 26s) ----
      tl.set("[data-scene='signoff']", { autoAlpha: 1 }, 21)
        .fromTo("[data-scene='signoff'] .hf-mark", { autoAlpha: 0, scale: 0.8 }, { autoAlpha: 1, scale: 1, duration: 0.9 }, 21.1)
        .fromTo("[data-scene='signoff'] .hf-wordmark", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.7 }, 21.4)
        .fromTo("[data-scene='signoff'] .hf-signoff-tag", { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.7 }, 21.9)
        .fromTo("[data-scene='signoff'] .hf-glow", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.2, yoyo: true, repeat: 1 }, 22.0)
        .to("[data-scene='signoff']", { autoAlpha: 0, duration: 1.0 }, 25.0);
    }, root);

    // Pause the loop while offscreen (perf / battery).
    let io;
    if (!reduce && tlRef.current) {
      io = new IntersectionObserver(
        ([entry]) => {
          if (!tlRef.current) return;
          entry.isIntersecting ? tlRef.current.play() : tlRef.current.pause();
        },
        { threshold: 0.15 }
      );
      if (root.current) io.observe(root.current);
    }

    return () => {
      io && io.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={root}
      aria-hidden
      className="relative aspect-[16/10] w-full overflow-hidden"
      style={{ background: "radial-gradient(120% 100% at 70% 0%, #131A2A 0%, #0A0D14 55%, #070910 100%)" }}
    >
      {/* faint grid texture */}
      <span
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(96,163,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(96,163,255,0.12) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* ---- Scene 1 · reveal ---- */}
      <div data-scene="reveal" className="hf-scene absolute inset-0 flex flex-col items-center justify-center gap-5">
        <div className="hf-pane relative flex items-center justify-center" style={{ width: 132, height: 132, border: `1px solid rgba(96,163,255,0.35)`, background: "rgba(96,163,255,0.04)" }}>
          <span className="hf-shimmer absolute inset-y-0 w-1/2" style={{ background: "linear-gradient(90deg, transparent, rgba(232,240,255,0.45), transparent)" }} />
          <span className="hf-logo"><GlassLogo size="lg" onDark /></span>
        </div>
        <div className="hf-reveal-tag flex flex-wrap items-center justify-center gap-x-2 text-[15px] font-medium tracking-tight" style={{ color: TEXT }}>
          {TAGLINE.map((w) => (
            <span key={w} className="hf-word">{w}</span>
          ))}
        </div>
      </div>

      {/* ---- Scene 2 · montage ---- */}
      <div data-scene="montage" className="hf-scene absolute inset-0 flex flex-col items-center justify-center">
        <span className="hf-eyebrow mb-4 text-[11px] uppercase tracking-[0.18em]" style={{ color: ACCENT }}>What we do</span>
        <div className="relative h-12 w-full">
          {CAPABILITIES.map((c, i) => (
            <span
              key={c}
              className={`hf-cap-${i} absolute inset-0 flex items-center justify-center text-[30px] font-semibold tracking-tight`}
              style={{ color: TEXT }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* ---- Scene 3 · work ---- */}
      <div data-scene="work" className="hf-scene absolute inset-0 flex flex-col items-center justify-center gap-3.5 px-8">
        <span className="hf-eyebrow self-start text-[11px] uppercase tracking-[0.18em]" style={{ color: ACCENT }}>Selected work</span>
        {WORK.map((p) => (
          <div
            key={p.title}
            className="hf-card relative w-full overflow-hidden px-4 py-3.5"
            style={{ border: `1px solid rgba(96,163,255,0.22)`, background: "rgba(255,255,255,0.02)" }}
          >
            <span className="hf-card-sweep absolute inset-y-0 w-1/3" style={{ background: "linear-gradient(90deg, transparent, rgba(96,163,255,0.18), transparent)" }} />
            <div className="relative">
              <div className="text-[10px] uppercase tracking-[0.12em]" style={{ color: MUTED }}>{p.tag}</div>
              <div className="mt-1 text-[15px] font-semibold leading-snug tracking-tight" style={{ color: TEXT }}>{p.title}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ---- Scene 4 · sign-off ---- */}
      <div data-scene="signoff" className="hf-scene absolute inset-0 flex flex-col items-center justify-center gap-4">
        <span className="hf-glow absolute" style={{ width: 220, height: 220, background: "radial-gradient(circle, rgba(96,163,255,0.30), transparent 70%)" }} />
        <div className="hf-anim hf-mark relative"><GlassLogo size="lg" onDark /></div>
        <div className="hf-anim hf-wordmark relative text-[26px] font-semibold tracking-tight" style={{ color: TEXT }}>Glass Inc</div>
        <div className="hf-anim hf-signoff-tag relative text-[13px] tracking-tight" style={{ color: MUTED }}>Clarity. Precision. Innovation.</div>
      </div>
    </div>
  );
}
