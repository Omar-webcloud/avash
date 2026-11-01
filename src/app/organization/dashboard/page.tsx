'use client';

import React from 'react';
import Link from 'next/link';
import { OrgDashboardLayout } from '@/components/layout/OrgDashboardLayout';
import { useApp } from '@/context/AppContext';
import { Award, Users2, Trophy, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function OrgDashboardPage() {
  const { scholarships, applications } = useApp();

  return (
    <OrgDashboardLayout>
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Total Scholarship Budget
            </span>
            <div className="text-2xl font-black text-indigo-700">
              ৳ 7,300,000
            </div>
            <p className="text-[11px] text-slate-400">Across 3 active programs</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Total Applicants
            </span>
            <div className="text-2xl font-black text-slate-900">
              {applications.length + 14} Candidates
            </div>
            <p className="text-[11px] text-emerald-600 font-medium">Pre-verified academic credentials</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Recipients Awarded
            </span>
            <div className="text-2xl font-black text-emerald-700">
              11 Scholars
            </div>
            <p className="text-[11px] text-slate-400">Pursuing MS/PhD abroad</p>
          </div>
        </div>

        {/* Active Scholarships */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
              <Award className="w-4 h-4 text-indigo-600" />
              <span>Published Scholarship Programs</span>
            </h3>
            <Link
              href="/organization/scholarships/new"
              className="text-xs text-indigo-600 font-bold hover:underline"
            >
              + Create New Program
            </Link>
          </div>

          <div className="space-y-3">
            {scholarships.map((s) => (
              <div
                key={s.id}
                className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{s.title}</h4>
                  <p className="text-[11px] text-slate-500">
                    Budget: ৳ {s.budgetBDT.toLocaleString()} • {s.awardedRecipients} of {s.totalRecipients} Awarded
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1">Deadline: {s.applicationDeadline}</p>
                </div>
                <div className="flex items-center space-x-2 shrink-0">
                  <Link
                    href="/organization/applicants"
                    className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs"
                  >
                    View Applicants ({applications.length})
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

        {/* Recent Applicants */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2">
            Recent Student Applications
          </h3>
          <div className="space-y-3">
            {applications.map((app) => (
              <div
                key={app.id}
                className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 text-xs flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <img src={app.studentAvatar} alt={app.studentName} className="w-10 h-10 rounded-xl object-cover" />
                  <div>
                    <span className="font-bold text-slate-900 block">{app.studentName}</span>
                    <span className="text-[11px] text-slate-500">
                      {app.currentInstitution} ({app.academicResults}) • Target: {app.intendedDegree}
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px] border border-emerald-200">
                  {app.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </OrgDashboardLayout>
  );
}

