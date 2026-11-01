'use client';

import React, { useState } from 'react';
import { AdminDashboardLayout } from '@/components/layout/AdminDashboardLayout';
import { useApp } from '@/context/AppContext';
import { Save, CheckCircle2, RotateCcw } from 'lucide-react';

export default function AdminSettingsPage() {
  const { resetToDefaults } = useApp();
  const [platformFee, setPlatformFee] = useState('0');
  const [minDonation, setMinDonation] = useState('100');
  const [requireHumanReview, setRequireHumanReview] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <AdminDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6 text-xs">
        <div className="border-b border-slate-100 pb-3">
          <h2 className="text-base font-bold text-slate-900">Platform Governance & Compliance Settings</h2>
          <p className="text-slate-500">Configure global verification rules and escrow parameters (PRD Section 18)</p>
        </div>

        {saved && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Platform settings saved!</span>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Platform Commission Fee (%)
              </label>
              <input
                type="number"
                disabled
                value={platformFee}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-500"
              />
              <span className="text-[10px] text-emerald-700 mt-1 block">
                * Locked to 0% per Open-Source Charter (PRD Section 11)
              </span>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Minimum Contribution (BDT ৳)
              </label>
              <input
                type="number"
                value={minDonation}
                onChange={(e) => setMinDonation(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
              />
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={requireHumanReview}
                onChange={(e) => setRequireHumanReview(e.target.checked)}
                className="rounded text-purple-600"
              />
              <span className="font-semibold text-slate-800">
                Enforce mandatory human reviewer sign-off before campaign publication
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition shadow"
          >
            Save Admin Parameters
          </button>
        </form>

        <div className="pt-6 border-t border-slate-100 space-y-2">
          <h3 className="font-bold text-slate-900 text-sm">Platform State Factory Reset</h3>
          <p className="text-slate-500 text-[11px]">
            Restore all mock students, campaigns, verifications, and pilot metrics to clean seed state:
          </p>
          <button
            onClick={() => {
              if (confirm('Reset platform to initial PRD seed state?')) {
                resetToDefaults();
                alert('Platform reset completed.');
              }
            }}
            className="px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl font-medium transition flex items-center space-x-1.5"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Database to Initial State</span>
          </button>
        </div>
      </div>
    </AdminDashboardLayout>
  );
}

