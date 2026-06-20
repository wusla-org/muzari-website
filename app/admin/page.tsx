"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AdminShell from "@/components/admin/AdminShell";
import { Sparkles, Package, MessageSquare, Building2, Phone, Image as ImageIcon, ArrowRight } from "lucide-react";
import { products } from "@/lib/site-data";

const QUICK_ACTIONS = [
  {
    href: "/admin/hero",
    icon: Sparkles,
    label: "Edit Hero Content",
    desc: "Update the headline, body text, and buttons on each page",
    iconBg: "bg-[#1c3d1c]/10 text-[#1c3d1c]",
  },
  {
    href: "/admin/products",
    icon: Package,
    label: "Update Products",
    desc: "Edit product names, descriptions, specs, and images",
    iconBg: "bg-[#a8721a]/10 text-[#a8721a]",
  },
  {
    href: "/admin/enquiries",
    icon: MessageSquare,
    label: "View Enquiries",
    desc: "Read messages sent through the contact form",
    iconBg: "bg-[#2a5c2a]/10 text-[#2a5c2a]",
  },
];

const SECONDARY = [
  { href: "/admin/about", icon: Building2, label: "About & Mission" },
  { href: "/admin/contact", icon: Phone, label: "Contact Info" },
  { href: "/admin/media", icon: ImageIcon, label: "Media & Images" },
];

export default function AdminDashboard() {
  const [enquiryCount, setEnquiryCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/admin/enquiries")
      .then((r) => r.json())
      .then((data) => setEnquiryCount(Array.isArray(data) ? data.length : 0))
      .catch(() => setEnquiryCount(0));
  }, []);

  return (
    <AdminShell title="Dashboard">
      {/* Welcome */}
      <div>
        <h2 className="font-[family-name:var(--font-jakarta)] text-2xl font-semibold text-[#2a342a]">
          Welcome back
        </h2>
        <p className="mt-1 text-sm text-[#6a7c65]">
          Use the panel below to update your website content — no developer needed.
        </p>
      </div>

      {/* Sanity Studio banner */}
      <div className="flex items-center justify-between rounded-xl border border-[#a8721a]/30 bg-[#a8721a]/8 px-5 py-4">
        <div>
          <p className="font-[family-name:var(--font-jakarta)] text-sm font-semibold text-[#2a342a]">
            Sanity CMS — product management
          </p>
          <p className="mt-0.5 text-xs text-[#6a7c65]">
            Add, delete, and reorder products with image uploads. Opens in a new tab.
          </p>
        </div>
        <a
          href="https://djntwzcs.sanity.studio"
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-lg bg-[#a8721a] px-4 py-2 font-[family-name:var(--font-jakarta)] text-sm font-medium text-white transition-colors hover:bg-[#8f6015]"
        >
          Open Studio
        </a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-black/[0.08] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <p className="font-[family-name:var(--font-jakarta)] text-xs font-medium uppercase tracking-wide text-[#6a7c65]">
            Enquiries received
          </p>
          <p className="mt-2 font-[family-name:var(--font-jakarta)] text-3xl font-bold text-[#2a342a]">
            {enquiryCount === null ? "—" : enquiryCount}
          </p>
          <Link
            href="/admin/enquiries"
            className="mt-2 inline-flex items-center gap-1 text-xs text-[#a8721a] hover:underline"
          >
            View all <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="rounded-xl border border-black/[0.08] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <p className="font-[family-name:var(--font-jakarta)] text-xs font-medium uppercase tracking-wide text-[#6a7c65]">
            Products listed
          </p>
          <p className="mt-2 font-[family-name:var(--font-jakarta)] text-3xl font-bold text-[#2a342a]">
            {products.length}
          </p>
          <Link
            href="/admin/products"
            className="mt-2 inline-flex items-center gap-1 text-xs text-[#a8721a] hover:underline"
          >
            Manage <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* Quick actions */}
      <div>
        <h3 className="mb-3 font-[family-name:var(--font-jakarta)] text-xs font-semibold uppercase tracking-wide text-[#6a7c65]">
          Most common tasks
        </h3>
        <div className="grid gap-3">
          {QUICK_ACTIONS.map(({ href, icon: Icon, label, desc, iconBg }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center gap-4 rounded-xl border border-black/[0.08] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-md"
            >
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconBg}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-[family-name:var(--font-jakarta)] font-medium text-[#2a342a]">{label}</p>
                <p className="mt-0.5 truncate text-sm text-[#6a7c65]">{desc}</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-[#b8ccb0] transition-transform group-hover:translate-x-0.5 group-hover:text-[#6a7c65]" />
            </Link>
          ))}
        </div>
      </div>

      {/* Secondary links */}
      <div>
        <h3 className="mb-3 font-[family-name:var(--font-jakarta)] text-xs font-semibold uppercase tracking-wide text-[#6a7c65]">
          Other settings
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {SECONDARY.map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              href={href}
              className="flex flex-col items-center gap-2 rounded-xl border border-black/[0.08] bg-white p-4 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-md"
            >
              <Icon className="h-5 w-5 text-[#1c3d1c]" />
              <span className="font-[family-name:var(--font-jakarta)] text-sm font-medium text-[#2a342a]">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}
