import { NextResponse } from 'next/server';
import { mockStudents } from '@/lib/mockData';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const student = mockStudents.find(
    (s) => s.id === params.id || s.slug === params.id
  );

  if (!student) {
    return NextResponse.json(
      { success: false, message: 'Student profile not found' },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    data: student,
  });
}
