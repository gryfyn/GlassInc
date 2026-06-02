"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight, ArrowUpRight, Code2, Bot, BarChart3, MonitorSmartphone,
  PenTool, Megaphone, Clapperboard, Check, MessagesSquare, Hammer, PackageCheck,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import ProductFrame from "./ProductFrame";
import DashboardMock from "./DashboardMock";
import GrainOverlay from "./GrainOverlay";
import useScrollReveal from "./useScrollReveal";
import useMagnetic from "./useMagnetic";

const EMAIL = "glassinctechnologies@gmail.com";

const HERO_WORDS = ["We", "build", "software", "that", "runs", "your", "business."];

const services = [
  { Icon: Code2, name: "Custom software development", desc: "Management systems and operational tools built around exactly how your business works." },
  { Icon: Bot, name: "Business automation & AI", desc: "We automate the manual tasks eating your team's time. You keep the decisions." },
  { Icon: BarChart3, name: "Data analytics & dashboards", desc: "Your data turned into dashboards and reports you can actually use." },
  { Icon: MonitorSmartphone, name: "Web & mobile development", desc: "Fast, responsive websites and cross-platform apps, built to scale." },
  { Icon: PenTool, name: "Graphic design & UI/UX", desc: "Brand identity and interfaces that look as good as they work." },
  { Icon: Megaphone, name: "Digital marketing & SEO", desc: "Content, SEO, and campaigns that bring the right clients to your door." },
  { Icon: Clapperboard, name: "Photo & video content", desc: "Product photography, brand video, and software walkthroughs." },
];

const projects = [
  {
    variant: "software",
    tag: "Healthcare · 2024–2025",
    title: "Resident Treatment Facility Management System",
    desc: "A complete management platform for a treatment & rehabilitation facility — intake, scheduling, staff, and reporting in one place.",
    outcome: "Replaced manual spreadsheet tracking for an entire facility. Staff onboarded within a week.",
  },
  {
    variant: "operations",
    tag: "SME · 2024",
    title: "Business Operations Management System",
    desc: "A bespoke operations platform matched to an SME's exact workflows, data tracking, and staff records.",
    outcome: "Eliminated manual tracking across three departments. Live visibility into daily operations.",
  },
  {
    variant: "open",
    tag: "Open",
    title: "Your project here",
    desc: "This space is reserved for the next build. Tell us what you want to make.",
    outcome: null,
  },
];

const steps = [
  { Icon: MessagesSquare, name: "Talk", desc: "A free, honest call about your biggest operational problem. No pitch, no jargon." },
  { Icon: Hammer, name: "Build", desc: "You work directly with the person building it. Weekly progress, clear documentation." },
  { Icon: PackageCheck, name: "Deliver", desc: "Software your team actually uses — proper handover, built for adoption, not just shipped." },
];

const PROJECT_VISUAL = {
  software: { img: "/assets/project-healthcare.jpg", label: "healthcare" },
  operations: { img: "/assets/project-operations.jpg", label: "operations" },
  open: { img: "/assets/project-placeholder.jpg", label: "in progress" },
};

function ProjectVisual({ variant }) {
  const { img, label } = PROJECT_VISUAL[variant] || PROJECT_VISUAL.software;
  const isOpen = variant === "open";
  return (
    <ProductFrame tone="dark" glow={!isOpen} label={label}>
      <div className="relative aspect-[16/10] overflow-hidden bg-glass-ink">
        <img src={img} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover photo-duotone" />
        {/* accent duotone wash — keeps stock imagery on-brand (single accent) */}
        <span
          aria-hidden
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.50), rgba(10,10,11,0.30))", mixBlendMode: "color" }}
        />
        {isOpen && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-glass-ink/55">
            <div className="relative w-40 h-1.5 overflow-hidden" style={{ background: "#1E1E22" }}>
              <span className="accent-shimmer absolute inset-y-0 left-0 w-1/3" style={{ background: "#2563EB" }} />
            </div>
            <p className="text-[13px] uppercase tracking-[0.12em] text-glass-text-dark">Next build · reserved</p>
          </div>
        )}
      </div>
    </ProductFrame>
  );
}

