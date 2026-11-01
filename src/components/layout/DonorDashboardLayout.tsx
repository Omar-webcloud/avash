'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import {
  LayoutDashboard,
  Compass,
  Heart,
  Bookmark,
  FileCheck2,
  Users,
  Settings,
} from 'lucide-react';

export const DonorDashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const { currentUser, donations } = useApp();

  const links = [
    { href: '/donor/dashboard', label: 'Donor Overview', icon: LayoutDashboard },
    { href: '/donor/explore', label: 'Explore Campaigns', icon: Compass },
    { href: '/donor/donations', label: 'Contribution History', icon: Heart },
    { href: '/donor/saved', label: 'Saved Students', icon: Bookmark },
    { href: '/donor/receipts', label: 'Digital Receipts', icon: FileCheck2 },
    { href: '/donor/following', label: 'Scholars Followed', icon: Users },
    { href: '/donor/settings', label: 'Donor Settings', icon: Settings },
  ];

  const totalGiven = donations.reduce((sum, d) => sum + d.amountBDT, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header bar */}
      <div className="bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-white rounded-3xl p-6 mb-8 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
              alt="Donor Avatar"
              className="w-16 h-16 rounded-2xl object-cover border-2 border-rose-400"
            />
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-bold">Dr. Tahmidur Rahman</h1>
                <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-bold border border-rose-400/30">
                  Verified Patron & Expat Mentor
                </span>
              </div>
              <p className="text-xs text-rose-200 mt-0.5">
                Total Contributed: ৳ {totalGiven.toLocaleString()} across verified campaigns
              </p>
            </div>
          </div>
          <Link
            href="/campaigns"
            className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition shadow"
          >
            Explore Urgent Campaigns ↗
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
                      ? 'bg-rose-50 text-rose-800 font-bold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-rose-600' : 'text-slate-400'}`} />
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

