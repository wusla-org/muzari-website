import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { HeroContent, ImageAsset } from "@/lib/content";

export default function HeroSection({
  hero,
  image,
}: {
  hero: HeroContent;
  image: ImageAsset;
}) {
  return (
    <section className="relative mx-auto mt-4 w-[calc(100%-2rem)] max-w-[88rem] overflow-hidden rounded-[2.5rem] bg-[#0d2a17] shadow-xl md:w-[calc(100%-4rem)] lg:w-[calc(100%-8rem)]">
      {/* Container ensures height and centers content vertically */}
      <div className="relative flex min-h-[86vh] w-full flex-col justify-center px-6 py-32 md:px-16 lg:px-24">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-center opacity-70 mix-blend-overlay"
            priority
          />
          {/* Subtle gradient to ensure dark contrast for white text */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full max-w-3xl">
          <ScrollReveal delay={40}>
            <h1 className="text-[2.8rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-[4.7rem]">
              Smart Agriculture for a Greener Future
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
              We help farmers and importers improve productivity and sustainability through innovative agricultural export solutions.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="/#collections" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-bold text-on-surface shadow-md hover:bg-surface">
                Explore Solutions
              </a>
              <a href="/#inquiry" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white bg-transparent px-7 text-sm font-bold text-white hover:bg-white/10">
                Contact Us
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Floating "Traction" Glass Card (Bottom Right) */}
        <ScrollReveal
          className="absolute bottom-6 right-6 hidden md:block lg:bottom-12 lg:right-12"
          delay={400}
        >
          <div className="flex items-center gap-4 rounded-3xl bg-white/10 p-3 pr-6 backdrop-blur-xl border border-white/20 shadow-2xl">
            <div className="relative h-16 w-16 overflow-hidden rounded-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiDZgyv3xrx8FaQu0jWkqAGASh3Okze46dKeMq8pD_YNWxU_Ppa3SXNr4ivAmYOijZ_Hx6j39vN819ohakBNXQZfu6gWgkzpt-SnSW3nbgpTQkKz36Tx3mLOSAhopmrryHYRnRXd_9jS1YnYI59RWPqi1lDTKR6TQH6mjgs0-AU2syp94WW0OnjAiF9XAS6uR2YOO2CRNtEdAyIcAthbpB6_vjyJIk-gh4ygBi_2qgHUECRdkSZAFrb458EiiwUtIcZ-MDBM3stCun"
                alt="Global Network"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Global Export Network</p>
              <p className="mt-0.5 text-xs text-white/80">48k+ Tons Exported</p>
              <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-white/90">
                <span>35+ Countries</span>
                <a href="#about" className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white hover:scale-110 transition-transform">
                  ↗
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
