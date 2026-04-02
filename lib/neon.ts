import { neon } from "@neondatabase/serverless";
import { env } from "@/lib/env";

// Use the pooled connection string for app traffic and serverless-friendly usage.
export const sql = neon(env.DATABASE_URL);

export async function testDatabaseConnection() {
  const result = await sql`SELECT NOW() AS connected_at`;
  return result[0];
}
