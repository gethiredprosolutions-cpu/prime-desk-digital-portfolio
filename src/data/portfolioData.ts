import { Project, ServiceItem, BulletComparison, Testimonial } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_career_executive_1793957750306.jpg';
export const HERO_LANDSCAPE_TRIO = '/assets/brand/hero-studio-gold-teal.png';
export const CAREER_IMAGE = '/assets/aistudio/pexels-anntarazevich-5598290_88e9c99e.jpg';
export const CYBER_IMAGE = '/assets/aistudio/pexels-markus-winkler-1430818-30901557_f366c84e.jpg';
export const WEB_IMAGE = '/assets/aistudio/pexels-peaky-29445974_5b45597d.jpg';
export const INTERVIEW_NEGOTIATION_IMAGE = '/src/assets/images/service_negotiation_interview_1793968987854.jpg';

export const PRACTICE_SHOWCASE_SLIDES = [
  {
    id: 1,
    image: CAREER_IMAGE,
    objectPosition: 'object-center',
    category: 'Career Services',
    title: 'Executive CV & Career Revamp',
    subtitle: 'Targeted qualifications, quantified achievements, and ATS-ready formatting that give recruiters a clear reason to shortlist you.',
    tag: 'CV & Career',
    badgeColor: 'border-amber-400/30 text-amber-400 bg-amber-400/10'
  },
  {
    id: 2,
    image: CYBER_IMAGE,
    objectPosition: 'object-[center_78%]',
    category: 'Cyber Services',
    title: 'Document Formatting & Online Application Support',
    subtitle: 'Polished reports and letters, handwritten-to-Word typing, PDF preparation, and end-to-end online application assistance.',
    tag: 'Cyber & Docs',
    badgeColor: 'border-cyan-400/30 text-cyan-400 bg-cyan-400/10'
  },
  {
    id: 3,
    image: WEB_IMAGE,
    objectPosition: 'object-[center_35%]',
    category: 'Website Development',
    title: 'Custom Business Website Development',
    subtitle: 'Mobile-tested websites with built-in bookings, search-friendly structure, secure HTTPS setup, and full source-code ownership.',
    tag: 'Full Ownership',
    badgeColor: 'border-emerald-400/30 text-emerald-400 bg-emerald-400/10'
  }
];

export const METRICS_DATA = [
  { value: '9,000+', label: 'Executive CVs & LinkedIn Profiles Rebuilt' },
  { value: '48h', label: 'Average Delivery Window' },
];

