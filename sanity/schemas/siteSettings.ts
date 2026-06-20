import { defineType, defineField } from "sanity";

export const siteSettingsSchema = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    // ── About & Mission ──────────────────────────────────────────────────────
    defineField({
      name: "aboutIntro",
      title: "About — Introduction",
      type: "text",
      rows: 4,
      group: "about",
    }),
    defineField({
      name: "aboutMission",
      title: "About — Mission Statement",
      type: "text",
      rows: 4,
      group: "about",
    }),
    defineField({
      name: "aboutVision",
      title: "About — Vision Statement",
      type: "text",
      rows: 4,
      group: "about",
    }),
    defineField({
      name: "aboutValues",
      title: "About — Core Values",
      type: "array",
      of: [{ type: "string" }],
      group: "about",
    }),
    defineField({
      name: "aboutSections",
      title: "About — Story Sections",
      type: "array",
      of: [
        {
          type: "object",
          name: "section",
          fields: [
            defineField({ name: "heading", title: "Heading", type: "string" }),
            defineField({ name: "text", title: "Body Text", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "heading" } },
        },
      ],
      group: "about",
    }),
    // ── Contact Info ──────────────────────────────────────────────────────────
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "phone1",
      title: "Primary Phone",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "phone1wa",
      title: "Primary Phone (WhatsApp formatted)",
      description: "E.g. 919876543210 (country code + number, no +)",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "phone2",
      title: "Secondary Phone",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "phone2wa",
      title: "Secondary Phone (WhatsApp formatted)",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 3,
      group: "contact",
    }),
    defineField({
      name: "whatsappPhone",
      title: "WhatsApp Float Button Number",
      description: "Number used by the floating WhatsApp button",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "facebookUrl",
      title: "Facebook URL",
      type: "url",
      group: "contact",
    }),
    // ── Media ─────────────────────────────────────────────────────────────────
    defineField({
      name: "logoDark",
      title: "Logo (Dark version)",
      type: "image",
      options: { hotspot: true },
      group: "media",
    }),
    defineField({
      name: "logoLight",
      title: "Logo (Light version)",
      type: "image",
      options: { hotspot: true },
      group: "media",
    }),
    defineField({
      name: "heroHome",
      title: "Hero Image — Home",
      type: "image",
      options: { hotspot: true },
      group: "media",
    }),
    defineField({
      name: "heroFarming",
      title: "Hero Image — Farming",
      type: "image",
      options: { hotspot: true },
      group: "media",
    }),
  ],
  groups: [
    { name: "about", title: "About & Mission" },
    { name: "contact", title: "Contact Info" },
    { name: "media", title: "Media & Images" },
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
