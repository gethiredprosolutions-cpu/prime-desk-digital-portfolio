import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function WhatsAppContact() {
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
    <div className="floating-page-actions">
      {showTop && <button type="button" onClick={goToTop} className="back-to-top" aria-label="Back to top" title="Back to top"><ArrowUp size={20} aria-hidden="true" /><span>Back to top</span></button>}
      <a href="https://wa.me/254798356149" target="_blank" rel="noopener noreferrer" className="whatsapp-pulse" aria-label="Chat on WhatsApp" title="Chat on WhatsApp">
        <svg className="whatsapp-mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <path d="M20 4.5a15.5 15.5 0 0 0-13.4 23.3L4.5 35.5l8-2.1A15.5 15.5 0 1 0 20 4.5Z" stroke="white" strokeWidth="2.8" strokeLinejoin="round" />
          <path d="M14.1 11.5c-.5-.2-1.1-.1-1.5.3-1.1 1.1-1.7 2.4-1.3 4.3.8 4.4 5.6 9.4 10.3 11.1 2.6.9 4.4.3 5.5-1.1.5-.6.8-1.5.6-2.1-.1-.4-1.1-.9-3.2-1.9-.5-.3-.9-.2-1.2.2l-1.4 1.6c-.2.3-.5.3-.9.1-2.9-1.2-5.1-3.4-6.4-6.1-.2-.4-.2-.6.1-.9l1-1.2c.3-.4.4-.7.2-1.1l-1.2-2.8c-.1-.2-.3-.3-.6-.4Z" fill="white" />
        </svg>
        <svg className="whatsapp-blue-tick" viewBox="0 0 32 32" aria-hidden="true">
          <path d="m16 1 3.1 2.3 3.9-.1 1.7 3.5 3.5 1.7-.1 3.9L31 16l-2.9 3.7.1 3.9-3.5 1.7-1.7 3.5-3.9-.1L16 31l-3.7-2.3-3.9.1-1.7-3.5-3.5-1.7.1-3.9L1 16l2.3-3.7-.1-3.9 3.5-1.7 1.7-3.5 3.9.1L16 1Z" fill="#229af2" />
          <path d="m9.5 16 4.3 4.3L23 11.7" fill="none" stroke="white" strokeWidth="3.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}
