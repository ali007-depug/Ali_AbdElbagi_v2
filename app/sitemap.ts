import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ali-abd-elbagi-v2.vercel.app/en-US'
  
  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/works`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/skills`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/blog/how-browsers-works`, lastModified: new Date(), priority: 0.64 },
    { url: `${baseUrl}/blog/web-performance`, lastModified: new Date(), priority: 0.64 },
    { url: `${baseUrl}/blog/about-work-and-hope`, lastModified: new Date(), priority: 0.64 },
    { url: `${baseUrl}/blog/tags/Web-Development`, lastModified: new Date(), priority: 0.64 },
    { url: `${baseUrl}/blog/tags/Performance`, lastModified: new Date(), priority: 0.64 },
    { url: `${baseUrl}/blog/tags/Advices`, lastModified: new Date(), priority: 0.64 },
  ]
}