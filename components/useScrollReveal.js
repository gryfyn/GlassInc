"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Premium scroll reveals (docs/design-system.md §7).
 *  - `.reveal` elements fade + rise 20px, once.
 *  - `[data-stagger]` containers reveal direct children in sequence.
 * Honors prefers-reduced-motion (content stays visible, no motion).
 */
export default function useScrollReveal(rootRef) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "power3.out", duration: 0.65 });

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 20,
          autoAlpha: 0,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray("[data-stagger]").forEach((group) => {
        gsap.from(group.children, {
          y: 20,
          autoAlpha: 0,
          duration: 0.55,
          stagger: 0.07,
          scrollTrigger: { trigger: group, start: "top 85%", once: true },
        });
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => ctx.revert();
  }, [rootRef]);
}
