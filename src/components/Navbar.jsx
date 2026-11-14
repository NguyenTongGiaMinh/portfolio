import React, { useState } from 'react';
import { ShieldCheck, Terminal, Award, Cpu, BookOpen, User, Phone, Mail, Menu, X, Lock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar({ onOpenDossier }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Academics & Testing', href: '#academics' },
    { name: 'Honors', href: '#honors' },
    { name: 'Engineering Projects', href: '#projects' },
    { name: 'Lab Experience', href: '#experience' },
    { name: 'Leadership & Impact', href: '#leadership' },
    { name: 'Technical Arsenal', href: '#skills' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080c14]/90 backdrop-blur-md border-b border-cyan-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Callout */}
          <a href="#overview" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all">
              <Cpu className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="font-mono text-sm font-bold tracking-wider text-slate-100 flex items-center gap-2">
                <span>N. T. GIA MINH</span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded">
                  MECHATRONICS
                </span>
              </div>
              <div className="text-[10px] font-mono text-slate-400 tracking-tight">
                ROBOTICS // EMBEDDED AI
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Verified Dossier */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenDossier}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-medium hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] transition-all cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Verified Dossier</span>
              <span className="text-[10px] text-cyan-400/70 border-l border-cyan-500/30 pl-1.5">Official</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenDossier}
              className="p-1.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs"
              title="Verified Dossier"
            >
              <ShieldCheck className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-slate-300 hover:text-white hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a101d] border-b border-cyan-900/40 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded text-sm font-mono text-slate-300 hover:text-cyan-400 hover:bg-cyan-950/30"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDossier();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono"
            >
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Inspect Verified Dossier</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
