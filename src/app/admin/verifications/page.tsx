'use client';

import React, { useState } from 'react';
import { AdminDashboardLayout } from '@/components/layout/AdminDashboardLayout';
import { useApp } from '@/context/AppContext';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  HelpCircle,
  FileText,
  Clock,
  Eye,
  Send,
} from 'lucide-react';
import { VerificationStatus } from '@/types';

export default function AdminVerificationsQueuePage() {
  const { students, reviewVerification } = useApp();
  const [selectedStudentId, setSelectedStudentId] = useState<string>(students[0]?.id || '');
  const [reviewerNote, setReviewerNote] = useState('');
  const [actionDone, setActionDone] = useState(false);

  const currentStudent = students.find((s) => s.id === selectedStudentId) || students[0];

  const handleReviewAction = (status: VerificationStatus) => {
    reviewVerification(currentStudent.id, status, reviewerNote);
    setActionDone(true);
    setReviewerNote('');
    setTimeout(() => setActionDone(false), 3000);
  };

  const statuses: VerificationStatus[] = [
    'Draft',
    'Submitted',
    'Under Review',
    'Additional Information Required',
    'Verified',
    'Rejected',
    'Appeal Pending',
    'Suspended',
  ];

  return (
    <AdminDashboardLayout>
      <div className="space-y-6 text-xs">
        <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">Human Verification Review Queue</h2>
            <p className="text-slate-500">
              Inspect submitted evidence, examine seals and TRF codes, and authorize verified badges (PRD Section 5.3)
            </p>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 font-bold border border-purple-200">
            {students.length} Total Registered Dossiers
          </span>
        </div>

        {actionDone && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Verification status updated and logged to audit trail!</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Student Dossier List */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-2">
            <h3 className="font-bold text-slate-800 text-xs px-2 pb-1 border-b border-slate-100">
              Students Queue
            </h3>
            <div className="space-y-1.5 max-h-[500px] overflow-y-auto">
              {students.map((st) => (
                <div
                  key={st.id}
                  onClick={() => setSelectedStudentId(st.id)}
                  className={`p-3 rounded-xl cursor-pointer transition border ${
                    st.id === currentStudent?.id
                      ? 'bg-purple-50 border-purple-300 text-purple-950 font-semibold'
                      : 'bg-white border-slate-100 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">{st.fullName}</span>
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        st.verificationStatus === 'Verified'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {st.verificationStatus}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 truncate mt-0.5">
                    {st.currentInstitution} • {st.intendedDegree}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Examination Panel */}
          {currentStudent && (
            <div className="md:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5">
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={currentStudent.avatar}
                    alt={currentStudent.fullName}
                    className="w-14 h-14 rounded-2xl object-cover border border-slate-200"
                  />
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{currentStudent.fullName}</h3>
                    <p className="text-slate-500 text-xs">
                      {currentStudent.currentInstitution} • Result: {currentStudent.academicResults}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Target: {currentStudent.intendedDegree} at {currentStudent.targetUniversities.join(', ')} ({currentStudent.targetCountry})
                    </p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 font-bold text-xs">
                  Current Status: {currentStudent.verificationStatus}
                </span>
              </div>

              {/* Submitted Documents Inspection */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-800 text-xs">
                  Submitted Official Credentials ({currentStudent.documents.length})
                </h4>

                {currentStudent.documents.length === 0 ? (
                  <p className="text-slate-400 py-3 text-center">No documents uploaded yet.</p>
                ) : (
                  <div className="space-y-2">
                    {currentStudent.documents.map((doc) => (
                      <div
                        key={doc.id}
                        className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-purple-600 shrink-0" />
                          <div>
                            <span className="font-bold text-slate-900">{doc.type}</span>
                            <span className="block text-[11px] text-slate-500">
                              {doc.fileName} • {doc.fileSize} • Submitted: {doc.submittedAt}
                            </span>
                            {doc.reviewerNotes && (
                              <span className="block text-[10px] text-emerald-800 font-medium">
                                Audit Note: {doc.reviewerNotes}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => alert(`Simulating secure preview of: ${doc.fileName}`)}
                            className="px-2.5 py-1 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-[11px] font-semibold flex items-center space-x-1"
                          >
                            <Eye className="w-3 h-3" />
                            <span>Inspect</span>
                          </button>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              doc.status === 'Verified' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                            }`}
                          >
                            {doc.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Reviewer Note Input */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <label className="block font-semibold text-slate-700">
                  Reviewer Audit Note (Included in student notification & public badge log)
                </label>
                <input
                  type="text"
                  placeholder="e.g. British Council TRF Band 8.5 verified online. Offer letter authenticated."
                  value={reviewerNote}
                  onChange={(e) => setReviewerNote(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                />
              </div>

              {/* Action Buttons (PRD Section 5.3) */}
              <div className="pt-2 flex flex-wrap gap-2 justify-end">
                <button
                  type="button"
                  onClick={() => handleReviewAction('Additional Information Required')}
                  className="px-3.5 py-2 rounded-xl border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900 font-semibold text-xs flex items-center space-x-1"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Request More Info</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleReviewAction('Rejected')}
                  className="px-3.5 py-2 rounded-xl border border-rose-300 bg-rose-50 hover:bg-rose-100 text-rose-900 font-semibold text-xs flex items-center space-x-1"
                >
                  <XCircle className="w-3.5 h-3.5" />
                  <span>Reject Application</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleReviewAction('Verified')}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md flex items-center space-x-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Approve & Grant Verified Status</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminDashboardLayout>
  );
}

