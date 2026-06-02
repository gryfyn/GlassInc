import JsonLd, { breadcrumbSchema } from "../../../components/JsonLd";
import { SITE } from "../../../lib/site";

export const metadata = {
  title: "About — Founder-Led Software Studio",
  description:
    "Glass Inc is a founder-led software studio led by Griffins Adero, building custom software, automation and data tools for businesses in East Africa, the Gulf & remote.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About | ${SITE.name}`,
    description:
      "Founder-led software studio building custom software, automation and data tools for SMEs across East Africa, the Gulf, and remote worldwide.",
    url: "/about",
  },
};

export default function AboutLayout({ children }) {
  return (
    <>
      {children}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
    </>
  );
}
