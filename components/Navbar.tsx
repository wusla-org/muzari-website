"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/BrandLogo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/#about" },
  { label: "Solutions", href: "/#collections" },
  { label: "Quality", href: "/#workflow" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ease-soft ${
        scrolled ? "py-3" : "py-6 md:py-8"
      }`}
    >
      <div className="content-shell flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <BrandLogo
            variant="compact"
            className={`transition-all duration-500 ${
              scrolled ? "w-24 md:w-28" : "w-28 md:w-36"
            } ${!scrolled && isHome ? "grayscale brightness-200 drop-shadow-md" : ""}`}
          />
        </Link>

        {/* Desktop Links - Floating Pill */}
        <nav
          className={`hidden lg:flex items-center gap-1 transition-all duration-500 px-2 py-1.5 rounded-full border border-transparent ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-on-surface/5 border-on-surface/5"
              : "bg-transparent"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`px-5 py-2 text-[13px] font-bold tracking-tight rounded-full transition-all duration-300 ${
                scrolled
                  ? "text-on-surface hover:bg-surface"
                  : isHome
                  ? "text-white drop-shadow-sm hover:bg-white/10"
                  : "text-on-surface hover:bg-surface"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/#inquiry"
            className={`inline-flex h-11 items-center justify-center rounded-full px-7 text-[13px] font-bold transition-all duration-300 ${
              scrolled
                ? "bg-primary text-white shadow-md hover:bg-primary-dark hover:-translate-y-0.5"
                : isHome
                ? "bg-white text-on-surface shadow-md hover:bg-surface hover:-translate-y-0.5"
                : "bg-primary text-white shadow-md hover:bg-primary-dark hover:-translate-y-0.5"
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 lg:hidden shadow-sm ${
            scrolled || !isHome
              ? "bg-primary text-white"
              : "bg-white text-on-surface"
          }`}
        >
          <span className="text-xl font-medium leading-none">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`absolute left-0 right-0 top-full px-6 transition-all duration-500 ease-soft lg:hidden ${
          open ? "mt-4 opacity-100 translate-y-0" : "pointer-events-none mt-0 opacity-0 -translate-y-4"
        }`}
      >
        <div className="overflow-hidden rounded-[2rem] bg-white/95 backdrop-blur-2xl p-3 shadow-2xl border border-on-surface/5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-5 py-4 text-sm font-bold text-on-surface hover:bg-surface transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="p-2 mt-2">
            <Link
              href="/#inquiry"
              onClick={() => setOpen(false)}
              className="flex w-full h-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-lg active:scale-95 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
