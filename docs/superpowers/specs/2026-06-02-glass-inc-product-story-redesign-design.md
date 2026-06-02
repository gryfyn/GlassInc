# Glass Inc — "Product Story" Redesign (v2)

> Design spec. Status: **awaiting user review**. Date: 2026-06-02.
> Reference tier: Linear · Stripe · Apple · Vercel. Stack: Next.js 14 App Router · Tailwind v3 · Inter · lucide-react · GSAP.

---

## 1. Problem

The current site is technically clean but reads as a **generic B2B agency template**: a centered hero on a dotted background, a small "3+ / 1 / 24h" proof strip, a dark services grid, a light 3-card work grid, a dark CTA. Nothing makes a visitor stop. The "logo" is a blue rectangle outline; projects use small procedural `ProjectCover` graphics rather than product imagery.

The owner (Griffins Adero, solo founder) needs the site to **attract high-value clients on sight** — to read "serious software company" within 3 seconds, then prove it on scroll. The existing `docs/design-system.md` is good but built on *restraint*; restraint done generically looks like a template. This redesign keeps the brand's hard rules but pushes hard on **scale, motion, layout asymmetry, and real product imagery**.

## 2. Approved decisions (locked with user)

- **Direction:** "Product Story" — asymmetric, product-forward hero; real-looking dashboard mockups behind a Linear-style accent glow; scroll-driven storytelling.
- **Ambition:** Bold & distinctive (Awwwards-tier feel) — but **solo-maintainable**. No 3D / WebGL / Spline. No custom-cursor-as-blob.
- **Scope:** All four pages (Home, Services, About, Contact) + shared Header/Footer. **Homepage is the rubric** — its hero, mockups, motion, and type scale define the language; the other pages adopt it.
- **Copy:** Remove the homepage "honest proof strip" (3+/1/24h). **Visible copy is worldwide-only — no geographic references in the rendered site.**
- **SEO:** **Leave existing SEO/metadata untouched for now** (it keeps East Africa / Kenya / Gulf + remote keywords). Owner's real primary targets are **UAE, USA, East Africa**, so the geo keywords stay working quietly in the background while the visible design reads worldwide. (Deliberate split: invisible SEO targets markets, visible copy stays clean.)
- **Logo:** No real distinct logo file exists. `favicon.jpg` is a flat JPEG of the same blue rectangle (white background, would show an ugly box on dark sections). Decision: **keep the vector `GlassLogo` "glass pane" mark** as the brand mark and refine the wordmark lockup; keep `favicon.jpg` only as the browser-tab favicon. A real logo, if ever designed, drops in via `<Brand>`.

## 3. Brand invariants (must not change)

1. **One accent only:** `#2563EB` (light) / `#60A5FA` (dark). No second accent, no rainbow gradients, no gradient `bg-clip-text` on headings. Depth comes from **accent-only radial glows + grayscale**, never a second hue.
2. **Inter only.** Hierarchy via size/weight/tracking.
3. **Sharp corners on brand/product frames.** Logo mark and `ProductFrame` use `border-radius: 0`. Buttons stay 6px, cards 8px (existing system).
4. **lucide-react at `strokeWidth={1.5}`. Never emoji.**
5. **Honest copy.** No invented metrics, fake team, or fake testimonials.
6. **Motion respects `prefers-reduced-motion`.** All GSAP gated (existing `useScrollReveal` already does this).
7. Tagline kept: **"Clarity. Precision. Innovation."**

## 4. New shared components

All are confidential-safe — they depict "a real system" built from Glass Inc's own design tokens, exposing no client data.

### 4.1 `<ProductFrame>` — `components/ProductFrame.js`
Sharp-cornered app/browser window container that everything visual sits in.
- Thin top bar (1px border `#1E1E22` on dark / `#E4E4E8` on light), optional faux address/title slot, **no rounded corners**.
- A soft **accent radial glow** rendered behind it: `radial-gradient(closest-side, rgba(37,99,235,0.20), transparent)` — accent-only, low opacity. On dark sections use the `#60A5FA` tint.
- Props: `tone` ("dark" | "light"), `glow` (bool), `label` (string for the top bar), `className`, `children`.
- Pure CSS/SVG, no JS dependency.

