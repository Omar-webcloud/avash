'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import {
  LayoutDashboard,
  Building2,
  ShieldCheck,
  Award,
  PlusCircle,
  Users2,
  Trophy,
  BarChart3,
  Users,
} from 'lucide-react';

export const OrgDashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const { scholarships, applications } = useApp();

  const links = [
    { href: '/organization/dashboard', label: 'Org Overview', icon: LayoutDashboard },
    { href: '/organization/profile', label: 'Organization Profile', icon: Building2 },
    { href: '/organization/verification', label: 'Org Verification', icon: ShieldCheck },
    { href: '/organization/scholarships', label: 'Manage Scholarships', icon: Award },
    { href: '/organization/scholarships/new', label: 'Create Scholarship', icon: PlusCircle },
    { href: '/organization/applicants', label: 'Applicant Dossiers', icon: Users2 },
    { href: '/organization/recipients', label: 'Awarded Scholars', icon: Trophy },
    { href: '/organization/reports', label: 'CSR Impact Reports', icon: BarChart3 },
    { href: '/organization/team', label: 'Team Members', icon: Users },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header bar */}
      <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 mb-8 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=200&auto=format&fit=crop&q=80"
              alt="BRAC Logo"
              className="w-16 h-16 rounded-2xl object-cover border-2 border-indigo-400"
            />
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-bold">BRAC Social Impact Initiatives</h1>
                <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-bold border border-indigo-400/30">
                  Verified Institutional Partner
                </span>
              </div>
              <p className="text-xs text-indigo-200 mt-0.5">
                3 Active Scholarship Programs • 10 Recipients Funded
              </p>
            </div>
          </div>
          <Link
            href="/organization/scholarships/new"
            className="px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-slate-950 text-xs font-bold transition shadow"
          >
            + New Scholarship Grant
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="md:col-span-1 space-y-1">
          <div className="bg-white rounded-2xl border border-slate-200 p-2 shadow-sm space-y-0.5">
            {links.map((link) => {
              const Icon = link.icon;
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-2.5 px-3 py-2.5 rounded-xl text-xs font-medium transition ${
                    active
                      ? 'bg-indigo-50 text-indigo-900 font-bold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-indigo-600' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </aside>

        <div className="md:col-span-3">
          {children}
        </div>
      </div>
    </div>
  );
};

