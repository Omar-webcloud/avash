'use client';

import React from 'react';
import { AdminDashboardLayout } from '@/components/layout/AdminDashboardLayout';
import { Banknote, CheckCircle, ShieldCheck } from 'lucide-react';

export default function AdminDisbursementsPage() {
  const disbursements = [
    {
      id: 'disb-001',
      studentName: 'Nafis Ahmed',
      purpose: 'I-901 SEVIS Fee & US Embassy MRV Fee',
      amountBDT: 65000,
      disbursedTo: 'Direct US Embassy & SEVP Payment Gateway',
      date: '2026-09-18',
      status: 'Disbursed & Invoiced',
    },
    {
      id: 'disb-002',
      studentName: 'Sumaiya Tasnim',
      purpose: 'UK IHS Surcharge & Student Visa Application',
      amountBDT: 85000,
      disbursedTo: 'UK Visas and Immigration (UKVI)',
      date: '2026-09-28',
      status: 'Disbursed & Invoiced',
    },
    {
      id: 'disb-003',
      studentName: 'Anika Tabassum',
      purpose: 'Dhaka to Toronto Pearson Flight (Emirates)',
      amountBDT: 108000,
      disbursedTo: 'Emirates Airlines Dhaka Ticket Office',
      date: '2026-10-24',
      status: 'Disbursed & Invoiced',
    },
  ];

  return (
    <AdminDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">Direct Escrow Disbursement Records</h2>
            <p className="text-slate-500">
              Funds disbursed strictly to authorized educational vendors against authenticated receipts (PRD Section 10)
            </p>
          </div>
          <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            ৳ 258,000 Disbursed to Vendors
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-2.5 px-3">Date</th>
                <th className="py-2.5 px-3">Student Beneficiary</th>
                <th className="py-2.5 px-3">Expenditure Purpose</th>
                <th className="py-2.5 px-3">Vendor / Recipient</th>
                <th className="py-2.5 px-3 text-right">Amount (BDT)</th>
                <th className="py-2.5 px-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {disbursements.map((d) => (
                <tr key={d.id} className="hover:bg-slate-50/50">
                  <td className="py-3 px-3 text-slate-500 whitespace-nowrap">{d.date}</td>
                  <td className="py-3 px-3 font-bold text-slate-900">{d.studentName}</td>
                  <td className="py-3 px-3 text-slate-800 font-medium">{d.purpose}</td>
                  <td className="py-3 px-3 text-slate-600">{d.disbursedTo}</td>
                  <td className="py-3 px-3 text-right font-black text-slate-900">
                    ৳ {d.amountBDT.toLocaleString()}
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="inline-flex items-center text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                      <CheckCircle className="w-3 h-3 mr-1" /> {d.status}
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

