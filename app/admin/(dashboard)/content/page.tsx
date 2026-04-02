import {
  updateHeroAction,
  updateHomepageImagesAction,
  updateMissionVisionAction,
  updateSettingsAction,
} from "@/app/admin/actions";
import {
  AdminCard,
  AdminField,
  AdminNotice,
  AdminPageHeader,
  AdminPreviewLink,
} from "@/components/admin/AdminUi";
import { getHomePageContent } from "@/lib/content";

type AdminContentPageProps = {
  searchParams: Promise<{ saved?: string }>;
};

function getSavedMessage(saved?: string) {
  switch (saved) {
    case "hero":
      return "Hero copy updated.";
    case "images":
      return "Homepage images updated.";
    case "mission":
      return "Mission and vision content updated.";
    case "settings":
      return "Section copy updated.";
    default:
      return "";
  }
}

export default async function AdminContentPage({
  searchParams,
}: AdminContentPageProps) {
  const [content, params] = await Promise.all([
    getHomePageContent(),
    searchParams,
  ]);

  const principles = [
    content.missionVision.principles[0] ?? "",
    content.missionVision.principles[1] ?? "",
    content.missionVision.principles[2] ?? "",
  ];

  const bananaImages = [
    content.bananaGallery[0],
    content.bananaGallery[1],
    content.bananaGallery[2],
    content.bananaGallery[3],
  ];

  const savedMessage = getSavedMessage(params.saved);

  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Content"
        title="Homepage CMS"
        description="Edit the live homepage copy and visuals. Hero and banana gallery images are now managed here instead of being hardcoded in components."
        action={<AdminPreviewLink href="/" />}
      />

      {savedMessage ? <AdminNotice>{savedMessage}</AdminNotice> : null}

      <form action={updateHeroAction}>
        <AdminCard
          title="Hero Copy"
          description="Controls the main headline, supporting message, and call-to-action links in the top hero section."
          actions={<button type="submit" className="button-primary">Save Hero</button>}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <AdminField label="Eyebrow">
              <input name="eyebrow" className="input-shell" defaultValue={content.hero.eyebrow} required />
            </AdminField>
            <AdminField label="Trust note">
              <input name="trustNote" className="input-shell" defaultValue={content.hero.trustNote} required />
            </AdminField>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <AdminField label="Title line one">
              <input name="titleLineOne" className="input-shell" defaultValue={content.hero.titleLineOne} required />
            </AdminField>
            <AdminField label="Title line two">
              <input name="titleLineTwo" className="input-shell" defaultValue={content.hero.titleLineTwo} required />
            </AdminField>
          </div>

          <AdminField label="Description">
            <textarea
              name="description"
              className="input-shell min-h-32 resize-y"
              defaultValue={content.hero.description}
              required
            />
          </AdminField>

          <div className="grid gap-4 md:grid-cols-2">
            <AdminField label="Primary CTA label">
              <input name="primaryCtaLabel" className="input-shell" defaultValue={content.hero.primaryCtaLabel} required />
            </AdminField>
            <AdminField label="Primary CTA href">
              <input name="primaryCtaHref" className="input-shell" defaultValue={content.hero.primaryCtaHref} required />
            </AdminField>
            <AdminField label="Secondary CTA label">
              <input name="secondaryCtaLabel" className="input-shell" defaultValue={content.hero.secondaryCtaLabel} required />
            </AdminField>
            <AdminField label="Secondary CTA href">
              <input name="secondaryCtaHref" className="input-shell" defaultValue={content.hero.secondaryCtaHref} required />
            </AdminField>
          </div>
        </AdminCard>
      </form>

      <form action={updateHomepageImagesAction}>
        <AdminCard
          title="Homepage Images"
          description="Use direct image URLs for the main hero visual and the four banana spotlight mosaic slots. Alt text is used on the live site for accessibility and SEO."
          actions={<button type="submit" className="button-primary">Save Images</button>}
        >
          <div className="rounded-[1.5rem] bg-surface-container p-5">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-ink/70">
              Hero image
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <AdminField label="Hero image URL" hint="Paste a full image URL that works in the public site.">
                <input name="heroImageSrc" className="input-shell" defaultValue={content.heroImage.src} required />
              </AdminField>
              <AdminField label="Hero image alt text">
                <input name="heroImageAlt" className="input-shell" defaultValue={content.heroImage.alt} required />
              </AdminField>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {bananaImages.map((image, index) => (
              <div key={image.slotKey} className="rounded-[1.5rem] bg-surface-container p-5">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-ink/70">
                  Banana image {index + 1}
                </div>
                <div className="mt-4 grid gap-4">
                  <AdminField label="Image URL">
                    <input
                      name={`bananaImage${index + 1}Src`}
                      className="input-shell"
                      defaultValue={image.src}
                      required
                    />
                  </AdminField>
                  <AdminField label="Alt text">
                    <input
                      name={`bananaImage${index + 1}Alt`}
                      className="input-shell"
                      defaultValue={image.alt}
                      required
                    />
                  </AdminField>
                </div>
              </div>
            ))}
          </div>
        </AdminCard>
      </form>

      <form action={updateMissionVisionAction}>
        <AdminCard
          title="Mission and Vision"
          description="Controls the brand-positioning section below the hero."
          actions={<button type="submit" className="button-primary">Save Mission & Vision</button>}
        >
          <AdminField label="Mission text">
            <textarea
              name="missionText"
              className="input-shell min-h-28 resize-y"
              defaultValue={content.missionVision.missionText}
              required
            />
          </AdminField>
          <AdminField label="Vision text">
            <textarea
              name="visionText"
              className="input-shell min-h-28 resize-y"
              defaultValue={content.missionVision.visionText}
              required
            />
          </AdminField>
          <div className="grid gap-4">
            {principles.map((principle, index) => (
              <AdminField
                key={index}
                label={`Principle ${index + 1}`}
              >
                <input
                  name={["principleOne", "principleTwo", "principleThree"][index]}
                  className="input-shell"
                  defaultValue={principle}
                />
              </AdminField>
            ))}
          </div>
        </AdminCard>
      </form>

      <form action={updateSettingsAction}>
        <AdminCard
          title="Section Copy"
          description="Controls the collection, banana spotlight, inquiry, and footer copy used throughout the homepage."
          actions={<button type="submit" className="button-primary">Save Section Copy</button>}
        >
          <div className="rounded-[1.5rem] bg-surface-container p-5">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-ink/70">
              Tapioca collection
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <AdminField label="Eyebrow">
                <input name="tapiocaEyebrow" className="input-shell" defaultValue={content.settings.tapiocaEyebrow} required />
              </AdminField>
              <AdminField label="Title">
                <input name="tapiocaTitle" className="input-shell" defaultValue={content.settings.tapiocaTitle} required />
              </AdminField>
              <AdminField label="CTA label">
                <input name="tapiocaCtaLabel" className="input-shell" defaultValue={content.settings.tapiocaCtaLabel} required />
              </AdminField>
              <AdminField label="CTA href">
                <input name="tapiocaCtaHref" className="input-shell" defaultValue={content.settings.tapiocaCtaHref} required />
              </AdminField>
            </div>
            <div className="mt-4">
              <AdminField label="Description">
                <textarea
                  name="tapiocaDescription"
                  className="input-shell min-h-28 resize-y"
                  defaultValue={content.settings.tapiocaDescription}
                  required
                />
              </AdminField>
            </div>
          </div>

          <div className="rounded-[1.5rem] bg-surface-container p-5">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-ink/70">
              Banana spotlight
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <AdminField label="Eyebrow">
                <input name="bananaEyebrow" className="input-shell" defaultValue={content.settings.bananaEyebrow} required />
              </AdminField>
              <AdminField label="Title">
                <input name="bananaTitle" className="input-shell" defaultValue={content.settings.bananaTitle} required />
              </AdminField>
              <AdminField label="Accent title">
                <input name="bananaAccent" className="input-shell" defaultValue={content.settings.bananaAccent} required />
              </AdminField>
              <AdminField label="CTA label">
                <input name="bananaCtaLabel" className="input-shell" defaultValue={content.settings.bananaCtaLabel} required />
              </AdminField>
              <AdminField label="CTA href">
                <input name="bananaCtaHref" className="input-shell md:col-span-2" defaultValue={content.settings.bananaCtaHref} required />
              </AdminField>
            </div>
            <div className="mt-4">
              <AdminField label="Description">
                <textarea
                  name="bananaDescription"
                  className="input-shell min-h-28 resize-y"
                  defaultValue={content.settings.bananaDescription}
                  required
                />
              </AdminField>
            </div>
          </div>

          <div className="rounded-[1.5rem] bg-surface-container p-5">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-ink/70">
              Inquiry and footer
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <AdminField label="Inquiry badge">
                <input name="inquiryBadge" className="input-shell" defaultValue={content.settings.inquiryBadge} required />
              </AdminField>
              <AdminField label="Inquiry title">
                <input name="inquiryTitle" className="input-shell" defaultValue={content.settings.inquiryTitle} required />
              </AdminField>
            </div>
            <div className="mt-4 grid gap-4">
              <AdminField label="Inquiry description">
                <textarea
                  name="inquiryDescription"
                  className="input-shell min-h-28 resize-y"
                  defaultValue={content.settings.inquiryDescription}
                  required
                />
              </AdminField>
              <AdminField label="Response note">
                <input name="inquiryResponseNote" className="input-shell" defaultValue={content.settings.inquiryResponseNote} required />
              </AdminField>
              <AdminField label="Focus note">
                <input name="inquiryFocusNote" className="input-shell" defaultValue={content.settings.inquiryFocusNote} required />
              </AdminField>
              <AdminField label="Footer description">
                <textarea
                  name="footerDescription"
                  className="input-shell min-h-28 resize-y"
                  defaultValue={content.settings.footerDescription}
                  required
                />
              </AdminField>
              <AdminField label="Footer CTA label">
                <input name="footerCtaLabel" className="input-shell" defaultValue={content.settings.footerCtaLabel} required />
              </AdminField>
            </div>
          </div>
        </AdminCard>
      </form>
    </div>
  );
}
