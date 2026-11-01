import { NextResponse } from 'next/server';
import { mockDonations } from '@/lib/mockData';

export async function GET() {
  // Returns current donor's contribution history
  return NextResponse.json({
    success: true,
    data: mockDonations,
  });
}

