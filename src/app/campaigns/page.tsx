'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import {
  Search,
  Filter,
  ShieldCheck,
  GraduationCap,
  Heart,
  Clock,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export default function CampaignsDirectoryPage() {
  const { campaigns, setActiveCampaignForDonation } = useApp();

  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [sortBy, setSortBy] = useState<'recent' | 'progress' | 'deadline'>('recent');

  const countries = ['All', 'United States', 'United Kingdom', 'Germany', 'Canada'];
  const statuses = ['All', 'Active', 'Fully Funded'];

  const filteredCampaigns = campaigns
    .filter((c) => {
      const matchesSearch =
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.studentName.toLowerCase().includes(search.toLowerCase()) ||
        c.targetUniversity.toLowerCase().includes(search.toLowerCase()) ||
        c.destinationCountry.toLowerCase().includes(search.toLowerCase());

      const matchesCountry = selectedCountry === 'All' || c.destinationCountry === selectedCountry;
      const matchesStatus = selectedStatus === 'All' || c.status === selectedStatus;

      return matchesSearch && matchesCountry && matchesStatus;
    })
    .sort((a, b) => {
      if (sortBy === 'progress') {
        return b.raisedAmountBDT / b.fundingGoalBDT - a.raisedAmountBDT / a.fundingGoalBDT;
      }
      if (sortBy === 'deadline') {
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      }
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center space-x-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
          <Sparkles className="w-4 h-4" />
          <span>Community Educational Crowdfunding</span>
        </div>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">
          Active Student Funding Campaigns
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
          Back verified Bangladeshi scholars directly. Transparent itemized budgets for IELTS/GRE tests, university application fees, visa expenses, and tuition deposits.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-3">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search campaigns by student, destination, university..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {countries.map((c) => (
                <option key={c} value={c}>
                  Destination: {c}
                </option>
              ))}
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {statuses.map((s) => (
                <option key={s} value={s}>
                  Status: {s}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="recent">Sort: Recently Published</option>
              <option value="progress">Sort: Highest Funded %</option>
              <option value="deadline">Sort: Deadline Approaching</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
          <span>{filteredCampaigns.length} campaigns found</span>
          <span className="text-emerald-700 font-medium">
            100% verified expenses with escrow disbursement
          </span>
        </div>
      </div>

      {/* Campaigns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCampaigns.map((campaign) => {
          const percent = Math.min(100, Math.round((campaign.raisedAmountBDT / campaign.fundingGoalBDT) * 100));
          return (
            <div
              key={campaign.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div className="p-6 space-y-4">
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
                        className="font-bold text-slate-900 hover:text-emerald-700 text-sm block"
                      >
                        {campaign.studentName}
                      </Link>
                      <p className="text-[11px] text-slate-500">
                        {campaign.studentInstitution} • {campaign.studentCity}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200 shrink-0">
                    <ShieldCheck className="w-3 h-3 mr-1 text-emerald-600" />
                    <span>Verified</span>
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-2 hover:text-emerald-700 transition">
                    <Link href={`/campaigns/${campaign.id}`}>{campaign.title}</Link>
                  </h3>
                  <p className="text-slate-600 text-xs mt-2 line-clamp-2 leading-relaxed">
                    {campaign.introduction}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-medium">
                    🎯 {campaign.targetUniversity}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-medium">
                    📍 {campaign.destinationCountry}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 text-[10px] font-medium">
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

              {/* Action footer */}
              <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="text-[11px] text-slate-500">
                  <span className="font-bold text-slate-700">{campaign.donorCount}</span> Donors •{' '}
                  <span className="text-rose-600">Ends {campaign.deadline}</span>
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
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition shadow-sm flex items-center space-x-1"
                  >
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    <span>Support</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

