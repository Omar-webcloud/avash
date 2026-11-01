'use client';

import React from 'react';
import { OrgDashboardLayout } from '@/components/layout/OrgDashboardLayout';
import { Users, PlusCircle } from 'lucide-react';

export default function OrgTeamPage() {
  const team = [
    { name: 'Tanvir Hossain', role: 'CSR Director', email: 'tanvir.h@brac.net' },
    { name: 'Dr. Rubana Khan', role: 'Academic Evaluation Lead', email: 'rubana.k@brac.net' },
    { name: 'Nusrat Jahan', role: 'Disbursement Officer', email: 'nusrat.j@brac.net' },
  ];

  return (
    <OrgDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">Scholarship Committee Team</h2>
            <p className="text-slate-500">Authorized evaluators with access to applicant dossiers</p>
          </div>
          <button
            onClick={() => alert('Inviting team member...')}
            className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs flex items-center space-x-1"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Invite Reviewer</span>
          </button>
        </div>

        <div className="space-y-3">
          {team.map((m, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-between">
              <div>
                <strong className="text-slate-900 text-sm block">{m.name}</strong>
                <span className="text-[11px] text-slate-500">{m.role} • {m.email}</span>
              </div>
              <span className="px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold text-[10px]">
                Active
              </span>
            </div>
          ))}
        </div>
      </div>
    </OrgDashboardLayout>
  );
}

