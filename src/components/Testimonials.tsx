import React from 'react';
import { Quote, CheckCircle, TrendingUp, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-3">
            <span>Verified Results</span>
            <span className="text-neutral-600">·</span>
            <span>Measurable Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 tracking-tight leading-tight [text-wrap:balance]">
            Client Transformations &amp; Attributable Outcomes
          </h2>
          <p className="mt-4 text-base text-neutral-400 leading-relaxed">
            Real outcomes from senior engineers, directors, and venture founders who engaged our career revamps, cyber hardening, and web architecture practices.
          </p>
        </div>

        {/* 3-Column Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Outcome Kicker */}
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-4 pb-3 border-b border-neutral-800">
                  <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.outcome}</span>
                </div>

                {/* Quote Body */}
                <p className="text-sm text-neutral-300 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-neutral-800/80">
                <h4 className="text-sm font-bold text-neutral-100">{t.name}</h4>
                <div className="text-xs text-neutral-400 flex flex-wrap items-center gap-1.5 mt-0.5">
                  <span>{t.role}</span>
                  <span className="text-neutral-600">·</span>
                  <span>{t.company}</span>
                </div>
                <div className="text-[11px] text-amber-400/90 font-mono mt-2">
                  Service: {t.serviceUsed}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise & Corporate Guarantee Banner */}
        <div className="mt-14 p-6 rounded-2xl border border-neutral-800 bg-neutral-900/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-neutral-100">
                100% Non-Disclosure &amp; Confidentiality Guarantee
              </h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                Every CV, compensation detail, and proprietary security architecture is protected under strict bilateral confidentiality.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 shrink-0">
            <span>Direct Principal Engagement</span>
            <span className="text-neutral-600">·</span>
            <span className="text-emerald-400">Zero Junior Subcontracting</span>
          </div>
        </div>

      </div>
    </section>
  );
};
