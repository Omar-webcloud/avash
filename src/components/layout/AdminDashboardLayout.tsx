'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  ShieldCheck,
  Megaphone,
  Building2,
  Award,
  Coins,
  Receipt,
  Banknote,
  BarChart3,
  ScrollText,
  Settings,
} from 'lucide-react';

export const AdminDashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const { auditLogs } = useApp();

  const links = [
    { href: '/admin', label: 'Admin Overview', icon: LayoutDashboard },
    { href: '/admin/verifications', label: 'Verification Review Queue', icon: ShieldCheck },
    { href: '/admin/campaigns', label: 'Campaign Moderation', icon: Megaphone },
    { href: '/admin/students', label: 'Students Directory', icon: GraduationCap },
    { href: '/admin/users', label: 'User Accounts', icon: Users },
    { href: '/admin/organizations', label: 'Organizations', icon: Building2 },
    { href: '/admin/scholarships', label: 'Scholarships', icon: Award },
    { href: '/admin/donations', label: 'Donation Ledger', icon: Coins },
    { href: '/admin/transactions', label: 'Payment Gateway Txns', icon: Receipt },
    { href: '/admin/disbursements', label: 'Escrow Disbursements', icon: Banknote },
    { href: '/admin/reports', label: 'Analytics & KPIs', icon: BarChart3 },
    { href: '/admin/audit-logs', label: 'Audit Logs', icon: ScrollText },
    { href: '/admin/settings', label: 'System Settings', icon: Settings },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header bar */}
      <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 mb-8 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80"
              alt="Admin Avatar"
              className="w-16 h-16 rounded-2xl object-cover border-2 border-purple-400"
            />
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-bold">Dr. Rubana Khan</h1>
                <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-bold border border-purple-400/30">
                  Senior Academic Reviewer & Super Admin
                </span>
              </div>
              <p className="text-xs text-purple-200 mt-0.5">
                Avash Verification Committee • 100% Audit Reconciliation
              </p>
            </div>
          </div>
          <Link
            href="/admin/verifications"
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition shadow"
          >
            Review Queue (Pending Items) →
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
                  className={`flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-medium transition ${
                    active
                      ? 'bg-purple-50 text-purple-950 font-bold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-purple-600' : 'text-slate-400'}`} />
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

