'use client';

import React from 'react';
import { AdminDashboardLayout } from '@/components/layout/AdminDashboardLayout';
import { useApp } from '@/context/AppContext';
import { ScrollText, ShieldAlert } from 'lucide-react';

export default function AdminAuditLogsPage() {
  const { auditLogs } = useApp();

  return (
    <AdminDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">Cryptographic System Audit Trail</h2>
            <p className="text-slate-500">Every verification review, campaign approval, and financial event is recorded</p>
          </div>
          <span className="font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
            {auditLogs.length} Immutable Entries
          </span>
        </div>

        <div className="space-y-3 font-mono">
          {auditLogs.map((log) => (
            <div
              key={log.id}
              className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-900 font-bold text-[10px]">
                    {log.action}
                  </span>
                  <span className="text-slate-600 font-sans font-semibold text-[11px]">
                    Actor: {log.actorName} ({log.actorRole})
                  </span>
                </div>
                <p className="text-slate-800 font-sans text-xs">{log.details}</p>
                <p className="text-[10px] text-slate-400">
                  Target: {log.targetType} #{log.targetId}
                </p>
              </div>
              <span className="text-[11px] text-slate-400 shrink-0">{log.timestamp}</span>
            </div>
          ))}
        </div>
      </div>
    </AdminDashboardLayout>
  );
}

