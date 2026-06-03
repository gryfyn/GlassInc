"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  Globe,
  Code2,
  MonitorSmartphone,
  Bot,
  BarChart3,
  PenTool,
  Megaphone,
  MailCheck,
  ArrowLeft,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import useScrollReveal from "../../../components/useScrollReveal";

const EMAIL = "glassinctechnologies@gmail.com";

const projectTypes = [
  { name: "Custom software", Icon: Code2 },
  { name: "Web & mobile", Icon: MonitorSmartphone },
  { name: "Automation & AI", Icon: Bot },
  { name: "Data & dashboards", Icon: BarChart3 },
  { name: "Design & UI/UX", Icon: PenTool },
  { name: "Marketing & content", Icon: Megaphone },
];

const budgets = ["< $2k", "$2k – $5k", "$5k – $15k", "$15k +", "Not sure yet"];

const proofItems = [
  { value: "< 24h", label: "Typical first reply" },
  { value: "Direct", label: "You talk to the builder" },
  { value: "Remote-first", label: "We work worldwide" },
];

const contactMethods = [
  {
    Icon: Mail,
    label: "Email",
    value: EMAIL,
    note: "Replies within ~24 hours",
    href: `mailto:${EMAIL}`,
    cta: "Write now",
  },
  {
    Icon: MessageCircle,
    label: "WhatsApp / chat",
    value: "Message us anytime",
    note: "Quick questions, quick answers",
    href: `mailto:${EMAIL}?subject=${encodeURIComponent("Quick question")}`,
    cta: "Say hi",
  },
  {
    Icon: Globe,
    label: "Remote-first",
    value: "We work worldwide",
    note: "Fully remote delivery",
    href: "#brief",
    cta: "Start a brief",
  },
];

