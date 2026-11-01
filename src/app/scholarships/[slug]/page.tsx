'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import {
  Building2,
  CheckCircle,
  Calendar,
  FileText,
  Award,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Send,
} from 'lucide-react';

export default function ScholarshipDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { scholarships, applyForScholarship, currentUser } = useApp();

  const [isApplying, setIsApplying] = useState(false);
  const [statement, setStatement] = useState('');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const scholarship = scholarships.find((s) => s.id === slug || s.slug === slug);
  if (!scholarship) {
    return notFound();
  }

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    applyForScholarship({
      scholarshipId: scholarship.id,
      scholarshipTitle: scholarship.title,
      organizationId: scholarship.organizationId,
      organizationName: scholarship.organizationName,
      studentId: 'std-nafis',
      studentName: currentUser.name || 'Nafis Ahmed',
      studentEmail: currentUser.email || 'nafis.buet@gmail.com',
      studentAvatar: currentUser.avatar,
      currentInstitution: 'BUET',
      intendedDegree: 'MS in Computer Science',
      targetUniversity: 'Georgia Institute of Technology',
      academicResults: 'CGPA 3.94 / 4.00',
      statement,
    });
    setSubmittedSuccess(true);
    setIsApplying(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Back button */}
      <Link
        href="/scholarships"
        className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Scholarships</span>
      </Link>

      {/* Main Header Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <img
              src={scholarship.organizationLogo}
              alt={scholarship.organizationName}
              className="w-16 h-16 rounded-2xl object-cover border border-slate-200"
            />
            <div className="space-y-1">
              <span className="text-xs font-bold text-indigo-700 flex items-center">
                <CheckCircle className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                {scholarship.organizationName}
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {scholarship.title}
              </h1>
              <div className="flex flex-wrap gap-2 text-xs text-slate-500 pt-1">
                <span>Total Fund: <strong>৳ {scholarship.budgetBDT.toLocaleString()}</strong></span>
                <span>•</span>
                <span>Recipients: <strong>{scholarship.awardedRecipients} of {scholarship.totalRecipients} Awarded</strong></span>
                <span>•</span>
                <span className="text-rose-600">Deadline: <strong>{scholarship.applicationDeadline}</strong></span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsApplying(true)}
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition shadow-md flex items-center justify-center space-x-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Apply For Scholarship</span>
          </button>
        </div>
      </div>

      {submittedSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            <span>Your application has been successfully submitted to {scholarship.organizationName} for review!</span>
          </div>
          <Link href="/student/dashboard" className="font-bold underline">
            View in Dashboard →
          </Link>
        </div>
      )}

      {/* Grid: Details & Criteria */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
              Scholarship Description & Purpose
            </h2>
            <p>{scholarship.description}</p>
          </div>

          {/* Eligibility Criteria (PRD Section 5.7) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs">
            <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
              Eligibility Criteria
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1">
                <span className="font-bold text-slate-700 block text-xs">Eligible Countries</span>
                <p className="text-slate-600">{scholarship.eligibleCountries.join(', ')}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1">
                <span className="font-bold text-slate-700 block text-xs">Eligible Degree Levels</span>
                <p className="text-slate-600">{scholarship.eligibleDegreeLevels.join(', ')}</p>
              </div>
              <div className="sm:col-span-2 bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1">
                <span className="font-bold text-slate-700 block text-xs">Eligible Academic Fields</span>
                <p className="text-slate-600">{scholarship.eligibleSubjects.join(' • ')}</p>
              </div>
            </div>
          </div>

          {/* Required Documents & Selection Process */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs">
            <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
              Required Documents & Selection Process
            </h2>
            <div className="space-y-2">
              <span className="font-bold text-slate-800">Required Document Submission:</span>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                {scholarship.requiredDocuments.map((doc, idx) => (
                  <li key={idx}>{doc}</li>
                ))}
              </ul>
            </div>
            <div className="pt-2 border-t border-slate-100 space-y-1">
              <span className="font-bold text-slate-800">Selection Process:</span>
              <p className="text-slate-600">{scholarship.selectionProcess}</p>
            </div>
            <div className="pt-2 border-t border-slate-100 space-y-1">
              <span className="font-bold text-slate-800">Funding Conditions & Deliverables:</span>
              <p className="text-slate-600">{scholarship.fundingConditions}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Organization Profile & Summary */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs">
            <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2">
              About the Sponsoring Organization
            </h3>
            <div className="flex items-center space-x-3">
              <img
                src={scholarship.organizationLogo}
                alt={scholarship.organizationName}
                className="w-12 h-12 rounded-xl object-cover border border-slate-200"
              />
              <div>
                <p className="font-bold text-slate-900">{scholarship.organizationName}</p>
                <p className="text-[11px] text-emerald-600 font-semibold flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1" /> Human-Verified Institutional Entity
                </p>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Institutional partners manage scholarships transparently on Avash with strict merit reviews and milestone-based direct disbursement.
            </p>
            <button
              onClick={() => setIsApplying(true)}
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition shadow"
            >
              Start Application
            </button>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {isApplying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
            <div className="bg-indigo-900 text-white p-5 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base">Apply for {scholarship.title}</h3>
                <p className="text-xs text-indigo-200">{scholarship.organizationName}</p>
              </div>
              <button
                onClick={() => setIsApplying(false)}
                className="p-1 rounded-full text-indigo-300 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleApply} className="p-6 space-y-4 text-xs">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1">
                <span className="font-bold text-slate-800">Applying as Verified Student:</span>
                <p className="text-slate-600">
                  {currentUser.name} (BUET CSE, CGPA 3.94) • Georgia Tech MS
                </p>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Statement of Intent / Development Impact (Max 500 words)
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Explain how this scholarship will assist your international study and how you plan to contribute to Bangladesh's development..."
                  value={statement}
                  onChange={(e) => setStatement(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                />
              </div>

              <div className="text-[11px] text-slate-500">
                ✓ Your verified academic transcripts and offer letter from your Avash profile will be attached automatically.
              </div>

              <div className="flex space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsApplying(false)}
                  className="w-1/3 py-2.5 border border-slate-200 rounded-xl font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow flex items-center justify-center space-x-1"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Application</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

