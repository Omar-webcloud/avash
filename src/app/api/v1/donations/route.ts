import { NextResponse } from 'next/server';
import { mockDonations } from '@/lib/mockData';

export async function GET() {
  return NextResponse.json({
    success: true,
    count: mockDonations.length,
    data: mockDonations,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const receiptNumber = `AVASH-RCP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const transactionHash = `${(body.paymentMethod || 'BKASH').toUpperCase()}_TXN_${Math.random().toString(36).substring(2, 10).toUpperCase()}`;

    const newDonation = {
      id: `don-${Date.now()}`,
      ...body,
      receiptNumber,
      transactionHash,
      status: 'Successful',
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        message: 'Donation processed and reconciled successfully',
        data: newDonation,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Payment processing error' },
      { status: 400 }
    );
  }
}

