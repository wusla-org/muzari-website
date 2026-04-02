import { neon } from "@neondatabase/serverless";
import { scryptSync, timingSafeEqual } from "node:crypto";

if (!process.env.DATABASE_URL_UNPOOLED && !process.env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL or DATABASE_URL_UNPOOLED");
}

const sql = neon(process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL);

const rows = await sql`
  SELECT id, email, display_name, password_hash
  FROM admin_users
  ORDER BY id ASC
`;

const adminPassword = process.env.ADMIN_BOOTSTRAP_PASSWORD ?? "";

const results = rows.map((row) => {
  const [salt, storedHash] = String(row.password_hash).split(":");
  const derived = salt && storedHash ? scryptSync(adminPassword, salt, 64) : null;
  const storedBuffer = storedHash ? Buffer.from(storedHash, "hex") : null;
  const passwordMatches =
    !!derived &&
    !!storedBuffer &&
    derived.length === storedBuffer.length &&
    timingSafeEqual(derived, storedBuffer);

  return {
    id: row.id,
    email: row.email,
    display_name: row.display_name,
    hash_prefix: String(row.password_hash).slice(0, 16),
    password_matches_bootstrap: passwordMatches,
  };
});

console.log(JSON.stringify(results, null, 2));
