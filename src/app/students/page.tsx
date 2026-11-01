'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import {
  Search,
  ShieldCheck,
  GraduationCap,
  MapPin,
  Building,
  Award,
  Filter,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

export default function StudentsDirectoryPage() {
  const { students, campaigns } = useApp();

  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedDegree, setSelectedDegree] = useState('All');
  const [selectedAdmission, setSelectedAdmission] = useState('All');

  const countries = ['All', 'United States', 'United Kingdom', 'Germany', 'Canada'];
  const degrees = ['All', 'MS', 'PhD', 'MSc'];
  const admissionStatuses = ['All', 'Admitted', 'Preparing Applications'];

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.fullName.toLowerCase().includes(search.toLowerCase()) ||
      student.currentInstitution.toLowerCase().includes(search.toLowerCase()) ||
      student.preferredSubject.toLowerCase().includes(search.toLowerCase()) ||
      student.targetCountry.toLowerCase().includes(search.toLowerCase());

    const matchesCountry = selectedCountry === 'All' || student.targetCountry === selectedCountry;
    const matchesDegree =
      selectedDegree === 'All' || student.intendedDegree.toLowerCase().includes(selectedDegree.toLowerCase());
    const matchesAdmission =
      selectedAdmission === 'All' || student.admissionStatus === selectedAdmission;

    return matchesSearch && matchesCountry && matchesDegree && matchesAdmission;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center space-x-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
          <GraduationCap className="w-4 h-4" />
          <span>Talent & Merit Registry</span>
        </div>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">
          Verified Bangladeshi Scholars
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
          Discover promising students from Bangladesh with verified academic credentials, offer letters, and transparent financial statements seeking support for higher education abroad.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-3">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, university, degree, or subject..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
            />
          </div>

          {/* Filter dropdowns */}
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
              value={selectedDegree}
              onChange={(e) => setSelectedDegree(e.target.value)}
              className="px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {degrees.map((d) => (
                <option key={d} value={d}>
                  Degree: {d}
                </option>
              ))}
            </select>

            <select
              value={selectedAdmission}
              onChange={(e) => setSelectedAdmission(e.target.value)}
              className="px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {admissionStatuses.map((a) => (
                <option key={a} value={a}>
                  Status: {a}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
          <span>Showing {filteredStudents.length} verified candidate profiles</span>
          <span className="flex items-center space-x-1 text-emerald-700 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>100% human-verified academic transcripts</span>
          </span>
        </div>
      </div>

      {/* Student Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((student) => {
          const studentCampaign = campaigns.find((c) => c.studentId === student.id);
          return (
            <div
              key={student.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div className="p-6 space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center space-x-3">
                    <img
                      src={student.avatar}
                      alt={student.fullName}
                      className="w-14 h-14 rounded-2xl object-cover border border-slate-200 shadow-sm"
                    />
                    <div>
                      <h3 className="font-bold text-slate-900 text-base leading-tight hover:text-emerald-700 transition">
                        <Link href={`/students/${student.id}`}>{student.fullName}</Link>
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {student.currentInstitution}
                      </p>
                      <span className="inline-block mt-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold text-[10px] border border-emerald-200">
                        {student.academicResults}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200 shrink-0">
                    <ShieldCheck className="w-3 h-3 mr-1 text-emerald-600" />
                    <span>{student.verificationStatus}</span>
                  </span>
                </div>

                {/* Bio */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {student.bio}
                </p>

                {/* Target Information */}
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs space-y-1.5">
                  <div className="flex items-center text-slate-700">
                    <GraduationCap className="w-3.5 h-3.5 text-slate-400 mr-2 shrink-0" />
                    <span className="truncate"><strong>Intended:</strong> {student.intendedDegree} in {student.preferredSubject}</span>
                  </div>
                  <div className="flex items-center text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 mr-2 shrink-0" />
                    <span><strong>Destination:</strong> {student.targetCountry}</span>
                  </div>
                  <div className="flex items-center text-slate-700">
                    <Building className="w-3.5 h-3.5 text-slate-400 mr-2 shrink-0" />
                    <span className="truncate"><strong>Target:</strong> {student.targetUniversities.join(', ')}</span>
                  </div>
                </div>

                {/* Achievements highlight */}
                {student.achievements.length > 0 && (
                  <div className="text-xs text-slate-600">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
                      Notable Merit
                    </span>
                    <div className="flex items-start space-x-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-[11px] leading-tight font-medium">
                        {student.achievements[0].title}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                {studentCampaign ? (
                  <span className="text-emerald-700 font-semibold text-[11px]">
                    Active Campaign: ৳ {studentCampaign.raisedAmountBDT.toLocaleString()} Raised
                  </span>
                ) : (
                  <span className="text-slate-400 text-[11px]">Profile Verified</span>
                )}
                <Link
                  href={`/students/${student.id}`}
                  className="inline-flex items-center space-x-1 text-slate-800 font-bold hover:text-emerald-700 transition"
                >
                  <span>Full Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