export const CAREER_SERVICES: ServiceItem[] = [
  {
    id: 'cv-revamp',
    title: 'Executive CV & Resume Re-Engineering',
    category: 'career',
    deliveryTime: '48 to 72 hours',
    basePrice: 320,
    highlight: 'Flagship Service',
    description: 'Transform passive job descriptions into high-velocity career achievements using the Google XYZ impact formula and strict ATS-compliance algorithms.',
    deliverables: [
      'Comprehensive audit of current document vulnerabilities',
      'Full re-write with quantified metrics and high-impact action verbs',
      'ATS algorithmic formatting (100% parsing success on Workday, Lever, Greenhouse)',
      'Editable Word (.docx) + print-ready typography PDF',
      'Tailored keyword insertion for your target tier-1 organizations',
      'Direct 1-on-1 strategy briefing to clarify key career milestones'
    ],
    idealFor: 'Software Engineers, Engineering Managers, Product Leaders, Directors, and C-Suite Executives targeting $180k-$500k+ compensation.'
  },
  {
    id: 'linkedin-optimization',
    title: 'LinkedIn Authority & Executive Presence',
    category: 'career',
    deliveryTime: '48 hours',
    basePrice: 260,
    highlight: 'High Demand',
    description: 'Rebuild your LinkedIn profile into a recruiter magnetic beacon. Optimized for recruiter Boolean search algorithms, thought leadership, and inbound executive inquiries.',
    deliverables: [
      'Search-indexed 220-character value-proposition Headline',
      'Storytelling-driven About section showcasing strategic leadership and scale',
      'Complete Experience section re-architecture with visual separators',
      'Featured section curation & custom banner design direction',
      'Algorithmic Creator Mode optimization & engagement checklist',
      'Direct outreach message scripts for approaching executive recruiters'
    ],
    idealFor: 'Professionals seeking passive inbound recruiter inquiries, board appointments, or consulting engagements.'
  },
  {
    id: 'cover-letter-pitch',
    title: 'High-Impact Cover Letter & Executive Memo',
    category: 'career',
    deliveryTime: '24 to 48 hours',
    basePrice: 180,
    highlight: 'Precision Tailored',
    description: 'Bespoke narrative cover letters and 1-page executive memos designed for highly competitive positions where boilerplate letters get discarded.',
    deliverables: [
      'Targeted 1-page executive memo customized to a specific dream company or role',
      'Modular template framework easily adaptable for future applications',
      'Direct value proposition addressing company-specific strategic pain points',
      'Elimination of generic cliches and corporate fluff'
    ],
    idealFor: 'Candidates applying to competitive firms, venture-backed startups, or executive search firms.'
  },
  {
    id: 'interview-coaching',
    title: 'Interview Mastery & Behavioral Interrogation Coaching',
    category: 'career',
    deliveryTime: 'Scheduled Session',
    basePrice: 350,
    highlight: 'High Conversion',
    description: 'One-on-one executive interview preparation, behavioral question deconstruction, and reverse-interrogation frameworks to stand out from other candidates.',
    deliverables: [
      '90-minute intensive live strategy & mock interview simulation',
      'Behavioral framework coaching (STAR & CAR methods adapted for executives)',
      'Executive storytelling framework for "Tell me about yourself" and leadership failures',
      'Reverse-interrogation strategy: high-signal questions that impress C-level interviewers',
      'Full session recording and personalized critique breakdown'
    ],
    idealFor: 'Candidates entering final interview rounds or panel presentations with hiring executives.'
  },
  {
    id: 'salary-negotiation',
    title: 'Executive Compensation & Salary Negotiation Blueprint',
    category: 'career',
    deliveryTime: '24-hour turnaround',
    basePrice: 290,
    highlight: 'Maximum ROI',
    description: 'Data-backed salary benchmarking and word-for-word counter-offer negotiation scripts for base compensation, sign-on bonuses, equity, and severance terms.',
    deliverables: [
      'Verified tech & executive compensation benchmark analysis across percentiles',
      'Custom counter-offer scripts for phone calls and email communications',
      'Equity valuation & dilution analysis (RSUs, ISOs, NSOs, profit interests)',
      'Multiple-offer leverage strategies without burning corporate bridges',
      'Direct WhatsApp / phone advisory access during active negotiation window'
    ],
    idealFor: 'Professionals with verbal offers seeking to maximize total compensation packages.'
  },
  {
    id: 'executive-bio',
    title: 'Executive Bio & Board / Advisory One-Pager',
    category: 'career',
    deliveryTime: '48 to 72 hours',
    basePrice: 240,
    highlight: 'Leadership Suite',
    description: 'A third-person executive narrative biography and 1-page briefing dossier crafted for board appointments, angel syndicate memberships, and speaking panels.',
    deliverables: [
      'Compelling third-person executive biography (long-form & 150-word condensed versions)',
      'Executive leadership pillar framework (strategic domains, governance, technical scale)',
      'Board-ready 1-page PDF presentation layout with clean typography',
      'Key accomplishments, publications, and advisory appointments curation'
    ],
    idealFor: 'Founders, VPs, Directors, and Partners seeking board seats or advisory roles.'
  },
  {
    id: 'job-search-outbound',
    title: 'Hidden Job Market Strategy & Recruiter Outbound Roadmap',
    category: 'career',
    deliveryTime: '3 business days',
    basePrice: 310,
    highlight: 'Outbound Engine',
    description: 'Bypass online application black holes. We equip you with direct outreach scripts, target company mapping, and headhunter engagement blueprints.',
    deliverables: [
      'List of top tier-1 retained executive search firms in your sector',
      'Word-for-word cold message templates for contacting hiring managers and founders',
      'LinkedIn networking playbook for high-conviction warm introductions',
      'Applicant tracking avoidance checklist: getting your CV directly onto desks'
    ],
    idealFor: 'Candidates frustrated with job boards wanting direct access to unadvertised leadership roles.'
  },
  {
    id: 'career-pivot',
    title: 'Career Transition & Strategic Re-Branding',
    category: 'career',
    deliveryTime: '3 to 5 days',
    basePrice: 380,
    highlight: 'Pivotal Shift',
    description: 'Complete narrative re-framing for senior professionals transitioning industries, moving from IC to management, or pivoting from corporate to high-growth tech.',
    deliverables: [
      'Transferable skills mapping & industry-specific terminology alignment',
      'Repositioning strategy addressing experience gaps and narrative objections',
      'Targeted CV and LinkedIn re-alignment tailored to your target industry',
      'Personal branding storyline explaining the strategic rationale behind your pivot'
    ],
    idealFor: 'Professionals pivoting from corporate to startups, switching tech stacks, or moving into executive leadership.'
  }
];

