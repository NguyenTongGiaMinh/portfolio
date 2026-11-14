import React, { useState } from 'react';
import { 
  Cpu, Terminal, Layers, ArrowUpRight, CheckCircle2, ChevronRight, 
  Activity, Gauge, Zap, Sparkles, Box, Shield, Eye
} from 'lucide-react';
import { ENGINEERING_PROJECTS } from '../data/portfolioData';

export default function ProjectsDeepDive({ onOpenDossier }) {
  const [selectedProjectId, setSelectedProjectId] = useState(ENGINEERING_PROJECTS[0].id);

  const currentProject = ENGINEERING_PROJECTS.find(p => p.id === selectedProjectId) || ENGINEERING_PROJECTS[0];

  return (
    <section id="projects" className="py-20 bg-[#080d18] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>CORE TECHNICAL ENDEAVORS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Engineering Projects & System Architecture
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-slate-400">
            SYSTEM SCHEMATICS // PROTOTYPE VERIFICATIONS
          </div>
        </div>

        {/* Project Selector Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-800 scrollbar-none">
          {ENGINEERING_PROJECTS.map((proj) => {
            const isSelected = proj.id === selectedProjectId;
            return (
              <button
                key={proj.id}
                onClick={() => setSelectedProjectId(proj.id)}
                className={`px-4 py-2.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_rgba(56,189,248,0.25)] font-semibold'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-cyan-400' : 'bg-slate-600'}`} />
                <span>{proj.title.split(':')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Project In-Depth Card */}
        <div className="rounded-xl bg-[#0b1322] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Subtle Cyber Grid Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-bl-full pointer-events-none" />

          {/* Top Status & Role Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/40 font-semibold text-[11px]">
                {currentProject.status}
              </span>
              <span className="text-slate-400">// ROLE:</span>
              <span className="text-slate-200 font-semibold">{currentProject.role}</span>
            </div>
            <div className="text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>TIMELINE: {currentProject.timeline}</span>
            </div>
          </div>

          {/* Project Title & Overview */}
          <div className="mt-6 space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
              {currentProject.title}
            </h3>
            <p className="text-sm font-mono text-cyan-400/90 font-medium">
              {currentProject.subtitle}
            </p>
            <p className="text-sm text-slate-300 font-sans leading-relaxed pt-2 max-w-4xl">
              {currentProject.overview}
            </p>
          </div>

          {/* Technical Specs Metric Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-8">
            {currentProject.specs.map((spec, idx) => (
              <div key={idx} className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800/90">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{spec.key}</div>
                <div className="text-sm font-bold font-mono text-cyan-300 mt-1">{spec.val}</div>
              </div>
            ))}
          </div>

          {/* Technical Contributions & Engineering Rigor */}
          <div className="mt-6">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>KEY TECHNICAL CONTRIBUTIONS & ARCHITECTURAL ACHIEVEMENTS:</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {currentProject.contributions.map((bullet, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/30 transition-colors flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills & Verification Action */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-[11px] font-mono text-slate-400 mr-2">TECH ARSENAL:</span>
              {currentProject.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-slate-900 text-cyan-300 border border-cyan-900/50 text-[11px] font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenDossier}
                className="px-4 py-2 rounded bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Verify Project Documentation</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
