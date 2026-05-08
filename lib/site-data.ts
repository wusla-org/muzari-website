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
    name: "Robusta Banana",
    label: "Premium Variety",
    image: "/robusta_banana.png",
    imageAlt: "Professional studio shot of green Robusta bananas",
    summary:
      "High-quality Robusta bananas, known for their consistent size and vibrant flavor, harvested at peak maturity.",
    details: ["Uniform grading", "Global demand", "Cold-chain ready"],
  },
  {
    name: "Nethra Banana",
    label: "Elite Variety",
    image: "/nethra_banana.png",
    imageAlt: "Premium Nethra bananas (Plantains) studio shot",
    summary:
      "Prized Nethra (Plantain) bananas, hand-picked for their distinct texture and nutritional value.",
    details: ["Hand-harvested", "Rich nutrition", "Export standard"],
  },
  {
    name: "Premium Tapioca",
    label: "Soil to Port",
    image: "/tapioca_premium.png",
    imageAlt: "Cleaned and graded Tapioca roots studio shot",
    summary:
      "Superior grade Tapioca (Cassava) roots, meticulously cleaned and graded for the global market.",
    details: ["Meticulously cleaned", "Thick healthy roots", "Long shelf life"],
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
  eyebrow: "Our Heritage",
  title: "Cultivators with a 30-Year Agricultural Legacy.",
  intro:
    "Muzari Exports is built on over three decades of hands-on farming experience, rooted deeply in India’s rich agricultural soil.",
  body:
    "We are not just exporters — we are cultivators. Our journey began with the cultivation of bananas, paddy, and traditional vegetables, evolving into a trusted bridge that delivers premium Indian produce to international markets with absolute consistency.",
  points: [
    "30+ years of direct hands-on farming experience",
    "Exporters who understand cultivation at the root level",
    "Direct bridge from Indian farms to global ports",
  ],
};

export const missionVision = {
  mission: {
    title: "Mission",
    text: "Delivering premium Indian vegetables, fruits, and spices globally with quality, reliability, and sustainability.",
  },
  vision: {
    title: "Vision",
    text: "To become a globally trusted brand, representing India’s excellence in fresh produce.",
  },
};

export const aboutPageContent = {
  eyebrow: "About Muzari",
  title: "Indian Exporter of Fresh Vegetables, Fruits & Spices",
  intro:
    "Our journey began over three decades ago, deeply rooted in India’s rich agricultural heritage. What started with the cultivation of bananas, paddy, and a variety of vegetables has evolved into a trusted agricultural export company.",
  sections: [
    {
      heading: "Our Farming Roots",
      text:
        "We are not just exporters — we are cultivators with over 30 years of hands-on farming experience. This foundation gives us a distinct advantage in quality control, seasonal sourcing, and supply chain consistency, ensuring reliable delivery from farm to export.",
    },
    {
      heading: "Expertise in Quality",
      text:
        "Our core export portfolio includes fresh vegetables (especially banana and tapioca), fruits, and spices, sourced directly from farms and handled in compliance with international food safety and export standards.",
    },
    {
      heading: "A Direct Bridge",
      text:
        "Today, we operate as a direct bridge from Indian farms to global markets, while ensuring authenticity, consistency, and quality in every shipment. We focus on dependable supply relationships and shipment-ready handling that supports long-term global buyers.",
    },
  ],
  values: [
    "30+ Years of Agricultural Heritage",
    "Farm-Direct Sourcing Excellence",
    "International Food Safety Compliance",
    "Consistency in Every Global Shipment",
    "Authenticity and Sustainability",
  ],
};

export const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Farming", href: "/farming" },
  { label: "Contact", href: "/contact" },
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
  { label: "Farming", href: "/farming" },
  { label: "Contact", href: "/contact" },
];

export function getWhatsAppHref() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/[^0-9]/g, "");
  return phone ? `https://wa.me/${phone}` : "/#contact";
}
