"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-[#0b1220]/90 border-b border-slate-200/60 dark:border-slate-700/60">
      {/* Subtle top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Brand Logo - Enhanced */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="h-9 w-[22px] border-2 border-blue-500 bg-gradient-to-b from-blue-500/20 to-transparent backdrop-blur-sm transform group-hover:scale-110 transition-all duration-300" />
              <div className="absolute inset-0 h-9 w-[22px] border-2 border-blue-500/30 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Glass Inc
              </span>
              <div className="text-[10px] text-blue-500 font-medium tracking-[0.15em] -mt-1">
                ELITE IT SOLUTIONS
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 group"
              >
                {item.label}
                {/* Hover underline effect */}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="relative px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">Get Started</span>
              {/* Subtle shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
          >
            {open ? (
              <X className="h-5 w-5 text-slate-700 dark:text-slate-300" />
            ) : (
              <Menu className="h-5 w-5 text-slate-700 dark:text-slate-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {open && (
          <div className="md:hidden">
            <nav className="py-4 border-t border-slate-200/60 dark:border-slate-700/60 mt-2">
              <ul className="space-y-1">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                {/* Mobile CTA */}
                <li className="pt-3 border-t border-slate-200/60 dark:border-slate-700/60 mt-3">
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg transition-all duration-200"
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}