export default function HomeClient() {
  const root = useRef(null);
  useScrollReveal(root);
  const magneticCta = useMagnetic();
  const heroVisual = useRef(null);

  // Hero product-frame parallax (decorative, reduced-motion safe)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (!heroVisual.current) return;
      gsap.to(heroVisual.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: { trigger: heroVisual.current, start: "top 80%", end: "bottom top", scrub: 1.5 },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="min-h-screen flex flex-col bg-glass-canvas text-glass-text-1">
      <Header />

      <main className="flex-1">
        {/* ===================== HERO (dark, asymmetric) ===================== */}
        <section className="relative overflow-hidden bg-glass-ink text-glass-text-dark">
          <div className="absolute inset-0 bg-grid-dark opacity-50 pointer-events-none [mask-image:linear-gradient(to_bottom,black_60%,transparent)]" />
          <GrainOverlay />
          <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-12 pt-24 pb-20 md:pt-28 md:pb-28 lg:pt-32">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left: copy */}
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2.5 mb-7">
                  <span className="t-eyebrow text-glass-accent-on-dark">01 — Software Studio</span>
                </div>
                <h1 className="t-display-xl text-glass-text-dark max-w-[14ch]">
                  {HERO_WORDS.map((w, i) => (
                    <span key={i} className="hero-word" style={{ animationDelay: `${0.1 + i * 0.07}s` }}>
                      {w}{i < HERO_WORDS.length - 1 ? " " : ""}
                    </span>
                  ))}
                </h1>
                <p className="mt-7 max-w-xl text-[18px] leading-[1.65] text-glass-text-muted">
                  We partner with small and mid-size businesses to build what runs them — custom
                  software, automation, data, design and content. Everything digital, from one team.
                </p>
                <div className="mt-9 flex flex-col sm:flex-row gap-3">
                  <Link ref={magneticCta} href="/contact" className="btn btn-primary group">
                    Start your project
                    <ArrowRight strokeWidth={1.75} className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <a href="#work" className="btn btn-ghost">See our work</a>
                </div>
                <p className="mt-8 t-eyebrow text-glass-text-muted">Remote-first · Worldwide</p>
              </div>

              {/* Right: product frame */}
              <div className="lg:col-span-6">
                <div ref={heroVisual} className="relative lg:pl-6">
                  <ProductFrame tone="dark" glow label="operations">
                    <DashboardMock variant="operations" />
                  </ProductFrame>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== POSITIONING (light) ===================== */}
        <section className="relative bg-glass-canvas">
          <div className="absolute inset-0 bg-dots-light opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-20 md:py-24">
            <p className="reveal t-h2 text-glass-text-1 max-w-[20ch]">
              One team for everything digital.
              <span className="text-glass-text-3"> No agencies to coordinate, no handoffs.</span>
            </p>
          </div>
        </section>

        {/* ===================== SERVICES (dark) ===================== */}
        <section className="relative bg-glass-ink text-glass-text-dark">
          <div className="absolute inset-0 bg-grid-dark opacity-60 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />
          <GrainOverlay />
          <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
            <div className="reveal max-w-3xl mb-14">
              <span className="t-eyebrow text-glass-accent-on-dark">02 — What we do</span>
              <h2 className="t-h2 mt-4 text-glass-text-dark">Everything your business needs to go digital</h2>
              <p className="mt-5 text-[18px] leading-relaxed text-glass-text-muted max-w-2xl">
                One team handles your software, automation, data, brand, and content — no handoffs,
                no agencies to coordinate, always one person to call.
              </p>
            </div>

            <div data-stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map(({ Icon, name, desc }) => (
                <div key={name} className="card-dark p-6 md:p-7 group">
                  <span className="icon-tile icon-tile-dark mb-5 transition-colors">
                    <Icon strokeWidth={1.5} className="w-5 h-5 group-hover:text-glass-accent-on-dark transition-colors" />
                  </span>
                  <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-glass-text-dark mb-2 group-hover:text-glass-accent-on-dark transition-colors">{name}</h3>
                  <p className="text-[14px] leading-relaxed text-glass-text-muted">{desc}</p>
                </div>
              ))}
            </div>

            <div className="reveal mt-12">
              <Link href="/services" className="inline-flex items-center gap-2 text-[15px] font-medium text-glass-accent-on-dark hover:gap-3 transition-all">
                Explore all services
                <ArrowRight strokeWidth={1.75} className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ===================== WORK (light, alternating splits) ===================== */}
        <section id="work" className="scroll-mt-20 bg-glass-canvas">
          <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
            <div className="reveal max-w-3xl mb-16">
              <span className="t-eyebrow text-glass-accent">03 — Selected work</span>
              <h2 className="t-h2 mt-4 text-glass-text-1">What we've built</h2>
              <p className="mt-5 text-[18px] leading-relaxed text-glass-text-2 max-w-2xl">
                We show the work, not vanity numbers. Every project here was built, delivered, and is
                live with a real client.
              </p>
            </div>

            <div className="space-y-16 md:space-y-24">
              {projects.map((p, i) => {
                const flip = i % 2 === 1;
                return (
                  <div key={p.title} className="reveal grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                    {/* Visual */}
                    <div className={flip ? "lg:order-2" : ""}>
                      <ProjectVisual variant={p.variant} />
                    </div>
                    {/* Copy */}
                    <div className={flip ? "lg:order-1" : ""}>
                      <span className="t-eyebrow text-glass-text-3">{p.tag}</span>
                      <h3 className="mt-3 t-h3 text-glass-text-1 leading-snug">{p.title}</h3>
                      <p className="mt-4 text-[16px] leading-relaxed text-glass-text-2 max-w-xl">{p.desc}</p>
                      {p.outcome ? (
                        <div className="mt-6 pt-5 border-t border-glass-canvas-border flex items-start gap-2.5 max-w-xl">
                          <Check strokeWidth={1.75} className="w-4 h-4 mt-0.5 text-glass-accent shrink-0" />
                          <span className="text-[14px] leading-relaxed text-glass-text-2">{p.outcome}</span>
                        </div>
                      ) : (
                        <Link href="/contact" className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-glass-accent group">
                          Start a conversation
                          <ArrowUpRight strokeWidth={1.75} className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================== PROCESS (dark) ===================== */}
        <section className="relative bg-glass-ink text-glass-text-dark">
          <div className="absolute inset-0 bg-grid-dark opacity-50 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />
          <GrainOverlay />
          <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
            <div className="reveal max-w-3xl mb-14">
              <span className="t-eyebrow text-glass-accent-on-dark">04 — How it works</span>
              <h2 className="t-h2 mt-4 text-glass-text-dark">Three steps. No mystery.</h2>
            </div>
            <div data-stagger className="grid sm:grid-cols-3 gap-5">
              {steps.map(({ Icon, name, desc }, i) => (
                <div key={name} className="card-dark p-6 md:p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="icon-tile icon-tile-dark">
                      <Icon strokeWidth={1.5} className="w-5 h-5" />
                    </span>
                    <span className="text-[13px] font-bold text-glass-text-muted">0{i + 1}</span>
                  </div>
                  <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-glass-text-dark mb-2">{name}</h3>
                  <p className="text-[14px] leading-relaxed text-glass-text-muted">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== CLOSING CTA (light) ===================== */}
        <section className="relative bg-glass-canvas overflow-hidden">
          <div className="absolute inset-0 bg-dots-light opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
          <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
            <div className="reveal max-w-3xl">
              <span className="t-eyebrow text-glass-accent">Next step</span>
              <h2 className="t-h1 mt-4 text-glass-text-1">Ready to build something real?</h2>
              <p className="mt-6 text-[18px] leading-relaxed text-glass-text-2 max-w-xl">
                We start with a free 30-minute discovery call. No pitch — just an honest conversation
                about your biggest operational challenge and whether we're the right fit to solve it.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Free discovery call")}`} className="btn btn-primary group">
                  Book a free call
                  <ArrowRight strokeWidth={1.75} className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <Link href="/services" className="btn btn-secondary">See services</Link>
              </div>
              <p className="mt-6 text-[13px] text-glass-text-3">We respond within 24 hours · {EMAIL}</p>
              <p className="mt-12 text-[20px] font-semibold tracking-[-0.01em] text-glass-text-1">Clarity. Precision. Innovation.</p>
              <p className="mt-2 text-[15px] italic text-glass-text-3">— Griffins, Glass Inc</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
