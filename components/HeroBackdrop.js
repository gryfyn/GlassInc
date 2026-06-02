"use client";
// HeroBackdrop — full-bleed cinematic hero background.
// Layers (back → front):
//   1. Canvas node-network (drifting "tech / data" mesh)
//   2. CSS aurora glows
//   3. Floating device tiles playing real footage (desktop + phone)
//   4. Left→right darkening gradient so headline copy stays readable
// Footage: Pexels (free, commercial use, no attribution required) —
//   desktop = pexels.com/video/11274330, phone = pexels.com/video/8946986.
// Reduced-motion safe; mesh pauses offscreen.
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

/* ----------------------------- Node network ----------------------------- */
function useNodeNetwork(canvasRef, hostRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;
    if (!canvas || !host) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    let raf = 0;
    let w = 0, h = 0, dpr = 1;
    let nodes = [];
    let running = true;

    const COUNT = 52;
    const LINK = 130;

    function seed() {
      nodes = Array.from({ length: COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.6 + 0.6,
      }));
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = host.clientWidth;
      h = host.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!nodes.length) seed();
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK) {
            const o = (1 - dist / LINK) * 0.5;
            ctx.strokeStyle = `rgba(96,163,255,${o})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = "rgba(160,200,255,0.85)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function step() {
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      draw();
      if (running) raf = requestAnimationFrame(step);
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    if (reduce) {
      draw(); // single static frame
      return () => { ro.disconnect(); };
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !running) { running = true; raf = requestAnimationFrame(step); }
        else if (!e.isIntersecting && running) { running = false; cancelAnimationFrame(raf); }
      },
      { threshold: 0.05 }
    );
    io.observe(host);
    raf = requestAnimationFrame(step);
    return () => { running = false; cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); };
  }, [canvasRef, hostRef]);
}

/* ----- accent wash keeps footage on single-brand-accent and dark ----- */
function FootageWash() {
  return (
    <>
      <span aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.42), rgba(10,13,20,0.22))", mixBlendMode: "color" }} />
      <span aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(6,8,15,0.05), transparent 45%, rgba(6,8,15,0.55))" }} />
    </>
  );
}

/* --------------------------- Device tiles ------------------------------- */
function DesktopTile() {
  return (
    <div className="hb-desktop relative w-[360px] overflow-hidden" style={{ background: "#0A0D14", border: "1px solid rgba(96,163,255,0.22)", boxShadow: "0 34px 90px -22px rgba(0,0,0,0.78)" }}>
      <div className="flex items-center gap-1.5 px-3 h-8" style={{ borderBottom: "1px solid rgba(96,163,255,0.14)" }}>
        <span className="w-2 h-2 rounded-full" style={{ background: "#2A3550" }} />
        <span className="w-2 h-2 rounded-full" style={{ background: "#2A3550" }} />
        <span className="w-2 h-2 rounded-full" style={{ background: "#60A5FA", opacity: 0.7 }} />
        <span className="ml-3 text-[9px] uppercase tracking-[0.14em]" style={{ color: "#5C6680" }}>workspace · live</span>
      </div>
      <div className="relative aspect-video overflow-hidden">
        <video src="/assets/video/hero-desktop.mp4" autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover" />
        <FootageWash />
      </div>
    </div>
  );
}

function PhoneTile() {
  return (
    <div className="hb-phone relative w-[152px] overflow-hidden rounded-[1.7rem]" style={{ border: "5px solid #0B0F1A", boxShadow: "0 26px 64px -18px rgba(0,0,0,0.82)", outline: "1px solid rgba(96,163,255,0.30)" }}>
      <div className="relative overflow-hidden rounded-[1.3rem]" style={{ aspectRatio: "506 / 960" }}>
        <video src="/assets/video/hero-phone.mp4" autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover" />
        <FootageWash />
      </div>
    </div>
  );
}

/* ------------------------------ Backdrop -------------------------------- */
export default function HeroBackdrop() {
  const host = useRef(null);
  const canvas = useRef(null);
  const root = useRef(null);
  useNodeNetwork(canvas, host);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      // gentle float drift on devices
      gsap.to(".hb-desktop", { y: -14, duration: 4.5, ease: "sine.inOut", yoyo: true, repeat: -1 });
      gsap.to(".hb-phone", { y: 12, duration: 3.8, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.4 });
      // entrance
      gsap.from(".hb-desktop", { autoAlpha: 0, x: 40, y: 30, duration: 1.1, ease: "power3.out", delay: 0.3 });
      gsap.from(".hb-phone", { autoAlpha: 0, x: 30, y: 40, duration: 1.1, ease: "power3.out", delay: 0.55 });
      // aurora drift
      gsap.to(".hb-aurora-1", { x: 40, y: 30, duration: 9, ease: "sine.inOut", yoyo: true, repeat: -1 });
      gsap.to(".hb-aurora-2", { x: -30, y: -20, duration: 11, ease: "sine.inOut", yoyo: true, repeat: -1 });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} aria-hidden className="absolute inset-0 overflow-hidden">
      {/* base */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(130% 110% at 75% 10%, #131B2E 0%, #0A0D14 55%, #06080F 100%)" }} />
      {/* aurora */}
      <span className="hb-aurora-1 absolute -top-24 right-[8%] w-[480px] h-[480px] rounded-full" style={{ background: "radial-gradient(circle, rgba(96,163,255,0.22), transparent 65%)", filter: "blur(20px)" }} />
      <span className="hb-aurora-2 absolute bottom-[-10%] left-[20%] w-[420px] h-[420px] rounded-full" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.18), transparent 65%)", filter: "blur(24px)" }} />
      {/* node network */}
      <div ref={host} className="absolute inset-0">
        <canvas ref={canvas} className="absolute inset-0" />
      </div>
      {/* device tiles (right, large screens only) */}
      <div className="absolute inset-y-0 right-0 hidden lg:block w-[60%] pointer-events-none">
        <div className="absolute right-[6%] top-1/2 -translate-y-[60%]"><DesktopTile /></div>
        <div className="absolute right-[42%] top-1/2 -translate-y-[2%]"><PhoneTile /></div>
      </div>
      {/* readability gradient + vignette */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, #0A0D14 0%, rgba(10,13,20,0.92) 30%, rgba(10,13,20,0.55) 55%, rgba(10,13,20,0.25) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(6,8,15,0.5), transparent 25%, transparent 70%, rgba(6,8,15,0.6))" }} />
    </div>
  );
}
