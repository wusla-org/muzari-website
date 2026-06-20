"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Sparkles,
  Package,
  Building2,
  Phone,
  Image as ImageIcon,
  MessageSquare,
  LogOut,
  ExternalLink,
} from "lucide-react";

const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/hero", label: "Hero Sections", icon: Sparkles },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/about", label: "About & Mission", icon: Building2 },
  { href: "/admin/contact", label: "Contact Info", icon: Phone },
  { href: "/admin/media", label: "Media & Images", icon: ImageIcon },
  { href: "/admin/enquiries", label: "Enquiries", icon: MessageSquare },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  function isActive(item: (typeof NAV_ITEMS)[0]) {
    if (item.exact) return pathname === item.href;
    return pathname?.startsWith(item.href) ?? false;
  }

  return (
    <aside className="flex h-screen w-60 shrink-0 flex-col bg-[#1c3d1c]">
      {/* Brand */}
      <div className="border-b border-[#2d4a2d] bg-[#152e15] px-5 py-5">
        <p className="font-[family-name:var(--font-jakarta)] text-[10px] uppercase tracking-[3px] text-[#7fa87f]">
          Muzari Exports
        </p>
        <p className="mt-0.5 font-[family-name:var(--font-jakarta)] text-sm font-semibold text-[#e8f4e0]">
          Content Manager
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-2 py-4">
        <ul className="space-y-0.5">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item);
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 text-sm font-medium transition-colors ${
                    active
                      ? "rounded-r-lg border-l-[3px] border-[#a8721a] bg-[#2a5c2a] py-2.5 pl-[9px] pr-3 text-[#e8f4e0]"
                      : "rounded-lg px-3 py-2.5 text-[#b8ccb0] hover:bg-[#243f24] hover:text-[#e8f4e0]"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="space-y-0.5 border-t border-[#2d4a2d] px-2 py-3">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#b8ccb0] transition-colors hover:bg-[#243f24] hover:text-[#e8f4e0]"
        >
          <ExternalLink className="h-4 w-4 shrink-0" />
          View Website
        </Link>
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#b8ccb0] transition-colors hover:bg-red-900/30 hover:text-red-300"
        >
          <LogOut className="h-4 w-4 shrink-0" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
