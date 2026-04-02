"use client";

import { signOut } from "next-auth/react";

export default function AdminLogoutButton() {
  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    await signOut({ callbackUrl: "/admin/login" });
  }

  return (
    <button type="button" className="button-secondary w-full" onClick={handleLogout}>
      Logout
    </button>
  );
}
