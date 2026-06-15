"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const sections = [
  {
    href: "/admin/hero",
    title: "Hero Sections",
    desc: "Edit the headline, body text, and stats shown at the top of each page",
    icon: "🏠",
  },
  {
    href: "/admin/products",
    title: "Products",
    desc: "Update product names, descriptions, specs and upload product images",
    icon: "🌿",
  },
  {
    href: "/admin/about",
    title: "About & Mission",
    desc: "Edit your company story, mission, vision, and values",
    icon: "📖",
  },
  {
    href: "/admin/contact",
    title: "Contact Info",
    desc: "Update phone numbers, email address, and WhatsApp links",
    icon: "📞",
  },
  {
    href: "/admin/media",
    title: "Images & Media",
    desc: "Upload new hero images, product photos, and logo files",
    icon: "🖼️",
  },
];

export default function AdminDashboard() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <div className="min-h-screen bg-[#faf8f3]">
      {/* Top bar */}
      <div className="border-b border-[#e4dfd5] bg-white px-8 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[3px] text-[#7a6b4f]">Muzari Exports</p>
            <h1 className="font-playfair text-xl font-bold text-[#1a1a14]">Content Manager</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              target="_blank"
              className="font-sans text-[11px] uppercase tracking-[1.5px] text-[#7a6b4f] underline underline-offset-4 transition-colors hover:text-[#1a1a14]"
            >
              View Website ↗
            </Link>
            <button
              onClick={handleLogout}
              className="border border-[#e4dfd5] bg-white px-4 py-2 font-sans text-[11px] uppercase tracking-[1.5px] text-[#7a6b4f] transition-all hover:border-[#1a1a14] hover:text-[#1a1a14]"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-8 py-12">
        <p className="mb-8 font-sans text-sm text-[#7a6b4f]">
          Select a section below to edit your website content. All changes are saved instantly and appear live on the website.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex flex-col gap-3 border border-[#e4dfd5] bg-white p-6 transition-all hover:border-[#5a8a3c] hover:shadow-md"
            >
              <span className="text-2xl">{s.icon}</span>
              <div>
                <h2 className="font-playfair text-lg font-bold text-[#1a1a14] transition-colors group-hover:text-[#5a8a3c]">
                  {s.title}
                </h2>
                <p className="mt-1 font-sans text-sm leading-relaxed text-[#7a6b4f]">{s.desc}</p>
              </div>
              <span className="mt-auto font-sans text-[11px] uppercase tracking-[1.5px] text-[#5a8a3c]">
                Edit →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
