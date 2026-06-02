import JsonLd, { breadcrumbSchema } from "../../../components/JsonLd";
import { SITE } from "../../../lib/site";

export const metadata = {
  title: "Contact — Start a Project",
  description:
    "Talk directly to the builder. Email Glass Inc to start a custom software, automation, data or design project. Serving East Africa, the Gulf & remote worldwide.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${SITE.name}`,
    description:
      "Talk directly to the builder. Start a custom software, automation, data or design project with Glass Inc.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }) {
  return (
    <>
      {children}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
    </>
  );
}
