'use client';

import React from 'react';
import Link from 'next/link';
import { DonorDashboardLayout } from '@/components/layout/DonorDashboardLayout';
import { useApp } from '@/context/AppContext';
import { Heart, FileCheck2, Users, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function DonorDashboardPage() {
  const { donations, campaigns, progressUpdates, setActiveDonationForReceipt, setActiveCampaignForDonation } = useApp();
  const totalDonated = donations.reduce((sum, d) => sum + d.amountBDT, 0);

  return (
    <DonorDashboardLayout>
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Total Support Provided
            </span>
            <div className="text-2xl font-black text-rose-700">
              ৳ {totalDonated.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-400">100% direct student allocation</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Scholars Backed
            </span>
            <div className="text-2xl font-black text-slate-900">
              {donations.length} Students
            </div>
            <p className="text-[11px] text-emerald-600 font-medium">Georgia Tech, LSE, TUM, Toronto</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Official Tax Receipts
            </span>
            <div className="text-2xl font-black text-indigo-700">
              {donations.length} Generated
            </div>
            <p className="text-[11px] text-slate-400">Reconciled cryptographic proof</p>
          </div>
        </div>

        {/* Recent Contributions */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
              <Heart className="w-4 h-4 text-rose-600" />
              <span>Recent Contributions</span>
            </h3>
            <Link href="/donor/donations" className="text-xs text-rose-700 font-semibold hover:underline">
              View All History →
            </Link>
          </div>

          <div className="space-y-3">
            {donations.slice(0, 3).map((don) => (
              <div
                key={don.id}
                className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{don.studentName}</h4>
                  <p className="text-[11px] text-slate-500">{don.campaignTitle}</p>
                  <p className="text-[10px] text-slate-400 mt-1">
                    Receipt #{don.receiptNumber} • {don.paymentMethod} • {don.createdAt}
                  </p>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <div className="text-right">
                    <span className="text-base font-black text-rose-700 block">
                      ৳ {don.amountBDT.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-emerald-600 font-semibold">
                      ✓ Reconciled
                    </span>
                  </div>
                  <button
                    onClick={() => setActiveDonationForReceipt(don)}
                    className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold"
                  >
                    Digital Receipt
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestone updates from backed students */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2">
            Progress Feed From Scholars You Supported
          </h3>
          <div className="space-y-3">
            {progressUpdates.slice(0, 2).map((upd) => (
              <div key={upd.id} className="p-3.5 bg-slate-50 rounded-xl text-xs space-y-1">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>{upd.studentName}: {upd.title}</span>
                  <span className="text-[10px] text-slate-400">{upd.date}</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px]">{upd.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DonorDashboardLayout>
  );
}

