import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { getHomePageContent } from "@/lib/content";
import ScrollReveal from "@/components/ScrollReveal";

// This simulates fetching detailed product info based on the slug.
const placeholderProductData: Record<string, any> = {
  "banana-blossom": {
    name: "Banana Blossom",
    localName: "വാഴ കൂമ്പ്",
    category: "Fresh Produce",
    rating: "4.9",
    reviews: "36 global exporters",
    description: "Channel premium quality standards with our freshly harvested, extensively cleaned banana blossoms. Ideal for bulk processing into vegan meat alternatives and specialty foods.",
    images: [
       "https://lh3.googleusercontent.com/aida-public/AB6AXuD22HSou1rG2SCGYlIaJ7HwbGw1viRyODBc-NRqNbYaCWdYucu7y4n8UdVaY9UFj2Dn1CoxGqU2tYS4Ysjx5NCjMbiNV-BOJP-t_h8EJeaSPnV9TKg-_g2gAATH-TRwZg0ZVikpfFEzoOr_MKjS_kqwWQuNvqgGUhuv2p1Ib8Xwe1y0ByBOeMExQ_vjaufER-TX2x7mcaLRDazanfTQbydRdd7MZFAQmjYAfbd2sV2Nnr1Riytis8CWn8fkkbgXKihZ2GLG4Y7q2Ti3",
       "https://lh3.googleusercontent.com/aida-public/AB6AXuDiDZgyv3xrx8FaQu0jWkqAGASh3Okze46dKeMq8pD_YNWxU_Ppa3SXNr4ivAmYOijZ_Hx6j39vN819ohakBNXQZfu6gWgkzpt-SnSW3nbgpTQkKz36Tx3mLOSAhopmrryHYRnRXd_9jS1YnYI59RWPqi1lDTKR6TQH6mjgs0-AU2syp94WW0OnjAiF9XAS6uR2YOO2CRNtEdAyIcAthbpB6_vjyJIk-gh4ygBi_2qgHUECRdkSZAFrb458EiiwUtIcZ-MDBM3stCun",
       "https://lh3.googleusercontent.com/aida-public/AB6AXuD6qgb5-oRSGoiwD6fvl_1QSoAV45yJ2k-MPEBc2Xw5Cu4QqSeWjE6BNF0GOXz8yruRFcXbsFFriXa5HzXpC8RD2HxeVSmOp5HqkC5ELgzHE_nqWiTkS5-Drjf2SaeLaUpxT5jiGcBwDqwjH7j3sOwoqVJOlUtvaAa9OP8m7yfgUrMtuD3hl4vk00z8Ui6P-8grvnGwfyNceW3uhOcQAelpk2hWsmJtrTTl9V8OYx7b745O6WFM5nQCYPsZ7GCkZh1Y3jqmAcLBJt_S",
       "https://lh3.googleusercontent.com/aida-public/AB6AXuBl3sANOSbrJ8aYTUWv_BahDxRIckgvcH2S5Ztkr4h2ZL4pDTMSx8mgNt_CSsh_gnZas37xj5n_Aj2hsvjmovf_NoM_9UAnS5yMlNbbQm8EsxL29OCuIEQdxLIfu_Pdjrb7IePPPQcMEhvLpfXDi1ugzuxy3VlNvuOkC7jGOT1tgpYP-6fS13iR243yrrZEFYmt7ThmxiGLi9caEFHFrRDrel55x8csFJ9HTbkjlIRG23mRQdcNvMq812BMdA23BELVkmHH552KxD-F"
    ]
  }
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = await getHomePageContent();
  
  // Lookup data or use a fallback.
  const product = placeholderProductData[slug] || {
    name: slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    category: "Agricultural Export",
    rating: "5.0",
    reviews: "New Export Request",
    description: "Premium exported agricultural goods directly from our global network of top-tier growers. Sustainably harvested and quality verified.",
    images: [
       "https://lh3.googleusercontent.com/aida-public/AB6AXuDiDZgyv3xrx8FaQu0jWkqAGASh3Okze46dKeMq8pD_YNWxU_Ppa3SXNr4ivAmYOijZ_Hx6j39vN819ohakBNXQZfu6gWgkzpt-SnSW3nbgpTQkKz36Tx3mLOSAhopmrryHYRnRXd_9jS1YnYI59RWPqi1lDTKR6TQH6mjgs0-AU2syp94WW0OnjAiF9XAS6uR2YOO2CRNtEdAyIcAthbpB6_vjyJIk-gh4ygBi_2qgHUECRdkSZAFrb458EiiwUtIcZ-MDBM3stCun",
       ...Array(3).fill("https://lh3.googleusercontent.com/aida-public/AB6AXuBIbS98a5PZu1Nji_0Z1in_TuoOR9O4fK0kEOZxVb3KDNK_UpYflpJYXTuMZhS6Tl1IYpeTAQcBqrlgtU8enKZjT-Bmb09YL29FwD2Tx300270p7U7OsUHwgDfwmf9xyfJg83V06axzAbjI7w0g7TRp1SP8mae1C2DwWAFAp4SiN10F3zmJ--GWtyr7zHoeuZMNC9Fl9-PlQ3c9mbySJVKDZxjGNTCbuEU00YGwBFACi5HxpMlqWL7D3nV86vGndfBtbnG7oZ0yaEsy")
    ]
  };

  return (
    <div className="bg-[#f9f9fa] min-h-screen font-sans">
      <Navbar />
      <main className="mx-auto max-w-[84rem] w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-8rem)] pt-32 pb-24">
        
        {/* Breadcrumb matching the image */}
        <ScrollReveal>
          <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-6">
            <a href="/" className="hover:text-primary transition-colors">Products</a>
            <span>/</span>
            <span className="text-[#3a3a3a]">{product.category}</span>
            <span>/</span>
            <span className="text-primary">{product.name}</span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20">
          
          {/* Left Column: Image Showcase */}
          <ScrollReveal delay={100} className="space-y-4">
             {/* Main Hero Box */}
             <div className="relative aspect-[4/3] w-full rounded-[2.5rem] bg-[#e9e6dc] overflow-hidden p-8 flex items-center justify-center group shadow-sm transition-transform hover:scale-[1.01]">
                {/* Floating "EXPORT" Bubble */}
                <div className="absolute top-6 left-6 bg-white rounded-full h-16 w-16 flex items-center justify-center font-bold text-xs tracking-wider text-[#2b2b2b] shadow-xl z-20">
                   EXPORT
                </div>
                
                <Image 
                   src={product.images[0]} 
                   alt={product.name}
                   fill
                   className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                   priority
                />
             </div>

             {/* Bottom Gallery Row */}
             <div className="grid grid-cols-3 gap-4">
               {product.images.slice(1, 4).map((imgUrl: string, idx: number) => (
                 <div key={idx} className="relative aspect-square w-full rounded-[1.5rem] bg-[#f0eee3] overflow-hidden hover:opacity-80 transition-opacity cursor-pointer shadow-sm">
                   <Image 
                     src={imgUrl} 
                     alt={`Thumbnail ${idx+1}`}
                     fill
                     className="object-cover"
                   />
                 </div>
               ))}
             </div>
          </ScrollReveal>

          {/* Right Column: Title, Configurator, Actions */}
          <ScrollReveal delay={200} className="flex flex-col pt-4">
             <span className="uppercase tracking-widest text-[#8a8a8a] text-xs font-bold mb-2">
               {product.category}
             </span>
             <h1 className="text-4xl md:text-[2.8rem] font-black text-[#2e2b26] leading-tight mb-3">
               {product.name} {product.localName && <span className="font-normal opacity-70">({product.localName})</span>}
             </h1>

             {/* Reviews Row */}
             <div className="flex items-center gap-3 mb-6">
                <div className="flex text-[#ffb800] text-lg">
                   ★★★★★
                </div>
                <span className="text-sm font-bold text-[#2e2b26]">{product.rating}</span>
                <span className="text-sm text-[#8a8a8a]">({product.reviews})</span>
             </div>

             {/* Pricing (Adapted to B2B Request logic) */}
             <div className="mb-6">
               <div className="flex items-baseline gap-2">
                 <span className="text-3xl font-black text-[#2e2b26]">Get Quote</span>
               </div>
               <p className="text-xs text-[#8a8a8a] font-medium mt-1 uppercase tracking-wide">
                 Global Market Pricing Applies
               </p>
             </div>

             <p className="text-[#595752] leading-relaxed mb-8 max-w-lg">
               {product.description}
             </p>

             {/* B2B Selectors mimicking the Ecommerce style */}
             <div className="space-y-6 flex-grow">
               
               <div>
                 <h4 className="text-sm font-bold text-[#2e2b26] mb-3">Choose Quality Grade</h4>
                 <div className="flex flex-wrap gap-2">
                    <button className="rounded-full bg-[#f6d7ab] border border-transparent px-5 py-2 text-sm font-bold text-[#4a3922] transition-colors">
                      Premium Processing
                    </button>
                    <button className="rounded-full bg-[#e8e6e1] border border-transparent px-5 py-2 text-sm font-bold text-[#595752] hover:bg-[#dcdad4] transition-colors">
                      Standard
                    </button>
                    <button className="rounded-full bg-[#e8e6e1] border border-transparent px-5 py-2 text-sm font-bold text-[#595752] hover:bg-[#dcdad4] transition-colors">
                      Raw Harvest
                    </button>
                 </div>
               </div>

               <div>
                 <h4 className="text-sm font-bold text-[#2e2b26] mb-3">Bulk Packaging Size</h4>
                 <div className="flex gap-2 border-b border-black/5 pb-8">
                    <button className="rounded-full bg-[#e8e6e1] px-5 py-2 text-sm font-bold text-[#595752] hover:bg-[#dcdad4]">
                      25 Kg Sacks
                    </button>
                    <button className="rounded-full bg-[#f6dba3] px-5 py-2 text-sm font-bold text-[#6a5e46]">
                      500 Kg Vacuum
                    </button>
                 </div>
               </div>

               {/* Action Row */}
               <div className="flex flex-wrap items-center gap-4 pt-2">
                 
                 {/* Container Count Mimicking the `- 1 +` UI */}
                 <div className="flex items-center rounded-3xl bg-[#efede8] overflow-hidden p-1 shadow-inner h-14">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold text-[#2e2b26] hover:bg-[#e0ded8] transition-colors">
                      -
                    </button>
                    <span className="w-12 text-center text-sm font-bold text-[#2e2b26]">
                      1 FCL
                    </span>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f4d197] text-xl font-bold text-[#4a3922] transition-colors shadow-sm">
                      +
                    </button>
                 </div>

                 <a 
                   href={`https://wa.me/1234567890?text=${encodeURIComponent(`I want to inquire about Bulk ${product.name} exports.`)}`}
                   className="flex-1 flex items-center justify-center h-14 rounded-full bg-[#202020] text-white font-bold tracking-wide shadow-xl hover:bg-black transition-colors min-w-[200px]"
                 >
                   Inquire For Export
                 </a>
               </div>

             </div>

             {/* Social Proof & Checklist */}
             <div className="mt-10 border-t border-black/5 pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
               
               <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex -space-x-3">
                       {/* Placeholder Avatars */}
                       <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-400"></div>
                       <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-500"></div>
                       <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-600"></div>
                       <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center bg-[#e8e6df] text-[0.6rem] font-bold text-slate-600">
                         +5
                       </div>
                    </div>
                    <p className="text-xs font-bold text-[#595752] max-w-[120px]">
                      Global distributors evaluating this.
                    </p>
                  </div>
               </div>

               <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#3b3a36]">
                     <span className="text-[#a46dff]">⚡</span> Quality Insured Check
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#3b3a36]">
                     <span className="text-[#848484]">📦</span> Direct Container Loading
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#3b3a36]">
                     <span className="text-[#3b9f36]">🌿</span> 100% Export Compliant
                  </div>
               </div>

             </div>

          </ScrollReveal>
        </div>

      </main>
      <Footer settings={content.settings} />
      <FloatingWhatsApp />
    </div>
  );
}
