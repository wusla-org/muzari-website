# Muzari Exports — Design System

**Style:** Soft editorial minimalism. Premium B2B export brand. Think high-end agricultural catalogue, not busy trade portal.

---

## Colors

All tokens are CSS variables defined in `globals.css` `@theme inline {}`. Tailwind classes map automatically.

| Token | Value | Use |
|---|---|---|
| `primary` | `#4e6700` | Dark olive — brand accents, icons, text highlights |
| `primary-ink` | `#222e00` | Darkest olive — headings, dark backgrounds |
| `primary-soft` | `#c4d693` | Light olive — success states, subtle tints |
| `on-primary` | `#ffffff` | Text on green backgrounds |
| `surface` | `#f8faf6` | Page background (off-white, not pure white) |
| `surface-bright` | `#ffffff` | Cards, elevated surfaces |
| `surface-container` | `#f2f4f0` | Subtle section background (one step darker than surface) |
| `surface-glass` | `rgba(255,255,255,0.76)` | Navbar, floating panels |
| `on-surface` | `#1a1c18` | Body text (never pure black) |
| `on-surface-variant` | `#44483d` | Secondary text, descriptions |
| `outline` | `#74796d` | Borders at low opacity only |

**No-line rule:** Never use solid 1px borders to divide sections. Use background color shifts instead (`surface` → `surface-container`).

---

## Typography

- **Headlines/Display:** `font-headline` = Manrope. `font-extrabold`, `tracking-tight` (-0.02em). Large scale creates the premium feel.
- **Body:** `font-body` = Inter. `text-base` to `text-lg`, `leading-7`.
- **Eyebrow labels:** `.eyebrow` class — `0.72rem`, `font-extrabold`, `uppercase`, `tracking-[0.24em]`, `text-primary-ink`.

---

## Component Classes (defined in `globals.css`)

Use these instead of writing long Tailwind strings:

| Class | What it is |
|---|---|
| `.section-shell` | Vertical padding for every section (`clamp(4rem, 7vw, 6.5rem)`) |
| `.content-shell` | Max-width container centered with auto margins (`min(100% - 2rem, 84rem)`) |
| `.editorial-card` | White glassmorphism card — rounded, soft shadow, backdrop blur |
| `.glass-panel` | For navbars and floating UIs — semi-transparent with blur |
| `.button-primary` | Pill button — olive gradient, white text, lift on hover |
| `.button-secondary` | Pill button — frosted white background |
| `.eyebrow` | Uppercase tracking label (e.g. "Purity from Kerala") |
| `.input-shell` | Form input with rounded corners and focus ring |
| `.image-frame` | Image container with rounded corners + gradient overlay |
| `.scroll-reveal` | Wraps content for scroll animation (via `ScrollReveal` component) |
| `.attention-dot` | Small animated olive dot for emphasis |
| `.page-shell` | Root layout wrapper (clips overflow, adds ambient gradient) |

---

## Layout Patterns

**Sections alternate** between `bg-surface` (default) and `bg-surface-container` for visual rhythm — no borders needed.

**Cards** use `editorial-card` class. Rounded at `1.75rem` (`--radius-card`). Never use sharp corners on cards.

**Buttons** are always pill-shaped (`border-radius: 999px`). Primary = olive gradient. Secondary = frosted white.

**Shadows** are ambient: `0 12px 40px rgba(25,28,24,0.05)`. Never use standard drop shadows.

**Images** use `image-frame` wrapper with `overflow-hidden` and `border-radius`. Always set `sizes` prop on `fill` images.

---

## Rules for AI — Do and Don't

**Do:**
- Use `.section-shell` + `.content-shell` for every new section
- Use `.editorial-card` for any card or panel
- Use `.button-primary` / `.button-secondary` for all buttons
- Use `.eyebrow` for section labels above headings
- Wrap animated content in `<ScrollReveal>` component
- Use `text-on-surface-variant` for secondary/description text
- Use `bg-surface-container` for alternating section backgrounds

**Don't:**
- Don't use `border-b`, `border-t`, `divide-y` to separate sections — use bg color shifts
- Don't use `rounded-md` or `rounded-lg` on cards — use `rounded-[1.75rem]` or `editorial-card`
- Don't write `bg-[#4e6700]` — use `bg-primary` (the token exists)
- Don't add `text-black` — always use `text-on-surface` or `text-on-surface-variant`
- Don't skip `sizes` on any `next/image` with `fill` prop
- Don't hardcode copy in components — fetch from DB via `lib/content.ts`
