'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import {
  LayoutDashboard,
  User,
  GraduationCap,
  Award,
  FileText,
  ShieldCheck,
  Megaphone,
  PlusCircle,
  Coins,
  TrendingUp,
  Bell,
  Settings,
} from 'lucide-react';

export const StudentDashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const { currentUser, students } = useApp();
  const currentStudent = students.find((s) => s.id === 'std-nafis') || students[0];

  const links = [
    { href: '/student/dashboard', label: 'Overview', icon: LayoutDashboard },
    { href: '/student/profile', label: 'Personal Info', icon: User },
    { href: '/student/education', label: 'Education & Target', icon: GraduationCap },
    { href: '/student/achievements', label: 'Achievements', icon: Award },
    { href: '/student/documents', label: 'Documents Vault', icon: FileText },
    { href: '/student/verification', label: 'Verification Status', icon: ShieldCheck },
    { href: '/student/campaigns', label: 'My Campaigns', icon: Megaphone },
    { href: '/student/campaigns/new', label: 'Launch Campaign', icon: PlusCircle },
    { href: '/student/funding', label: 'Funding & Payouts', icon: Coins },
    { href: '/student/progress', label: 'Milestones & Updates', icon: TrendingUp },
    { href: '/student/notifications', label: 'Notifications', icon: Bell },
    { href: '/student/settings', label: 'Account Settings', icon: Settings },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Student header bar */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white rounded-3xl p-6 mb-8 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <img
              src={currentStudent.avatar}
              alt={currentStudent.fullName}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-400"
            />
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-bold">{currentStudent.fullName}</h1>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-400/30">
                  {currentStudent.verificationStatus}
                </span>
              </div>
              <p className="text-xs text-emerald-200 mt-0.5">
                {currentStudent.currentInstitution} • {currentStudent.intendedDegree}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={`/students/${currentStudent.id}`}
              className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/10 transition"
            >
              Public Profile View ↗
            </Link>
            <Link
              href="/student/campaigns/new"
              className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition shadow"
            >
              + New Campaign
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Navigation Sidebar */}
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
                      ? 'bg-emerald-50 text-emerald-800 font-bold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-emerald-600' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </aside>

        {/* Content Main Area */}
        <div className="md:col-span-3">
          {children}
        </div>
      </div>
    </div>
  );
};

