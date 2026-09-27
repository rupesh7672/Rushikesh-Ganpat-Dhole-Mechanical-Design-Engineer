import React from 'react';
import { Layers, Mail, Download, Cpu } from 'lucide-react';
import { CadBlueprintVisual } from './CadBlueprintVisual';
import { heroData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Decorative CAD Crosshair Grids */}
      <div className="absolute top-24 left-10 text-cyan-500/20 font-mono text-[10px] hidden lg:block select-none pointer-events-none">
        <div>COORDINATE_SYS: WCS_GLOBAL</div>
        <div>PROJECTION: 3D_ISOMETRIC</div>
        <div>SCALE: 1:1 [METRIC mm]</div>
        <div className="mt-2 text-cyan-500/30">+--------------------+</div>
      </div>
      <div className="absolute bottom-10 right-10 text-cyan-500/20 font-mono text-[10px] hidden lg:block select-none pointer-events-none text-right">
        <div>STATUS: ACTIVE_MANUFACTURING</div>
        <div>TOLERANCE: ISO 2768-mK</div>
        <div>DATUM: [A] [B] [C]</div>
        <div className="mt-2 text-cyan-500/30">+--------------------+</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Credentials & Intro */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Recruiter Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wide">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>Available for Mechanical Design Engineering Roles</span>
            </div>

            {/* Candidate Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white">
                Rushikesh <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-400">Ganpat Dhole</span>
              </h1>
              <div className="flex items-center gap-3 text-lg sm:text-xl font-mono text-slate-300 font-semibold">
                <span className="text-cyan-400">#</span> Mechanical Design Engineer
                <span className="text-slate-600">|</span>
                <span className="text-amber-400 text-sm font-normal bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">Satara, MH, India</span>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-lg text-slate-300 font-normal leading-relaxed border-l-2 border-cyan-500/50 pl-4 py-1 bg-navy-900/30 rounded-r-lg">
              {heroData.subtitle}
            </p>

            {/* Resume Summary */}
            <p className="text-sm text-slate-400 leading-relaxed">
              Currently serving as <strong className="text-slate-200">Assistant Design Engineer</strong> at Nikhtish Filtration & Protection Pvt. Ltd., with previous experience as <strong class="text-slate-200">Graduate Trainee Engineer (DCD Tool Design)</strong> at Bajaj Maharashtra Scooter Ltd. Well-versed in translating client specifications into production-ready assembly drawings, cutting layouts, and R&D mechanical equipment.
            </p>

            {/* CAD Tool Badges */}
            <div className="pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" /> Primary CAD & Engineering Toolchain:
              </div>
              <div className="flex flex-wrap gap-2">
                {heroData.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded bg-navy-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-bold font-mono text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(14,165,233,0.35)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)]"
              >
                <Layers className="w-4 h-4" />
                View My Experience
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-navy-900 hover:bg-navy-850 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-white font-mono text-sm transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                Contact Me
              </a>
              <a
                href="public/Rushikesh_Ganpat_Dhole_Resume.pdf"
                download="Rushikesh_Ganpat_Dhole_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-lg bg-transparent hover:bg-navy-900 text-slate-400 hover:text-cyan-300 font-mono text-xs transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CV (.PDF)
              </a>
            </div>

          </div>

          {/* Right Column: Blueprint CAD Viewport */}
          <div className="lg:col-span-5 relative">
            <CadBlueprintVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
