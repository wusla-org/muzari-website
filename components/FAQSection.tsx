import SchemaOrg from "@/components/SchemaOrg";

const faqs = [
  {
    question: "What agricultural products does Muzari Exports supply?",
    answer:
      "Muzari Exports supplies premium Kerala Tapioca (cassava) in three forms — whole root, value-added chips, and triple-refined organic starch — as well as Nendran Banana products including fresh bunches, banana blossoms, dried slices, and banana powder. All products are sourced directly from Kerala's farming districts including Wayanad and Thrissur.",
  },
  {
    question:
      "What are the minimum order quantities for tapioca and banana exports?",
    answer:
      "We operate on a full container load (FCL) basis for international exports. Minimum order quantities vary by product and destination country. Submit a trade inquiry through our contact form and our export desk will respond within 24 hours with volume-specific pricing and MOQ details for your target market.",
  },
  {
    question: "What quality certifications does Muzari Exports hold?",
    answer:
      "Muzari Exports holds ISO quality management certification, complies with GlobalG.A.P. (Good Agricultural Practices) standards for sustainable and safe food production, follows an Organic Focus sourcing protocol, and maintains Cold Chain Control with temperature monitoring from harvest through port delivery to preserve freshness in transit.",
  },
  {
    question: "Which countries does Muzari Exports ship to?",
    answer:
      "We export to 35+ countries across Europe, Asia, the Middle East, and the Americas. Our logistics network supports compliance with import regulations in major agricultural import markets. Contact our export desk to confirm availability and compliance for your specific destination country.",
  },
  {
    question:
      "How is product freshness maintained during international shipping?",
    answer:
      "Freshness is preserved through our end-to-end Cold Chain Control system — temperature-monitored storage from harvest, rapid processing within hours of harvest for fresh produce, vacuum-sealed packaging for chips and processed products, and refrigerated container logistics to maintain product integrity through port-to-door delivery.",
  },
  {
    question: "How do I initiate a trade inquiry with Muzari Exports?",
    answer:
      "Use the Trade Inquiry form on our website to share your product interest, target volume, destination country, and any specific requirements. Our export desk reviews all qualified inquiries within 24 hours. You can also reach us via WhatsApp for faster communication on urgent sourcing needs.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQSection() {
  return (
    <section id="faq" className="section-shell">
      <div className="content-shell">
        <div className="mb-12">
          <span className="eyebrow mb-4">FAQ</span>
          <h2 className="text-[2rem] font-extrabold leading-[1.3] tracking-[-0.03em] text-on-surface sm:text-[2.6rem] mt-4">
            Common Trade Questions
          </h2>
          <p className="mt-4 max-w-2xl text-base text-on-surface-variant leading-relaxed">
            Answers to the most common questions from global buyers and import partners.
          </p>
        </div>

        <div className="divide-y divide-black/5 max-w-3xl">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group py-5 cursor-pointer"
            >
              <summary className="flex items-center justify-between gap-4 list-none text-base font-semibold text-on-surface select-none">
                <span>{faq.question}</span>
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-lg transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-on-surface-variant leading-relaxed max-w-2xl">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
      <SchemaOrg data={faqSchema} />
    </section>
  );
}
