import { useEffect, useRef, useState } from 'react';
import { ArrowUp, ArrowUpRight, BriefcaseBusiness, CodeXml, Files, X, Zap } from 'lucide-react';

const services = [
  { label: 'Career services', detail: 'CVs, applications and interview prep', topic: 'career services', icon: BriefcaseBusiness },
  { label: 'Cyber services', detail: 'Documents, PDFs and online forms', topic: 'document or online application support', icon: Files },
  { label: 'Web development', detail: 'Business websites, portfolios and redesigns', topic: 'website development', icon: CodeXml },
];

function chatUrl(message: string) {
  return 'https://wa.me/254798356149?text=' + encodeURIComponent(message);
}

export function WhatsAppContact() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) closeRef.current?.focus();
  }, [isOpen]);

  const closePanel = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const update = () => setShowTop(window.scrollY > 300);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const goToTop = () => window.scrollTo({
    top: 0,
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
  });

  return (
    <div className="floating-page-actions" onKeyDown={(event) => {
      if (event.key === 'Escape' && isOpen) closePanel();
    }}>
      {isOpen && (
        <section id="whatsapp-contact-panel" aria-labelledby="whatsapp-contact-title" className="absolute bottom-full right-0 mb-4 max-h-[calc(100dvh-7rem)] w-[min(22rem,calc(100vw-2rem))] overflow-y-auto rounded-2xl border border-emerald-400/25 bg-neutral-950 text-white shadow-2xl">
          <div className="flex items-start justify-between gap-3 border-b border-emerald-400/20 bg-gradient-to-br from-emerald-950 to-neutral-950 p-4">
            <div>
              <p className="text-xs font-semibold text-emerald-300">PrimeDesk Digital · WhatsApp</p>
              <h2 id="whatsapp-contact-title" className="mt-1 text-lg font-bold">How can I help?</h2>
            </div>
            <button ref={closeRef} type="button" onClick={closePanel} aria-label="Close WhatsApp panel" className="grid size-9 shrink-0 cursor-pointer place-items-center rounded-full text-neutral-300 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-emerald-300">
              <X size={18} aria-hidden="true" />
            </button>
          </div>
          <div className="space-y-2 p-3">
            {services.map(({ label, detail, topic, icon: Icon }) => (
              <a key={topic} href={chatUrl(`Hi PrimeDesk Digital, I'd like help with ${topic}. Here's what I need: `)} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-2.5 hover:border-emerald-400/50 focus-visible:outline-2 focus-visible:outline-emerald-300">
                <Icon size={18} className="shrink-0 text-emerald-300" aria-hidden="true" />
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold">{label}</span>
                  <span className="block text-xs leading-relaxed text-neutral-300">{detail}</span>
                </span>
                <ArrowUpRight size={15} className="shrink-0 text-neutral-400 group-hover:text-emerald-300" aria-hidden="true" />
              </a>
            ))}
            <a href={chatUrl('Hi PrimeDesk Digital, I need urgent help.\n\nWhat I need help with: \nMy deadline: ')} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-emerald-300 px-3 py-2 text-sm font-bold text-emerald-950 hover:bg-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300">
              <Zap size={16} aria-hidden="true" /> Message about an urgent request
            </a>
          </div>
        </section>
      )}
      {showTop && <button type="button" onClick={goToTop} className="back-to-top" aria-label="Back to top" title="Back to top"><ArrowUp size={20} aria-hidden="true" /><span>Back to top</span></button>}
      <button ref={triggerRef} type="button" onClick={() => isOpen ? closePanel() : setIsOpen(true)} className="whatsapp-pulse focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300" aria-expanded={isOpen} aria-controls={isOpen ? "whatsapp-contact-panel" : undefined} aria-label="WhatsApp contact and services" title="WhatsApp contact and services">
        <svg className="whatsapp-mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <path d="M20 4.5a15.5 15.5 0 0 0-13.4 23.3L4.5 35.5l8-2.1A15.5 15.5 0 1 0 20 4.5Z" stroke="white" strokeWidth="2.8" strokeLinejoin="round" />
          <path d="M14.1 11.5c-.5-.2-1.1-.1-1.5.3-1.1 1.1-1.7 2.4-1.3 4.3.8 4.4 5.6 9.4 10.3 11.1 2.6.9 4.4.3 5.5-1.1.5-.6.8-1.5.6-2.1-.1-.4-1.1-.9-3.2-1.9-.5-.3-.9-.2-1.2.2l-1.4 1.6c-.2.3-.5.3-.9.1-2.9-1.2-5.1-3.4-6.4-6.1-.2-.4-.2-.6.1-.9l1-1.2c.3-.4.4-.7.2-1.1l-1.2-2.8c-.1-.2-.3-.3-.6-.4Z" fill="white" />
        </svg>
        <svg className="whatsapp-blue-tick" viewBox="0 0 32 32" aria-hidden="true">
          <path d="m16 1 3.1 2.3 3.9-.1 1.7 3.5 3.5 1.7-.1 3.9L31 16l-2.9 3.7.1 3.9-3.5 1.7-1.7 3.5-3.9-.1L16 31l-3.7-2.3-3.9.1-1.7-3.5-3.5-1.7.1-3.9L1 16l2.3-3.7-.1-3.9 3.5-1.7 1.7-3.5 3.9.1L16 1Z" fill="#229af2" />
          <path d="m9.5 16 4.3 4.3L23 11.7" fill="none" stroke="white" strokeWidth="3.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
