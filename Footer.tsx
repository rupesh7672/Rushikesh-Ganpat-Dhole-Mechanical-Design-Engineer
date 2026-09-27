import React from 'react';
import { Mail, Linkedin, FileText, ArrowUp } from 'lucide-react';
import { candidateProfile } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-navy-800 py-12 relative font-mono text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity */}
          <div className="text-center md:text-left space-y-1">
            <div className="font-display font-bold text-base text-white tracking-wide">
              {candidateProfile.name}
            </div>
            <div className="text-cyan-400">
              {candidateProfile.role}
            </div>
            <div className="text-[11px] text-slate-500">
              {candidateProfile.location}
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-slate-300">
            <a
              href={`mailto:${candidateProfile.email}`}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
            <a
              href={candidateProfile.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="public/Rushikesh_Ganpat_Dhole_Resume.pdf"
              download="Rushikesh_Ganpat_Dhole_Resume.pdf"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4" /> Resume
            </a>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="text-slate-500 text-[11px]">
              © {new Date().getFullYear()} {candidateProfile.name}. All rights reserved.
            </div>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-navy-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-colors"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
