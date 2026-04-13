import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { env } from "@/lib/env";
import { authOptions } from "@/lib/auth-options";
import { sql } from "@/lib/neon";
export { hashPassword, verifyPassword } from "@/lib/password";

const SESSION_COOKIE = "muzari_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

type SessionPayload = {
  userId: number;
  email: string;
  exp: number;
};

function base64UrlEncode(value: string) {
  return Buffer.from(value).toString("base64url");
}

function base64UrlDecode(value: string) {
  return Buffer.from(value, "base64url").toString("utf8");
}

function sign(value: string) {
  return createHmac("sha256", env.AUTH_SECRET).update(value).digest("base64url");
}

function createSessionToken(payload: SessionPayload) {
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const signature = sign(encodedPayload);
  return `${encodedPayload}.${signature}`;
}

function parseSessionToken(token: string): SessionPayload | null {
  const [encodedPayload, signature] = token.split(".");
  if (!encodedPayload || !signature) return null;

  const expected = sign(encodedPayload);
  if (signature.length !== expected.length) return null;
  if (!timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) {
    return null;
  }

  try {
    const payload = JSON.parse(base64UrlDecode(encodedPayload)) as SessionPayload;
    if (payload.exp < Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

export async function createAdminSession(userId: number, email: string) {
  const payload: SessionPayload = {
    userId,
    email,
    exp: Date.now() + SESSION_MAX_AGE * 1000,
  };

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, createSessionToken(payload), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function getAdminSession() {
  const oauthSession = await getServerSession(authOptions);
  const oauthEmail = oauthSession?.user?.email?.toLowerCase().trim();

  if (oauthEmail) {
    const [oauthUser] = await sql`
      SELECT id, email, display_name AS "displayName"
      FROM admin_users
      WHERE email = ${oauthEmail}
    `;

    if (oauthUser) {
      return oauthUser;
    }
  }

  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(SESSION_COOKIE)?.value;
  if (!sessionToken) return null;

  const payload = parseSessionToken(sessionToken);
  if (!payload) return null;

  const [user] = await sql`
    SELECT id, email, display_name AS "displayName"
    FROM admin_users
    WHERE id = ${payload.userId}
  `;

  return user ?? null;
}

export async function requireAdminSession() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");
  return session;
}
