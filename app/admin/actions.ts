"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { clearAdminSession, createAdminSession, requireAdminSession, verifyPassword } from "@/lib/auth";
import { sql } from "@/lib/neon";

function getText(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function getCheckbox(formData: FormData, key: string) {
  return formData.get(key) === "on";
}

export async function loginAction(formData: FormData) {
  const email = getText(formData, "email").toLowerCase();
  const password = getText(formData, "password");

  if (!email || !password) {
    console.warn("[admin login] Missing email or password.");
    redirect("/admin/login?error=missing");
  }

  try {
    const [user] = await sql`
      SELECT id, email, password_hash AS "passwordHash"
      FROM admin_users
      WHERE email = ${email}
    `;

    if (!user) {
      console.warn("[admin login] No admin user found for email.", { email });
      redirect("/admin/login?error=email");
    }

    const isPasswordValid = verifyPassword(password, user.passwordHash);
    if (!isPasswordValid) {
      console.warn("[admin login] Password mismatch for admin user.", { email });
      redirect("/admin/login?error=password");
    }

    await createAdminSession(user.id, user.email);
    console.info("[admin login] Admin session created.", { email, userId: user.id });
    redirect("/admin");
  } catch (error) {
    // redirect() throws internally — re-throw so Next.js can handle it
    if (isRedirectError(error)) throw error;

    console.error("[admin login] Unexpected login failure.", {
      email,
      error: error instanceof Error ? error.message : String(error),
    });
    redirect("/admin/login?error=server");
  }
}

export async function logoutAction() {
  await clearAdminSession();
  redirect("/admin/login");
}

export async function updateHeroAction(formData: FormData) {
  await requireAdminSession();

  await sql`
    UPDATE hero_section
    SET
      eyebrow = ${getText(formData, "eyebrow")},
      title_line_one = ${getText(formData, "titleLineOne")},
      title_line_two = ${getText(formData, "titleLineTwo")},
      description = ${getText(formData, "description")},
      primary_cta_label = ${getText(formData, "primaryCtaLabel")},
      primary_cta_href = ${getText(formData, "primaryCtaHref")},
      secondary_cta_label = ${getText(formData, "secondaryCtaLabel")},
      secondary_cta_href = ${getText(formData, "secondaryCtaHref")},
      trust_note = ${getText(formData, "trustNote")}
    WHERE id = 1
  `;

  revalidatePath("/");
  revalidatePath("/admin/content");
  redirect("/admin/content?saved=hero");
}

export async function updateMissionVisionAction(formData: FormData) {
  await requireAdminSession();

  const principles = [
    getText(formData, "principleOne"),
    getText(formData, "principleTwo"),
    getText(formData, "principleThree"),
  ].filter(Boolean);

  await sql`
    UPDATE mission_vision
    SET
      mission_text = ${getText(formData, "missionText")},
      vision_text = ${getText(formData, "visionText")},
      principles = ${JSON.stringify(principles)}::jsonb
    WHERE id = 1
  `;

  revalidatePath("/");
  revalidatePath("/admin/content");
  redirect("/admin/content?saved=mission");
}

export async function updateSettingsAction(formData: FormData) {
  await requireAdminSession();

  await sql`
    UPDATE site_settings
    SET
      tapioca_eyebrow = ${getText(formData, "tapiocaEyebrow")},
      tapioca_title = ${getText(formData, "tapiocaTitle")},
      tapioca_description = ${getText(formData, "tapiocaDescription")},
      tapioca_cta_label = ${getText(formData, "tapiocaCtaLabel")},
      tapioca_cta_href = ${getText(formData, "tapiocaCtaHref")},
      banana_eyebrow = ${getText(formData, "bananaEyebrow")},
      banana_title = ${getText(formData, "bananaTitle")},
      banana_accent = ${getText(formData, "bananaAccent")},
      banana_description = ${getText(formData, "bananaDescription")},
      banana_cta_label = ${getText(formData, "bananaCtaLabel")},
      banana_cta_href = ${getText(formData, "bananaCtaHref")},
      inquiry_badge = ${getText(formData, "inquiryBadge")},
      inquiry_title = ${getText(formData, "inquiryTitle")},
      inquiry_description = ${getText(formData, "inquiryDescription")},
      inquiry_response_note = ${getText(formData, "inquiryResponseNote")},
      inquiry_focus_note = ${getText(formData, "inquiryFocusNote")},
      footer_description = ${getText(formData, "footerDescription")},
      footer_cta_label = ${getText(formData, "footerCtaLabel")}
    WHERE id = 1
  `;

  revalidatePath("/");
  revalidatePath("/admin/content");
  revalidatePath("/admin/settings");
  redirect("/admin/content?saved=settings");
}

export async function updateHomepageImagesAction(formData: FormData) {
  await requireAdminSession();

  const images = [
    {
      sectionKey: "hero",
      slotKey: "hero-main",
      src: getText(formData, "heroImageSrc"),
      alt: getText(formData, "heroImageAlt"),
      sortOrder: 1,
    },
    {
      sectionKey: "banana_gallery",
      slotKey: "banana-1",
      src: getText(formData, "bananaImage1Src"),
      alt: getText(formData, "bananaImage1Alt"),
      sortOrder: 1,
    },
    {
      sectionKey: "banana_gallery",
      slotKey: "banana-2",
      src: getText(formData, "bananaImage2Src"),
      alt: getText(formData, "bananaImage2Alt"),
      sortOrder: 2,
    },
    {
      sectionKey: "banana_gallery",
      slotKey: "banana-3",
      src: getText(formData, "bananaImage3Src"),
      alt: getText(formData, "bananaImage3Alt"),
      sortOrder: 3,
    },
    {
      sectionKey: "banana_gallery",
      slotKey: "banana-4",
      src: getText(formData, "bananaImage4Src"),
      alt: getText(formData, "bananaImage4Alt"),
      sortOrder: 4,
    },
  ];

  for (const image of images) {
    await sql`
      INSERT INTO homepage_images (section_key, slot_key, src, alt, sort_order, created_at, updated_at)
      VALUES (
        ${image.sectionKey},
        ${image.slotKey},
        ${image.src},
        ${image.alt},
        ${image.sortOrder},
        NOW(),
        NOW()
      )
      ON CONFLICT (section_key, slot_key) DO UPDATE SET
        src = EXCLUDED.src,
        alt = EXCLUDED.alt,
        sort_order = EXCLUDED.sort_order,
        updated_at = NOW()
    `;
  }

  revalidatePath("/");
  revalidatePath("/admin/content");
  redirect("/admin/content?saved=images");
}

export async function createProductAction(formData: FormData) {
  await requireAdminSession();

  await sql`
    INSERT INTO products (
      title, description, image_url, alt_text, sort_order, featured, created_at, updated_at
    )
    VALUES (
      ${getText(formData, "title")},
      ${getText(formData, "description")},
      ${getText(formData, "imageUrl")},
      ${getText(formData, "altText")},
      ${Number(formData.get("sortOrder") ?? 0)},
      ${getCheckbox(formData, "featured")},
      NOW(),
      NOW()
    )
  `;

  revalidatePath("/");
  revalidatePath("/admin/products");
  redirect("/admin/products?saved=created");
}

export async function updateProductAction(formData: FormData) {
  await requireAdminSession();

  await sql`
    UPDATE products
    SET
      title = ${getText(formData, "title")},
      description = ${getText(formData, "description")},
      image_url = ${getText(formData, "imageUrl")},
      alt_text = ${getText(formData, "altText")},
      sort_order = ${Number(formData.get("sortOrder") ?? 0)},
      featured = ${getCheckbox(formData, "featured")},
      updated_at = NOW()
    WHERE id = ${Number(formData.get("id"))}
  `;

  revalidatePath("/");
  revalidatePath("/admin/products");
  redirect("/admin/products?saved=updated");
}

export async function deleteProductAction(formData: FormData) {
  await requireAdminSession();

  await sql`
    DELETE FROM products
    WHERE id = ${Number(formData.get("id"))}
  `;

  revalidatePath("/");
  revalidatePath("/admin/products");
  redirect("/admin/products?saved=deleted");
}

export async function createQualityAction(formData: FormData) {
  await requireAdminSession();

  await sql`
    INSERT INTO quality_standards (
      badge, title, description, sort_order, created_at, updated_at
    )
    VALUES (
      ${getText(formData, "badge")},
      ${getText(formData, "title")},
      ${getText(formData, "description")},
      ${Number(formData.get("sortOrder") ?? 0)},
      NOW(),
      NOW()
    )
  `;

  revalidatePath("/");
  revalidatePath("/admin/quality");
  redirect("/admin/quality?saved=created");
}

export async function updateQualityAction(formData: FormData) {
  await requireAdminSession();

  await sql`
    UPDATE quality_standards
    SET
      badge = ${getText(formData, "badge")},
      title = ${getText(formData, "title")},
      description = ${getText(formData, "description")},
      sort_order = ${Number(formData.get("sortOrder") ?? 0)},
      updated_at = NOW()
    WHERE id = ${Number(formData.get("id"))}
  `;

  revalidatePath("/");
  revalidatePath("/admin/quality");
  redirect("/admin/quality?saved=updated");
}

export async function deleteQualityAction(formData: FormData) {
  await requireAdminSession();

  await sql`
    DELETE FROM quality_standards
    WHERE id = ${Number(formData.get("id"))}
  `;

  revalidatePath("/");
  revalidatePath("/admin/quality");
  redirect("/admin/quality?saved=deleted");
}

export async function updateInquiryStatusAction(formData: FormData) {
  await requireAdminSession();

  await sql`
    UPDATE inquiries
    SET
      status = ${getText(formData, "status")},
      updated_at = NOW()
    WHERE id = ${Number(formData.get("id"))}
  `;

  revalidatePath("/admin/inquiries");
  redirect("/admin/inquiries?saved=status");
}
