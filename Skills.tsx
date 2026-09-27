import React from 'react';
import { Wrench, Monitor, DraftingCompass, Factory, Brain, Check } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'cad':
        return <Monitor className="w-5 h-5 text-cyan-400" />;
      case 'engineering':
        return <DraftingCompass className="w-5 h-5 text-amber-400" />;
      case 'manufacturing':
        return <Factory className="w-5 h-5 text-cyan-400" />;
      case 'soft':
        return <Brain className="w-5 h-5 text-slate-300" />;
      default:
        return <Wrench className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-navy-900/60 border-t border-b border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800/80 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Wrench className="w-3.5 h-3.5" />
            TECHNICAL COMPETENCIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Categorized Skills & Tools
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-amber-400 mx-auto rounded-full"></div>
          <p className="text-slate-300 text-base leading-relaxed">
            Proficiencies derived directly from engineering coursework, specialized CAD certifications, and active manufacturing experience.
          </p>
        </div>

        {/* 4 Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="cad-corner bg-navy-950/80 border border-navy-800 hover:border-cyan-500/50 rounded-xl p-7 transition-all"
            >
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-navy-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy-900 border border-slate-800 flex items-center justify-center">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">{cat.title}</h3>
                    <div className="text-xs font-mono text-cyan-400">{cat.description}</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-500">{cat.skills.length} Items</span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 border border-slate-800 hover:border-cyan-400 text-slate-200 hover:text-cyan-300 font-mono text-xs font-medium transition-colors"
                  >
                    <Check className="w-3 h-3 text-cyan-400" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
