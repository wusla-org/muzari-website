import type { Metadata } from "next";
import { Nunito, Plus_Jakarta_Sans, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// Nunito — rounded, warm display font for headings
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Plus Jakarta Sans — clean rounded geometric for labels & UI
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// DM Sans — slightly rounded, highly readable for body text
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

// Playfair Display — elegant serif for client-approved hero headlines
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.muzariexports.com'),
  title: "Muzari Exports | Premium Agricultural Produce Exporter from Kerala, India",
  description:
    "Muzari Exports is a premium fresh produce exporter from Kerala, India — supplying farm-direct Robusta & Nethra bananas, tapioca roots, and fresh vegetables to global buyers for 95+ years. CIF/FOB pricing available.",
  keywords: [
    "fresh produce exporter India",
    "Kerala agricultural exporter",
    "banana exporter Kerala India",
    "tapioca exporter India",
    "farm direct produce exporter",
    "Cavendish banana exporter",
    "fresh vegetables export India",
    "agricultural produce Kerala",
    "South India produce export",
    "global fresh produce trade",
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Muzari Exports | Premium Agricultural Produce from Kerala, India",
    description: "Farm-direct bananas, tapioca, and fresh vegetables from Kerala, India to global ports. 95+ years of agricultural heritage.",
    url: 'https://www.muzariexports.com',
    siteName: 'Muzari Exports',
    images: [
      {
        url: '/hero_background.png',
        width: 1200,
        height: 630,
        alt: 'Muzari Exports - Agricultural Farm in Kerala, India',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Muzari Exports | Kerala's Premium Produce Exporter",
    description: "Farm-direct bananas, tapioca & vegetables from Kerala, India to global ports.",
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
    name: 'Muzari Exports',
    url: 'https://www.muzariexports.com',
    logo: 'https://www.muzariexports.com/logo/logo-dark.png',
    description: 'Premium fresh produce exporter from Kerala, India — supplying farm-direct bananas, tapioca roots, and fresh vegetables to global buyers for 95+ years.',
    location: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kerala',
        addressRegion: 'KL',
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
    <html lang="en" className={cn("font-sans", dmSans.variable, nunito.variable, jakarta.variable, playfair.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') 
          }}
        />
      </head>
      <body className={`${nunito.variable} ${jakarta.variable} ${dmSans.variable} ${playfair.variable} antialiased`}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
