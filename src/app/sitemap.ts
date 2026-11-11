import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import { projects } from "@/config/projects";
import { blogPosts } from "@/config/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();
  const staticRoutes = ["", "/about", "/services", "/portfolio", "/industries", "/team", "/blog", "/contact"].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
  return [
    ...staticRoutes,
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, lastModified: now, priority: 0.7 })),
    ...projects.map((p) => ({ url: `${base}/portfolio/${p.slug}`, lastModified: now, priority: 0.7 })),
    ...blogPosts.map((b) => ({ url: `${base}/blog/${b.slug}`, lastModified: new Date(b.date), priority: 0.6 })),
  ];
}
