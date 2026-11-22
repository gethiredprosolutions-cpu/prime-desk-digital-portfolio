import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedItems?: string[];
  estimatedPrice?: number;
  itemPrices?: (number | undefined)[];
  onChoosePackages?: () => void;
}


const SERVICE_OPTIONS = [
  {
    id: 'career-services',
    label: 'Career Services',
    detail: 'CV revamp & LinkedIn',
    activeClass: 'border-amber-400 bg-amber-400/10 text-neutral-100',
    dotClass: 'bg-amber-400',
  },
  {
    id: 'cyber-services',
    label: 'Cyber Services',
    detail: 'Documents & applications',
    activeClass: 'border-cyan-400 bg-cyan-400/10 text-neutral-100',
    dotClass: 'bg-cyan-400',
  },
  {
    id: 'web-development',
    label: 'Web Development',
    detail: 'Custom websites & apps',
    activeClass: 'border-emerald-400 bg-emerald-400/10 text-neutral-100',
    dotClass: 'bg-emerald-400',
  },
];

export const BookingModal: React.FC<BookingModalProps> = ({ 
  isOpen, 
  onClose, 
  preselectedItems = [], 
  estimatedPrice,
  itemPrices = [],
  onChoosePackages
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [excludedItems, setExcludedItems] = useState<string[]>([]);

  useEffect(() => {
    if (isOpen) {
      setExcludedItems([]);
      setIsSubmitted(false);
    }
  }, [isOpen, preselectedItems]);

  if (!isOpen) return null;

  const includedItems = preselectedItems.filter(item => !excludedItems.includes(item));
  const total = preselectedItems.reduce((sum, item, index) =>
    excludedItems.includes(item) ? sum : sum + (itemPrices[index] ?? 0), 0
  );
  const hasUnpricedItems = preselectedItems.some((item, index) =>
    !excludedItems.includes(item) && itemPrices[index] === undefined
  );

  const toggleService = (label: string) => {
    setSelectedServices((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header & Service Selection */}
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-100 pr-10">
                Book a Consultation
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 mb-3">
                Which services are you interested in?
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {SERVICE_OPTIONS.map((service) => {
                  const isSelected = selectedServices.includes(service.label);
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => toggleService(service.label)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-start justify-between gap-2 ${
                        isSelected
                          ? service.activeClass
                          : 'border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:border-neutral-700 hover:text-neutral-100'
                      }`}
                    >
                      <div>
                        <div className="text-xs sm:text-sm font-semibold">{service.label}</div>
                        <div className="text-[11px] text-neutral-400 mt-0.5">{service.detail}</div>
                      </div>
                      <span
                        className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isSelected
                            ? 'border-transparent ' + service.dotClass + ' text-neutral-950'
                            : 'border-neutral-700 bg-neutral-950'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mb-6 rounded-xl border border-amber-400/25 bg-neutral-900/60 p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h4 className="text-sm font-semibold text-neutral-100">Your service total</h4>
                <button type="button" onClick={onChoosePackages} className="text-xs text-cyan-300 underline underline-offset-4">
                  Choose packages
                </button>
              </div>
              <div className="space-y-2">
                {preselectedItems.map((item, index) => (
                  <label key={item} className="flex cursor-pointer items-start gap-3 rounded-lg bg-neutral-950/70 p-3 text-xs text-neutral-300">
                    <input
                      type="checkbox"
                      checked={!excludedItems.includes(item)}
                      onChange={() => setExcludedItems(current =>
                        current.includes(item) ? current.filter(label => label !== item) : [...current, item]
                      )}
                      className="mt-0.5 accent-amber-400"
                    />
                    <span className="flex-1">{item}</span>
                    <span className="shrink-0 font-mono text-amber-300">
                      {itemPrices[index]?.toLocaleString() ?? 'Quote required'}
                    </span>
                  </label>
                ))}
              </div>
              {preselectedItems.length === 0 && (
                <p className="text-xs text-neutral-400">Choose packages to calculate your total.</p>
              )}
              <div aria-live="polite" className="mt-4 flex items-center justify-between border-t border-neutral-700 pt-3">
                <span className="text-sm text-neutral-300">Estimated total</span>
                <strong className="font-mono text-xl text-amber-300">{total.toLocaleString()}</strong>
              </div>
              {(hasUnpricedItems || selectedServices.length > 0) && (
                <p className="mt-2 text-xs text-neutral-400">Additional service requests require a quote and are excluded from this total.</p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-lg px-3.5 py-2.5 text-sm text-neutral-100 placeholder-neutral-600 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. alex@example.com"
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-lg px-3.5 py-2.5 text-sm text-neutral-100 placeholder-neutral-600 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +44 7700 900123"
                  className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-lg px-3.5 py-2.5 text-sm text-neutral-100 placeholder-neutral-600 outline-none transition-all"
                />
              </div>

              {/* Privacy guarantee */}
              <div className="flex items-center gap-2 text-[11px] text-neutral-500 pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Your details are kept private and will only be used to contact you about your request.</span>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs font-medium text-neutral-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 rounded-lg transition-all shadow-md flex items-center gap-1.5"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Request Consultation'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success State */
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto mb-4">
              <Check className="w-7 h-7 stroke-[2.5]" />
            </div>

            <h3 className="text-2xl font-bold text-neutral-100 mb-2">
              Request Received, {fullName}!
            </h3>

            <p className="text-sm text-neutral-400 max-w-md mx-auto mb-6">
              Thank you for getting in touch. Our team will reach out to you at <strong className="text-neutral-200">{email}</strong> or <strong className="text-neutral-200">{phone}</strong> shortly.
            </p>

            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 max-w-sm mx-auto mb-6 text-left text-xs space-y-1.5 text-neutral-300">
              {selectedServices.length > 0 && (
                <div className="flex justify-between gap-4">
                  <span className="text-neutral-500 shrink-0">Services:</span>
                  <span className="text-neutral-200 text-right">{selectedServices.join(', ')}</span>
                </div>
              )}
              {includedItems.map(item => (
                <div key={item} className="text-neutral-200">{item}</div>
              ))}
              <div className="flex justify-between">
                <span className="text-neutral-500">Estimated total</span>
                <span className="font-mono text-amber-300">{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Phone Number:</span>
                <span className="font-mono text-emerald-400">{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Email:</span>
                <span className="text-cyan-400">{email}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
