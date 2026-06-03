"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Auxia/Mistral-grade scroll reveals with DIRECTIONAL VARIETY.
 * Long settles (1–1.2s) on power4.out / back.out — not all "rise up".
 *
 * Pick a variant per element with `data-reveal`:
 *   up | down | left | right | scale (grow + overshoot) | pop (shrink in) | blur
 * Apply to:
 *   .reveal              → single element (default: blur)
 *   [data-stagger]       → children in sequence (default: up); honors data-reveal
 *   [data-lines]         → line-mask reveal (.line-inner rises out of .line-mask)
 * Honors prefers-reduced-motion.
 */
const V = {
  up:    { from: { y: 44, autoAlpha: 0 },                                   dur: 1.0,  ease: "power4.out" },
  down:  { from: { y: -44, autoAlpha: 0 },                                  dur: 1.0,  ease: "power4.out" },
  left:  { from: { x: -90, autoAlpha: 0 },                                  dur: 1.1,  ease: "power4.out" },
  right: { from: { x: 90, autoAlpha: 0 },                                   dur: 1.1,  ease: "power4.out" },
  scale: { from: { scale: 0.55, autoAlpha: 0, transformOrigin: "50% 50%" }, dur: 1.05, ease: "back.out(1.7)" },
  pop:   { from: { scale: 1.2, autoAlpha: 0, transformOrigin: "50% 50%" },  dur: 0.9,  ease: "power3.out" },
  blur:  { from: { y: 32, autoAlpha: 0, filter: "blur(8px)" },              dur: 1.0,  ease: "power4.out" },
};

export default function useScrollReveal(rootRef) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-lines]").forEach((el) => {
        const inners = el.querySelectorAll(".line-inner");
        if (!inners.length) return;
        gsap.from(inners, {
          yPercent: 110,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray(".reveal").forEach((el) => {
        const v = V[el.dataset.reveal] || V.blur;
        gsap.from(el, {
          ...v.from,
          duration: v.dur,
          ease: v.ease,
          scrollTrigger: { trigger: el, start: "top 86%", once: true },
        });
      });

      gsap.utils.toArray("[data-stagger]").forEach((group) => {
        const v = V[group.dataset.reveal] || V.up;
        gsap.from(group.children, {
          ...v.from,
          duration: v.dur,
          ease: v.ease,
          stagger: 0.1,
          scrollTrigger: { trigger: group, start: "top 84%", once: true },
        });
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => ctx.revert();
  }, [rootRef]);
}
