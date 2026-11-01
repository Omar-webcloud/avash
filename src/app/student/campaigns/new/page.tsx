'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { StudentDashboardLayout } from '@/components/layout/StudentDashboardLayout';
import { useApp } from '@/context/AppContext';
import { Plus, Trash2, CheckCircle2, Megaphone, ArrowRight } from 'lucide-react';
import { FundingCategory, ExpenseItem } from '@/types';

export default function NewCampaignPage() {
  const router = useRouter();
  const { createCampaign, currentUser, students } = useApp();
  const student = students.find((s) => s.id === 'std-nafis') || students[0];

  const [title, setTitle] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [targetUniversity, setTargetUniversity] = useState(student.targetUniversities[0] || 'Oxford University');
  const [destinationCountry, setDestinationCountry] = useState(student.targetCountry || 'United Kingdom');
  const [intendedDegree, setIntendedDegree] = useState(student.intendedDegree || 'MS in Computer Science');
  const [admissionStatus, setAdmissionStatus] = useState(student.admissionStatus || 'Admitted');
  const [deadline, setDeadline] = useState('2026-12-31');

  // Dynamic expense list
  const [expenses, setExpenses] = useState<ExpenseItem[]>([
    {
      id: 'e-1',
      category: 'Visa & SEVIS Fees',
      title: 'US Embassy Visa MRV Fee & SEVIS Fee',
      amountBDT: 65000,
      note: 'Required for F-1 visa appointment in Dhaka',
    },
    {
      id: 'e-2',
      category: 'Flight & Travel',
      title: 'Dhaka to Destination Student Flight Ticket',
      amountBDT: 95000,
      note: 'Economy student ticket with luggage',
    },
  ]);

  const [expenseTitle, setExpenseTitle] = useState('');
  const [expenseCat, setExpenseCat] = useState<FundingCategory>('Tuition Deposit');
  const [expenseAmount, setExpenseAmount] = useState<string>('50000');
  const [expenseNote, setExpenseNote] = useState('');

  const totalGoal = expenses.reduce((sum, e) => sum + e.amountBDT, 0);

  const categories: FundingCategory[] = [
    'IELTS/TOEFL/GRE Exams',
    'University Application Fees',
    'Academic Document & Evaluation',
    'Tuition Deposit',
    'Visa & SEVIS Fees',
    'Flight & Travel',
    'Initial Living & Accommodation',
    'Research & Books',
  ];

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!expenseTitle || !expenseAmount) return;
    const item: ExpenseItem = {
      id: `exp-${Date.now()}`,
      category: expenseCat,
      title: expenseTitle,
      amountBDT: parseFloat(expenseAmount) || 0,
      note: expenseNote,
      receiptVerified: false,
    };
    setExpenses([...expenses, item]);
    setExpenseTitle('');
    setExpenseNote('');
  };

  const handleRemoveExpense = (id: string) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const handleCreateCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) {
      alert('Please provide a campaign title.');
      return;
    }
    if (expenses.length === 0) {
      alert('Please add at least one itemized expense item.');
      return;
    }

    createCampaign({
      title,
      introduction,
      targetUniversity,
      destinationCountry,
      intendedDegree,
      admissionStatus,
      fundingGoalBDT: totalGoal,
      deadline,
      expenses,
      studentId: student.id,
      studentName: student.fullName,
      studentAvatar: student.avatar,
      studentCity: student.city,
      studentInstitution: student.currentInstitution,
      milestones: [
        { id: `m-${Date.now()}`, title: 'Campaign Published on Avash', completed: true, completedAt: new Date().toISOString().split('T')[0] },
        { id: `m-${Date.now() + 1}`, title: 'Initial Milestone Payout Receipt Verification', completed: false, targetDate: deadline },
      ],
    });

    alert('Campaign successfully submitted for human verification and published!');
    router.push('/student/campaigns');
  };

  return (
    <StudentDashboardLayout>
      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-8">
        <div className="border-b border-slate-100 pb-4">
          <div className="flex items-center space-x-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
            <Megaphone className="w-4 h-4" />
            <span>Campaign Creation Wizard</span>
          </div>
          <h1 className="text-2xl font-black text-slate-900">
            Launch an Educational Funding Campaign
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            All expenses must be itemized and verified before disbursement (PRD Section 5.4)
          </p>
        </div>

        <form onSubmit={handleCreateCampaign} className="space-y-6 text-xs">
          {/* Basic Campaign Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2">
              1. Campaign Overview
            </h3>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Campaign Headline Title</label>
              <input
                type="text"
                required
                placeholder="e.g. Support Nafis’s Relocation for MS in Computer Science at Georgia Tech"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Introduction & Academic Motivation</label>
              <textarea
                rows={3}
                required
                placeholder="Describe your foreign admission, research focus, and why you are seeking community support..."
                value={introduction}
                onChange={(e) => setIntroduction(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs leading-relaxed"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Target University</label>
                <input
                  type="text"
                  required
                  value={targetUniversity}
                  onChange={(e) => setTargetUniversity(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Destination Country</label>
                <input
                  type="text"
                  required
                  value={destinationCountry}
                  onChange={(e) => setDestinationCountry(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Campaign Deadline</label>
                <input
                  type="date"
                  required
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                />
              </div>
            </div>
          </div>

          {/* Itemized Expenses (PRD 5.4) */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">2. Itemized Expense Breakdown</h3>
                <p className="text-[11px] text-slate-500">Every Taka must correspond to a verified expense</p>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-slate-500 block">Total Goal</span>
                <span className="text-base font-black text-emerald-700">৳ {totalGoal.toLocaleString()}</span>
              </div>
            </div>

            {/* List of expenses */}
            <div className="space-y-2">
              {expenses.map((exp) => (
                <div
                  key={exp.id}
                  className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-3"
                >
                  <div>
                    <span className="font-bold text-slate-900">{exp.title}</span>
                    <div className="flex items-center space-x-2 text-[11px] text-slate-500">
                      <span className="bg-white px-2 py-0.5 rounded border border-slate-200">{exp.category}</span>
                      {exp.note && <span>• {exp.note}</span>}
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <strong className="text-slate-900 text-xs">৳ {exp.amountBDT.toLocaleString()}</strong>
                    <button
                      type="button"
                      onClick={() => handleRemoveExpense(exp.id)}
                      className="text-slate-400 hover:text-rose-600 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Add expense inline box */}
            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-3">
              <span className="font-bold text-emerald-950 block">Add Expense Item</span>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div className="sm:col-span-2">
                  <input
                    type="text"
                    placeholder="Expense title (e.g. IELTS Exam Fee, Campus Dorm Deposit)"
                    value={expenseTitle}
                    onChange={(e) => setExpenseTitle(e.target.value)}
                    className="w-full px-3 py-2 bg-white rounded-lg border border-emerald-200 text-xs"
                  />
                </div>
                <div>
                  <select
                    value={expenseCat}
                    onChange={(e) => setExpenseCat(e.target.value as any)}
                    className="w-full px-3 py-2 bg-white rounded-lg border border-emerald-200 text-xs"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Amount in BDT"
                    value={expenseAmount}
                    onChange={(e) => setExpenseAmount(e.target.value)}
                    className="w-full px-3 py-2 bg-white rounded-lg border border-emerald-200 text-xs"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Note / Quotation reference (optional)"
                  value={expenseNote}
                  onChange={(e) => setExpenseNote(e.target.value)}
                  className="flex-1 px-3 py-2 bg-white rounded-lg border border-emerald-200 text-xs"
                />
                <button
                  type="button"
                  onClick={handleAddExpense}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs"
                >
                  + Add Line Item
                </button>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-end space-x-3">
            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow-lg shadow-emerald-600/20 flex items-center space-x-2"
            >
              <span>Submit & Publish Campaign (Goal ৳ {totalGoal.toLocaleString()})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </StudentDashboardLayout>
  );
}

