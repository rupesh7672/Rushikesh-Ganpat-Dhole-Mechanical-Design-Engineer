import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-navy-900/60 border-t border-b border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800/80 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            ACADEMIC BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-amber-400 mx-auto rounded-full"></div>
          <p className="text-slate-300 text-base leading-relaxed">
            Formal technical education in mechanical engineering and foundational schooling.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((item, idx) => {
            const isHighest = idx === 0;
            return (
              <div
                key={item.id}
                className={`cad-corner bg-navy-950/80 border ${
                  isHighest ? 'border-cyan-500/30 hover:border-cyan-400' : 'border-navy-800 hover:border-cyan-500/40'
                } rounded-xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg transition-all`}
              >
                <div className="space-y-1.5">
                  <div
                    className={`inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-xs font-mono font-semibold ${
                      isHighest
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                        : 'bg-navy-900 text-slate-300 border border-navy-700'
                    }`}
                  >
                    {item.badge}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                    {item.degree}
                  </h3>
                  <p className="text-slate-300 text-sm font-medium">
                    {item.institution}
                  </p>
                  <p className="text-slate-400 text-xs font-mono flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {item.location}
                  </p>
                </div>
                <div className="sm:text-right shrink-0">
                  <div className={`font-display font-bold text-2xl ${isHighest ? 'text-cyan-400' : 'text-slate-300'}`}>
                    {item.year}
                  </div>
                  <div className="text-xs text-slate-400 font-mono">Year of Passing</div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
