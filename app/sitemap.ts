import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/case-study-fastreview.html", priority: 0.8 },
    { path: "/case-study-starise-ai.html", priority: 0.8 },
    { path: "/case-study-urbanpoint.html", priority: 0.8 },
    { path: "/legal.html", priority: 0.3 },
    { path: "/privacy.html", priority: 0.3 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
