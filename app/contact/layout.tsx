import type { Metadata } from "next";

// Live domain is muzari.in for now — switch to muzariexports.com once the old domain expires.
const BASE_URL = "https://muzari.in";
// const BASE_URL = "https://www.muzariexports.com";

export const metadata: Metadata = {
  title: "Contact Muzari Exports | Start Your Export Inquiry from Kerala, India",
  description:
    "Get in touch with Muzari Exports for bulk produce inquiries, export partnerships, and sourcing queries. Farm-direct bananas, tapioca and vegetables shipped from Kerala, India worldwide.",
  alternates: { canonical: "/contact" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${BASE_URL}/contact` },
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
