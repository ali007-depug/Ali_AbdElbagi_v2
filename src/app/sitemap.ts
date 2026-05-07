import { MetadataRoute } from "next";

const baseUrl = "https://ali-abd-elbagi-v2.vercel.app";

const locales = ["en-US","ar"]; 

const routes = [
  "",
  "/about",
  "/works",
  "/skills",
  "/blog",
  "/blog/how-browsers-works",
  "/blog/web-performance",
  "/blog/about-work-and-hope",
  "/blog/tags/Web-Development",
  "/blog/tags/Performance",
  "/blog/tags/Advices",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = [];

  for (const locale of locales) {
    for (const route of routes) {
      urls.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
      });
    }
  }

  return urls;
}
