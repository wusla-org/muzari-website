This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Environment Setup

This project is wired for Neon using local environment files:

- `.env.local` for local secrets
- `.env.example` as the safe template for Vercel or other deployments

Only `NEXT_PUBLIC_` values should ever be exposed to the browser. Database
credentials must stay in server-only env vars such as `DATABASE_URL` and
`DATABASE_URL_UNPOOLED`.

## Vercel Deployment

This project is safe to deploy from a public GitHub repo as long as real secrets
stay only in local `.env.local` and Vercel environment variables.

### Required Vercel environment variables

- `NEXT_PUBLIC_SITE_URL`
- `DATABASE_URL`
- `DATABASE_URL_UNPOOLED`
- `AUTH_SECRET`
- `ADMIN_BOOTSTRAP_EMAIL`
- `ADMIN_BOOTSTRAP_PASSWORD`
- `NEON_PROJECT_ID` (optional, internal reference only)

### Before first production deploy

1. Rotate the Neon database password because older connection strings were exposed during local setup.
2. Generate a fresh production `AUTH_SECRET`.
3. Use a new strong `ADMIN_BOOTSTRAP_PASSWORD` for production.
4. Confirm `.env.local`, `.neon`, `.vercel`, and `.next` are not committed.
5. Set `NEXT_PUBLIC_SITE_URL` to your Vercel production URL.

### After first deploy

1. Open the live `.vercel.app` site and verify the homepage renders.
2. Submit a test inquiry and confirm it appears in `/admin/inquiries`.
3. Sign in to `/admin` with the production bootstrap credentials.
4. Change homepage content and images from the CMS and confirm production updates.
5. Confirm no secrets appear in client-side source, browser DevTools, or public UI.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
