import React from 'react';
import { Sparkles, Download, Send, Cog } from 'lucide-react';

export const ResumeCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-navy-900 to-navy-950 border-t border-b border-navy-800 relative overflow-hidden">
      {/* Decorative Rotating Cog Silhouette */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
        <Cog className="w-[500px] h-[500px] cad-spin text-cyan-400" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-950 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          RECRUITMENT & COLLABORATION
        </div>

        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
          Let's Build Better Mechanical Solutions
        </h2>

        <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Interested in working together or learning more about my experience? Download my complete resume or reach out directly to discuss mechanical design opportunities.
        </p>

        {/* CTA Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href="public/Rushikesh_Ganpat_Dhole_Resume.pdf"
            download="Rushikesh_Ganpat_Dhole_Resume.pdf"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-bold font-mono text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(14,165,233,0.4)] hover:shadow-[0_0_35px_rgba(14,165,233,0.6)]"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-navy-900 hover:bg-navy-800 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-white font-mono text-sm transition-all"
          >
            <Send className="w-5 h-5 text-cyan-400" />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
