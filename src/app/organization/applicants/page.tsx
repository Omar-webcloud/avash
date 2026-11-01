'use client';

import React from 'react';
import { OrgDashboardLayout } from '@/components/layout/OrgDashboardLayout';
import { useApp } from '@/context/AppContext';
import { CheckCircle2, XCircle, Award, FileText } from 'lucide-react';

export default function OrgApplicantsPage() {
  const { applications, reviewScholarshipApplication } = useApp();

  return (
    <OrgDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">Applicant Dossier Evaluation</h2>
            <p className="text-xs text-slate-500">Review verified candidate statements and award funding (PRD Section 5.8)</p>
          </div>
          <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200">
            {applications.length} Candidates Under Review
          </span>
        </div>

        <div className="space-y-4">
          {applications.map((app) => (
            <div
              key={app.id}
              className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3 text-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  <img src={app.studentAvatar} alt={app.studentName} className="w-12 h-12 rounded-xl object-cover" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{app.studentName}</h3>
                    <p className="text-[11px] text-slate-500">
                      {app.currentInstitution} ({app.academicResults}) • Target: {app.intendedDegree} at {app.targetUniversity}
                    </p>
                    <span className="text-[10px] text-indigo-700 font-semibold">
                      Applied for: {app.scholarshipTitle}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                      app.status === 'Awarded'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : app.status === 'Shortlisted'
                        ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    Status: {app.status}
                  </span>
                </div>
              </div>

              {/* Statement */}
              <div className="bg-white p-3.5 rounded-xl border border-slate-100 space-y-1">
                <span className="font-bold text-slate-700 text-[11px] block">Candidate Statement of Purpose:</span>
                <p className="text-slate-600 leading-relaxed italic text-[11px]">
                  &quot;{app.statement}&quot;
                </p>
              </div>

              {app.reviewerNotes && (
                <div className="text-[11px] text-indigo-800 bg-indigo-50 p-2 rounded-lg">
                  <strong>Evaluator Note:</strong> {app.reviewerNotes}
                </div>
              )}

              {/* Actions */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-end space-x-2">
                <button
                  onClick={() => reviewScholarshipApplication(app.id, 'Shortlisted', 'Shortlisted for panel interview.')}
                  className="px-3 py-1.5 rounded-lg border border-indigo-300 text-indigo-700 hover:bg-indigo-50 font-semibold"
                >
                  Shortlist for Interview
                </button>
                <button
                  onClick={() => reviewScholarshipApplication(app.id, 'Awarded', 'Approved for relocation grant. Verified merit.')}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-sm flex items-center space-x-1"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Award Scholarship</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </OrgDashboardLayout>
  );
}

