import Link from "next/link";
import { getInquiries, getProducts, getQualityStandards } from "@/lib/content";
import {
  AdminCard,
  AdminPageHeader,
  AdminStat,
} from "@/components/admin/AdminUi";

export default async function AdminOverviewPage() {
  const [products, standards, inquiries] = await Promise.all([
    getProducts(),
    getQualityStandards(),
    getInquiries(),
  ]);

  const newInquiries = inquiries.filter((inquiry) => inquiry.status === "new");
  const activeInquiries = inquiries.filter(
    (inquiry) => inquiry.status === "in_progress",
  );

  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Overview"
        title="MUZARI CMS"
        description="Manage the live website content, product collection, trust messaging, and inquiry workflow from one place."
        action={
          <Link href="/" className="button-secondary">
            View Website
          </Link>
        }
      />

      <div className="grid gap-4 md:grid-cols-3">
        <AdminStat
          label="Products"
          value={products.length.toString()}
          detail="Edit the live collection cards, ordering, featured state, and imagery."
        />
        <AdminStat
          label="Quality Cards"
          value={standards.length.toString()}
          detail="Control trust-building standards shown on the homepage."
        />
        <AdminStat
          label="New Inquiries"
          value={newInquiries.length.toString()}
          detail={`${activeInquiries.length} currently in progress.`}
        />
      </div>

      <AdminCard
        title="Quick actions"
        description="Jump straight into the sections you’ll update most often."
      >
        <div className="grid gap-3 md:grid-cols-2">
          {[
            { href: "/admin/content", label: "Edit homepage content" },
            { href: "/admin/products", label: "Manage products" },
            { href: "/admin/quality", label: "Manage quality standards" },
            { href: "/admin/inquiries", label: "Review inquiries" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl bg-surface-container px-4 py-4 text-sm font-semibold text-on-surface hover:bg-surface-container-high"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="grid gap-4 rounded-[1.75rem] bg-surface-container p-5 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-ink/70">
              Recommended workflow
            </div>
            <p className="mt-3 text-sm leading-6 text-on-surface-variant">
              Update homepage copy first, then refresh products and trust cards, then review inquiries to keep the public site and buyer pipeline aligned.
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-background px-4 py-4 text-sm leading-6 text-on-surface-variant">
            Most content changes appear on the public site immediately after saving.
          </div>
        </div>
      </AdminCard>
    </div>
  );
}
