import React, { useEffect, useRef, useState } from 'react';
import { X, Check, ArrowRight, Filter } from 'lucide-react';

interface PackagePricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPackage: (packageLabels: string[], price: number, prices: number[]) => void;
}

interface PackageOption {
  id: string;
  label: string;
  price: number;
  features?: string[];
  popular?: boolean;
}

interface ExperienceTier {
  id: 'fresh-graduate' | 'growth' | 'advance' | 'c-suite' | 'ngo';
  name: string;
  experience: string;
  badgeClass: string;
  accentBorder: string;
  options: PackageOption[];
}

const EXPERIENCE_PACKAGES: ExperienceTier[] = [
  {
    id: 'fresh-graduate',
    name: 'Fresh Graduate',
    experience: '0 to 1 Yr Experience',
    badgeClass: 'bg-amber-400/10 text-amber-300 border-amber-400/30',
    accentBorder: 'border-amber-400 bg-amber-400/10',
    options: [
      { id: 'fg-ats', label: 'ATS CV + Cover Letter', price: 1499 },
      { id: 'fg-modern', label: 'Modern CV + Cover Letter', price: 2499 },
      { id: 'fg-both', label: 'ATS CV + Modern CV + Cover Letter', price: 3499 },
      { id: 'fg-full', label: 'ATS CV + Modern CV + Cover Letter + LinkedIn', price: 5499 },
    ],
  },
  {
    id: 'growth',
    name: 'Growth Package',
    experience: '2 to 5 Yrs Experience',
    badgeClass: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/30',
    accentBorder: 'border-cyan-400 bg-cyan-400/10',
    options: [
      { id: 'gr-ats', label: 'ATS CV + Cover Letter', price: 1999 },
      { id: 'gr-modern', label: 'Modern CV + Cover Letter', price: 2999 },
      { id: 'gr-both', label: 'ATS CV + Modern CV + Cover Letter', price: 3999 },
      { id: 'gr-full', label: 'ATS CV + Modern CV + Cover Letter + LinkedIn', price: 5999 },
    ],
  },
  {
    id: 'advance',
    name: 'Advance Package',
    experience: '6 to 10 Yrs Experience',
    badgeClass: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/30',
    accentBorder: 'border-emerald-400 bg-emerald-400/10',
    options: [
      { id: 'ad-ats', label: 'ATS CV + Cover Letter', price: 2499 },
      { id: 'ad-modern', label: 'Modern CV + Cover Letter', price: 3499 },
      { id: 'ad-both', label: 'ATS CV + Modern CV + Cover Letter', price: 4499 },
      { id: 'ad-full', label: 'ATS CV + Modern CV + Cover Letter + LinkedIn', price: 6499 },
    ],
  },
  {
    id: 'c-suite',
    name: 'C-Suite Package',
    experience: '11+ Yrs Experience',
    badgeClass: 'bg-amber-400/15 text-amber-200 border-amber-400/40',
    accentBorder: 'border-amber-400 bg-amber-400/10',
    options: [
      { id: 'cs-ats', label: 'ATS CV + Cover Letter', price: 2999 },
      { id: 'cs-modern', label: 'Modern CV + Cover Letter', price: 3999 },
      { id: 'cs-both', label: 'ATS CV + Modern CV + Cover Letter', price: 4999 },
      { id: 'cs-full', label: 'ATS CV + Modern CV + Cover Letter + LinkedIn', price: 6999 },
    ],
  },
  {
    id: 'ngo',
    name: 'NGO Career Packages',
    experience: 'For people entering the NGO sector',
    badgeClass: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/30',
    accentBorder: 'border-emerald-400 bg-emerald-400/10',
    options: [
      { id: 'ngo-basic', label: 'Basic', price: 5000, features: ['ATS Compliant CV', 'Modern CV', 'Cover Letter'] },
      { id: 'ngo-standard', label: 'Standard', price: 7000, popular: true, features: ['ATS Compliant CV', 'Modern CV', 'Cover Letter', 'LinkedIn Optimization'] },
      { id: 'ngo-premium', label: 'Premium', price: 9000, features: ['ATS Compliant CV', 'Modern CV', 'Cover Letter', 'LinkedIn Optimization', 'Professional Bio', 'Free access to the NGO jobs WhatsApp group'] },
    ],
  },
];

type TierFilter = 'all' | ExperienceTier['id'];