const inputClass =
  "w-full rounded-[6px] border border-glass-canvas-border bg-white px-4 py-3 text-glass-text-1 placeholder-glass-text-3 focus:outline-none focus:border-glass-accent transition-colors text-[15px]";

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-[13px] font-semibold text-glass-text-2 mb-2 tracking-[0.02em] uppercase">
        {label}
        {required && <span className="text-glass-accent ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}

export default function Contact() {
  const root = useRef(null);
  useScrollReveal(root);

  const [selectedProject, setSelectedProject] = useState("");
  const [budget, setBudget] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const buildMailto = () => {
    const subject = `Project brief${selectedProject ? ` — ${selectedProject}` : ""}`;
    const body =
      `Name: ${form.name || "—"}\n` +
      `Email: ${form.email || "—"}\n` +
      `Project: ${selectedProject || "—"}\n` +
      `Budget: ${budget || "—"}\n\n` +
      `The brief:\n${form.message || "—"}\n`;
    return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    window.location.href = buildMailto();
  };

  return (
    <div ref={root} className="min-h-screen flex flex-col bg-glass-canvas text-glass-text-1">
      <Header />

      <main className="flex-1">

        {/* ===================== SECTION 1 — HERO (light) ===================== */}
        <section className="relative overflow-hidden bg-glass-canvas">
          {/* Dot texture */}
          <div
            aria-hidden
            className="absolute inset-0 bg-dots-light opacity-50 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
          />
          {/* Decorative glass pane — design-system §8 Pattern E */}
          <div
            aria-hidden
            className="absolute right-[6%] top-[12%] hidden lg:block pointer-events-none"
            style={{ width: 110, height: 188, border: "2.5px solid #2563EB", borderRadius: 0, opacity: 0.05 }}
          />

          <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
            {/* Availability badge */}
            <div className="reveal inline-flex items-center gap-2.5 mb-8">
              <span className="inline-block w-2 h-2 rounded-full bg-glass-success" />
              <span className="t-eyebrow text-glass-accent">Available for new projects</span>
            </div>

            <h1 className="reveal t-display text-glass-text-1 max-w-[20ch]">
              Let's build the thing your business needs.
            </h1>

            <p className="reveal mt-7 max-w-2xl text-[18px] leading-[1.65] text-glass-text-2">
              No forms shouted into the void. You write to the person who actually builds it —
              Griffins. Custom software, automation, data and design, delivered direct.
            </p>

            {/* Proof row */}
            <div data-stagger className="mt-12 flex flex-col sm:flex-row gap-6 sm:gap-10">
              {proofItems.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="inline-block w-1 h-1 rounded-full bg-glass-accent flex-shrink-0" />
                  <span className="text-[14px] font-semibold text-glass-text-1">{item.value}</span>
                  <span className="text-[14px] text-glass-text-3">— {item.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="reveal mt-10 flex flex-col sm:flex-row gap-3">
              <a href="#brief" className="btn btn-primary group">
                Start a brief
                <ArrowRight strokeWidth={1.75} className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href={`mailto:${EMAIL}`} className="btn btn-secondary">
                Email directly
              </a>
            </div>
          </div>
        </section>

        {/* ===================== SECTION 2 — WAYS TO REACH (dark) ===================== */}
        <section className="relative bg-glass-graphite text-glass-text-dark">
          <div
            aria-hidden
            className="absolute inset-0 bg-grid-dark opacity-60 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
          />

          <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
            <div className="reveal max-w-3xl mb-14">
              <span className="t-eyebrow text-glass-accent-on-dark">02 — Ways to reach us</span>
              <h2 className="t-h2 mt-4 text-glass-text-dark">Pick whatever's least friction.</h2>
            </div>

            <div data-stagger data-reveal="scale" className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {contactMethods.map(({ Icon, label, value, note, href, cta }) => (
                <a key={label} href={href} className="card-dark p-6 md:p-8 group flex flex-col gap-5">
                  <span className="icon-tile icon-tile-dark transition-colors">
                    <Icon strokeWidth={1.5} className="w-5 h-5 group-hover:text-glass-accent-on-dark transition-colors" />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-glass-text-dark mb-1 group-hover:text-glass-accent-on-dark transition-colors">{label}</h3>
                    <p className="text-[15px] font-medium text-glass-text-dark break-all">{value}</p>
                    <p className="mt-1 text-[14px] text-glass-text-muted">{note}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-glass-accent-on-dark group-hover:gap-2.5 transition-all duration-150">
                    {cta}
                    <ArrowRight strokeWidth={1.75} className="w-3.5 h-3.5" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== SECTION 3 — THE BRIEF FORM (light) ===================== */}
        <section id="brief" className="scroll-mt-20 bg-glass-canvas">
          <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
            <div className="reveal max-w-3xl mb-14">
              <span className="t-eyebrow text-glass-accent">03 — The brief</span>
              <h2 className="t-h2 mt-4 text-glass-text-1">Tell us about your project.</h2>
              <p className="mt-5 text-[17px] leading-relaxed text-glass-text-2 max-w-2xl">
                A few lines is plenty — we'll ask the rest. This opens your email app, pre-filled.
              </p>
            </div>

            <div className="reveal max-w-3xl mx-auto card-light p-7 md:p-10">
              {sent ? (
                /* ---- Success state ---- */
                <div className="flex flex-col items-center text-center py-10 gap-5">
                  <span className="icon-tile icon-tile-light" style={{ width: 56, height: 56 }}>
                    <MailCheck strokeWidth={1.5} className="w-6 h-6 text-glass-accent" />
                  </span>
                  <div>
                    <h3 className="t-h3 text-glass-text-1 mb-3">Brief ready</h3>
                    <p className="text-[15px] leading-relaxed text-glass-text-2 max-w-md">
                      Your email app is opening with everything filled in. If it didn't launch,
                      write straight to{" "}
                      <a
                        href={`mailto:${EMAIL}`}
                        className="text-glass-accent font-semibold hover:underline"
                      >
                        {EMAIL}
                      </a>
                      .
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-2 inline-flex items-center gap-2 text-[13px] font-semibold text-glass-text-3 hover:text-glass-text-1 transition-colors"
                  >
                    <ArrowLeft strokeWidth={1.5} className="w-4 h-4" />
                    Edit the brief
                  </button>
                </div>
              ) : (
                /* ---- Form ---- */
                <form onSubmit={handleSubmit} className="space-y-8">

                  {/* Project type */}
                  <div>
                    <span className="block text-[13px] font-semibold text-glass-text-2 mb-3 tracking-[0.02em] uppercase">
                      What type of project?
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {projectTypes.map(({ name, Icon }) => {
                        const active = selectedProject === name;
                        return (
                          <button
                            key={name}
                            type="button"
                            onClick={() => setSelectedProject(active ? "" : name)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-[6px] border text-left transition-colors duration-150 ${
                              active
                                ? "border-glass-accent bg-glass-accent-subtle text-glass-accent"
                                : "border-glass-canvas-border bg-white text-glass-text-2 hover:border-glass-text-3"
                            }`}
                          >
                            <Icon strokeWidth={1.5} className="w-4 h-4 flex-shrink-0" />
                            <span className="text-[13px] font-semibold leading-snug">{name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name + Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field label="Your name" required>
                      <input
                        required
                        value={form.name}
                        onChange={set("name")}
                        placeholder="Jane from Acme Ltd."
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Email" required>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={set("email")}
                        placeholder="you@company.com"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  {/* Budget */}
                  <div>
                    <span className="block text-[13px] font-semibold text-glass-text-2 mb-3 tracking-[0.02em] uppercase">
                      Rough budget
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {budgets.map((b) => {
                        const on = budget === b;
                        return (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setBudget(on ? "" : b)}
                            className={`px-4 py-2 rounded-[6px] border text-[13px] font-semibold transition-colors duration-150 ${
                              on
                                ? "border-glass-accent bg-glass-accent-subtle text-glass-accent"
                                : "border-glass-canvas-border bg-white text-glass-text-2 hover:border-glass-text-3"
                            }`}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <Field label="Tell us about it" required>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={set("message")}
                      placeholder="What are you trying to fix, build, or automate? What does success look like?"
                      className={`${inputClass} resize-none`}
                    />
                  </Field>

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
                    <button type="submit" className="btn btn-primary group">
                      Send the brief
                      <ArrowRight strokeWidth={1.75} className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <p className="text-[12px] text-glass-text-3 leading-relaxed">
                      Opens your email app, pre-filled. No data stored. No spam.
                    </p>
                  </div>

                </form>
              )}
            </div>
          </div>
        </section>

        {/* ===================== SECTION 4 — CLOSING (dark) ===================== */}
        <section className="bg-glass-graphite text-glass-text-dark">
          <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
            <div className="reveal max-w-3xl">
              <h2 className="t-h1 text-glass-text-dark">Clarity. Precision. Innovation.</h2>
              <p className="mt-6 text-[18px] leading-relaxed text-glass-text-muted max-w-xl">
                Built for businesses serious about growing. Direct. Honest. Delivered.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="btn btn-on-dark group"
                >
                  Send us an email
                  <ArrowRight strokeWidth={1.75} className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <Link href="/" className="btn btn-ghost">
                  Back to home
                </Link>
              </div>
              <p className="mt-6 text-[13px] text-glass-text-muted">{EMAIL}</p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
