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
import ProjectCover from "./ProjectCover";
import HeroBackdrop from "./HeroBackdrop";
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
    img: "/assets/project-healthcare.jpg",
    tag: "Healthcare · Management system",
    title: "Resident Treatment Facility Management System",
    desc: "Intake, scheduling, staff, and reporting for a care facility — one platform replacing spreadsheets.",
  },
  {
    img: "/assets/project-operations.jpg",
    tag: "SME · Operations platform",
    title: "Business Operations Management System",
    desc: "Workflows, data tracking, and staff records matched to an SME's exact operations.",
  },
  {
    img: "/assets/project-highrise.jpg",
    tag: "Home care · Web platform",
    title: "Highrise Home Care",
    desc: "A multi-page platform for a home-care agency — services, facilities, admissions, and enquiries.",
  },
  {
    img: "/assets/project-westford.jpg",
    tag: "Homes · Web platform",
    title: "Westford Homes",
    desc: "Services, admissions, and an email-backed enquiry flow, with SEO built in.",
  },
  {
    variant: "web",
    tag: "IT services · Company site",
    title: "Cloud Computing Consultancy",
    desc: "A full company site spanning a dozen service lines — cloud, networking, security, and smart solutions.",
  },
  {
    img: "/assets/project-art.jpg",
    tag: "Creative · Portfolio",
    title: "Art By Remmy",
    desc: "An artist portfolio with a dynamic image gallery and direct email contact.",
  },
  {
    variant: "analytics",
    tag: "Data & ML · Python",
    title: "Predictive Analytics & ML Models",
    desc: "Machine-learning models for price prediction, medical diagnosis, and forecasting.",
  },
  {
    variant: "ai",
    tag: "AI tool · Next.js",
    title: "PDF-to-Quiz Generator",
    desc: "An AI tool that turns uploaded PDFs into interactive quizzes.",
  },
];

const steps = [
  { Icon: MessagesSquare, name: "Talk", desc: "A free, honest call about your biggest operational problem. No pitch, no jargon." },
  { Icon: Hammer, name: "Build", desc: "You work directly with the person building it. Weekly progress, clear documentation." },
  { Icon: PackageCheck, name: "Deliver", desc: "Software your team actually uses — proper handover, built for adoption, not just shipped." },
];

function ProjectCard({ p }) {
  return (
    <Link href="/contact" className="card-light overflow-hidden flex flex-col group">
      <div className="relative h-48 w-full bg-glass-ink overflow-hidden">
        {p.img ? (
          <>
            <img src={p.img} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover photo-duotone" />
            {/* accent duotone wash — keeps stock imagery on-brand (single accent) */}
            <span
              aria-hidden
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.50), rgba(10,10,11,0.30))", mixBlendMode: "color" }}
            />
          </>
        ) : (
          <ProjectCover variant={p.variant} className="h-full" />
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <span className="t-eyebrow text-glass-text-3">{p.tag}</span>
        <h3 className="mt-3 text-[18px] font-bold tracking-[-0.015em] text-glass-text-1 leading-snug group-hover:text-glass-accent transition-colors">{p.title}</h3>
        <p className="mt-2 text-[14px] leading-relaxed text-glass-text-2 flex-1">{p.desc}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-glass-accent">
          Discuss a build like this
          <ArrowUpRight strokeWidth={1.75} className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
}

export default function HomeClient() {
  const root = useRef(null);
  useScrollReveal(root);
  const magneticCta = useMagnetic();
  const heroSection = useRef(null);
  const heroContent = useRef(null);

  // Hero: GSAP tagline mask-reveal on load + Mistral-style scroll-out on exit
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".word-inner",
        { yPercent: 110 },
        { yPercent: 0, duration: 0.9, ease: "power4.out", stagger: 0.08, delay: 0.15 }
      );
      if (heroContent.current && heroSection.current) {
        gsap.to(heroContent.current, {
          yPercent: -8,
          opacity: 0,
          filter: "blur(8px)",
          ease: "none",
          scrollTrigger: {
            trigger: heroSection.current,
            start: "top top",
            end: "bottom 35%",
            scrub: true,
          },
        });
      }
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="min-h-screen flex flex-col bg-glass-canvas text-glass-text-1">
      <Header />

      <main className="flex-1">
        {/* ===================== HERO (dark, cinematic backdrop) ===================== */}
        <section ref={heroSection} className="relative overflow-hidden bg-glass-ink text-glass-text-dark">
          <HeroBackdrop />
          <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none [mask-image:linear-gradient(to_bottom,black_60%,transparent)]" />
          <GrainOverlay />
          <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-12 pt-28 pb-24 md:pt-36 md:pb-32 lg:pt-40 lg:pb-40 min-h-[88vh] flex items-center">
            <div ref={heroContent} className="max-w-2xl">
              <div className="inline-flex items-center gap-2.5 mb-7">
                <span className="t-eyebrow text-glass-accent-on-dark">01 — Software Studio</span>
              </div>
              <h1 className="t-display-xl text-glass-cream-text max-w-[14ch]">
                {HERO_WORDS.map((w, i) => (
                  <span
                    key={i}
                    className="word-mask"
                    style={{ marginRight: i < HERO_WORDS.length - 1 ? "0.26em" : 0 }}
                  >
                    <span className="word-inner">{w}</span>
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
          </div>
        </section>

        {/* ===================== POSITIONING (cream) ===================== */}
        <section className="relative bg-glass-cream">
          <div className="absolute inset-0 bg-dots-light opacity-25 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-20 md:py-24">
            <p className="reveal t-h2 text-glass-ink max-w-[20ch]">
              One team for everything digital.
              <span className="text-glass-text-2"> No agencies to coordinate, no handoffs.</span>
            </p>
          </div>
        </section>

        {/* ===================== SERVICES (graphite) ===================== */}
        <section className="relative bg-glass-graphite text-glass-text-dark">
          <div className="absolute inset-0 bg-grid-dark opacity-50 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />
          <GrainOverlay />
          <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
            <div className="reveal max-w-3xl mb-14">
              <span className="t-eyebrow text-glass-accent-on-dark">02 — What we do</span>
              <h2 className="t-h2 mt-4 text-glass-cream-text">Everything your business needs to go digital</h2>
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
                A mix of management systems, web platforms, data tools, and creative work — each one
                designed, built, and shipped.
              </p>
            </div>

            <div data-stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p) => (
                <ProjectCard key={p.title} p={p} />
              ))}
            </div>
          </div>
        </section>

        {/* ===================== PROCESS (graphite) ===================== */}
        <section className="relative bg-glass-graphite text-glass-text-dark">
          <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />
          <GrainOverlay />
          <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
            <div className="reveal max-w-3xl mb-14">
              <span className="t-eyebrow text-glass-accent-on-dark">04 — How it works</span>
              <h2 className="t-h2 mt-4 text-glass-cream-text">Three steps. No mystery.</h2>
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
