# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## IMPORTANT: Read-file discipline

**Do NOT read files unless you specifically need their content for the task at hand.** The codebase structure below is authoritative — use it to navigate without opening files. Only open a file when you must inspect or edit its exact contents.

## Commands

```bash
npm run dev      # development server (localhost:3000)
npm run build    # production build
npm run lint     # eslint check
npm run start    # start production server
```

No test suite is configured.

## Architecture

**Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, Framer Motion, shadcn/ui components, Vercel Blob storage.

**Fonts:** Inter (`--font-inter`) for body text, Plus Jakarta Sans (`--font-jakarta`) for headings — both set as CSS variables in `app/layout.tsx`.

### Public routes

| Route | File |
|-------|------|
| `/` | `app/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/products` | `app/products/page.tsx` |
| `/farming` | `app/farming/page.tsx` |
| `/contact` | `app/contact/page.tsx` |

### Admin panel (`/admin`)

Password-protected CMS at `/admin`. Auth uses a plain cookie (`admin_session`) set to match `ADMIN_PASSWORD` env var — checked server-side in every admin API route via `isAuthorized()`.

| Admin route | Purpose |
|-------------|---------|
| `/admin` | Dashboard |
| `/admin/hero` | Edit hero content for all pages |
| `/admin/about` | Edit about page content |
| `/admin/products` | Edit product listings |
| `/admin/contact` | Edit contact info |
| `/admin/media` | Upload images to Vercel Blob |
| `/admin/enquiries` | View contact form submissions |
| `/admin/login` | Login page |

Admin UI components live in `components/admin/`:
- `AdminShell` — layout wrapper with sidebar, top bar, save button
- `AdminSidebar` — navigation
- `AdminField` — reusable labeled input/textarea

### API routes

| Route | Purpose |
|-------|---------|
| `POST /api/admin/login` | Sets `admin_session` cookie |
| `GET/PUT /api/admin/content` | Read/write site content JSON |
| `GET /api/admin/enquiries` | Read contact submissions (admin only) |
| `POST /api/admin/upload` | Upload image to Vercel Blob |
| `GET /api/admin/logout` | Clears session cookie |
| `POST /api/contact` | Public contact form submission |
| `GET /api/site-content` | Public read of site content |

### Content storage (dual-mode)

Content is stored differently per environment:

- **Production (Vercel):** `BLOB_READ_WRITE_TOKEN` env var is set → reads/writes go to Vercel Blob as `muzari-site-content.json` and `muzari-contact-submissions.json`
- **Local dev:** No token → reads/writes use local `data/admin-content.json` and `data/contact-submissions.json`

The toggle is `const useBlob = !!process.env.BLOB_READ_WRITE_TOKEN` in each API/lib file.

### Static fallback data

`lib/site-data.ts` — static export of all site content (products, about, navigation, etc.). Pages use this as fallback when no admin content is saved. `lib/admin-content.ts` defines the `SiteContent` TypeScript type and `BLOB_CONTENT_KEY` constant.

`lib/get-site-content.ts` — `getAdminContent()` fetches live content (Blob or local file); pages merge it over the static defaults.

### Key components

- `SiteHeader` — top nav with logo
- `SiteFooter` — footer with links and contact info
- `WhatsAppFloat` — floating WhatsApp button (phone from `NEXT_PUBLIC_WHATSAPP_PHONE` env)
- `ChatBot` — embedded chatbot, data from `lib/chat-data.ts`
- `ScrollReveal` — Framer Motion stagger animation wrapper
- `MissionVisionSlider` — sliding mission/vision cards
- `ProductGrid` — product listing grid

## Environment variables

| Variable | Purpose |
|----------|---------|
| `ADMIN_PASSWORD` | Admin panel password (also used as session cookie value) |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob token; absence forces local-file mode |
| `NEXT_PUBLIC_WHATSAPP_PHONE` | WhatsApp number for float button and JSON-LD |

## SEO

- JSON-LD `Organization` schema injected in `app/layout.tsx`
- `app/sitemap.ts` and `app/robots.ts` for crawlers
- `BASE_URL` in `app/layout.tsx` is `https://muzari.in` (comment has note to switch to `muzariexports.com` when old domain expires)

## Images

Remote image domains allowed (in `next.config.ts`): `*.vercel-storage.com` and `*.public.blob.vercel-storage.com`. All uploaded images go to Vercel Blob via `/api/admin/upload`.

## Form fields (accessibility rule)

Always pair `<label htmlFor="...">` with `<input id="...">`. Add disabled state and visual feedback during async form submission (per `.Jules/palette.md`).
