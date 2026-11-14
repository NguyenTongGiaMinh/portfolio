import React from 'react';
import { Briefcase, Building2, CheckCircle2, Award, Calendar, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export default function ExperienceInternships({ onOpenDossier }) {
  return (
    <section id="experience" className="py-20 bg-[#0a0f1b] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>INDUSTRY & RESEARCH INTERNSHIPS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Engineering Lab & Industry Experience
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-slate-400">
            OFFICIAL EVALUATIONS // INSTITUTIONAL REVIEWS
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {WORK_EXPERIENCE.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-sans mt-2">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-cyan-300 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-cyan-400" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    {exp.department}
                  </div>
                </div>

                <div className="flex flex-col items-start lg:items-end gap-2 text-xs font-mono text-slate-300">
                  <span className="px-3 py-1 rounded bg-slate-950 border border-slate-800 text-cyan-400 font-semibold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Evaluation highlight banner */}
              <div className="mt-4 p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-xs font-mono text-cyan-300 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>EVALUATION HIGHLIGHT: {exp.evaluation}</span>
              </div>

              {/* Bullet Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-5">
                {exp.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Verification Reference Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>OFFICIAL PERFORMANCE CONFIRMATION SIGNED BY TECHNICAL DIRECTORS</span>
                <button
                  onClick={onOpenDossier}
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Inspect Review Record</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
