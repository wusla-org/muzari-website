"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigationLinks } from "@/lib/site-data";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-500",
        isScrolled || mobileOpen
          ? "bg-white/95 py-3 shadow-xl shadow-green-950/5 backdrop-blur-xl border-b border-green-50"
          : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto flex w-[min(1280px,calc(100%-2rem))] items-center justify-between px-4">
        {/* Logo — fixed height, generous width, never shrinks */}
        <Link
          href="/"
          className="relative flex-shrink-0 h-10 w-36 sm:h-12 sm:w-44 transition-transform hover:scale-105 active:scale-95"
        >
          <Image
            src={(isScrolled || mobileOpen) ? "/logo/logo-dark.png" : "/logo/logo-light.png"}
            alt="Muzari Farms"
            fill
            className="object-contain object-left"
            priority
            sizes="(max-width: 640px) 144px, 176px"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "relative font-label text-[10px] font-black uppercase tracking-[0.3em] transition-all",
                  isScrolled ? "text-green-950/70" : "text-white/80",
                  "hover:text-amber-500",
                  isActive && (isScrolled ? "text-green-950" : "text-white")
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-amber-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right side: CTA + mobile hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={cn(
              "hidden md:inline-flex rounded-full px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95",
              isScrolled
                ? "bg-green-900 text-white shadow-lg shadow-green-900/20 hover:bg-green-800"
                : "bg-white/10 text-white backdrop-blur-md ring-1 ring-white/30 hover:bg-white/20"
            )}
          >
            Export Inquiry
          </Link>

          {/* Mobile hamburger */}
          <button
            className="flex md:hidden h-10 w-10 items-center justify-center rounded-full transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={cn(
              "relative flex h-5 w-6 flex-col justify-between transition-all",
            )}>
              <span className={cn(
                "block h-0.5 w-full rounded-full transition-all duration-300",
                isScrolled || mobileOpen ? "bg-green-950" : "bg-white",
                mobileOpen && "translate-y-2 rotate-45"
              )} />
              <span className={cn(
                "block h-0.5 w-full rounded-full transition-all duration-300",
                isScrolled || mobileOpen ? "bg-green-950" : "bg-white",
                mobileOpen && "opacity-0"
              )} />
              <span className={cn(
                "block h-0.5 w-full rounded-full transition-all duration-300",
                isScrolled || mobileOpen ? "bg-green-950" : "bg-white",
                mobileOpen && "-translate-y-2 -rotate-45"
              )} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-500",
        mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <nav className="flex flex-col gap-1 px-6 pb-6 pt-2">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "py-3 font-label text-xs font-black uppercase tracking-[0.3em] text-green-950 border-b border-green-50 transition-colors hover:text-amber-600",
                pathname === link.href && "text-amber-600"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 rounded-full bg-green-900 py-3 text-center text-[10px] font-black uppercase tracking-[0.2em] text-white"
          >
            Export Inquiry
          </Link>
        </nav>
      </div>
    </header>
  );
}
