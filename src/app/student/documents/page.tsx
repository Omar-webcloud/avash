'use client';

import React, { useState } from 'react';
import { StudentDashboardLayout } from '@/components/layout/StudentDashboardLayout';
import { useApp } from '@/context/AppContext';
import { FileText, Upload, CheckCircle, Clock, ShieldCheck, AlertCircle } from 'lucide-react';
import { DocumentType } from '@/types';

export default function StudentDocumentsPage() {
  const { students, submitVerificationDocument } = useApp();
  const student = students.find((s) => s.id === 'std-nafis') || students[0];

  const [docType, setDocType] = useState<DocumentType>('Academic Transcript');
  const [fileName, setFileName] = useState('');
  const [uploadedSuccess, setUploadedSuccess] = useState(false);

  const handleSimulateUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fileName) return;

    submitVerificationDocument({
      studentId: student.id,
      type: docType,
      fileName: fileName.endsWith('.pdf') ? fileName : `${fileName}.pdf`,
      fileSize: '2.4 MB',
      reviewerNotes: 'Uploaded by student, queued for human reviewer examination.',
    });

    setUploadedSuccess(true);
    setFileName('');
    setTimeout(() => setUploadedSuccess(false), 3000);
  };

  const documentTypes: DocumentType[] = [
    'National ID / Passport',
    'Academic Transcript',
    'English Proficiency (IELTS/TOEFL)',
    'University Offer Letter',
    'Scholarship Letter',
    'Standardized Test (GRE/GMAT)',
    'Financial Document',
  ];

  return (
    <StudentDashboardLayout>
      <div className="space-y-6">
        {/* Upload new document form */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-base font-bold text-slate-900">Upload Verification Document</h2>
            <p className="text-xs text-slate-500">
              Submit credentials for human review. Files are stored securely and never made public (PRD 5.3 & 16.4)
            </p>
          </div>

          {uploadedSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Document uploaded and added to the review queue!</span>
            </div>
          )}

          <form onSubmit={handleSimulateUpload} className="space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Document Category</label>
                <select
                  value={docType}
                  onChange={(e) => setDocType(e.target.value as DocumentType)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                >
                  {documentTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">File Name / Label</label>
                <input
                  type="text"
                  placeholder="e.g. BUET_Official_Final_Transcript.pdf"
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                  required
                />
              </div>
            </div>

            <div className="p-4 border-2 border-dashed border-slate-200 rounded-2xl text-center space-y-1 hover:border-emerald-400 transition bg-slate-50/50">
              <Upload className="w-6 h-6 text-slate-400 mx-auto" />
              <p className="text-xs text-slate-700 font-semibold">
                Click to browse or drop certified PDF (Max 25MB)
              </p>
              <p className="text-[11px] text-slate-400">
                Encrypted at rest • Access restricted strictly to authorized human reviewers
              </p>
            </div>

            <button
              type="submit"
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition shadow flex items-center space-x-1.5"
            >
              <Upload className="w-4 h-4" />
              <span>Submit Document for Review</span>
            </button>
          </form>
        </div>

        {/* Existing Vault */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2 flex items-center justify-between">
            <span>Submitted Evidence Vault ({student.documents.length})</span>
            <span className="text-[11px] font-normal text-emerald-700">Encrypted Private Storage</span>
          </h3>

          <div className="space-y-3">
            {student.documents.map((doc) => (
              <div
                key={doc.id}
                className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-emerald-100/70 text-emerald-800 rounded-xl">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 text-sm block">{doc.type}</span>
                    <p className="text-[11px] text-slate-500">
                      {doc.fileName} • {doc.fileSize} • Submitted on {doc.submittedAt}
                    </p>
                    {doc.reviewerNotes && (
                      <p className="text-[11px] text-slate-600 mt-1 italic">
                        Reviewer feedback: &quot;{doc.reviewerNotes}&quot;
                      </p>
                    )}
                  </div>
                </div>

                <div className="shrink-0 sm:text-right">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold ${
                      doc.status === 'Verified'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}
                  >
                    {doc.status === 'Verified' ? (
                      <CheckCircle className="w-3.5 h-3.5 mr-1" />
                    ) : (
                      <Clock className="w-3.5 h-3.5 mr-1" />
                    )}
                    {doc.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StudentDashboardLayout>
  );
}

