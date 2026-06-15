"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
    <div className="flex min-h-screen items-center justify-center bg-[#faf8f3]">
      <div className="w-full max-w-sm border border-[#e4dfd5] bg-white p-10">
        <div className="mb-8 text-center">
          <p className="font-sans text-[11px] uppercase tracking-[3px] text-[#7a6b4f]">Muzari Exports</p>
          <h1 className="mt-3 font-playfair text-2xl font-bold text-[#1a1a14]">Admin Panel</h1>
          <p className="mt-2 font-sans text-sm text-[#b0a898]">Sign in to manage your website content</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1.5 block font-sans text-[10px] font-medium uppercase tracking-[2px] text-[#b0a898]">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter admin password"
              className="w-full border border-[#e4dfd5] bg-[#faf8f3] px-4 py-3 font-sans text-sm text-[#1a1a14] placeholder:text-[#b0a898] focus:border-[#5a8a3c] focus:outline-none"
            />
          </div>

          {error && (
            <p className="font-sans text-sm text-red-600">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1a1a14] py-3 font-sans text-[11px] font-medium uppercase tracking-[1.5px] text-[#faf8f3] transition-all hover:bg-[#2d2d22] disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
