import { sql } from "@/lib/neon";

export type HeroContent = {
  eyebrow: string;
  titleLineOne: string;
  titleLineTwo: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  trustNote: string;
};

export type ImageAsset = {
  slotKey: string;
  src: string;
  alt: string;
};

export type MissionVisionContent = {
  missionText: string;
  visionText: string;
  principles: string[];
};

export type ProductContent = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  sortOrder: number;
  featured: boolean;
};

export type QualityStandardContent = {
  id: number;
  badge: string;
  title: string;
  description: string;
  sortOrder: number;
};

export type SiteSettingsContent = {
  tapiocaEyebrow: string;
  tapiocaTitle: string;
  tapiocaDescription: string;
  tapiocaCtaLabel: string;
  tapiocaCtaHref: string;
  bananaEyebrow: string;
  bananaTitle: string;
  bananaAccent: string;
  bananaDescription: string;
  bananaCtaLabel: string;
  bananaCtaHref: string;
  inquiryBadge: string;
  inquiryTitle: string;
  inquiryDescription: string;
  inquiryResponseNote: string;
  inquiryFocusNote: string;
  footerDescription: string;
  footerCtaLabel: string;
};

export type InquiryRecord = {
  id: number;
  name: string;
  email: string;
  organization: string | null;
  product: string;
  details: string | null;
  status: "new" | "in_progress" | "resolved";
  createdAt: string;
  updatedAt: string;
};

export type HomePageContent = {
  hero: HeroContent;
  heroImage: ImageAsset;
  missionVision: MissionVisionContent;
  bananaGallery: ImageAsset[];
  settings: SiteSettingsContent;
  products: ProductContent[];
  qualityStandards: QualityStandardContent[];
};

const defaultHero: HeroContent = {
  eyebrow: "Purity from Kerala",
  titleLineOne: "Kerala's Finest",
  titleLineTwo: "curated for world markets",
  description:
    "Bridging Kerala's lush plantations with global markets through a quieter, more disciplined export experience built around premium Tapioca and Nendran Banana produce.",
  primaryCtaLabel: "Explore Catalog",
  primaryCtaHref: "#collections",
  secondaryCtaLabel: "Our Heritage",
  secondaryCtaHref: "#mission",
  trustNote: "Export-led sourcing with a more premium buyer journey.",
};

const defaultMissionVision: MissionVisionContent = {
  missionText:
    "Delivering premium Indian produce globally with quality, reliability, and sustainability at the center.",
  visionText:
    "To become a globally trusted brand representing India's excellence in fresh produce.",
  principles: [
    "Premium Indian fruits and vegetables sourced with consistency and care.",
    "Reliable logistics and responsive communication for global trade partners.",
    "A clean, trust-first export identity rooted in Kerala's agricultural strength.",
  ],
};

const defaultHeroImage: ImageAsset = {
  slotKey: "hero-main",
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuogIsQjb2mQEqlcUzcnkLpFF_mLTeG_7vyn9icip55fu-WHzc_-b4Os73HGKqxxXxAOwqSr3vh976Hse5TJV5Uin4YTuIdqO7-ZIn1T4wI0hPDx215Kky71fOt6LdBC7kWFOu0aZ-esUYMqQhzJmE8GMeY9OQDAKIEJEGTxSRlJCXM73q5k2g6Ss6i2Lri5R8wgxU6AGgKn1xe9jy8000gPE4JWpnTALMyac4UEY2tIRUD5NF5xcGXcTD-3jsxBXbyY3vRT7_ULoD",
  alt: "Lush Kerala plantations — the source of Muzari premium exports",
};

