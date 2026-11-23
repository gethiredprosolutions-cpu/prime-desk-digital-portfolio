import React, { useState, useEffect, useRef } from 'react';
import { Target, FileCheck2, Briefcase, Globe } from 'lucide-react';
import { PRACTICE_SHOWCASE_SLIDES } from '../data/portfolioData';

interface CareerServicesProps {
  onSelectService: (serviceId: string) => void;
  onOpenBooking: () => void;
}

export const CareerServices: React.FC<CareerServicesProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showcaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const showcase = showcaseRef.current;
    if (!showcase) return;

    let timer: number | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      window.clearInterval(timer);
      if (entry.isIntersecting) {
        timer = window.setInterval(() => {
          setCurrentSlide(prev => (prev + 1) % PRACTICE_SHOWCASE_SLIDES.length);
        }, 2000);
      }
    });
    observer.observe(showcase);

    return () => {
      observer.disconnect();
      window.clearInterval(timer);
    };
  }, []);

  return (
    <section id="career-services" className="pt-0 pb-12 sm:pb-14 lg:pb-16 bg-neutral-950 border-b border-neutral-900">
      {/* Full-bleed Showcase Image occupying top, left, and right edges */}
      <div ref={showcaseRef} className="relative w-full h-[260px] sm:h-[360px] lg:h-[440px] overflow-hidden border-b border-neutral-800 bg-neutral-900">
        {PRACTICE_SHOWCASE_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover ${slide.objectPosition || 'object-center'} filter brightness-105 contrast-100`}
            />
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12">
        <div className="mb-8 max-w-3xl">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-100 tracking-tight">
            Why Choose Us?
          </h3>
          <p className="mt-2.5 text-sm sm:text-base text-neutral-300 leading-relaxed">
            With 30+ years of experience, we partner with you to create a website, CV or document that does what you need it to do.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Card 1: Direct Goal-Tailored Partnership */}
          <div className="p-5 sm:p-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 transition-colors flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                <Target className="w-4 h-4" />
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-neutral-100 leading-snug">
                Work tailored to your goals
              </h4>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">
              We agree on what you need, when you need it and what it will cost before we start. You work with us directly and can give feedback before handover.
            </p>
          </div>

          {/* Card 2: Documents & Certificates */}
          <div id="cyber-services" className="scroll-mt-24 p-5 sm:p-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 transition-colors flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-neutral-100 leading-snug">
                Professional documents and certificates
              </h4>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Get polished, branded certificates and neatly formatted documents ready to print, share or submit.
            </p>
          </div>

          {/* Card 3: CV & Career Experience */}
          <div id="cv-revamp" className="scroll-mt-24 p-5 sm:p-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 transition-colors flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                <Briefcase className="w-4 h-4" />
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-neutral-100 leading-snug">
                Experience presented with confidence
              </h4>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Get a CV that shows what you achieved and why it matters for the job you want.
            </p>
          </div>

          {/* Card 4: Websites Built Around Business */}
          <div id="web-development" className="scroll-mt-24 p-5 sm:p-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 transition-colors flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                <Globe className="w-4 h-4" />
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-neutral-100 leading-snug">
                Websites built around how you get business.
              </h4>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Show your work and give customers an easy way to book, request a quote or get in touch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
