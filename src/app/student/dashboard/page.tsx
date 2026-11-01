'use client';

import React from 'react';
import Link from 'next/link';
import { StudentDashboardLayout } from '@/components/layout/StudentDashboardLayout';
import { useApp } from '@/context/AppContext';
import {
  ShieldCheck,
  Megaphone,
  TrendingUp,
  Award,
  Coins,
  ArrowRight,
  CheckCircle,
  FileText,
  Clock,
} from 'lucide-react';

export default function StudentDashboardPage() {
  const { students, campaigns, applications, progressUpdates, notifications } = useApp();
  const student = students.find((s) => s.id === 'std-nafis') || students[0];
  const myCampaigns = campaigns.filter((c) => c.studentId === student.id);
  const myApps = applications.filter((a) => a.studentId === student.id);
  const totalRaised = myCampaigns.reduce((sum, c) => sum + c.raisedAmountBDT, 0);

  return (
    <StudentDashboardLayout>
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Total Raised on Avash
            </span>
            <div className="text-2xl font-black text-emerald-700">
              ৳ {totalRaised.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-400">
              Across {myCampaigns.length} campaigns
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Verification Status
            </span>
            <div className="text-xl font-bold text-slate-900 flex items-center space-x-1.5">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>{student.verificationStatus}</span>
            </div>
            <p className="text-[11px] text-emerald-700 font-medium">
              4 of 4 credentials authenticated
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Scholarship Applications
            </span>
            <div className="text-2xl font-black text-indigo-700">
              {myApps.length} Submitted
            </div>
            <p className="text-[11px] text-slate-400">
              1 Awarded Grant
            </p>
          </div>
        </div>

        {/* Active Campaign Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
              <Megaphone className="w-4 h-4 text-emerald-600" />
              <span>Active Fundraising Campaign</span>
            </h3>
            <Link
              href="/student/campaigns"
              className="text-xs text-emerald-700 font-semibold hover:underline"
            >
              Manage Campaigns →
            </Link>
          </div>

          {myCampaigns.length === 0 ? (
            <div className="text-center py-6 text-xs text-slate-400">
              No active campaigns. Click &quot;Launch Campaign&quot; to begin.
            </div>
          ) : (
            myCampaigns.map((camp) => {
              const pct = Math.min(100, Math.round((camp.raisedAmountBDT / camp.fundingGoalBDT) * 100));
              return (
                <div key={camp.id} className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">{camp.title}</h4>
                      <p className="text-xs text-slate-500">{camp.targetUniversity} • {camp.destinationCountry}</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px] border border-emerald-200">
                      {camp.status}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span><strong>৳ {camp.raisedAmountBDT.toLocaleString()}</strong> of ৳ {camp.fundingGoalBDT.toLocaleString()}</span>
                      <strong className="text-emerald-700">{pct}%</strong>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-50">
                    <span>{camp.donorCount} Supporters</span>
                    <Link
                      href={`/campaigns/${camp.id}`}
                      className="text-emerald-700 font-semibold hover:underline"
                    >
                      View Live Public Page ↗
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Quick Actions & Scholarship Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Institutional Grants */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2">
              Scholarship Applications
            </h3>
            {myApps.length === 0 ? (
              <p className="text-xs text-slate-400">No applications yet.</p>
            ) : (
              <div className="space-y-2.5">
                {myApps.map((app) => (
                  <div key={app.id} className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs space-y-1">
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>{app.scholarshipTitle}</span>
                      <span className="text-emerald-700">{app.status}</span>
                    </div>
                    <p className="text-[11px] text-slate-500">{app.organizationName}</p>
                    {app.reviewerNotes && (
                      <p className="text-[11px] text-emerald-800 bg-emerald-50 p-1.5 rounded">
                        ✓ Note: {app.reviewerNotes}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
            <Link
              href="/scholarships"
              className="inline-block text-xs text-indigo-600 font-bold hover:underline"
            >
              Browse Open Scholarships →
            </Link>
          </div>

          {/* Recent Notifications */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2">
              Recent Alerts & Milestones
            </h3>
            <div className="space-y-2.5">
              {notifications.slice(0, 3).map((notif) => (
                <div key={notif.id} className="p-3 bg-slate-50 rounded-xl text-xs space-y-0.5">
                  <div className="flex justify-between font-semibold text-slate-900">
                    <span>{notif.title}</span>
                    <span className="text-[10px] text-slate-400">{notif.timestamp}</span>
                  </div>
                  <p className="text-[11px] text-slate-600">{notif.message}</p>
                </div>
              ))}
            </div>
            <Link
              href="/student/progress"
              className="inline-block text-xs text-emerald-700 font-bold hover:underline"
            >
              Post a Progress Milestone Update →
            </Link>
          </div>
        </div>
      </div>
    </StudentDashboardLayout>
  );
}

