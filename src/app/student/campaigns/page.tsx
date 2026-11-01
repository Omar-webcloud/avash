'use client';

import React from 'react';
import Link from 'next/link';
import { StudentDashboardLayout } from '@/components/layout/StudentDashboardLayout';
import { useApp } from '@/context/AppContext';
import { Megaphone, PlusCircle, ArrowRight, Eye, Users } from 'lucide-react';

export default function StudentCampaignsPage() {
  const { campaigns, students } = useApp();
  const student = students.find((s) => s.id === 'std-nafis') || students[0];
  const myCampaigns = campaigns.filter((c) => c.studentId === student.id);

  return (
    <StudentDashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">My Fundraising Campaigns</h2>
            <p className="text-xs text-slate-500">Manage your active, draft, and completed campaigns</p>
          </div>
          <Link
            href="/student/campaigns/new"
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow flex items-center space-x-1.5"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Launch New Campaign</span>
          </Link>
        </div>

        <div className="space-y-4">
          {myCampaigns.map((camp) => {
            const pct = Math.min(100, Math.round((camp.raisedAmountBDT / camp.fundingGoalBDT) * 100));
            return (
              <div
                key={camp.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{camp.title}</h3>
                    <p className="text-xs text-slate-500">{camp.targetUniversity} • {camp.destinationCountry}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200 w-fit">
                    Status: {camp.status}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>
                      <strong className="text-slate-900 font-bold">
                        ৳ {camp.raisedAmountBDT.toLocaleString()}
                      </strong>{' '}
                      raised of ৳ {camp.fundingGoalBDT.toLocaleString()}
                    </span>
                    <strong className="text-emerald-700">{pct}%</strong>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>

                {/* Expenses summary */}
                <div className="bg-slate-50 p-4 rounded-xl text-xs space-y-1.5">
                  <span className="font-bold text-slate-700 block">Itemized Expense Categories:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-slate-600">
                    {camp.expenses.map((e) => (
                      <div key={e.id} className="p-2 bg-white rounded-lg border border-slate-100">
                        <span className="font-bold text-slate-800 block truncate">{e.title}</span>
                        <span className="text-emerald-700 font-semibold">৳ {e.amountBDT.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <span className="flex items-center space-x-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>{camp.donorCount} Generous Patrons</span>
                  </span>
                  <Link
                    href={`/campaigns/${camp.id}`}
                    className="inline-flex items-center space-x-1 text-emerald-700 font-bold hover:underline"
                  >
                    <span>View Public Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </StudentDashboardLayout>
  );
}

