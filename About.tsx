import React from 'react';
import { User, DraftingCompass, Cog, Box, FileText, Layers, Sliders, CheckCircle } from 'lucide-react';
import { aboutHighlights } from '../data/portfolioData';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cog':
        return <Cog className="w-6 h-6" />;
      case 'Box':
        return <Box className="w-6 h-6" />;
      case 'Compass':
        return <FileText className="w-6 h-6" />;
      case 'Layers':
        return <Layers className="w-6 h-6" />;
      default:
        return <Cog className="w-6 h-6" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-navy-900/60 border-t border-b border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800/80 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            ENGINEERING PROFILE
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            About Rushikesh Ganpat Dhole
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-amber-400 mx-auto rounded-full"></div>
          <p className="text-slate-300 text-base leading-relaxed">
            Dedicated and trained Mechanical Design Engineer with extensive hands-on expertise in CAD modeling, technical documentation, critical engineering calculations, and shop-floor fabrication readiness.
          </p>
        </div>

        {/* Narrative & Profile Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          <div className="lg:col-span-8 bg-navy-950/80 border border-navy-800 rounded-xl p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <DraftingCompass className="w-5 h-5 text-cyan-400" />
              Precision Engineering & Design Detailing
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              As a practicing mechanical design engineer, I bridge the critical gap between conceptual equipment design and shop-floor manufacturing feasibility. My experience spans full lifecycle 3D CAD modeling, 2D drafting standards (GD&T, orthographic, isometric projection), and sheet-metal development calculations.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              With deep technical working knowledge in industry-standard platforms—including <strong>Siemens NX, SolidWorks, Solid Edge, and AutoCAD</strong>—I ensure every model meets rigorous structural, dimensional, and customer approval criteria. Whether designing high-containment HEPA filter test rigs, CBRN HVAC air dampers, or die-casting tooling electrodes, my focus remains strictly on accuracy, tolerance stack-up analysis, and material optimization.
            </p>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-navy-800/80 text-center font-mono">
              <div className="p-3 rounded-lg bg-navy-900/70 border border-navy-800">
                <div className="text-2xl font-bold text-cyan-400">2+</div>
                <div className="text-[11px] text-slate-400 uppercase mt-0.5">Years Experience</div>
              </div>
              <div className="p-3 rounded-lg bg-navy-900/70 border border-navy-800">
                <div className="text-2xl font-bold text-cyan-400">4+</div>
                <div className="text-[11px] text-slate-400 uppercase mt-0.5">CAD Suites</div>
              </div>
              <div className="p-3 rounded-lg bg-navy-900/70 border border-navy-800">
                <div className="text-2xl font-bold text-cyan-400">4</div>
                <div className="text-[11px] text-slate-400 uppercase mt-0.5">Key Projects</div>
              </div>
              <div className="p-3 rounded-lg bg-navy-900/70 border border-navy-800">
                <div className="text-2xl font-bold text-amber-400">B.Tech</div>
                <div className="text-[11px] text-slate-400 uppercase mt-0.5">Mechanical Eng.</div>
              </div>
            </div>
          </div>

          {/* Quick Specifications Card */}
          <div className="lg:col-span-4 bg-navy-950/80 border border-navy-800 rounded-xl p-6 flex flex-col justify-between font-mono text-xs">
            <div className="space-y-4">
              <div className="text-cyan-400 uppercase font-bold tracking-wider pb-2 border-b border-navy-800 flex items-center justify-between">
                <span>Core Profile Specs</span>
                <Sliders className="w-4 h-4" />
              </div>
              
              <div className="space-y-3">
                <div>
                  <span className="text-slate-500 block text-[10px]">CURRENT ROLE</span>
                  <span className="text-slate-200 font-semibold">Assistant Design Engineer</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">CURRENT COMPANY</span>
                  <span className="text-slate-200">Nikhtish Filtration & Protection</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">PREVIOUS ROLE</span>
                  <span className="text-slate-200">Graduate Trainee Engineer (Tool Design)</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">PREVIOUS COMPANY</span>
                  <span className="text-slate-200">Bajaj Maharashtra Scooter Ltd.</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">HIGHEST QUALIFICATION</span>
                  <span className="text-slate-200">B.Tech in Mechanical Engineering (2022)</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">LOCATION</span>
                  <span className="text-slate-200">Satara, Maharashtra, India</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-navy-800 text-center">
              <span className="text-slate-400 text-[11px] flex items-center justify-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                Certified CAD Professional
              </span>
            </div>
          </div>

        </div>

        {/* 4 Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutHighlights.map((highlight, idx) => (
            <div
              key={idx}
              className="cad-corner bg-navy-950/70 border border-navy-800 hover:border-cyan-500/50 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
            >
              <div className="w-12 h-12 rounded-lg bg-navy-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-navy-950 transition-colors mb-4">
                {getIcon(highlight.icon)}
              </div>
              <h4 className="text-lg font-display font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {highlight.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
