// Reusable JSON-LD injector + schema.org builders.
// All URLs derive from lib/site.js (single source of truth).
import { SITE, SITE_URL, absoluteUrl, sameAs } from "../lib/site";

// Renders a <script type="application/ld+json"> with the given object/array.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // Schema is server-rendered into the HTML so crawlers see it.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization / ProfessionalService — site-wide identity.
export const organizationSchema = () => {
  const org = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE_URL,
    email: SITE.email,
    description: SITE.description,
    slogan: SITE.tagline,
    logo: absoluteUrl("/assets/favicon.jpg"),
    image: absoluteUrl("/opengraph-image"),
    areaServed: SITE.areaServed,
    founder: {
      "@type": "Person",
      name: SITE.founder,
      jobTitle: SITE.founderRole,
    },
    knowsAbout: [
      "Custom software development",
      "Business automation",
      "Artificial intelligence",
      "Data analytics",
      "Web and mobile development",
      "UI/UX design",
      "Digital marketing and SEO",
    ],
  };
  if (sameAs.length) org.sameAs = sameAs;
  return org;
};

// WebSite schema. SearchAction intentionally omitted — site has no search.
export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE.name,
  description: SITE.description,
  inLanguage: SITE.lang,
  publisher: { "@id": `${SITE_URL}/#organization` },
});

// BreadcrumbList — pass array of { name, path }.
export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

// Service catalogue (OfferCatalog) for the services page.
export const servicesSchema = (services) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Software & digital services",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: SITE.areaServed,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Glass Inc services",
    itemListElement: services.map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
});
