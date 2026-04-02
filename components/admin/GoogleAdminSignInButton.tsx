"use client";

import { signIn } from "next-auth/react";

export default function GoogleAdminSignInButton() {
  return (
    <button
      type="button"
      className="button-secondary w-full"
      onClick={() => signIn("google", { callbackUrl: "/admin" })}
    >
      Continue with Google
    </button>
  );
}
