'use client';

import React from 'react';
import { DonorDashboardLayout } from '@/components/layout/DonorDashboardLayout';
import { useApp } from '@/context/AppContext';
import { Heart, CheckCircle2 } from 'lucide-react';

export default function DonorDonationsPage() {
  const { donations, setActiveDonationForReceipt } = useApp();

  return (
    <DonorDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <h2 className="text-base font-bold text-slate-900">Contribution Ledger</h2>
          <p className="text-xs text-slate-500">Every donation is cryptographically reconciled with instant receipts (PRD 5.6)</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-2.5 px-3">Date</th>
                <th className="py-2.5 px-3">Student Beneficiary</th>
                <th className="py-2.5 px-3">Method</th>
                <th className="py-2.5 px-3 text-right">Amount (BDT)</th>
                <th className="py-2.5 px-3 text-center">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {donations.map((d) => (
                <tr key={d.id} className="hover:bg-slate-50">
                  <td className="py-3 px-3 text-slate-500 whitespace-nowrap">{d.createdAt.split(' ')[0]}</td>
                  <td className="py-3 px-3">
                    <span className="font-bold text-slate-900">{d.studentName}</span>
                    <span className="block text-[11px] text-slate-400 truncate max-w-xs">{d.campaignTitle}</span>
                  </td>
                  <td className="py-3 px-3 font-medium">{d.paymentMethod}</td>
                  <td className="py-3 px-3 text-right font-bold text-slate-900">
                    ৳ {d.amountBDT.toLocaleString()}
                  </td>
                  <td className="py-3 px-3 text-center">
                    <button
                      onClick={() => setActiveDonationForReceipt(d)}
                      className="px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 font-semibold text-slate-700 transition"
                    >
                      #{d.receiptNumber.split('-').pop()}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DonorDashboardLayout>
  );
}

