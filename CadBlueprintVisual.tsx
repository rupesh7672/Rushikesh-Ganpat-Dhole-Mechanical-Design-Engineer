import React, { useState } from 'react';
import { Crosshair } from 'lucide-react';

export const CadBlueprintVisual: React.FC = () => {
  const [coords, setCoords] = useState({ x: '120.40', y: '85.15' });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2).toFixed(2);
    const y = (-(e.clientY - rect.top - rect.height / 2)).toFixed(2);
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setCoords({ x: '120.40', y: '85.15' });
  };

  return (
    <div className="cad-corner bg-navy-900/90 border border-cyan-500/30 rounded-xl p-5 shadow-2xl relative overflow-hidden backdrop-blur-sm">
      {/* Blueprint Title Block Header */}
      <div className="flex items-center justify-between border-b border-navy-800 pb-3 mb-4 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded bg-amber-400 inline-block"></span>
          <span className="text-slate-300 font-semibold">CAD_VIEWPORT // FLANGE_GEAR_ASSY</span>
        </div>
        <div className="text-cyan-400/80 text-[11px]">
          X: {coords.x} | Y: {coords.y}
        </div>
      </div>

      {/* Interactive Blueprint SVG Component */}
      <div
        className="relative w-full aspect-square bg-[#060D1E] rounded-lg border border-navy-800 flex items-center justify-center overflow-hidden p-4 group cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Internal Engineering Grid Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cadGridTsx" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#38BDF8" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cadGridTsx)" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#0EA5E9" strokeWidth="1" strokeDasharray="4,4" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#0EA5E9" strokeWidth="1" strokeDasharray="4,4" />
        </svg>

        {/* Mechanical CAD Assembly SVG Vector Graphic */}
        <svg viewBox="0 0 400 400" className="w-full h-full relative z-10 select-none">
          {/* Outer Pitch Circle Diameter & Dimension Indicators */}
          <circle cx="200" cy="200" r="150" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="8,4" opacity="0.6" />
          <circle cx="200" cy="200" r="120" fill="none" stroke="#38BDF8" strokeWidth="2" />
          <circle cx="200" cy="200" r="90" fill="rgba(14, 165, 233, 0.04)" stroke="#0EA5E9" strokeWidth="1.5" />

          {/* Center Shaft Bore & Keyway */}
          <circle cx="200" cy="200" r="45" fill="none" stroke="#F59E0B" strokeWidth="2" />
          <path d="M 190 155 L 210 155 L 210 168 L 190 168 Z" fill="#F59E0B" opacity="0.8" />
          <circle cx="200" cy="200" r="12" fill="none" stroke="#38BDF8" strokeWidth="1.5" />

          {/* Rotating Spur Gear Teeth (CAD Model) */}
          <g className="cad-spin">
            <circle cx="200" cy="200" r="135" fill="none" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3,3" />
            <g stroke="#38BDF8" strokeWidth="1.8" fill="none">
              <path d="M 195 62 L 205 62 L 208 80 L 192 80 Z" />
              <path d="M 195 338 L 205 338 L 208 320 L 192 320 Z" />
              <path d="M 62 195 L 62 205 L 80 208 L 80 192 Z" />
              <path d="M 338 195 L 338 205 L 320 208 L 320 192 Z" />
              <path d="M 103 103 L 110 96 L 124 107 L 114 117 Z" />
              <path d="M 297 297 L 290 304 L 276 293 L 286 283 Z" />
              <path d="M 103 297 L 96 290 L 107 276 L 117 286 Z" />
              <path d="M 297 103 L 304 110 L 293 124 L 283 114 Z" />
            </g>
          </g>

          {/* 6 Bolt Holes on Pitch Circle Diameter (PCD) */}
          <g stroke="#38BDF8" fill="#0A1226" strokeWidth="1.5">
            <circle cx="200" cy="110" r="9" />
            <circle cx="278" cy="155" r="9" />
            <circle cx="278" cy="245" r="9" />
            <circle cx="200" cy="290" r="9" />
            <circle cx="122" cy="245" r="9" />
            <circle cx="122" cy="155" r="9" />
          </g>

          {/* Dimension Lines */}
          <line x1="200" y1="200" x2="278" y2="155" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2,2" />
          <line x1="200" y1="290" x2="200" y2="360" stroke="#38BDF8" strokeWidth="0.8" />
          <line x1="122" y1="290" x2="122" y2="360" stroke="#38BDF8" strokeWidth="0.8" />
          <line x1="122" y1="355" x2="200" y2="355" stroke="#38BDF8" strokeWidth="1" />
          <text x="161" y="350" fill="#38BDF8" fontFamily="monospace" fontSize="10" textAnchor="middle">R 90.00</text>

          {/* Callout 1: Diameter Callout */}
          <path d="M 278 155 L 330 130 L 375 130" fill="none" stroke="#F59E0B" strokeWidth="1.2" />
          <text x="335" y="125" fill="#F59E0B" fontFamily="monospace" fontSize="10" fontWeight="bold">6x Ø18 THRU</text>
          <text x="335" y="140" fill="#94A3B8" fontFamily="monospace" fontSize="8">P.C.D. Ø180.00</text>

          {/* Callout 2: GD&T Position Callout */}
          <path d="M 200 45 L 200 30 L 130 30" fill="none" stroke="#38BDF8" strokeWidth="1.2" />
          <rect x="30" y="20" width="95" height="18" fill="#0A1226" stroke="#38BDF8" strokeWidth="1" />
          <line x1="52" y1="20" x2="52" y2="38" stroke="#38BDF8" strokeWidth="0.8" />
          <line x1="85" y1="20" x2="85" y2="38" stroke="#38BDF8" strokeWidth="0.8" />
          <line x1="105" y1="20" x2="105" y2="38" stroke="#38BDF8" strokeWidth="0.8" />
          <text x="41" y="33" fill="#38BDF8" fontFamily="monospace" fontSize="11" textAnchor="middle">⌖</text>
          <text x="68" y="33" fill="#38BDF8" fontFamily="monospace" fontSize="9" textAnchor="middle">Ø 0.02</text>
          <text x="95" y="33" fill="#38BDF8" fontFamily="monospace" fontSize="9" textAnchor="middle">A</text>
          <text x="115" y="33" fill="#38BDF8" fontFamily="monospace" fontSize="9" textAnchor="middle">B</text>
        </svg>

        {/* Real-time Status Badge Overlay */}
        <div className="absolute bottom-3 left-3 bg-navy-950/80 px-2.5 py-1 rounded border border-navy-800 text-[10px] font-mono text-slate-300">
          <span className="text-cyan-400 font-bold">NX 2306</span> | MODEL_VALIDATED
        </div>
        <div className="absolute top-3 right-3 bg-navy-950/80 px-2.5 py-1 rounded border border-navy-800 text-[10px] font-mono text-amber-400">
          GD&T ASME Y14.5
        </div>
      </div>

      {/* CAD Viewport Footer */}
      <div className="mt-3 flex items-center justify-between text-xs font-mono text-slate-400">
        <span className="flex items-center gap-1.5">
          <Crosshair className="w-3.5 h-3.5 text-cyan-400" />
          <span>PARAMETRIC SOLID ASSEMBLY</span>
        </span>
        <span className="text-slate-400">DRAWING NO: <span className="text-cyan-400">RGD-CAD-001</span></span>
      </div>
    </div>
  );
};