export const CYBER_SERVICES: ServiceItem[] = [
  {
    id: 'osint-audit',
    title: 'Executive Digital Footprint & OSINT Exposure Audit',
    category: 'cyber',
    deliveryTime: '3 to 5 days',
    basePrice: 420,
    highlight: 'Threat Defense',
    description: 'Deep reconnaissance across open sources, data brokers, and breach databases to map, quantify, and eliminate your personal and family attack surface.',
    deliverables: [
      'Comprehensive OSINT exposure report (doxxing risk, exposed cell/home addresses)',
      'Breach credential scan across 15+ billion compromised records',
      'Automated and manual data broker opt-out and removal execution guide',
      'Social media leakage assessment and privacy lockdown checklist',
      'Risk mitigation priority roadmap with immediate remediation steps'
    ],
    idealFor: 'High-earning professionals, founders, crypto holders, and executives facing targeted threats or spear-phishing.'
  },
  {
    id: 'device-hardening',
    title: 'Personal Threat Surface & Hardware Security Hardening',
    category: 'cyber',
    deliveryTime: '2 to 3 days',
    basePrice: 580,
    highlight: 'Zero-Trust Protocol',
    description: 'Bespoke privacy architecture for your personal and work laptops, smartphones, and communications. Hardware security keys, encrypted comms, and backup resilience.',
    deliverables: [
      'Hardware security key setup (YubiKey 5 Series / FIDO2 WebAuthn)',
      'Zero-knowledge password vault architecture & master key recovery safeguards',
      'Encrypted communications setup (Signal protocol, custom domain Proton/SimpleLogin alias routing)',
      'Mobile device SIM-swap prevention and carrier lock procedures',
      'Encrypted cold backup protocol and emergency digital estate plan'
    ],
    idealFor: 'Leaders handling sensitive client IP, proprietary source code, or confidential negotiations.'
  }
];

export const WEB_SERVICES: ServiceItem[] = [
  {
    id: 'bespoke-portfolio',
    title: 'Executive & Personal Brand Web Architecture',
    category: 'web',
    deliveryTime: '7 to 10 days',
    basePrice: 1200,
    highlight: 'Conversion Engine',
    description: 'Bespoke, blazingly fast personal branding websites that position you as an undisputed authority in your field. Engineered for conversions, search ranking, and speed.',
    deliverables: [
      'Custom React/TypeScript/Tailwind bespoke design (zero cookie-cutter templates)',
      '100/100 Google Lighthouse performance score guarantee',
      'Built-in appointment scheduling & lead capture forms',
      'Mobile-first responsive architecture and subtle micro-animations',
      'Domain setup, DNS configuration, and automated SSL deployment'
    ],
    idealFor: 'Consultants, fractional executives, agencies, and high-tier domain specialists.'
  },
  {
    id: 'custom-web-platform',
    title: 'Full-Stack Web Applications & Client Portals',
    category: 'web',
    deliveryTime: '2 to 4 weeks',
    basePrice: 2600,
    highlight: 'Enterprise Grade',
    description: 'Custom web platforms, interactive tools, client dashboards, and SaaS landing pages engineered with modern full-stack frameworks and bank-grade security practices.',
    deliverables: [
      'Modern frontend architecture with React, Next.js, or Vite',
      'Node.js / Express or Python serverless API architecture',
      'Database integration (PostgreSQL, Supabase, or Firestore)',
      'OWASP Top 10 security hardening and role-based access control',
      'Complete code handover with documentation and continuous deployment pipeline'
    ],
    idealFor: 'Startups, digital service firms, and specialized businesses requiring bespoke software solutions.'
  }
];

