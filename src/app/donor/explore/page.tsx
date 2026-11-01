'use client';

import React from 'react';
import Link from 'next/link';
import { DonorDashboardLayout } from '@/components/layout/DonorDashboardLayout';
import { useApp } from '@/context/AppContext';
import { Heart, ShieldCheck, ArrowRight } from 'lucide-react';

export default function DonorExplorePage() {
  const { campaigns, setActiveCampaignForDonation } = useApp();

  return (
    <DonorDashboardLayout>
      <div className="space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <h2 className="text-base font-bold text-slate-900">Explore Urgent Campaigns</h2>
          <p className="text-xs text-slate-500">Discover verified students with deadlines approaching</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {campaigns.map((camp) => {
            const pct = Math.min(100, Math.round((camp.raisedAmountBDT / camp.fundingGoalBDT) * 100));
            return (
              <div
                key={camp.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{camp.studentName}</h3>
                      <p className="text-[11px] text-slate-500">{camp.targetUniversity} ({camp.destinationCountry})</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                      Verified
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2">{camp.introduction}</p>

                  <div className="space-y-1 pt-1">
                    <div className="flex justify-between text-xs">
                      <span><strong>৳ {camp.raisedAmountBDT.toLocaleString()}</strong> of ৳ {camp.fundingGoalBDT.toLocaleString()}</span>
                      <strong className="text-emerald-700">{pct}%</strong>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link href={`/campaigns/${camp.id}`} className="text-xs text-slate-700 font-semibold hover:underline">
                    View Story
                  </Link>
                  <button
                    onClick={() => setActiveCampaignForDonation(camp)}
                    className="px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition shadow-sm flex items-center space-x-1"
                  >
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    <span>Support Student</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DonorDashboardLayout>
  );
}

