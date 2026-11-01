'use client';

import React from 'react';
import Link from 'next/link';
import { AdminDashboardLayout } from '@/components/layout/AdminDashboardLayout';
import { useApp } from '@/context/AppContext';
import { Award } from 'lucide-react';

export default function AdminScholarshipsPage() {
  const { scholarships } = useApp();

  return (
    <AdminDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">Institutional Scholarships Directory</h2>
            <p className="text-slate-500">All registered foundation and CSR grants</p>
          </div>
          <span className="font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
            {scholarships.length} Listings
          </span>
        </div>

        <div className="space-y-3">
          {scholarships.map((s) => (
            <div
              key={s.id}
              className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold text-slate-900 text-sm">{s.title}</h3>
                <p className="text-[11px] text-slate-500">{s.organizationName} • Budget: ৳ {s.budgetBDT.toLocaleString()}</p>
                <span className="text-[10px] text-emerald-700 font-semibold">
                  Awarded: {s.awardedRecipients} of {s.totalRecipients} slots
                </span>
              </div>
              <Link
                href={`/scholarships/${s.id}`}
                className="text-purple-700 font-semibold hover:underline"
              >
                Inspect Details ↗
              </Link>
            </div>
          ))}
        </div>
      </div>
    </AdminDashboardLayout>
  );
}

