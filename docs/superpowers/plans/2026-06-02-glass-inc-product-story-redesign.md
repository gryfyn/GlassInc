# Glass Inc "Product Story" Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Glass Inc marketing site (4 pages + shared components) from a generic centered-hero template into a bold, product-forward "Product Story" site with real-looking dashboard mockups, an asymmetric hero, and disciplined scroll motion — homepage as the rubric.

**Architecture:** Add reusable, confidential-safe visual components (`ProductFrame`, `DashboardMock`, `SystemDiagram`, `GrainOverlay`, `Brand`) and a `useMagnetic` hook, plus CSS primitives (`.t-display-xl`, `.glow-accent`, hero word-reveal). Rebuild `app/page.js` as the reference, then propagate the language to Services/About/Contact and the Header/Footer. Brand invariants preserved (one accent `#2563EB`/`#60A5FA`, Inter, sharp logo/frames, lucide @1.5, no emoji, honest copy). No 3D/WebGL. SEO metadata untouched; "worldwide-only" applies to visible copy only.

**Tech Stack:** Next.js 14 (App Router, JS), Tailwind v3, Inter, lucide-react, GSAP + ScrollTrigger. No unit-test harness exists.

**Verification model (no test framework — visual project):** Each task verifies via (a) `npm run build` succeeding (catches import/syntax errors) and/or (b) Playwright screenshot of the running dev server (`npm run dev`, http://localhost:3000) reviewed against the rubric in `docs/design-system.md` §9. The dev server currently returns 500 — **Task 0 diagnoses and fixes that first.**

**Commit hygiene:** `.next/` is tracked in git. NEVER `git add -A` or `git add .`. Every commit explicitly lists the real source files only. Branch: `redesign/product-story` (already created).

---

## File Structure

**Create:**
- `components/ProductFrame.js` — sharp-cornered window frame + accent glow container.
- `components/DashboardMock.js` — fictional-but-realistic dashboard (variants: operations, analytics).
- `components/SystemDiagram.js` — lucide line-art flow (Intake→Scheduling→Staff→Reporting).
- `components/GrainOverlay.js` — subtle SVG noise overlay for dark sections.
- `components/Brand.js` — logo + wordmark lockup (wraps GlassLogo), `onDark` variant.
- `components/useMagnetic.js` — magnetic-pull hook for one CTA.

**Modify:**
- `app/globals.css` — add `.t-display-xl`, `.glow-accent`, `@keyframes word-in` + `.hero-word`.
- `app/page.js` — full rebuild (the rubric).
- `app/(pages)/services/page.js` — adopt language.
- `app/(pages)/about/page.js` — adopt language.
- `app/(pages)/contact/page.js` — adopt language (keep form behavior).
- `components/Header.js` — use `<Brand>`.
- `components/Footer.js` — use `<Brand>`.

**Untouched:** `lib/site.js`, `components/JsonLd.js`, `app/layout.js` metadata (SEO stays).

---

## Task 0: Get the dev server green

**Files:** none (diagnostic) — fix whatever file errors.

- [ ] **Step 1: Start the dev server in the background**

Run: `npm run dev` (background). Wait for "Ready".

- [ ] **Step 2: Load the homepage and read the error**

Navigate Playwright to `http://localhost:3000`. If a 500/compile error shows, read the terminal/overlay error text.

- [ ] **Step 3: Fix the root cause**

Fix the specific file the error names (e.g. a missing import, a syntax error). Do not guess — fix exactly what the error states.

- [ ] **Step 4: Verify all four routes render 200**

Navigate Playwright to `/`, `/services`, `/about`, `/contact`. Each must render without an error overlay.

- [ ] **Step 5: Commit only if a source file changed**

```bash
git add <the-specific-fixed-file>
git commit -m "fix: restore dev server render"
```
(If nothing needed fixing, skip the commit.)

---

## Task 1: CSS primitives (foundation)

**Files:**
- Modify: `app/globals.css` (append to the Glass Inc primitives section)

- [ ] **Step 1: Add the display-XL, glow, and word-reveal primitives**

Append after the existing `.t-eyebrow`/`.t-label` block in `app/globals.css`:

```css
/* ---- Hero display-XL (homepage hero only) ---- */
.t-display-xl {
  font-size: clamp(48px, 9vw, 132px);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.045em;
}

/* ---- Accent-only radial glow (behind product frames) ---- */
.glow-accent {
  position: absolute;
  inset: -20% -10% -10% -10%;
  background: radial-gradient(closest-side, rgba(37, 99, 235, 0.22), transparent 80%);
  pointer-events: none;
  z-index: 0;
}
.glow-accent--on-dark {
  background: radial-gradient(closest-side, rgba(96, 165, 250, 0.20), transparent 80%);
}

/* ---- Hero headline word reveal (one-time, gated on reduced-motion) ---- */
.hero-word {
  display: inline-block;
  opacity: 0;
  transform: translateY(14px);
  animation: word-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes word-in {
  to { opacity: 1; transform: translateY(0); }
}
@media (prefers-reduced-motion: reduce) {
  .hero-word { opacity: 1 !important; transform: none !important; animation: none !important; }
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: compiles with no CSS/syntax error. (Or confirm the dev overlay is clean on `/`.)

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat: add display-XL, accent glow, hero word-reveal CSS primitives"
```

---

## Task 2: ProductFrame component

**Files:**
- Create: `components/ProductFrame.js`

- [ ] **Step 1: Write the component**

```jsx
// Sharp-cornered app/browser window frame with an accent radial glow behind it.
// Brand rule: zero border-radius on the frame. Accent-only glow. (spec §4.1)
export default function ProductFrame({
  tone = "dark",
  glow = true,
  label = "",
  className = "",
  children,
}) {
  const onDark = tone === "dark";
  const surface = onDark ? "#0E0E11" : "#FFFFFF";
  const border = onDark ? "#1E1E22" : "#E4E4E8";
  const barText = onDark ? "#8A8F98" : "#8A8A96";
  return (
    <div className={`relative ${className}`}>
      {glow && <span aria-hidden className={`glow-accent ${onDark ? "glow-accent--on-dark" : ""}`} />}
      <div
        className="relative overflow-hidden"
        style={{ background: surface, border: `1px solid ${border}`, borderRadius: 0 }}
      >
        {/* top bar */}
        <div
          className="flex items-center gap-2 px-4 h-9"
          style={{ borderBottom: `1px solid ${border}` }}
        >
          <span style={{ width: 7, height: 7, background: "#2563EB", display: "inline-block" }} />
          <span className="text-[11px] tracking-[0.08em] uppercase" style={{ color: barText }}>
            {label || "Glass Inc"}
          </span>
        </div>
        {/* body */}
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: compiles, no unresolved import.

- [ ] **Step 3: Commit**

```bash
git add components/ProductFrame.js
git commit -m "feat: add ProductFrame component"
```

---

## Task 3: DashboardMock component

**Files:**
- Create: `components/DashboardMock.js`

- [ ] **Step 1: Write the component (token-only, no client data)**

```jsx
// Fictional-but-realistic dashboard built from design tokens only.
// One accent (#2563EB) + grays. No real/client data. (spec §4.2)
const ACCENT = "#2563EB";
const LINE = "#1E1E22";
const MUTED = "#8A8F98";

function Bars() {
  const bars = [42, 64, 50, 80, 58, 90, 72];
  return (
    <svg viewBox="0 0 280 120" className="w-full" aria-hidden>
      {[30, 60, 90].map((y) => (
        <line key={y} x1="0" y1={y} x2="280" y2={y} stroke={LINE} strokeWidth="1" />
      ))}
      {bars.map((h, i) => (
        <rect key={i} x={8 + i * 39} y={110 - h} width="22" height={h}
          fill={i === 5 ? ACCENT : "#2A2A30"} />
      ))}
      <polyline points="19,70 58,46 97,58 136,28 175,44 214,22 253,38"
        fill="none" stroke="#60A5FA" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StatCard({ k, v }) {
  return (
    <div className="px-3 py-2.5" style={{ border: `1px solid ${LINE}` }}>
      <div className="text-[10px] uppercase tracking-[0.08em]" style={{ color: MUTED }}>{k}</div>
      <div className="text-[18px] font-bold text-glass-text-dark mt-0.5">{v}</div>
    </div>
  );
}

export default function DashboardMock({ variant = "operations" }) {
  const stats =
    variant === "analytics"
      ? [["Sessions", "12.4k"], ["Conversion", "3.2%"], ["Avg. time", "4m 12s"]]
      : [["Active", "128"], ["Pending", "17"], ["Resolved", "94%"]];
  const rows =
    variant === "analytics"
      ? ["Acquisition", "Engagement", "Retention", "Revenue"]
      : ["Intake queue", "Daily schedule", "Staff roster", "Reports"];
  return (
    <div className="grid grid-cols-[64px_1fr] bg-glass-ink text-glass-text-dark" aria-hidden>
      {/* nav rail */}
      <div className="flex flex-col gap-3 p-3" style={{ borderRight: `1px solid ${LINE}` }}>
        <span style={{ width: 16, height: 26, border: `2px solid ${ACCENT}`, borderRadius: 0 }} />
        {[0, 1, 2, 3].map((i) => (
          <span key={i} style={{ height: 6, background: i === 0 ? ACCENT : "#2A2A30" }} />
        ))}
      </div>
      {/* main */}
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {stats.map(([k, v]) => <StatCard key={k} k={k} v={v} />)}
        </div>
        <div className="px-3 py-3" style={{ border: `1px solid ${LINE}` }}>
          <Bars />
        </div>
        <div style={{ border: `1px solid ${LINE}` }}>
          {rows.map((r, i) => (
            <div key={r} className="flex items-center justify-between px-3 py-2 text-[12px]"
              style={{ borderTop: i ? `1px solid ${LINE}` : "none", color: MUTED }}>
              <span>{r}</span>
              <span style={{ width: 40, height: 6, background: i === 1 ? ACCENT : "#2A2A30" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: compiles.

- [ ] **Step 3: Commit**

```bash
git add components/DashboardMock.js
git commit -m "feat: add DashboardMock component"
```

---

## Task 4: SystemDiagram component

**Files:**
- Create: `components/SystemDiagram.js`

- [ ] **Step 1: Write the component**

```jsx
// lucide line-art system flow for the healthcare project. On-brand, no client data. (spec §4.3)
import { ClipboardList, CalendarClock, Users, FileBarChart } from "lucide-react";

const NODES = [
  { Icon: ClipboardList, label: "Intake" },
  { Icon: CalendarClock, label: "Scheduling" },
  { Icon: Users, label: "Staff" },
  { Icon: FileBarChart, label: "Reporting" },
];

export default function SystemDiagram() {
  return (
    <div className="bg-glass-ink p-6 md:p-8" aria-hidden>
      <div className="flex items-center justify-between gap-2">
        {NODES.map(({ Icon, label }, i) => (
          <div key={label} className="flex items-center gap-2 flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <span className="flex items-center justify-center"
                style={{ width: 48, height: 48, border: "1px solid #1E1E22", background: "#161618" }}>
                <Icon strokeWidth={1.5} className="w-5 h-5 text-glass-accent-on-dark" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.08em] text-glass-text-muted">{label}</span>
            </div>
            {i < NODES.length - 1 && (
              <span className="flex-1 h-px relative" style={{ background: "#1E1E22" }}>
                <span className="bp-travel absolute -top-0.5 left-0" style={{ width: 6, height: 6, background: "#2563EB" }} />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: compiles. (Confirm those four lucide icon names exist; if any is missing, substitute a present lucide icon and note it.)

- [ ] **Step 3: Commit**

```bash
git add components/SystemDiagram.js
git commit -m "feat: add SystemDiagram component"
```

---

## Task 5: GrainOverlay component

**Files:**
- Create: `components/GrainOverlay.js`

- [ ] **Step 1: Write the component**

```jsx
// Subtle SVG grain for dark sections. 3% opacity, overlay blend. (spec §4.5)
export default function GrainOverlay({ className = "" }) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity: 0.035, mixBlendMode: "overlay" }}
    >
      <svg className="w-full h-full">
        <filter id="grain-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-noise)" />
      </svg>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: compiles.

- [ ] **Step 3: Commit**

```bash
git add components/GrainOverlay.js
git commit -m "feat: add GrainOverlay component"
```

---

## Task 6: useMagnetic hook

**Files:**
- Create: `components/useMagnetic.js`

- [ ] **Step 1: Write the hook**

```jsx
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
    const onLeave = () => { el.style.transform = "translate(0px, 0px)"; };

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
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: compiles.

- [ ] **Step 3: Commit**

```bash
git add components/useMagnetic.js
git commit -m "feat: add useMagnetic hook"
```

---

## Task 7: Brand lockup component

**Files:**
- Create: `components/Brand.js`

- [ ] **Step 1: Write the component (wraps GlassLogo)**

```jsx
import GlassLogo from "./GlassLogo";

// Logo + wordmark lockup. Single seam where a real logo image would later drop in. (spec §8)
export default function Brand({ onDark = false, size = "sm", sublabel = "Software Studio" }) {
  const textColor = onDark ? "text-glass-text-dark" : "text-glass-text-1";
  const subColor = onDark ? "text-glass-text-muted" : "text-glass-text-3";
  return (
    <span className="flex items-center gap-3">
      <GlassLogo size={size} onDark={onDark} />
      <span className="flex flex-col leading-none">
        <span className={`text-[17px] font-extrabold tracking-[-0.02em] ${textColor}`}>Glass Inc</span>
        {sublabel && <span className={`t-eyebrow mt-1 ${subColor}`}>{sublabel}</span>}
      </span>
    </span>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: compiles.

- [ ] **Step 3: Commit**

```bash
git add components/Brand.js
git commit -m "feat: add Brand lockup component"
```

---

## Task 8: Header + Footer adopt Brand

**Files:**
- Modify: `components/Header.js` (replace the inline logo/wordmark block with `<Brand />`)
- Modify: `components/Footer.js` (replace the inline logo/wordmark block with `<Brand onDark size="md" sublabel="" />` + keep the existing description/availability)

- [ ] **Step 1: Header — import and swap**

In `components/Header.js`: replace `import GlassLogo from "./GlassLogo";` with `import Brand from "./Brand";`, and replace the `<GlassLogo size="sm" /> ...wordmark span...` block inside the brand `<Link>` with `<Brand size="sm" />`.

- [ ] **Step 2: Footer — import and swap**

In `components/Footer.js`: replace `import GlassLogo from "./GlassLogo";` with `import Brand from "./Brand";`, and replace the `<div className="flex items-center gap-3 mb-6">...<GlassLogo size="md" onDark />...Glass Inc...</div>` with `<div className="mb-6"><Brand onDark size="md" sublabel="" /></div>`.

- [ ] **Step 3: Verify build + screenshot header/footer**

Run: `npm run build`, then Playwright screenshot `/` top and bottom. Header brand + footer brand render correctly on their backgrounds.

- [ ] **Step 4: Commit**

```bash
git add components/Header.js components/Footer.js
git commit -m "refactor: use Brand lockup in Header and Footer"
```

---

## Task 9: Homepage rebuild — the rubric

**Files:**
- Modify: `app/page.js` (full rebuild, keep `services` + `projects` data; replace markup)

- [ ] **Step 1: Rebuild the hero (dark, asymmetric split)**

Replace the light centered hero `<section>` with a dark asymmetric split: left = eyebrow `01 — SOFTWARE STUDIO`, `.t-display-xl` headline with each word wrapped in `<span className="hero-word" style={{animationDelay}}>`, 18px subtext, two CTAs (primary uses `useMagnetic` ref). Right = `<ProductFrame tone="dark" glow label="operations">` wrapping `<DashboardMock variant="operations" />`. Add `<GrainOverlay />` and a subtle `bg-grid-dark` texture. Remove the old proof strip entirely. Add a GSAP scrub parallax (≤40px translateY) on the ProductFrame via a local `useEffect` (register ScrollTrigger, gate on reduced-motion).

- [ ] **Step 2: Add positioning strip (light)**

Below the hero, a light band with one oversized tracked line stating worldwide/remote positioning (NO geography), e.g. an `.t-h2` statement + a muted sub-line. No metrics.

- [ ] **Step 3: Services section (rhythm: light or dark per alternation)**

Keep the 7 `services`. Render the upgraded cards (numbered eyebrow `02 — SERVICES`, `data-stagger` grid, `group-hover` accent on icon tile + title). Keep copy.

- [ ] **Step 4: Selected work — alternating split rows (dark)**

Replace the 3-card grid with 3 large alternating rows. Map the existing `projects`:
- `software` → visual `<SystemDiagram />`.
- `operations` → `<ProductFrame tone="dark" glow label="operations"><DashboardMock variant="operations" /></ProductFrame>`.
- `open` → a `<ProductFrame tone="dark" glow={false} label="in progress">` with a centered "next build" message + a subtle accent shimmer bar.
Each row: visual one side, eyebrow/title/desc/outcome the other; alternate side per index; `reveal` class.

- [ ] **Step 5: Process strip (new, light)**

Add a 3-step strip — Talk → Build → Deliver — each with a lucide icon (`MessagesSquare`, `Hammer`/`Code2`, `PackageCheck`), short honest copy, `data-stagger`.

- [ ] **Step 6: Closing CTA (dark)**

Keep the free-consultation CTA + email mailto. Primary CTA uses `useMagnetic`. "Clarity. Precision. Innovation." set large. `<GrainOverlay />`.

- [ ] **Step 7: Verify build + full-page screenshot**

Run: `npm run build`. Start dev server. Playwright full-page screenshot of `/`. Review against design-system §9 rubric (one accent, hero ≥56px/800/tight, alternating sections, no emoji, lucide @1.5, magnetic-only-one-CTA). Fix visual issues found.

- [ ] **Step 8: Commit**

```bash
git add app/page.js
git commit -m "feat: rebuild homepage as Product Story rubric"
```

---

## Task 10: Services page adopts the language

**Files:**
- Modify: `app/(pages)/services/page.js`

- [ ] **Step 1: Upgrade hero to asymmetric split**

Convert the centered light hero to an asymmetric split: keep headline + subhead + CTAs on the left; add `<ProductFrame tone="light" glow><DashboardMock variant="analytics" /></ProductFrame>` on the right. Numbered eyebrow.

- [ ] **Step 2: Keep the 7 service cards, apply upgraded card treatment**

Keep all `services` content + pills. Apply the same numbered eyebrow + `group-hover` accent + stagger as the homepage services section. Maintain dark/light alternation.

- [ ] **Step 3: Verify build + screenshot**

Run: `npm run build`. Playwright screenshot `/services`. Check rhythm + rubric.

- [ ] **Step 4: Commit**

```bash
git add "app/(pages)/services/page.js"
git commit -m "feat: services page adopts Product Story language"
```

---

## Task 11: About page adopts the language

**Files:**
- Modify: `app/(pages)/about/page.js`

- [ ] **Step 1: Upgrade hero + section rhythm; keep founder content**

Apply the new hero treatment (numbered eyebrow, bigger headline). KEEP the founder block (Griffins Adero, `/assets/griffin.jpg`, quote) and the honest "What's real right now" items — only remove any geographic phrasing (there is currently none; confirm). Ensure dark/light alternation holds.

- [ ] **Step 2: Verify build + screenshot**

Run: `npm run build`. Playwright screenshot `/about`. Founder photo loads; rubric holds.

- [ ] **Step 3: Commit**

```bash
git add "app/(pages)/about/page.js"
git commit -m "feat: about page adopts Product Story language"
```

---

## Task 12: Contact page adopts the language

**Files:**
- Modify: `app/(pages)/contact/page.js`

- [ ] **Step 1: Upgrade hero + headings; keep the brief form intact**

Apply hero/heading treatment. DO NOT change the form logic, state, or `buildMailto` behavior. Keep the availability dot. Confirm copy is worldwide/remote only (existing "Remote-first / We work worldwide" is fine).

- [ ] **Step 2: Verify build + screenshot + form smoke test**

Run: `npm run build`. Playwright screenshot `/contact`, then click a project-type chip and a budget chip to confirm the form still toggles (visual state change).

- [ ] **Step 3: Commit**

```bash
git add "app/(pages)/contact/page.js"
git commit -m "feat: contact page adopts Product Story language"
```

---

## Task 13: Final verification pass

**Files:** none (verification) — fix any issues found in the relevant file.

- [ ] **Step 1: Production build**

Run: `npm run build`
Expected: all 4 routes build with no errors.

- [ ] **Step 2: Screenshot all four pages (desktop + mobile widths)**

Playwright: resize to 1280 and 390 widths; screenshot `/`, `/services`, `/about`, `/contact`. Confirm: hero asymmetric layout collapses gracefully on mobile; no horizontal scroll; mockups legible.

- [ ] **Step 3: Reduced-motion check**

Playwright with `prefers-reduced-motion: reduce` emulation on `/`: hero words visible, no parallax jump, content fully visible.

- [ ] **Step 4: Rubric scorecard**

Score `/` against design-system §9 (12-point). Must score ≥10/12. Fix any fails in the owning file and re-commit that file.

- [ ] **Step 5: Final commit (if fixes were made)**

```bash
git add <only the fixed source files>
git commit -m "fix: final redesign polish from verification pass"
```

---

## Self-Review (author check)

- **Spec coverage:** Hero/asymmetric (T9.1), ProductFrame/DashboardMock/SystemDiagram/GrainOverlay/useMagnetic/Brand (T2–T7), CSS primitives (T1), homepage sections incl. positioning strip + process + alternating work (T9), Services/About/Contact propagation (T10–12), Header/Footer Brand (T8), SEO untouched (by omission — no task modifies it), worldwide-only visible copy (T9.2/T11/T12), reduced-motion (T13.3), rubric (T9.7/T13.4). Logo decision = keep vector mark via Brand (T7/T8). All spec sections mapped.
- **Placeholder scan:** all code steps contain full component code; no TBD/TODO.
- **Type consistency:** prop names consistent — `ProductFrame({tone, glow, label})`, `DashboardMock({variant})`, `Brand({onDark, size, sublabel})`, `useMagnetic(strength, max)` returning a ref — used identically in T8–T12.
