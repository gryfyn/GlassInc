// Thin server wrapper: exports page metadata + breadcrumb JSON-LD,
// then renders the interactive client home page (components/HomeClient.js).
import HomeClient from "../components/HomeClient";
import JsonLd, { breadcrumbSchema } from "../components/JsonLd";
import { SITE } from "../lib/site";

export const metadata = {
  // Home uses the default site title from the root template.
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function Page() {
  return (
    <>
      <HomeClient />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />
    </>
  );
}
