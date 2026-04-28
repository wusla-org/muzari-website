"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const products = [
  {
    name: "Farm-Fresh Bananas",
    label: "Harvested Daily",
    image: "/bananas.png",
    imageAlt: "Freshly harvested green Cavendish bananas",
    summary:
      "Grown under the tropical sun and hand-harvested at the exact moment of maturity for perfect export quality.",
    details: ["Hand-selected bunches", "Sun-ripened origin", "Direct from our orchards"],
  },
  {
    name: "Earthy Tapioca Roots",
    label: "Soil to Port",
    image: "/tapioca.png",
    imageAlt: "Fresh tapioca roots from the farm",
    summary:
      "Cultivated in nutrient-rich soil, our cassava roots are thick, healthy, and rigorously cleaned before export.",
    details: ["Deep-rooted nutrition", "Carefully unearthed", "High starch yield"],
  },
  {
    name: "Sunlit Vegetables",
    label: "Field to Freight",
    image: "/vegetables.png",
    imageAlt: "Vibrant vegetables in a wooden crate",
    summary:
      "Crisp, vibrant, and packed with flavor. Our vegetables are cooled immediately after picking to lock in farm-freshness.",
    details: ["Morning harvest", "Vibrant colors", "Crisp texture retained"],
  },
];

const processSteps = [
  {
    title: "Nurtured in Rich Soil",
    text: "We cultivate our produce in nutrient-dense soil, relying on generations of farming expertise to grow robust, healthy crops.",
  },
  {
    title: "Careful Hand-Harvesting",
    text: "Our farmers pick every fruit and vegetable by hand, ensuring only the best produce makes it to the packing crates.",
  },
  {
    title: "Farm-Level Packing",
    text: "Produce is sorted and packed right near the fields to minimize transit damage and preserve absolute freshness.",
  },
  {
    title: "Direct Global Shipping",
    text: "From our farms to your ports. We handle the logistics so you receive nature's best without unnecessary delays.",
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const whatsappHref = mounted 
    ? `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/[^0-9]/g, '')}` 
    : "#contact";

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-stone-200/50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex w-[min(1280px,calc(100%-2rem))] items-center justify-between py-4">
          <div>
            <p className="text-xl font-extrabold tracking-wide text-emerald-800 font-serif">
              Muzari Farms
            </p>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-stone-600">
            {["Produce", "Farming", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="transition-colors hover:text-emerald-700"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappHref}
            className="hidden md:inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-emerald-800 shadow-md hover:shadow-lg"
          >
            Contact Our Farm
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* SEO Visually Hidden H1 */}
        <h1 className="sr-only">Muzari Farms: Premium Agricultural Produce Exporter from India</h1>
        
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_background.png"
            alt="Muzari Farms agricultural export facility in India"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/40"></div>
        </div>
        
        <div className="relative z-10 mx-auto w-[min(1280px,calc(100%-2rem))] text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500 text-amber-950 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            100% Authentic Agriculture
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold leading-[1.1] font-serif text-white mb-6 drop-shadow-md max-w-4xl mx-auto" aria-hidden="true">
            From Our Soil to <br className="hidden md:block"/> the World.
          </h2>
          <p className="text-lg md:text-xl text-stone-100 leading-relaxed mb-10 max-w-2xl mx-auto drop-shadow">
            Muzari Exports connects international buyers directly to the source. Experience the freshness of premium Indian produce, grown with care and harvested with pride. CIF/FOB global shipping available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappHref}
              className="inline-flex h-14 items-center justify-center rounded-full bg-emerald-600 px-8 text-base font-bold text-white transition-all hover:bg-emerald-700 shadow-lg hover:shadow-xl"
            >
              Order Farm Fresh
            </a>
            <a
              href="#produce"
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm px-8 text-base font-bold text-white transition-all hover:bg-white hover:text-emerald-900"
            >
              View Our Harvest
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produce" className="py-24 bg-stone-50">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))]">
          <div className="mb-16 md:text-center max-w-3xl md:mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-emerald-900 mb-6">
              Our Fresh <span className="text-amber-600">Harvest</span>
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              We focus on cultivating the highest quality crops, ensuring that the natural taste and nutrition are preserved from the moment they are picked.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.name} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-stone-100">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-100">
                    {product.label}
                  </span>
                  <h3 className="text-2xl font-bold font-serif text-stone-800 mb-3 group-hover:text-emerald-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-stone-600 leading-relaxed mb-6">
                    {product.summary}
                  </p>
                  <ul className="space-y-3">
                    {product.details.map((detail) => (
                      <li key={detail} className="flex items-center text-sm text-stone-700 font-medium">
                        <div className="w-2 h-2 rounded-full bg-amber-500 mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="farming" className="py-24 bg-emerald-900 text-stone-50 relative overflow-hidden">
        {/* Background decorative leaf/abstract shape */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-800 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-950 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))] relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-4">
                The Muzari Way
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-white mb-6">
                Rooted in Tradition, <br className="hidden md:block"/> Grown for Export.
              </h2>
              <p className="text-lg text-emerald-100 leading-relaxed mb-8">
                We believe that the best export produce starts with the best farming practices. Our hands-on approach ensures organic integrity and unmatched freshness.
              </p>
              <a
                href={whatsappHref}
                className="inline-flex h-14 items-center justify-center rounded-full border border-amber-400 bg-transparent px-8 text-base font-bold text-amber-400 transition-all hover:bg-amber-400 hover:text-emerald-950"
              >
                Talk to Our Farmers
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {processSteps.map((step, index) => (
                <div key={step.title} className="bg-emerald-800/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-700/50 hover:bg-emerald-800 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-emerald-700 flex items-center justify-center text-xl font-serif font-bold text-amber-400 mb-6">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-emerald-100 leading-relaxed text-sm">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-stone-100">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))] max-w-4xl bg-white rounded-3xl p-8 md:p-16 text-center shadow-xl border border-stone-200">
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
             <span className="text-3xl">🌾</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-emerald-900 mb-6">
            Bring Our Harvest to You.
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            Ready to import premium, farm-fresh produce? Reach out to our agricultural export team directly. We are ready to fulfill your volume requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappHref}
              className="inline-flex h-14 items-center justify-center rounded-full bg-emerald-600 px-10 text-base font-bold text-white transition-all hover:bg-emerald-700 shadow-md hover:shadow-lg"
            >
              Message via WhatsApp
            </a>
            <a
              href="mailto:farm@muzari.com"
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-stone-300 px-10 text-base font-bold text-stone-700 transition-all hover:border-stone-400 hover:bg-stone-50"
            >
              Email Our Team
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 bg-emerald-950 text-center">
        <p className="text-sm text-emerald-200/60 font-medium">
          &copy; {new Date().getFullYear()} Muzari Farms & Exports. Grown with Care.
        </p>
      </footer>
    </main>
  );
}
