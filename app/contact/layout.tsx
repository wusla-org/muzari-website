import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Muzari Exports | Start Your Export Inquiry from Kerala, India",
  description:
    "Get in touch with Muzari Exports for bulk produce inquiries, export partnerships, and sourcing queries. Farm-direct bananas, tapioca and vegetables shipped from Kerala, India worldwide.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
