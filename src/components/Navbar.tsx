import React, { useState } from 'react';
import { Menu, X, ChevronDown, BriefcaseBusiness, MessageCircle } from 'lucide-react';

interface NavbarProps {
  ref?: React.Ref<HTMLElement>;
  onOpenBooking: () => void;
  onOpenQuote: () => void;
}

const CAREER_SUB_SERVICES = [
  'CV Writing, Revamp and Tailoring',
  'Cover Letters and Application Documents',
  'LinkedIn Profile Optimisation',
  'Job Search and Application Support',
  'Interview and Assessment Preparation',
  'Career Planning and Progression',
  'Job Offer Review and Salary Negotiation',
];

const CYBER_SUB_SERVICES = [
  'Document Typing, Editing and Formatting',
  'Certificate Design and Creation',
  'Online Application and Form Assistance',
  'Printing, Scanning and Photocopying',
  'PDF Conversion, Merging and Compression',
  'Email Setup and Document Submission',
];

const WEB_SUB_SERVICES = [
  'Custom Website Design and Development',
  'Business Websites, Landing Pages and Portfolios',
  'Website Redesign and Mobile Optimisation',
  'Client Portals and Online Booking Systems',
  'Search Engine Optimization (SEO)',
  'Domain Setup, Hosting and Website Deployment',
  'Website Maintenance and Updates',
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, ref }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mainServicesOpen, setMainServicesOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<'career' | 'cyber' | 'web' | null>(null);

  const enquiryUrl = 'https://wa.me/254798356149?text=' + encodeURIComponent(
    'Hello PrimeDesk Digital, I would like to enquire about your web development and cyber services.'
  );

  return (
    <header ref={ref} className="site-header sticky top-0 z-40 bg-neutral-950/95 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_-20px_rgba(0,0,0,0.8)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-20 py-3 flex flex-wrap items-center justify-between gap-2 xl:h-20 xl:flex-nowrap xl:py-0 xl:grid xl:grid-cols-[auto_1fr_auto] xl:gap-5">
        {/* Zone 1: Brand title */}
        <a 
          href="#" 
          className="header-brand font-bold tracking-tight text-neutral-100 whitespace-nowrap shrink-0 flex items-center group md:justify-self-start"
        >
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 p-1 border border-neutral-800 shadow-xl group-hover:border-amber-400/60 transition-all duration-300 flex items-center justify-center shrink-0 overflow-hidden">
            <svg 
              className="w-6 h-6 transition-transform duration-300 group-hover:scale-105" 
              viewBox="0 0 32 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-label="PrimeDesk Digital Logo"
            >
              <defs>
                <linearGradient id="bladeGold" x1="5" y1="3" x2="27" y2="17" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FDE68A" />
                  <stop offset="0.6" stopColor="#F59E0B" />
                  <stop offset="1" stopColor="#D97706" />
                </linearGradient>
                <linearGradient id="bladeCyan" x1="7" y1="11" x2="25" y2="23" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#A5F3FC" />
                  <stop offset="0.6" stopColor="#06B6D4" />
                  <stop offset="1" stopColor="#0891B2" />
                </linearGradient>
                <linearGradient id="bladeEmerald" x1="9" y1="19" x2="23" y2="29" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#A7F3D0" />
                  <stop offset="0.6" stopColor="#10B981" />
                  <stop offset="1" stopColor="#047857" />
                </linearGradient>
              </defs>
              <path d="M16 3L27 14L22.5 15.5L16 8L9.5 15.5L5 14L16 3Z" fill="url(#bladeGold)" />
              <path d="M16 10.5L25 19.5L21 21L16 15L11 21L7 19.5L16 10.5Z" fill="url(#bladeCyan)" />
              <path d="M16 17.5L23 25L19.5 26.5L16 22L12.5 26.5L9 25L16 17.5Z" fill="url(#bladeEmerald)" />
            </svg>
          </div>
          <span>PrimeDesk Digital</span>
        </a>

        {/* Zone 2: Centered single-line navigation tabs */}
        <nav className="hidden xl:flex items-center justify-end pr-5 text-sm font-medium text-neutral-200" aria-label="Main navigation">
          <div className="relative" onMouseEnter={() => setMainServicesOpen(true)} onMouseLeave={() => setMainServicesOpen(false)} onFocus={() => setMainServicesOpen(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setMainServicesOpen(false); }} onKeyDown={(event) => { if (event.key === 'Escape') setMainServicesOpen(false); }}>
            <button type="button" aria-expanded={mainServicesOpen} aria-controls="desktop-main-services" className="nav-main-service inline-flex items-center gap-2 rounded-xl border border-neutral-700 px-4 py-3 hover:border-amber-400 hover:text-amber-300 transition-colors cursor-default">
              Main Services <ChevronDown className={`size-4 transition-transform ${mainServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div id="desktop-main-services" hidden={!mainServicesOpen} className="absolute right-0 top-full w-[680px] max-h-[70vh] overflow-y-auto rounded-2xl border border-neutral-700 bg-neutral-950 p-5 shadow-2xl z-50">
              <div className="grid grid-cols-3 gap-5">
                {[
                  { title: 'Career Services', href: '#cv-revamp', items: CAREER_SUB_SERVICES, color: 'text-amber-300' },
                  { title: 'Cyber Services', href: '#cyber-services', items: CYBER_SUB_SERVICES, color: 'text-cyan-300' },
                  { title: 'Web Development', href: '#web-development', items: WEB_SUB_SERVICES, color: 'text-emerald-300' },
                ].map(section => <div key={section.title}><h3 className={`block mb-3 text-sm font-semibold ${section.color}`}>{section.title}</h3><ul className="space-y-1">{section.items.map(item => <li key={item} className="block rounded-lg px-2 py-2 text-xs leading-relaxed text-neutral-300 hover:bg-neutral-800 hover:text-white cursor-default">{item}</li>)}</ul></div>)}
              </div>
            </div>
          </div>
        </nav>

        {/* Zone 3: Action controls */}
        <div className="hidden xl:flex items-center gap-3 shrink-0 md:justify-self-end">

          <button
            onClick={onOpenQuote}
            className="nav-career-packages group/package inline-flex min-h-11 items-center gap-3 rounded-xl border border-cyan-200/40 bg-gradient-to-r from-cyan-200 via-cyan-300 to-emerald-300 pl-3 pr-2 text-neutral-950 shadow-[0_4px_18px_-8px_rgba(103,232,249,0.6)] transition-all duration-200 hover:border-white/80 hover:shadow-[0_5px_24px_-8px_rgba(103,232,249,0.8)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200 cursor-pointer"
          >
            <BriefcaseBusiness className="size-4 shrink-0 text-teal-900" aria-hidden="true" />
            <span className="flex items-center gap-2 text-xs font-bold whitespace-nowrap">
              Career Services Packages
            </span>
          </button>
          <a
            href={enquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-web-enquiry group/enquiry inline-flex h-10 items-center gap-2.5 rounded-xl border border-white/15 bg-gradient-to-b from-neutral-800/70 to-neutral-900 px-3 text-xs font-semibold text-neutral-200 shadow-sm transition-all duration-200 hover:border-emerald-300/50 hover:text-white hover:shadow-[0_3px_14px_-6px_rgba(52,211,153,0.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 whitespace-nowrap"
          >
            <span className="flex size-6 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300"><MessageCircle className="size-3.5" aria-hidden="true" /></span>
            <span>Web &amp; Cyber Enquiries</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="compact-mobile-actions flex flex-wrap xl:hidden items-center gap-2">
          <button
            onClick={onOpenQuote}
            className="nav-career-packages group/package inline-flex min-h-11 items-center gap-2 rounded-xl border border-cyan-200/40 bg-gradient-to-r from-cyan-200 to-emerald-300 pl-2.5 pr-2 text-neutral-950 shadow-[0_4px_18px_-8px_rgba(103,232,249,0.6)] transition-colors hover:from-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
            aria-label="Career Services Packages"
          >
            <BriefcaseBusiness className="size-4 shrink-0 text-teal-900" aria-hidden="true" />
            <span className="text-left leading-tight">
              <span className="block text-xs font-bold">Career Services Packages</span>
            </span>
          </button>
          <a
            href={enquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Web and cyber service enquiries on WhatsApp"
            className="nav-web-enquiry inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-2 text-[11px] font-semibold text-emerald-200 transition-colors hover:border-emerald-300/60 hover:bg-emerald-400/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
          >
            <MessageCircle className="size-4 shrink-0" aria-hidden="true" />
            <span className="text-left leading-tight">Web &amp; Cyber<br className="sm:hidden" /> Enquiries</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="nav-main-service flex min-h-10 items-center justify-center gap-2 px-3 rounded-xl border border-white/10 bg-neutral-900 text-neutral-300 hover:border-white/25 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Main Services"
            aria-expanded={mobileMenuOpen}
          >
            <span className="text-xs font-semibold">Main Services</span>{mobileMenuOpen ? <X className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
        className={`absolute left-0 right-0 top-full z-50 xl:hidden grid shadow-2xl transition-[grid-template-rows,opacity] duration-300 ease-out ${
          mobileMenuOpen
            ? 'grid-rows-[1fr] opacity-100 border-b border-neutral-800 bg-neutral-950/95'
            : 'grid-rows-[0fr] opacity-0 pointer-events-none border-b-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="max-h-[70dvh] overflow-y-auto scroll-smooth px-4 py-3 space-y-1">

            {[
              {
                key: 'career' as const,
                label: 'Career Services',
                href: '#cv-revamp',
                items: CAREER_SUB_SERVICES,
                hoverClass: 'hover:text-amber-400',
                subHoverClass: 'hover:text-amber-300',
              },
              {
                key: 'cyber' as const,
                label: 'Cyber Services',
                href: '#cyber-services',
                items: CYBER_SUB_SERVICES,
                hoverClass: 'hover:text-cyan-400',
                subHoverClass: 'hover:text-cyan-300',
              },
              {
                key: 'web' as const,
                label: 'Web Development',
                href: '#web-development',
                items: WEB_SUB_SERVICES,
                hoverClass: 'hover:text-emerald-400',
                subHoverClass: 'hover:text-emerald-300',
              },
            ].map((section) => {
              const isExpanded = expandedSection === section.key;
              return (
                <div key={section.key} className="border-b border-neutral-900/80 last:border-b-0">
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex-1 text-sm font-medium text-neutral-300 ${section.hoverClass} py-2.5`}
                    >
                      {section.label}
                    </span>
                    <button
                      type="button"
                      onClick={() => setExpandedSection(isExpanded ? null : section.key)}
                      className="p-2 text-neutral-400 hover:text-white transition-colors"
                      aria-label={`Toggle ${section.label} list`}
                      aria-expanded={isExpanded}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                      isExpanded ? 'grid-rows-[1fr] opacity-100 pb-2' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <ul className="overflow-hidden pl-3 border-l border-neutral-800 space-y-1">
                      {section.items.map((service) => (
                        <li key={service}>
                          <span
                            className={`block text-xs text-neutral-400 ${section.subHoverClass} py-1`}
                          >
                            {service}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}

            
          </div>
        </div>
      </div>
    </header>
  );
};


