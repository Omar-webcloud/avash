'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import {
  GraduationCap,
  ShieldCheck,
  Heart,
  TrendingUp,
  Sparkles,
  Award,
  ArrowRight,
  Globe,
  CheckCircle,
  Building2,
  Users,
  Compass,
  FileCheck,
  Calendar,
} from 'lucide-react';

export default function HomePage() {
  const {
    t,
    campaigns,
    scholarships,
    progressUpdates,
    setActiveCampaignForDonation,
    language,
  } = useApp();

  const activeCampaigns = campaigns.filter((c) => c.status === 'Active' || c.status === 'Fully Funded');

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950 text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        {/* Subtle background glow effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Tagline Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>{t.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
              {t.hero.title1}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Link
                href="/campaigns"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition shadow-lg shadow-emerald-500/20 flex items-center justify-center space-x-2"
              >
                <span>{t.hero.browseCTA}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/student/campaigns/new"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold text-sm border border-slate-700 transition flex items-center justify-center space-x-2"
              >
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>{t.hero.startCampaignCTA}</span>
              </Link>
            </div>

            {/* Trust Notice */}
            <p className="text-xs text-slate-400 flex items-center justify-center space-x-1.5 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t.hero.trustNotice}</span>
            </p>
          </div>

          {/* Key Pilot Metrics Strip (PRD Section 2.2) */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
            <div className="bg-slate-900/60 backdrop-blur border border-slate-800 p-4 rounded-2xl text-center">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">300+</div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-medium">Registered Students</div>
            </div>
            <div className="bg-slate-900/60 backdrop-blur border border-slate-800 p-4 rounded-2xl text-center">
              <div className="text-xl sm:text-2xl font-black text-teal-300">100%</div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-medium">Human-Verified Data</div>
            </div>
            <div className="bg-slate-900/60 backdrop-blur border border-slate-800 p-4 rounded-2xl text-center">
              <div className="text-xl sm:text-2xl font-black text-emerald-300">৳ 1.85 Cr</div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-medium">Community Backed</div>
            </div>
            <div className="bg-slate-900/60 backdrop-blur border border-slate-800 p-4 rounded-2xl text-center">
              <div className="text-xl sm:text-2xl font-black text-cyan-300">12+</div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-medium">Partner Organizations</div>
            </div>
            <div className="col-span-2 md:col-span-1 bg-slate-900/60 backdrop-blur border border-slate-800 p-4 rounded-2xl text-center">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">100%</div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-medium">Reconciled Escrow</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Transparent Student Crowdfunding</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {t.featuredCampaigns}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
              Verified students seeking immediate financial assistance for admission deposits, visa fees, exam score reports, and relocation.
            </p>
          </div>
          <Link
            href="/campaigns"
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition"
          >
            <span>View All Campaigns</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCampaigns.slice(0, 3).map((campaign) => {
            const percent = Math.min(100, Math.round((campaign.raisedAmountBDT / campaign.fundingGoalBDT) * 100));
            return (
              <div
                key={campaign.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
              >
                {/* Header & Student preview */}
                <div className="p-5 flex-1 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center space-x-3">
                      <img
                        src={campaign.studentAvatar}
                        alt={campaign.studentName}
                        className="w-12 h-12 rounded-xl object-cover border border-slate-200"
                      />
                      <div>
                        <Link
                          href={`/students/${campaign.studentId}`}
                          className="font-bold text-slate-900 hover:text-emerald-700 transition text-sm block"
                        >
                          {campaign.studentName}
                        </Link>
                        <p className="text-[11px] text-slate-500">
                          {campaign.studentInstitution} • {campaign.studentCity}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>Verified</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-2 hover:text-emerald-700 transition">
                      <Link href={`/campaigns/${campaign.id}`}>
                        {campaign.title}
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs mt-2 line-clamp-2 leading-relaxed">
                      {campaign.introduction}
                    </p>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium">
                      🎯 {campaign.targetUniversity}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[11px] font-medium">
                      📍 {campaign.destinationCountry}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-700 text-[11px] font-medium">
                      🎓 {campaign.intendedDegree}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="space-y-1.5 pt-2">
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-emerald-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <div>
                        <strong className="text-slate-900 font-bold">
                          ৳ {campaign.raisedAmountBDT.toLocaleString()}
                        </strong>{' '}
                        <span className="text-slate-500 text-[11px]">
                          of ৳ {campaign.fundingGoalBDT.toLocaleString()}
                        </span>
                      </div>
                      <span className="font-bold text-emerald-700">{percent}%</span>
                    </div>
                  </div>
                </div>

                {/* Footer with action */}
                <div className="px-5 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[11px] text-slate-500">
                    <strong>{campaign.donorCount}</strong> Donors • Active
                  </div>
                  <div className="flex space-x-2">
                    <Link
                      href={`/campaigns/${campaign.id}`}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-white text-xs font-semibold transition"
                    >
                      Details
                    </Link>
                    <button
                      onClick={() => setActiveCampaignForDonation(campaign)}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition shadow-sm"
                    >
                      Support
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Institutional Scholarships Section */}
      <section className="bg-slate-100/70 py-14 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center space-x-2 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-1">
                <Building2 className="w-4 h-4" />
                <span>Organizational Sponsorships</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                {t.activeScholarships}
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
                Partner foundations, corporate CSR initiatives, and global institutions offering merit grants for higher studies abroad.
              </p>
            </div>
            <Link
              href="/scholarships"
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-indigo-700 hover:text-indigo-800 transition"
            >
              <span>Explore All Scholarships</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scholarships.map((sch) => (
              <div
                key={sch.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={sch.organizationLogo}
                      alt={sch.organizationName}
                      className="w-10 h-10 rounded-xl object-cover border border-slate-200"
                    />
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">
                        {sch.organizationName}
                      </span>
                      <span className="text-[10px] text-emerald-600 font-semibold flex items-center">
                        <CheckCircle className="w-3 h-3 mr-0.5" /> Verified Organization
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 text-base leading-snug hover:text-indigo-600 transition">
                      <Link href={`/scholarships/${sch.id}`}>{sch.title}</Link>
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {sch.description}
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Total Fund:</span>
                      <strong className="text-slate-800">৳ {sch.budgetBDT.toLocaleString()}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Recipients:</span>
                      <strong className="text-indigo-700">{sch.awardedRecipients} of {sch.totalRecipients} Awarded</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Deadline:</span>
                      <strong className="text-rose-600">{sch.applicationDeadline}</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    Open for Bangladeshi applicants
                  </span>
                  <Link
                    href={`/scholarships/${sch.id}`}
                    className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition shadow-sm"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Student Progress Feed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
              <TrendingUp className="w-4 h-4" />
              <span>Real-Time Accountability</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {t.recentUpdates}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
              Track the genuine milestones of students you support — from visa approvals to university arrival.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {progressUpdates.map((update) => (
            <div
              key={update.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <img
                      src={update.studentAvatar}
                      alt={update.studentName}
                      className="w-9 h-9 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-900">{update.studentName}</p>
                      <p className="text-[10px] text-slate-400">{update.date}</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                    {update.milestoneType}
                  </span>
                </div>

                <h4 className="font-bold text-slate-900 text-sm leading-snug">
                  {update.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {update.description}
                </p>

                {update.evidenceNote && (
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 flex items-start space-x-1.5">
                    <FileCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Evidence: {update.evidenceNote}</span>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="inline-flex items-center space-x-1 text-rose-600 font-semibold">
                  <Heart className="w-3.5 h-3.5 fill-rose-600" />
                  <span>{update.likesCount} community claps</span>
                </span>
                <Link
                  href={`/students/${update.studentId}`}
                  className="text-emerald-700 font-semibold hover:underline"
                >
                  Student Profile →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How Avash Works / Trust System */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Verification & Escrow Architecture
            </span>
            <h2 className="text-3xl font-black">How Avash Builds Uncompromising Trust</h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              We eliminate fraud, guarantee zero personal wallet transfers, and ensure every Taka reaches genuine educational milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-lg">
                1
              </div>
              <h3 className="font-bold text-lg text-white">Human Verification Pipeline</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Academic reviewers authenticate official transcripts, IELTS test report forms, and foreign university acceptance letters prior to public campaign approval.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-black text-lg">
                2
              </div>
              <h3 className="font-bold text-lg text-white">Audited Educational Escrow</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Contributions are held in a transparent institutional account. Avash never routes public donations through informal personal accounts or unverified wallets.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-black text-lg">
                3
              </div>
              <h3 className="font-bold text-lg text-white">Milestone Disbursement</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Funds are disbursed against verified receipts: direct exam booking receipts, SEVIS fees, embassy payment slips, flight tickets, and dormitory deposits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-600 via-teal-700 to-slate-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-black">
              Ready to expand horizons?
            </h2>
            <p className="text-emerald-100 text-xs sm:text-sm max-w-lg">
              Whether you are an ambitious student preparing to study abroad, an expatriate who wants to mentor, or a donor giving back — Avash is your platform.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/students"
              className="px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition shadow"
            >
              Browse Deserving Students
            </Link>
            <Link
              href="/student/campaigns/new"
              className="px-6 py-3 rounded-xl bg-emerald-950/40 border border-emerald-400/30 text-white font-bold text-xs hover:bg-emerald-950/60 transition"
            >
              Start Student Profile
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
