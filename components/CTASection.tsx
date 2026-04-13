"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function CTASection() {
  return (
    <section className="section-shell bg-[#c5a34e]">
      <div className="content-shell text-center">
        <ScrollReveal>
          <h2 className="text-[2.5rem] font-extrabold leading-tight tracking-tight text-[#0d2a17] md:text-[3.5rem] lg:text-[4rem]">
            Ready to Source Premium <br className="hidden md:block" /> Indian Produce?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-base font-medium text-[#0d2a17]/80 md:text-lg">
            Let's grow together. Reach out to our team for pricing, availability, and bulk enquiries.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} className="mt-12 flex justify-center">
          <Link
            href="/#inquiry"
            className="group flex h-14 items-center justify-center gap-3 rounded-full bg-[#0d2a17] px-8 text-sm font-bold text-[#c5a34e] transition-all hover:scale-105 hover:bg-[#12331e] shadow-xl"
          >
            Get in Touch
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
