import { ROUTES, absoluteUrl } from "../lib/site";

export default function sitemap() {
  const now = new Date();
  return ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
