'use client';

import React from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Heart,
  Building2,
  ShieldCheck,
  FileCheck,
  CheckCircle2,
  TrendingUp,
  Award,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          The Avash Blueprint
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          How আভাস (Avash) Works
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          A transparent ecosystem uniting ambitious Bangladeshi students, generous individual patrons, and institutional philanthropists with verified accountability.
        </p>
      </div>

      {/* 3 Main User Journeys (PRD Section 6) */}
      <div className="space-y-12">
        {/* Student Journey */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6">
          <div className="flex items-center space-x-3 text-emerald-800">
            <div className="p-3 bg-emerald-100 rounded-2xl">
              <GraduationCap className="w-6 h-6 text-emerald-700" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">1. The Student Journey</h2>
              <p className="text-xs text-slate-500">From application preparation to landing abroad</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-[11px]">1</span>
              <h4 className="font-bold text-slate-900">Create Academic Profile</h4>
              <p className="text-slate-600 leading-relaxed">
                Provide university details, CGPA, target foreign degree, and write your personal statement and research aspirations.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-[11px]">2</span>
              <h4 className="font-bold text-slate-900">Human Verification</h4>
              <p className="text-slate-600 leading-relaxed">
                Submit official transcripts, NID/Passport, IELTS/TOEFL scorecards, and admission offer letters. Human reviewers review each credential.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-[11px]">3</span>
              <h4 className="font-bold text-slate-900">Publish Funding Campaign</h4>
              <p className="text-slate-600 leading-relaxed">
                Set itemized expense goals in BDT: standardized exam fees, university application fees, SEVIS/visa costs, or flight tickets.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-[11px]">4</span>
              <h4 className="font-bold text-slate-900">Milestone Updates & Escrow</h4>
              <p className="text-slate-600 leading-relaxed">
                Receive direct milestone-based disbursements upon verification of payment receipts. Share live progress updates with your backers.
              </p>
            </div>
          </div>
        </div>

        {/* Donor Journey */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6">
          <div className="flex items-center space-x-3 text-rose-800">
            <div className="p-3 bg-rose-100 rounded-2xl">
              <Heart className="w-6 h-6 text-rose-700" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">2. The Donor Journey</h2>
              <p className="text-xs text-slate-500">Backing future scientists, engineers, and thinkers</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
              <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-bold flex items-center justify-center text-[11px]">1</span>
              <h4 className="font-bold text-slate-900">Explore Verified Directory</h4>
              <p className="text-slate-600 leading-relaxed">
                Filter students by destination country, academic subject, degree level, or funding urgency.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
              <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-bold flex items-center justify-center text-[11px]">2</span>
              <h4 className="font-bold text-slate-900">Inspect Itemized Budget</h4>
              <p className="text-slate-600 leading-relaxed">
                Review verified quotations for visa fees, exam score reporting, and flight routes. No hidden costs.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
              <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-bold flex items-center justify-center text-[11px]">3</span>
              <h4 className="font-bold text-slate-900">Contribute with bKash/Card</h4>
              <p className="text-slate-600 leading-relaxed">
                Support via instant mobile financial services (bKash, Nagad, Rocket) or debit/credit cards with 0% platform fee.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
              <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-bold flex items-center justify-center text-[11px]">4</span>
              <h4 className="font-bold text-slate-900">Receipts & Progress Updates</h4>
              <p className="text-slate-600 leading-relaxed">
                Receive instant cryptographic digital receipts. Follow student visa approvals and academic arrival notifications in real time.
              </p>
            </div>
          </div>
        </div>

        {/* Organization Journey */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6">
          <div className="flex items-center space-x-3 text-indigo-800">
            <div className="p-3 bg-indigo-100 rounded-2xl">
              <Building2 className="w-6 h-6 text-indigo-700" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">3. The Organization Journey</h2>
              <p className="text-xs text-slate-500">Corporate CSR, Foundations, and Alumni Trusts</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-[11px]">1</span>
              <h4 className="font-bold text-slate-900">Institutional Verification</h4>
              <p className="text-slate-600 leading-relaxed">
                Register foundation or company details and receive authorized organization verification.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-[11px]">2</span>
              <h4 className="font-bold text-slate-900">Create Scholarship Grants</h4>
              <p className="text-slate-600 leading-relaxed">
                Define eligibility criteria, target fields (STEM, Economics, Public Health), budget in BDT, and deadlines.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-[11px]">3</span>
              <h4 className="font-bold text-slate-900">Review Applications</h4>
              <p className="text-slate-600 leading-relaxed">
                Evaluate pre-verified applicant dossiers with transcripts, IELTS scores, and statements of purpose in a centralized dashboard.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-[11px]">4</span>
              <h4 className="font-bold text-slate-900">Disburse & Track Impact</h4>
              <p className="text-slate-600 leading-relaxed">
                Award grants and generate transparent CSR impact reports demonstrating genuine human outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center pt-4">
        <Link
          href="/campaigns"
          className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition shadow-lg shadow-emerald-600/20"
        >
          <span>Explore Active Campaigns Now</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

