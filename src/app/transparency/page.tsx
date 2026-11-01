'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  AlertTriangle,
  Scale,
  FileCheck,
  Activity,
} from 'lucide-react';

export default function TransparencyPage() {
  const { auditLogs } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          Trust & Accountability
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Trust, Safety & Escrow Transparency
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          How Avash safeguards student dignity, prevents fraudulent fundraising, guarantees zero personal wallet transfers, and reconciles every single Taka.
        </p>
      </div>

      {/* Key Safeguards Grid (PRD Section 10) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
          <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl w-fit">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-base">Human Verification Only</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Avash does not rely on opaque automated bots. Every university offer letter, English test scorecard (IELTS/TOEFL TRF), and government NID is checked by verified human reviewers before a campaign can go live.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
          <div className="p-3 bg-teal-50 text-teal-700 rounded-xl w-fit">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-base">Zero Informal Wallets</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Avash strictly prohibits using personal bank accounts or personal mobile wallets for public fundraising. All funds are received through authorized merchant gateways into an audited non-profit escrow account.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
          <div className="p-3 bg-indigo-50 text-indigo-700 rounded-xl w-fit">
            <Scale className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-base">Democratized Fairness</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Students from rural districts, less prestigious colleges, or those with zero social media presence receive equal platform visibility. Discovery is based on academic merit, verified goals, and deadlines.
          </p>
        </div>
      </div>

      {/* Live Reconciliation Ledger & Metrics */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 gap-2">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <Activity className="w-5 h-5 text-emerald-600" />
              <span>Real-Time Audit Trail & Transaction Integrity</span>
            </h2>
            <p className="text-xs text-slate-500">Every verification and donation action is cryptographically logged</p>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200 w-fit">
            100% Reconciled
          </span>
        </div>

        {/* Audit Logs list */}
        <div className="space-y-3">
          {auditLogs.map((log) => (
            <div
              key={log.id}
              className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div className="space-y-0.5">
                <div className="flex items-center space-x-2">
                  <span className="font-mono font-bold text-slate-800 text-[11px] bg-slate-200 px-1.5 py-0.5 rounded">
                    {log.action}
                  </span>
                  <span className="text-slate-500 text-[11px]">by {log.actorName} ({log.actorRole})</span>
                </div>
                <p className="text-slate-700 font-medium">{log.details}</p>
              </div>
              <span className="text-[11px] text-slate-400 font-mono shrink-0">
                {log.timestamp}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Legal & Compliance Notice (PRD Section 10) */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-4">
        <h3 className="font-bold text-lg text-emerald-400 flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5" />
          <span>Legal Structure & Compliance Standards</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Avash operates in adherence to Bangladesh charitable fundraising standards, consumer protection, and data privacy policies. We do not provide immigration consultancy, visa guarantees, nor university admission advisory services. Funds collected are strictly restricted to documented student educational expenditures verified by legitimate receipts and admissions bodies.
        </p>
      </div>
    </div>
  );
}

