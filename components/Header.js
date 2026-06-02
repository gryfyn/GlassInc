"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Brand from "./Brand";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-glass-canvas/85 backdrop-blur-md border-b border-glass-canvas-border" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="group flex items-center" onClick={() => setOpen(false)}>
            <Brand size="sm" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[14px] font-medium text-glass-text-2 hover:text-glass-text-1 transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn btn-primary">
              Start a project
              <ArrowRight strokeWidth={1.75} className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-[6px] border border-glass-canvas-border bg-white/70 text-glass-text-1"
          >
            {open ? <X strokeWidth={1.75} className="h-5 w-5" /> : <Menu strokeWidth={1.75} className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="md:hidden pb-4 pt-1 border-t border-glass-canvas-border bg-glass-canvas/95 backdrop-blur-md">
            <ul className="space-y-1 pt-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-2 py-3 text-[15px] font-medium text-glass-text-1 hover:text-glass-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary w-full justify-center">
                  Start a project
                  <ArrowRight strokeWidth={1.75} className="w-4 h-4" />
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