export const BULLET_COMPARISONS: BulletComparison[] = [
  {
    role: 'Senior Software Engineer',
    industry: 'Cloud Infrastructure / SaaS',
    before: 'Responsible for building microservices using Go and React. Worked on bug fixes and improved performance of the user portal with the team.',
    after: 'Architected 4 high-concurrency Go microservices processing 18M+ daily events; reduced API p99 latency from 420ms to 48ms and slashed AWS infrastructure costs by $145,000 annually.',
    improvements: ['Replaced passive role language with active leadership verb', 'Quantified exact event scale and latency reduction', 'Substantiated real financial ROI ($145k/yr cost savings)'],
    metricGain: '+310% recruiter response rate in pilot test'
  },
  {
    role: 'VP of Product Management',
    industry: 'FinTech / Payments',
    before: 'Managed a team of product managers and designers. Led the mobile app revamp and launched several new features that customers liked.',
    after: 'Directed a cross-functional 14-person product organization across mobile & web; spearheaded the core checkout re-architecture, lifting payment conversion by 18.4% and delivering $12.8M incremental ARR in FY25.',
    improvements: ['Specified team size and cross-functional scope', 'Replaced generic feature launches with business outcome', 'Anchored achievement in concrete ARR growth'],
    metricGain: 'Landed 3 C-level interviews in 14 days'
  },
  {
    role: 'Cybersecurity Analyst',
    industry: 'Information Security & Defense',
    before: 'Monitored SIEM alerts and performed vulnerability scans. Helped configure firewalls and responded to security incidents when needed.',
    after: 'Orchestrated threat detection across 4,200 corporate endpoints; tuned SIEM correlation rules to decrease alert fatigue by 62% while shrinking incident MTTR from 4.2 hours to 28 minutes.',
    improvements: ['Quantified endpoint coverage and scale', 'Demonstrated operational efficiency (62% alert fatigue cut)', 'Proved incident response capability with MTTR metric'],
    metricGain: 'Promoted to Lead Security Engineer at +38% base'
  }
];

