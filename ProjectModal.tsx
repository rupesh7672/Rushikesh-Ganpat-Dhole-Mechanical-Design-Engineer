import React, { useEffect } from 'react';
import { X, FileText, CheckSquare, Wrench, Check } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.classList.add('modal-active');
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.classList.remove('modal-active');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-navy-900 border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden cad-corner max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-navy-800">
          <div>
            <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider block mb-1">
              {project.category}
            </span>
            <h3 className="text-2xl font-display font-bold text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-navy-950 text-slate-400 hover:text-white border border-navy-800 hover:border-cyan-400 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="py-6 space-y-6 overflow-y-auto pr-1">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" /> Project Overview & Scope
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2.5 flex items-center gap-1.5">
              <CheckSquare className="w-3.5 h-3.5" /> Key Engineering Highlights
            </h4>
            <ul className="space-y-2 text-sm text-slate-300 font-sans">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2.5 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5" /> CAD Software & Methodologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.toolsUsed.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-navy-950 border border-cyan-500/30 text-cyan-300 font-mono text-xs"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-navy-800 flex items-center justify-end gap-3 font-mono text-xs">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-navy-950 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
