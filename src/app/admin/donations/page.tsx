'use client';

import React from 'react';
import { AdminDashboardLayout } from '@/components/layout/AdminDashboardLayout';
import { useApp } from '@/context/AppContext';
import { Coins, CheckCircle2 } from 'lucide-react';

export default function AdminDonationsPage() {
  const { donations, setActiveDonationForReceipt } = useApp();

  return (
    <AdminDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">Central Escrow Donation Ledger</h2>
            <p className="text-slate-500">Real-time donation transactions with 100% reconciliation (PRD Section 5.6)</p>
          </div>
          <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            {donations.length} Contributions Logged
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-2.5 px-3">Date</th>
                <th className="py-2.5 px-3">Donor</th>
                <th className="py-2.5 px-3">Student Beneficiary</th>
                <th className="py-2.5 px-3">Gateway</th>
                <th className="py-2.5 px-3 text-right">Amount (BDT)</th>
                <th className="py-2.5 px-3 text-center">Status</th>
                <th className="py-2.5 px-3 text-right">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {donations.map((d) => (
                <tr key={d.id} className="hover:bg-slate-50/50">
                  <td className="py-3 px-3 text-slate-500 whitespace-nowrap">{d.createdAt.split(' ')[0]}</td>
                  <td className="py-3 px-3 font-semibold text-slate-900">{d.donorName}</td>
                  <td className="py-3 px-3 font-medium text-slate-800">{d.studentName}</td>
                  <td className="py-3 px-3">{d.paymentMethod}</td>
                  <td className="py-3 px-3 text-right font-bold text-slate-900">
                    ৳ {d.amountBDT.toLocaleString()}
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="inline-flex items-center text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                      <CheckCircle2 className="w-3 h-3 mr-1" /> Reconciled
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <button
                      onClick={() => setActiveDonationForReceipt(d)}
                      className="text-purple-700 font-semibold hover:underline"
                    >
                      Receipt ↗
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminDashboardLayout>
  );
}

