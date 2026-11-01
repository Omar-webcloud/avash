'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronDown, ChevronUp, GraduationCap, Heart, Building2, ShieldCheck } from 'lucide-react';

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      category: 'For Students',
      icon: GraduationCap,
      q: 'Who is eligible to create a funding campaign on Avash?',
      a: 'Any Bangladeshi citizen preparing for or admitted to an accredited international higher education program (Bachelors, Masters, PhD, or Postdoctoral study). You must submit valid academic evidence (such as graduation transcripts, standardized test scores, or formal university admission offers) for human review.',
    },
    {
      category: 'For Students',
      icon: GraduationCap,
      q: 'What expenses can I raise funds for?',
      a: 'Legitimate education-related expenses: standardized test fees (IELTS, TOEFL, GRE), university application fees, credential evaluation (WES, Uni-Assist), foreign university tuition deposits, visa fees (SEVIS, DS-160, UK IHS), international airfare, and initial dormitory deposits.',
    },
    {
      category: 'For Students',
      icon: GraduationCap,
      q: 'Does Avash guarantee university admission or visas?',
      a: 'No. Avash does not guarantee admissions or visas, nor does it provide immigration consultancy. We are purely a financial support and scholarship enablement platform connecting deserving talent with community funding.',
    },
    {
      category: 'For Donors',
      icon: Heart,
      q: 'How do I know my donation is going to a genuine student?',
      a: 'Every student’s credentials (national ID/passport, academic transcripts, test report forms, and offer letters) are authenticated by human academic reviewers before a campaign is published. Furthermore, funds are disbursed against verified receipts.',
    },
    {
      category: 'For Donors',
      icon: Heart,
      q: 'Can I donate anonymously?',
      a: 'Yes! You can toggle "Make my donation anonymous" during checkout. Your name will be hidden from the public campaign wall, while Avash retains required compliance and audit records internally.',
    },
    {
      category: 'For Donors',
      icon: Heart,
      q: 'Do I get a digital receipt for tax and tracking purposes?',
      a: 'Yes, every donation instantly generates an official Avash Digital Donation Receipt containing a unique receipt number, timestamp, beneficiary details, payment method, and cryptographic transaction hash.',
    },
    {
      category: 'For Organizations',
      icon: Building2,
      q: 'How can foundations and companies publish scholarships?',
      a: 'Organizations can register on Avash, receive institutional verification, and publish tailored scholarship listings specifying target fields (such as STEM, Green Energy, Economics), budget, and eligibility criteria. You can review verified applicant dossiers directly in your organization portal.',
    },
    {
      category: 'Security & Fees',
      icon: ShieldCheck,
      q: 'Does Avash take a cut or commission from student donations?',
      a: 'Avash charges 0% platform commission on student funds. 100% of the funds raised for a student go directly toward their verified expenses. The only optional charge is standard third-party payment gateway fees (~1.5%), which donors can choose to cover during checkout.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          Knowledge Base
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
          Everything you need to know about the Avash platform, verification policies, escrow security, and student eligibility.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          const Icon = faq.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition"
            >
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-xl bg-slate-100 text-slate-700 shrink-0">
                    <Icon className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">
                      {faq.category}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm">{faq.q}</h3>
                  </div>
                </div>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed bg-slate-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="text-center pt-6 text-xs text-slate-500">
        Still have questions? Check out our{' '}
        <Link href="/contact" className="text-emerald-700 font-bold underline">
          Contact & Support
        </Link>{' '}
        page or email info@avash.org.bd
      </div>
    </div>
  );
}

