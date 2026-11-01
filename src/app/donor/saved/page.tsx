'use client';

import React from 'react';
import Link from 'next/link';
import { DonorDashboardLayout } from '@/components/layout/DonorDashboardLayout';
import { useApp } from '@/context/AppContext';
import { Bookmark, ArrowRight, Heart } from 'lucide-react';

export default function DonorSavedPage() {
  const { students, campaigns, setActiveCampaignForDonation } = useApp();
  const savedStudents = students.slice(0, 2);

  return (
    <DonorDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <h2 className="text-base font-bold text-slate-900">Saved Student Profiles</h2>
          <p className="text-xs text-slate-500">Bookmarked candidates you are considering supporting</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {savedStudents.map((st) => {
            const camp = campaigns.find((c) => c.studentId === st.id);
            return (
              <div key={st.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
                <div className="flex items-center space-x-3">
                  <img src={st.avatar} alt={st.fullName} className="w-12 h-12 rounded-xl object-cover" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{st.fullName}</h3>
                    <p className="text-xs text-slate-500">{st.currentInstitution}</p>
                    <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                      Target: {st.intendedDegree}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                  <Link href={`/students/${st.id}`} className="text-slate-700 font-semibold hover:underline">
                    Full Profile
                  </Link>
                  {camp && (
                    <button
                      onClick={() => setActiveCampaignForDonation(camp)}
                      className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-sm flex items-center space-x-1"
                    >
                      <Heart className="w-3.5 h-3.5 fill-white" />
                      <span>Donate</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DonorDashboardLayout>
  );
}

