"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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
    ? `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/[^0-9]/g, "")}`
    : "#contact";

  return (
    <main className="min-h-screen bg-white text-green-950 selection:bg-green-900 selection:text-white">
      {/* ── Navbar ─────────────────────────────────────── */}
      <header className="fixed top-0 z-50 w-full border-b border-green-100 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex w-[min(1280px,calc(100%-2rem))] items-center justify-between py-4">
          <a href="#" className="flex flex-col leading-none">
            <span className="font-serif text-2xl font-bold tracking-wide text-green-900">
              Muzari
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-600">
              Farms &amp; Exports
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-green-800">
            {["Produce", "Farming", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="transition-colors hover:text-green-600 relative after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-amber-500 after:transition-all hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappHref}
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden md:inline-flex rounded-full px-6 bg-green-900 hover:bg-green-800 text-white font-bold shadow-md"
            )}
          >
            Get a Quote
          </a>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end pb-20 md:items-center md:pb-0 pt-20 overflow-hidden">
        <h1 className="sr-only">Muzari Farms: Premium Agricultural Produce Exporter from India</h1>

        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_background.png"
            alt="Muzari Farms agricultural fields in India"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          {/* Deep green gradient overlay — stronger on left for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-950/60 to-green-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-[min(1280px,calc(100%-2rem))]">
          <div className="max-w-2xl">
            <Badge className="mb-6 bg-amber-500 text-amber-950 hover:bg-amber-500 border-0 px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full shadow-sm">
              100% Authentic Agriculture
            </Badge>

            <h2
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.0] text-white mb-6 drop-shadow-lg"
              aria-hidden="true"
            >
              From Our Soil<br />
              to the{" "}
              <span className="text-amber-400">World.</span>
            </h2>

            <p className="text-base md:text-lg text-green-100 leading-relaxed mb-10 max-w-xl drop-shadow">
              Muzari Exports connects international buyers directly to the source.
              Premium Indian produce grown with care — CIF/FOB global shipping available.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappHref}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-8 h-14 text-base font-bold bg-green-600 hover:bg-green-500 text-white shadow-lg hover:shadow-xl transition-all"
                )}
              >
                Order Farm Fresh
              </a>
              <a
                href="#produce"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full px-8 h-14 text-base font-bold border-2 border-white/80 bg-white/10 text-white hover:bg-white hover:text-green-900 backdrop-blur-sm transition-all"
                )}
              >
                View Our Harvest
              </a>
            </div>
          </div>
        </div>

        {/* Floating stats bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 hidden md:block">
          <div className="mx-auto w-[min(1280px,calc(100%-2rem))]">
            <div className="mb-8 inline-flex gap-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-10 py-5">
              {[
                { value: "15+", label: "Countries Supplied" },
                { value: "100%", label: "Farm Direct" },
                { value: "CIF/FOB", label: "Shipping Terms" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-2xl font-bold text-amber-400">{stat.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-green-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Products ───────────────────────────────────── */}
      <section id="produce" className="py-24 bg-white">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))]">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-4">
              What We Export
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Our Fresh{" "}
              <span className="relative inline-block">
                Harvest
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
              </span>
            </h2>
            <p className="text-base text-green-700 leading-relaxed">
              We focus on cultivating the highest quality crops, ensuring that the natural taste
              and nutrition are preserved from the moment they are picked.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.name}
                className="group overflow-hidden border border-green-100 shadow-md hover:shadow-xl hover:border-green-300 transition-all duration-300 rounded-2xl bg-white p-0"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="p-8">
                  <Badge
                    variant="secondary"
                    className="mb-4 bg-green-50 text-green-700 border border-green-100 hover:bg-green-50 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                  >
                    {product.label}
                  </Badge>

                  <h3 className="font-serif text-2xl font-bold text-green-900 mb-3 group-hover:text-green-700 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-sm text-green-700 leading-relaxed mb-6">
                    {product.summary}
                  </p>

                  <ul className="space-y-2.5">
                    {product.details.map((detail) => (
                      <li key={detail} className="flex items-center text-sm text-green-800 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-3 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process / Farming ──────────────────────────── */}
      <section id="farming" className="py-24 bg-green-900 text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-green-800 opacity-60 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-green-950 opacity-60 blur-3xl pointer-events-none" />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="mx-auto w-[min(1280px,calc(100%-2rem))] relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-center">
            {/* Left: headline */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-4">
                The Muzari Way
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Rooted in Tradition,{" "}
                <span className="text-amber-400">Grown for Export.</span>
              </h2>
              <p className="text-base text-green-200 leading-relaxed mb-10">
                We believe the best export produce starts with the best farming practices.
                Our hands-on approach ensures organic integrity and unmatched freshness,
                from seed to port.
              </p>
              <a
                href={whatsappHref}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full h-14 px-8 text-base font-bold border-2 border-amber-400 bg-transparent text-amber-400 hover:bg-amber-400 hover:text-green-950 transition-all"
                )}
              >
                Talk to Our Farmers
              </a>
            </div>

            {/* Right: step grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="bg-green-800/50 backdrop-blur-sm rounded-2xl p-7 border border-green-700/50 hover:bg-green-800 hover:border-green-600 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-base font-serif font-bold text-green-950 mb-5 group-hover:bg-amber-400 transition-colors">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-green-200 leading-relaxed text-sm">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────── */}
      <section id="contact" className="py-24 bg-green-50">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))]">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 md:p-16 text-center shadow-lg border border-green-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-green-50">
              <span className="text-2xl" aria-hidden="true">🌾</span>
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-4">
              Ready to Import?
            </p>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Bring Our Harvest <br className="hidden md:block" />
              to You.
            </h2>

            <p className="text-base text-green-700 leading-relaxed mb-10 max-w-xl mx-auto">
              Ready to import premium, farm-fresh produce? Reach out to our agricultural
              export team directly. We are ready to fulfill your volume requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappHref}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full h-14 px-10 text-base font-bold bg-green-900 hover:bg-green-800 text-white shadow-md hover:shadow-lg transition-all"
                )}
              >
                Message via WhatsApp
              </a>
              <a
                href="mailto:farm@muzari.com"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full h-14 px-10 text-base font-bold border-2 border-green-200 text-green-800 hover:border-green-400 hover:bg-green-50 transition-all"
                )}
              >
                Email Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────── */}
      <footer className="py-10 bg-green-950">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-serif text-lg font-bold text-green-200">Muzari</span>
          <p className="text-sm text-green-400/70 font-medium text-center">
            &copy; {new Date().getFullYear()} Muzari Farms &amp; Exports. Grown with Care.
          </p>
          <div className="flex gap-6 text-sm text-green-400/70 font-medium">
            <a href="#produce" className="hover:text-green-300 transition-colors">Produce</a>
            <a href="#farming" className="hover:text-green-300 transition-colors">Farming</a>
            <a href="#contact" className="hover:text-green-300 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
