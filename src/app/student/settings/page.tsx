'use client';

import React, { useState } from 'react';
import { StudentDashboardLayout } from '@/components/layout/StudentDashboardLayout';
import { useApp } from '@/context/AppContext';
import { Save, CheckCircle2, RotateCcw } from 'lucide-react';

export default function StudentSettingsPage() {
  const { resetToDefaults } = useApp();
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [publicProfile, setPublicProfile] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <StudentDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6 text-xs">
        <div className="border-b border-slate-100 pb-3">
          <h2 className="text-base font-bold text-slate-900">Student Account Settings</h2>
          <p className="text-slate-500">Manage privacy, notifications, and demo state (PRD 5.1)</p>
        </div>

        {saved && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Settings saved successfully!</span>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-4">
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 text-sm">Privacy & Notifications</h3>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={emailAlerts}
                onChange={(e) => setEmailAlerts(e.target.checked)}
                className="rounded text-emerald-600"
              />
              <span className="text-slate-700">Receive instant email receipts and milestone donation alerts</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={publicProfile}
                onChange={(e) => setPublicProfile(e.target.checked)}
                className="rounded text-emerald-600"
              />
              <span className="text-slate-700">Make verified academic profile visible in the public directory</span>
            </label>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition shadow flex items-center space-x-1"
            >
              <Save className="w-4 h-4" />
              <span>Update Preferences</span>
            </button>
          </div>
        </form>

        <div className="pt-6 border-t border-slate-100 space-y-2">
          <h3 className="font-bold text-slate-900 text-sm">Demo Data Management</h3>
          <p className="text-slate-500 text-[11px]">
            If you customized mock donations or student profiles and wish to restore factory PRD defaults:
          </p>
          <button
            onClick={() => {
              if (confirm('Reset platform data to default seed records?')) {
                resetToDefaults();
                alert('Platform data reset to defaults.');
              }
            }}
            className="px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl font-medium transition flex items-center space-x-1.5"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Demo Storage to Initial PRD State</span>
          </button>
        </div>
      </div>
    </StudentDashboardLayout>
  );
}

