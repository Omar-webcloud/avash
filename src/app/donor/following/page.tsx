'use client';

import React from 'react';
import Link from 'next/link';
import { DonorDashboardLayout } from '@/components/layout/DonorDashboardLayout';
import { useApp } from '@/context/AppContext';
import { Users, TrendingUp, ArrowRight } from 'lucide-react';

export default function DonorFollowingPage() {
  const { students, progressUpdates } = useApp();
  const followed = students.slice(0, 3);

  return (
    <DonorDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <h2 className="text-base font-bold text-slate-900">Scholars You Are Following</h2>
          <p className="text-xs text-slate-500">Track progress milestones, visa interviews, and university arrivals</p>
        </div>

        <div className="space-y-4">
          {followed.map((st) => {
            const updates = progressUpdates.filter((u) => u.studentId === st.id);
            return (
              <div key={st.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img src={st.avatar} alt={st.fullName} className="w-12 h-12 rounded-xl object-cover" />
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{st.fullName}</h3>
                      <p className="text-xs text-slate-500">{st.intendedDegree} • {st.targetUniversities[0]}</p>
                    </div>
                  </div>
                  <Link
                    href={`/students/${st.id}`}
                    className="text-xs text-emerald-700 font-bold hover:underline"
                  >
                    View Timeline →
                  </Link>
                </div>

                {updates.length > 0 && (
                  <div className="p-3 bg-white rounded-xl border border-slate-100 text-xs text-slate-700 space-y-1">
                    <span className="font-bold text-slate-900 text-[11px] block">
                      Latest Milestone: {updates[0].title}
                    </span>
                    <p className="text-[11px] text-slate-500">{updates[0].description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </DonorDashboardLayout>
  );
}