### 4.2 `<DashboardMock>` — `components/DashboardMock.js`
A **fictional-but-realistic** dashboard built only from tokens (grays + the one accent): left nav rail, top stat-card row, one line/bar chart, a data table with a few rows, a status pill. This is the **hero visual** and the Operations case-study visual.
- Variants: `variant="operations"` (ops/records flavor), `variant="analytics"` (chart-forward). Both share the same primitives.
- Static SVG/HTML; no live data, no real client content. Clearly "a product," reveals nothing sensitive.

### 4.3 `<SystemDiagram>` — `components/SystemDiagram.js`
lucide line-art flow for the healthcare project: **Intake → Scheduling → Staff → Reporting** nodes connected by thin accent lines, on-brand (lucide @1.5). One subtle traveling-node animation (reuse existing `bp-travel` CSS), gated on reduced-motion. Reveals nothing confidential.

### 4.4 `useMagnetic` hook + magnetic primary CTA — `components/useMagnetic.js`
Subtle magnetic pull (strength ~0.2, max offset ~8px, spring back on leave) applied to **exactly one** CTA — the homepage hero/closing "Start a project" / "Book a free call" button. Desktop + pointer:fine only; disabled on touch and under reduced-motion. Every other button stays static.

### 4.5 `<GrainOverlay>` — `components/GrainOverlay.js`
Fixed SVG `feTurbulence` noise at **2–4% opacity**, `mix-blend-mode: overlay`, on dark sections only. Adds "film" depth without color. `pointer-events-none`, `aria-hidden`.

### 4.6 Hero parallax
The hero `<ProductFrame>` translates ≤40px on scroll via GSAP ScrollTrigger `scrub`. Decorative only, gated on reduced-motion. Added inside the homepage (or a small `useHeroParallax` hook) — not in `useScrollReveal` (which stays generic).

## 5. Type scale & token additions

Keep existing `t-display/t-h1/t-h2/t-h3` and `glass.*` tokens. Additions:
- **Display-XL utility** for the homepage hero only: `clamp(56px, 9vw, 132px)`, weight 800, tracking `-0.04em`, line-height 0.95. New class `.t-display-xl` in `globals.css`. (Hero headline jumps bigger than the current 80px cap — this is the "bold" lever.)
- **Mono-ish eyebrow** for numbered section labels: reuse `.t-eyebrow` but introduce a numbered pattern `01 — SERVICES` (plain Inter, tracked, accent). No new font.
- **Glow utility** `.glow-accent` (the radial-gradient above) for reuse behind frames.
- One-time hero **word-reveal** (CSS keyframe `word-in`, already specced in design-system §7) for the headline.

No new fonts. No second accent token.

## 6. Page-by-page

### 6.1 Home — `app/page.js` (the rubric)
1. **Hero (dark, asymmetric split):** left column — eyebrow `01 — SOFTWARE STUDIO`, `.t-display-xl` headline "We build software that runs your business." (word-reveal on load), 18px subtext, two CTAs (primary = the magnetic one). Right column — `<ProductFrame tone="dark" glow label="operations">` wrapping `<DashboardMock variant="operations">`, with hero parallax. `<GrainOverlay>` on the section. Replaces the centered/dotted hero entirely.
2. **Positioning strip (light):** oversized tracked typographic line stating the worldwide/remote positioning (no geography). Replaces the deleted proof strip.
3. **Services (dark or light per rhythm):** keep the 7 services + lucide icons; upgrade cards (tighter type, `group-hover` accent on icon + title, staggered reveal). Content unchanged.
4. **Selected work (alternating splits):** the 3 projects become **large alternating rows** (visual one side, problem→solution copy + outcome the other):
   - Resident Treatment Facility Management System → `<SystemDiagram>`.
   - Business Operations Management System → `<ProductFrame>` + `<DashboardMock variant="operations">`.
   - Third → intentional **"in progress"** framed placeholder with a subtle accent shimmer (not an empty card). Copy: reserved for the next build.
5. **Process strip (new, light):** 3 steps — **Talk → Build → Deliver** — short credibility chapter. lucide icons, no fake metrics.
6. **Closing CTA (dark):** keep the free-consultation offer; primary CTA is the magnetic button; "Clarity. Precision. Innovation." set large. `<GrainOverlay>`.

Section rhythm alternates dark/light throughout (no two same-tone adjacent).

### 6.2 Services — `app/(pages)/services/page.js`
Adopt the language: hero becomes an asymmetric split with a `<ProductFrame>`/`<DashboardMock variant="analytics">` visual; keep all 7 service cards + pills (content unchanged) but apply the upgraded card + numbered-eyebrow treatment and stagger. Closing CTA matches home.

