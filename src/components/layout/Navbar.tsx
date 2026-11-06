'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import { UserRole } from '@/types';
import {
  GraduationCap,
  Heart,
  Building2,
  ShieldAlert,
  Globe,
  Bell,
  Menu,
  X,
  CheckCircle,
  ChevronDown,
  LayoutDashboard,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const roleMenuRef = useRef<HTMLDivElement | null>(null);
  const notifMenuRef = useRef<HTMLDivElement | null>(null);
  const {
    language,
    setLanguage,
    t,
    currentRole,
    setCurrentRole,
    notifications,
    markNotificationRead,
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [notifDropdownOpen, setNotifDropdownOpen] = useState(false);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (roleMenuRef.current && !roleMenuRef.current.contains(target)) {
        setRoleDropdownOpen(false);
      }
      if (notifMenuRef.current && !notifMenuRef.current.contains(target)) {
        setNotifDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const roleMeta: Record<UserRole, { label: string; icon: any; color: string; dashboard: string }> = {
    student: {
      label: 'Student (Nafis)',
      icon: GraduationCap,
      color: 'bg-emerald-500/10 text-emerald-700 border-emerald-300',
      dashboard: '/student/dashboard',
    },
    donor: {
      label: 'Donor (Dr. Tahmid)',
      icon: Heart,
      color: 'bg-rose-500/10 text-rose-700 border-rose-300',
      dashboard: '/donor/dashboard',
    },
    organization: {
      label: 'Org (BRAC)',
      icon: Building2,
      color: 'bg-indigo-500/10 text-indigo-700 border-indigo-300',
      dashboard: '/organization/dashboard',
    },
    reviewer: {
      label: 'Reviewer',
      icon: ShieldAlert,
      color: 'bg-amber-500/10 text-amber-700 border-amber-300',
      dashboard: '/admin/verifications',
    },
    admin: {
      label: 'Admin (Dr. Rubana)',
      icon: ShieldAlert,
      color: 'bg-purple-500/10 text-purple-700 border-purple-300',
      dashboard: '/admin',
    },
  };

  const navLinks = [
    { href: '/campaigns', label: t.exploreCampaigns },
    { href: '/students', label: t.verifiedStudents },
    { href: '/scholarships', label: t.scholarships },
    { href: '/how-it-works', label: t.howItWorks },
    { href: '/transparency', label: t.transparency },
  ];

  const currentRoleInfo = roleMeta[currentRole];
  const portalLabel = currentRoleInfo.label.split('(')[0].trim();

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
      {/* Top Banner: Demo Role Switcher & Live Simulation Pill */}
      <div className="bg-slate-900 text-slate-300 text-xs px-4 py-1.5 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-slate-200">
              Avash Pilot Platform • 100% Non-Profit EdTech Escrow
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-slate-400 hidden sm:inline">Active Demo Persona:</span>
            <div className="relative" ref={roleMenuRef}>
              <button
                type="button"
                aria-label="Switch demo persona"
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="flex items-center space-x-1.5 bg-slate-800 hover:bg-slate-700 text-white px-2.5 py-1 rounded-md text-xs font-medium border border-slate-700 transition"
              >
                <currentRoleInfo.icon className="w-3.5 h-3.5 text-emerald-400" />
                <span>{currentRoleInfo.label}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {roleDropdownOpen && (
                <div className="absolute right-0 mt-1 w-56 bg-white text-slate-800 rounded-xl shadow-xl border border-slate-200 py-1.5 z-50">
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    Switch Testing Persona
                  </div>
                  {(Object.keys(roleMeta) as UserRole[]).map((r) => {
                    const info = roleMeta[r];
                    const Icon = info.icon;
                    return (
                      <button
                        key={r}
                        onClick={() => {
                          setCurrentRole(r);
                          setRoleDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs transition ${
                          currentRole === r
                            ? 'bg-emerald-50 text-emerald-900 font-bold'
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <Icon className="w-4 h-4 text-emerald-600" />
                          <span>{info.label}</span>
                        </div>
                        {currentRole === r && <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
              className="flex items-center space-x-1 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-white text-xs border border-slate-700 transition"
              title="Toggle Language"
              aria-label="Toggle language"
            >
              <Globe className="w-3 h-3 text-emerald-400" />
              <span>{language === 'en' ? 'বাংলা' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition transform">
              <span className="font-black text-xl tracking-tighter">আ</span>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-xl font-black text-slate-900 tracking-tight">Avash</span>
                <span className="text-sm font-semibold text-emerald-700">আভাস</span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium tracking-tight">
                Your potential has no borders
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition ${
                    isActive
                      ? 'text-emerald-700 bg-emerald-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions: Notifications & Dashboard button */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Notifications Dropdown */}
            <div className="relative" ref={notifMenuRef}>
              <button
                onClick={() => setNotifDropdownOpen(!notifDropdownOpen)}
                aria-label="Open notifications"
                className="relative p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-emerald-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>

              {notifDropdownOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="font-bold text-xs text-slate-800">Notifications</span>
                    <span className="text-[11px] text-slate-400">{unreadCount} unread</span>
                  </div>
                  <div className="max-h-72 overflow-y-auto divide-y divide-slate-50">
                    {notifications.length === 0 ? (
                      <div className="p-4 text-center text-xs text-slate-400">No notifications</div>
                    ) : (
                      notifications.slice(0, 5).map((n) => (
                        <div
                          key={n.id}
                          onClick={() => markNotificationRead(n.id)}
                          className={`p-3 text-xs cursor-pointer transition ${
                            n.read ? 'bg-white text-slate-600' : 'bg-emerald-50/50 text-slate-900 font-medium'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-slate-800">{n.title}</span>
                            <span className="text-[10px] text-slate-400">{n.timestamp}</span>
                          </div>
                          <p className="text-slate-600 text-[11px] leading-relaxed">{n.message}</p>
                          {n.link && (
                            <Link href={n.link} className="text-emerald-700 text-[10px] font-semibold mt-1 inline-block hover:underline">
                              View details →
                            </Link>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* User Dashboard Direct Link */}
            <Link
              href={currentRoleInfo.dashboard}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm shadow-emerald-600/20 transition"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Go to {portalLabel} Portal</span>
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            <Link
              href={currentRoleInfo.dashboard}
              onClick={() => setMobileMenuOpen(false)}
              className="col-span-2 py-2.5 px-3 text-center bg-emerald-600 text-white font-semibold rounded-lg text-xs shadow-sm"
            >
              Open {portalLabel} Portal
            </Link>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              {t.aboutUs}
            </Link>
            <Link
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              {t.faq}
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              {t.contact}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

