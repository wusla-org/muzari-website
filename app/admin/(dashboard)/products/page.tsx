import {
  createProductAction,
  deleteProductAction,
  updateProductAction,
} from "@/app/admin/actions";
import {
  AdminCard,
  AdminField,
  AdminNotice,
  AdminPageHeader,
  AdminPreviewLink,
} from "@/components/admin/AdminUi";
import { getProducts } from "@/lib/content";

type AdminProductsPageProps = {
  searchParams: Promise<{ saved?: string }>;
};

function getSavedMessage(saved?: string) {
  switch (saved) {
    case "created":
      return "Product added.";
    case "updated":
      return "Product updated.";
    case "deleted":
      return "Product deleted.";
    default:
      return "";
  }
}

export default async function AdminProductsPage({
  searchParams,
}: AdminProductsPageProps) {
  const [products, params] = await Promise.all([getProducts(), searchParams]);
  const savedMessage = getSavedMessage(params.saved);

  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Products"
        title="Product Image Manager"
        description="Manage collection cards, sort order, featured state, and the public image URLs shown on the homepage."
        action={<AdminPreviewLink href="/#collections" />}
      />

      {savedMessage ? <AdminNotice>{savedMessage}</AdminNotice> : null}

      <form action={createProductAction}>
        <AdminCard
          title="Add Product"
          description="Create a new collection card with its own image URL and alt text."
          actions={<button type="submit" className="button-primary">Add Product</button>}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <AdminField label="Title">
              <input name="title" className="input-shell" placeholder="Title" required />
            </AdminField>
            <AdminField label="Sort order">
              <input
                name="sortOrder"
                type="number"
                className="input-shell"
                defaultValue={products.length + 1}
                required
              />
            </AdminField>
          </div>
          <AdminField label="Description">
            <textarea name="description" className="input-shell min-h-28 resize-y" required />
          </AdminField>
          <div className="grid gap-4 md:grid-cols-2">
            <AdminField label="Image URL">
              <input name="imageUrl" className="input-shell" placeholder="https://..." required />
            </AdminField>
            <AdminField label="Alt text">
              <input name="altText" className="input-shell" placeholder="Describe the product image" required />
            </AdminField>
          </div>
          <label className="flex items-center gap-3 text-sm font-medium text-on-surface">
            <input name="featured" type="checkbox" />
            Featured product
          </label>
        </AdminCard>
      </form>

      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="editorial-card p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h3 className="text-xl font-bold text-on-surface">{product.title}</h3>
                <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                  Current image preview:
                </p>
                <a
                  href={product.imageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex rounded-full bg-surface-container px-4 py-2 text-sm font-semibold text-on-surface"
                >
                  Open image URL
                </a>
              </div>

              <form action={deleteProductAction}>
                <input type="hidden" name="id" value={product.id} />
                <button type="submit" className="button-secondary">
                  Delete Product
                </button>
              </form>
            </div>

            <form action={updateProductAction} className="mt-6 grid gap-4">
              <input type="hidden" name="id" value={product.id} />
              <div className="grid gap-4 md:grid-cols-2">
                <AdminField label="Title">
                  <input name="title" className="input-shell" defaultValue={product.title} required />
                </AdminField>
                <AdminField label="Sort order">
                  <input name="sortOrder" type="number" className="input-shell" defaultValue={product.sortOrder} required />
                </AdminField>
              </div>
              <AdminField label="Description">
                <textarea
                  name="description"
                  className="input-shell min-h-28 resize-y"
                  defaultValue={product.description}
                  required
                />
              </AdminField>
              <div className="grid gap-4 md:grid-cols-2">
                <AdminField label="Image URL">
                  <input name="imageUrl" className="input-shell" defaultValue={product.imageUrl} required />
                </AdminField>
                <AdminField label="Alt text">
                  <input name="altText" className="input-shell" defaultValue={product.altText} required />
                </AdminField>
              </div>
              <label className="flex items-center gap-3 text-sm font-medium text-on-surface">
                <input name="featured" type="checkbox" defaultChecked={product.featured} />
                Featured product
              </label>
              <button type="submit" className="button-primary w-fit">
                Save Product
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
