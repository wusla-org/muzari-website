import Link from "next/link";
import type { ReactNode } from "react";

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function AdminPageHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="editorial-card p-6 md:p-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="eyebrow mb-4 inline-block">{eyebrow}</span>
          <h2 className="text-3xl font-extrabold text-on-surface">{title}</h2>
          {description ? (
            <p className="mt-4 max-w-2xl text-base leading-7 text-on-surface-variant">
              {description}
            </p>
          ) : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </div>
  );
}

export function AdminNotice({
  tone = "success",
  children,
}: {
  tone?: "success" | "info";
  children: ReactNode;
}) {
  return (
    <div
      className={cx(
        "rounded-[1.5rem] px-4 py-4 text-sm leading-6",
        tone === "success"
          ? "bg-primary-soft text-primary-ink"
          : "bg-surface-container text-on-surface-variant",
      )}
    >
      {children}
    </div>
  );
}

export function AdminCard({
  title,
  description,
  children,
  actions,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="editorial-card p-6 md:p-7">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-xl font-bold text-on-surface">{title}</h3>
          {description ? (
            <p className="mt-2 max-w-2xl text-sm leading-6 text-on-surface-variant">
              {description}
            </p>
          ) : null}
        </div>
        {actions ? <div className="shrink-0">{actions}</div> : null}
      </div>
      <div className="mt-6 space-y-5">{children}</div>
    </section>
  );
}

export function AdminField({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="block space-y-3">
      <span className="block text-sm font-semibold text-on-surface">{label}</span>
      {children}
      {hint ? <span className="block text-xs leading-5 text-on-surface-variant">{hint}</span> : null}
    </label>
  );
}

export function AdminStat({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail?: string;
}) {
  return (
    <div className="editorial-card p-6">
      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-ink/70">
        {label}
      </div>
      <div className="mt-3 text-4xl font-extrabold text-on-surface">{value}</div>
      {detail ? (
        <div className="mt-3 text-sm leading-6 text-on-surface-variant">{detail}</div>
      ) : null}
    </div>
  );
}

export function AdminEmpty({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="editorial-card p-6">
      <h3 className="text-lg font-bold text-on-surface">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-on-surface-variant">{description}</p>
    </div>
  );
}

export function AdminPreviewLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="button-secondary inline-flex"
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      Open Preview
    </Link>
  );
}
