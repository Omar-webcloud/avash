'use client';

import React, { useState } from 'react';
import { OrgDashboardLayout } from '@/components/layout/OrgDashboardLayout';
import { Save, CheckCircle2 } from 'lucide-react';

export default function OrgProfilePage() {
  const [orgName, setOrgName] = useState('BRAC Social Impact Initiatives');
  const [contactEmail, setContactEmail] = useState('scholarships@brac.net');
  const [mission, setMission] = useState('Empowering exceptional Bangladeshi minds to excel at world-class universities and drive community prosperity.');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <OrgDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs">
        <div className="border-b border-slate-100 pb-3">
          <h2 className="text-base font-bold text-slate-900">Organization Information</h2>
          <p className="text-slate-500">Public entity details displayed on your scholarship listings</p>
        </div>

        {saved && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Profile saved successfully!</span>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Organization Name</label>
              <input
                type="text"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                required
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Official Contact Email</label>
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">CSR Mission Statement</label>
            <textarea
              rows={3}
              value={mission}
              onChange={(e) => setMission(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs leading-relaxed"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </OrgDashboardLayout>
  );
}

