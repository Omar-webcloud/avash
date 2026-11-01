import { NextResponse } from 'next/server';
import { mockCampaigns } from '@/lib/mockData';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const campaign = mockCampaigns.find(
    (c) => c.id === params.id || c.slug === params.id
  );

  if (!campaign) {
    return NextResponse.json(
      { success: false, message: 'Campaign not found' },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    data: campaign,
  });
}
