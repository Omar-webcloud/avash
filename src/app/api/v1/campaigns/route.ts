import { NextResponse } from 'next/server';
import { mockCampaigns } from '@/lib/mockData';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');

  let list = [...mockCampaigns];
  if (status && status !== 'All') {
    list = list.filter((c) => c.status === status);
  }

  return NextResponse.json({
    success: true,
    count: list.length,
    data: list,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json(
      {
        success: true,
        message: 'Campaign submitted for human reviewer approval',
        data: body,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Invalid campaign payload' },
      { status: 400 }
    );
  }
}