const defaultBananaGallery: ImageAsset[] = [
  {
    slotKey: "banana-1",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD22HSou1rG2SCGYlIaJ7HwbGw1viRyODBc-NRqNbYaCWdYucu7y4n8UdVaY9UFj2Dn1CoxGqU2tYS4Ysjx5NCjMbiNV-BOJP-t_h8EJeaSPnV9TKg-_g2gAATH-TRwZg0ZVikpfFEzoOr_MKjS_kqwWQuNvqgGUhuv2p1Ib8Xwe1y0ByBOeMExQ_vjaufER-TX2x7mcaLRDazanfTQbydRdd7MZFAQmjYAfbd2sV2Nnr1Riytis8CWn8fkkbgXKihZ2GLG4Y7q2Ti3",
    alt: "Fresh Nendran bananas from Wayanad",
  },
  {
    slotKey: "banana-2",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoBl8WkkxqCnNS4i4Vxsmr3VVXX1eoSR901X1wxksSmdjmNB4-ozojXqFKcp4rhMIpvRbITdAi2J5Hxw5ukm_zJqMoCSUGcZwUyqOPqYEvMRXUKbnBq9fWYx3uY5aSv8oFG8weXwdXRbBc8lE0mIWgSduurK4jq6tEzMCAZGaUTnVD6iVqMDs74vj9GTnEpdLM23yR9tr4_TL3HpysHTdW6Oa8QszGQ7ExEf8DiN7zEuVylvp4LOItDtk5NAf_llgj8rCd-HX_JhzR",
    alt: "Dried banana slices ready for export packaging",
  },
  {
    slotKey: "banana-3",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6LcBGHpx5b6IJxL47gJhcOBEfK6_kebIMSmdjL-dZul8a9z3xQrl-l9vWXhyTRZwJF9eJ-WEWdfyviw9dS_kEga-xonGi_aMO3Ub1JVLWjzzt_oZ6LtdiPXso73_QYeihFx_UQpf_J1SEX1nrSwxO1BmlBS-ix-JFpeTz2dwU2ZuNCSZRY5itRHFWXT3eyVx45dlMeJtBzTIctRsuHFmOKv0cST6BYNxOfbYfMiV9oyl5Jnv9PuAFTGQxq2FA03Ri2bROLyxDWn-i",
    alt: "Nendran banana powder for food processing",
  },
  {
    slotKey: "banana-4",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBl3sANOSbrJ8aYTUWv_BahDxRIckgvcH2S5Ztkr4h2ZL4pDTMSx8mgNt_CSsh_gnZas37xj5n_Aj2hsvjmovf_NoM_9UAnS5yMlNbbQm8EsxL29OCuIEQdxLIfu_Pdjrb7IePPPQcMEhvLpfXDi1ugzuxy3VlNvuOkC7jGOT1tgpYP-6fS13iR243yrrZEFYmt7ThmxiGLi9caEFHFrRDrel55x8csFJ9HTbkjlIRG23mRQdcNvMq812BMdA23BELVkmHH552KxD-F",
    alt: "Ripe yellow Nendran bananas for fresh export",
  },
];

const defaultSettings: SiteSettingsContent = {
  tapiocaEyebrow: "Signature collection",
  tapiocaTitle: "The Tapioca Collection",
  tapiocaDescription:
    "Pure, organic cassava from the heart of Kerala, presented with a calmer visual rhythm and export-focused clarity.",
  tapiocaCtaLabel: "View All Varieties",
  tapiocaCtaHref: "#inquiry",
  bananaEyebrow: "Premium Export Variety",
  bananaTitle: "Nendran:",
  bananaAccent: "The Golden Banana",
  bananaDescription:
    "A unique cultivar indigenous to Kerala, known for its size, texture, and superior nutritional profile. We export across fresh and processed categories with a stronger buyer-facing presentation.",
  bananaCtaLabel: "Request Export Pricing",
  bananaCtaHref: "#inquiry",
  inquiryBadge: "Trade Inquiry",
  inquiryTitle: "Start a buyer conversation with the export desk.",
  inquiryDescription:
    "Share your product interest, volume requirements, and destination context. The interface is simple, but the presentation should feel premium and reassuring.",
  inquiryResponseNote: "Response window: within 24 hours for qualified inquiries.",
  inquiryFocusNote: "Focus categories: Tapioca, Nendran Bananas, starch, and chips.",
  footerDescription:
    "Representing India's excellence in fresh produce with a presentation that feels precise, global, and confident.",
  footerCtaLabel: "Start an Inquiry",
};

