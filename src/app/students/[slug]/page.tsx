'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import {
  ShieldCheck,
  GraduationCap,
  MapPin,
  Building,
  Award,
  FileText,
  DollarSign,
  TrendingUp,
  Heart,
  Calendar,
  Sparkles,
  ArrowLeft,
  CheckCircle,
} from 'lucide-react';

export default function StudentDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { students, campaigns, progressUpdates, setActiveCampaignForDonation } = useApp();

  const student = students.find((s) => s.id === slug || s.slug === slug);
  if (!student) {
    return notFound();
  }

  const campaign = campaigns.find((c) => c.studentId === student.id);
  const studentUpdates = progressUpdates.filter((u) => u.studentId === student.id);

  const percentFunded = campaign
    ? Math.min(100, Math.round((campaign.raisedAmountBDT / campaign.fundingGoalBDT) * 100))
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Back button */}
      <Link
        href="/students"
        className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Student Directory</span>
      </Link>

      {/* Main Student Header Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
            <img
              src={student.avatar}
              alt={student.fullName}
              className="w-24 h-24 rounded-2xl object-cover border-2 border-emerald-100 shadow-md"
            />
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {student.fullName}
                </h1>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                  <span>{student.verificationStatus}</span>
                </span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm font-medium">
                {student.currentInstitution} • {student.academicResults}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-1">
                <span className="flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400" />
                  {student.city}, {student.country}
                </span>
                <span className="flex items-center">
                  <GraduationCap className="w-3.5 h-3.5 mr-1 text-slate-400" />
                  Target: {student.intendedDegree} in {student.preferredSubject}
                </span>
              </div>
            </div>
          </div>

          {campaign && (
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={() => setActiveCampaignForDonation(campaign)}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow-lg shadow-emerald-600/20 flex items-center justify-center space-x-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Support Student (৳ {campaign.raisedAmountBDT.toLocaleString()} Raised)</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Grid Layout: Left Details, Right Campaign & Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (2 Cols) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Biography & Personal Statement */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center space-x-2">
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>Personal Statement & Aspirations</span>
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>{student.personalStatement}</p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2 mt-4 text-xs">
                <p>
                  <strong className="text-slate-900">Academic Goals:</strong> {student.educationalGoals}
                </p>
                <p>
                  <strong className="text-slate-900">Why Abroad:</strong> {student.reasonsForStudyingAbroad}
                </p>
                <p>
                  <strong className="text-slate-900">Intended Career Path:</strong> {student.intendedCareerPath}
                </p>
              </div>
            </div>
          </div>

          {/* Academic Background & Achievements */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center space-x-2">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Academic Merit & Honors</span>
            </h2>
            {student.achievements.length === 0 ? (
              <p className="text-xs text-slate-400">No awards listed.</p>
            ) : (
              <div className="space-y-3">
                {student.achievements.map((ach) => (
                  <div
                    key={ach.id}
                    className="p-4 rounded-xl border border-slate-100 bg-slate-50/60 text-xs space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-sm">{ach.title}</span>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        {ach.year}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium">{ach.issuer}</p>
                    <p className="text-slate-600 pt-1 leading-relaxed">{ach.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Verified Evidence & Documents Summary (PRD 5.3) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <h2 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verification & Credential Audit</span>
              </h2>
              <span className="text-[11px] text-slate-400">Authenticated by Avash Review Board</span>
            </div>
            <div className="space-y-2.5">
              {student.documents.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-100 bg-slate-50/70 text-xs"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-emerald-100/60 text-emerald-700 rounded-lg">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">{doc.type}</p>
                      <p className="text-[11px] text-slate-500">{doc.fileName} • {doc.fileSize}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center text-emerald-700 font-bold text-[11px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <CheckCircle className="w-3 h-3 mr-1" /> Verified
                    </span>
                    {doc.reviewerNotes && (
                      <p className="text-[10px] text-slate-400 mt-0.5 max-w-[200px] truncate">
                        {doc.reviewerNotes}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 italic">
              * In compliance with Avash Open-Source Privacy Charter, sensitive personal identification files are securely audited by verified reviewers and not exposed to the public.
            </p>
          </div>

          {/* Progress Timeline */}
          {studentUpdates.length > 0 && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span>Student Milestones & Updates</span>
              </h2>
              <div className="space-y-4">
                {studentUpdates.map((update) => (
                  <div key={update.id} className="relative pl-6 pb-2 border-l-2 border-emerald-200 last:border-l-0">
                    <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-emerald-600 ring-4 ring-white" />
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 text-sm">{update.title}</span>
                        <span className="text-[11px] text-slate-400">{update.date}</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{update.description}</p>
                      {update.evidenceNote && (
                        <p className="text-[11px] text-emerald-800 font-medium bg-emerald-50 p-2 rounded-lg mt-2">
                          ✓ Verified Evidence: {update.evidenceNote}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Funding Campaign & Financial Transparency */}
        <div className="space-y-6">
          {campaign && (
            <div className="bg-white rounded-2xl border border-emerald-200 p-6 shadow-sm space-y-5 sticky top-24">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Active Campaign
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                  {campaign.status}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-base leading-snug">
                  {campaign.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Target: {campaign.targetUniversity} ({campaign.destinationCountry})
                </p>
              </div>

              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between items-baseline text-xs">
                  <div>
                    <span className="text-xl font-black text-slate-900">
                      ৳ {campaign.raisedAmountBDT.toLocaleString()}
                    </span>
                    <span className="text-slate-500 text-[11px]">
                      {' '}of ৳ {campaign.fundingGoalBDT.toLocaleString()}
                    </span>
                  </div>
                  <span className="font-bold text-emerald-700">{percentFunded}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-emerald-600 h-2.5 rounded-full transition-all"
                    style={{ width: `${percentFunded}%` }}
                  />
                </div>
                <div className="flex justify-between text-[11px] text-slate-500 pt-1">
                  <span>{campaign.donorCount} Donors</span>
                  <span>Deadline: {campaign.deadline}</span>
                </div>
              </div>

              {/* Expenses Breakdown */}
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                <span className="font-bold text-slate-700 block">Itemized Budget Plan:</span>
                <div className="space-y-1.5">
                  {campaign.expenses.map((exp) => (
                    <div key={exp.id} className="flex justify-between text-slate-600 text-[11px]">
                      <span className="truncate pr-2">{exp.title}</span>
                      <strong className="text-slate-800 shrink-0">৳ {exp.amountBDT.toLocaleString()}</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Donate Button */}
              <button
                onClick={() => setActiveCampaignForDonation(campaign)}
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow-md flex items-center justify-center space-x-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Donate via bKash / Nagad / Card</span>
              </button>

              <p className="text-[10px] text-slate-400 text-center">
                100% of contributions are allocated directly to verified tuition and travel expenses with instant digital receipts.
              </p>
            </div>
          )}

          {/* Financial Breakdown Card (PRD 5.2) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3 text-xs">
            <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2">
              Financial Requirement Overview
            </h3>
            <div className="space-y-2 text-slate-600">
              <div className="flex justify-between">
                <span>Total Estimated Expenses:</span>
                <strong className="text-slate-900">৳ {student.totalEstimatedExpensesBDT.toLocaleString()}</strong>
              </div>
              <div className="flex justify-between">
                <span>Family / Personal Resources:</span>
                <strong className="text-slate-900">৳ {student.availableFinancialResourcesBDT.toLocaleString()}</strong>
              </div>
              <div className="flex justify-between">
                <span>Scholarships Received:</span>
                <strong className="text-emerald-700">৳ {student.scholarshipReceivedBDT.toLocaleString()}</strong>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-100 font-bold text-slate-900">
                <span>Remaining Funding Gap:</span>
                <span className="text-rose-600">৳ {student.remainingFundingRequirementBDT.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

