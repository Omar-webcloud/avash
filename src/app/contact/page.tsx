'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Contact & Community Hub
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm">
          Have questions about the platform, want to partner as an organization, or want to volunteer as a reviewer? Reach out to our team in Dhaka.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6">
          <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
            Contact Information
          </h2>

          <div className="space-y-4 text-xs">
            <div className="flex items-start space-x-3 text-slate-700">
              <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">Dhaka Pilot Hub:</strong>
                <span>Banani Model Town & BUET Alumni Center, Dhaka, Bangladesh</span>
              </div>
            </div>

            <div className="flex items-start space-x-3 text-slate-700">
              <Mail className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">Email Support:</strong>
                <span>contact@avash.org.bd</span>
                <span className="block text-[11px] text-slate-400">verification@avash.org.bd</span>
              </div>
            </div>

            <div className="flex items-start space-x-3 text-slate-700">
              <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">Helpline:</strong>
                <span>+880 2-8834921 / +880 1711-AVASH</span>
                <span className="block text-[11px] text-slate-400">Sun - Thu, 10 AM - 6 PM BST</span>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 text-xs text-emerald-900 space-y-1">
            <span className="font-bold block">Developer & Volunteer Network</span>
            <p className="text-[11px] leading-relaxed">
              We welcome open-source developers, academic reviewers, and student mentors. Check out our GitHub repository or drop us a note!
            </p>
          </div>
        </div>

        {/* Message Form */}
        <div className="md:col-span-2 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl text-slate-900">Message Received!</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out to Avash. A member of our community coordination team will respond to your email within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Send us an inquiry</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tanvir Ahmed"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. tanvir@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Inquiry Type / Subject</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Institutional Partnership or Student Verification Query"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we help you?..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow-md flex items-center space-x-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Transmit Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

