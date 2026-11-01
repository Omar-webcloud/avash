'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { PaymentMethod, Donation } from '@/types';
import { X, ShieldCheck, Heart, Sparkles, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';

export const DonateModal: React.FC = () => {
  const { activeCampaignForDonation, setActiveCampaignForDonation, makeDonation, setActiveDonationForReceipt, currentUser } = useApp();

  const [amount, setAmount] = useState<number>(5000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('bKash');
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [coverFees, setCoverFees] = useState<boolean>(true);
  const [donorName, setDonorName] = useState<string>(currentUser.name || 'Tahmidur Rahman');
  const [donorEmail, setDonorEmail] = useState<string>(currentUser.email || 'tahmid.rahman@alumni.buet.ac.bd');
  const [message, setMessage] = useState<string>('Best wishes on your academic journey!');
  
  // Simulation steps: 'input' | 'gateway' | 'processing' | 'success'
  const [step, setStep] = useState<'input' | 'gateway' | 'processing' | 'success'>('input');
  const [simulatedAccountOrCard, setSimulatedAccountOrCard] = useState<string>('017XXXXXXXX');
  const [simulatedPin, setSimulatedPin] = useState<string>('');
  const [completedDonation, setCompletedDonation] = useState<Donation | null>(null);

  if (!activeCampaignForDonation) return null;

  const effectiveAmount = customAmount ? parseFloat(customAmount) || 0 : amount;
  const processingFee = coverFees ? Math.round(effectiveAmount * 0.015) : 0;
  const totalAmountToPay = effectiveAmount + processingFee;

  const presetAmounts = [1000, 2500, 5000, 10000, 25000, 50000];

  const handleProceedToGateway = (e: React.FormEvent) => {
    e.preventDefault();
    if (effectiveAmount < 100) {
      alert('Minimum contribution is ৳100');
      return;
    }
    setStep('gateway');
  };

  const handleSimulatePayment = () => {
    setStep('processing');
    setTimeout(() => {
      try {
        const donation = makeDonation({
          campaignId: activeCampaignForDonation.id,
          amountBDT: effectiveAmount,
          paymentMethod,
          donorName,
          donorEmail,
          isAnonymous,
          message,
        });
        setCompletedDonation(donation);
        setStep('success');
      } catch (err) {
        alert('Payment simulation error');
        setStep('input');
      }
    }, 1200);
  };

  const handleClose = () => {
    setActiveCampaignForDonation(null);
    setStep('input');
    setCustomAmount('');
    setCompletedDonation(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-slate-900 text-white p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 bg-emerald-500/20 rounded-lg">
                <Heart className="w-5 h-5 text-emerald-400 fill-emerald-400/30" />
              </span>
              <div>
                <h3 className="font-bold text-lg leading-tight">Support {activeCampaignForDonation.studentName}</h3>
                <p className="text-xs text-emerald-200">
                  {activeCampaignForDonation.intendedDegree} • {activeCampaignForDonation.targetUniversity}
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {step === 'input' && (
            <form onSubmit={handleProceedToGateway} className="space-y-5">
              {/* Preset Amounts */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Select Contribution Amount (BDT ৳)
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => {
                        setAmount(preset);
                        setCustomAmount('');
                      }}
                      className={`py-2.5 px-3 rounded-xl font-medium text-sm transition border ${
                        !customAmount && amount === preset
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-emerald-50 hover:border-emerald-200'
                      }`}
                    >
                      ৳ {preset.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center font-bold text-slate-400">
                    ৳
                  </span>
                  <input
                    type="number"
                    min="100"
                    placeholder="Or enter custom amount in BDT"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full pl-8 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Payment Method (Bangladesh & International)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(
                    [
                      { id: 'bKash', label: 'bKash (বিকাশ)', color: 'border-pink-300 text-pink-700 bg-pink-50/50' },
                      { id: 'Nagad', label: 'Nagad (নগদ)', color: 'border-orange-300 text-orange-700 bg-orange-50/50' },
                      { id: 'Rocket', label: 'Rocket (রকেট)', color: 'border-purple-300 text-purple-700 bg-purple-50/50' },
                      { id: 'Credit/Debit Card', label: 'Visa / Mastercard', color: 'border-blue-300 text-blue-700 bg-blue-50/50' },
                    ] as const
                  ).map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setPaymentMethod(m.id as any)}
                      className={`p-3 rounded-xl border text-left text-xs font-semibold transition flex items-center justify-between ${
                        paymentMethod === m.id
                          ? 'border-emerald-600 bg-emerald-50/80 text-emerald-900 ring-2 ring-emerald-500'
                          : `${m.color} hover:opacity-90`
                      }`}
                    >
                      <span>{m.label}</span>
                      {paymentMethod === m.id && <CheckCircle className="w-4 h-4 text-emerald-600" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Donor Details */}
              <div className="space-y-3 pt-1 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-700">Donor Information</label>
                  <label className="flex items-center space-x-1.5 text-xs text-slate-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="rounded text-emerald-600 focus:ring-emerald-500"
                    />
                    <span>Make my donation public display anonymous</span>
                  </label>
                </div>
                {!isAnonymous && (
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                      required={!isAnonymous}
                    />
                    <input
                      type="email"
                      placeholder="Email (for digital receipt)"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                      required
                    />
                  </div>
                )}
                <input
                  type="text"
                  placeholder="Words of encouragement for student (optional)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                />
              </div>

              {/* Fee Breakdown & Transparency */}
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 text-xs space-y-1.5">
                <div className="flex justify-between text-slate-600">
                  <span>Student Fund (100% directly allocated):</span>
                  <span className="font-semibold text-slate-800">৳ {effectiveAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Platform Commission:</span>
                  <span className="font-semibold text-emerald-600">৳ 0 (Open Source / Free)</span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-slate-200">
                  <label className="flex items-center space-x-2 text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={coverFees}
                      onChange={(e) => setCoverFees(e.target.checked)}
                      className="rounded text-emerald-600"
                    />
                    <span>Optional 1.5% gateway charge:</span>
                  </label>
                  <span className="font-semibold text-slate-800">৳ {processingFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-slate-300 font-bold text-slate-900 text-sm">
                  <span>Total Contribution:</span>
                  <span className="text-emerald-700">৳ {totalAmountToPay.toLocaleString()}</span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition shadow-lg shadow-emerald-600/20 flex items-center justify-center space-x-2"
              >
                <span>Continue with {paymentMethod} (৳ {totalAmountToPay.toLocaleString()})</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center space-x-1.5 text-slate-400 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Secure Sandbox Gateway Simulation • Digital Receipt Provided</span>
              </div>
            </form>
          )}

          {step === 'gateway' && (
            <div className="space-y-5">
              <div className="text-center">
                <div className="inline-flex p-3 rounded-2xl bg-emerald-50 text-emerald-700 mb-2">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">
                  {paymentMethod} Secure Payment Gateway
                </h4>
                <p className="text-xs text-slate-500">
                  Simulating merchant checkout for ৳ {totalAmountToPay.toLocaleString()}
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {paymentMethod === 'Credit/Debit Card' ? 'Card Number (Simulated)' : `${paymentMethod} Mobile Number`}
                  </label>
                  <input
                    type="text"
                    value={simulatedAccountOrCard}
                    onChange={(e) => setSimulatedAccountOrCard(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {paymentMethod === 'Credit/Debit Card' ? 'CVV' : 'Simulated PIN / OTP Code'}
                  </label>
                  <input
                    type="password"
                    placeholder="••••"
                    value={simulatedPin}
                    onChange={(e) => setSimulatedPin(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-mono tracking-widest"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">
                    Enter any 4-digit PIN for instant simulated approval.
                  </p>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setStep('input')}
                  className="w-1/3 py-3 border border-slate-200 rounded-xl text-slate-600 font-medium text-xs hover:bg-slate-50 transition"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleSimulatePayment}
                  className="w-2/3 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-xs transition shadow-md flex items-center justify-center space-x-1.5"
                >
                  <span>Confirm Payment ৳ {totalAmountToPay.toLocaleString()}</span>
                  <CheckCircle className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 'processing' && (
            <div className="py-12 text-center space-y-4">
              <Loader2 className="w-10 h-10 text-emerald-600 animate-spin mx-auto" />
              <h4 className="font-bold text-slate-900 text-base">Processing Transaction...</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Reconciling payment with {paymentMethod} bank server and generating anti-fraud cryptographic receipt hash.
              </p>
            </div>
          )}

          {step === 'success' && completedDonation && (
            <div className="py-4 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <Sparkles className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Thank You For Your Support!</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Your contribution of <strong className="text-emerald-700">৳ {completedDonation.amountBDT.toLocaleString()}</strong> has been credited towards <strong className="text-slate-800">{activeCampaignForDonation.studentName}</strong>.
                </p>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Receipt Number:</span>
                  <span className="font-mono font-bold text-slate-800">{completedDonation.receiptNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Transaction Hash:</span>
                  <span className="font-mono text-slate-700 text-[11px] truncate max-w-[200px]">{completedDonation.transactionHash}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Status:</span>
                  <span className="inline-flex items-center text-emerald-700 font-bold">
                    <CheckCircle className="w-3.5 h-3.5 mr-1" /> Reconciled & Confirmed
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setActiveDonationForReceipt(completedDonation);
                    handleClose();
                  }}
                  className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs rounded-xl transition shadow"
                >
                  View / Print Official Receipt
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs rounded-xl transition"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

