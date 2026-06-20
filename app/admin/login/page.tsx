"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (res.ok) {
      router.push("/admin");
    } else {
      setError("Incorrect password. Please try again.");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1c3d1c]">
      <div className="w-full max-w-sm">
        {/* Logo area */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#a8721a]">
            <Lock className="h-5 w-5 text-white" />
          </div>
          <p className="font-[family-name:var(--font-jakarta)] text-[10px] uppercase tracking-[3px] text-[#7fa87f]">
            Muzari Exports
          </p>
          <h1 className="mt-2 font-[family-name:var(--font-jakarta)] text-2xl font-semibold text-[#e8f4e0]">
            Admin Panel
          </h1>
          <p className="mt-1.5 text-sm text-[#b8ccb0]">Sign in to manage your website content</p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#243f24] p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-1.5 block font-[family-name:var(--font-jakarta)] text-sm font-medium text-[#c8d8c0]">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter admin password"
                className="w-full rounded-lg border border-white/10 bg-[#1c3d1c] px-4 py-3 text-sm text-[#e8f4e0] placeholder:text-[#7fa87f] transition-colors focus:border-[#a8721a] focus:outline-none focus:ring-2 focus:ring-[#a8721a]/20"
              />
            </div>

            {error && (
              <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3">
                <p className="text-sm text-red-300">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-[#a8721a] py-3 text-sm font-medium text-white transition-all hover:bg-[#8f6015] disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-[#a8721a]/40"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
