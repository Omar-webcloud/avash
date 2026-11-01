'use client';

import React from 'react';
import { AdminDashboardLayout } from '@/components/layout/AdminDashboardLayout';
import { Building2, ShieldCheck, CheckCircle } from 'lucide-react';

export default function AdminOrganizationsPage() {
  const orgs = [
    {
      name: 'BRAC Social Impact Initiatives',
      type: 'Global NGO & CSR',
      programs: '3 Scholarships',
      status: 'Verified Partner',
      regNum: 'NGOAB #49102',
    },
    {
      name: 'Grameen Sustainable Energy Trust',
      type: 'Trust / Foundation',
      programs: '1 Scholarship',
      status: 'Verified Partner',
      regNum: 'Trust Act #1882/09',
    },
    {
      name: 'Prime Bank Foundation',
      type: 'Banking CSR',
      programs: '2 Scholarships',
      status: 'Verified Partner',
      regNum: 'Bangladesh Bank CSR/2026',
    },
  ];

  return (
    <AdminDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">Partner Organizations & CSR Verification</h2>
            <p className="text-slate-500">Corporate and non-profit institutional entities providing student grants</p>
          </div>
          <span className="font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200">
            {orgs.length} Verified Foundations
          </span>
        </div>

        <div className="space-y-3">
          {orgs.map((org, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold text-slate-900 text-sm">{org.name}</h3>
                <p className="text-[11px] text-slate-500">{org.type} • Registration: {org.regNum}</p>
                <span className="text-[10px] text-indigo-700 font-semibold">{org.programs}</span>
              </div>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px] border border-emerald-200">
                <CheckCircle className="w-3.5 h-3.5 mr-1" /> {org.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AdminDashboardLayout>
  );
}

