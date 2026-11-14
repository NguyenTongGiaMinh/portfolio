import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AcademicsAwards from './components/AcademicsAwards';
import ProjectsDeepDive from './components/ProjectsDeepDive';
import ExperienceInternships from './components/ExperienceInternships';
import LeadershipCommunity from './components/LeadershipCommunity';
import SkillsMatrix from './components/SkillsMatrix';
import ContactFooter from './components/ContactFooter';
import VerifiedCredentialsModal from './components/VerifiedCredentialsModal';

export default function App() {
  const [isDossierOpen, setIsDossierOpen] = useState(false);

  // Security compliance: prevent accidental Ctrl+S download / save of the portfolio web page
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* Top Fixed Header */}
      <Navbar onOpenDossier={() => setIsDossierOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection onOpenDossier={() => setIsDossierOpen(true)} />
        <AcademicsAwards onOpenDossier={() => setIsDossierOpen(true)} />
        <ProjectsDeepDive onOpenDossier={() => setIsDossierOpen(true)} />
        <ExperienceInternships onOpenDossier={() => setIsDossierOpen(true)} />
        <LeadershipCommunity onOpenDossier={() => setIsDossierOpen(true)} />
        <SkillsMatrix />
      </main>

      {/* Footer */}
      <ContactFooter onOpenDossier={() => setIsDossierOpen(true)} />

      {/* Verified Credentials & Compliance Modal */}
      <VerifiedCredentialsModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />
    </div>
  );
}
