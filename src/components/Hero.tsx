import React from 'react';
import { HERO_LANDSCAPE_TRIO, METRICS_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenBooking?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="hero-section relative overflow-hidden pt-2 pb-8 sm:pt-3 sm:pb-10 lg:pt-4 lg:pb-12 border-b border-neutral-800">
      {/* High-Clarity Panoramic Background combining Career, Cyber, and Web Development */}
      <div className="hero-art absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={HERO_LANDSCAPE_TRIO}
          alt="A creative studio with professional CV documents, certificate preparation and website design screens under warm gold and teal lighting"
          fetchPriority="high"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="hero-content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Hero Content positioned at the very top */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-start pt-1">
          <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-semibold text-neutral-100 leading-[1.2] tracking-tight mt-0 mb-3 [text-wrap:balance] drop-shadow-[0_2px_14px_rgba(0,0,0,0.92)]">
            Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">Career Services</span>, Fortified <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-sky-400">Cyber Services</span> &amp; Bespoke <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400">Website Development</span>.
          </h1>

          <p className="hero-description">
            We help you present your experience clearly through professional CVs and LinkedIn profiles. We also prepare documents, support online applications, and build custom websites for your business.
          </p>

        </div>

        {/* Full-width Metrics Row Below - Clean pure text and border */}
        <div className="hero-metrics grid grid-cols-2 text-center max-w-lg mx-auto">
          {METRICS_DATA.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="hero-metric-value">
                {item.value}
              </span>
              <span className="hero-metric-label">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