export const PackagePricingModal: React.FC<PackagePricingModalProps> = ({
  isOpen,
  onClose,
  onSelectPackage,
}) => {
  const [activeFilter, setActiveFilter] = useState<TierFilter>('all');
  const [selectedOptionIds, setSelectedOptionIds] = useState<string[]>([]);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusable = () => Array.from(dialogRef.current?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], input, select, textarea, [tabindex="0"]') || []);
    focusable()[0]?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { onClose(); return; }
      if (event.key !== 'Tab') return;
      const elements = focusable();
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const visibleTiers =
    activeFilter === 'all'
      ? EXPERIENCE_PACKAGES
      : EXPERIENCE_PACKAGES.filter((tier) => tier.id === activeFilter);

  const selectedEntries = EXPERIENCE_PACKAGES.flatMap((tier) =>
    tier.options.map((opt) => ({
      tierName: tier.name,
      experience: tier.experience,
      ...opt,
    }))
  ).filter((entry) => selectedOptionIds.includes(entry.id));

  const totalPrice = selectedEntries.reduce((total, entry) => total + entry.price, 0);

  const handleConfirm = () => {
    if (selectedEntries.length === 0) return;
    onSelectPackage(
      selectedEntries.map(entry =>
        entry.tierName + ' (' + entry.experience + '): ' + entry.label + (entry.features ? '\nIncludes: ' + entry.features.join(', ') : '')
      ),
      totalPrice,
      selectedEntries.map(entry => entry.price)
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="career-package-title" className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 transition-colors cursor-pointer"
          aria-label="Close package pricing"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-10">
          <h3 id="career-package-title" className="text-xl sm:text-2xl font-bold text-neutral-100">
            CV &amp; Career Service Packages
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Select your packages, review the total, and send your order on WhatsApp.
          </p>
        </div>

        {/* Experience Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6 pb-4 border-b border-neutral-800">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-400 mr-1">
            <Filter className="w-3.5 h-3.5 text-amber-400" />
            <span>Filter:</span>
          </span>
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-amber-400 text-neutral-950 border-amber-400'
                : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700'
            }`}
          >
            All Packages
          </button>
          {EXPERIENCE_PACKAGES.map((tier) => (
            <button
              key={tier.id}
              type="button"
              onClick={() => {
                setActiveFilter(tier.id);
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                activeFilter === tier.id
                  ? 'bg-amber-400 text-neutral-950 border-amber-400'
                  : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {tier.id === 'ngo' ? tier.name : `${tier.name} (${tier.experience.replace(' Experience', '')})`}
            </button>
          ))}
        </div>

        {/* Filtered Package Grid */}
        <div
          className={`grid gap-4 ${
            visibleTiers.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
          }`}
        >
          {visibleTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 sm:p-5 flex flex-col ${tier.id === 'ngo' && visibleTiers.length > 1 ? 'md:col-span-2' : ''}`}
            >
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-neutral-800">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-neutral-100">
                    {tier.name}
                  </h4>
                  <p className="text-xs text-neutral-400">{tier.experience}</p>
                </div>
                <span
                  className={`px-2.5 py-1 text-[11px] font-semibold rounded-md border ${tier.badgeClass}`}
                >
                  {tier.experience.replace(' Experience', '')}
                </span>
              </div>

              {tier.id === 'ngo' && <p className="mb-5 text-sm leading-relaxed text-neutral-300">Looking to enter the NGO sector without prior experience? Choose the career support package that suits your next step.</p>}
              <div className={tier.id === 'ngo' ? 'grid grid-cols-1 md:grid-cols-3 gap-3' : 'space-y-2'}>
                {tier.options.map((option) => {
                  const isSelected = selectedOptionIds.includes(option.id);
                  return (
                    <button
                      key={option.id}
                      type="button"
                      role="checkbox"
                      aria-checked={isSelected}
                      onClick={() => setSelectedOptionIds(current =>
                        current.includes(option.id)
                          ? current.filter(id => id !== option.id)
                          : [...current.filter(id => !option.id.startsWith('ngo-') || !id.startsWith('ngo-')), option.id]
                      )}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-left transition-all flex ${tier.id === 'ngo' ? 'flex-col items-stretch justify-start gap-4' : 'items-center justify-between gap-3'} cursor-pointer ${
                        isSelected
                          ? tier.accentBorder
                          : 'border-neutral-800 bg-neutral-950/70 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span
                          className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                            isSelected
                              ? 'bg-amber-400 border-amber-400 text-neutral-950'
                              : 'border-neutral-700 bg-neutral-950'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </span>
                        <span className="text-xs sm:text-sm text-neutral-200 font-medium leading-snug">
                          {option.label}{option.popular && <span className="ml-2 inline-block rounded-full bg-amber-400/15 px-2 py-1 text-[10px] font-semibold text-amber-300">Popular</span>}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm font-sans font-bold text-amber-400 shrink-0 tabular-nums">
                        {tier.id === 'ngo' ? `KSh ${option.price.toLocaleString()}` : option.price.toLocaleString()}
                      </span>
                      {option.features && <span className="flex flex-col gap-3">{option.features.map(feature => <span key={feature} className="flex items-start gap-2 text-xs leading-relaxed text-neutral-300"><Check className="mt-0.5 size-3.5 shrink-0 text-emerald-400" aria-hidden="true" /><span>{feature}</span></span>)}</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Action Bar */}
        <div className="mt-6 pt-4 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="text-xs text-neutral-400">
            {selectedEntries.length > 0 ? (
              <div aria-live="polite">
                <p className="font-semibold text-neutral-100">
                  {selectedEntries.length} selected | Total {totalPrice.toLocaleString()}
                </p>
                <ul className="mt-2 space-y-1">
                  {selectedEntries.map(entry => (
                    <li key={entry.id}>{entry.tierName} | {entry.label}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <span>Select package options above to proceed.</span>
            )}
          </div>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              disabled={selectedEntries.length === 0}
              className="px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Checkout on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
