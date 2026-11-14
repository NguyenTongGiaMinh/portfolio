import React from 'react';
import { Users, HeartHandshake, Compass, CheckCircle2, ShieldCheck, Flag, Sparkles } from 'lucide-react';
import { LEADERSHIP_COMMUNITY } from '../data/portfolioData';

export default function LeadershipCommunity({ onOpenDossier }) {
  return (
    <section id="leadership" className="py-20 bg-[#080d18] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5" />
              <span>LEADERSHIP & SOCIAL IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Community Leadership & Social Responsibility
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-slate-400">
            EMPOWERING YOUTH // DISASTER RELIEF & CHARITY
          </div>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {LEADERSHIP_COMMUNITY.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-3">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Flag className="w-3.5 h-3.5" />
                    {item.role.split('(')[0]}
                  </span>
                  <span className="text-slate-400">{item.period}</span>
                </div>

                <h3 className="text-lg font-bold text-white font-sans mb-4">
                  {item.organization}
                </h3>

                <div className="space-y-3">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>VERIFIED COMMUNITY CERTIFICATE</span>
                <button
                  onClick={onOpenDossier}
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Inspect</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Humanitarian Highlight Box */}
        <div className="mt-10 p-6 rounded-xl bg-slate-950/90 border border-amber-500/20 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-950/80 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-sans">
                  Human-Centered Purpose in Engineering
                </h4>
                <p className="text-xs text-slate-300 mt-0.5 max-w-3xl">
                  Whether developing assistive AI for the visually impaired (SafeStride), designing healthcare tablet enclosures for elderly patients at VAST, or organizing relief operations for 225 households in Tuy An Tây (Đắk Lắk), engineering at its core must serve human dignity.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 bg-amber-950/50 px-3 py-1.5 rounded border border-amber-500/30 whitespace-nowrap">
              <span>COMMENDATION OF MERIT</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
