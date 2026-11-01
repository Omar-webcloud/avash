'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import {
  ShieldCheck,
  GraduationCap,
  Heart,
  Calendar,
  CheckCircle,
  FileCheck,
  TrendingUp,
  MapPin,
  ArrowLeft,
  Share2,
  Users,
} from 'lucide-react';

export default function CampaignDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { campaigns, donations, setActiveCampaignForDonation } = useApp();

  const campaign = campaigns.find((c) => c.id === slug || c.slug === slug);
  if (!campaign) {
    return notFound();
  }

  const campaignDonations = donations.filter((d) => d.campaignId === campaign.id);
  const percentFunded = Math.min(100, Math.round((campaign.raisedAmountBDT / campaign.fundingGoalBDT) * 100));

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: campaign.title,
        text: `Support ${campaign.studentName}'s higher education journey on Avash!`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Campaign link copied to clipboard!');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top back & share bar */}
      <div className="flex items-center justify-between">
        <Link
          href="/campaigns"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Campaigns</span>
        </Link>
        <button
          onClick={handleShare}
          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Share Campaign</span>
        </button>
      </div>

      {/* Main Campaign Hero Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                <span>Verified Campaign</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                📍 {campaign.destinationCountry}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold">
                🎓 {campaign.intendedDegree}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
              {campaign.title}
            </h1>

            {/* Student mini profile */}
            <div className="flex items-center space-x-3 pt-2">
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
                <p className="text-xs text-slate-500">
                  {campaign.studentInstitution} • {campaign.studentCity}, Bangladesh
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-2">
              {campaign.introduction}
            </p>
          </div>

          {/* Quick Donate Panel */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4">
            <div>
              <div className="flex justify-between items-baseline">
                <span className="text-2xl font-black text-slate-900">
                  ৳ {campaign.raisedAmountBDT.toLocaleString()}
                </span>
                <span className="font-bold text-emerald-700 text-sm">{percentFunded}%</span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                raised of ৳ {campaign.fundingGoalBDT.toLocaleString()} target
              </p>
            </div>

            <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-emerald-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${percentFunded}%` }}
              />
            </div>

            <div className="flex justify-between text-xs text-slate-600 pt-1 border-t border-slate-200">
              <span><strong>{campaign.donorCount}</strong> Backers</span>
              <span>Deadline: <strong>{campaign.deadline}</strong></span>
            </div>

            <button
              onClick={() => setActiveCampaignForDonation(campaign)}
              className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow-lg shadow-emerald-600/20 flex items-center justify-center space-x-2"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate Now via bKash / Nagad / Card</span>
            </button>

            <p className="text-[10px] text-slate-400 text-center">
              100% direct allocation. Zero platform commission.
            </p>
          </div>
        </div>
      </div>

      {/* Grid: Expenses Breakdown, Milestones, and Donors Wall */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (2 Cols): Expenses & Milestones */}
        <div className="lg:col-span-2 space-y-8">
          {/* Itemized Expenses Breakdown Table (PRD Section 5.4) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h2 className="text-base font-bold text-slate-900">
                  Itemized Funding Breakdown & Expense Verification
                </h2>
                <p className="text-xs text-slate-500">
                  Transparent breakdown of all costs required for international enrollment
                </p>
              </div>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Escrow Protected
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-3">Expense Category</th>
                    <th className="py-2.5 px-3">Item Description</th>
                    <th className="py-2.5 px-3 text-right">Cost (BDT)</th>
                    <th className="py-2.5 px-3 text-center">Verification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {campaign.expenses.map((exp) => (
                    <tr key={exp.id} className="hover:bg-slate-50/50">
                      <td className="py-3 px-3 font-medium text-slate-900">
                        {exp.category}
                      </td>
                      <td className="py-3 px-3">
                        <span className="font-semibold text-slate-800">{exp.title}</span>
                        {exp.note && <span className="block text-[11px] text-slate-400">{exp.note}</span>}
                      </td>
                      <td className="py-3 px-3 text-right font-bold text-slate-900">
                        ৳ {exp.amountBDT.toLocaleString()}
                      </td>
                      <td className="py-3 px-3 text-center">
                        {exp.receiptVerified ? (
                          <span className="inline-flex items-center text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                            <CheckCircle className="w-3 h-3 mr-1" /> Quotation/Receipt Verified
                          </span>
                        ) : (
                          <span className="text-[10px] text-slate-400">
                            Disbursed Upon Invoicing
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-slate-50 font-bold text-slate-900 border-t border-slate-200">
                  <tr>
                    <td colSpan={2} className="py-3 px-3 text-right">Total Verified Budget Goal:</td>
                    <td className="py-3 px-3 text-right text-emerald-800 text-sm">
                      ৳ {campaign.fundingGoalBDT.toLocaleString()}
                    </td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Funding Milestones (PRD 5.4) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>Campaign Milestones</span>
            </h2>
            <div className="space-y-3">
              {campaign.milestones.map((milestone, idx) => (
                <div
                  key={milestone.id}
                  className="flex items-start space-x-3 p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 text-xs"
                >
                  <div className={`p-1 rounded-full ${milestone.completed ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-400'}`}>
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`font-bold ${milestone.completed ? 'text-slate-900' : 'text-slate-500'}`}>
                        {milestone.title}
                      </span>
                      {milestone.completedAt ? (
                        <span className="text-[11px] text-emerald-700 font-medium">
                          Completed {milestone.completedAt}
                        </span>
                      ) : (
                        <span className="text-[11px] text-slate-400">
                          Target {milestone.targetDate}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Donors Wall & Messages */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
                <Users className="w-4 h-4 text-emerald-600" />
                <span>Recent Supporters ({campaignDonations.length})</span>
              </h3>
              <span className="text-[11px] text-slate-400">All Reconciled</span>
            </div>

            {campaignDonations.length === 0 ? (
              <div className="text-center py-6 text-slate-400 text-xs">
                Be the first supporter for this student!
              </div>
            ) : (
              <div className="space-y-3">
                {campaignDonations.map((don) => (
                  <div
                    key={don.id}
                    className="p-3 rounded-xl border border-slate-100 bg-slate-50/60 text-xs space-y-1"
                  >
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-slate-900">
                        {don.isAnonymous ? 'Anonymous Supporter' : don.donorName}
                      </span>
                      <strong className="text-emerald-700">৳ {don.amountBDT.toLocaleString()}</strong>
                    </div>
                    {don.message && (
                      <p className="text-slate-600 text-[11px] italic bg-white p-2 rounded-lg border border-slate-100 mt-1">
                        “{don.message}”
                      </p>
                    )}
                    <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1">
                      <span>via {don.paymentMethod}</span>
                      <span>{don.createdAt.split(' ')[0]}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={() => setActiveCampaignForDonation(campaign)}
              className="w-full py-2.5 rounded-xl border border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-bold text-xs transition"
            >
              Add Your Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

