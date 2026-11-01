'use client';

import React, { useState } from 'react';
import { StudentDashboardLayout } from '@/components/layout/StudentDashboardLayout';
import { useApp } from '@/context/AppContext';
import { TrendingUp, Plus, CheckCircle2, Heart, FileCheck } from 'lucide-react';

export default function StudentProgressPage() {
  const { students, progressUpdates, addProgressUpdate } = useApp();
  const student = students.find((s) => s.id === 'std-nafis') || students[0];
  const myUpdates = progressUpdates.filter((u) => u.studentId === student.id);

  const [milestoneType, setMilestoneType] = useState<any>('Visa Progress');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [evidenceNote, setEvidenceNote] = useState('');
  const [postedSuccess, setPostedSuccess] = useState(false);

  const milestoneTypes = [
    'English Proficiency Exam',
    'University Application',
    'University Admission',
    'Scholarship Confirmation',
    'Funding Milestone',
    'Visa Progress',
    'Travel Preparation',
    'University Enrollment',
  ];

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;

    addProgressUpdate({
      studentId: student.id,
      studentName: student.fullName,
      studentAvatar: student.avatar,
      campaignId: 'cmp-nafis-gt',
      milestoneType,
      title,
      description,
      evidenceNote,
    });

    setPostedSuccess(true);
    setTitle('');
    setDescription('');
    setEvidenceNote('');
    setTimeout(() => setPostedSuccess(false), 3000);
  };

  return (
    <StudentDashboardLayout>
      <div className="space-y-6">
        {/* Post Form */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-base font-bold text-slate-900">Post Milestone Progress Update</h2>
            <p className="text-xs text-slate-500">
              Share verified milestones with your donors and community followers (PRD Section 5.9)
            </p>
          </div>

          {postedSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Milestone update published to your campaign and public feed!</span>
            </div>
          )}

          <form onSubmit={handlePost} className="space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Milestone Stage</label>
                <select
                  value={milestoneType}
                  onChange={(e) => setMilestoneType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                >
                  {milestoneTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">Update Headline</label>
                <input
                  type="text"
                  placeholder="e.g. F-1 Visa Approved at US Embassy Dhaka! 🇺🇸✈️"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Detailed Update for Donors</label>
              <textarea
                rows={3}
                placeholder="Share the details of what occurred, gratitude to backers, and next upcoming steps..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs leading-relaxed"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Evidence Reference / Note</label>
              <input
                type="text"
                placeholder="e.g. Visa issuance slip verified by reviewer, CAS document #19482"
                value={evidenceNote}
                onChange={(e) => setEvidenceNote(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition shadow flex items-center space-x-1"
            >
              <Plus className="w-4 h-4" />
              <span>Publish Public Milestone Update</span>
            </button>
          </form>
        </div>

        {/* Existing Updates */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2">
            Published Progress Updates ({myUpdates.length})
          </h3>

          <div className="space-y-4">
            {myUpdates.map((upd) => (
              <div
                key={upd.id}
                className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 text-xs space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">{upd.title}</span>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold text-[10px]">
                      {upd.milestoneType}
                    </span>
                    <span className="text-[11px] text-slate-400">{upd.date}</span>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">{upd.description}</p>
                {upd.evidenceNote && (
                  <p className="text-[11px] text-emerald-800 bg-white p-2 rounded-lg border border-slate-200">
                    ✓ Verified Evidence: {upd.evidenceNote}
                  </p>
                )}
                <div className="text-[11px] text-rose-600 font-semibold flex items-center space-x-1 pt-1">
                  <Heart className="w-3.5 h-3.5 fill-rose-600" />
                  <span>{upd.likesCount} community supporters appreciated this</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StudentDashboardLayout>
  );
}

