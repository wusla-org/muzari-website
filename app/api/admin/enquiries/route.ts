import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

const LOCAL_FILE = path.join(process.cwd(), "data", "contact-submissions.json");
const useBlob = !!process.env.BLOB_READ_WRITE_TOKEN;

function isAuthorized(req: NextRequest) {
  const cookie = req.cookies.get("admin_session")?.value;
  return cookie === process.env.ADMIN_PASSWORD;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    if (useBlob) {
      const { list } = await import("@vercel/blob");
      const { blobs } = await list({ prefix: "muzari-contact-submissions.json" });
      if (blobs.length > 0) {
        const res = await fetch(blobs[0].url);
        const data = await res.json();
        return NextResponse.json(Array.isArray(data) ? data : []);
      }
    }

    const raw = await fs.readFile(LOCAL_FILE, "utf-8");
    const data = JSON.parse(raw);
    return NextResponse.json(Array.isArray(data) ? data : []);
  } catch {
    return NextResponse.json([]);
  }
}
