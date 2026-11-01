import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    // Simulate webhook verification from bKash, Nagad, or card processor
    return NextResponse.json({
      received: true,
      reconciled: true,
      transactionId: payload.transactionId || 'BKASH_TXN_RECON_OK',
      timestamp: new Date().toISOString(),
    });
  } catch (e) {
    return NextResponse.json({ received: false }, { status: 400 });
  }
}

