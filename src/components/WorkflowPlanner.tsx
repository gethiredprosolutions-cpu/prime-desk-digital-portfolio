import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface WorkflowPlannerProps {
  onStartWithTasks?: (tasks: string[]) => void;
}

interface ClientTestimonial {
  id: string;
  name: string;
  initials: string;
  role: string;
  service: 'Career Services' | 'Cyber Services' | 'Web Development';
  outcome: string;
  quote: string;
  accentText: string;
  accentBorder: string;
  badgeBg: string;
}

const CLIENT_TESTIMONIALS: ClientTestimonial[] = [
  {
    id: 'faith-otieno',
    name: 'Faith Otieno',
    initials: 'FO',
    role: 'Operations Supervisor · Logistics',
    service: 'Career Services',
    outcome: 'Shortlisted for 4 interviews within 10 days',
    quote:
      'My old CV read like a list of daily duties and got zero replies for months. After the revamp, every achievement was clear and measurable on two clean pages, I had four interview calls in under two weeks and stepped into a senior supervisor role.',
    accentText: 'text-amber-400',
    accentBorder: 'border-amber-400/50 bg-amber-400/10',
    badgeBg: 'bg-amber-400/15 text-amber-300 border-amber-400/30',
  },
  {
    id: 'david-kamau',
    name: 'David Kamau',
    initials: 'DK',
    role: 'Director · Ridgeview Training Institute',
    service: 'Cyber Services',
    outcome: '140 branded certificates & clean portal filings',
    quote:
      'We needed custom-designed graduation certificates and dozens of scanned student records typed, formatted, and merged to strict portal file sizes on a tight deadline. Everything arrived crisp, verified, and ready to print without a single rejection.',
    accentText: 'text-cyan-400',
    accentBorder: 'border-cyan-400/50 bg-cyan-400/10',
    badgeBg: 'bg-cyan-400/15 text-cyan-300 border-cyan-400/30',
  },
  {
    id: 'clarisse-mwangi',
    name: 'Clarisse Mwangi',
    initials: 'CM',
    role: 'Founder · ClearPath Dental Studio',
    service: 'Web Development',
    outcome: 'Online bookings tripled in the first month',
    quote:
      'Instead of giving us a generic template, they built the site around how patients actually book appointments on their phones. Enquiry messages come straight through cleanly, the site loads fast, and we own every line of code.',
    accentText: 'text-emerald-400',
    accentBorder: 'border-emerald-400/50 bg-emerald-400/10',
    badgeBg: 'bg-emerald-400/15 text-emerald-300 border-emerald-400/30',
  },
  {
    id: 'brian-njoroge',
    name: 'Brian Njoroge',
    initials: 'BN',
    role: 'Graduate Civil Engineer',
    service: 'Career Services',
    outcome: 'Landed first role + LinkedIn recruiter leads',
    quote:
      'As a fresh graduate I struggled to frame my internship and site projects convincingly. The ATS CV, cover letter, and LinkedIn refresh turned scattered notes into a sharp story, two engineering firms reached out directly.',
    accentText: 'text-amber-400',
    accentBorder: 'border-amber-400/50 bg-amber-400/10',
    badgeBg: 'bg-amber-400/15 text-amber-300 border-amber-400/30',
  },
];


export const WorkflowPlanner: React.FC<WorkflowPlannerProps> = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CLIENT_TESTIMONIALS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const current = CLIENT_TESTIMONIALS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + CLIENT_TESTIMONIALS.length) % CLIENT_TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % CLIENT_TESTIMONIALS.length);
  };

  return (
    <section id="how-we-work" className="py-12 sm:py-14 lg:py-16 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Creative Client Testimonials Showcase */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8 lg:p-10 flex flex-col justify-between"
        >
            {/* Header & Navigation Controls */}
            <div className="flex items-center justify-between gap-4 pb-5 border-b border-neutral-800">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 block mb-1">
                  Client Voices
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-neutral-100 tracking-tight">
                  Words from people we&apos;ve helped
                </h4>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="p-2 rounded-lg border border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-neutral-100 hover:border-neutral-600 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="p-2 rounded-lg border border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-neutral-100 hover:border-neutral-600 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Featured Testimonial Spotlight */}
            <div className="py-6 sm:py-7 relative">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-1 text-amber-400" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className={`px-2.5 py-1 text-[11px] font-semibold rounded-md border ${current.badgeBg}`}>
                  {current.service}
                </span>
              </div>

              <div className="relative">
                <Quote className="w-8 h-8 text-neutral-800 mb-3" />
                <blockquote className="text-base sm:text-lg text-neutral-100 leading-relaxed font-normal min-h-[112px]">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-6 pt-5 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center font-sans text-sm font-bold shrink-0 ${current.badgeBg}`}>
                    {current.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-neutral-100">{current.name}</div>
                    <div className="text-xs text-neutral-400">{current.role}</div>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <div className="text-[11px] uppercase tracking-wider text-neutral-500">Result</div>
                  <div className={`text-xs sm:text-sm font-semibold ${current.accentText}`}>
                    {current.outcome}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Story Switcher Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-neutral-800">
              {CLIENT_TESTIMONIALS.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isActive
                        ? item.accentBorder
                        : 'border-neutral-800 bg-neutral-950/60 hover:border-neutral-700'
                    }`}
                  >
                    <div className="text-xs font-semibold text-neutral-100 truncate">
                      {item.name}
                    </div>
                    <div className={`text-[11px] mt-0.5 truncate ${isActive ? item.accentText : 'text-neutral-500'}`}>
                      {item.service}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
      </div>
    </section>
  );
};
