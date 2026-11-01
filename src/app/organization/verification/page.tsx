'use client';

import React from 'react';
import { OrgDashboardLayout } from '@/components/layout/OrgDashboardLayout';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function OrgVerificationPage() {
  return (
    <OrgDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6 text-xs">
        <div className="border-b border-slate-100 pb-3">
          <h2 className="text-base font-bold text-slate-900">Institutional Verification</h2>
          <p className="text-slate-500">Government registration certificate & compliance status (PRD Section 5.8)</p>
        </div>

        <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
          <div className="flex items-center space-x-2 text-emerald-800 font-bold text-sm">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>Institutional Status: Verified NGO & Corporate Sponsor</span>
          </div>
          <p className="text-slate-600 text-xs">
            BRAC Social Impact Initiatives has been verified by the Avash Legal and Verification Board under NGO Affairs Bureau registration #49102.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold text-slate-800 text-sm">Submitted Registration Documents</h3>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
            <span>NGOAB_Registration_Certified_2026.pdf</span>
            <span className="text-emerald-700 font-bold flex items-center">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Authenticated
            </span>
          </div>
        </div>
      </div>
    </OrgDashboardLayout>
  );
}

