"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Auxia-grade scroll reveals. The premium feel comes from LONG settles
 * (duration 1–1.2s) on `power4.out` plus a blur-lift — not quick fades.
 *
 *  - `.reveal`              → single element: rise 32px + blur(6px) → settle
 *  - `[data-stagger] > *`   → children settle in sequence (stagger 0.12)
 *  - `[data-lines]`         → line-mask reveal: each `.line-inner` rises from
 *                             behind its `.line-mask` (yPercent 110 → 0)
 * Honors prefers-reduced-motion (content stays visible, no motion).
 */
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
        gsap.from(el, {
          y: 32,
          autoAlpha: 0,
          filter: "blur(6px)",
          duration: 1,
          ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });

      gsap.utils.toArray("[data-stagger]").forEach((group) => {
        gsap.from(group.children, {
          y: 32,
          autoAlpha: 0,
          filter: "blur(6px)",
          duration: 1,
          ease: "power4.out",
          stagger: 0.12,
          scrollTrigger: { trigger: group, start: "top 82%", once: true },
        });
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => ctx.revert();
  }, [rootRef]);
}
