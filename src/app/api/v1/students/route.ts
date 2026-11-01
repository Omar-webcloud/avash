import { NextResponse } from 'next/server';
import { mockStudents } from '@/lib/mockData';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get('country');
  const degree = searchParams.get('degree');

  let list = [...mockStudents];
  if (country && country !== 'All') {
    list = list.filter((s) => s.targetCountry.toLowerCase() === country.toLowerCase());
  }
  if (degree && degree !== 'All') {
    list = list.filter((s) => s.intendedDegree.toLowerCase().includes(degree.toLowerCase()));
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
        message: 'Student profile created/updated successfully',
        data: body,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Invalid payload' },
      { status: 400 }
    );
  }
}
