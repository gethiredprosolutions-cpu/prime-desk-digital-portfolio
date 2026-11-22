import React from 'react';
import { PhoneCall } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-16 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center p-1 shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 3L27 14L22.5 15.5L16 8L9.5 15.5L5 14L16 3Z" fill="#F59E0B" />
                  <path d="M16 10.5L25 19.5L21 21L16 15L11 21L7 19.5L16 10.5Z" fill="#06B6D4" />
                  <path d="M16 17.5L23 25L19.5 26.5L16 22L12.5 26.5L9 25L16 17.5Z" fill="#10B981" />
                </svg>
              </div>
              <span className="font-bold text-neutral-100 tracking-tight text-sm">PrimeDesk Digital</span>
            </div>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              PrimeDesk Digital helps job seekers with CVs and applications, provides document and online application support, and builds custom websites for businesses and professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5 text-sm">
            <span className="font-semibold text-neutral-200 uppercase tracking-wider block mb-2">
              Practice Areas
            </span>
            <div><a href="#cv-revamp" className="hover:text-amber-400 transition-colors">Executive CV &amp; Career Revamp</a></div>
            <div><a href="#cyber-services" className="hover:text-cyan-400 transition-colors">Cyber Services &amp; Documents</a></div>
            <div><a href="#web-development" className="hover:text-emerald-400 transition-colors">Custom Web Development</a></div>
          </div>

          {/* Engagement */}
          <div className="md:col-span-4 space-y-3 text-sm">
            <span className="font-semibold text-neutral-200 uppercase tracking-wider block mb-2">
              Direct Inquiries
            </span>
            <p className="text-neutral-400 leading-relaxed">
              Need help updating your CV, preparing documents, or building a website? Tell us what you need and when you need it.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href="tel:+254798356149"
                className="direct-call-button"
                aria-label="Call PrimeDesk Digital on +254798356149"
              >
                <span className="direct-call-icon"><PhoneCall size={22} aria-hidden="true" /></span>
                <span className="direct-call-copy"><span>Call us directly</span><strong>+254798356149</strong></span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-neutral-500 gap-4">
          <div>
            © {new Date().getFullYear()} PrimeDesk Digital. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
