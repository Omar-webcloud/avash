'use client';

import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ShieldCheck,
  Target,
  Globe,
  Heart,
  GitBranch,
  BookOpen,
  Award,
} from 'lucide-react';

export default function AboutPage() {
  const principles = [
    {
      num: '01',
      title: 'Merit with Opportunity',
      desc: 'Exceptional academic talent should never be thwarted by a family’s inability to afford high upfront international testing and visa costs.',
    },
    {
      num: '02',
      title: 'Evidence Over Claims',
      desc: 'Every university offer letter, transcript, and standardized test result must be authenticated by qualified human reviewers.',
    },
    {
      num: '03',
      title: '100% Escrow Transparency',
      desc: 'Donations are never routed into informal private personal accounts. Funds are managed in transparent educational escrow with verifiable receipts.',
    },
    {
      num: '04',
      title: 'Privacy by Default',
      desc: 'Open-source software does not mean publicizing sensitive personal identity documents. Private records are strictly protected.',
    },
    {
      num: '05',
      title: 'Fair Discovery',
      desc: 'Popularity and social media follower counts do not dictate which students receive funding. Discovery is merit and need-based.',
    },
    {
      num: '06',
      title: 'Community Ownership',
      desc: 'Built collaboratively as open-source infrastructure under the AGPL-3.0 license so society retains stewardship of student empowerment.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>The Avash Mission</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Your potential has no borders.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          আভাস (Avash) is an open-source student funding platform created to connect talented Bangladeshi students with transparent international education support.
        </p>
      </div>

      {/* Vision & Mission Cards (PRD Section 1.3 & 1.4) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-emerald-900 to-slate-950 text-white p-8 rounded-3xl space-y-4 shadow-md">
          <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-2xl w-fit">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-black text-white">Our Vision</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            To build a trusted global community where financial limitations do not prevent talented Bangladeshi students from pursuing international educational opportunities and reaching their highest potential.
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-900 to-slate-950 text-white p-8 rounded-3xl space-y-4 shadow-md">
          <div className="p-3 bg-teal-500/20 text-teal-400 rounded-2xl w-fit">
            <Globe className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-black text-white">Our Mission</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            To make world-class higher education accessible by connecting deserving students with transparent, community-driven financial support, verified credentials, and institutional scholarships.
          </p>
        </div>
      </div>

      {/* Problem Context (PRD Section 1.2) */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          The Problem We Are Solving
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 text-base text-rose-800">
              Barriers Faced by Students:
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>High foreign-currency costs for IELTS/TOEFL and GRE test centers in Dhaka.</li>
              <li>Exorbitant university application fees charged per foreign institution.</li>
              <li>Expensive visa processing, I-901 SEVIS fees, medical exams, and mandatory health surcharges.</li>
              <li>Airfare and upfront dormitory security deposits required before arrival.</li>
              <li>Limited visibility for deserving rural or first-generation university graduates.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 text-base text-indigo-800">
              Challenges Faced by Donors & Sponsors:
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Difficulty verifying authentic university admission offers vs fake claims.</li>
              <li>Lack of a centralized, secure platform to discover vetted candidates.</li>
              <li>Uncertainty about whether donated funds actually reach educational goals.</li>
              <li>Absence of formal digital receipts, milestone tracking, and impact transparency.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Core Principles Grid (PRD Section 17) */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl font-black text-slate-900">Core Product Principles</h2>
          <p className="text-xs text-slate-500">The founding pillars guiding every line of code and decision at Avash</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p) => (
            <div
              key={p.num}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-2"
            >
              <span className="text-2xl font-black text-emerald-600">{p.num}</span>
              <h3 className="font-bold text-slate-900 text-base">{p.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Open Source Manifesto (PRD Section 16) */}
      <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white space-y-6">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-white/10 rounded-2xl text-emerald-400">
            <GitBranch className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Open-Source Strategy & AGPL-3.0 License</h2>
            <p className="text-xs text-slate-400">Public code, private user records</p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Avash is developed as a community-owned open-source initiative. Our codebase is open for public scrutiny, audit, and community contribution. While the platform code is public, all student identification records, academic transcripts, and financial transaction histories remain strictly private and encrypted in compliance with Bangladesh data regulations.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/transparency"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition"
          >
            Review Transparency Standards
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition"
          >
            Contribute as Developer / Volunteer
          </Link>
        </div>
      </div>
    </div>
  );
}
