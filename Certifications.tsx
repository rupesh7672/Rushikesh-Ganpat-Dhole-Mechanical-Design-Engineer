import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Certifications & Training
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-amber-400 mx-auto rounded-full"></div>
          <p className="text-slate-300 text-base leading-relaxed">
            Professional industry CAD certifications validating expert parametric modeling, detailing, and computer concepts.
          </p>
        </div>

        {/* 3 Certifications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificationsData.map((cert) => {
            const isCAD = cert.type.includes('CAD') || cert.type.includes('Parametric');
            return (
              <div
                key={cert.id}
                className={`cad-corner bg-navy-900/90 border ${
                  isCAD ? 'border-cyan-500/30 hover:border-cyan-400' : 'border-navy-800 hover:border-cyan-500/40'
                } rounded-xl p-7 flex flex-col justify-between shadow-xl transition-all group`}
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-navy-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-navy-950 transition-colors mb-5">
                    {isCAD ? <Award className="w-6 h-6" /> : <CheckCircle2 className="w-6 h-6" />}
                  </div>
                  <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider block mb-1">
                    {cert.type}
                  </span>
                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-slate-300 text-sm font-medium mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {isCAD
                      ? 'Comprehensive instruction covering advanced part design, sheet-metal layout, weldments, mold tool design, and tolerance analysis.'
                      : 'Course on Computer Concepts certification verifying fundamental digital literacy, operating systems, spreadsheets, and office data workflows.'}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-navy-800 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Verified Credential</span>
                  <span className="text-cyan-400">{cert.issuer}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
