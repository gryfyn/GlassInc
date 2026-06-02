"use client";
import { useEffect, useRef } from "react";

// Subtle magnetic pull for ONE CTA. Desktop pointer:fine only, reduced-motion safe. (spec §4.4)
export default function useMagnetic(strength = 0.2, max = 8) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      const cx = Math.max(-max, Math.min(max, x));
      const cy = Math.max(-max, Math.min(max, y));
      el.style.transform = `translate(${cx}px, ${cy}px)`;
    };
    const onLeave = () => {
      el.style.transform = "translate(0px, 0px)";
    };

    el.style.transition = "transform 0.2s cubic-bezier(0.16,1,0.3,1)";
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength, max]);
  return ref;
}
