'use client';

import React from 'react';
import { AdminDashboardLayout } from '@/components/layout/AdminDashboardLayout';
import { BarChart3, TrendingUp, Users, Award, ShieldCheck } from 'lucide-react';

export default function AdminReportsPage() {
  return (
    <AdminDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6 text-xs">
        <div className="border-b border-slate-100 pb-3">
          <h2 className="text-base font-bold text-slate-900">Platform Analytics & Six-Month Pilot KPIs</h2>
          <p className="text-slate-500">Comprehensive educational outcomes and fundraising performance metrics</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-purple-50/60 rounded-xl border border-purple-100 space-y-1">
            <span className="text-slate-500 text-[11px] block">Average Funding Time</span>
            <strong className="text-2xl font-black text-purple-900">24 Days</strong>
            <p className="text-[10px] text-purple-700 font-semibold">from launch to full funding</p>
          </div>

          <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-100 space-y-1">
            <span className="text-slate-500 text-[11px] block">Student Success Rate</span>
            <strong className="text-2xl font-black text-emerald-900">94.2%</strong>
            <p className="text-[10px] text-emerald-700 font-semibold">achieving university arrival</p>
          </div>

          <div className="p-4 bg-teal-50/60 rounded-xl border border-teal-100 space-y-1">
            <span className="text-slate-500 text-[11px] block">Progress Report Compliance</span>
            <strong className="text-2xl font-black text-teal-900">82.0%</strong>
            <p className="text-[10px] text-teal-700 font-semibold">Exceeds 80% pilot target</p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <h3 className="font-bold text-slate-900 text-sm">Key Academic Destination Breakdown</h3>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-[11px] text-slate-700 mb-1">
                <span>United States (Georgia Tech, CMU, Purdue)</span>
                <strong>45%</strong>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '45%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[11px] text-slate-700 mb-1">
                <span>United Kingdom & Europe (LSE, TUM Germany, Oxford)</span>
                <strong>35%</strong>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '35%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[11px] text-slate-700 mb-1">
                <span>Canada & Australia (U of Toronto, Melbourne)</span>
                <strong>20%</strong>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-teal-600 h-2 rounded-full" style={{ width: '20%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminDashboardLayout>
  );
}

