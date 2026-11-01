'use client';

import React from 'react';
import Link from 'next/link';
import { OrgDashboardLayout } from '@/components/layout/OrgDashboardLayout';
import { useApp } from '@/context/AppContext';
import { Award, PlusCircle, ArrowRight } from 'lucide-react';

export default function OrgScholarshipsListPage() {
  const { scholarships } = useApp();

  return (
    <OrgDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-base font-bold text-slate-900">Manage Published Scholarships</h2>
            <p className="text-xs text-slate-500">Track application intake and awarded slots</p>
          </div>
          <Link
            href="/organization/scholarships/new"
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition shadow flex items-center space-x-1"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Create New Program</span>
          </Link>
        </div>

        <div className="space-y-3">
          {scholarships.map((s) => (
            <div
              key={s.id}
              className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div>
                <h3 className="font-bold text-slate-900 text-sm">{s.title}</h3>
                <p className="text-[11px] text-slate-500">
                  Budget: ৳ {s.budgetBDT.toLocaleString()} • Awarded: {s.awardedRecipients} / {s.totalRecipients}
                </p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {s.eligibleCountries.map((c) => (
                    <span key={c} className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-[10px]">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2 shrink-0">
                <Link
                  href="/organization/applicants"
                  className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 font-semibold text-slate-700 text-xs"
                >
                  Applicants
                </Link>
                <Link
                  href={`/scholarships/${s.id}`}
                  className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs"
                >
                  Public View ↗
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </OrgDashboardLayout>
  );
}

