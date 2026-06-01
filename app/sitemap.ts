import type { MetadataRoute } from "next";

const siteUrl = "https://www.sentrarisksystems.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/xero-fraud-detection",
    "/supplier-fraud-detection",
    "/accountants",
    "/privacy-policy",
    "/terms-of-service",
    "/security-statement",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
