import { NextResponse } from 'next/server';
import { getAdminContent } from '@/lib/get-site-content';

export const dynamic = 'force-dynamic';

export async function GET() {
  const data = await getAdminContent();
  return NextResponse.json(data ?? {});
}
