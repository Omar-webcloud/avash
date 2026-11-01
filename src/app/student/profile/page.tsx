'use client';

import React, { useState } from 'react';
import { StudentDashboardLayout } from '@/components/layout/StudentDashboardLayout';
import { useApp } from '@/context/AppContext';
import { Save, CheckCircle2 } from 'lucide-react';

export default function StudentProfilePage() {
  const { students, updateStudentProfile } = useApp();
  const student = students.find((s) => s.id === 'std-nafis') || students[0];

  const [fullName, setFullName] = useState(student.fullName);
  const [city, setCity] = useState(student.city);
  const [contactEmail, setContactEmail] = useState(student.contactEmail);
  const [contactPhone, setContactPhone] = useState(student.contactPhone);
  const [bio, setBio] = useState(student.bio);
  const [personalStatement, setPersonalStatement] = useState(student.personalStatement);
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateStudentProfile({
      fullName,
      city,
      contactEmail,
      contactPhone,
      bio,
      personalStatement,
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <StudentDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-3">
          <h2 className="text-base font-bold text-slate-900">Personal Information & Aspirations</h2>
          <p className="text-xs text-slate-500">Edit your public biography and personal statement (PRD 5.2)</p>
        </div>

        {saved && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Profile information updated successfully!</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Full Legal Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                required
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">City of Residence</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                required
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Contact Email</label>
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                required
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Mobile Phone (Bangladesh)</label>
              <input
                type="text"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Short Bio (1-2 sentences)</label>
            <textarea
              rows={2}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Personal Statement & Mission</label>
            <textarea
              rows={5}
              value={personalStatement}
              onChange={(e) => setPersonalStatement(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs leading-relaxed"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition shadow flex items-center space-x-1.5"
            >
              <Save className="w-4 h-4" />
              <span>Save Profile Changes</span>
            </button>
          </div>
        </form>
      </div>
    </StudentDashboardLayout>
  );
}

