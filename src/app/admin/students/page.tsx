'use client';

import React from 'react';
import Link from 'next/link';
import { AdminDashboardLayout } from '@/components/layout/AdminDashboardLayout';
import { useApp } from '@/context/AppContext';
import { GraduationCap, ShieldCheck } from 'lucide-react';

export default function AdminStudentsDirectoryPage() {
  const { students } = useApp();

  return (
    <AdminDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">Registered Students Directory</h2>
            <p className="text-slate-500">All registered student records and verification statuses</p>
          </div>
          <span className="font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full">
            {students.length} Total Profiles
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-2.5 px-3">Student Name</th>
                <th className="py-2.5 px-3">Current Institution</th>
                <th className="py-2.5 px-3">Target Country & Univ</th>
                <th className="py-2.5 px-3 text-center">Status</th>
                <th className="py-2.5 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {students.map((st) => (
                <tr key={st.id} className="hover:bg-slate-50/50">
                  <td className="py-3 px-3">
                    <span className="font-bold text-slate-900">{st.fullName}</span>
                    <span className="block text-[11px] text-slate-400">{st.contactEmail}</span>
                  </td>
                  <td className="py-3 px-3">
                    <span className="font-medium text-slate-800">{st.currentInstitution}</span>
                    <span className="block text-[11px] text-slate-500">CGPA: {st.academicResults}</span>
                  </td>
                  <td className="py-3 px-3">
                    <span className="font-semibold text-slate-900">{st.targetCountry}</span>
                    <span className="block text-[11px] text-slate-400 truncate max-w-xs">{st.targetUniversities[0]}</span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        st.verificationStatus === 'Verified'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}
                    >
                      <ShieldCheck className="w-3 h-3 mr-1" />
                      {st.verificationStatus}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <Link
                      href={`/students/${st.id}`}
                      className="text-purple-700 font-semibold hover:underline"
                    >
                      View Profile ↗
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminDashboardLayout>
  );
}

