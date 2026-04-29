import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { aboutPageContent, getWhatsAppHref } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Muzari | Farm-Connected Produce Export Partner",
  description:
    "Learn who Muzari Exports is, how we work, and why international buyers trust our farm-connected sourcing and export handling.",
};

export default function AboutPage() {
  const whatsappHref = getWhatsAppHref();

  return (
    <main className="min-h-screen bg-white text-green-950">
      <SiteHeader />

      <section className="bg-gradient-to-b from-green-950 via-green-900 to-green-950 px-0 pb-24 pt-36 text-white">
        <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
            {aboutPageContent.eyebrow}
          </p>
          <h1 className="mb-6 max-w-4xl font-serif text-5xl font-bold leading-tight md:text-6xl">
            {aboutPageContent.title}
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-green-100/90">
            {aboutPageContent.intro}
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-10">
            {aboutPageContent.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="mb-4 font-serif text-3xl font-bold text-green-900">
                  {section.heading}
                </h2>
                <p className="max-w-2xl text-base leading-8 text-green-700">{section.text}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] bg-green-50 p-8 shadow-sm ring-1 ring-green-100">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
              What Guides Us
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold text-green-900">
              The values behind our sourcing and export work.
            </h2>
            <div className="space-y-4">
              {aboutPageContent.values.map((value) => (
                <div key={value} className="flex items-start gap-3 rounded-2xl bg-white p-4 text-green-900 ring-1 ring-green-100">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                  <span className="text-sm font-medium leading-7">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-green-200 pt-8">
              <Link
                href={whatsappHref}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-14 rounded-full bg-green-900 px-8 text-base font-bold text-white hover:bg-green-800"
                )}
              >
                Start an Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
