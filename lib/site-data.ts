export type Product = {
  name: string;
  label: string;
  image: string;
  imageAlt: string;
  summary: string;
  details: string[];
};

export const products: Product[] = [
  {
    name: "Farm-Fresh Bananas",
    label: "Harvested Daily",
    image: "/bananas.png",
    imageAlt: "Freshly harvested green Cavendish bananas",
    summary:
      "Grown under the tropical sun and hand-harvested at the exact moment of maturity for dependable export quality.",
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

export const processSteps = [
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

export const aboutPreview = {
  eyebrow: "Who We Are",
  title: "A farm-rooted export partner built for long-term buyers.",
  intro:
    "Muzari Exports connects international markets to carefully grown Indian produce with a direct, practical sourcing model.",
  body:
    "We combine field knowledge, disciplined handling, and export-minded coordination so buyers receive produce that is fresh, consistent, and ready for global shipment.",
  points: [
    "Farm-direct sourcing with hands-on crop oversight",
    "Buyer-focused quality checks before dispatch",
    "Reliable communication for repeat export orders",
  ],
};

export const aboutPageContent = {
  eyebrow: "About Muzari",
  title: "We grow trust the same way we grow produce: carefully, consistently, and close to the source.",
  intro:
    "Muzari Exports is a farm-connected agricultural export business serving buyers who need fresh produce, dependable handling, and straightforward supply relationships from India.",
  sections: [
    {
      heading: "Who We Are",
      text:
        "We are a produce-focused export partner with roots in practical farming. Our work starts close to the fields, where crop quality, harvesting discipline, and timing matter most.",
    },
    {
      heading: "How We Work",
      text:
        "We keep the process direct: careful sourcing, close product observation, export-ready packing, and clear communication with buyers who need dependable supply.",
    },
    {
      heading: "Why Buyers Choose Us",
      text:
        "International buyers work with Muzari for consistency, responsiveness, and a sourcing model that stays grounded in the realities of farming rather than pure brokerage.",
    },
  ],
  values: [
    "Consistency in harvest and handling",
    "Transparency from inquiry to shipment",
    "Respect for long-term buyer relationships",
    "A practical farm-to-port mindset",
  ],
};

export const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Farming", href: "/#farming" },
  { label: "Contact", href: "/#contact" },
];

export const whyChooseUs = [
  {
    title: "Farm-Direct Sourcing",
    text: "We source our produce directly from verified farms, eliminating middlemen and ensuring maximum freshness at origin. This direct relationship guarantees traceability from soil to shipment, giving our buyers complete confidence in product authenticity and quality.",
  },
  {
    title: "Precision Grading Standards",
    text: "Every product undergoes a rigorous, uniform grading process aligned with international export benchmarks. Our standardized system ensures consistency in size, color, and quality across every shipment, so buyers always receive exactly what they expect.",
  },
  {
    title: "Cold Chain & Shelf Life Optimization",
    text: "From harvest to port, our end-to-end cold chain infrastructure maintains optimal temperature and humidity at every stage. This scientifically managed process significantly extends shelf life, reducing spoilage and maximizing value for our international partners.",
  },
  {
    title: "Real-Time Shipment Tracking",
    text: "Our integrated tracking system provides live visibility into every order — from farm dispatch to final delivery. Buyers receive real-time updates, ensuring full transparency, proactive communication, and zero surprises at destination.",
  },
  {
    title: "Partnerships with 35+ Verified Farmers",
    text: "We work in close collaboration with a network of over 35 contracted farmers who meet our strict quality and sustainability criteria. This robust supply network ensures consistent volume availability and uninterrupted supply even during peak demand seasons.",
  },
  {
    title: "30+ Years of Agricultural Heritage",
    text: "Rooted in three decades of farming expertise, our deep agronomic knowledge sets us apart in the export industry. This generational experience informs every decision we make — from crop selection to post-harvest handling — delivering produce of exceptional and dependable quality.",
  },
];

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/#contact" },
];

export function getWhatsAppHref() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/[^0-9]/g, "");
  return phone ? `https://wa.me/${phone}` : "/#contact";
}
