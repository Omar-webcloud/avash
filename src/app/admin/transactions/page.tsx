'use client';

import React from 'react';
import { AdminDashboardLayout } from '@/components/layout/AdminDashboardLayout';
import { useApp } from '@/context/AppContext';
import { Receipt, CheckCircle2 } from 'lucide-react';

export default function AdminTransactionsPage() {
  const { donations } = useApp();

  return (
    <AdminDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">Payment Gateway Reconciliation Ledger</h2>
            <p className="text-slate-500">bKash, Nagad, Rocket, and Card Gateway transaction hashes and webhooks</p>
          </div>
          <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            100% Reconciled
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono">
            <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 font-sans">
              <tr>
                <th className="py-2.5 px-3">Transaction Hash</th>
                <th className="py-2.5 px-3">Gateway</th>
                <th className="py-2.5 px-3 text-right">Gross (BDT)</th>
                <th className="py-2.5 px-3 text-right">Fee (1.5%)</th>
                <th className="py-2.5 px-3 text-center">Reconciliation Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {donations.map((d) => (
                <tr key={d.id} className="hover:bg-slate-50/50">
                  <td className="py-3 px-3 text-slate-900 font-bold">{d.transactionHash}</td>
                  <td className="py-3 px-3 font-sans">{d.paymentMethod}</td>
                  <td className="py-3 px-3 text-right font-bold text-slate-900">
                    ৳ {d.amountBDT.toLocaleString()}
                  </td>
                  <td className="py-3 px-3 text-right text-slate-500">
                    ৳ {d.paymentProcessingFeeBDT.toLocaleString()}
                  </td>
                  <td className="py-3 px-3 text-center font-sans">
                    <span className="inline-flex items-center text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                      <CheckCircle2 className="w-3 h-3 mr-1" /> Reconciled
                    </span>
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

