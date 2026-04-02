import Link from "next/link";
import AdminLogoutButton from "@/components/admin/AdminLogoutButton";
import { requireAdminSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

const navItems = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/content", label: "Content" },
  { href: "/admin/products", label: "Products" },
  { href: "/admin/quality", label: "Quality" },
  { href: "/admin/inquiries", label: "Inquiries" },
  { href: "/admin/settings", label: "Settings" },
];

export default async function AdminDashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await requireAdminSession();

  return (
    <main className="page-shell min-h-screen px-4 py-8 md:px-6">
      <div className="content-shell grid gap-6 lg:grid-cols-[16rem_minmax(0,1fr)]">
        <aside className="editorial-card h-fit p-5">
          <span className="eyebrow mb-4 inline-block">Admin Panel</span>
          <h1 className="text-xl font-extrabold text-on-surface">MUZARI CMS</h1>
          <p className="mt-2 text-sm leading-6 text-on-surface-variant">
            Signed in as {session.email}
          </p>

          <nav className="mt-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-on-surface hover:bg-surface-container"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6">
            <AdminLogoutButton />
          </div>
        </aside>

        <section>{children}</section>
      </div>
    </main>
  );
}
