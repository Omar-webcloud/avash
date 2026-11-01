'use client';

import React, { useState } from 'react';
import { StudentDashboardLayout } from '@/components/layout/StudentDashboardLayout';
import { useApp } from '@/context/AppContext';
import { Save, CheckCircle2 } from 'lucide-react';

export default function StudentEducationPage() {
  const { students, updateStudentProfile } = useApp();
  const student = students.find((s) => s.id === 'std-nafis') || students[0];

  const [currentInstitution, setCurrentInstitution] = useState(student.currentInstitution);
  const [academicResults, setAcademicResults] = useState(student.academicResults);
  const [intendedDegree, setIntendedDegree] = useState(student.intendedDegree);
  const [preferredSubject, setPreferredSubject] = useState(student.preferredSubject);
  const [targetCountry, setTargetCountry] = useState(student.targetCountry);
  const [targetUniversities, setTargetUniversities] = useState(student.targetUniversities.join(', '));
  const [admissionStatus, setAdmissionStatus] = useState(student.admissionStatus);
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateStudentProfile({
      currentInstitution,
      academicResults,
      intendedDegree,
      preferredSubject,
      targetCountry,
      targetUniversities: targetUniversities.split(',').map((u) => u.trim()),
      admissionStatus: admissionStatus as any,
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <StudentDashboardLayout>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-3">
          <h2 className="text-base font-bold text-slate-900">Education & Target Universities</h2>
          <p className="text-xs text-slate-500">Academic credentials and overseas destination plans (PRD 5.2)</p>
        </div>

        {saved && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Educational information saved successfully!</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Current / Previous Institution (Bangladesh)</label>
              <input
                type="text"
                value={currentInstitution}
                onChange={(e) => setCurrentInstitution(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                required
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Academic Results (CGPA / Marks)</label>
              <input
                type="text"
                value={academicResults}
                onChange={(e) => setAcademicResults(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                required
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Intended Degree Level</label>
              <select
                value={intendedDegree}
                onChange={(e) => setIntendedDegree(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
              >
                <option value="MS in Computer Science">MS in Computer Science</option>
                <option value="MSc in Development Studies">MSc in Development Studies</option>
                <option value="MSc Power Engineering">MSc Power Engineering</option>
                <option value="PhD in Molecular Oncology">PhD in Molecular Oncology</option>
                <option value="Bachelors">Bachelors Degree</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Preferred Academic Field</label>
              <input
                type="text"
                value={preferredSubject}
                onChange={(e) => setPreferredSubject(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                required
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Destination Country</label>
              <input
                type="text"
                value={targetCountry}
                onChange={(e) => setTargetCountry(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                required
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Admission Status</label>
              <select
                value={admissionStatus}
                onChange={(e) => setAdmissionStatus(e.target.value as any)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
              >
                <option value="Admitted">Admitted</option>
                <option value="Conditional Offer">Conditional Offer</option>
                <option value="Application Submitted">Application Submitted</option>
                <option value="Preparing Applications">Preparing Applications</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Target Universities (comma separated)</label>
            <input
              type="text"
              value={targetUniversities}
              onChange={(e) => setTargetUniversities(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
              required
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition shadow flex items-center space-x-1.5"
            >
              <Save className="w-4 h-4" />
              <span>Save Education Details</span>
            </button>
          </div>
        </form>
      </div>
    </StudentDashboardLayout>
  );
}

