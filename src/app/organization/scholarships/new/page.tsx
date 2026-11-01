'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { OrgDashboardLayout } from '@/components/layout/OrgDashboardLayout';
import { useApp } from '@/context/AppContext';
import { PlusCircle, Award, CheckCircle2 } from 'lucide-react';

export default function NewScholarshipPage() {
  const router = useRouter();
  const { createScholarship } = useApp();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [budgetBDT, setBudgetBDT] = useState('1500000');
  const [totalRecipients, setTotalRecipients] = useState('5');
  const [eligibleCountries, setEligibleCountries] = useState('United States, Canada, Germany, United Kingdom');
  const [eligibleSubjects, setEligibleSubjects] = useState('Computer Science, Clean Energy, Public Health');
  const [applicationDeadline, setApplicationDeadline] = useState('2026-12-31');
  const [selectionProcess, setSelectionProcess] = useState('Academic transcript review followed by interview.');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    createScholarship({
      title,
      description,
      budgetBDT: parseFloat(budgetBDT) || 1000000,
      totalRecipients: parseInt(totalRecipients) || 5,
      eligibleCountries: eligibleCountries.split(',').map((c) => c.trim()),
      eligibleSubjects: eligibleSubjects.split(',').map((s) => s.trim()),
      applicationDeadline,
      selectionProcess,
      fundingConditions: 'Recipient must submit semester progress reports and participate in mentorship.',
      requiredDocuments: ['Certified Bachelor Transcript', 'University Offer Letter', 'IELTS/TOEFL TRF', 'Statement of Purpose'],
    });

    alert('Scholarship program published successfully!');
    router.push('/organization/scholarships');
  };

  return (
    <OrgDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6 text-xs">
        <div className="border-b border-slate-100 pb-3">
          <h2 className="text-base font-bold text-slate-900">Publish Institutional Scholarship Program</h2>
          <p className="text-slate-500">Create a merit grant opportunity for Bangladeshi students (PRD Section 5.7)</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Scholarship Title</label>
            <input
              type="text"
              required
              placeholder="e.g. BRAC Global Climate & Energy Fellowship 2026"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Description & Objective</label>
            <textarea
              rows={3}
              required
              placeholder="Outline the program purpose, target applicants, and award scope..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs leading-relaxed"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Total Budget (BDT ৳)</label>
              <input
                type="number"
                required
                value={budgetBDT}
                onChange={(e) => setBudgetBDT(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Total Recipients</label>
              <input
                type="number"
                required
                value={totalRecipients}
                onChange={(e) => setTotalRecipients(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Application Deadline</label>
              <input
                type="date"
                required
                value={applicationDeadline}
                onChange={(e) => setApplicationDeadline(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Eligible Countries (comma separated)</label>
              <input
                type="text"
                required
                value={eligibleCountries}
                onChange={(e) => setEligibleCountries(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Eligible Academic Fields (comma separated)</label>
              <input
                type="text"
                required
                value={eligibleSubjects}
                onChange={(e) => setEligibleSubjects(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Selection & Evaluation Process</label>
            <input
              type="text"
              required
              value={selectionProcess}
              onChange={(e) => setSelectionProcess(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition shadow flex items-center space-x-1"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Publish Scholarship Program</span>
            </button>
          </div>
        </form>
      </div>
    </OrgDashboardLayout>
  );
}

