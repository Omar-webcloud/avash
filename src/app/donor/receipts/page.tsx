'use client';

import React from 'react';
import { DonorDashboardLayout } from '@/components/layout/DonorDashboardLayout';
import { useApp } from '@/context/AppContext';
import { FileCheck2, Printer, ShieldCheck } from 'lucide-react';

export default function DonorReceiptsPage() {
  const { donations, setActiveDonationForReceipt } = useApp();

  return (
    <DonorDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">Official Digital Donation Receipts</h2>
            <p className="text-xs text-slate-500">Cryptographically signed receipts for your charitable contribution records (PRD 5.6)</p>
          </div>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            Escrow Certified
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {donations.map((d) => (
            <div
              key={d.id}
              className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-slate-800 text-xs">
                    {d.receiptNumber}
                  </span>
                  <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100/60 px-2 py-0.5 rounded">
                    PAID
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{d.studentName}</h4>
                <p className="text-[11px] text-slate-500 truncate">{d.campaignTitle}</p>
                <div className="text-xs text-slate-700 font-semibold pt-1">
                  Amount: <strong className="text-emerald-800">৳ {d.amountBDT.toLocaleString()}</strong> ({d.paymentMethod})
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400">{d.createdAt.split(' ')[0]}</span>
                <button
                  onClick={() => setActiveDonationForReceipt(d)}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center space-x-1 shadow-sm"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>View & Print</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DonorDashboardLayout>
  );
}

