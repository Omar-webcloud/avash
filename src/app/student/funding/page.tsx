'use client';

import React from 'react';
import { StudentDashboardLayout } from '@/components/layout/StudentDashboardLayout';
import { useApp } from '@/context/AppContext';
import { Coins, CheckCircle, ShieldCheck, ArrowDownRight, CreditCard } from 'lucide-react';

export default function StudentFundingPage() {
  const { donations, campaigns, students, setActiveDonationForReceipt } = useApp();
  const student = students.find((s) => s.id === 'std-nafis') || students[0];
  const myDonations = donations.filter((d) => d.studentId === student.id);
  const totalReceived = myDonations.reduce((sum, d) => sum + d.amountBDT, 0);

  return (
    <StudentDashboardLayout>
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Total Community Funds
            </span>
            <div className="text-2xl font-black text-emerald-700">
              ৳ {totalReceived.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-400">100% held in audited educational escrow</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Escrow Disbursement
            </span>
            <div className="text-2xl font-black text-slate-900">
              ৳ 65,000 Disbursed
            </div>
            <p className="text-[11px] text-emerald-600 font-medium">SEVIS & Visa Fee Receipts Reconciled</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Available for Flight/Dorm
            </span>
            <div className="text-2xl font-black text-indigo-700">
              ৳ {(totalReceived - 65000).toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-400">Released upon invoice verification</p>
          </div>
        </div>

        {/* Incoming Donations Ledger */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
              <Coins className="w-4 h-4 text-emerald-600" />
              <span>Incoming Patron Contributions ({myDonations.length})</span>
            </h3>
            <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              100% Reconciled
            </span>
          </div>

          <div className="space-y-3">
            {myDonations.map((don) => (
              <div
                key={don.id}
                className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-slate-900 text-sm">{don.donorName}</span>
                    <span className="text-[10px] font-bold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                      via {don.paymentMethod}
                    </span>
                  </div>
                  {don.message && (
                    <p className="text-slate-600 text-[11px] italic mt-1">&quot;{don.message}&quot;</p>
                  )}
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    Receipt: <span className="font-mono">{don.receiptNumber}</span> • {don.createdAt}
                  </p>
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  <div className="text-right">
                    <span className="text-base font-black text-emerald-700 block">
                      + ৳ {don.amountBDT.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-emerald-600 flex items-center justify-end font-semibold">
                      <CheckCircle className="w-3 h-3 mr-0.5" /> Reconciled
                    </span>
                  </div>
                  <button
                    onClick={() => setActiveDonationForReceipt(don)}
                    className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition"
                  >
                    View Receipt
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StudentDashboardLayout>
  );
}

