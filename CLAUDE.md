@AGENTS.md

# Muzari Exports — Project Guide for AI Assistants

## What This Project Is

A Next.js 16 B2B landing page + admin CMS for Muzari Exports, a Kerala-based agricultural export company. The site sells premium Tapioca and Nendran Banana products to global buyers.

**Stack:** Next.js 16 · Tailwind CSS v4 · Neon Postgres · TypeScript

---

## Project Structure

```
app/
  layout.tsx          ← Root layout: Manrope + Inter fonts, metadata
  page.tsx            ← Public landing page (SSG, server component)
  globals.css         ← Tailwind v4 @theme tokens + component classes
  admin/              ← Admin CMS (requires login)
    login/            ← Login page
    actions.ts        ← All server actions (login, CRUD for all content)
    (dashboard)/      ← Protected admin pages (products, content, etc.)
  api/
    inquiries/        ← POST endpoint to save trade inquiries

components/
  Navbar.tsx          ← "use client" — scroll-aware glassmorphism nav
  HeroSection.tsx     ← Hero with image, highlights, scroll reveal
  MissionVision.tsx   ← Mission + Vision editorial card layout
  TapiocaCollection.tsx ← 3-card product grid
  BananaSpotlight.tsx ← Image mosaic + feature list
  QualityStandards.tsx ← 4-card standards grid
  InquiryForm.tsx     ← "use client" — contact form → /api/inquiries
  Footer.tsx          ← Dark footer with nav links
  BrandLogo.tsx       ← Renders logo (variant: "full" | "compact" | "mark")
  ScrollReveal.tsx    ← Intersection Observer animation wrapper

lib/
  content.ts          ← All TypeScript types + DB fetch functions
  auth.ts             ← Session auth (scrypt password hash, HMAC cookie)
  neon.ts             ← Neon Postgres client (sql tagged template)
  env.ts              ← Validated env vars (throws if missing)

scripts/
  setup-db.mjs        ← Creates all tables, seeds data, creates admin user
```

---

## Key Conventions

**Tailwind v4** — No `tailwind.config.ts`. All tokens live in `globals.css` inside `@theme inline {}`. Component utility classes (`.button-primary`, `.editorial-card`, `.glass-panel`, `.section-shell`, `.content-shell`, `.eyebrow`, `.input-shell`, `.scroll-reveal`) are defined in `@layer components` in `globals.css`. Use these instead of writing long Tailwind strings.

**Content comes from the database** — The landing page fetches all text/copy from Neon via `lib/content.ts → getHomePageContent()`. Do not hardcode copy in components. Pass content as props from `app/page.tsx`.

**Admin auth** — Cookie-based HMAC session (no NextAuth). `requireAdminSession()` from `lib/auth.ts` guards all server actions. Password is hashed with `scrypt`. To reset/create admin user, run `node --env-file=.env.local scripts/setup-db.mjs`.

**Server actions** — All mutations (content updates, product CRUD, inquiry status) are in `app/admin/actions.ts`. They call `revalidatePath("/")` after writes so the public site reflects changes immediately.

**Images** — All product/hero images are external URLs from `lh3.googleusercontent.com`. This is configured in `next.config.ts` via `remotePatterns`. Always add `sizes` prop to `fill` images.

---

## Database Tables

| Table | Purpose |
|---|---|
| `admin_users` | Login credentials (email + scrypt hash) |
| `hero_section` | Hero copy (eyebrow, headline, CTA labels, trust note) |
| `mission_vision` | Mission text, vision text, principles array |
| `site_settings` | All section copy (tapioca, banana, inquiry, footer) |
| `products` | Tapioca product cards (title, description, image_url) |
| `quality_standards` | Standards cards (badge, title, description) |
| `inquiries` | Trade inquiry submissions from the contact form |

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | Yes | Neon pooled connection string |
| `DATABASE_URL_UNPOOLED` | Yes | Neon unpooled (used by setup script) |
| `AUTH_SECRET` | Yes | 64-char hex for HMAC session signing |
| `NEON_PROJECT_ID` | Yes | Neon project ID |
| `NEXT_PUBLIC_SITE_URL` | No | Full URL, defaults to localhost:3000 |
| `ADMIN_BOOTSTRAP_EMAIL` | No | Used by setup-db.mjs to create admin |
| `ADMIN_BOOTSTRAP_PASSWORD` | No | Plain text, hashed by setup-db.mjs |

To set up locally: `node --env-file=.env.local scripts/setup-db.mjs`

---

## Common Tasks

**Add a new admin page:** Create `app/admin/(dashboard)/your-page/page.tsx`. Call `requireAdminSession()` at the top. Add the corresponding server action to `app/admin/actions.ts`.

**Add a new content field:** 1) Add column to the relevant DB table, 2) Add field to the TypeScript type in `lib/content.ts`, 3) Update the fetch query in `lib/content.ts`, 4) Add the form field in the admin page, 5) Update the server action.

**Change a color or spacing token:** Edit `globals.css` `@theme inline {}` block. Token names map to Tailwind classes automatically (e.g. `--color-primary` → `bg-primary`, `text-primary`).

**Add a component:** Place in `components/`. Only add `"use client"` if you need `useState`, `useEffect`, or browser APIs. Everything else should be a server component.