const defaultProducts: ProductContent[] = [
  {
    id: 1,
    title: "Premium Whole Root",
    description:
      "Hand-picked fresh cassava roots from the central Kerala belt, processed within hours of harvest.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDiDZgyv3xrx8FaQu0jWkqAGASh3Okze46dKeMq8pD_YNWxU_Ppa3SXNr4ivAmYOijZ_Hx6j39vN819ohakBNXQZfu6gWgkzpt-SnSW3nbgpTQkKz36Tx3mLOSAhopmrryHYRnRXd_9jS1YnYI59RWPqi1lDTKR6TQH6mjgs0-AU2syp94WW0OnjAiF9XAS6uR2YOO2CRNtEdAyIcAthbpB6_vjyJIk-gh4ygBi_2qgHUECRdkSZAFrb458EiiwUtIcZ-MDBM3stCun",
    altText: "Fresh whole tapioca roots from Kerala",
    sortOrder: 1,
    featured: false,
  },
  {
    id: 2,
    title: "Value-Added Chips",
    description:
      "Traditional Kerala style tapioca slices, vacuum packed for global distribution with extended shelf life.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6qgb5-oRSGoiwD6fvl_1QSoAV45yJ2k-MPEBc2Xw5Cu4QqSeWjE6BNF0GOXz8yruRFcXbsFFriXa5HzXpC8RD2HxeVSmOp5HqkC5ELgzHE_nqWiTkS5-Drjf2SaeLaUpxT5jiGcBwDqwjH7j3sOwoqVJOlUtvaAa9OP8m7yfgUrMtuD3hl4vk00z8Ui6P-8grvnGwfyNceW3uhOcQAelpk2hWsmJtrTTl9V8OYx7b745O6WFM5nQCYPsZ7GCkZh1Y3jqmAcLBJt_S",
    altText: "Kerala-style tapioca chips ready for export",
    sortOrder: 2,
    featured: true,
  },
  {
    id: 3,
    title: "Organic Starch",
    description:
      "Triple-refined high-viscosity starch suitable for food industry and textile manufacturing exports.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIbS98a5PZu1Nji_0Z1in_TuoOR9O4fK0kEOZxVb3KDNK_UpYflpJYXTuMZhS6Tl1IYpeTAQcBqrlgtU8enKZjT-Bmb09YL29FwD2Tx300270p7U7OsUHwgDfwmf9xyfJg83V06axzAbjI7w0g7TRp1SP8mae1C2DwWAFAp4SiN10F3zmJ--GWtyr7zHoeuZMNC9Fl9-PlQ3c9mbySJVKDZxjGNTCbuEU00YGwBFACi5HxpMlqWL7D3nV86vGndfBtbnG7oZ0yaEsy",
    altText: "Refined organic tapioca starch for industrial export",
    sortOrder: 3,
    featured: false,
  },
];

const defaultQualityStandards: QualityStandardContent[] = [
  {
    id: 1,
    badge: "01",
    title: "ISO Certified",
    description:
      "International certification ensuring our processes meet stringent global quality management expectations.",
    sortOrder: 1,
  },
  {
    id: 2,
    badge: "02",
    title: "Global GAP",
    description:
      "Compliance with Good Agricultural Practices for sustainable and safe food production.",
    sortOrder: 2,
  },
  {
    id: 3,
    badge: "03",
    title: "Organic Focus",
    description:
      "A disciplined approach to produce quality, purity, and buyer confidence.",
    sortOrder: 3,
  },
  {
    id: 4,
    badge: "04",
    title: "Cold Chain Control",
    description:
      "Temperature monitoring from harvest to delivery to preserve freshness in transit.",
    sortOrder: 4,
  },
];

