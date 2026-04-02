import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { loginAction } from "@/app/admin/actions";

export const dynamic = "force-dynamic";

type LoginPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const session = await getAdminSession();
  if (session) redirect("/admin");

  const params = await searchParams;
  const errorMessage =
    params.error === "email"
      ? "No admin account was found for that email."
      : params.error === "password"
        ? "The password did not match the stored admin password."
        : params.error === "server"
          ? "The server hit an unexpected login error. Check the Next.js terminal."
          : params.error === "missing"
            ? "Enter both email and password."
            : "";

  return (
    <main className="page-shell min-h-screen px-4 py-16 md:px-6">
      <div className="content-shell max-w-xl">
        <div className="editorial-card p-8 md:p-10">
          <span className="eyebrow mb-4 inline-block">Admin Access</span>
          <h1 className="text-3xl font-extrabold text-on-surface md:text-4xl">
            MUZARI Dashboard Login
          </h1>
          <p className="mt-4 text-base leading-7 text-on-surface-variant">
            Sign in to manage homepage content, products, and incoming trade inquiries.
          </p>

          {errorMessage ? (
            <p className="mt-5 rounded-2xl bg-primary-soft px-4 py-3 text-sm text-primary-ink">
              {errorMessage}
            </p>
          ) : null}

          <form action={loginAction} className="mt-8 space-y-6">
            <div>
              <label className="mb-3 block text-sm font-medium text-on-surface-variant">
                Email
              </label>
              <input name="email" type="email" className="input-shell" required />
            </div>
            <div>
              <label className="mb-3 block text-sm font-medium text-on-surface-variant">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="input-shell"
                required
              />
            </div>

            <button type="submit" className="button-primary w-full">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
