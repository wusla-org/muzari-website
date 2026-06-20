import { sanityClient } from "./sanity";

// ── Products ─────────────────────────────────────────────────────────────────
export const allProductsQuery = `*[_type == "product"] | order(order asc) {
  _id,
  name,
  label,
  summary,
  "image": image.asset->url,
  "imageAlt": image.alt,
  details,
  specs,
  order,
  "slug": slug.current
}`;

// ── Hero Sections ─────────────────────────────────────────────────────────────
export const heroByPageQuery = `*[_type == "hero" && page == $page][0] {
  eyebrow,
  headline,
  headlineAccent,
  body,
  ctaPrimary,
  ctaSecondary,
  origin
}`;

export const allHeroesQuery = `*[_type == "hero"] | order(page asc) {
  page,
  eyebrow,
  headline,
  headlineAccent,
  body,
  ctaPrimary,
  ctaSecondary,
  origin
}`;

// ── Site Settings ─────────────────────────────────────────────────────────────
export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  aboutIntro,
  aboutMission,
  aboutVision,
  aboutValues,
  aboutSections,
  email,
  phone1,
  phone1wa,
  phone2,
  phone2wa,
  address,
  whatsappPhone,
  facebookUrl,
  "logoDark": logoDark.asset->url,
  "logoLight": logoLight.asset->url,
  "heroHome": heroHome.asset->url,
  "heroFarming": heroFarming.asset->url
}`;

// ── Fetch helpers ─────────────────────────────────────────────────────────────

export async function getSanityProducts() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return null;
  try {
    return await sanityClient.fetch(allProductsQuery);
  } catch {
    return null;
  }
}

export async function getSanityHero(page: string) {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return null;
  try {
    return await sanityClient.fetch(heroByPageQuery, { page });
  } catch {
    return null;
  }
}

export async function getSanitySettings() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return null;
  try {
    return await sanityClient.fetch(siteSettingsQuery);
  } catch {
    return null;
  }
}
