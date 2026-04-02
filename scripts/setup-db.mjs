import { randomBytes, scryptSync } from "node:crypto";
import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL_UNPOOLED && !process.env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL or DATABASE_URL_UNPOOLED");
}

const sql = neon(process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL);

function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

const hero = {
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

const missionVision = {
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

const settings = {
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

const products = [
  {
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

const qualityStandards = [
  {
    badge: "01",
    title: "ISO Certified",
    description:
      "International certification ensuring our processes meet stringent global quality management expectations.",
    sortOrder: 1,
  },
  {
    badge: "02",
    title: "Global GAP",
    description:
      "Compliance with Good Agricultural Practices for sustainable and safe food production.",
    sortOrder: 2,
  },
  {
    badge: "03",
    title: "Organic Focus",
    description:
      "A disciplined approach to produce quality, purity, and buyer confidence.",
    sortOrder: 3,
  },
  {
    badge: "04",
    title: "Cold Chain Control",
    description:
      "Temperature monitoring from harvest to delivery to preserve freshness in transit.",
    sortOrder: 4,
  },
];

const homepageImages = [
  {
    sectionKey: "hero",
    slotKey: "hero-main",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuogIsQjb2mQEqlcUzcnkLpFF_mLTeG_7vyn9icip55fu-WHzc_-b4Os73HGKqxxXxAOwqSr3vh976Hse5TJV5Uin4YTuIdqO7-ZIn1T4wI0hPDx215Kky71fOt6LdBC7kWFOu0aZ-esUYMqQhzJmE8GMeY9OQDAKIEJEGTxSRlJCXM73q5k2g6Ss6i2Lri5R8wgxU6AGgKn1xe9jy8000gPE4JWpnTALMyac4UEY2tIRUD5NF5xcGXcTD-3jsxBXbyY3vRT7_ULoD",
    alt: "Lush Kerala plantations — the source of Muzari premium exports",
    sortOrder: 1,
  },
  {
    sectionKey: "banana_gallery",
    slotKey: "banana-1",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD22HSou1rG2SCGYlIaJ7HwbGw1viRyODBc-NRqNbYaCWdYucu7y4n8UdVaY9UFj2Dn1CoxGqU2tYS4Ysjx5NCjMbiNV-BOJP-t_h8EJeaSPnV9TKg-_g2gAATH-TRwZg0ZVikpfFEzoOr_MKjS_kqwWQuNvqgGUhuv2p1Ib8Xwe1y0ByBOeMExQ_vjaufER-TX2x7mcaLRDazanfTQbydRdd7MZFAQmjYAfbd2sV2Nnr1Riytis8CWn8fkkbgXKihZ2GLG4Y7q2Ti3",
    alt: "Fresh Nendran bananas from Wayanad",
    sortOrder: 1,
  },
  {
    sectionKey: "banana_gallery",
    slotKey: "banana-2",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoBl8WkkxqCnNS4i4Vxsmr3VVXX1eoSR901X1wxksSmdjmNB4-ozojXqFKcp4rhMIpvRbITdAi2J5Hxw5ukm_zJqMoCSUGcZwUyqOPqYEvMRXUKbnBq9fWYx3uY5aSv8oFG8weXwdXRbBc8lE0mIWgSduurK4jq6tEzMCAZGaUTnVD6iVqMDs74vj9GTnEpdLM23yR9tr4_TL3HpysHTdW6Oa8QszGQ7ExEf8DiN7zEuVylvp4LOItDtk5NAf_llgj8rCd-HX_JhzR",
    alt: "Dried banana slices ready for export packaging",
    sortOrder: 2,
  },
  {
    sectionKey: "banana_gallery",
    slotKey: "banana-3",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6LcBGHpx5b6IJxL47gJhcOBEfK6_kebIMSmdjL-dZul8a9z3xQrl-l9vWXhyTRZwJF9eJ-WEWdfyviw9dS_kEga-xonGi_aMO3Ub1JVLWjzzt_oZ6LtdiPXso73_QYeihFx_UQpf_J1SEX1nrSwxO1BmlBS-ix-JFpeTz2dwU2ZuNCSZRY5itRHFWXT3eyVx45dlMeJtBzTIctRsuHFmOKv0cST6BYNxOfbYfMiV9oyl5Jnv9PuAFTGQxq2FA03Ri2bROLyxDWn-i",
    alt: "Nendran banana powder for food processing",
    sortOrder: 3,
  },
  {
    sectionKey: "banana_gallery",
    slotKey: "banana-4",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBl3sANOSbrJ8aYTUWv_BahDxRIckgvcH2S5Ztkr4h2ZL4pDTMSx8mgNt_CSsh_gnZas37xj5n_Aj2hsvjmovf_NoM_9UAnS5yMlNbbQm8EsxL29OCuIEQdxLIfu_Pdjrb7IePPPQcMEhvLpfXDi1ugzuxy3VlNvuOkC7jGOT1tgpYP-6fS13iR243yrrZEFYmt7ThmxiGLi9caEFHFrRDrel55x8csFJ9HTbkjlIRG23mRQdcNvMq812BMdA23BELVkmHH552KxD-F",
    alt: "Ripe yellow Nendran bananas for fresh export",
    sortOrder: 4,
  },
];

await sql`CREATE TABLE IF NOT EXISTS admin_users (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  display_name TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
)`;

await sql`CREATE TABLE IF NOT EXISTS site_settings (
  id INTEGER PRIMARY KEY,
  tapioca_eyebrow TEXT NOT NULL,
  tapioca_title TEXT NOT NULL,
  tapioca_description TEXT NOT NULL,
  tapioca_cta_label TEXT NOT NULL,
  tapioca_cta_href TEXT NOT NULL,
  banana_eyebrow TEXT NOT NULL,
  banana_title TEXT NOT NULL,
  banana_accent TEXT NOT NULL,
  banana_description TEXT NOT NULL,
  banana_cta_label TEXT NOT NULL,
  banana_cta_href TEXT NOT NULL,
  inquiry_badge TEXT NOT NULL,
  inquiry_title TEXT NOT NULL,
  inquiry_description TEXT NOT NULL,
  inquiry_response_note TEXT NOT NULL,
  inquiry_focus_note TEXT NOT NULL,
  footer_description TEXT NOT NULL,
  footer_cta_label TEXT NOT NULL
)`;

await sql`CREATE TABLE IF NOT EXISTS hero_section (
  id INTEGER PRIMARY KEY,
  eyebrow TEXT NOT NULL,
  title_line_one TEXT NOT NULL,
  title_line_two TEXT NOT NULL,
  description TEXT NOT NULL,
  primary_cta_label TEXT NOT NULL,
  primary_cta_href TEXT NOT NULL,
  secondary_cta_label TEXT NOT NULL,
  secondary_cta_href TEXT NOT NULL,
  trust_note TEXT NOT NULL
)`;

await sql`CREATE TABLE IF NOT EXISTS mission_vision (
  id INTEGER PRIMARY KEY,
  mission_text TEXT NOT NULL,
  vision_text TEXT NOT NULL,
  principles JSONB NOT NULL DEFAULT '[]'::jsonb
)`;

await sql`CREATE TABLE IF NOT EXISTS products (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  alt_text TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  featured BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
)`;

await sql`CREATE TABLE IF NOT EXISTS quality_standards (
  id BIGSERIAL PRIMARY KEY,
  badge TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
)`;

await sql`CREATE TABLE IF NOT EXISTS inquiries (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  product TEXT NOT NULL,
  details TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
)`;

await sql`CREATE TABLE IF NOT EXISTS homepage_images (
  id BIGSERIAL PRIMARY KEY,
  section_key TEXT NOT NULL,
  slot_key TEXT NOT NULL,
  src TEXT NOT NULL,
  alt TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (section_key, slot_key)
)`;

await sql`
  INSERT INTO hero_section (
    id, eyebrow, title_line_one, title_line_two, description,
    primary_cta_label, primary_cta_href, secondary_cta_label,
    secondary_cta_href, trust_note
  )
  VALUES (
    1, ${hero.eyebrow}, ${hero.titleLineOne}, ${hero.titleLineTwo},
    ${hero.description}, ${hero.primaryCtaLabel}, ${hero.primaryCtaHref},
    ${hero.secondaryCtaLabel}, ${hero.secondaryCtaHref}, ${hero.trustNote}
  )
  ON CONFLICT (id) DO UPDATE SET
    eyebrow = EXCLUDED.eyebrow,
    title_line_one = EXCLUDED.title_line_one,
    title_line_two = EXCLUDED.title_line_two,
    description = EXCLUDED.description,
    primary_cta_label = EXCLUDED.primary_cta_label,
    primary_cta_href = EXCLUDED.primary_cta_href,
    secondary_cta_label = EXCLUDED.secondary_cta_label,
    secondary_cta_href = EXCLUDED.secondary_cta_href,
    trust_note = EXCLUDED.trust_note
`;

await sql`
  INSERT INTO mission_vision (id, mission_text, vision_text, principles)
  VALUES (1, ${missionVision.missionText}, ${missionVision.visionText}, ${JSON.stringify(missionVision.principles)}::jsonb)
  ON CONFLICT (id) DO UPDATE SET
    mission_text = EXCLUDED.mission_text,
    vision_text = EXCLUDED.vision_text,
    principles = EXCLUDED.principles
`;

await sql`
  INSERT INTO site_settings (
    id, tapioca_eyebrow, tapioca_title, tapioca_description, tapioca_cta_label,
    tapioca_cta_href, banana_eyebrow, banana_title, banana_accent,
    banana_description, banana_cta_label, banana_cta_href, inquiry_badge,
    inquiry_title, inquiry_description, inquiry_response_note,
    inquiry_focus_note, footer_description, footer_cta_label
  )
  VALUES (
    1, ${settings.tapiocaEyebrow}, ${settings.tapiocaTitle},
    ${settings.tapiocaDescription}, ${settings.tapiocaCtaLabel},
    ${settings.tapiocaCtaHref}, ${settings.bananaEyebrow},
    ${settings.bananaTitle}, ${settings.bananaAccent},
    ${settings.bananaDescription}, ${settings.bananaCtaLabel},
    ${settings.bananaCtaHref}, ${settings.inquiryBadge},
    ${settings.inquiryTitle}, ${settings.inquiryDescription},
    ${settings.inquiryResponseNote}, ${settings.inquiryFocusNote},
    ${settings.footerDescription}, ${settings.footerCtaLabel}
  )
  ON CONFLICT (id) DO UPDATE SET
    tapioca_eyebrow = EXCLUDED.tapioca_eyebrow,
    tapioca_title = EXCLUDED.tapioca_title,
    tapioca_description = EXCLUDED.tapioca_description,
    tapioca_cta_label = EXCLUDED.tapioca_cta_label,
    tapioca_cta_href = EXCLUDED.tapioca_cta_href,
    banana_eyebrow = EXCLUDED.banana_eyebrow,
    banana_title = EXCLUDED.banana_title,
    banana_accent = EXCLUDED.banana_accent,
    banana_description = EXCLUDED.banana_description,
    banana_cta_label = EXCLUDED.banana_cta_label,
    banana_cta_href = EXCLUDED.banana_cta_href,
    inquiry_badge = EXCLUDED.inquiry_badge,
    inquiry_title = EXCLUDED.inquiry_title,
    inquiry_description = EXCLUDED.inquiry_description,
    inquiry_response_note = EXCLUDED.inquiry_response_note,
    inquiry_focus_note = EXCLUDED.inquiry_focus_note,
    footer_description = EXCLUDED.footer_description,
    footer_cta_label = EXCLUDED.footer_cta_label
`;

await sql`TRUNCATE TABLE products RESTART IDENTITY`;
for (const product of products) {
  await sql`
    INSERT INTO products (title, description, image_url, alt_text, sort_order, featured)
    VALUES (${product.title}, ${product.description}, ${product.imageUrl}, ${product.altText}, ${product.sortOrder}, ${product.featured})
  `;
}

await sql`TRUNCATE TABLE quality_standards RESTART IDENTITY`;
for (const standard of qualityStandards) {
  await sql`
    INSERT INTO quality_standards (badge, title, description, sort_order)
    VALUES (${standard.badge}, ${standard.title}, ${standard.description}, ${standard.sortOrder})
  `;
}

for (const image of homepageImages) {
  await sql`
    INSERT INTO homepage_images (section_key, slot_key, src, alt, sort_order)
    VALUES (
      ${image.sectionKey},
      ${image.slotKey},
      ${image.src},
      ${image.alt},
      ${image.sortOrder}
    )
    ON CONFLICT (section_key, slot_key) DO UPDATE SET
      src = EXCLUDED.src,
      alt = EXCLUDED.alt,
      sort_order = EXCLUDED.sort_order,
      updated_at = NOW()
  `;
}

const bootstrapEmail = process.env.ADMIN_BOOTSTRAP_EMAIL;
const bootstrapPassword = process.env.ADMIN_BOOTSTRAP_PASSWORD;

if (bootstrapEmail && bootstrapPassword) {
  const passwordHash = hashPassword(bootstrapPassword);
  const displayName = bootstrapEmail.split("@")[0] || "Admin";

  await sql`
    INSERT INTO admin_users (email, display_name, password_hash)
    VALUES (${bootstrapEmail.toLowerCase()}, ${displayName}, ${passwordHash})
    ON CONFLICT (email) DO UPDATE SET
      display_name = EXCLUDED.display_name,
      password_hash = EXCLUDED.password_hash,
      updated_at = NOW()
  `;
}

console.log("Database setup complete.");
if (bootstrapEmail) {
  console.log(`Bootstrap admin ready for: ${bootstrapEmail}`);
}