export const PAST_PROJECTS: Project[] = [
  {
    id: 'apex-horizon',
    title: 'Apex Horizon',
    subtitle: 'Executive Career Mentorship & Talent Network',
    category: 'web-app',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Node.js API', 'Lighthouse 100'],
    metrics: [
      { label: 'Lighthouse Score', value: '100/100' },
      { label: 'Initial Load', value: '0.38s' },
      { label: 'Active Members', value: '1,420+' }
    ],
    description: 'A high-converting talent network platform connecting elite executives with venture capital boards and advisory opportunities.',
    challenge: 'The client needed a frictionless, ultra-fast platform that exuded executive prestige while handling complex profile matching and calendar bookings.',
    solution: 'Designed and engineered a zero-bloat web application using React and Tailwind v4, integrating instant profile search, dynamic role matching, and secure candidate intake.',
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Express', 'Vite', 'PostgreSQL'],
    image: WEB_IMAGE,
    featured: true
  },
  {
    id: 'aegis-protocol',
    title: 'Aegis Protocol',
    subtitle: 'Executive Threat Surface & OSINT Client Portal',
    category: 'cyber-tool',
    tags: ['Cybersecurity', 'React', 'TypeScript', 'Zero-Trust', 'Data Visualization'],
    metrics: [
      { label: 'Threats Detected', value: '28,400+' },
      { label: 'Mean Audit Time', value: '18 mins' },
      { label: 'Security Rating', value: 'A+ Grade' }
    ],
    description: 'An executive cybersecurity assessment dashboard providing real-time credential exposure alerts and zero-logging client reporting.',
    challenge: 'Security assessments are often buried in dense 60-page PDF reports that non-technical leaders struggle to parse and act upon.',
    solution: 'Built an interactive, visual threat scoring interface where executives inspect their leaked credentials, data broker footprints, and toggle 1-click remediation actions.',
    techStack: ['TypeScript', 'React 19', 'Tailwind CSS', 'Web Crypto API', 'Chart.js'],
    image: CYBER_IMAGE,
    featured: true
  },
  {
    id: 'vanguard-capital',
    title: 'Vanguard Strategic Partners',
    subtitle: 'Private Equity & Venture Advisory Web Suite',
    category: 'portfolio',
    tags: ['Bespoke Branding', 'Next-Gen UI', 'Performance', 'SEO Structured Data'],
    metrics: [
      { label: 'Inbound Inquiries', value: '+142%' },
      { label: 'Bounce Rate', value: '24.1%' },
      { label: 'Average Dwell', value: '3m 48s' }
    ],
    description: 'A luxury, editorial-grade institutional web presence for a premier boutique investment advisory firm.',
    challenge: 'The firm suffered from a dated WordPress site with 4.8s load times and negligible lead conversion among prospective founders.',
    solution: 'Rebuilt from the ground up with clean typography, responsive data tables, interactive fund thesis calculators, and institutional credibility.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    image: HERO_IMAGE,
    featured: false
  },
  {
    id: 'stature-bio',
    title: 'Stature Therapeutics',
    subtitle: 'Biotech Executive & Clinical Research Hub',
    category: 'web-app',
    tags: ['Scientific UI', 'Data Filtering', 'Responsive Web', 'HIPAA Baseline'],
    metrics: [
      { label: 'Clinical Trials', value: '14 Active' },
      { label: 'Data Accuracy', value: '99.9%' },
      { label: 'Search Speed', value: '12ms' }
    ],
    description: 'Interactive scientific pipeline visualizer and board-level presentation platform for an emerging clinical-stage oncology team.',
    challenge: 'Complex trial phases and chemical compound libraries were cumbersome to present to prospective investors and pharma partners.',
    solution: 'Created an intuitive timeline and compound inspection view with zero layout shifts, fluid filtering, and interactive trial metrics.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'SVG Canvas', 'REST API'],
    image: CAREER_IMAGE,
    featured: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Marcus Sterling',
    role: 'VP of Engineering',
    company: 'Series-B Fintech (London)',
    serviceUsed: 'Executive CV Revamp + Interview Coaching',
    outcome: '+£42,000 Base Salary Increase & 4 Competing Offers',
    quote: 'The team completely deconstructed my passive 3-page CV into a lethal 2-page document of quantified outcomes. Within 10 days of applying with the new resume, I had interviews at Stripe, Revolut, and Monzo. The salary negotiation playbook alone paid for itself tenfold.',
    avatarSeed: 'Marcus'
  },
  {
    name: 'Elena Rostova',
    role: 'Principal Cybersecurity Consultant',
    company: 'Global Advisory Practice',
    serviceUsed: 'LinkedIn Optimization + OSINT Threat Audit',
    outcome: '3 Board Advisory Inquiries & Zero Digital Exposure',
    quote: 'As a security professional, my digital hygiene had to be airtight. They not only scrubbed my exposed personal address and credentials from rogue data brokers, but also re-architected my LinkedIn into a magnet for high-ticket consulting retainers.',
    avatarSeed: 'Elena'
  },
  {
    name: 'Julian Vance-Meyer',
    role: 'Managing Partner',
    company: 'Vanguard Capital',
    serviceUsed: 'Bespoke Web Platform + Executive Branding',
    outcome: '140% Increase in Qualified Deal Inquiries',
    quote: 'We commissioned them to build both our firm’s bespoke web portal and polish our partner profiles. The 100/100 Lighthouse performance and clean editorial aesthetic instantly elevated our market standing with LP investors.',
    avatarSeed: 'Julian'
  }
];
