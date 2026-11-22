import React, { useState } from 'react';
import { ShieldCheck, Lock, Eye, KeyRound, AlertTriangle, Check, ArrowRight, ShieldAlert, Cpu } from 'lucide-react';
import { CYBER_SERVICES, CYBER_IMAGE } from '../data/portfolioData';

interface CyberServicesProps {
  onSelectService: (serviceId: string) => void;
  onOpenBooking: () => void;
}

export const CyberServices: React.FC<CyberServicesProps> = ({ onSelectService, onOpenBooking }) => {
  // Threat Assessment State
  const [q1, setQ1] = useState<'vault' | 'reuse' | 'browser'>('browser');
  const [q2, setQ2] = useState<'yubikey' | 'app' | 'sms'>('sms');
  const [q3, setQ3] = useState<'yes' | 'no' | 'unsure'>('no');
  const [q4, setQ4] = useState<'hardened' | 'standard'>('standard');

  const calculateThreatScore = () => {
    let risk = 0;
    if (q1 === 'reuse') risk += 35;
    if (q1 === 'browser') risk += 15;
    if (q2 === 'sms') risk += 30; // Vulnerable to SIM swap
    if (q2 === 'app') risk += 10;
    if (q3 === 'no' || q3 === 'unsure') risk += 20; // Data brokers have phone/home address
    if (q4 === 'standard') risk += 15;

    return Math.min(risk, 95);
  };

  const threatRisk = calculateThreatScore();

  return (
    <section id="cyber-services" className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-3">
            <span>Specialized Practice</span>
            <span className="text-neutral-600">·</span>
            <span>Digital Privacy &amp; Security</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 tracking-tight leading-tight [text-wrap:balance]">
            Executive Cyber Hygiene &amp; Security Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
            High-earning executives, founders, and senior engineers are prime targets for spear-phishing, SIM-swapping, and data-broker extortion. I harden your personal perimeter so your identity, communications, and digital assets remain impenetrable.
          </p>
        </div>

        {/* Feature Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 min-h-[380px]">
            <img
              src={CYBER_IMAGE}
              alt="Cyber Hygiene and Personal Threat Hardening"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-neutral-950/90 border border-neutral-800/90 backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Zero-Trust Personal Posture</span>
              </div>
              <p className="text-sm text-neutral-200">
                Most breaches happen through the human perimeter: leaked personal emails, unencrypted SMS OTPs, and exposed home records on commercial data broker indexes.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 transition-colors">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-100">OSINT Exposure &amp; Broker Removal</h3>
                    <p className="text-xs text-neutral-400">Deep public-web &amp; dark-web surveillance audit</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-400">15B+ Records Cross-Referenced</span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed mt-2">
                We uncover every exposed credential, family link, residential address, and phone number listed across 80+ commercial broker registries, executing full deletion workflows.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 transition-colors">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400">
                    <KeyRound className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-100">FIDO2 Hardware Key Architecture</h3>
                    <p className="text-xs text-neutral-400">Phishing-resistant physical authentication</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400">Zero SIM-Swap Risk</span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed mt-2">
                Migrate away from vulnerable SMS 2FA to dual physical cryptographic keys (YubiKey 5 Series). Even if an attacker steals your passwords, they cannot breach your accounts.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 transition-colors">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-100">Encrypted Channels &amp; Cold Backups</h3>
                    <p className="text-xs text-neutral-400">Confidential advisory communications</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-amber-400">Zero-Knowledge Storage</span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed mt-2">
                Setup sovereign email routing with custom domain aliases, encrypted Signal workflows, and offline hardware backup procedures for emergency recovery.
              </p>
            </div>
          </div>
        </div>

        {/* INTERACTIVE THREAT SURFACE CALCULATOR */}
        <div className="mb-20 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 sm:p-8">
          <div className="max-w-3xl mb-8 pb-6 border-b border-neutral-800">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
              Self-Diagnostic Tool
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-100">
              Personal Cyber Attack Surface Risk Calculator
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Answer 4 questions to evaluate your current digital vulnerability index.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Questions Column */}
            <div className="lg:col-span-8 space-y-6">
              {/* Q1 */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                  1. How do you manage your personal &amp; work passwords?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'vault', label: 'Dedicated Vault (1Password / Bitwarden)' },
                    { id: 'browser', label: 'Saved in Chrome/Safari' },
                    { id: 'reuse', label: 'Reuse 2-3 variations across sites' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setQ1(opt.id as any)}
                      className={`p-3 text-left rounded-lg text-xs font-medium border transition-all ${
                        q1 === opt.id
                          ? 'border-cyan-400 bg-cyan-950/30 text-cyan-200'
                          : 'border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:text-neutral-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q2 */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                  2. What is your primary 2-Factor Authentication (2FA) method?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'yubikey', label: 'Hardware Key (YubiKey / Passkey)' },
                    { id: 'app', label: 'Authenticator App (TOTP)' },
                    { id: 'sms', label: 'SMS / Text Message Code' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setQ2(opt.id as any)}
                      className={`p-3 text-left rounded-lg text-xs font-medium border transition-all ${
                        q2 === opt.id
                          ? 'border-cyan-400 bg-cyan-950/30 text-cyan-200'
                          : 'border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:text-neutral-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q3 */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                  3. Have you ever opted out of commercial People Search Data Brokers?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'yes', label: 'Yes, actively scrubbed' },
                    { id: 'unsure', label: 'Unsure / Never checked' },
                    { id: 'no', label: 'No, my details are likely searchable' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setQ3(opt.id as any)}
                      className={`p-3 text-left rounded-lg text-xs font-medium border transition-all ${
                        q3 === opt.id
                          ? 'border-cyan-400 bg-cyan-950/30 text-cyan-200'
                          : 'border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:text-neutral-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Calculated Risk Index Card */}
            <div className="lg:col-span-4 p-6 rounded-xl border border-neutral-800 bg-neutral-900/80 flex flex-col justify-between">
              <div>
                <span className="text-xs text-neutral-400 uppercase tracking-wider block mb-2">
                  Estimated Vulnerability Index
                </span>
                <div className="text-4xl font-bold font-mono tabular-nums text-neutral-100 mb-2">
                  <span className={threatRisk >= 60 ? 'text-red-400' : threatRisk >= 30 ? 'text-amber-400' : 'text-emerald-400'}>
                    {threatRisk}%
                  </span>
                  <span className="text-sm text-neutral-500 font-normal ml-2">
                    {threatRisk >= 60 ? 'High Risk' : threatRisk >= 30 ? 'Moderate Exposure' : 'Well Protected'}
                  </span>
                </div>
                
                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  {threatRisk >= 60 
                    ? 'Your perimeter is vulnerable to credential stuffing, spear-phishing, and SIM swapping. An attacker can target your phone number and private accounts with minimal friction.'
                    : threatRisk >= 30
                    ? 'You have baseline security in place, but public data brokers and non-hardware 2FA leave critical blind spots.'
                    : 'Strong security hygiene. You are in the top 5% of security-conscious leaders.'}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <button
                  onClick={onOpenBooking}
                  className="w-full text-center px-4 py-2.5 text-xs font-semibold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Request Full OSINT Audit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cyber Services Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CYBER_SERVICES.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-7 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 transition-all hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-xs font-semibold text-cyan-400 tracking-wide">
                    {service.highlight}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">
                    {service.deliveryTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-100 mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-neutral-800">
                  <span className="text-xs font-semibold text-neutral-300 uppercase tracking-wider block mb-2">
                    Included Protocols:
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800/80 mb-6 text-xs text-neutral-400">
                  <span className="text-neutral-200 font-medium">Target Audience:</span> {service.idealFor}
                </div>
              </div>

              {/* Bottom Price & Action */}
              <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-neutral-500 block">Investment</span>
                  <span className="text-2xl font-bold text-neutral-100 font-mono tabular-nums">
                    ${service.basePrice}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="px-4 py-2 text-xs font-semibold text-neutral-200 border border-neutral-700 hover:border-neutral-500 rounded-lg hover:bg-neutral-800 transition-colors whitespace-nowrap shrink-0"
                  >
                    Add to Quote
                  </button>
                  <button
                    onClick={onOpenBooking}
                    className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1"
                  >
                    <span>Engage Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
