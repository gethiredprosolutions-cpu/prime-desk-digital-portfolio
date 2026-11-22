import React, { useState } from 'react';
import { 
  Code, 
  ExternalLink, 
  Layers, 
  Cpu, 
  Gauge, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  X,
  Sparkles
} from 'lucide-react';
import { PAST_PROJECTS, WEB_SERVICES, WEB_IMAGE } from '../data/portfolioData';
import { Project } from '../types';

interface WebDevServicesProps {
  onSelectService: (serviceId: string) => void;
  onOpenBooking: () => void;
}

export const WebDevServices: React.FC<WebDevServicesProps> = ({ onSelectService, onOpenBooking }) => {
  const [filter, setFilter] = useState<'all' | 'web-app' | 'portfolio' | 'cyber-tool'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'all' 
    ? PAST_PROJECTS 
    : PAST_PROJECTS.filter(p => p.category === filter);

  return (
    <section id="web-development" className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-3">
            <span>Additional Specialized Practice</span>
            <span className="text-neutral-600">·</span>
            <span>Digital Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 tracking-tight leading-tight [text-wrap:balance]">
            Bespoke Web Development &amp; Technical Systems
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
            As an elite career and cyber practitioner, I also engineer bespoke, blisteringly fast web platforms and personal brand portfolios that turn inbound visitors into high-conviction clients. Zero bloated page builders. Pure, hand-crafted TypeScript and modern architecture.
          </p>
        </div>

        {/* Feature Split with Web Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 min-h-[380px]">
            <img
              src={WEB_IMAGE}
              alt="Bespoke Web Development Practice"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-neutral-950/90 border border-neutral-800/90 backdrop-blur-md">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                The 100/100 Performance Benchmark
              </span>
              <p className="text-sm text-neutral-200">
                Every web system is hand-crafted with React 19 and Tailwind CSS, achieving sub-second global time-to-interactive, zero layout shift, and bank-grade client security.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 transition-colors">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400">
                    <Gauge className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-100">Zero-Bloat Performance Engineering</h3>
                    <p className="text-xs text-neutral-400">Sub-400ms time-to-first-byte globally</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400">100 Lighthouse</span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed mt-2">
                Say goodbye to clunky 4MB WordPress themes and slow plugins. We build lean, accessible web systems that rank effortlessly on Google and convert high-net-worth clients immediately.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 transition-colors">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-100">Cyber-Hardened Architecture</h3>
                    <p className="text-xs text-neutral-400">Zero third-party tracking cookies</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-400">A+ Security Header</span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed mt-2">
                Engineered with strict Content Security Policies (CSP), subresource integrity, and zero telemetry leaks. Your clients experience utmost privacy and trust from the first page load.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 transition-colors">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-100">Full Technical Handover &amp; Maintenance</h3>
                    <p className="text-xs text-neutral-400">Clean Git repository &amp; automated CI/CD</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-amber-400">100% Client Ownership</span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed mt-2">
                You own 100% of the code, domain, and infrastructure with zero vendor lock-in. Full setup with automated deployment on modern serverless edge networks.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Skills Matrix */}
        <div className="mb-20 p-6 sm:p-8 rounded-2xl border border-neutral-800 bg-neutral-900/30">
          <div className="mb-6">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
              Technical Stack &amp; Mastery
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-100">
              Core Engineering Stack &amp; Infrastructure
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-950/60">
              <span className="text-xs font-semibold text-neutral-200 block mb-3">Frontend Architecture</span>
              <div className="space-y-2 text-xs text-neutral-400">
                <div className="flex justify-between"><span>React 19 &amp; Next.js</span><span className="text-neutral-300 font-mono">Expert</span></div>
                <div className="flex justify-between"><span>TypeScript</span><span className="text-neutral-300 font-mono">Strict Typings</span></div>
                <div className="flex justify-between"><span>Tailwind CSS v4</span><span className="text-neutral-300 font-mono">Component Systems</span></div>
                <div className="flex justify-between"><span>Performance &amp; SEO</span><span className="text-emerald-400 font-mono">100/100 CWV</span></div>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-950/60">
              <span className="text-xs font-semibold text-neutral-200 block mb-3">Backend &amp; Cloud</span>
              <div className="space-y-2 text-xs text-neutral-400">
                <div className="flex justify-between"><span>Node.js / Express</span><span className="text-neutral-300 font-mono">REST &amp; WebSockets</span></div>
                <div className="flex justify-between"><span>Python</span><span className="text-neutral-300 font-mono">Data &amp; Automation</span></div>
                <div className="flex justify-between"><span>PostgreSQL / Cloud SQL</span><span className="text-neutral-300 font-mono">Relational Schemas</span></div>
                <div className="flex justify-between"><span>Edge &amp; Serverless</span><span className="text-cyan-400 font-mono">Global CDN</span></div>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-950/60">
              <span className="text-xs font-semibold text-neutral-200 block mb-3">Security &amp; Hardening</span>
              <div className="space-y-2 text-xs text-neutral-400">
                <div className="flex justify-between"><span>OWASP Top 10 Mitigation</span><span className="text-neutral-300 font-mono">Hardened</span></div>
                <div className="flex justify-between"><span>Web Crypto &amp; FIDO2</span><span className="text-neutral-300 font-mono">Zero-Trust</span></div>
                <div className="flex justify-between"><span>Cloudflare Defense / WAF</span><span className="text-neutral-300 font-mono">DDoS Immunity</span></div>
                <div className="flex justify-between"><span>Zero-Telemetry Privacy</span><span className="text-amber-400 font-mono">GDPR Compliant</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* PAST PROJECTS SHOWCASE */}
        <div id="past-projects" className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                Portfolio Showcase
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-100">
                Featured Past Projects &amp; Live Systems
              </h3>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-lg shrink-0">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'web-app', label: 'Web Apps' },
                { id: 'portfolio', label: 'Executive Sites' },
                { id: 'cyber-tool', label: 'Cyber Tools' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as any)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                    filter === tab.id
                      ? 'bg-emerald-500 text-neutral-950 font-semibold shadow-sm'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 transition-all overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Image container */}
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-neutral-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent" />
                    
                    {/* Category unboxed tag */}
                    <div className="absolute top-4 left-4 text-xs font-medium text-neutral-300 bg-neutral-950/80 px-2.5 py-1 rounded backdrop-blur-md border border-neutral-800">
                      <span>{project.subtitle}</span>
                    </div>

                    {/* Quick Metric overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-neutral-300">
                      {project.metrics.map((m, i) => (
                        <span key={i} className="bg-neutral-900/90 px-2 py-0.5 rounded border border-neutral-800 text-emerald-400">
                          {m.label}: <strong className="text-neutral-100">{m.value}</strong>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <h4 className="text-xl font-bold text-neutral-100 group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h4>
                      <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
                    </div>

                    <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech stack tags */}
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-400">
                      {project.techStack.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-400 font-medium">
                  <span>Click to view technical case study</span>
                  <span className="text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Inspect Specs <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web Development Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WEB_SERVICES.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-7 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 transition-all hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-xs font-semibold text-emerald-400 tracking-wide">
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
                    Included Architecture:
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800/80 mb-6 text-xs text-neutral-400">
                  <span className="text-neutral-200 font-medium">Recommended For:</span> {service.idealFor}
                </div>
              </div>

              {/* Bottom Price & Action */}
              <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-neutral-500 block">Starting Investment</span>
                  <span className="text-2xl font-bold text-neutral-100 font-mono tabular-nums">
                    ${service.basePrice.toLocaleString()}
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
                    className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1"
                  >
                    <span>Commission Build</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* PROJECT LIGHTBOX MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                {selectedProject.subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-100">
                {selectedProject.title}
              </h3>
            </div>

            {/* Metrics Strip */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-neutral-900/70 border border-neutral-800 mb-6">
              {selectedProject.metrics.map((m, i) => (
                <div key={i} className="text-center">
                  <span className="text-xs text-neutral-400 block">{m.label}</span>
                  <span className="text-lg font-bold text-neutral-100 font-mono">{m.value}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-6 text-sm text-neutral-300">
              <div>
                <strong className="text-neutral-100 block mb-1">The Engineering Challenge:</strong>
                <p className="text-neutral-400 leading-relaxed">{selectedProject.challenge}</p>
              </div>

              <div>
                <strong className="text-neutral-100 block mb-1">The Delivered Architecture:</strong>
                <p className="text-neutral-400 leading-relaxed">{selectedProject.solution}</p>
              </div>

              <div>
                <strong className="text-neutral-100 block mb-2">Technologies Deployed:</strong>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span key={idx} className="bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs px-2.5 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(null)}
                className="text-xs font-medium text-neutral-400 hover:text-white"
              >
                Close Project Viewer
              </button>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  onOpenBooking();
                }}
                className="px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>Request Similar Web System</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
