import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://ali-abd-elbagi-v2.vercel.app/en-US/sitemap.xml',
  }
}
