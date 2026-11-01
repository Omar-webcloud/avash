import { NextResponse } from 'next/server';
import { mockScholarships } from '@/lib/mockData';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const scholarship = mockScholarships.find(
    (s) => s.id === params.id || s.slug === params.id
  );

  if (!scholarship) {
    return NextResponse.json(
      { success: false, message: 'Scholarship not found' },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    data: scholarship,
  });
}
