import { updateInquiryStatusAction } from "@/app/admin/actions";
import { getInquiries } from "@/lib/content";

export default async function AdminInquiriesPage() {
  const inquiries = await getInquiries();

  return (
    <div className="space-y-6">
      <div className="editorial-card p-6 md:p-8">
        <span className="eyebrow mb-4 inline-block">Inquiries</span>
        <h2 className="text-3xl font-extrabold text-on-surface">Trade Inquiry Inbox</h2>
      </div>

      <div className="grid gap-4">
        {inquiries.length ? inquiries.map((inquiry) => (
          <form key={inquiry.id} action={updateInquiryStatusAction} className="editorial-card space-y-4 p-6">
            <input type="hidden" name="id" value={inquiry.id} />
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-bold text-on-surface">{inquiry.name}</h3>
                <p className="text-sm text-on-surface-variant">{inquiry.email}</p>
              </div>
              <select name="status" defaultValue={inquiry.status} className="input-shell max-w-xs appearance-none">
                <option value="new">new</option>
                <option value="in_progress">in_progress</option>
                <option value="resolved">resolved</option>
              </select>
            </div>
            <p className="text-sm leading-6 text-on-surface-variant">
              Product: {inquiry.product}
              {inquiry.organization ? ` • ${inquiry.organization}` : ""}
            </p>
            <p className="rounded-2xl bg-surface-container p-4 text-sm leading-7 text-on-surface-variant">
              {inquiry.details || "No extra details provided."}
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-on-surface/50">
              Created {new Date(inquiry.createdAt).toLocaleString()}
            </p>
            <button type="submit" className="button-primary w-fit">Update Status</button>
          </form>
        )) : (
          <div className="editorial-card p-6 text-on-surface-variant">
            No inquiries yet.
          </div>
        )}
      </div>
    </div>
  );
}
