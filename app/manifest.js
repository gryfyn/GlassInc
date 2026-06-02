import { SITE } from "../lib/site";

export default function manifest() {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: SITE.themeColor,
    theme_color: SITE.themeColor,
    icons: [
      {
        src: "/assets/favicon.jpg",
        sizes: "any",
        type: "image/jpeg",
      },
    ],
  };
}
