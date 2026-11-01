'use client';

import React from 'react';
import { StudentDashboardLayout } from '@/components/layout/StudentDashboardLayout';
import { useApp } from '@/context/AppContext';
import { ShieldCheck, CheckCircle2, Clock, AlertTriangle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function StudentVerificationPage() {
  const { students } = useApp();
  const student = students.find((s) => s.id === 'std-nafis') || students[0];

  const statuses = [
    { name: 'Draft', desc: 'Profile initiated, awaiting document submission.' },
    { name: 'Submitted', desc: 'All required documents submitted to the queue.' },
    { name: 'Under Review', desc: 'Reviewer currently cross-referencing credentials with issuer.' },
    { name: 'Verified', desc: 'Credentials authenticated. Authorized to launch public campaigns.' },
  ];

  return (
    <StudentDashboardLayout>
      <div className="space-y-6">
        {/* Main Status Banner */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Verification Pipeline Status
              </span>
              <div className="flex items-center space-x-2 mt-1">
                <ShieldCheck className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl font-black text-slate-900">{student.verificationStatus}</h2>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Approved by Avash Academic Reviewer on {student.verifiedAt || 'Pending Review'}
              </p>
            </div>

            <Link
              href="/student/documents"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow shrink-0"
            >
              Upload Additional Evidence
            </Link>
          </div>

          {/* Stepper Progress */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100">
            {statuses.map((step, idx) => {
              const isPastOrCurrent =
                student.verificationStatus === 'Verified' ||
                step.name === student.verificationStatus ||
                idx <= 2;
              return (
                <div
                  key={step.name}
                  className={`p-4 rounded-2xl border text-xs space-y-1 ${
                    step.name === student.verificationStatus
                      ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 font-medium'
                      : isPastOrCurrent
                      ? 'bg-slate-50 border-slate-200 text-slate-800'
                      : 'bg-white border-slate-100 text-slate-400'
                  }`}
                >
                  <div className="flex items-center space-x-1.5 font-bold">
                    <CheckCircle2
                      className={`w-4 h-4 ${
                        isPastOrCurrent ? 'text-emerald-600' : 'text-slate-300'
                      }`}
                    />
                    <span>{step.name}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-tight">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Verification Rules (PRD 5.3) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs">
          <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2">
            Avash Verification Charter & Standards
          </h3>
          <ul className="space-y-2 list-disc pl-5 text-slate-600 leading-relaxed">
            <li>
              <strong>Authorized Human Reviewers:</strong> Automated algorithms never approve or reject students. Reviewers are authenticated educators and academic administrators.
            </li>
            <li>
              <strong>Private Storage Guarantee:</strong> Private credentials (such as national passport copies and bank statements) are stored in secure S3 storage and never shared with donors or public viewers.
            </li>
            <li>
              <strong>Fraud Prevention:</strong> Duplicate national ID submissions or tampered offer letters trigger immediate suspension and audit logging.
            </li>
          </ul>
        </div>
      </div>
    </StudentDashboardLayout>
  );
}

