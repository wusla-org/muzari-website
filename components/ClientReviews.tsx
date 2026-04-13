import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

const reviews = [
  {
    name: "Thomas W.",
    company: "EuroFresh Distributors",
    role: "Procurement Director",
    quote: "Muzari Exports drastically simplified our Indian supply chain. The consistency in their coconut products and strict adherence to cold-chain packing is unmatched. We haven't had a single rejected container in 2 years.",
    rating: 5,
    type: "Buyer"
  },
  {
    name: "Rajan K.",
    company: "Kerala AgFarm Co-op",
    role: "Lead Harvester",
    quote: "Partnering with Muzari has given our local farms direct access to global markets without the middle-men. They ensure fair pricing and support us in achieving the necessary export certifications.",
    rating: 5,
    type: "Partner"
  },
  {
    name: "Elena S.",
    company: "Gulf Culinary Supplies",
    role: "Head of Sourcing",
    quote: "The banana blossoms and fresh vegetables arrived in Dubai the exact way they looked when packed in Kerala. Their logistics speed and temperature monitoring technology is fantastic.",
    rating: 5,
    type: "Buyer"
  }
];

export default function ClientReviews() {
  return (
    <section id="reviews" className="section-shell bg-surface overflow-hidden">
      <div className="content-shell">
        <ScrollReveal className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="pill-tag mb-4">Testimonials</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-on-surface md:text-5xl">
            Trusted By The Supply Chain
          </h2>
          <p className="mt-4 text-base leading-relaxed text-on-surface-variant max-w-xl mx-auto">
            From the local farmers who grow our products to the international distributors who sell them, our partnerships are built on absolute trust.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, idx) => (
            <ScrollReveal 
              key={idx} 
              delay={idx * 150}
              className="ag-card p-8 flex flex-col relative overflow-hidden"
            >
              {/* Subtle quote graphic */}
              <div className="absolute -top-6 -right-6 text-[8rem] text-primary opacity-5 font-serif leading-none">
                "
              </div>
              
              <div className="flex text-[#ffb800] text-lg mb-6">
                {"★".repeat(review.rating)}
              </div>
              
              <p className="text-[0.95rem] leading-relaxed text-on-surface-variant flex-grow mb-8 italic relative z-10">
                "{review.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto border-t border-black/5 pt-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-on-surface">{review.name}</h4>
                  <p className="text-xs text-on-surface-variant font-medium">
                    {review.role}, {review.company}
                  </p>
                </div>
                <div className="ml-auto">
                   <span className="inline-flex rounded-full bg-[#eaefdd] px-2 py-0.5 text-[0.65rem] font-bold tracking-widest text-[#4d7237] uppercase">
                     {review.type}
                   </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
