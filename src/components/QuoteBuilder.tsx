import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, X, Calculator, ShieldCheck, Briefcase, Code } from 'lucide-react';

interface QuoteBuilderProps {
  initialServiceId?: string;
  onProceedToBooking: (selectedItems: string[], totalPrice: number) => void;
  onClose?: () => void;
}

interface ServiceOption {
  id: string;
  category: 'career' | 'cyber' | 'web';
  name: string;
  price: number;
  deliveryDays: number;
  description: string;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  // Career Services
  {
    id: 'cv-revamp',
    category: 'career',
    name: 'Executive CV & Resume Re-Engineering',
    price: 320,
    deliveryDays: 3,
    description: 'ATS-compliant overhaul with quantified metrics and high-impact action verbs.'
  },
  {
    id: 'linkedin-optimization',
    category: 'career',
    name: 'LinkedIn Authority & Profile Optimization',
    price: 260,
    deliveryDays: 2,
    description: 'Recruiter boolean search indexing, headline re-write, and About storytelling.'
  },
  {
    id: 'cover-letter-pitch',
    category: 'career',
    name: 'Targeted Executive Cover Letter / Memo',
    price: 180,
    deliveryDays: 2,
    description: 'Bespoke pitch document customized for high-stakes executive applications.'
  },
  {
    id: 'interview-coaching',
    category: 'career',
    name: 'Interview Mastery & Mock Coaching',
    price: 350,
    deliveryDays: 1,
    description: '90-min live behavioral interview simulation and reverse-interrogation strategy.'
  },
  {
    id: 'salary-negotiation',
    category: 'career',
    name: 'Executive Salary & Compensation Blueprint',
    price: 290,
    deliveryDays: 1,
    description: 'Data-backed compensation benchmarking and counter-offer negotiation scripts.'
  },
  {
    id: 'executive-bio',
    category: 'career',
    name: 'Executive Bio & Board / Advisory One-Pager',
    price: 240,
    deliveryDays: 2,
    description: 'Third-person executive biography and 1-page dossier for board appointments.'
  },
  {
    id: 'job-search-outbound',
    category: 'career',
    name: 'Hidden Job Market & Recruiter Outbound Roadmap',
    price: 310,
    deliveryDays: 3,
    description: 'Outbound templates, recruiter firm lists, and hiring manager outreach blueprints.'
  },
  {
    id: 'career-pivot',
    category: 'career',
    name: 'Career Transition & Strategic Re-Branding',
    price: 380,
    deliveryDays: 4,
    description: 'Complete narrative re-framing for industry pivots and executive elevation.'
  },

  // Cyber Services
  {
    id: 'osint-audit',
    category: 'cyber',
    name: 'Executive Digital Footprint & OSINT Audit',
    price: 420,
    deliveryDays: 4,
    description: 'Deep public/dark web surveillance, data broker removal, and credential breach scan.'
  },
  {
    id: 'device-hardening',
    category: 'cyber',
    name: 'Hardware Security Key (YubiKey) & Device Hardening',
    price: 580,
    deliveryDays: 3,
    description: 'FIDO2 zero-trust key architecture, password vault security, and encrypted comms.'
  },

  // Web Services
  {
    id: 'bespoke-portfolio',
    category: 'web',
    name: 'Bespoke Personal Brand Web Architecture',
    price: 1200,
    deliveryDays: 7,
    description: 'Hand-crafted React/Tailwind site with 100/100 Lighthouse speed guarantee.'
  },
  {
    id: 'custom-web-platform',
    category: 'web',
    name: 'Custom Web Application or Client Portal',
    price: 2600,
    deliveryDays: 14,
    description: 'Full-stack React/Node platform with database integration and bank-grade security.'
  }
];

