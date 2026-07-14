import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content/site";

export const dynamic = "force-static";

const routes = [
  "",
  "/programs",
  "/admissions",
  "/admissions/apply",
  "/admissions/apply/thank-you",
  "/parent-consultation",
  "/parents",
  "/scholarships",
  "/relations",
  "/relations/sponsorship",
  "/relations/partnerships",
  "/locations",
  "/trust-and-safety",
  "/enquiry",
  "/news",
  "/success-stories",
  "/careers",
  "/careers/roles",
  "/admissions-advisor",
  "/privacy",
  "/terms",
  "/safeguarding",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
