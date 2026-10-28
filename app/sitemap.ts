import type { MetadataRoute } from "next";

const siteUrl = "https://www.sentrarisksystems.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/xero-fraud-detection",
    "/supplier-fraud-detection",
    "/accountants",
    "/pilot-programme",
    "/services",
    "/industries",
    "/industries/accounting-practices",
    "/industries/invoice-heavy-smes",
    "/industries/multi-location-businesses",
    "/industries/motor-dealerships",
    "/trust",
    "/privacy-policy",
    "/cookie-policy",
    "/terms-of-service",
    "/eula",
    "/data-processing",
    "/refund-policy",
    "/security-statement",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
