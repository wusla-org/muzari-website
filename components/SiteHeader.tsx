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
          ? "bg-white/90 py-1 shadow-2xl shadow-green-950/5 backdrop-blur-2xl border-b border-green-950/5"
          : "bg-transparent py-2"
      )}
    >
      <div className="mx-auto flex w-[min(1440px,calc(100%-2rem))] items-center justify-between px-6">
        {/* Logo — Force-zoomed and Digitally Cropped */}
        <Link
          href="/"
          className="relative flex-shrink-0 h-20 w-48 sm:h-24 sm:w-64 overflow-hidden flex items-center group"
        >
          <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo/logo-dark.png"
              alt="Muzari Farms"
              fill
              className="object-contain object-left scale-[2.2] origin-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "group relative font-label text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-300",
                  "text-green-950/70 hover:text-green-950",
                  isActive && "text-green-950"
                )}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {link.label}
                  {isActive && <div className="h-1.5 w-1.5 rounded-full bg-[#82E076] animate-pulse" />}
                </span>
                <span className={cn(
                  "absolute -bottom-2 left-0 h-0.5 rounded-full bg-[#82E076] transition-all duration-300",
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            );
          })}
        </nav>

        {/* Right side: CTA + mobile hamburger */}
        <div className="flex items-center gap-6">
          <Link
            href="/contact"
            className={cn(
              "hidden md:inline-flex rounded-2xl px-10 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-amber-500/20",
              "bg-amber-400 text-green-950 hover:bg-amber-300"
            )}
          >
            Export Inquiry
          </Link>

          {/* Mobile hamburger */}
          <button
            className="flex md:hidden h-10 w-10 items-center justify-center rounded-full bg-green-950/5 transition-colors hover:bg-green-950/10"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="relative flex h-4 w-6 flex-col justify-between">
              <span className={cn(
                "block h-0.5 w-full rounded-full bg-green-950 transition-all duration-300",
                mobileOpen && "translate-y-1.5 rotate-45"
              )} />
              <span className={cn(
                "block h-0.5 w-full rounded-full bg-green-950 transition-all duration-300",
                mobileOpen && "opacity-0"
              )} />
              <span className={cn(
                "block h-0.5 w-full rounded-full bg-green-950 transition-all duration-300",
                mobileOpen && "-translate-y-1.5 -rotate-45"
              )} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-500 bg-white/95 backdrop-blur-xl",
        mobileOpen ? "max-h-96 border-t border-green-50 shadow-2xl" : "max-h-0"
      )}>
        <nav className="flex flex-col gap-1 px-8 pb-10 pt-4">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "py-4 font-label text-xs font-black uppercase tracking-[0.3em] text-green-950/70 border-b border-green-50 transition-colors hover:text-green-950",
                pathname === link.href && "text-green-950 font-black"
              )}
            >
              <div className="flex items-center justify-between">
                {link.label}
                {pathname === link.href && <div className="h-1.5 w-1.5 rounded-full bg-[#82E076]" />}
              </div>
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-6 rounded-2xl bg-amber-400 py-4 text-center text-[10px] font-black uppercase tracking-[0.2em] text-green-950 shadow-xl shadow-amber-500/20"
          >
            Export Inquiry
          </Link>
        </nav>
      </div>
    </header>
  );
}
