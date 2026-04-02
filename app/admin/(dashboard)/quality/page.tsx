import { createQualityAction, updateQualityAction } from "@/app/admin/actions";
import { getQualityStandards } from "@/lib/content";

export default async function AdminQualityPage() {
  const standards = await getQualityStandards();

  return (
    <div className="space-y-6">
      <div className="editorial-card p-6 md:p-8">
        <span className="eyebrow mb-4 inline-block">Quality</span>
        <h2 className="text-3xl font-extrabold text-on-surface">Quality Standards</h2>
      </div>

      <form action={createQualityAction} className="editorial-card grid gap-4 p-6">
        <h3 className="text-xl font-bold text-on-surface">Add Quality Card</h3>
        <input name="badge" className="input-shell" placeholder="Badge e.g. 05" required />
        <input name="title" className="input-shell" placeholder="Title" required />
        <textarea name="description" className="input-shell min-h-28 resize-y" placeholder="Description" required />
        <input name="sortOrder" type="number" className="input-shell" placeholder="Sort order" defaultValue={standards.length + 1} />
        <button type="submit" className="button-primary w-fit">Add Quality Card</button>
      </form>

      <div className="grid gap-4">
        {standards.map((standard) => (
          <form key={standard.id} action={updateQualityAction} className="editorial-card grid gap-4 p-6">
            <input type="hidden" name="id" value={standard.id} />
            <input name="badge" className="input-shell" defaultValue={standard.badge} />
            <input name="title" className="input-shell" defaultValue={standard.title} />
            <textarea name="description" className="input-shell min-h-28 resize-y" defaultValue={standard.description} />
            <input name="sortOrder" type="number" className="input-shell" defaultValue={standard.sortOrder} />
            <button type="submit" className="button-primary w-fit">Save Quality Card</button>
          </form>
        ))}
      </div>
    </div>
  );
}
