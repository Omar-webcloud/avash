'use client';

import React, { useState } from 'react';
import { DonorDashboardLayout } from '@/components/layout/DonorDashboardLayout';
import { Save, CheckCircle2 } from 'lucide-react';

export default function DonorSettingsPage() {
  const [defaultAnonymous, setDefaultAnonymous] = useState(false);
  const [emailReceipts, setEmailReceipts] = useState(true);
  const [taxId, setTaxId] = useState('TIN-99482104921');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <DonorDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6 text-xs">
        <div className="border-b border-slate-100 pb-3">
          <h2 className="text-base font-bold text-slate-900">Donor Account & Tax Settings</h2>
          <p className="text-slate-500">Configure contribution privacy and tax certification receipt preferences</p>
        </div>

        {saved && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Preferences updated successfully!</span>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Donor Tax Identification / National ID (Optional for Tax Receipts)
            </label>
            <input
              type="text"
              value={taxId}
              onChange={(e) => setTaxId(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
            />
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="font-bold text-slate-900 text-sm">Privacy Defaults</h3>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={defaultAnonymous}
                onChange={(e) => setDefaultAnonymous(e.target.checked)}
                className="rounded text-rose-600"
              />
              <span className="text-slate-700">Make all future donations anonymous on public student walls by default</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={emailReceipts}
                onChange={(e) => setEmailReceipts(e.target.checked)}
                className="rounded text-rose-600"
              />
              <span className="text-slate-700">Immediately email digital receipt PDF upon successful transaction</span>
            </label>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl transition shadow flex items-center space-x-1"
            >
              <Save className="w-4 h-4" />
              <span>Save Donor Preferences</span>
            </button>
          </div>
        </form>
      </div>
    </DonorDashboardLayout>
  );
}