### 6.3 About — `app/(pages)/about/page.js`
Keep the founder profile (Griffins Adero, `/assets/griffin.jpg`, quote) — **content stays**. Apply the new hero/type treatment and section rhythm. The "What's real right now" honest items stay (they're honest, not inflated) but lose any geographic phrasing. No fake team.

### 6.4 Contact — `app/(pages)/contact/page.js`
Keep the working brief form and mailto behavior (don't break functionality). Apply hero/type/section upgrades. Scrub any geographic phrasing → worldwide/remote only (the existing "Remote-first / We work worldwide" copy is fine). Keep the availability dot.

### 6.5 Header — `components/Header.js`
Keep sticky + scroll behavior. Swap `GlassLogo` for the real logo image once supplied (a small `<Brand>` that renders the image with correct height; falls back to `GlassLogo` if the file is absent). Nav unchanged (4 items + 1 CTA).

### 6.6 Footer — `components/Footer.js`
Keep structure and copy (already on-message: "Direct. Honest. Delivered." / "Clarity. Precision. Innovation."). Swap in the real logo. Remove any geographic phrasing if present (currently none).

## 7. SEO / metadata — leave as-is (this round)

**No SEO changes in this redesign.** The geographic keywords in `lib/site.js` (`description`, `areaServed`), `app/layout.js` (`keywords`), and `components/JsonLd.js` stay exactly as they are — they target the owner's real markets (UAE, USA, East Africa) and there's no benefit to removing them. The "worldwide-only" decision applies to **visible/rendered copy only**: the redesigned pages must not display East Africa / Gulf / specific-region phrasing. Invisible metadata and visible design are intentionally decoupled.

## 8. Logo / brand mark

No real distinct logo file exists, and the `favicon.jpg` is a flat white-background JPEG of the same rectangle (unusable as a header mark — white box on dark, blurry when scaled). Decision:
- **Keep the vector `GlassLogo` "glass pane" mark** as the canonical brand mark (sharp corners, one accent — already on-brand).
- Introduce a `<Brand>` lockup component (used by Header + Footer) that pairs the refined `GlassLogo` with the "Glass Inc" wordmark and a premium sub-label, with an `onDark` variant. This centralizes the lockup and is the single seam where a real logo image would later drop in.
- `favicon.jpg` stays **only** as the browser-tab favicon in `app/layout.js` (the one place a flat jpg is acceptable). No other changes to favicon wiring this round.

## 9. Out of scope

- Backend / CMS / real form submission (mailto flow stays).
- 3D / WebGL / custom cursor blobs.
- A second typeface or second accent color.
- Inventing metrics, clients, or team members.

## 10. Risks & mitigations

- **Mockup realism:** a weak `<DashboardMock>` undercuts the whole pitch. Mitigation: build it from real tokens with genuine-looking density; iterate on it first since it's reused everywhere.
- **Motion jank on mobile:** parallax/magnetic can stutter. Mitigation: desktop/pointer-fine only, conservative values, reduced-motion gating, `once: true` reveals.
- **Brand drift toward "more":** bold can tip into busy. Mitigation: the §3 invariants are the guardrail; one accent, one magnetic button, grain ≤4%, glow accent-only.
- **Logo dependency:** redesign shouldn't block on it. Mitigation: `<Brand>` fallback.

## 11. Implementation phases (for the plan)

1. **Foundation:** `globals.css` additions (`.t-display-xl`, `.glow-accent`, word-reveal), token/util prep. (No SEO changes — see §7.)
2. **Core components:** `ProductFrame`, `DashboardMock`, `SystemDiagram`, `useMagnetic`, `GrainOverlay`, hero parallax, `<Brand>`.
3. **Homepage (rubric):** rebuild `app/page.js` section by section.
4. **Propagate:** Services, About, Contact, Header, Footer adopt the language.
5. **Logo wiring** (when file lands) + favicon.
6. **Verification:** run dev server, check each page light/dark rhythm, reduced-motion, mobile, and the §3 invariants / design-system §9 rubric.

## 12. Open items — resolved

- **Logo:** resolved — no real file; keep the vector `GlassLogo` mark, refine the lockup via `<Brand>` (§8).
- **SEO:** resolved — leave metadata untouched; worldwide-only applies to visible copy only (§7). Real targets: UAE, USA, East Africa.
