import { MetadataRoute } from 'next'

// Live domain is muzari.in for now — switch to muzariexports.com once the old domain expires.
const BASE_URL = 'https://muzari.in'
// const BASE_URL = 'https://www.muzariexports.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
