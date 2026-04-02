import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Muzari Exports | Kerala's Finest Export Partner",
  description:
    "Bridging Kerala's lush plantations with global markets. Premium Tapioca and Nendran Banana exports with ISO-certified quality.",
  icons: {
    icon: "/logo/muzari-logo-mark.png",
    shortcut: "/favicon.ico",
    apple: "/logo/muzari-logo-mark.png",
  },
  keywords: [
    "Kerala exports",
    "Tapioca export",
    "Nendran banana",
    "India produce export",
    "B2B agriculture",
  ],
  openGraph: {
    title: "Muzari Exports | Kerala's Finest Export Partner",
    description:
      "Premium Tapioca and Banana exports from Kerala to global markets.",
    type: "website",
    images: [
      {
        url: "/logo/muzari-logo-full.png",
        width: 2240,
        height: 980,
        alt: "Muzari Exports logo",
      },
    ],
  },
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
      </body>
    </html>
  );
}
