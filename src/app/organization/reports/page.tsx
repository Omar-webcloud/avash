'use client';

import React from 'react';
import { OrgDashboardLayout } from '@/components/layout/OrgDashboardLayout';
import { BarChart3, Download, TrendingUp, Award } from 'lucide-react';

export default function OrgReportsPage() {
  return (
    <OrgDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6 text-xs">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">CSR Impact & Audit Reports</h2>
            <p className="text-slate-500">Documented educational outcome metrics and audited financial statements</p>
          </div>
          <button
            onClick={() => alert('Downloading official Avash Annual CSR Statement (PDF)...')}
            className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center space-x-1"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSR Impact PDF</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
            <span className="text-slate-500 text-[11px] block">Total Grant Capital</span>
            <strong className="text-xl font-black text-slate-900">৳ 2,500,000</strong>
            <p className="text-[10px] text-emerald-600 font-semibold">100% Tax Compliant</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
            <span className="text-slate-500 text-[11px] block">Scholars Supported</span>
            <strong className="text-xl font-black text-indigo-700">10 Scholars</strong>
            <p className="text-[10px] text-slate-400">100% STEM and Econ</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
            <span className="text-slate-500 text-[11px] block">Average Grant / Student</span>
            <strong className="text-xl font-black text-slate-900">৳ 250,000</strong>
            <p className="text-[10px] text-slate-400">Milestone-based release</p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-indigo-950 space-y-2">
          <h3 className="font-bold text-sm">Empirical Development Outcomes</h3>
          <p className="leading-relaxed">
            All funded students submit quarterly academic performance reports and commit to knowledge-transfer mentorship sessions for subsequent Bangladeshi university applicants.
          </p>
        </div>
      </div>
    </OrgDashboardLayout>
  );
}

