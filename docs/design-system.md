# Glass Inc — Design System Spec v1.0

> A concrete, opinionated design system for engineers building the Glass Inc marketing site.
> Reference tier: Apple, Samsung, Linear, Stripe, Vercel.
> Stack: Next.js 14 App Router · Tailwind CSS v3 · Inter · lucide-react · GSAP + ScrollTrigger.

---

## Table of Contents

1. [Design Principles](#1-design-principles)
2. [Color Tokens](#2-color-tokens)
3. [Typography](#3-typography)
4. [Spacing & Layout](#4-spacing--layout)
5. [Components](#5-components)
6. [Iconography](#6-iconography)
7. [Motion](#7-motion)
8. [Imagery & Visual Interest Without Photography](#8-imagery--visual-interest-without-photography)
9. [Premium UI Rubric — 12-Point Checklist](#9-premium-ui-rubric--12-point-checklist)
10. [Anti-Patterns](#10-anti-patterns)

---

## 1. Design Principles

These five rules govern every decision. When in doubt, apply them in order.

### P1 — Restraint over addition
Every element earns its place. When you feel the urge to add a gradient, shadow, icon, or animation — pause and ask: "does removing this make the page weaker?" If no, remove it. Apple's pages feel expensive because they contain less, not more.

### P2 — One accent, everywhere
The entire site uses exactly one primary accent color (see §2). It appears on primary CTAs, active nav links, and key visual markers. Never apply it decoratively. Never mix it with a second accent in the same component.

### P3 — Typography does the heavy lifting
Hierarchy is built through size, weight, and letter-spacing — not through color washes or icon clusters. A 72px / 800-weight headline with tight tracking is worth more than any gradient banner. Inter at display sizes, set correctly, looks as premium as a custom typeface.

### P4 — Generous negative space signals confidence
Cheap sites cram. Premium sites breathe. Minimum 120px vertical padding on major sections; 80px on subsections. Whitespace is not waste — it is the visual cue that says "we are not desperate."

### P5 — Motion with a purpose, never decoration
Every animation must either: (a) guide attention to the next action, or (b) confirm a state change, or (c) reveal content that was waiting. Entrance animations: a single fade-up, 0.6–0.8 s, `power3.out`. No bouncing, no spinning, no loop-animations in the hero.

### P6 — Dark and light sections in deliberate alternation
The site alternates between ink-dark sections (`bg-ink`) and near-white sections (`bg-canvas`). This creates rhythm and premium contrast without any gradient abuse. The rule: two consecutive same-tone sections must not exist.

### P7 — Precision in details
Consistent 4px base grid. Pixel-perfect alignment. Letter-spacing on all uppercase labels (`.tracking-[0.12em]`). `font-feature-settings: "ss01", "cv01"` on Inter for optical refinement. These invisible details accumulate into a feeling of craft.

---

## 2. Color Tokens

### Philosophy
One near-black, one off-white, a refined gray scale, **one primary accent** (cold slate-blue), and a single secondary only for specific semantic use (success/availability). No rainbow gradients. If a gradient is used, it is a two-stop same-hue wash, maximum 15% opacity difference.

### Why this accent — Cold Slate Blue `#2563EB` (Tailwind `blue-600`)
Avoided: generic "AI purple" (`#7C3AED`), electric cyan, coral. Chose a saturated but serious blue — the same frequency used by Apple's interactive elements, Stripe's brand, and Linear's primary CTA. It reads as "trustworthy technology" across East Africa and Gulf markets. It is strong enough to lead the eye without feeling playful.

---

### Full Token Table

| Token name          | Hex       | Tailwind class           | Role                                      |
|---------------------|-----------|--------------------------|-------------------------------------------|
| `--ink`             | `#0A0A0B` | `bg-[#0A0A0B]`           | Near-black backgrounds (dark sections)    |
| `--ink-soft`        | `#111113` | `bg-[#111113]`           | Card backgrounds on dark sections         |
| `--ink-border`      | `#1E1E22` | `border-[#1E1E22]`       | Borders on dark sections                  |
| `--canvas`          | `#F8F8FA` | `bg-[#F8F8FA]`           | Near-white page background (light sections) |
| `--canvas-raised`   | `#FFFFFF` | `bg-white`               | Card/surface backgrounds on light sections |
| `--canvas-border`   | `#E4E4E8` | `border-[#E4E4E8]`       | Borders on light sections                 |
| `--text-primary`    | `#0A0A0B` | `text-[#0A0A0B]`         | Body text on light bg                     |
| `--text-secondary`  | `#5C5C66` | `text-[#5C5C66]`         | Supporting text, captions on light bg     |
| `--text-tertiary`   | `#8A8A96` | `text-[#8A8A96]`         | Metadata, labels on light bg              |
| `--text-on-dark`    | `#F0F0F4` | `text-[#F0F0F4]`         | Primary text on dark sections             |
| `--text-muted-dark` | `#8A8F98` | `text-[#8A8F98]`         | Secondary text on dark sections           |
| `--accent`          | `#2563EB` | `text-blue-600`          | Primary accent — CTAs, active states      |
| `--accent-hover`    | `#1D4ED8` | `hover:bg-blue-700`      | Primary accent hover state                |
| `--accent-subtle`   | `#EFF6FF` | `bg-blue-50`             | Tinted accent bg for badges, pills        |
| `--accent-on-dark`  | `#60A5FA` | `text-blue-400`          | Accent used on dark backgrounds           |
| `--success`         | `#16A34A` | `text-green-600`         | Availability indicator only               |
| `--success-dot`     | `#22C55E` | `text-green-500`         | Availability dot indicator                |

### Light-section palette summary
- Background: `#F8F8FA` (canvas) — not pure white, slightly warm-gray so it's softer
- Surface/card: `#FFFFFF`
- Text: `#0A0A0B` / `#5C5C66` / `#8A8A96`
- Border: `#E4E4E8`
- Accent: `#2563EB`

### Dark-section palette summary
- Background: `#0A0A0B` (ink)
- Surface/card: `#111113`
- Text: `#F0F0F4` / `#8A8F98`
- Border: `#1E1E22`
- Accent on dark: `#60A5FA`

### Gradient rule
**One allowed gradient pattern only:**
```css
/* Subtle single-hue dark overlay on section backgrounds */
background: linear-gradient(180deg, #0A0A0B 0%, #0D0D10 100%);

/* OR: faint noise wash in hero only (not repeated) */
background: linear-gradient(135deg, #F8F8FA 0%, #F2F2F6 100%);
```
No `from-blue-600 via-purple-600 to-cyan-600`. That reads as 2021 SaaS.

### Tailwind config additions
Add to `tailwind.config.js` under `theme.extend.colors`:
```js
glass: {
  ink:          '#0A0A0B',
  'ink-soft':   '#111113',
  'ink-border': '#1E1E22',
  canvas:       '#F8F8FA',
  'canvas-border': '#E4E4E8',
  'text-2':     '#5C5C66',
  'text-3':     '#8A8A96',
  'text-dark':  '#F0F0F4',
  'text-muted': '#8A8F98',
}
```

---

## 3. Typography

### Font decision: Stay on Inter — no second typeface
**Reasoning:** Inter variable (weight 100–900) with correct sizing, weight contrast, and letter-spacing achieves Apple-grade results without adding a second font request. Adding a display typeface (e.g., Playfair, Fraunces) would introduce serif-sans tension that conflicts with the precise, technical identity of Glass Inc. The trap most agencies fall into is using a display font to compensate for poor Inter usage. Fix the usage first.

**Exception to revisit:** If a future brand direction pushes toward editorial warmth (unlikely for this brief), Geist (Vercel's open-source font, free via npm) would be the one acceptable addition — its design DNA is virtually identical to Inter.

### Inter configuration in Next.js layout

```jsx
// app/layout.js
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  // Load only the weights we actually use
  weight: ['400', '500', '600', '700', '800'],
  // Enable optical size axis for display usage
  axes: ['opsz'],
});

// Apply: <html className={inter.variable}>
// Body: font-family: var(--font-inter), ui-sans-serif, system-ui
```

Add to `globals.css`:
```css
body {
  font-feature-settings: "ss01", "cv01", "liga" 1;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
```

### Type scale

| Style      | Size       | Weight | Line-height | Letter-spacing | Usage                              |
|------------|------------|--------|-------------|----------------|------------------------------------|
| `display`  | 72–80px    | 800    | 1.0         | `-0.04em`      | Hero H1 only — 1 per page          |
| `h1`       | 56px       | 800    | 1.05        | `-0.035em`     | Page-level heading                 |
| `h2`       | 40px       | 700    | 1.1         | `-0.025em`     | Section headings                   |
| `h3`       | 28px       | 700    | 1.2         | `-0.02em`      | Card titles, sub-section headings  |
| `h4`       | 20px       | 600    | 1.3         | `-0.01em`      | Component labels, group headers    |
| `body-lg`  | 18px       | 400    | 1.65        | `0`            | Hero subheading, feature intros    |
| `body`     | 16px       | 400    | 1.6         | `0`            | Standard body copy                 |
| `body-sm`  | 14px       | 400    | 1.55        | `0.005em`      | Card descriptions, secondary copy  |
| `caption`  | 12px       | 500    | 1.5         | `0.04em`       | Tags, metadata, timestamps         |
| `label`    | 11px       | 600    | 1.4         | `0.1em`        | Navigation labels, section eyebrows — always uppercase |

### How to achieve Apple-grade headlines with Inter

Apple's formula (translating SF Pro Display → Inter):

1. **Size:** Never below 56px for a primary hero headline at desktop. Use `clamp(40px, 6vw, 80px)` for fluid scaling.
2. **Weight:** 800. Not 700. The step from 700 → 800 is where Inter goes from "nice" to "premium."
3. **Tracking:** `-0.04em` at display sizes. Inter's default optical spacing is designed for UI text; at large sizes it needs to be manually tightened. `-0.04em` on 72px = ~2.9px tighter per character — this is the single most impactful change.
4. **Line-height:** `1.0–1.05`. Tight, controlled. Anything above `1.1` at display reads as "web agency, 2019."
5. **Color:** Pure `#0A0A0B` on light bg, or `#F0F0F4` on dark. No gradient clip-text on the primary headline.
6. **Max-width constraint:** Wrap at `max-w-[18ch]` on mobile, `max-w-[22ch]` on desktop for perfect line breaks. Never let a headline run full viewport width.

### Tailwind utility classes to add

```js
// tailwind.config.js — theme.extend.fontSize
fontSize: {
  'display': ['clamp(56px, 7vw, 80px)', { lineHeight: '1.0',  letterSpacing: '-0.04em',  fontWeight: '800' }],
  'h1':      ['clamp(40px, 5vw, 56px)',  { lineHeight: '1.05', letterSpacing: '-0.035em', fontWeight: '800' }],
  'h2':      ['clamp(28px, 4vw, 40px)',  { lineHeight: '1.1',  letterSpacing: '-0.025em', fontWeight: '700' }],
  'h3':      ['clamp(20px, 2.5vw, 28px)',{ lineHeight: '1.2',  letterSpacing: '-0.02em',  fontWeight: '700' }],
}
```

---

## 4. Spacing & Layout

### Base unit
**4px** (Tailwind's default). All spacing is a multiple of 4. Never use odd values like 5px, 7px, 22px.

### Spacing scale in use

| Token  | Value | Tailwind   | Usage                              |
|--------|-------|------------|------------------------------------|
| `xs`   | 4px   | `gap-1`    | Icon-to-label gap                  |
| `sm`   | 8px   | `gap-2`    | Inline element gaps                |
| `md`   | 16px  | `gap-4`    | Card internal padding (default)    |
| `lg`   | 24px  | `gap-6`    | Card-to-card gaps                  |
| `xl`   | 40px  | `gap-10`   | Component vertical rhythm          |
| `2xl`  | 64px  | `gap-16`   | Inter-section spacing              |
| `3xl`  | 96px  | `gap-24`   | Major section vertical padding     |
| `4xl`  | 128px | `gap-32`   | Hero top/bottom padding            |

### Section vertical rhythm
```css
/* Standard section */
py-20 md:py-28 lg:py-32   /* 80px → 112px → 128px */

/* Hero section */
py-24 md:py-32 lg:py-40   /* 96px → 128px → 160px */

/* Compact sections (footer, thin strips) */
py-12 md:py-16            /* 48px → 64px */
```

### Max content width
- **Content max-width:** `max-w-6xl` (1152px) — not wider
- **Prose/text max-width:** `max-w-2xl` (672px) for body copy blocks
- **Headline max-width:** `max-w-3xl` (768px) for section headings
- **Full-bleed:** background fills viewport; content container is centered

### Grid usage
```jsx
/* 3-column card grid */
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

/* 2-column feature layout */
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

/* 4-column stats strip */
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
```

### Horizontal padding (container)
`px-6 md:px-8 lg:px-12` — do not use `px-4` on desktop; it reads cramped.

---

## 5. Components

### Logo mark — sharp vertical rectangle

**Hard rule: zero border-radius, always.**

```jsx
// Canonical logo mark — copy this exactly
function GlassLogo({ size = 'md' }) {
  const dims = {
    sm: { w: 16, h: 26, border: 1.5 },
    md: { w: 20, h: 34, border: 2 },
    lg: { w: 28, h: 46, border: 2.5 },
  }[size];

  return (
    <div
      className="flex-shrink-0"
      style={{
        width: dims.w,
        height: dims.h,
        border: `${dims.border}px solid #2563EB`,
        borderRadius: 0,           // HARD RULE: never apply border-radius
        backgroundColor: 'transparent',
        position: 'relative',
      }}
    >
      {/* Subtle inner reflection — single horizontal line at 30% from top */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: 0,
          right: 0,
          height: dims.border,
          backgroundColor: '#2563EB',
          opacity: 0.35,
        }}
      />
    </div>
  );
}
```

**On dark backgrounds:** border color `#60A5FA` (blue-400).
**Never:** rounded corners, gradient fills, glow/pulse animations on the logo mark itself.

---

### Nav / Header

**Behavior:** Sticky. On scroll > 20px, add a very subtle background transition.

```jsx
// Correct header treatment
<header className="
  sticky top-0 z-50
  border-b border-[#E4E4E8]/60
  transition-colors duration-300
  /* Resting: fully transparent */ bg-transparent
  /* Scrolled: applied via JS class */ data-[scrolled=true]:bg-[#F8F8FA]/90
  data-[scrolled=true]:backdrop-blur-md
">
```

**Nav items:** `text-[14px] font-medium text-[#5C5C66] hover:text-[#0A0A0B]` — no colored underlines, no gradient hover bars. Transition on color only: `transition-colors duration-150`.

**Active state:** `text-[#0A0A0B] font-semibold` with a single 1.5px `#2563EB` underline — not a gradient.

**CTA button in nav:** Primary button (see below) but smaller: `px-4 py-2 text-sm`.

**Mobile menu:** Full-width slide-down panel, `bg-[#F8F8FA]`, same link styles. One border-top `border-[#E4E4E8]`. No shadow on the panel.

---

### Buttons

#### Primary button
The most important interactive element — must never look cheap.

```jsx
<button className="
  inline-flex items-center gap-2
  px-6 py-3
  bg-[#2563EB] hover:bg-[#1D4ED8]
  text-white text-[15px] font-semibold
  rounded-[6px]
  transition-colors duration-150
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2
">
  Start your project
</button>
```

**Shadow:** `shadow-[0_1px_3px_rgba(37,99,235,0.25),0_1px_2px_rgba(37,99,235,0.15)]` — a cold blue-tinted shadow that ties to the accent. Never a generic `shadow-lg`.
**Border-radius: 6px** — refined, not sharp (0px would be jarring on a button), not round (8–12px reads casual).
**No gradient fill.** Flat color, hover darkens by one step. That's it.
**Arrow icon:** Use lucide `ArrowRight` at `16px` / `strokeWidth={1.75}`. On hover, translate-x by 2px only.

#### Secondary button
```jsx
<button className="
  inline-flex items-center gap-2
  px-6 py-3
  bg-transparent
  border border-[#E4E4E8] hover:border-[#0A0A0B]
  text-[#0A0A0B] text-[15px] font-semibold
  rounded-[6px]
  transition-colors duration-150
">
```

#### Ghost button (dark sections)
```jsx
<button className="
  inline-flex items-center gap-2
  px-6 py-3
  bg-transparent
  border border-[#1E1E22] hover:border-[#2E2E35]
  text-[#F0F0F4] text-[15px] font-semibold
  rounded-[6px]
  transition-colors duration-150
">
```

**Rule:** Never put a gradient on any button. If you want emphasis, use the primary button. If you want a second tier, use secondary. Never rainbow.

---

### Hero section

```
Structure:
  [Section wrapper — dark bg #0A0A0B or light #F8F8FA]
    [Container — max-w-6xl, centered]
      [Eyebrow label — uppercase caption, accent-colored]
      [H1 display headline — max 12 words, 72–80px, weight 800, tracking -0.04em]
      [Subheading — 18px, weight 400, max-w-2xl, line-height 1.65]
      [CTA row — primary + secondary buttons, gap-4]
      [Social proof strip — 3 brief metrics or client indicators, small caps, muted]
```

**Eyebrow label pattern:**
```jsx
<div className="inline-flex items-center gap-2 mb-6">
  <div className="w-1 h-1 rounded-full bg-[#2563EB]" />
  <span className="text-[11px] font-600 text-[#2563EB] tracking-[0.1em] uppercase">
    Software Studio · East Africa & Gulf
  </span>
</div>
```

**No animated blobs in the hero.** Visual interest should come from the abstract CSS/SVG background treatment described in §8.

**Hero dark section example:**
```jsx
<section className="bg-[#0A0A0B] py-32 relative overflow-hidden">
  {/* Optional: faint grid lines — see §8 */}
  <div className="absolute inset-0 opacity-[0.04]">
    <GridLineBackground /> {/* SVG lines, not blobs */}
  </div>
  <div className="relative z-10 max-w-6xl mx-auto px-8">
    ...
  </div>
</section>
```

---

### Feature / Service cards

**On dark section (ink bg):**
```jsx
<div className="
  bg-[#111113]
  border border-[#1E1E22]
  rounded-[8px]
  p-6 md:p-8
  transition-colors duration-200
  hover:border-[#2E2E38]
  group
">
  {/* Icon container */}
  <div className="w-10 h-10 rounded-[4px] border border-[#1E1E22] bg-[#161618]
    flex items-center justify-center mb-5
    group-hover:border-[#2563EB]/40 transition-colors duration-200">
    <IconName className="w-4 h-4 text-[#8A8F98] group-hover:text-[#60A5FA] transition-colors" strokeWidth={1.5} />
  </div>

  <h3 className="text-[17px] font-700 text-[#F0F0F4] mb-2 tracking-[-0.01em]">
    Service name
  </h3>
  <p className="text-[14px] text-[#8A8F98] leading-[1.6]">
    Description copy here.
  </p>
</div>
```

**On light section (canvas bg):**
```jsx
<div className="
  bg-white
  border border-[#E4E4E8]
  rounded-[8px]
  p-6 md:p-8
  shadow-[0_1px_3px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.03)]
  hover:shadow-[0_4px_12px_rgba(0,0,0,0.07),0_2px_4px_rgba(0,0,0,0.04)]
  transition-shadow duration-200
  group
">
```

**Shadow philosophy:** Layered, low-opacity shadows. Never a single `shadow-lg`. The formula is:
- Resting: `0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)`
- Hover: `0 8px 24px rgba(0,0,0,0.07), 0 2px 6px rgba(0,0,0,0.04)`

**What NOT to do on cards:**
- No `transform hover:scale-105` — scale on hover reads playful, not premium
- No `hover:-translate-y-2` — vertical lift is over-used; use shadow deepening instead
- No gradient overlays or backgrounds on card hover states
- Card radius: `8px` — not `rounded-2xl` (16px), not `0`

---

### Project / case-study cards

```jsx
<article className="
  bg-white border border-[#E4E4E8] rounded-[8px]
  overflow-hidden
  group cursor-pointer
  shadow-[0_1px_3px_rgba(0,0,0,0.04)]
  hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]
  transition-shadow duration-300
">
  {/* Visual cover — CSS/SVG abstract art, not stock photos — see §8 */}
  <div className="h-52 w-full bg-[#0A0A0B] relative overflow-hidden">
    <ProjectCoverArt variant="..." />
    {/* Tag pill — top left */}
    <div className="absolute top-4 left-4">
      <span className="text-[11px] font-600 text-[#F0F0F4] bg-[#1E1E22]/90 px-2.5 py-1 rounded-[4px] uppercase tracking-[0.08em]">
        Healthcare · 2024
      </span>
    </div>
  </div>

  <div className="p-6">
    <h3 className="text-[17px] font-700 text-[#0A0A0B] tracking-[-0.01em] mb-2
      group-hover:text-[#2563EB] transition-colors duration-150">
      Project title
    </h3>
    <p className="text-[14px] text-[#5C5C66] leading-[1.6] mb-4">
      Description.
    </p>

    {/* Metrics list */}
    <ul className="space-y-1.5 mb-5">
      {metrics.map(m => (
        <li key={m} className="flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-[#2563EB] flex-shrink-0" />
          <span className="text-[13px] text-[#8A8A96]">{m}</span>
        </li>
      ))}
    </ul>

    <span className="inline-flex items-center gap-1.5 text-[13px] font-600 text-[#2563EB]">
      Start a conversation
      <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
    </span>
  </div>
</article>
```

---

### Stat / proof strip

Used between hero and services to establish credibility. Keep it factual.

```jsx
<section className="border-y border-[#E4E4E8] bg-white py-12">
  <div className="max-w-6xl mx-auto px-8">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { stat: '2+', label: 'Systems delivered' },
        { stat: '100%', label: 'Client retention' },
        { stat: '24 hr', label: 'Response time' },
        { stat: '2', label: 'Markets: East Africa & Gulf' },
      ].map(({ stat, label }) => (
        <div key={label} className="text-center lg:text-left">
          <div className="text-[32px] font-800 text-[#0A0A0B] tracking-[-0.03em]">{stat}</div>
          <div className="text-[13px] font-500 text-[#8A8A96] mt-1 uppercase tracking-[0.08em]">{label}</div>
        </div>
      ))}
    </div>
  </div>
</section>
```

**Do not inflate numbers you do not have.** A stat strip with honest numbers reads more premium than one with suspicious round numbers.

---

### Footer

```
Structure (dark, ink bg):
  [Top border: 1px #1E1E22]
  [Logo + tagline + geo/availability — col-span-5]
  [Service links list — col-span-3]
  [Company nav + email contact — col-span-4]
  [Bottom bar: copyright | tagline]
```

**Key rules:**
- Background: `#0A0A0B` — same as nav dark mode. Not `slate-950` (too blue).
- No gradient blobs or colored glow spots in footer.
- Link hover: `text-[#F0F0F4]` — no colored hover on nav links in footer. Color change should be subtle (muted → white), not muted → blue.
- The email contact CTA in footer: keep it a simple `<a href="mailto:...">` with an inline icon, not a styled card component.
- Bottom copyright line: `text-[#8A8F98] text-[13px]`.

---

## 6. Iconography

### lucide-react usage rules

**strokeWidth:** Always `1.5`. Never the default `2`. The difference: `2` reads as UI-widget; `1.5` reads as premium editorial. Apple's SF Symbols, Linear's icons, and Stripe's iconography all use sub-2 stroke weights.

**Size in cards:** `16px` (w-4 h-4) for service icons in dense cards. `20px` (w-5 h-5) for standalone feature highlights.

**Color:** Match the context:
- On dark bg: `text-[#8A8F98]` resting → `text-[#60A5FA]` on group-hover
- On light bg: `text-[#8A8A96]` resting → `text-[#2563EB]` on group-hover

**Icon containers (in cards):**
- Size: `40px × 40px`
- Shape: `rounded-[4px]` — not round (`rounded-full`), not square (`rounded-none`)
- Background: `bg-[#F8F8FA]` on light cards; `bg-[#161618]` on dark cards
- Border: `1px solid #E4E4E8` on light; `1px solid #1E1E22` on dark
- Never put a gradient or colored background behind a lucide icon. The icon itself is the signal — the container should recede.

**What to avoid:**
- `strokeWidth={2.5}` — looks like a sketch icon, not premium
- Filled icons — lucide is an outline library; stay consistent
- Mixing icon sizes within the same card grid (all cards must use the same size)
- Emoji as icons anywhere in the UI

---

## 7. Motion

### Core principle
Motion should feel like physics, not showmanship. Stripes's wave, Linear's panel transitions, Apple's macOS window animations — all share the same trait: they finish faster than you expect, with just enough friction.

### GSAP baseline config

```js
// Set globally once in layout or a dedicated motion.js module
gsap.defaults({
  ease: 'power3.out',
  duration: 0.65,
});

// Register ScrollTrigger once
gsap.registerPlugin(ScrollTrigger);
```

### Scroll reveal — the canonical pattern

```js
// Use this pattern exclusively for entrance animations
gsap.from(el, {
  y: 20,           // Not 40px, not 60px — 20px is subtle enough for premium
  autoAlpha: 0,    // autoAlpha = opacity + visibility (avoids FOUC)
  duration: 0.65,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: el,
    start: 'top 88%',   // Fires slightly before element enters viewport
    once: true,          // Only plays once — never re-plays on scroll-back
  },
});
```

### Staggered children (card grids)

```js
gsap.from(cards, {
  y: 20,
  autoAlpha: 0,
  duration: 0.55,
  stagger: 0.07,        // Not 0.15 — too slow reads as a presentation, not a UI
  ease: 'power3.out',
  scrollTrigger: {
    trigger: cardGrid,
    start: 'top 85%',
    once: true,
  },
});
```

### Parallax (optional, use sparingly)

```js
// Only for decorative background elements, never content
gsap.to(decorativeEl, {
  yPercent: -15,         // Max 15% — beyond that it looks like a game engine
  ease: 'none',
  scrollTrigger: {
    trigger: section,
    scrub: 1.5,          // scrub: 1.5 = half-second smoothing lag (not instant)
  },
});
```

### Headline character animation (hero only)

Use GSAP SplitText OR a CSS approach — do not add SplitText if not installed. CSS alternative:

```css
/* CSS-only word reveal — no library needed */
.hero-word {
  display: inline-block;
  opacity: 0;
  transform: translateY(12px);
  animation: word-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.hero-word:nth-child(1) { animation-delay: 0.1s; }
.hero-word:nth-child(2) { animation-delay: 0.18s; }
/* ... */

@keyframes word-in {
  to { opacity: 1; transform: translateY(0); }
}
```

### Button hover micro-interaction

```js
// On button mouseenter — subtle scale, not transform hover via CSS
// Use CSS-only approach: no GSAP needed for hover states
```

```css
.btn-primary {
  transition: background-color 150ms ease, box-shadow 150ms ease;
}
.btn-primary .icon-arrow {
  transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-primary:hover .icon-arrow {
  transform: translateX(3px);
}
```

### Nav scroll behavior

```js
// Detect scroll > 20px to add header bg class
useEffect(() => {
  const onScroll = () => {
    headerRef.current?.setAttribute(
      'data-scrolled',
      window.scrollY > 20 ? 'true' : 'false'
    );
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}, []);
```

### Timing reference

| Animation type        | Duration  | Ease             | Notes                        |
|-----------------------|-----------|------------------|------------------------------|
| Scroll reveal         | 0.65s     | `power3.out`     | Standard                     |
| Stagger per item      | 0.55s     | `power3.out`     | offset 0.07s                 |
| Parallax (scrub)      | —         | `none`           | scrub: 1.5                   |
| Button hover          | 0.15s     | CSS `ease`       | Color only                   |
| Arrow icon nudge      | 0.2s      | `cubic-bezier(0.16,1,0.3,1)` | translateX(3px) |
| Nav bg fade-in        | 0.3s      | CSS `ease`       | On scroll > 20px             |
| Mobile menu open      | 0.25s     | `power2.out`     | Clip-path or max-height      |
| Page transition       | Avoid     | —                | Next.js route changes: no JS transition; CSS only if at all |

### Hard no-list for motion
- `animate-pulse` on anything other than an "available" status dot
- `animate-bounce`
- `rotate` or `scale` on scroll (unless it's a pinned section hero — even then, be sure)
- Loop animations on static content (no perpetual floating blobs)
- `transition-transform duration-500 hover:scale-105` on cards
- Spring/bounce eases (`elastic`, `bounce`) — these read as toy UI
- GSAP timeline duration > 1.5s for any entrance animation

---

## 8. Imagery & Visual Interest Without Photography

Glass Inc has no photography budget. This is actually an advantage: forced to use abstraction, the site can look more sophisticated than one peppered with generic Unsplash photos. Apple uses product renders. Linear uses geometric UI mockups. Stripe uses stylized code animations. The pattern: **show the work without showing people**.

### Pattern A — Blueprint/engineering plates (already in codebase as `ProjectCover`)

The existing `ProjectCover` component with `bp-root` and SVG variants is the right instinct. Refine it:

- Limit to 2–3 colors: `#0A0A0B` bg, `#1E1E22` grid lines, `#2563EB` accent lines/nodes
- No color fills — line art only communicates precision
- Animate one element per cover (a traveling node, a blinking cursor) — already implemented

### Pattern B — CSS grid texture (hero backgrounds)

```jsx
// GridBackground component — pure CSS, zero JS
function GridBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    />
  );
}
```

Use only on dark sections. On light sections, use a dot-grid instead:
```css
background-image: radial-gradient(circle, #D4D4D8 1px, transparent 1px);
background-size: 28px 28px;
opacity: 0.5;
```

### Pattern C — Code snippet as visual (on dark sections)

A styled `<pre>` block showing a real snippet from a project (not stock lorem ipsum code). Use:
- Background: `#111113`
- Border: `1px solid #1E1E22`
- Font: `font-mono text-[13px]`
- Syntax highlighting: two colors only — `#60A5FA` (keywords) and `#F0F0F4` (variables). No rainbow syntax.
- Optional: a single GSAP type-in animation on page load

### Pattern D — Geometric/architectural SVG compositions

For service card "hero" visuals when needed:

```jsx
// Example: Data dashboard illustration — pure SVG
<svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  {/* Horizontal grid lines */}
  {[40, 80, 120, 160].map(y => (
    <line key={y} x1="24" y1={y} x2="296" y2={y} stroke="#1E1E22" strokeWidth="1" />
  ))}
  {/* Bar chart bars — blue, varying heights */}
  {[60, 100, 75, 130, 90, 115].map((h, i) => (
    <rect key={i}
      x={40 + i * 44} y={160 - h} width={28} height={h}
      fill="#2563EB" fillOpacity={0.6 + i * 0.05}
      rx="2"
    />
  ))}
  {/* Trend line */}
  <polyline
    points="54,100 98,60 142,85 186,30 230,70 274,45"
    stroke="#60A5FA" strokeWidth="1.5" fill="none"
    strokeLinecap="round" strokeLinejoin="round"
  />
</svg>
```

### Pattern E — The "glass pane" logo as decorative element

Large, low-opacity instances of the vertical-rectangle logo mark used as background decoration:

```jsx
// Decorative — very faint, behind content
<div
  className="absolute right-[-4%] top-[10%] opacity-[0.04] pointer-events-none"
  style={{ width: 120, height: 200, border: '3px solid #2563EB', borderRadius: 0 }}
/>
```

**Rule:** Opacity must be ≤ 0.06. This is subliminal, not obvious.

### Pattern F — Noise texture overlay (subtle, optional)

A small SVG noise filter applied via `filter: url(#noise)` on section backgrounds for an analog, premium feel — used by many top-tier agencies:

```html
<svg width="0" height="0" style="position:absolute">
  <filter id="noise">
    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
    <feColorMatrix type="saturate" values="0"/>
    <feBlend in="SourceGraphic" mode="overlay" result="blend"/>
    <feComposite in="blend" in2="SourceGraphic"/>
  </filter>
</svg>
```

Apply with `style={{ filter: 'url(#noise)' }}` on the innermost div of hero. Opacity of the div: `0.02–0.04`. This adds depth without any visible texture at normal viewing distances.

---

## 9. Premium UI Rubric — 12-Point Checklist

Grade each page pass/fail before shipping.

| # | Criterion | Pass | Fail |
|---|-----------|------|------|
| 1 | **One accent color only** | The blue `#2563EB` appears on primary CTAs and active states. No purple, cyan, or green appears decoratively. | Two or more accent colors used in the same component or section. |
| 2 | **Hero headline tightness** | H1 is ≥56px, weight 800, letter-spacing ≤ -0.03em, line-height ≤ 1.1. | H1 is below 48px, or letter-spacing is 0 or positive, or line-height > 1.2. |
| 3 | **No gradient text on primary headlines** | H1 and H2 are solid color. | Any H1 or H2 uses `bg-clip-text` gradient. |
| 4 | **Section rhythm maintained** | Light and dark sections alternate. No two consecutive same-tone sections. | Two light or two dark sections sit directly adjacent. |
| 5 | **Negative space > 120px on section padding** | `py-24 md:py-32` or greater on all major sections. | Any major section uses `py-12` or less as vertical padding. |
| 6 | **Cards use layered shadows, not scale** | Cards hover with shadow-deepening only. No `hover:scale-105`. | Any card lifts, scales, or rotates on hover. |
| 7 | **No emoji in UI** | Zero emoji in rendered UI. SVG or lucide icons only. | Any emoji visible in service cards, CTAs, features, nav. |
| 8 | **Logo mark has zero border-radius** | The vertical rectangle has `border-radius: 0` in every instance. | Logo mark has rounded corners anywhere. |
| 9 | **Icons use strokeWidth 1.5** | All lucide-react icons rendered at `strokeWidth={1.5}`. | Any icon at `strokeWidth={2}` or default in a production component. |
| 10 | **Motion respects `prefers-reduced-motion`** | All GSAP animations gated on `!window.matchMedia('(prefers-reduced-motion: reduce)').matches`. | Animations play regardless of user OS preference. |
| 11 | **Buttons are flat accent fill, not gradient** | Primary CTA is flat `#2563EB` with hover `#1D4ED8`. | Any button uses `from-blue-600 to-purple-600` or multi-color gradient. |
| 12 | **Body copy is max-w-2xl** | No text block runs longer than 672px without a natural break. | Full-width paragraphs spanning > 100ch. |

**Threshold:** A page scoring below 10/12 must be revised before it ships.

---

## 10. Anti-Patterns

These are the specific choices that downgrade a site from "premium" to "generic agency portfolio." Treat this as a blocklist.

| Anti-pattern | Why it reads cheap | Fix |
|--------------|--------------------|-----|
| `from-blue-600 via-purple-600 to-cyan-600` gradient backgrounds | Peaked in 2021. Instantly dates the site. Every "$99 template" uses this. | Use flat `#0A0A0B` dark sections or the subtle same-hue gradient wash only. |
| Emoji icons in service cards (🧩 🤖 📊) | Emoji render differently across OS/browser. Reads like a slide deck, not a product. | Replace with lucide-react icons at `strokeWidth={1.5}` in a small styled container. |
| `hover:scale-105` on cards | Creates a "game store" hover feel. The card "jumps out" rather than responding. | Use shadow deepening: resting `0_1px_3px` → hover `0_8px_24px`. |
| `hover:-translate-y-2` on cards | Over-used pattern from 2020–2022. Has become a visual cliché. | Same as above: shadow only. |
| `animate-pulse` on anything decorative | Pulsing elements signal "loading" to users. Applying it to brand marks or borders reads as unfinished. | Remove. A static element is more confident than an animated one. |
| `rounded-2xl` (16px) on cards | Too casual/bubbly. Reads as mobile app, not premium web. | Use `rounded-[8px]` (8px) for cards, `rounded-[6px]` for buttons. |
| Full-width `bg-clip-text` gradient headlines | Overused. Every "modern" landing page template applies this. It obscures legibility at small sizes. | Solid color headlines. The weight and size do the work. |
| Multiple `blur-3xl` animated blob decorations | "AI startup aesthetic." Zero originality. Distracts from content without adding meaning. | Use precise geometric line art (grid, chart SVGs) instead. |
| Gradient on the footer | Footer is a utility zone. Gradients here are noise. | Flat `#0A0A0B` footer background. |
| `font-black` + colored gradient = headline | Combining maximum weight with a gradient produces a "logo" feeling, not a premium headline. | `font-extrabold` (800) on a solid near-black color, tight tracking. |
| Section heading `text-center` everywhere | Centering every heading flattens hierarchy and reads as template. | Left-align most section headings. Center only the hero and CTA sections. |
| More than 3 navigation items + a CTA | Dense nav signals "we don't know what matters." | Max 4 nav items + 1 primary CTA. Cut the rest to footer. |
| Generic "trusted by" logos with no names | Fake social proof the user can't verify. | Use honest, named case studies with real project names and outcomes. |
| `transition-all duration-300` on complex components | Animating ALL properties is expensive and imprecise. Colors shouldn't transition at the same speed as transforms. | Be specific: `transition-colors duration-150`, `transition-shadow duration-200`. |

---

*Spec authored: 2026-06-02. Revision trigger: any major brand direction change or when reference sites (Linear, Stripe, Vercel) update their design language significantly.*
