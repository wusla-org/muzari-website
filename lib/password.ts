import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

export function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, storedHash: string) {
  const [salt, stored] = storedHash.split(":");
  if (!salt || !stored) {
    console.error("[admin auth] Stored password hash is malformed.");
    return false;
  }

  const hash = scryptSync(password, salt, 64);
  const storedBuffer = Buffer.from(stored, "hex");
  if (!storedBuffer.length) {
    console.error("[admin auth] Stored password hash could not be decoded.");
    return false;
  }

  if (hash.length !== storedBuffer.length) return false;
  return timingSafeEqual(hash, storedBuffer);
}
