import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

const LOCAL_FILE = path.join(process.cwd(), 'data', 'admin-content.json');
const useBlob = !!process.env.BLOB_READ_WRITE_TOKEN;

function isAuthorized(req: NextRequest) {
  const cookie = req.cookies.get('admin_session')?.value;
  return cookie === process.env.ADMIN_PASSWORD;
}

async function readContent() {
  if (useBlob) {
    const { list } = await import('@vercel/blob');
    const { blobs } = await list({ prefix: 'muzari-site-content.json' });
    if (!blobs.length) return null;
    const res = await fetch(blobs[0].url);
    return res.json();
  }
  try {
    const raw = await fs.readFile(LOCAL_FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function writeContent(data: unknown) {
  if (useBlob) {
    const { put } = await import('@vercel/blob');
    await put('muzari-site-content.json', JSON.stringify(data), {
      access: 'public',
      allowOverwrite: true,
      contentType: 'application/json',
    });
  } else {
    await fs.mkdir(path.dirname(LOCAL_FILE), { recursive: true });
    await fs.writeFile(LOCAL_FILE, JSON.stringify(data, null, 2));
  }
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const data = await readContent();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(null);
  }
}

export async function PUT(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const body = await req.json();
  await writeContent(body);
  return NextResponse.json({ ok: true });
}
