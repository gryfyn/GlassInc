import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Brand from "./Brand";

const EMAIL = "glassinctechnologies@gmail.com";

const services = [
  "Custom software",
  "Automation & AI",
  "Data & dashboards",
  "Web & mobile",
  "Design & UI/UX",
  "Marketing & content",
];

const company = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-glass-ink text-glass-text-dark">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="mb-6">
              <Brand onDark size="md" sublabel="" />
            </div>
            <p className="text-[17px] leading-relaxed text-glass-text-muted max-w-md">
              We build software, automation, and digital tools for growing businesses.
              <span className="text-glass-text-dark"> Direct. Honest. Delivered.</span>
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-glass-success" />
              <span className="t-label text-glass-text-muted">Available for new projects</span>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="t-eyebrow text-glass-text-3 mb-5">What we make</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-[15px] text-glass-text-muted hover:text-glass-text-dark transition-colors duration-150">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + contact */}
          <div className="lg:col-span-4">
            <h4 className="t-eyebrow text-glass-text-3 mb-5">Company</h4>
            <ul className="space-y-3 mb-8">
              {company.map((c) => (
                <li key={c.name}>
                  <Link href={c.href} className="text-[15px] text-glass-text-muted hover:text-glass-text-dark transition-colors duration-150">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-2 text-[15px] font-medium text-glass-text-dark border-b border-glass-ink-border-2 pb-1 hover:border-glass-accent-on-dark transition-colors"
            >
              {EMAIL}
              <ArrowUpRight strokeWidth={1.5} className="w-4 h-4 text-glass-text-muted group-hover:text-glass-accent-on-dark transition-colors" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-glass-ink-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[13px] text-glass-text-muted">© {new Date().getFullYear()} Glass Inc. All rights reserved.</p>
          <p className="text-[13px] text-glass-text-muted">
            <span className="text-glass-text-dark font-medium">Clarity. Precision. Innovation.</span>
            {"  ·  "}Built for businesses serious about growing.
          </p>
        </div>
      </div>
    </footer>
  );
}
