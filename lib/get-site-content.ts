import fs from 'fs/promises';
import path from 'path';

const LOCAL_FILE = path.join(process.cwd(), 'data', 'admin-content.json');
const useBlob = !!process.env.BLOB_READ_WRITE_TOKEN;

export async function getAdminContent(): Promise<Record<string, unknown> | null> {
  try {
    if (useBlob) {
      const { list } = await import('@vercel/blob');
      const { blobs } = await list({ prefix: 'muzari-site-content.json' });
      if (!blobs.length) return null;
      const res = await fetch(blobs[0].url, { next: { revalidate: 0 } });
      return res.json();
    }
    const raw = await fs.readFile(LOCAL_FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
