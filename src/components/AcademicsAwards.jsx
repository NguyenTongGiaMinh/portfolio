import React, { useState } from 'react';
import { Award, BookOpen, GraduationCap, CheckCircle, TrendingUp, Globe2, ShieldCheck, ChevronRight } from 'lucide-react';
import { HONORS_AWARDS } from '../data/portfolioData';

export default function AcademicsAwards({ onOpenDossier }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Robotics Engineering', 'International Innovation', 'Computer Science', 'Mathematics'];

  const filteredAwards = activeCategory === 'All' 
    ? HONORS_AWARDS 
    : HONORS_AWARDS.filter(a => a.category === activeCategory);

  return (
    <section id="academics" className="py-20 bg-[#0a0f1b] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ACADEMIC RIGOR & INTERNATIONAL RECOGNITION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Standardized Excellence & Global Honors
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-slate-400">
            OFFICIALLY VERIFIED // NEWTON GRAMMAR SCHOOL & COLLEGE BOARD
          </div>
        </div>

        {/* Standardized Scorecard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* SAT Card */}
          <div className="p-6 rounded-xl bg-slate-900/90 border border-cyan-500/30 relative overflow-hidden group hover:border-cyan-400 transition-all">
            <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-2">
              <span>SAT SCORE</span>
              <span className="px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800 text-[10px]">97th %ile</span>
            </div>
            <div className="text-4xl font-extrabold font-mono text-white">1470</div>
            <div className="mt-3 space-y-2 text-xs font-mono">
              <div className="flex justify-between items-center text-slate-300">
                <span>Math:</span>
                <span className="font-bold text-cyan-300">770 / 800 (97th %ile)</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-cyan-400 h-full rounded-full" style={{ width: '96.2%' }}></div>
              </div>
              <div className="flex justify-between items-center text-slate-300 pt-1">
                <span>Reading & Writing:</span>
                <span className="font-bold text-sky-300">700 / 800 (93rd %ile)</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-sky-400 h-full rounded-full" style={{ width: '87.5%' }}></div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-400">
              Exam Administration: Dec 6, 2025
            </div>
          </div>

          {/* AP Scores Card */}
          <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 relative overflow-hidden group hover:border-cyan-400/50 transition-all">
            <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-2">
              <span>AP SCHOLAR</span>
              <span className="px-2 py-0.5 rounded bg-amber-950/80 border border-amber-800 text-[10px]">Max Score 5</span>
            </div>
            <div className="text-4xl font-extrabold font-mono text-white">5 / 5</div>
            <div className="mt-3 space-y-1.5 text-xs font-mono">
              <div className="flex justify-between text-slate-300">
                <span>AP Computer Science A:</span>
                <span className="font-bold text-amber-300">Score 5 (Max)</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>AP Calculus BC:</span>
                <span className="font-bold text-amber-300">Score 4 (AB: 4)</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>AP Statistics:</span>
                <span className="font-bold text-slate-400">Score 3</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-400">
              Awarded: AP Scholar Award 2026
            </div>
          </div>

          {/* IELTS Card */}
          <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 relative overflow-hidden group hover:border-cyan-400/50 transition-all">
            <div className="flex items-center justify-between text-xs font-mono text-sky-400 mb-2">
              <span>IELTS ACADEMIC</span>
              <span className="px-2 py-0.5 rounded bg-sky-950/80 border border-sky-800 text-[10px]">CEFR C1</span>
            </div>
            <div className="text-4xl font-extrabold font-mono text-white">7.5</div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-mono text-slate-300">
              <div className="bg-slate-950/60 p-1.5 rounded border border-slate-800">
                <span className="text-slate-400">Listen:</span> <span className="text-white font-bold">8.0</span>
              </div>
              <div className="bg-slate-950/60 p-1.5 rounded border border-slate-800">
                <span className="text-slate-400">Read:</span> <span className="text-white font-bold">8.0</span>
              </div>
              <div className="bg-slate-950/60 p-1.5 rounded border border-slate-800">
                <span className="text-slate-400">Speak:</span> <span className="text-white font-bold">7.0</span>
              </div>
              <div className="bg-slate-950/60 p-1.5 rounded border border-slate-800">
                <span className="text-slate-400">Write:</span> <span className="text-white font-bold">6.5</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-400">
              Test Date: Oct 2026 // IDP Vietnam
            </div>
          </div>

          {/* GPA & High School Honors */}
          <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 relative overflow-hidden group hover:border-cyan-400/50 transition-all">
            <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-2">
              <span>HIGH SCHOOL GPA</span>
              <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800 text-[10px]">Top Tier</span>
            </div>
            <div className="text-4xl font-extrabold font-mono text-white">9.6 <span className="text-sm font-normal text-slate-400">/ 10</span></div>
            <div className="mt-3 space-y-1.5 text-xs font-mono">
              <div className="flex justify-between text-slate-300">
                <span>Grade 10 GPA:</span>
                <span className="font-bold text-emerald-300">9.4 / 10.0</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Grade 11 GPA:</span>
                <span className="font-bold text-emerald-300">9.6 / 10.0</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Grade 9 (Secondary):</span>
                <span className="font-bold text-emerald-300">Distinction (Giỏi)</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-400">
              Newton Grammar School (NGS)
            </div>
          </div>

        </div>

        {/* Honors & Awards Section */}
        <div id="honors" className="pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white font-sans flex items-center gap-2">
                <Award className="w-6 h-6 text-amber-400" />
                <span>Honors & Competitive Distinctions</span>
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                World, National, and Municipal Technical Distinctions
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-lg bg-slate-950/80 border border-slate-800">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded text-xs font-mono transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold shadow-[0_0_10px_rgba(56,189,248,0.2)]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredAwards.map((award) => (
              <div
                key={award.id}
                className="p-5 rounded-lg bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="inline-block text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
                      {award.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{award.year}</span>
                  </div>
                  <h4 className="text-base font-bold text-white font-sans leading-snug">
                    {award.title}
                  </h4>
                  <div className="text-xs font-mono text-cyan-400/90 mt-1 flex items-center gap-1.5">
                    <span>{award.issuer}</span>
                    <span className="text-slate-600">•</span>
                    <span>{award.location}</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed font-sans">
                    {award.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/70 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400">{award.category}</span>
                  <button
                    onClick={onOpenDossier}
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Record</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Dossier inspect banner */}
          <div className="mt-8 p-4 rounded-lg bg-slate-950/80 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-cyan-400 flex-shrink-0" />
              <div>
                <div className="text-xs font-mono font-semibold text-slate-200">
                  ALL HONORS & AWARDS CROSS-REFERENCED WITH INSTITUTIONAL RECORDS
                </div>
                <div className="text-[11px] text-slate-400">
                  In compliance with privacy policies, certificates are cataloged with serial references instead of raw downloads.
                </div>
              </div>
            </div>
            <button
              onClick={onOpenDossier}
              className="px-4 py-2 rounded bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Inspect Credential Catalog</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
