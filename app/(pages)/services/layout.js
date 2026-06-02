import JsonLd, { breadcrumbSchema, servicesSchema } from "../../../components/JsonLd";
import { SITE } from "../../../lib/site";

const SERVICE_NAMES = [
  "Custom software development",
  "Business automation & AI",
  "Data analytics & dashboards",
  "Web & mobile development",
  "Graphic design & UI/UX",
  "Digital marketing & SEO",
  "Photo & video content",
];

export const metadata = {
  title: "Services — Software, Automation & Data",
  description:
    "Custom software, automation & AI, data dashboards, web & mobile, design, SEO and content — one team for East Africa, the Gulf & remote-first businesses.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: `Services | ${SITE.name}`,
    description:
      "Custom software, automation & AI, data dashboards, web & mobile, design, SEO and content — handled end to end by one team.",
    url: "/services",
  },
};

export default function ServicesLayout({ children }) {
  return (
    <>
      {children}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <JsonLd data={servicesSchema(SERVICE_NAMES)} />
    </>
  );
}
