// Types for editable site content stored in Vercel Blob

export type HeroContent = {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  body: string;
  ctaPrimary: string;
  ctaSecondary: string;
  stats: { num: string; lbl: string }[];
  origin: string;
};

export type ProductContent = {
  name: string;
  label: string;
  image: string;
  imageAlt: string;
  summary: string;
  details: string[];
  specs: { label: string; value: string }[];
};

export type SiteContent = {
  heroes: {
    home: HeroContent;
    about: HeroContent;
    products: HeroContent;
    farming: HeroContent;
    contact: {
      eyebrow: string;
      headline: string;
      headlineAccent: string;
      email: string;
      phone1: string;
      phone2: string;
      address: string;
      whatsapp1: string;
      whatsapp2: string;
      facebookUrl: string;
    };
  };
  products: ProductContent[];
  company: {
    name: string;
    tagline: string;
    mission: string;
    vision: string;
    whatsappPhone: string;
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    sections: { heading: string; text: string }[];
    values: string[];
  };
};

export const BLOB_CONTENT_KEY = 'muzari-site-content.json';
