import React from 'react';
import { 
  Cpu, Award, ShieldCheck, Terminal, Compass, ArrowDownRight, 
  ChevronRight, ExternalLink, Activity, Radio, CheckCircle2, Lock 
} from 'lucide-react';
import { PERSONAL_INFO, HIGHLIGHT_STATS, CORE_PILLARS } from '../data/portfolioData';

export default function HeroSection({ onOpenDossier }) {
  return (
    <section id="overview" className="relative pt-28 pb-20 overflow-hidden bg-tech-grid">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tactical HUD Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-slate-800/80 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-semibold tracking-wider">SYSTEM ACTIVE</span>
            <span className="text-slate-600">//</span>
            <span>HANOI, VIETNAM (21.0285° N, 105.8542° E)</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-cyan-400/90 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-500/20">
              CLASS OF 2027 CANDIDATE
            </span>
            <span className="text-amber-400/90 bg-amber-950/50 px-2.5 py-1 rounded border border-amber-500/20">
              V5RC WORLD QUALIFIER
            </span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>ROBOTICS, MECHATRONICS & INTELLIGENT SYSTEMS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase font-sans">
              <span className="block text-slate-100">Nguyen Tong</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                Gia Minh
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-sans max-w-2xl">
              High school engineering researcher and competitive roboticist uniting{' '}
              <span className="text-cyan-300 font-medium">precision mechanical CAD/CAM</span>,{' '}
              <span className="text-sky-300 font-medium">embedded IoT architecture</span>, and{' '}
              <span className="text-amber-300 font-medium">real-time edge computer vision</span>.
            </p>

            <div className="p-4 rounded-lg bg-slate-900/70 border border-slate-800 text-sm text-slate-300 font-sans space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
                <Compass className="w-4 h-4" />
                <span>CORE LEADERSHIP & CURRENT ROLES:</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Lead Mechanic & VP @ Newton Robotics Club</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Mechanical Intern @ VAST Intelligent Systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Lead Volunteer @ Cyber Champs (U.S. Embassy)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>WICO 2026 Gold Medalist (Seoul, Korea)</span>
                </li>
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm font-mono flex items-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all"
              >
                <span>Explore Engineering Projects</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenDossier}
                className="px-5 py-3 rounded bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 font-medium text-sm font-mono flex items-center gap-2 transition-all cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Inspect Verified Dossier</span>
              </button>
            </div>

            {/* Privacy notice banner */}
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 bg-slate-950/70 px-3 py-2 rounded border border-slate-800 max-w-xl">
              <Lock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span>
                Verified Profile & Portfolio. Direct resume downloading is strictly disabled for institutional privacy compliance.
              </span>
            </div>

          </div>

          {/* Right Column: Tactical Telemetry Card */}
          <div className="lg:col-span-4">
            <div className="rounded-xl bg-[#0b1322]/90 border border-cyan-500/30 p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  ACADEMIC & IMPACT TELEMETRY
                </span>
                <span className="text-[10px] font-mono text-slate-400">INDEX: 2026-27</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {HIGHLIGHT_STATS.map((stat, i) => (
                  <div key={i} className="p-3 rounded bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{stat.label}</div>
                    <div className="text-xl font-bold font-mono text-cyan-300 mt-0.5">{stat.value}</div>
                    <div className="text-[10px] text-slate-300 font-sans mt-0.5 truncate">{stat.detail}</div>
                    <div className="mt-1 inline-block text-[9px] font-mono px-1.5 py-0.2 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/40">
                      {stat.badge}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>NEWTON GRAMMAR SCHOOL</span>
                <span className="text-cyan-400">HANOI, VIETNAM</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Core Pillars Teaser */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-slate-800/80">
          {CORE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="group p-6 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-105 transition-transform">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-sans group-hover:text-cyan-300 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {pillar.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {pillar.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
