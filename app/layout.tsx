import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Geist, Fraunces, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.muzariexports.com'),
  title: "Muzari Farms | Premium Agricultural Produce Exporter from India",
  description:
    "Muzari Farms is a premium fresh produce exporter from India, supplying farm-direct Cavendish bananas, tapioca roots, and fresh vegetables to global buyers. CIF/FOB pricing available.",
  keywords: ["fresh produce exporter India", "farm direct exporter", "Cavendish bananas exporter", "raw tapioca roots supplier", "fresh vegetables export India", "agricultural supply chain", "global fresh produce trade"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Muzari Farms | Premium Agricultural Produce Exporter",
    description: "Farm-direct Cavendish bananas, tapioca, and fresh vegetables from India to global ports.",
    url: 'https://www.muzariexports.com',
    siteName: 'Muzari Farms',
    images: [
      {
        url: '/hero_background.png',
        width: 1200,
        height: 630,
        alt: 'Muzari Farms - Sunlit Agricultural Farm in India',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Muzari Farms | Premium Produce Exporter",
    description: "Farm-direct produce from India to global ports.",
    images: ['/hero_background.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Muzari Farms',
    url: 'https://www.muzariexports.com',
    logo: 'https://www.muzariexports.com/logo/logo-dark.png',
    description: 'Premium fresh produce exporter from India supplying farm-direct Cavendish bananas, tapioca, and fresh vegetables to global buyers.',
    location: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
      }
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '+919747522318',
      contactType: 'sales',
      availableLanguage: ['English', 'Hindi', 'Malayalam']
    },
    offers: {
      '@type': 'Offer',
      itemOffered: [
        {
          '@type': 'Product',
          name: 'Premium Cavendish Bananas',
          description: 'Export grade green Cavendish bananas from India.'
        },
        {
          '@type': 'Product',
          name: 'Raw Tapioca Roots',
          description: 'High-starch premium cassava roots from India.'
        },
        {
          '@type': 'Product',
          name: 'Fresh Vegetables',
          description: 'Farm-fresh export vegetables from India.'
        }
      ]
    }
  };

  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') 
          }}
        />
      </head>
      <body className={`${manrope.variable} ${cormorant.variable} ${fraunces.variable} ${bricolage.variable} antialiased`}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
