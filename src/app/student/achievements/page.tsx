'use client';

import React, { useState } from 'react';
import { StudentDashboardLayout } from '@/components/layout/StudentDashboardLayout';
import { useApp } from '@/context/AppContext';
import { Award, Plus, Trash2, CheckCircle2 } from 'lucide-react';
import { AcademicAchievement } from '@/types';

export default function StudentAchievementsPage() {
  const { students, updateStudentProfile } = useApp();
  const student = students.find((s) => s.id === 'std-nafis') || students[0];

  const [achievements, setAchievements] = useState<AcademicAchievement[]>(student.achievements);
  const [newTitle, setNewTitle] = useState('');
  const [newIssuer, setNewIssuer] = useState('');
  const [newYear, setNewYear] = useState('2026');
  const [newCategory, setNewCategory] = useState<'Award' | 'Competition' | 'Research' | 'Extracurricular' | 'Certification'>('Award');
  const [newDesc, setNewDesc] = useState('');
  const [saved, setSaved] = useState(false);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;
    const item: AcademicAchievement = {
      id: `ach-${Date.now()}`,
      title: newTitle,
      issuer: newIssuer,
      year: newYear,
      category: newCategory,
      description: newDesc,
    };
    const updated = [item, ...achievements];
    setAchievements(updated);
    updateStudentProfile({ achievements: updated });
    setNewTitle('');
    setNewIssuer('');
    setNewDesc('');
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleRemove = (id: string) => {
    const updated = achievements.filter((a) => a.id !== id);
    setAchievements(updated);
    updateStudentProfile({ achievements: updated });
  };

  return (
    <StudentDashboardLayout>
      <div className="space-y-6">
        {/* Form to add */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-base font-bold text-slate-900">Add Academic Honor, Award or Research</h2>
            <p className="text-xs text-slate-500">Showcase your verified achievements to donors and scholarship committees (PRD 5.2)</p>
          </div>

          {saved && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Achievement recorded successfully!</span>
            </div>
          )}

          <form onSubmit={handleAdd} className="space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">Award / Title</label>
                <input
                  type="text"
                  placeholder="e.g. Best Thesis Award, ICPC Finalist"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as any)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                >
                  <option value="Award">Award</option>
                  <option value="Competition">Competition</option>
                  <option value="Research">Research Paper</option>
                  <option value="Extracurricular">Extracurricular</option>
                  <option value="Certification">Certification</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Issuing Body / Institution</label>
                <input
                  type="text"
                  placeholder="e.g. BUET, ACM-ICPC, ACL EMNLP"
                  value={newIssuer}
                  onChange={(e) => setNewIssuer(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Year</label>
                <input
                  type="text"
                  value={newYear}
                  onChange={(e) => setNewYear(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Description</label>
              <textarea
                rows={2}
                placeholder="Brief summary of significance..."
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                required
              />
            </div>

            <button
              type="submit"
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition shadow flex items-center space-x-1"
            >
              <Plus className="w-4 h-4" />
              <span>Add Achievement</span>
            </button>
          </form>
        </div>

        {/* Existing Achievements list */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2">
            Recorded Achievements ({achievements.length})
          </h3>
          <div className="space-y-3">
            {achievements.map((ach) => (
              <div
                key={ach.id}
                className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 text-xs flex items-start justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-slate-900 text-sm">{ach.title}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                      {ach.category} • {ach.year}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">{ach.issuer}</p>
                  <p className="text-slate-600 pt-1 leading-relaxed">{ach.description}</p>
                </div>
                <button
                  onClick={() => handleRemove(ach.id)}
                  className="p-1 text-slate-400 hover:text-rose-600 transition"
                  title="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StudentDashboardLayout>
  );
}

