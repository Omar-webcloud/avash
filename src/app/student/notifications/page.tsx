'use client';

import React from 'react';
import Link from 'next/link';
import { StudentDashboardLayout } from '@/components/layout/StudentDashboardLayout';
import { useApp } from '@/context/AppContext';
import { Bell, CheckCircle2 } from 'lucide-react';

export default function StudentNotificationsPage() {
  const { notifications, markNotificationRead } = useApp();

  return (
    <StudentDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-base font-bold text-slate-900">Notifications & Alerts</h2>
            <p className="text-xs text-slate-500">Donations, verification status updates, and scholarship notices</p>
          </div>
          <span className="text-xs font-semibold text-slate-400">
            {notifications.length} Total Alerts
          </span>
        </div>

        <div className="space-y-3">
          {notifications.map((n) => (
            <div
              key={n.id}
              onClick={() => markNotificationRead(n.id)}
              className={`p-4 rounded-xl border text-xs cursor-pointer transition ${
                n.read
                  ? 'bg-slate-50/50 border-slate-100 text-slate-600'
                  : 'bg-emerald-50/60 border-emerald-200 text-slate-900 font-medium'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-slate-900 text-sm">{n.title}</span>
                <span className="text-[11px] text-slate-400">{n.timestamp}</span>
              </div>
              <p className="text-slate-600 leading-relaxed">{n.message}</p>
              {n.link && (
                <Link
                  href={n.link}
                  className="text-emerald-700 font-bold text-[11px] mt-2 inline-block hover:underline"
                >
                  View Details →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </StudentDashboardLayout>
  );
}

