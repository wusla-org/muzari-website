"use client";

import { useEffect, useState } from "react";
import BrandLogo from "@/components/BrandLogo";

const navLinks = [
  { label: "Collections", href: "#collections" },
  { label: "Mission", href: "#mission" },
  { label: "Heritage", href: "#heritage" },
  { label: "Inquiry", href: "#inquiry" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    function handleScroll() {
      const currentY = window.scrollY;
      const isScrollingUp = currentY < lastY;
      const isNearTop = currentY < 32;

      setScrolled(currentY > 12);
      setVisible(isNearTop || isScrollingUp || open);

      lastY = currentY;
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-all duration-500 md:px-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="content-shell">
        <div
          className={`glass-panel rounded-[2rem] px-5 py-4 transition-all duration-500 md:px-7 ${
            scrolled
              ? "shadow-[0_20px_56px_rgba(25,28,24,0.14)] ring-1 ring-white/50"
              : ""
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <a href="#" className="block min-w-0 flex-1 md:max-w-[15rem]">
              <BrandLogo
                variant="compact"
                priority
                className="max-w-[11rem] md:max-w-[13.5rem]"
              />
            </a>

            <div className="hidden items-center gap-3 rounded-full bg-white/56 p-1 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-on-surface/70 hover:-translate-y-0.5 hover:bg-white hover:text-primary-ink"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a href="#inquiry" className="button-primary hidden md:inline-flex">
                Partner with Us
              </a>
              <button
                type="button"
                aria-expanded={open}
                aria-label="Toggle navigation menu"
                onClick={() => setOpen((value) => !value)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-primary-ink md:hidden"
              >
                <span className="text-xl font-semibold leading-none">
                  {open ? "×" : "≡"}
                </span>
              </button>
            </div>
          </div>

          {open ? (
            <div className="mt-4 space-y-2 rounded-[1.5rem] bg-white/72 p-3 md:hidden">
              <div className="rounded-[1.2rem] bg-white px-4 py-4">
                <BrandLogo variant="compact" className="max-w-[10.5rem]" />
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-[1.2rem] px-4 py-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-on-surface/80 hover:translate-x-1 hover:bg-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#inquiry"
                onClick={() => setOpen(false)}
                className="button-primary mt-2 flex w-full"
              >
                Partner with Us
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
