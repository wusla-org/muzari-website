# Muzari Exports — Premium Agricultural Export Platform

![Muzari Logo](/logo/muzari-logo-full.png)

Muzari Exports is a premium B2B platform bridging Kerala's lush plantations with the global market. Designed with a **soft editorial minimalism** aesthetic, the application provides a high-end experience for global buyers to source premium agricultural produce, including Tapioca and Nendran Bananas.

---

## ✨ Features

- **Premium UI Design**: A bespoke design system built on "Editorial Minimalism" featuring:
  - **Glassmorphism Navigation**: Adaptive sticky navbar with backdrop-blur and scroll-based state transitions.
  - **Floating Island Pill Layout**: Modern component structure focusing on accessibility and visual breathing room.
  - **Scroll Reveal Animations**: Smooth entrance animations for enhanced storytelling.
- **Enterprise-Grade SEO**:
  - Automatically generated `sitemap.xml` and `robots.txt`.
  - Rich JSON-LD Structured Data (Schema.org) for Organizations and WebPages.
  - Optimised metadata for all routes.
- **Robust CMS & Backend**:
  - Powered by **Neon (Serverless PostgreSQL)**.
  - Custom Admin Dashboard for managing inquiries, products, and homepage content.
  - Secure Authentication via **NextAuth.js** (including Google OAuth support).
- **Global Performance**:
  - Built with **Next.js 16** and **React 19**.
  - Optimized images with `next/image` and custom priority loading.
  - Zero-border layout philosophy using high-end surface color shifts.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [Neon](https://neon.tech/) (PostgreSQL)
- **Auth**: [NextAuth.js](https://next-auth.js.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Typography**: Manrope (Headings), Inter (Body)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- A Neon Database project
- (Optional) Google OAuth credentials for Admin login

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/wusla-org/muzari-website.git
   cd muzari-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory and add the following:
   ```env
   DATABASE_URL=your_neon_db_url
   DATABASE_URL_UNPOOLED=your_neon_db_unpooled_url
   AUTH_SECRET=your_secret_here
   ADMIN_BOOTSTRAP_EMAIL=admin@muzari.local
   ADMIN_BOOTSTRAP_PASSWORD=your_secure_password
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Access the platform:**
   Open [http://localhost:3000](http://localhost:3000) for the landing page.
   Access [http://localhost:3000/admin](http://localhost:3000/admin) for the dashboard.

---

## 📂 Project Structure

- `app/`: Next.js App Router pages and API routes.
- `components/`: Reusable React components (Navbar, Hero, CTASection, etc.).
- `lib/`: Utility functions, database configuration, and content handlers.
- `public/`: Static assets (Logos, Icons).
- `scripts/`: Maintenance and database setup scripts.

---

## 🔒 Security

- Database credentials and secrets are handled via server-only environment variables.
- Admin access is strictly guarded via session tokens and approved email whitelisting.
- All forms include server-side validation and sanitization.

---

## 📄 License

Internal property of Muzari Exports. All rights reserved.
