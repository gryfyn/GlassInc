"use client";
import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Bot,
  BarChart3,
  MonitorSmartphone,
  PenTool,
  Megaphone,
  Clapperboard,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ProductFrame from "../../../components/ProductFrame";
import DashboardMock from "../../../components/DashboardMock";
import useScrollReveal from "../../../components/useScrollReveal";

const EMAIL = "glassinctechnologies@gmail.com";

const services = [
  {
    Icon: Code2,
    name: "Custom software development",
    desc: "We build management systems, operational tools, and web applications tailored exactly to how your business works — not generic templates you have to bend to fit. From patient management to inventory tracking to client portals, we've built it.",
    pills: ["Management systems", "Web apps", "Client portals"],
  },
  {
    Icon: Bot,
    name: "Business automation & AI",
    desc: "We identify the manual tasks eating your team's time and build AI-powered systems to handle them — automated reporting, intelligent workflows, and LLM-powered tools that learn your business. You keep the decisions, we automate the repetition.",
    pills: ["Automated reporting", "Workflows", "LLM tools"],
  },
  {
    Icon: BarChart3,
    name: "Data analytics & dashboards",
    desc: "Your business generates data every day. We turn it into something you can actually use — custom dashboards, real-time reports, and analytics that tell you what's working, what isn't, and what to do next. Built for people who run businesses, not data scientists.",
    pills: ["Dashboards", "Real-time reports", "Insights"],
  },
  {
    Icon: MonitorSmartphone,
    name: "Web & mobile development",
    desc: "High-performance websites and cross-platform mobile applications built with modern frameworks. Fast, responsive, and built to scale as your business grows.",
    pills: ["Next.js & React", "Cross-platform", "Built to scale"],
  },
  {
    Icon: PenTool,
    name: "Graphic design & UI/UX",
    desc: "Brand identity, user interface design, and visual systems that make your product look as good as it works. We design for clarity — every screen, every asset, every touchpoint.",
    pills: ["Brand identity", "UI/UX", "Visual systems"],
  },
  {
    Icon: Megaphone,
    name: "Digital marketing & SEO",
    desc: "We help businesses that have built something worth finding get found. Content strategy, SEO, and targeted digital campaigns that bring the right clients to your door.",
    pills: ["Content strategy", "SEO", "Campaigns"],
  },
  {
    Icon: Clapperboard,
    name: "Photo & video content",
    desc: "Visual content for your brand — product photography, brand videos, social media content, and screen-recorded software walkthroughs. Everything you need to show clients what you've built.",
    pills: ["Photography", "Brand video", "Walkthroughs"],
  },
];

export default function ServicesPage() {
  const root = useRef(null);
  useScrollReveal(root);

  return (
    <div ref={root} className="min-h-screen flex flex-col bg-glass-canvas text-glass-text-1">
      <Header />

      <main className="flex-1">

        {/* ===================== HERO (light, asymmetric) ===================== */}
        <section className="relative overflow-hidden bg-glass-canvas">
          <div className="absolute inset-0 bg-dots-light opacity-50 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
          <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              <div className="lg:col-span-6">
                <div className="reveal inline-flex items-center gap-2.5 mb-7">
                  <span className="t-eyebrow text-glass-accent">01 — What we do</span>
                </div>
                <h1 className="reveal t-display text-glass-text-1 max-w-[16ch]">
                  Everything your business needs to go digital
                </h1>
                <p className="reveal mt-7 max-w-xl text-[18px] leading-[1.65] text-glass-text-2">
                  We don't hand you off to different agencies. One team handles your software,
                  automation, data, brand, and content. You get more done, spend less time
                  coordinating, and always know who to call.
                </p>
                <div className="reveal mt-9 flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" className="btn btn-primary group">
                    Start a project
                    <ArrowRight strokeWidth={1.75} className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <a href={`mailto:${EMAIL}?subject=Talking%20through%20a%20project`} className="btn btn-secondary">
                    Talk it through
                  </a>
                </div>
              </div>

              <div className="reveal lg:col-span-6">
                <div className="lg:pl-6">
                  <ProductFrame tone="dark" glow label="analytics">
                    <DashboardMock variant="analytics" />
                  </ProductFrame>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== SERVICES (dark) ===================== */}
        <section className="relative bg-glass-ink text-glass-text-dark">
          <div className="absolute inset-0 bg-grid-dark opacity-60 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />
          <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
            <div className="reveal max-w-3xl mb-14">
              <span className="t-eyebrow text-glass-accent-on-dark">02 — Services</span>
              <h2 className="t-h2 mt-4 text-glass-text-dark">What we do, end to end</h2>
            </div>

            <div data-stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map(({ Icon, name, desc, pills }) => (
                <div key={name} className="card-dark p-6 md:p-7 flex flex-col group">
                  <span className="icon-tile icon-tile-dark mb-5 transition-colors">
                    <Icon strokeWidth={1.5} className="w-5 h-5 group-hover:text-glass-accent-on-dark transition-colors" />
                  </span>
                  <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-glass-text-dark mb-3 leading-snug group-hover:text-glass-accent-on-dark transition-colors">
                    {name}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-glass-text-muted flex-1">{desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {pills.map((pill) => (
                      <span key={pill} className="text-[12px] text-glass-text-muted border border-glass-ink-border rounded px-2.5 py-1 leading-none">
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== CLOSING CTA (light) ===================== */}
        <section className="relative bg-glass-canvas overflow-hidden">
          <div className="absolute inset-0 bg-dots-light opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
            <div className="reveal max-w-3xl">
              <span className="t-eyebrow text-glass-accent">Next step</span>
              <h2 className="t-h1 mt-4 text-glass-text-1">Ready to build something real?</h2>
              <p className="mt-6 text-[18px] leading-[1.65] text-glass-text-2 max-w-2xl">
                We start with a free 30-minute discovery call. No pitch — just an honest
                conversation about your biggest operational challenge and whether we're the
                right fit to solve it.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <a href={`mailto:${EMAIL}?subject=Free%20discovery%20call`} className="btn btn-primary group">
                  Book a free call
                  <ArrowRight strokeWidth={1.75} className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <Link href="/" className="btn btn-secondary">Back to home</Link>
              </div>
              <p className="mt-6 text-[13px] text-glass-text-3">We respond within 24 hours · {EMAIL}</p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
