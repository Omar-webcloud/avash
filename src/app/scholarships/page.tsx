'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import {
  Building2,
  Search,
  CheckCircle,
  GraduationCap,
  Calendar,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export default function ScholarshipsDirectoryPage() {
  const { scholarships } = useApp();
  const [search, setSearch] = useState('');

  const filtered = scholarships.filter((s) => {
    return (
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.organizationName.toLowerCase().includes(search.toLowerCase()) ||
      s.eligibleSubjects.some((sub) => sub.toLowerCase().includes(search.toLowerCase())) ||
      s.eligibleCountries.some((c) => c.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center space-x-2 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-1">
          <Building2 className="w-4 h-4" />
          <span>Institutional Sponsorships</span>
        </div>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">
          Global Scholarships for Bangladeshi Scholars
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
          Explore grants provided by leading foundations, corporate CSR initiatives, and educational funds supporting Masters and PhD studies abroad.
        </p>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by organization, subject, or country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
          />
        </div>
        <div className="text-xs text-slate-500">
          Showing {filtered.length} active scholarship grants
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((sch) => (
          <div
            key={sch.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src={sch.organizationLogo}
                  alt={sch.organizationName}
                  className="w-12 h-12 rounded-xl object-cover border border-slate-200"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm leading-tight">
                    {sch.organizationName}
                  </h4>
                  <span className="text-[10px] text-emerald-600 font-semibold flex items-center mt-0.5">
                    <CheckCircle className="w-3 h-3 mr-0.5" /> Verified Partner
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

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {sch.eligibleSubjects.slice(0, 3).map((sub) => (
                  <span
                    key={sub}
                    className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-medium"
                  >
                    {sub}
                  </span>
                ))}
              </div>

              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Total Program Fund:</span>
                  <strong className="text-slate-900">৳ {sch.budgetBDT.toLocaleString()}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Recipients:</span>
                  <strong className="text-indigo-700">
                    {sch.awardedRecipients} of {sch.totalRecipients} Awarded
                  </strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Deadline:</span>
                  <strong className="text-rose-600">{sch.applicationDeadline}</strong>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">Direct Online Evaluation</span>
              <Link
                href={`/scholarships/${sch.id}`}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition shadow-sm flex items-center space-x-1"
              >
                <span>View & Apply</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

