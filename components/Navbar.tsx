"use client";

import { useState } from "react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/#about" },
  { label: "Solutions", href: "/#collections" },
  { label: "Quality", href: "/#workflow" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute left-1/2 top-8 z-50 w-full max-w-7xl -translate-x-1/2 px-6 md:px-12 lg:top-10 lg:px-16">
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="flex items-center">
          <BrandLogo variant="compact" className="w-28 md:w-36 drop-shadow-md" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold tracking-wide text-white drop-shadow-md hover:text-white/80 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link href="/#inquiry" className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-[0.8rem] font-bold text-on-surface shadow-sm transition-transform hover:scale-105">
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-on-surface lg:hidden shadow-sm"
        >
          <span className="text-xl font-bold leading-none">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div id="mobile-menu" className="mt-4 space-y-2 rounded-3xl bg-white p-4 shadow-2xl lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-bold text-on-surface hover:bg-surface"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#inquiry"
            onClick={() => setOpen(false)}
            className="mt-2 flex w-full h-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
