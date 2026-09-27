import React, { useState } from 'react';
import { FolderGit2, Tag, Eye } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const renderSchematic = (type: string) => {
    switch (type) {
      case 'hepa':
        return (
          <svg viewBox="0 0 320 160" className="w-full h-full max-w-[280px]">
            <rect x="20" y="30" width="280" height="100" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4,2" />
            <rect x="130" y="20" width="60" height="120" fill="rgba(56, 189, 248, 0.1)" stroke="#0EA5E9" strokeWidth="2" />
            <line x1="145" y1="20" x2="145" y2="140" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2,2" />
            <line x1="160" y1="20" x2="160" y2="140" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2,2" />
            <line x1="175" y1="20" x2="175" y2="140" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2,2" />
            <text x="160" y="85" fill="#38BDF8" fontFamily="monospace" fontSize="9" textAnchor="middle" fontWeight="bold">HEPA MEDIA</text>
            <path d="M 40 80 L 110 80 M 100 75 L 110 80 L 100 85" stroke="#F59E0B" strokeWidth="2" fill="none" />
            <path d="M 210 80 L 280 80 M 270 75 L 280 80 L 270 85" stroke="#10B981" strokeWidth="2" fill="none" />
            <text x="75" y="70" fill="#F59E0B" fontFamily="monospace" fontSize="8" textAnchor="middle">AIR INLET</text>
            <text x="245" y="70" fill="#10B981" fontFamily="monospace" fontSize="8" textAnchor="middle">CLEAN FLOW</text>
            <circle cx="110" cy="40" r="4" fill="#F59E0B" />
            <circle cx="210" cy="40" r="4" fill="#10B981" />
            <path d="M 110 40 L 110 15 L 160 15 L 210 15 L 210 40" fill="none" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2,2" />
            <text x="160" y="12" fill="#F59E0B" fontFamily="monospace" fontSize="8" textAnchor="middle">ΔP MANOMETER TAP</text>
          </svg>
        );
      case 'damper':
        return (
          <svg viewBox="0 0 320 160" className="w-full h-full max-w-[280px]">
            <rect x="40" y="25" width="240" height="110" fill="none" stroke="#38BDF8" strokeWidth="2" />
            <circle cx="30" cy="35" r="4" fill="#F59E0B" />
            <circle cx="30" cy="80" r="4" fill="#F59E0B" />
            <circle cx="30" cy="125" r="4" fill="#F59E0B" />
            <circle cx="290" cy="35" r="4" fill="#F59E0B" />
            <circle cx="290" cy="80" r="4" fill="#F59E0B" />
            <circle cx="290" cy="125" r="4" fill="#F59E0B" />
            <g stroke="#38BDF8" strokeWidth="2" fill="rgba(14, 165, 233, 0.15)">
              <rect x="60" y="40" width="200" height="12" rx="3" transform="rotate(-15 160 46)" />
              <circle cx="160" cy="46" r="4" fill="#F59E0B" />
              <rect x="60" y="75" width="200" height="12" rx="3" transform="rotate(15 160 81)" />
              <circle cx="160" cy="81" r="4" fill="#F59E0B" />
              <rect x="60" y="110" width="200" height="12" rx="3" transform="rotate(-15 160 116)" />
              <circle cx="160" cy="116" r="4" fill="#F59E0B" />
            </g>
            <line x1="80" y1="46" x2="80" y2="116" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="3,2" />
            <text x="160" y="148" fill="#38BDF8" fontFamily="monospace" fontSize="8" textAnchor="middle">SYNCHRONIZED LINKAGE ACTUATOR</text>
          </svg>
        );
      case 'controller':
        return (
          <svg viewBox="0 0 320 160" className="w-full h-full max-w-[280px]">
            <rect x="50" y="20" width="20" height="120" fill="#1C2F60" stroke="#38BDF8" strokeWidth="1.5" />
            <line x1="50" y1="20" x2="50" y2="140" stroke="#F59E0B" strokeWidth="2" />
            <path d="M 70 40 L 220 40 L 240 60 L 240 100 L 220 120 L 70 120 Z" fill="none" stroke="#38BDF8" strokeWidth="2" />
            <line x1="60" y1="80" x2="260" y2="80" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="6,2" />
            <circle cx="140" cy="80" r="5" fill="#F59E0B" />
            <path d="M 150 80 Q 155 60 160 80 Q 165 100 170 80 Q 175 60 180 80 Q 185 100 190 80 Q 195 60 200 80" fill="none" stroke="#F59E0B" strokeWidth="2" />
            <line x1="140" y1="45" x2="140" y2="115" stroke="#38BDF8" strokeWidth="3" />
            <text x="140" y="135" fill="#38BDF8" fontFamily="monospace" fontSize="8" textAnchor="middle">SEALING DISC</text>
            <text x="180" y="60" fill="#F59E0B" fontFamily="monospace" fontSize="8" textAnchor="middle">CALIBRATED SPRING</text>
          </svg>
        );
      case 'conveyor':
        return (
          <svg viewBox="0 0 320 160" className="w-full h-full max-w-[280px]">
            <circle cx="60" cy="70" r="28" fill="none" stroke="#38BDF8" strokeWidth="2" />
            <circle cx="60" cy="70" r="8" fill="#F59E0B" />
            <circle cx="260" cy="70" r="28" fill="none" stroke="#38BDF8" strokeWidth="2" />
            <circle cx="260" cy="70" r="8" fill="#F59E0B" />
            <line x1="60" y1="42" x2="260" y2="42" stroke="#38BDF8" strokeWidth="3" />
            <line x1="60" y1="98" x2="260" y2="98" stroke="#38BDF8" strokeWidth="3" />
            <circle cx="120" cy="48" r="6" fill="#0EA5E9" />
            <circle cx="160" cy="48" r="6" fill="#0EA5E9" />
            <circle cx="200" cy="48" r="6" fill="#0EA5E9" />
            <line x1="60" y1="98" x2="50" y2="135" stroke="#64748B" strokeWidth="2" />
            <line x1="160" y1="98" x2="160" y2="135" stroke="#64748B" strokeWidth="2" />
            <line x1="260" y1="98" x2="270" y2="135" stroke="#64748B" strokeWidth="2" />
            <line x1="30" y1="135" x2="290" y2="135" stroke="#64748B" strokeWidth="2" />
            <text x="160" y="32" fill="#F59E0B" fontFamily="monospace" fontSize="8" textAnchor="middle">LOAD FLOW DIRECTION →</text>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            ENGINEERING WORK
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-amber-400 mx-auto rounded-full"></div>
          <p className="text-slate-300 text-base leading-relaxed">
            Key equipment designs, testing systems, and specialized R&D components developed for industrial, defense, and material-handling applications.
          </p>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="cad-corner bg-navy-900/90 border border-navy-800 hover:border-cyan-500/50 rounded-xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Schematic Viewport */}
                <div className="h-48 bg-[#060D1E] border-b border-navy-800 relative flex items-center justify-center p-4 overflow-hidden">
                  <div className="absolute top-2 left-3 font-mono text-[10px] text-cyan-400/80">
                    SCHEMATIC: {project.id.toUpperCase()} // CAD_VIEW
                  </div>
                  {renderSchematic(project.schematicType)}
                  <div className="absolute bottom-2 right-3 font-mono text-[9px] text-amber-400">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs text-amber-400">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{project.category}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-navy-800 text-cyan-400 text-xs font-mono border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Details Button */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-navy-800 hover:bg-cyan-500 hover:text-navy-950 text-slate-200 font-mono text-xs font-semibold border border-slate-700 hover:border-cyan-400 transition-all"
                >
                  <Eye className="w-4 h-4" />
                  View Project Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
