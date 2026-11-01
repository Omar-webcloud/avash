'use client';

import React from 'react';
import { OrgDashboardLayout } from '@/components/layout/OrgDashboardLayout';
import { useApp } from '@/context/AppContext';
import { Trophy, CheckCircle2, Award } from 'lucide-react';

export default function OrgRecipientsPage() {
  const { applications } = useApp();
  const awarded = applications.filter((a) => a.status === 'Awarded');

  return (
    <OrgDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <h2 className="text-base font-bold text-slate-900">Awarded Scholars Directory</h2>
          <p className="text-xs text-slate-500">Track scholars sponsored by your institutional grants (PRD Section 5.8)</p>
        </div>

        <div className="space-y-4">
          {awarded.map((aw) => (
            <div
              key={aw.id}
              className="p-5 rounded-2xl border border-emerald-100 bg-emerald-50/40 text-xs space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img src={aw.studentAvatar} alt={aw.studentName} className="w-12 h-12 rounded-xl object-cover" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{aw.studentName}</h3>
                    <p className="text-slate-600 text-[11px]">{aw.targetUniversity} • {aw.intendedDegree}</p>
                    <span className="text-[10px] text-emerald-800 font-bold">
                      Program: {aw.scholarshipTitle}
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-emerald-600 text-white rounded-full font-bold text-[10px] shadow-sm flex items-center">
                  <Award className="w-3.5 h-3.5 mr-1" /> Awarded
                </span>
              </div>
              <p className="text-slate-600 pt-1 text-[11px] bg-white p-3 rounded-xl border border-emerald-100">
                &quot;{aw.statement}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </OrgDashboardLayout>
  );
}

