/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CareerServices } from './components/CareerServices';
import { WorkflowPlanner } from './components/WorkflowPlanner';
import { PackagePricingModal } from './components/PackagePricingModal';
import { Footer } from './components/Footer';
import { WhatsAppContact } from './components/WhatsAppContact';
import { CAREER_SERVICES, CYBER_SERVICES, WEB_SERVICES } from './data/portfolioData';

export default function App() {
  const [packageModalOpen, setPackageModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setPackageModalOpen(true);
  };

  const handleOpenQuote = handleOpenBooking;

  const openWhatsApp = (message: string) => {
    window.open(
      'https://wa.me/254798356149?text=' + encodeURIComponent(message),
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleSelectPackage = (packageLabels: string[], price: number, prices: number[]) => {
    const lines = packageLabels.map((label, index) =>
      (index + 1) + '. ' + label + ': ' + prices[index].toLocaleString()
    );
    openWhatsApp([
      'Hello PrimeDesk Digital, I would like to order:',
      '',
      ...lines,
      '',
      'Total: ' + price.toLocaleString(),
      'Please confirm availability and payment details.',
    ].join('\n'));
  };

  const handleSelectService = (serviceId: string) => {
    const service = [...CAREER_SERVICES, ...CYBER_SERVICES, ...WEB_SERVICES]
      .find(item => item.id === serviceId);
    if (service) {
      openWhatsApp('Hello PrimeDesk Digital, I am interested in ' + service.title + '. Please confirm the price and availability.');
    }
  };

  const handleStartWithTasks = (tasks: string[]) => {
    openWhatsApp('Hello PrimeDesk Digital, I need help with:\n' + tasks.join('\n'));
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-amber-400 selection:text-neutral-950">
      {/* 3-Zone Top Bar Navigation */}
      <Navbar 
        onOpenBooking={handleOpenBooking} 
        onOpenQuote={handleOpenQuote} 
      />

      {/* Hero Section with Split-Screen & Proof Row */}
      <Hero onOpenBooking={handleOpenBooking} />

      <div
        role="separator"
        aria-label="Hero section ends; rotating service images begin"
        className="hero-showcase-divider"
      />

      {/* MAJOR FOCUS: Career Services (CV Revamp, LinkedIn, Compensation Strategy) */}
      <CareerServices 
        onSelectService={handleSelectService}
        onOpenBooking={handleOpenBooking}
      />

      {/* Interactive Workflow & Checklist Section */}
      <WorkflowPlanner onStartWithTasks={handleStartWithTasks} />

      {/* Quiet, Purposeful Footer */}
      <Footer onOpenBooking={handleOpenBooking} />
      <WhatsAppContact />

      {/* Package & Pricing Filter Modal */}
      <PackagePricingModal
        isOpen={packageModalOpen}
        onClose={() => setPackageModalOpen(false)}
        onSelectPackage={handleSelectPackage}
      />


    </div>
  );
}
