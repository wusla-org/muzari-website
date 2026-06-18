import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

const LOCAL_FILE = path.join(process.cwd(), 'data', 'contact-submissions.json');
const useBlob = !!process.env.BLOB_READ_WRITE_TOKEN;

async function readSubmissions(): Promise<unknown[]> {
  if (useBlob) {
    const { list } = await import('@vercel/blob');
    const { blobs } = await list({ prefix: 'muzari-contact-submissions.json' });
    if (!blobs.length) return [];
    const res = await fetch(blobs[0].url);
    return res.json();
  }
  try {
    const raw = await fs.readFile(LOCAL_FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeSubmissions(data: unknown[]) {
  if (useBlob) {
    const { put } = await import('@vercel/blob');
    await put('muzari-contact-submissions.json', JSON.stringify(data, null, 2), {
      access: 'public',
      addRandomSuffix: false,
    });
    return;
  }
  await fs.mkdir(path.dirname(LOCAL_FILE), { recursive: true });
  await fs.writeFile(LOCAL_FILE, JSON.stringify(data, null, 2), 'utf8');
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, inquiryType, message } = body;

    if (!fullName || !email || !inquiryType || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const submissions = await readSubmissions();
    submissions.unshift({
      id: Date.now().toString(),
      submittedAt: new Date().toISOString(),
      fullName,
      email,
      inquiryType,
      message,
    });

    await writeSubmissions(submissions);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Contact submission error:', err);
    return NextResponse.json({ error: 'Failed to save submission.' }, { status: 500 });
  }
}
