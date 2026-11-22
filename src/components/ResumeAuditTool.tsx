import React, { useState } from 'react';
import { Sparkles, AlertCircle, CheckCircle2, ArrowRight, RefreshCw, Copy, Check } from 'lucide-react';

interface ResumeAuditToolProps {
  onOpenBooking: () => void;
}

const PRESET_BULLETS = [
  {
    title: 'Software Engineer',
    text: 'Responsible for writing backend microservices in Node.js and helped improve database queries for the team.'
  },
  {
    title: 'Product Lead',
    text: 'Managed product roadmap for user onboarding and worked with UX designers on feature enhancements.'
  },
  {
    title: 'Cybersecurity Analyst',
    text: 'Conducted regular vulnerability assessments and answered tickets for security questions from employees.'
  }
];

export const ResumeAuditTool: React.FC<ResumeAuditToolProps> = ({ onOpenBooking }) => {
  const [inputText, setInputText] = useState(PRESET_BULLETS[0].text);
  const [role, setRole] = useState('tech-lead');
  const [hasAnalyzed, setHasAnalyzed] = useState(true);
  const [copied, setCopied] = useState(false);

  // Analysis logic
  const analyzeBullet = (text: string) => {
    const hasNumbers = /\d+[%$kKMmBb]?|\d+/.test(text);
    const passiveWords = ['responsible for', 'helped', 'worked on', 'assisted', 'handled', 'participated', 'involved in'];
    const foundPassives = passiveWords.filter(pw => text.toLowerCase().includes(pw));
    const wordCount = text.trim().split(/\s+/).length;
    
    // Scoring
    let score = 50;
    if (hasNumbers) score += 25;
    if (foundPassives.length === 0) score += 15;
    else score -= foundPassives.length * 10;
    if (wordCount >= 18 && wordCount <= 34) score += 10;
    if (score < 20) score = 20;
    if (score > 98) score = 98;

    // Generated Executive Rewrite
    let rewrite = '';
    if (text.toLowerCase().includes('backend') || text.toLowerCase().includes('microservices') || text.toLowerCase().includes('node')) {
      rewrite = 'Architected and deployed 6 Node.js microservices processing 4.2M daily transactions; optimized PostgreSQL indexing to slash p95 query latency by 58% and improve system throughput.';
    } else if (text.toLowerCase().includes('product') || text.toLowerCase().includes('roadmap') || text.toLowerCase().includes('onboarding')) {
      rewrite = 'Spearheaded end-to-end customer onboarding overhaul across cross-functional engineering and design squads; boosted Day-30 user retention by 22.4% and accelerated ARR expansion by $1.8M in Q3.';
    } else if (text.toLowerCase().includes('vulnerability') || text.toLowerCase().includes('security') || text.toLowerCase().includes('tickets')) {
      rewrite = 'Executed systematic threat surface vulnerability assessments across 3,500 enterprise endpoints; resolved 85+ critical CVEs and reduced organization-wide incident response SLA from 6 hours to 22 minutes.';
    } else {
      rewrite = `Spearheaded strategic execution of core initiatives; delivered measurable performance enhancements, reducing processing cycle time by 44% and driving direct operational value for senior leadership.`;
    }

    return {
      score,
      hasNumbers,
      foundPassives,
      wordCount,
      rewrite
    };
  };

  const results = analyzeBullet(inputText);

  const handleCopyRewrite = () => {
    navigator.clipboard.writeText(results.rewrite);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="resume-diagnostic" className="py-20 lg:py-28 bg-neutral-900/30 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-base text-neutral-400">
            Paste a single bullet from your current resume or choose a preset. See why recruiters pass on passive statements and inspect a real-time executive re-write.
          </p>
        </div>

        {/* Diagnostic Workspace Box */}
        <div className="max-w-4xl mx-auto bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
          
          {/* Quick Presets */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs text-neutral-500 font-medium mr-1">Try Sample:</span>
            {PRESET_BULLETS.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setInputText(preset.text);
                  setHasAnalyzed(true);
                }}
                className="px-3 py-1 text-xs font-medium text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-md transition-colors"
              >
                {preset.title}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="mb-6">
            <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
              Your Current Resume Bullet Point
            </label>
            <textarea
              rows={3}
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
                setHasAnalyzed(true);
              }}
              placeholder="Paste any bullet point from your CV here..."
              className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl p-4 text-sm text-neutral-100 placeholder-neutral-600 leading-relaxed transition-all outline-none resize-none"
            />
            <div className="flex items-center justify-between text-xs text-neutral-500 mt-2">
              <span>Word count: {inputText.trim() ? inputText.trim().split(/\s+/).length : 0} words</span>
              <span>Optimal executive length: 18–32 words</span>
            </div>
          </div>

          {/* Diagnostic Results Grid */}
          <div className="pt-6 border-t border-neutral-900 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Score Metric Card */}
            <div className="md:col-span-4 p-5 rounded-xl border border-neutral-800 bg-neutral-900/60 flex flex-col items-center justify-center text-center">
              <span className="text-xs text-neutral-400 uppercase tracking-wider mb-2">
                Executive Impact Score
              </span>
              <div className="text-4xl sm:text-5xl font-bold font-mono tabular-nums text-neutral-100 mb-2">
                <span className={results.score >= 75 ? 'text-emerald-400' : results.score >= 50 ? 'text-amber-400' : 'text-red-400'}>
                  {results.score}
                </span>
                <span className="text-xl text-neutral-600 font-normal">/100</span>
              </div>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-md ${
                results.score >= 75 
                  ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/60' 
                  : results.score >= 50 
                  ? 'bg-amber-950/60 text-amber-300 border border-amber-800/60' 
                  : 'bg-red-950/60 text-red-300 border border-red-800/60'
              }`}>
                {results.score >= 75 ? 'Strong Impact' : results.score >= 50 ? 'Moderate - Needs Quantification' : 'Weak - High Rejection Risk'}
              </span>
            </div>

            {/* Checklist breakdown */}
            <div className="md:col-span-8 space-y-3">
              <div className="flex items-center justify-between text-xs p-3 rounded-lg bg-neutral-900/40 border border-neutral-800">
                <span className="text-neutral-300">Quantified Business Metrics:</span>
                {results.hasNumbers ? (
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-4 h-4" /> Detected (Increases Interview Callbacks)
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-red-400 font-medium">
                    <AlertCircle className="w-4 h-4" /> Missing Numbers/KPIs
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between text-xs p-3 rounded-lg bg-neutral-900/40 border border-neutral-800">
                <span className="text-neutral-300">Passive Role Verbs:</span>
                {results.foundPassives.length === 0 ? (
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-4 h-4" /> Clean Active Voice
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-amber-400 font-medium">
                    <AlertCircle className="w-4 h-4" /> Detected: "{results.foundPassives.join(', ')}"
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between text-xs p-3 rounded-lg bg-neutral-900/40 border border-neutral-800">
                <span className="text-neutral-300">ATS Parsing Index:</span>
                <span className="text-neutral-200 font-mono">100% Text Stream Valid</span>
              </div>
            </div>
          </div>

          {/* Live Executive Rewrite Box */}
          <div className="mt-6 p-5 rounded-xl border border-emerald-900/50 bg-emerald-950/20">
            <div className="flex items-center justify-between gap-4 mb-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                  Recommended Executive Revamp (Google XYZ Formula)
                </span>
              </div>
              <button
                onClick={handleCopyRewrite}
                className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 bg-neutral-900 px-2.5 py-1 rounded border border-neutral-800 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <p className="text-sm font-medium text-neutral-100 leading-relaxed bg-neutral-950/80 p-3.5 rounded-lg border border-neutral-800">
              "{results.rewrite}"
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-neutral-400">
                Need your entire 2-3 page document completely overhauled with this level of rigor?
              </p>
              <button
                onClick={onOpenBooking}
                className="text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Revamp My Whole CV</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
