"use client";
import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  MessageSquare,
  CheckCircle2,
  Quote,
  Boxes,
  Check,
  Code2,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import useScrollReveal from "../../../components/useScrollReveal";

const EMAIL = "glassinctechnologies@gmail.com";

const principles = [
  {
    Icon: Target,
    name: "Honest scoping",
    desc: "We don't take on projects we can't deliver well. Before any work begins, we tell you clearly what we can build, what it will cost, and how long it will take. No surprises.",
  },
  {
    Icon: MessageSquare,
    name: "Direct communication",
    desc: "You always know where your project stands. Weekly updates, clear documentation, and a direct line to the person doing the work. No account managers, no status meetings where nothing gets decided.",
  },
  {
    Icon: CheckCircle2,
    name: "Built to be used, not just delivered",
    desc: "A good product isn't measured by whether it shipped on time — it's whether your team still uses it six months later. We build for adoption: clean interfaces, sensible workflows, proper handover.",
  },
];

const proofItems = [
  { Icon: Boxes, label: "3+ delivered projects" },
  { Icon: Check, label: "Real clients, live systems" },
  { Icon: Code2, label: "Active development" },
];

export default function About() {
  const root = useRef(null);
  useScrollReveal(root);

  return (
    <div ref={root} className="min-h-screen flex flex-col bg-glass-canvas text-glass-text-1">
      <Header />

      <main className="flex-1">

        {/* ===================== HERO (light) ===================== */}
        <section className="relative overflow-hidden bg-glass-canvas">
          <div className="absolute inset-0 bg-dots-light opacity-50 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
          <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-12 pt-20 pb-20 md:pt-28 md:pb-28 lg:pt-32">
            <div className="reveal inline-flex items-center gap-2.5 mb-7">
              <span className="t-eyebrow text-glass-accent">01 — Who we are</span>
            </div>
            <h1 className="reveal t-display text-glass-text-1 max-w-[18ch]">
              We build digital tools that actually work for your business.
            </h1>
            <p className="reveal mt-7 max-w-2xl text-[18px] leading-[1.65] text-glass-text-2">
              Glass Inc is a lean, founder-led software studio working with small and mid-size
              businesses. We build custom software, automation systems, analytics dashboards, and
              brand assets — everything a growing business needs to operate faster and smarter.
            </p>
            <div className="reveal mt-9 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn btn-primary group">
                Work with us
                <ArrowRight strokeWidth={1.75} className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/services" className="btn btn-secondary">What we do</Link>
            </div>
          </div>
        </section>

        {/* ===================== WHO WE ARE (dark) ===================== */}
        <section className="relative bg-glass-ink text-glass-text-dark">
          <div className="absolute inset-0 bg-grid-dark opacity-60 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />
          <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
            <div className="reveal mb-12">
              <span className="t-eyebrow text-glass-accent-on-dark">02 — How we're built</span>
            </div>
            <div className="reveal grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl">
              <p className="text-[22px] md:text-[24px] font-semibold leading-[1.4] tracking-[-0.01em] text-glass-text-dark">
                We're not a large agency with account managers and handoff chains. You work directly
                with the person building your product.
              </p>
              <p className="text-[17px] leading-relaxed text-glass-text-muted self-end">
                That means faster decisions, cleaner communication, and software that actually
                reflects how your business works — not a generic template dressed up to look custom.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== FOUNDER (light) ===================== */}
        <section className="relative bg-glass-canvas overflow-hidden">
          <div className="absolute inset-0 bg-dots-light opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_65%)]" />
          <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
            <div className="reveal mb-14">
              <span className="t-eyebrow text-glass-accent">03 — The founder</span>
              <h2 className="t-h2 mt-4 text-glass-text-1 max-w-[28ch]">
                Built by someone who understands building
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Photo column */}
              <div className="reveal lg:col-span-4">
                <div className="w-full max-w-[280px]">
                  <div className="relative aspect-[4/5] rounded-[8px] border border-glass-canvas-border overflow-hidden"
                    style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05)" }}>
                    <img
                      src="/assets/griffin.jpg"
                      alt="Griffins Adero, founder of Glass Inc"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <span className="text-[15px] font-semibold tracking-[-0.01em] text-glass-text-1">Griffins Adero</span>
                    <span className="t-eyebrow text-glass-text-3">Founder</span>
                  </div>
                </div>
              </div>

              {/* Bio column */}
              <div className="lg:col-span-8 space-y-6">
                <p className="reveal text-[17px] leading-relaxed text-glass-text-2">
                  Glass Inc was founded by{" "}
                  <span className="font-semibold text-glass-text-1">Griffins Adero</span>, a
                  software engineer and builder.
                </p>
                <p className="reveal text-[17px] leading-relaxed text-glass-text-2">
                  Griffins has built management software for healthcare facilities, business
                  operations systems for growing SMEs, and automation tools that replace hours of
                  manual work. He brings a full-stack capability — software engineering, data
                  analytics, UI/UX design, and visual content — which means Glass Inc can handle the
                  entire digital picture for a client without outsourcing any of it.
                </p>

                <blockquote className="reveal card-light p-7 md:p-8">
                  <span className="icon-tile icon-tile-light mb-5">
                    <Quote strokeWidth={1.5} className="w-5 h-5 text-glass-accent" />
                  </span>
                  <p className="text-[17px] md:text-[18px] leading-relaxed text-glass-text-1 italic">
                    I started Glass Inc because I kept seeing the same problem: small businesses with
                    real potential being slowed down by manual processes, spreadsheets, and digital
                    tools that weren't built for how they actually operate. That's the problem I
                    build to solve.
                  </p>
                  <footer className="mt-5 text-[14px] font-semibold text-glass-text-3">
                    — Griffins Adero, Founder
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== HOW WE WORK (dark) ===================== */}
        <section className="relative bg-glass-ink text-glass-text-dark">
          <div className="absolute inset-0 bg-grid-dark opacity-60 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />
          <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
            <div className="reveal max-w-3xl mb-14">
              <span className="t-eyebrow text-glass-accent-on-dark">04 — How we work</span>
              <h2 className="t-h2 mt-4 text-glass-text-dark">Three principles, kept.</h2>
            </div>

            <div data-stagger data-reveal="scale" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {principles.map(({ Icon, name, desc }) => (
                <div key={name} className="card-dark p-6 md:p-7 group">
                  <span className="icon-tile icon-tile-dark mb-5 transition-colors">
                    <Icon strokeWidth={1.5} className="w-5 h-5 group-hover:text-glass-accent-on-dark transition-colors" />
                  </span>
                  <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-glass-text-dark mb-2 group-hover:text-glass-accent-on-dark transition-colors">{name}</h3>
                  <p className="text-[14px] leading-relaxed text-glass-text-muted">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== WHAT'S REAL (light) ===================== */}
        <section className="bg-glass-canvas">
          <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
            <div className="reveal max-w-3xl mb-14">
              <span className="t-eyebrow text-glass-accent">05 — What's real right now</span>
              <h2 className="t-h2 mt-4 text-glass-text-1">We're growing deliberately.</h2>
              <p className="mt-5 text-[18px] leading-relaxed text-glass-text-2 max-w-2xl">
                Taking on projects we can deliver well, and building a track record worth showing —
                rather than inventing one.
              </p>
            </div>

            <div data-stagger data-reveal="pop" className="grid sm:grid-cols-3 gap-5 max-w-3xl">
              {proofItems.map(({ Icon, label }) => (
                <div key={label} className="card-light p-6 md:p-7 group">
                  <span className="icon-tile icon-tile-light mb-5">
                    <Icon strokeWidth={1.5} className="w-5 h-5 group-hover:text-glass-accent transition-colors" />
                  </span>
                  <p className="text-[15px] font-semibold tracking-[-0.01em] text-glass-text-1 leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== CLOSING CTA (dark) ===================== */}
        <section className="bg-glass-ink text-glass-text-dark">
          <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
            <div className="reveal max-w-3xl">
              <span className="t-eyebrow text-glass-accent-on-dark">Work with us</span>
              <h2 className="t-h1 mt-4 text-glass-text-dark">Ready to build something real?</h2>
              <p className="mt-6 text-[18px] leading-relaxed text-glass-text-muted max-w-xl">
                We start with a free 30-minute discovery call. No pitch — just an honest conversation
                about your biggest operational challenge and whether we're the right fit to solve it.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Free discovery call")}`} className="btn btn-on-dark group">
                  Book a free call
                  <ArrowRight strokeWidth={1.75} className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <Link href="/contact" className="btn btn-ghost">Get in touch</Link>
              </div>
              <p className="mt-6 text-[13px] text-glass-text-muted">We respond within 24 hours · {EMAIL}</p>
              <p className="mt-12 text-[18px] italic text-glass-text-dark/90">— Griffins, Glass Inc</p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
