'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { ShieldCheck, Heart, GitBranch, Award, CheckCircle2, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useApp();

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      {/* Trust banner */}
      <div className="border-b border-slate-900 bg-slate-900/40 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-slate-200 text-sm">Human Verified Credentials</h5>
                <p className="text-slate-400 text-xs mt-0.5">
                  Every student offer letter, NID, and English test is authenticated by human reviewers.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-slate-200 text-sm">Zero Platform Cut</h5>
                <p className="text-slate-400 text-xs mt-0.5">
                  100% of donor funding goes directly towards verified student educational expenses.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-slate-200 text-sm">Transparent Reconciliation</h5>
                <p className="text-slate-400 text-xs mt-0.5">
                  Itemized expenses, digital receipts, and milestone verification updates for donors.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                <GitBranch className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-slate-200 text-sm">Open-Source EdTech</h5>
                <p className="text-slate-400 text-xs mt-0.5">
                  Built publicly by Bangladeshi developers under AGPL-3.0 with complete privacy protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white shadow-md">
                <span className="font-black text-lg">আ</span>
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="text-xl font-black text-white tracking-tight">Avash</span>
                  <span className="text-sm font-semibold text-emerald-400">আভাস</span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium">Your potential has no borders.</p>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              An open-source student funding platform connecting talented Bangladeshi scholars with individual donors, organizations, and transparent international education grants.
            </p>
            <div className="pt-2 text-[11px] text-slate-500">
              <p>📍 Banani & Old Dhaka, Bangladesh</p>
              <p>📧 contact@avash.org.bd • support@avash.org.bd</p>
            </div>
          </div>

          {/* Student Hub */}
          <div>
            <h6 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-3">For Students</h6>
            <ul className="space-y-2">
              <li><Link href="/students" className="hover:text-emerald-400 transition">Browse Verified Profiles</Link></li>
              <li><Link href="/student/campaigns/new" className="hover:text-emerald-400 transition">Start Funding Campaign</Link></li>
              <li><Link href="/scholarships" className="hover:text-emerald-400 transition">Institutional Scholarships</Link></li>
              <li><Link href="/student/verification" className="hover:text-emerald-400 transition">Verification Guidelines</Link></li>
              <li><Link href="/how-it-works" className="hover:text-emerald-400 transition">How Avash Works</Link></li>
            </ul>
          </div>

          {/* Donor & Orgs */}
          <div>
            <h6 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-3">Supporters & Orgs</h6>
            <ul className="space-y-2">
              <li><Link href="/campaigns" className="hover:text-emerald-400 transition">Support a Student</Link></li>
              <li><Link href="/donor/receipts" className="hover:text-emerald-400 transition">Digital Receipts</Link></li>
              <li><Link href="/organization/scholarships/new" className="hover:text-emerald-400 transition">Publish a Scholarship</Link></li>
              <li><Link href="/transparency" className="hover:text-emerald-400 transition">100% Financial Audit</Link></li>
              <li><Link href="/about" className="hover:text-emerald-400 transition">Our Mission & Ethics</Link></li>
            </ul>
          </div>

          {/* Dashboards & Portals */}
          <div>
            <h6 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-3">Portals</h6>
            <ul className="space-y-2">
              <li><Link href="/student/dashboard" className="hover:text-emerald-400 transition">Student Portal</Link></li>
              <li><Link href="/donor/dashboard" className="hover:text-emerald-400 transition">Donor Dashboard</Link></li>
              <li><Link href="/organization/dashboard" className="hover:text-emerald-400 transition">Organization Hub</Link></li>
              <li><Link href="/admin" className="hover:text-emerald-400 transition">Reviewer & Admin Queue</Link></li>
              <li><Link href="/faq" className="hover:text-emerald-400 transition">Help & FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 mt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Avash (আভাস) Foundation. Released under AGPL-3.0 Open-Source License.</p>
          <div className="flex space-x-4">
            <Link href="/transparency" className="hover:text-slate-300">Privacy & Data Protection</Link>
            <Link href="/transparency" className="hover:text-slate-300">Escrow Security</Link>
            <Link href="/contact" className="hover:text-slate-300">Dhaka Pilot Hub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
