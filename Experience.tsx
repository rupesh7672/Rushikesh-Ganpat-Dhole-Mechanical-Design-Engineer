import React from 'react';
import { Briefcase, Check, MapPin, Building, FileCheck2, Box, Ruler, Grid, Database, Activity, ShieldAlert, Gauge, Sparkles, ClipboardList, Search, Layers, Cpu, Wrench } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            CAREER TIMELINE
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-amber-400 mx-auto rounded-full"></div>
          <p className="text-slate-300 text-base leading-relaxed">
            Detailed industrial experience in equipment design, tool design, fabrication documentation, and manufacturing support.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-10 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-navy-700 before:to-transparent">
          
          {/* Item 1: Nikhtish */}
          <div className="relative flex flex-col sm:flex-row items-start group">
            <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-navy-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.5)] z-10">
              <Check className="w-4 h-4" />
            </div>

            <div className="ml-12 sm:ml-0 sm:w-1/2 sm:pr-12 w-full">
              <div className="cad-corner bg-navy-900/90 border border-cyan-500/30 rounded-xl p-6 sm:p-7 shadow-xl hover:border-cyan-400 transition-all">
                <div className="flex items-center justify-between mb-3 font-mono text-xs">
                  <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold">
                    {experienceData[0].period}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {experienceData[0].location}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-1">
                  {experienceData[0].role}
                </h3>
                <div className="text-sm font-semibold text-cyan-300 mb-4 flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  {experienceData[0].company}
                </div>

                <div className="space-y-2.5 text-sm text-slate-300">
                  {experienceData[0].responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-navy-800 flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {experienceData[0].technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-navy-800 text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Item 2: Bajaj Maharashtra Scooter Ltd. */}
          <div className="relative flex flex-col sm:flex-row items-start group">
            <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-navy-950 border-2 border-slate-600 group-hover:border-cyan-400 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 shadow-md z-10 transition-colors">
              <Wrench className="w-4 h-4" />
            </div>

            <div className="ml-12 sm:ml-auto sm:w-1/2 sm:pl-12 w-full">
              <div className="cad-corner bg-navy-900/90 border border-navy-800 hover:border-cyan-500/40 rounded-xl p-6 sm:p-7 shadow-xl transition-all">
                <div className="flex items-center justify-between mb-3 font-mono text-xs">
                  <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300 font-semibold">
                    {experienceData[1].period}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {experienceData[1].location}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-1">
                  {experienceData[1].role}
                </h3>
                <div className="text-sm font-semibold text-cyan-300 mb-4 flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  {experienceData[1].company}
                </div>

                <div className="space-y-2.5 text-sm text-slate-300">
                  {experienceData[1].responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-navy-800 flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {experienceData[1].technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-navy-800 text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
