import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { env } from "@/lib/env";
import { sql } from "@/lib/neon";

export const googleAuthConfigured = Boolean(
  env.AUTH_GOOGLE_ID && env.AUTH_GOOGLE_SECRET,
);

export const authOptions: NextAuthOptions = {
  secret: env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/admin/login",
    error: "/admin/login",
  },
  providers: [
    GoogleProvider({
      clientId: env.AUTH_GOOGLE_ID || "google-client-id-not-configured",
      clientSecret:
        env.AUTH_GOOGLE_SECRET || "google-client-secret-not-configured",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "google") return true;

      const email = user.email?.toLowerCase().trim();
      if (!email) return false;

      const [adminUser] = await sql`
        SELECT id
        FROM admin_users
        WHERE email = ${email}
      `;

      return Boolean(adminUser);
    },
  },
};
