'use client';

import React from 'react';
import { AdminDashboardLayout } from '@/components/layout/AdminDashboardLayout';
import { mockUsers } from '@/lib/mockData';
import { Users, ShieldCheck, Mail } from 'lucide-react';

export default function AdminUsersPage() {
  return (
    <AdminDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">User Accounts & Roles (RBAC)</h2>
            <p className="text-slate-500">Students, Donors, Organizations, Reviewers, and Administrators (PRD Section 5.1)</p>
          </div>
          <span className="font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
            {mockUsers.length} Active System Roles
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-2.5 px-3">User</th>
                <th className="py-2.5 px-3">Email Address</th>
                <th className="py-2.5 px-3">Assigned Role</th>
                <th className="py-2.5 px-3">Joined Date</th>
                <th className="py-2.5 px-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {mockUsers.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50/50">
                  <td className="py-3 px-3">
                    <div className="flex items-center space-x-2.5">
                      <img src={u.avatar} alt={u.name} className="w-8 h-8 rounded-full object-cover" />
                      <span className="font-bold text-slate-900">{u.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-slate-600 font-mono text-[11px]">{u.email}</td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 rounded-md font-bold text-[10px] uppercase bg-slate-100 text-slate-800">
                      {u.role}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-slate-400">{u.createdAt}</td>
                  <td className="py-3 px-3 text-center">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700">
                      Active
                    </span>
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

