import React from 'react';
import { ShieldCheck, X, Lock, CheckCircle2, AlertTriangle, ExternalLink, Mail, Building, FileCheck } from 'lucide-react';
import { VERIFIED_CREDENTIALS_LIST, PERSONAL_INFO } from '../data/portfolioData';

export default function VerifiedCredentialsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0b1322] border border-cyan-500/40 rounded-xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-[#080d18]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white font-sans">
                  Official Verification & Credential Registry
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  INSTITUTIONAL
                </span>
              </div>
              <p className="text-xs font-mono text-slate-400">
                SUBJECT: {PERSONAL_INFO.fullName} ({PERSONAL_INFO.vietnameseName}) // CANDIDATE ID: NGS-2027
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Security / No-Download Compliance Warning Banner */}
        <div className="p-4 bg-amber-950/40 border-b border-amber-500/30 flex items-start gap-3">
          <Lock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-amber-200/90 font-mono leading-relaxed">
            <span className="font-bold text-amber-300">DOWNLOAD RESTRICTION COMPLIANCE:</span> In strict accordance with privacy directives and university application guidelines, direct file downloading of original certificates, score reports, and personal IDs is disabled on this web platform. Serialized registry codes are provided below for institutional verification.
          </div>
        </div>

        {/* Registry Table / List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3.5">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-cyan-400" />
            <span>CROSS-REFERENCED INSTITUTIONAL CREDENTIAL RECORDS:</span>
          </div>

          {VERIFIED_CREDENTIALS_LIST.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-cyan-300">
                    {item.name}
                  </span>
                </div>
                <div className="text-xs text-slate-400 flex flex-wrap items-center gap-2 font-mono">
                  <span className="text-slate-300">{item.authority}</span>
                  <span className="text-slate-600">•</span>
                  <span>{item.date}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400">{item.type}</span>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-1 font-mono text-[11px]">
                <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-700/80 text-slate-300">
                  CODE: {item.code}
                </span>
                <span className="text-emerald-400 flex items-center gap-1 text-[10px]">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  {item.verificationStatus}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer / Official Contact CTA */}
        <div className="p-5 border-t border-slate-800 bg-[#080d18] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] font-mono text-slate-400 text-center sm:text-left">
            <span>OFFICIAL TRANSCRIPTS DISPATCHED VIA COUNSELOR OFFICE:</span>
            <div className="text-slate-300 font-semibold">Newton Grammar School Academic Admissions</div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Official%20Credential%20Verification%20Inquiry%20-%20Nguyen%20Tong%20Gia%20Minh`}
              className="px-4 py-2 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono font-bold flex items-center gap-2 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Request Verified Transcript</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
