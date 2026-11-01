'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { X, Printer, ShieldCheck, CheckCircle2, Award } from 'lucide-react';

export const ReceiptModal: React.FC = () => {
  const { activeDonationForReceipt, setActiveDonationForReceipt } = useApp();

  if (!activeDonationForReceipt) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Top actions bar */}
        <div className="bg-slate-900 text-white px-6 py-3.5 flex items-center justify-between no-print">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold text-sm">Official Avash Digital Donation Receipt</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-medium transition"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={() => setActiveDonationForReceipt(null)}
              className="p-1 rounded-full text-slate-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Receipt Body */}
        <div className="p-8 md:p-10 space-y-6 bg-white text-slate-800" id="receipt-print-area">
          {/* Header */}
          <div className="flex items-start justify-between border-b border-slate-200 pb-6">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-black tracking-tight text-emerald-800">আভাস</span>
                <span className="text-2xl font-bold text-slate-900">Avash</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Open-Source EdTech Student Funding Platform</p>
              <p className="text-[11px] text-slate-400">Dhaka, Bangladesh • info@avash.org.bd • www.avash.org.bd</p>
            </div>
            <div className="text-right">
              <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-full border border-emerald-200 mb-2">
                PAID & RECONCILED
              </span>
              <p className="text-xs text-slate-500">Receipt No.</p>
              <p className="font-mono font-bold text-slate-800 text-sm">{activeDonationForReceipt.receiptNumber}</p>
            </div>
          </div>

          {/* Key metadata grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3 bg-slate-50 rounded-xl p-4 border border-slate-100 text-xs">
            <div>
              <span className="text-slate-400 block mb-0.5">Payment Date</span>
              <strong className="text-slate-800 font-medium">{activeDonationForReceipt.createdAt}</strong>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Method</span>
              <strong className="text-slate-800 font-medium">{activeDonationForReceipt.paymentMethod}</strong>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Status</span>
              <strong className="text-emerald-700 font-medium flex items-center">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Confirmed
              </strong>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Platform Fee</span>
              <strong className="text-emerald-700 font-medium">৳ 0 (0%)</strong>
            </div>
          </div>

          {/* Donor & Beneficiary details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <p className="font-bold text-slate-500 uppercase tracking-wider text-[10px] mb-2">Contributor</p>
              <p className="text-base font-bold text-slate-900">
                {activeDonationForReceipt.isAnonymous ? 'Anonymous Donor' : activeDonationForReceipt.donorName}
              </p>
              <p className="text-slate-600 mt-1">{activeDonationForReceipt.donorEmail}</p>
              <p className="text-[11px] text-slate-400 mt-2">
                Public Visibility: {activeDonationForReceipt.isAnonymous ? 'Anonymous' : 'Public Recognition'}
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <p className="font-bold text-slate-500 uppercase tracking-wider text-[10px] mb-2">Student Beneficiary</p>
              <p className="text-base font-bold text-emerald-800">
                {activeDonationForReceipt.studentName}
              </p>
              <p className="text-slate-700 font-medium mt-1">{activeDonationForReceipt.campaignTitle}</p>
              <p className="text-[11px] text-slate-400 mt-1">Verified Academic Profile & Escrow Disbursement</p>
            </div>
          </div>

          {/* Line items table */}
          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <table className="w-full text-xs">
              <thead className="bg-slate-100 text-slate-600 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-4 text-left">Description</th>
                  <th className="py-2.5 px-4 text-right">Allocation</th>
                  <th className="py-2.5 px-4 text-right">Amount (BDT)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-3 px-4 font-medium">
                    Direct Student Educational Grant
                    <span className="block text-[11px] text-slate-400">
                      Restricted to university fees, exams, visa, and relocation expenses.
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right text-emerald-700 font-semibold">100%</td>
                  <td className="py-3 px-4 text-right font-bold text-slate-900">
                    ৳ {activeDonationForReceipt.amountBDT.toLocaleString()}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-slate-500">Avash Platform Service Fee</td>
                  <td className="py-2 px-4 text-right text-slate-500">0%</td>
                  <td className="py-2 px-4 text-right font-medium text-emerald-600">৳ 0.00</td>
                </tr>
              </tbody>
              <tfoot className="bg-slate-50 border-t border-slate-200 font-bold text-slate-900">
                <tr>
                  <td colSpan={2} className="py-3 px-4 text-right text-sm">Total Paid:</td>
                  <td className="py-3 px-4 text-right text-base text-emerald-800">
                    ৳ {activeDonationForReceipt.amountBDT.toLocaleString()}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Security & Cryptographic signature */}
          <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
            <p>
              <strong className="text-slate-700">Transaction Authentication Hash:</strong>{' '}
              <span className="font-mono">{activeDonationForReceipt.transactionHash}</span>
            </p>
            <p className="text-[10px] text-slate-400">
              Avash operates on a non-profit escrow transparency protocol. Individual contributions are held exclusively for verified academic disbursements in compliance with Bangladesh laws.
            </p>
          </div>

          {/* Footer seal */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200 text-xs">
            <div className="flex items-center space-x-2 text-slate-600">
              <Award className="w-5 h-5 text-emerald-600" />
              <span>Avash Foundation Verification Board</span>
            </div>
            <div className="text-right text-slate-400 text-[11px]">
              Computer Generated Digital Document
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