export const QuoteBuilder: React.FC<QuoteBuilderProps> = ({ 
  initialServiceId, 
  onProceedToBooking,
  onClose 
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(
    initialServiceId ? [initialServiceId] : ['cv-revamp', 'linkedin-optimization']
  );
  const [rushDelivery, setRushDelivery] = useState(false);

  const toggleItem = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  const selectedServices = SERVICE_OPTIONS.filter(s => selectedIds.includes(s.id));
  
  const rawTotal = selectedServices.reduce((sum, item) => sum + item.price, 0) + (rushDelivery ? 150 : 0);
  
  // Synergy discount: 15% off if 2 or more distinct service categories are selected!
  const categoriesSelected = new Set(selectedServices.map(s => s.category));
  const hasBundleSynergy = categoriesSelected.size >= 2 && selectedServices.length >= 2;
  const discount = hasBundleSynergy ? Math.round(rawTotal * 0.15) : 0;
  const finalPrice = Math.max(0, rawTotal - discount);

  const maxDeliveryDays = selectedServices.length > 0 
    ? Math.max(...selectedServices.map(s => s.deliveryDays))
    : 0;
  const estimatedDays = rushDelivery ? Math.max(1, Math.ceil(maxDeliveryDays / 2)) : maxDeliveryDays;

  return (
    <section id="quote-calculator" className="py-20 lg:py-28 bg-neutral-900/40 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-3">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>Interactive Investment Estimator</span>
            <span className="text-neutral-600">·</span>
            <span>Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 tracking-tight leading-tight [text-wrap:balance]">
            Custom Solution &amp; Retainer Quote Builder
          </h2>
          <p className="mt-4 text-base text-neutral-400 leading-relaxed">
            Select the services you need across Career Services, Cyber Services, and Bespoke Web Development. Bundle multiple practice areas to automatically activate the 15% Cross-Practice Synergy discount.
          </p>
        </div>

        {/* Builder Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Service Selection Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Career Track Group */}
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-neutral-800 text-xs font-semibold uppercase tracking-wider text-amber-400">
                <Briefcase className="w-4 h-4" />
                <span>Career Services (Primary Focus)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {SERVICE_OPTIONS.filter(s => s.category === 'career').map(service => {
                  const isChecked = selectedIds.includes(service.id);
                  return (
                    <div
                      key={service.id}
                      onClick={() => toggleItem(service.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                        isChecked 
                          ? 'border-amber-400/80 bg-amber-950/20 text-neutral-100 shadow-sm' 
                          : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-sm font-bold text-neutral-100 leading-tight">
                          {service.name}
                        </span>
                        <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                          isChecked ? 'bg-amber-400 border-amber-400 text-neutral-950' : 'border-neutral-700'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                      <p className="text-xs text-neutral-400 mb-3 leading-snug">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between text-xs pt-2 border-t border-neutral-800/80">
                        <span className="text-neutral-500 font-mono">~{service.deliveryDays}d delivery</span>
                        <span className="font-bold text-neutral-200 font-mono">${service.price}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Cyber Track Group */}
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-neutral-800 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Cyber Services &amp; Personal Defense</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {SERVICE_OPTIONS.filter(s => s.category === 'cyber').map(service => {
                  const isChecked = selectedIds.includes(service.id);
                  return (
                    <div
                      key={service.id}
                      onClick={() => toggleItem(service.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                        isChecked 
                          ? 'border-cyan-400/80 bg-cyan-950/20 text-neutral-100 shadow-sm' 
                          : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-sm font-bold text-neutral-100 leading-tight">
                          {service.name}
                        </span>
                        <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                          isChecked ? 'bg-cyan-400 border-cyan-400 text-neutral-950' : 'border-neutral-700'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                      <p className="text-xs text-neutral-400 mb-3 leading-snug">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between text-xs pt-2 border-t border-neutral-800/80">
                        <span className="text-neutral-500 font-mono">~{service.deliveryDays}d delivery</span>
                        <span className="font-bold text-neutral-200 font-mono">${service.price}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Web Dev Group */}
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-neutral-800 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                <Code className="w-4 h-4" />
                <span>Bespoke Web Development (Additional Practice)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {SERVICE_OPTIONS.filter(s => s.category === 'web').map(service => {
                  const isChecked = selectedIds.includes(service.id);
                  return (
                    <div
                      key={service.id}
                      onClick={() => toggleItem(service.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                        isChecked 
                          ? 'border-emerald-400/80 bg-emerald-950/20 text-neutral-100 shadow-sm' 
                          : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-sm font-bold text-neutral-100 leading-tight">
                          {service.name}
                        </span>
                        <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                          isChecked ? 'bg-emerald-400 border-emerald-400 text-neutral-950' : 'border-neutral-700'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                      <p className="text-xs text-neutral-400 mb-3 leading-snug">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between text-xs pt-2 border-t border-neutral-800/80">
                        <span className="text-neutral-500 font-mono">~{service.deliveryDays}d build</span>
                        <span className="font-bold text-neutral-200 font-mono">${service.price}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Addon: Expedited Priority Delivery */}
            <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="rush-delivery"
                  checked={rushDelivery}
                  onChange={(e) => setRushDelivery(e.target.checked)}
                  className="w-4 h-4 rounded text-amber-400 focus:ring-amber-400 border-neutral-700 bg-neutral-900 cursor-pointer"
                />
                <label htmlFor="rush-delivery" className="text-xs sm:text-sm text-neutral-200 cursor-pointer">
                  <strong>Priority Rush Delivery</strong> (Guaranteed 24-48h turnaround for career audits &amp; CV revamps)
                </label>
              </div>
              <span className="text-xs font-mono font-semibold text-neutral-300">+$150</span>
            </div>

          </div>

          {/* Sticky Live Summary Card */}
          <div className="lg:col-span-4 sticky top-28 bg-neutral-950 border border-neutral-800 rounded-2xl p-6 shadow-2xl">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-4">
              Estimated Investment Summary
            </span>

            {/* Selected items list */}
            <div className="space-y-2 mb-6 max-h-56 overflow-y-auto pr-1">
              {selectedServices.length === 0 && (
                <p className="text-xs text-neutral-500 italic">No services selected yet. Toggle options on the left to configure your package.</p>
              )}
              {selectedServices.map(item => (
                <div key={item.id} className="flex items-center justify-between text-xs text-neutral-300 py-1 border-b border-neutral-900">
                  <span className="truncate max-w-[200px]">{item.name}</span>
                  <span className="font-mono text-neutral-200">${item.price}</span>
                </div>
              ))}
              {rushDelivery && (
                <div className="flex items-center justify-between text-xs text-amber-400 py-1 border-b border-neutral-900">
                  <span>Priority Rush Turnaround</span>
                  <span className="font-mono">+$150</span>
                </div>
              )}
            </div>

            {/* Synergy discount banner */}
            {hasBundleSynergy && (
              <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/60 mb-6 text-xs text-emerald-300">
                <div className="flex items-center gap-1.5 font-semibold mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>15% Multi-Practice Synergy Applied</span>
                </div>
                <span>You saved ${discount} by bundling across career, cyber, or web practices.</span>
              </div>
            )}

            {/* Total figures */}
            <div className="pt-4 border-t border-neutral-800 space-y-2 mb-6">
              {hasBundleSynergy && (
                <div className="flex justify-between text-xs text-neutral-500">
                  <span>Standard Subtotal:</span>
                  <span className="line-through font-mono">${rawTotal}</span>
                </div>
              )}
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-semibold text-neutral-300">Total Investment:</span>
                <span className="text-3xl font-bold font-mono text-neutral-100 tabular-nums">
                  ${finalPrice.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-xs text-neutral-400">
                <span>Estimated Completion:</span>
                <span className="text-neutral-200 font-mono">
                  {estimatedDays > 0 ? `~${estimatedDays} Business Days` : 'N/A'}
                </span>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={() => onProceedToBooking(selectedServices.map(s => s.name), finalPrice)}
              disabled={selectedServices.length === 0}
              className="w-full py-3 px-4 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all shadow-md hover:shadow-amber-400/20 flex items-center justify-center gap-2"
            >
              <span>Lock In This Scope &amp; Book</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <p className="text-[11px] text-neutral-500 text-center mt-3">
              Zero commitments upfront. We review your current CV/profile on the discovery call first.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
