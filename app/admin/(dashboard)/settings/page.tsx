import BrandLogo from "@/components/BrandLogo";
import { env } from "@/lib/env";

export default function AdminSettingsPage() {
  const hasSiteUrl = Boolean(env.NEXT_PUBLIC_SITE_URL);
  const hasDatabase = Boolean(env.DATABASE_URL && env.DATABASE_URL_UNPOOLED);
  const hasAuthSecret = Boolean(env.AUTH_SECRET);

  return (
    <div className="space-y-6">
      <div className="editorial-card p-6 md:p-8">
        <span className="eyebrow mb-4 inline-block">Settings</span>
        <h2 className="text-3xl font-extrabold text-on-surface">Brand & System</h2>
      </div>

      <div className="editorial-card space-y-5 p-6">
        <div className="rounded-[1.5rem] bg-surface-container p-5">
          <BrandLogo variant="full" className="max-w-[18rem]" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-surface-container p-4">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-ink/70">
              Site URL
            </div>
            <div className="mt-2 text-sm text-on-surface">{env.NEXT_PUBLIC_SITE_URL}</div>
          </div>
          <div className="rounded-2xl bg-surface-container p-4">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-ink/70">
              Production readiness
            </div>
            <div className="mt-2 space-y-2 text-sm text-on-surface">
              <div>Public site URL: {hasSiteUrl ? "configured" : "missing"}</div>
              <div>Database secrets: {hasDatabase ? "configured" : "missing"}</div>
              <div>Admin auth secret: {hasAuthSecret ? "configured" : "missing"}</div>
            </div>
          </div>
        </div>
        <p className="text-sm leading-7 text-on-surface-variant">
          Keep all deployment secrets in server-only environment variables. Do not expose `DATABASE_URL`,
          `DATABASE_URL_UNPOOLED`, `AUTH_SECRET`, or bootstrap credentials to client-side code or public documentation.
        </p>
      </div>
    </div>
  );
}
