import { defineType, defineField } from "sanity";

export const productSchema = defineType({
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "label",
      title: "Badge Label",
      description: "Short label shown on the card (e.g. Premium Export)",
      type: "string",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      description: "Short description shown on the product card",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
        accept: "image/*",
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Describe the image for screen readers",
        }),
      ],
    }),
    defineField({
      name: "details",
      title: "Key Details",
      description: "Bullet points shown below the product description",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "specs",
      title: "Specifications",
      description: "Technical specs shown in a table",
      type: "array",
      of: [
        {
          type: "object",
          name: "spec",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "value", title: "Value", type: "string" }),
          ],
          preview: {
            select: { title: "label", subtitle: "value" },
          },
        },
      ],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      description: "Lower numbers appear first on the website",
      type: "number",
      initialValue: 99,
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      description: "Used for the product page URL (e.g. /products/robusta-banana)",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "label",
      media: "image",
    },
  },
});
