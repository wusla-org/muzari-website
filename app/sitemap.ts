import { MetadataRoute } from 'next'

// Live domain is muzari.in for now — switch to muzariexports.com once the old domain expires.
const BASE_URL = 'https://muzari.in'
// const BASE_URL = 'https://www.muzariexports.com'

// Bump each date only when that page's content actually changes —
// a sitemap that claims "updated today" on every build is a stale signal to crawlers.
const LAST_MODIFIED = new Date('2026-06-16')

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/farming`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]
}
