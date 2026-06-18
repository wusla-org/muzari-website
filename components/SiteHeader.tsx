"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigationLinks } from "@/lib/site-data";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const rafId = useRef<number>(0);

  // Debounced scroll via requestAnimationFrame
  useEffect(() => {
    const handleScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  // Close menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Escape key handler + body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-500",
        isScrolled || mobileOpen
          ? "bg-[#faf8f3]/97 backdrop-blur-xl border-b border-[#e4dfd5] py-1 shadow-sm"
          : "bg-[#faf8f3]/90 backdrop-blur-md py-2"
      )}
    >
      <div className="mx-auto flex w-[min(1440px,calc(100%-2rem))] items-center justify-between px-6 lg:px-12">

        {/* Logo */}
        <Link
          href="/"
          className="relative flex-shrink-0 h-14 w-36 sm:h-16 sm:w-44 flex items-center group"
        >
          <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo/logo-light.png"
              alt="Muzari Exports"
              fill
              className="object-contain object-left"
              priority
              sizes="(max-width: 640px) 144px, 176px"
            />
          </div>
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
                  "relative font-sans text-[11px] font-medium uppercase tracking-[1.5px] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5a8a3c] focus-visible:ring-offset-2",
                  isActive ? "text-[#1a1a14]" : "text-[#7a6b4f] hover:text-[#1a1a14]"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px bg-[#5a8a3c] transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center border border-[#1a1a14] text-[#1a1a14] font-sans text-[11px] font-medium uppercase tracking-[1.5px] px-5 py-2.5 transition-all duration-300 hover:bg-[#1a1a14] hover:text-[#faf8f3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a14] focus-visible:ring-offset-2"
          >
            Export Inquiry
          </Link>

          <button
            className="flex md:hidden h-9 w-9 items-center justify-center transition-colors hover:bg-[#e4dfd5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5a8a3c] focus-visible:ring-offset-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <span className="relative flex h-3.5 w-5 flex-col justify-between">
              <span className={cn("block h-px w-full bg-[#1a1a14] transition-all duration-300", mobileOpen && "translate-y-1.5 rotate-45")} />
              <span className={cn("block h-px w-full bg-[#1a1a14] transition-all duration-300", mobileOpen && "opacity-0")} />
              <span className={cn("block h-px w-full bg-[#1a1a14] transition-all duration-300", mobileOpen && "-translate-y-1.5 -rotate-45")} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        id="mobile-nav"
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 bg-[#faf8f3]",
          mobileOpen ? "max-h-96 border-t border-[#e4dfd5]" : "max-h-0"
        )}
      >
        <nav className="flex flex-col px-8 pb-8 pt-4">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "py-4 font-sans text-[11px] font-medium uppercase tracking-[1.5px] border-b border-[#e4dfd5] transition-colors",
                pathname === link.href ? "text-[#1a1a14]" : "text-[#7a6b4f] hover:text-[#1a1a14]"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-6 border border-[#1a1a14] text-[#1a1a14] font-sans text-[11px] font-medium uppercase tracking-[1.5px] py-3 text-center transition-all hover:bg-[#1a1a14] hover:text-[#faf8f3]"
          >
            Export Inquiry
          </Link>
        </nav>
      </div>
    </header>
  );
}