function sanitizeImageAsset(
  row: { slotKey?: unknown; src?: unknown; alt?: unknown } | undefined,
  fallback: ImageAsset,
): ImageAsset {
  const src = row?.src ? String(row.src).trim() : "";
  const alt = row?.alt ? String(row.alt).trim() : "";

  return {
    slotKey: row?.slotKey ? String(row.slotKey) : fallback.slotKey,
    src: src || fallback.src,
    alt: alt || fallback.alt,
  };
}

export async function getHomePageContent(): Promise<HomePageContent> {
  try {
    const [heroRow] = await sql`
      SELECT
        eyebrow,
        title_line_one AS "titleLineOne",
        title_line_two AS "titleLineTwo",
        description,
        primary_cta_label AS "primaryCtaLabel",
        primary_cta_href AS "primaryCtaHref",
        secondary_cta_label AS "secondaryCtaLabel",
        secondary_cta_href AS "secondaryCtaHref",
        trust_note AS "trustNote"
      FROM hero_section
      WHERE id = 1
    `;

    const [missionVisionRow] = await sql`
      SELECT
        mission_text AS "missionText",
        vision_text AS "visionText",
        principles
      FROM mission_vision
      WHERE id = 1
    `;

    const [settingsRow] = await sql`
      SELECT
        tapioca_eyebrow AS "tapiocaEyebrow",
        tapioca_title AS "tapiocaTitle",
        tapioca_description AS "tapiocaDescription",
        tapioca_cta_label AS "tapiocaCtaLabel",
        tapioca_cta_href AS "tapiocaCtaHref",
        banana_eyebrow AS "bananaEyebrow",
        banana_title AS "bananaTitle",
        banana_accent AS "bananaAccent",
        banana_description AS "bananaDescription",
        banana_cta_label AS "bananaCtaLabel",
        banana_cta_href AS "bananaCtaHref",
        inquiry_badge AS "inquiryBadge",
        inquiry_title AS "inquiryTitle",
        inquiry_description AS "inquiryDescription",
        inquiry_response_note AS "inquiryResponseNote",
        inquiry_focus_note AS "inquiryFocusNote",
        footer_description AS "footerDescription",
        footer_cta_label AS "footerCtaLabel"
      FROM site_settings
      WHERE id = 1
    `;

    const productRows = await sql`
      SELECT
        id,
        title,
        description,
        image_url AS "imageUrl",
        alt_text AS "altText",
        sort_order AS "sortOrder",
        featured
      FROM products
      ORDER BY sort_order ASC, id ASC
    `;

    const qualityRows = await sql`
      SELECT
        id,
        badge,
        title,
        description,
        sort_order AS "sortOrder"
      FROM quality_standards
      ORDER BY sort_order ASC, id ASC
    `;

    const imageRows = await sql`
      SELECT
        section_key AS "sectionKey",
        slot_key AS "slotKey",
        src,
        alt,
        sort_order AS "sortOrder"
      FROM homepage_images
      ORDER BY section_key ASC, sort_order ASC, slot_key ASC
    `;

    const heroImageRow = imageRows.find((image) => image.sectionKey === "hero");
    const bananaImageRows = imageRows.filter(
      (image) => image.sectionKey === "banana_gallery",
    );

    return {
      hero: heroRow
        ? {
            eyebrow: String(heroRow.eyebrow),
            titleLineOne: String(heroRow.titleLineOne),
            titleLineTwo: String(heroRow.titleLineTwo),
            description: String(heroRow.description),
            primaryCtaLabel: String(heroRow.primaryCtaLabel),
            primaryCtaHref: String(heroRow.primaryCtaHref),
            secondaryCtaLabel: String(heroRow.secondaryCtaLabel),
            secondaryCtaHref: String(heroRow.secondaryCtaHref),
            trustNote: String(heroRow.trustNote),
          }
        : defaultHero,
      heroImage: sanitizeImageAsset(heroImageRow, defaultHeroImage),
      missionVision: missionVisionRow
        ? {
            missionText: String(missionVisionRow.missionText),
            visionText: String(missionVisionRow.visionText),
            principles: Array.isArray(missionVisionRow.principles)
              ? missionVisionRow.principles.map((principle) => String(principle))
              : defaultMissionVision.principles,
          }
        : defaultMissionVision,
      bananaGallery: defaultBananaGallery.map((fallbackImage, index) =>
        sanitizeImageAsset(
          bananaImageRows[index] as
            | { slotKey?: unknown; src?: unknown; alt?: unknown }
            | undefined,
          fallbackImage,
        ),
      ),
      settings: settingsRow
        ? {
            tapiocaEyebrow: String(settingsRow.tapiocaEyebrow),
            tapiocaTitle: String(settingsRow.tapiocaTitle),
            tapiocaDescription: String(settingsRow.tapiocaDescription),
            tapiocaCtaLabel: String(settingsRow.tapiocaCtaLabel),
            tapiocaCtaHref: String(settingsRow.tapiocaCtaHref),
            bananaEyebrow: String(settingsRow.bananaEyebrow),
            bananaTitle: String(settingsRow.bananaTitle),
            bananaAccent: String(settingsRow.bananaAccent),
            bananaDescription: String(settingsRow.bananaDescription),
            bananaCtaLabel: String(settingsRow.bananaCtaLabel),
            bananaCtaHref: String(settingsRow.bananaCtaHref),
            inquiryBadge: String(settingsRow.inquiryBadge),
            inquiryTitle: String(settingsRow.inquiryTitle),
            inquiryDescription: String(settingsRow.inquiryDescription),
            inquiryResponseNote: String(settingsRow.inquiryResponseNote),
            inquiryFocusNote: String(settingsRow.inquiryFocusNote),
            footerDescription: String(settingsRow.footerDescription),
            footerCtaLabel: String(settingsRow.footerCtaLabel),
          }
        : defaultSettings,
      products: productRows.length
        ? productRows.map((product) => ({
            id: Number(product.id),
            title: String(product.title),
            description: String(product.description),
            imageUrl: String(product.imageUrl),
            altText: String(product.altText),
            sortOrder: Number(product.sortOrder),
            featured: Boolean(product.featured),
          }))
        : defaultProducts,
      qualityStandards: qualityRows.length
        ? qualityRows.map((standard) => ({
            id: Number(standard.id),
            badge: String(standard.badge),
            title: String(standard.title),
            description: String(standard.description),
            sortOrder: Number(standard.sortOrder),
          }))
        : defaultQualityStandards,
    };
  } catch {
    return {
      hero: defaultHero,
      heroImage: defaultHeroImage,
      missionVision: defaultMissionVision,
      bananaGallery: defaultBananaGallery,
      settings: defaultSettings,
      products: defaultProducts,
      qualityStandards: defaultQualityStandards,
    };
  }
}

export async function getProducts() {
  const content = await getHomePageContent();
  return content.products;
}

export async function getQualityStandards() {
  const content = await getHomePageContent();
  return content.qualityStandards;
}

export async function getInquiries(): Promise<InquiryRecord[]> {
  try {
    const rows = await sql`
      SELECT
        id,
        name,
        email,
        organization,
        product,
        details,
        status,
        created_at AS "createdAt",
        updated_at AS "updatedAt"
      FROM inquiries
      ORDER BY created_at DESC
    `;

    return rows.map((row) => ({
      id: Number(row.id),
      name: String(row.name),
      email: String(row.email),
      organization: row.organization ? String(row.organization) : null,
      product: String(row.product),
      details: row.details ? String(row.details) : null,
      status: row.status as InquiryRecord["status"],
      createdAt: String(row.createdAt),
      updatedAt: String(row.updatedAt),
    }));
  } catch {
    return [];
  }
}
