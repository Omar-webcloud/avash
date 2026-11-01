import { NextResponse } from 'next/server';
import { mockStudents } from '@/lib/mockData';

export async function GET() {
  const pending = mockStudents.filter(
    (s) => s.verificationStatus === 'Submitted' || s.verificationStatus === 'Under Review'
  );
  return NextResponse.json({
    success: true,
    count: pending.length,
    data: pending,
  });
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({
      success: true,
      message: `Student verification updated to ${body.status}`,
      data: body,
    });
  } catch (e) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

