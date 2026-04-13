import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { ImageAsset, SiteSettingsContent } from "@/lib/content";

export default function BananaSpotlight({
  section,
  images,
}: {
  section: SiteSettingsContent;
  images: ImageAsset[];
}) {
  return (
    <section id="banana-spotlight" className="section-shell">
      <div className="content-shell">
        <ScrollReveal>
           <div className="relative w-full overflow-hidden rounded-[2.5rem] min-h-[650px] shadow-sm flex flex-col justify-end p-8 md:p-14">
              <div className="absolute inset-0 z-0">
                 {/* Main background image corresponding to the 'Growing Impact' section */}
                 <Image
                    src={images[0]?.src || "/images/banana-field.jpg"}
                    alt={images[0]?.alt || "Banana Field"}
                    fill
                    className="object-cover"
                 />
                 {/* Dark bottom gradient overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              <div className="relative z-10 w-full md:w-3/4 lg:w-2/3">
                 <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
                    Growing Impact,<br/> Harvesting Success
                 </h2>
                 <p className="mt-4 text-sm md:text-base text-white/80 max-w-xl leading-relaxed">
                    Through dedication, smart innovation, and respect for nature, we export thriving premium bananas, empower countless farmers, and prove that sustainability and success can grow together.
                 </p>

                 <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 border-t border-white/20 pt-6">
                    <div>
                       <p className="text-2xl md:text-3xl font-extrabold text-white">4.2M</p>
                       <p className="text-xs text-white/70 mt-1 uppercase tracking-wide">Tons Exported</p>
                    </div>
                    <div>
                       <p className="text-2xl md:text-3xl font-extrabold text-white">$45M</p>
                       <p className="text-xs text-white/70 mt-1 uppercase tracking-wide">Farmer Support</p>
                    </div>
                    <div>
                       <p className="text-2xl md:text-3xl font-extrabold text-white">12+</p>
                       <p className="text-xs text-white/70 mt-1 uppercase tracking-wide">Countries Reach</p>
                    </div>
                    <div className="flex items-center">
                        <a 
                          href="https://wa.me/1234567890" 
                          className="button-primary px-5 py-2 !min-h-0 h-10 w-full"
                        >
                          Inquire Now
                        </a>
                    </div>
                 </div>
              </div>
           </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
