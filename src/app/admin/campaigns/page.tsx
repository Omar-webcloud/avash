'use client';

import React from 'react';
import Link from 'next/link';
import { AdminDashboardLayout } from '@/components/layout/AdminDashboardLayout';
import { useApp } from '@/context/AppContext';
import { Megaphone, CheckCircle2, AlertOctagon, ShieldCheck } from 'lucide-react';

export default function AdminCampaignsPage() {
  const { campaigns, reviewCampaign } = useApp();

  return (
    <AdminDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">Campaign Moderation & Status Control</h2>
            <p className="text-slate-500">Review student campaigns, itemized budget goals, and live statuses (PRD Section 5.4)</p>
          </div>
          <span className="font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
            {campaigns.length} Campaigns
          </span>
        </div>

        <div className="space-y-4">
          {campaigns.map((camp) => (
            <div
              key={camp.id}
              className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">{camp.title}</h3>
                  <p className="text-[11px] text-slate-500">
                    Student: {camp.studentName} • Goal: ৳ {camp.fundingGoalBDT.toLocaleString()} • Raised: ৳ {camp.raisedAmountBDT.toLocaleString()}
                  </p>
                </div>
                <span
                  className={`px-2.5 py-1 rounded-full text-[10px] font-bold border w-fit ${
                    camp.status === 'Active'
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      : camp.status === 'Fully Funded'
                      ? 'bg-blue-50 text-blue-700 border-blue-200'
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {camp.status}
                </span>
              </div>

              {/* Itemized expenses preview */}
              <div className="bg-white p-3 rounded-xl border border-slate-100 space-y-1">
                <span className="font-bold text-slate-700 text-[11px] block">Itemized Expense Categories:</span>
                <div className="flex flex-wrap gap-2 text-[10px] text-slate-600">
                  {camp.expenses.map((e) => (
                    <span key={e.id} className="bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                      {e.category}: <strong>৳ {e.amountBDT.toLocaleString()}</strong>
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/campaigns/${camp.id}`}
                  className="text-purple-700 font-semibold hover:underline"
                >
                  View Public Page ↗
                </Link>
                <div className="flex space-x-2">
                  <button
                    onClick={() => reviewCampaign(camp.id, 'Suspended')}
                    className="px-3 py-1 rounded-lg border border-rose-300 bg-rose-50 hover:bg-rose-100 text-rose-800 font-semibold"
                  >
                    Suspend Campaign
                  </button>
                  <button
                    onClick={() => reviewCampaign(camp.id, 'Active')}
                    className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-sm"
                  >
                    Activate / Approve
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminDashboardLayout>
  );
}

