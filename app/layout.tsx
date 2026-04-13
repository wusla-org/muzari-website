import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import SchemaOrg from "@/components/SchemaOrg";

const manrope = Manrope({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://muzariexports.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muzari Exports | Kerala's Finest Export Partner",
    template: "%s | Muzari Exports",
  },
  description:
    "Premium Kerala Tapioca and Nendran Banana exports to 35+ countries. ISO-certified, Global GAP compliant. B2B bulk sourcing from Kerala's agricultural heartland.",
  keywords: [
    "Kerala exports",
    "Tapioca export",
    "Nendran banana export",
    "cassava export India",
    "India produce export",
    "B2B agriculture",
    "bulk banana export",
    "organic tapioca starch",
    "Kerala agricultural products",
    "Wayanad bananas",
    "food grade cassava",
    "cold chain produce export",
  ],
  icons: {
    icon: "/logo/muzari-logo-mark.png",
    shortcut: "/favicon.ico",
    apple: "/logo/muzari-logo-mark.png",
  },
  openGraph: {
    title: "Muzari Exports | Kerala's Finest Export Partner",
    description:
      "Premium Kerala Tapioca and Nendran Banana exports to 35+ countries. ISO-certified, Global GAP compliant.",
    type: "website",
    locale: "en_US",
    siteName: "Muzari Exports",
    images: [
      {
        url: "/logo/muzari-logo-full.png",
        width: 2240,
        height: 980,
        alt: "Muzari Exports — Kerala's premium agricultural exporter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muzari Exports | Kerala's Finest Export Partner",
    description:
      "Premium Kerala Tapioca and Nendran Banana exports. ISO-certified, 35+ countries.",
    images: [
      {
        url: "/logo/muzari-logo-full.png",
        alt: "Muzari Exports",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Muzari Exports",
  url: siteUrl,
  logo: `${siteUrl}/logo/muzari-logo-full.png`,
  description:
    "Kerala-based premium agricultural exporter of Tapioca and Nendran Bananas to 35+ countries worldwide.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: ["English", "Malayalam"],
  },
  knowsAbout: [
    "Tapioca Export",
    "Nendran Banana Export",
    "Kerala Agriculture",
    "Cassava Processing",
    "Cold Chain Logistics",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Muzari Exports",
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="bg-surface font-body text-on-surface antialiased">
        {children}
        <SchemaOrg data={organizationSchema} />
        <SchemaOrg data={websiteSchema} />
      </body>
    </html>
  );
}
