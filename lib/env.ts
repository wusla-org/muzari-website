type RequiredEnvKey =
  | "DATABASE_URL"
  | "DATABASE_URL_UNPOOLED"
  | "AUTH_SECRET";

function getRequiredEnv(key: RequiredEnvKey) {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
}

export const env = {
  DATABASE_URL: getRequiredEnv("DATABASE_URL"),
  DATABASE_URL_UNPOOLED: getRequiredEnv("DATABASE_URL_UNPOOLED"),
  AUTH_SECRET: getRequiredEnv("AUTH_SECRET"),
  NEXT_PUBLIC_SITE_URL:
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  NEON_PROJECT_ID: process.env.NEON_PROJECT_ID ?? "",
  ADMIN_BOOTSTRAP_EMAIL: process.env.ADMIN_BOOTSTRAP_EMAIL ?? "",
  ADMIN_BOOTSTRAP_PASSWORD: process.env.ADMIN_BOOTSTRAP_PASSWORD ?? "",
};
