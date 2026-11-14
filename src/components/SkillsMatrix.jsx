import React from 'react';
import { Cpu, Terminal, CircuitBoard, Calculator, Dumbbell, Music, Check, Layers } from 'lucide-react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';

export default function SkillsMatrix() {
  return (
    <section id="skills" className="py-20 bg-[#0a0f1b] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>CORE TECHNICAL COMPETENCIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Engineering Arsenal & Technical Stack
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-slate-400">
            MULTIDISCIPLINARY HARDWARE & SOFTWARE PROFICIENCY
          </div>
        </div>

        {/* 4 Quadrants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Quadrant 1: Mechanical & CAD/CAM */}
          <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-800">
              <div className="w-8 h-8 rounded bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-sans">
                  Mechanical Design & CAD/CAM Engineering
                </h3>
                <span className="text-[11px] font-mono text-cyan-400">INDUSTRIAL CAD, DFM & THERMODYNAMICS</span>
              </div>
            </div>

            <div className="space-y-4">
              {TECHNICAL_SKILLS.mechatronics.map((skill, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-200 font-semibold">{skill.name}</span>
                    <span className="text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-800">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-sky-400 h-full rounded-full transition-all duration-500" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="text-[11px] text-slate-400 font-sans">{skill.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quadrant 2: Embedded Systems & IoT */}
          <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-800">
              <div className="w-8 h-8 rounded bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <CircuitBoard className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-sans">
                  Embedded Computing & IoT Telemetry
                </h3>
                <span className="text-[11px] font-mono text-cyan-400">MICROCONTROLLERS, SENSORS & ACTUATION</span>
              </div>
            </div>

            <div className="space-y-4">
              {TECHNICAL_SKILLS.embedded.map((skill, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-200 font-semibold">{skill.name}</span>
                    <span className="text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-800">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-sky-400 h-full rounded-full transition-all duration-500" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="text-[11px] text-slate-400 font-sans">{skill.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quadrant 3: Software & Applied Edge AI */}
          <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-800">
              <div className="w-8 h-8 rounded bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-sans">
                  Programming Languages & Edge AI
                </h3>
                <span className="text-[11px] font-mono text-cyan-400">C++, PYTHON, C#, JAVA, YOLO & DEEP LEARNING</span>
              </div>
            </div>

            <div className="space-y-4">
              {TECHNICAL_SKILLS.softwareAI.map((skill, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-200 font-semibold">{skill.name}</span>
                    <span className="text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-800">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-500" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="text-[11px] text-slate-400 font-sans">{skill.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quadrant 4: Mathematical Foundation */}
          <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-800">
              <div className="w-8 h-8 rounded bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Calculator className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-sans">
                  Applied Mathematics & Olympiad Logic
                </h3>
                <span className="text-[11px] font-mono text-cyan-400">CALCULUS BC, STATISTICS & DISCRETE LOGIC</span>
              </div>
            </div>

            <div className="space-y-4">
              {TECHNICAL_SKILLS.mathematics.map((skill, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-200 font-semibold">{skill.name}</span>
                    <span className="text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-800">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-amber-400 h-full rounded-full transition-all duration-500" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="text-[11px] text-slate-400 font-sans">{skill.desc}</div>
                </div>
              ))}
            </div>

            {/* Interdisciplinary & Athletics */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <div className="text-xs font-mono text-slate-300 font-semibold mb-3">
                ADDITIONAL PURSUITS & ATHLETICS:
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-slate-950 text-slate-300 border border-slate-800 flex items-center gap-1.5">
                  <Dumbbell className="w-3.5 h-3.5 text-cyan-400" /> Football
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-950 text-slate-300 border border-slate-800 flex items-center gap-1.5">
                  <Dumbbell className="w-3.5 h-3.5 text-cyan-400" /> Tennis
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-950 text-slate-300 border border-slate-800 flex items-center gap-1.5">
                  <Dumbbell className="w-3.5 h-3.5 text-cyan-400" /> Basketball
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-950 text-slate-300 border border-slate-800 flex items-center gap-1.5">
                  <Music className="w-3.5 h-3.5 text-amber-400" /> Acoustic & Electric Guitar
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
