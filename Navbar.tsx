import React, { useState, useEffect } from 'react';
import { Compass, FileDown, ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy-950/90 backdrop-blur-md border-b border-navy-800/80 shadow-lg' : 'bg-navy-950/60 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Identity */}
          <a href="#hero" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-md p-1">
            <div className="w-10 h-10 rounded-lg bg-navy-900 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] transition-all">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-bold text-lg text-white tracking-wide group-hover:text-cyan-400 transition-colors">
                RUSHIKESH DHOLE
              </div>
              <div className="font-mono text-xs text-cyan-400/80 tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                MECHANICAL DESIGN ENGINEER
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-2 rounded transition-colors ${
                    isActive
                      ? 'text-cyan-400 bg-navy-900/80 font-bold'
                      : 'hover:text-cyan-400 hover:bg-navy-900/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="public/Rushikesh_Ganpat_Dhole_Resume.pdf"
              download="Rushikesh_Ganpat_Dhole_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-900 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-white font-mono text-xs transition-all hover:shadow-[0_0_12px_rgba(56,189,248,0.2)]"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              Resume PDF
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-bold font-mono text-xs tracking-wide transition-all shadow-[0_0_15px_rgba(14,165,233,0.3)]"
            >
              Hire Me
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-navy-900 text-slate-300 hover:text-cyan-400 border border-navy-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-950/95 border-b border-navy-800 px-4 pt-2 pb-6 space-y-2 font-mono text-sm animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-navy-900"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-2">
            <a
              href="public/Rushikesh_Ganpat_Dhole_Resume.pdf"
              download="Rushikesh_Ganpat_Dhole_Resume.pdf"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-navy-900 border border-slate-700 text-slate-200"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-cyan-500 text-navy-950 font-bold"
            >
              Contact Me
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
