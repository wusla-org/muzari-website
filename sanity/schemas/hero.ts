import { defineType, defineField } from "sanity";

export const heroSchema = defineType({
  name: "hero",
  title: "Hero Sections",
  type: "document",
  fields: [
    defineField({
      name: "page",
      title: "Page",
      type: "string",
      options: {
        list: [
          { title: "Home Page", value: "home" },
          { title: "About Page", value: "about" },
          { title: "Products Page", value: "products" },
          { title: "Farming Page", value: "farming" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow Label",
      description: "Small text above the headline",
      type: "string",
    }),
    defineField({
      name: "headline",
      title: "Main Headline",
      description: "The primary dark headline text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "headlineAccent",
      title: "Accent Headline",
      description: "Green italic text below the main headline",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Body Text",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "ctaPrimary",
      title: "Primary Button Text",
      type: "string",
    }),
    defineField({
      name: "ctaSecondary",
      title: "Secondary Button Text",
      type: "string",
    }),
    defineField({
      name: "origin",
      title: "Origin Badge",
      description: "Text shown in the bottom badge (e.g. Kerala, India)",
      type: "string",
    }),
  ],
  preview: {
    select: { title: "headline", subtitle: "page" },
    prepare({ title, subtitle }) {
      const labels: Record<string, string> = {
        home: "Home Page",
        about: "About Page",
        products: "Products Page",
        farming: "Farming Page",
      };
      return { title, subtitle: labels[subtitle] ?? subtitle };
    },
  },
});
