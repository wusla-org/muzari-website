import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { aboutPageContent, missionVision, getWhatsAppHref } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Muzari | Indian Exporter of Fresh Vegetables, Fruits & Spices",
  description:
    "Discover the 30-year agricultural heritage of Muzari Exports. We are cultivators and exporters of premium Indian produce, dedicated to quality, reliability, and global sustainability.",
};

export default function AboutPage() {
  const whatsappHref = getWhatsAppHref();

  return (
    <main className="min-h-screen bg-white text-green-950">
      <SiteHeader />

      <section className="bg-gradient-to-b from-green-950 via-green-900 to-green-950 px-0 pb-32 pt-40 text-white">
        <div className="mx-auto w-[min(1180px,calc(100%-2rem))] px-4 text-center">
          <p className="mb-6 text-[10px] font-black uppercase tracking-[0.4em] text-amber-400">
            {aboutPageContent.eyebrow}
          </p>
          <h1 className="mx-auto mb-8 max-w-5xl font-serif text-5xl font-medium leading-[1.1] md:text-7xl tracking-tight">
            {aboutPageContent.title}
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-green-100/80 italic font-serif">
            {aboutPageContent.intro}
          </p>
        </div>
      </section>

      <section className="bg-white py-32 border-b border-green-50">
        <div className="mx-auto w-[min(1180px,calc(100%-2rem))] px-4">
          <div className="grid gap-20 md:grid-cols-2 md:gap-32">
            <div className="relative">
              <div className="absolute -left-8 -top-12 pointer-events-none select-none text-[12rem] font-serif text-green-50/80 leading-none">“</div>
              <div className="relative z-10">
                <p className="mb-6 text-[10px] font-black uppercase tracking-[0.4em] text-amber-600/80">
                  {missionVision.mission.title}
                </p>
                <h3 className="font-serif text-4xl font-medium leading-[1.2] text-green-950 md:text-5xl italic tracking-tight">
                  {missionVision.mission.text}
                </h3>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 -top-12 pointer-events-none select-none text-[12rem] font-serif text-green-50/80 leading-none">“</div>
              <div className="relative z-10">
                <p className="mb-6 text-[10px] font-black uppercase tracking-[0.4em] text-amber-600/80">
                  {missionVision.vision.title}
                </p>
                <h3 className="font-serif text-4xl font-medium leading-[1.2] text-green-950 md:text-5xl italic tracking-tight">
                  {missionVision.vision.text}
                </h3>
              </div>
            </div>
          </div>
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
