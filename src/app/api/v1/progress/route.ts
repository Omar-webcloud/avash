import { NextResponse } from 'next/server';
import { mockProgressUpdates } from '@/lib/mockData';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: mockProgressUpdates,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json(
      {
        success: true,
        message: 'Progress update logged successfully',
        data: body,
      },
      { status: 201 }
    );
  } catch (e) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

