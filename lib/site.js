// Single source of truth for all SEO / NAP (Name, Address, Phone) data.
// Every canonical, Open Graph, sitemap, and JSON-LD URL derives from SITE_URL.
// Change the production domain in ONE place: SITE_URL below.

// TODO(owner): confirm real production domain. This is a placeholder.
export const SITE_URL = "https://glassinc.com";

export const SITE = {
  name: "Glass Inc",
  legalName: "Glass Inc",
  shortName: "Glass Inc",
  tagline: "Clarity. Precision. Innovation.",
  // Concise default description (~155 chars) — local-first.
  description:
    "Glass Inc builds custom software, automation, data dashboards, design & content for small and mid-size businesses across East Africa, the Gulf, and remote worldwide.",
  email: "glassinctechnologies@gmail.com",
  founder: "Griffins Adero",
  founderRole: "Software engineer & founder",
  locale: "en_US",
  lang: "en",
  // Theme color matches the dark accent ink used across the site.
  themeColor: "#0A0E1A",

  // Local-first markets. Primary: East Africa + Gulf. Secondary: remote worldwide.
  areaServed: [
    "East Africa",
    "Kenya",
    "Gulf region",
    "United Arab Emirates",
    "Worldwide (remote)",
  ],

  // TODO(owner): add real social profile URLs as they go live.
  // Empty/unknown links are intentionally omitted from sameAs JSON-LD.
  social: {
    // linkedin: "https://www.linkedin.com/company/glassinc",
    // x: "https://x.com/glassinc",
    // github: "https://github.com/glassinc",
  },
};

// Absolute URL helper — always derive links from SITE_URL.
export const absoluteUrl = (path = "") =>
  `${SITE_URL.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;

// sameAs array for JSON-LD: only real, non-empty URLs.
export const sameAs = Object.values(SITE.social).filter(Boolean);

// Canonical route list — single source for sitemap + nav-derived schema.
export const ROUTES = [
  { path: "/", changeFrequency: "monthly", priority: 1.0, name: "Home" },
  { path: "/services", changeFrequency: "monthly", priority: 0.9, name: "Services" },
  { path: "/about", changeFrequency: "monthly", priority: 0.8, name: "About" },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7, name: "Contact" },
];
