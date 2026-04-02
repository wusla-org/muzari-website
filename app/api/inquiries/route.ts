import { NextResponse } from "next/server";
import { sql } from "@/lib/neon";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const organization = String(body.organization ?? "").trim();
    const product = String(body.product ?? "").trim();
    const details = String(body.details ?? "").trim();

    if (!name || !email || !product) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { error: "Enter a valid email address." },
        { status: 400 },
      );
    }

    if (
      name.length > 120 ||
      email.length > 160 ||
      organization.length > 160 ||
      product.length > 160 ||
      details.length > 4000
    ) {
      return NextResponse.json(
        { error: "One or more fields are too long." },
        { status: 400 },
      );
    }

    await sql`
      INSERT INTO inquiries (
        name, email, organization, product, details, status, created_at, updated_at
      )
      VALUES (
        ${name},
        ${email},
        ${organization || null},
        ${product},
        ${details || null},
        'new',
        NOW(),
        NOW()
      )
    `;

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[inquiries api] Failed to create inquiry.", {
      error: error instanceof Error ? error.message : String(error),
    });

    return NextResponse.json(
      { error: "Unable to submit inquiry right now." },
      { status: 500 },
    );
  }
}
