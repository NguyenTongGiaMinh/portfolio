import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Terminal, ArrowUp, Lock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactFooter({ onOpenDossier }) {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;
    // Client-side simulation of message submission
    setSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#05080e] border-t border-slate-800 text-slate-400 font-sans">
      
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider">
              <Terminal className="w-3.5 h-3.5" />
              <span>DIRECT CHANNELS // ACADEMIC & RESEARCH</span>
            </div>

            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Connect for Research, Robotics & Academic Inquiries
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              Available for technical discussions in competitive robotics engineering, edge AI research collaborations, and university admissions dialogue.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 text-slate-200 text-xs font-mono transition-all group"
              >
                <div className="w-8 h-8 rounded bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">PRIMARY EMAIL</div>
                  <div className="font-semibold text-white group-hover:text-cyan-300">{PERSONAL_INFO.email}</div>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-3.5 p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 text-slate-200 text-xs font-mono transition-all group"
              >
                <div className="w-8 h-8 rounded bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">TELEPHONE / WHATSAPP</div>
                  <div className="font-semibold text-white group-hover:text-cyan-300">{PERSONAL_INFO.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200 text-xs font-mono">
                <div className="w-8 h-8 rounded bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">LOCATION</div>
                  <div className="font-semibold text-white">{PERSONAL_INFO.location}</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>OFFICIAL INSTITUTIONAL DISPATCH</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Counselor office verified transcripts and recommendation packets will be transmitted electronically through official institutional portals upon request.
              </p>
            </div>

          </div>

          {/* Right Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-slate-900/70 border border-slate-800 relative">
              <h3 className="text-lg font-bold text-white font-sans mb-1">
                Dispatch Direct Transmission
              </h3>
              <p className="text-xs font-mono text-slate-400 mb-6">
                Direct inquiry route for professors, admission officers, and engineering teams
              </p>

              {submitted ? (
                <div className="p-6 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white font-sans">
                    Transmission Dispatched Successfully
                  </h4>
                  <p className="text-xs text-slate-300 font-sans max-w-md mx-auto">
                    Thank you. Your message has been routed to Nguyễn Tống Gia Minh. Expect an engineering response within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs font-mono text-cyan-400 hover:underline pt-2 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-300 mb-1.5 uppercase">
                        Full Name / Institutional Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Dr. Jane Doe / Admissions Officer"
                        className="w-full px-3.5 py-2.5 rounded bg-slate-950 border border-slate-800 text-xs font-mono text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-slate-300 mb-1.5 uppercase">
                        Official Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="officer@university.edu"
                        className="w-full px-3.5 py-2.5 rounded bg-slate-950 border border-slate-800 text-xs font-mono text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-300 mb-1.5 uppercase">
                      Inquiry Topic / Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Undergraduate Admissions / Robotics Lab Inquiry / SafeStride Technical Review"
                      className="w-full px-3.5 py-2.5 rounded bg-slate-950 border border-slate-800 text-xs font-mono text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-300 mb-1.5 uppercase">
                      Message Content *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Please state details regarding your institutional inquiry, verification request, or engineering collaboration proposal..."
                      className="w-full px-3.5 py-2.5 rounded bg-slate-950 border border-slate-800 text-xs font-sans text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Transmit Message to Gia Minh</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span>© 2026-2027 NGUYEN TONG GIA MINH</span>
            <span className="text-slate-700">|</span>
            <span className="text-cyan-400">ROBOTICS & MECHATRONICS</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button
              onClick={onOpenDossier}
              className="hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-1"
            >
              <Lock className="w-3 h-3 text-amber-400" />
              <span>Direct File Download Restricted</span>
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
