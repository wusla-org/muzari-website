import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const products = [
  {
    title: "Banana Blossom (വാഴ കൂമ്പ്)",
    icon: "🍌", 
    description: "Fresh, hand-picked banana blossoms sourced directly from our partner farms in Kerala. Rich in flavour and nutrition.",
    tag: "YEAR ROUND",
  },
  {
    title: "Paddy & Rice (നെല്ല്)",
    icon: "🌾",
    description: "Premium quality paddy from traditional Indian fields. Graded and processed to meet international export standards.",
    tag: "SEASONAL",
  },
  {
    title: "Fresh Vegetables",
    icon: "🥬",
    description: "A wide range of farm-fresh vegetables, sorted, graded, and cold-chain packed for freshness on delivery.",
    tag: "YEAR ROUND",
  },
  {
    title: "Tropical Fruits",
    icon: "🍈",
    description: "India's finest tropical fruits — mangoes, jackfruit, and more — exported with full phytosanitary compliance.",
    tag: "SEASONAL",
  },
  {
    title: "Spices & Herbs",
    icon: "🌶️",
    description: "Aromatic Indian spices and fresh herbs, sourced from the spice gardens of Kerala and other premium regions.",
    tag: "YEAR ROUND",
  },
  {
    title: "Coconut Products",
    icon: "🥥",
    description: "Fresh coconuts, coconut oil, and related produce — Kerala's most iconic agricultural export, delivered fresh.",
    tag: "YEAR ROUND",
  },
];

export default function OurProducts() {
  return (
    <section id="products" className="section-shell">
      <div className="content-shell">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-[2.5rem] font-extrabold tracking-tight text-[#2d3a2b] md:text-[3.5rem] flex items-center gap-3">
              Our <span className="text-[#64b533] italic">Products</span>
            </h2>
            <div className="mt-4 h-1.5 w-16 bg-[#64b533] rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => {
            const slug = product.title.toLowerCase().split("(")[0].trim().replace(/ /g, "-").replace(/&/g, "and");
            return (
              <ScrollReveal
                key={product.title}
                delay={index * 100}
              >
                <Link
                  href={`/products/${slug}`}
                  className="flex flex-col h-full overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow group"
                >
                  {/* Top Half - Green Image Container */}
                  <div className="flex h-48 w-full items-center justify-center bg-[#dcf2be] transition-colors group-hover:bg-[#d0eaae]">
                    {/* We use large emojis as stand-ins for the 3D transparent icons from the mockup */}
                     <span className="text-7xl drop-shadow-md group-hover:scale-110 transition-transform duration-500">
                        {product.icon}
                     </span>
                  </div>

                  {/* Bottom Half - Info */}
                  <div className="flex flex-col p-6 flex-grow">
                    {/* TODO: replace with real product.rating and product.reviewsCount from DB */}
                    <div className="flex items-center gap-1.5 mb-2 mt-1">
                      <div className="flex text-[#ffb800] text-sm">
                        ★★★★★
                      </div>
                      <span className="text-xs font-bold text-[#2d3a2b]">5.0</span>
                      <span className="text-xs text-[#5c7257]">(24 Reviews)</span>
                    </div>
                    
                    <h3 className="text-[1.15rem] font-extrabold tracking-tight text-[#2d3a2b] mb-3 group-hover:text-[#64b533] transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-[0.9rem] leading-relaxed text-[#5c7257] mb-6 flex-grow">
                      {product.description}
                    </p>
                    <div className="mt-auto self-start">
                      <span className="inline-flex rounded-full bg-[#eaefdd] px-3 py-1 text-[0.7rem] font-bold tracking-widest text-[#4d7237] uppercase">
                        {product.tag}
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
