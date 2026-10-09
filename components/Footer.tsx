import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Download, Linkedin, Mail, ArrowUp, Globe, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1826] text-white py-16 border-t border-[#1A3B5C]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1A3B5C]/80 items-start">
          
          {/* Col 1: Identity */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="font-display text-xl font-bold text-white tracking-tight">
              Alozie Onyedikachi Henry
            </h4>
            <p className="text-xs font-semibold text-teal-400 tracking-wide uppercase">
              {PERSONAL_INFO.positioning}
            </p>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Solving operational and analytical challenges through structured processes, quantitative analysis, and modern digital tools.
            </p>
            <div className="pt-2 flex items-center space-x-3 text-xs text-slate-400">
              <span>Lagos, Nigeria</span>
              <span aria-hidden="true">·</span>
              <a 
                href={PERSONAL_INFO.liveUrl} 
                className="text-slate-300 hover:text-teal-400 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                alozie-onyedikachi-henry.vercel.app
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
              <a href="#home" className="hover:text-teal-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-teal-400 transition-colors">About Me</a>
              <a href="#projects" className="hover:text-teal-400 transition-colors">Case Studies</a>
              <a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a>
              <a href="#skills" className="hover:text-teal-400 transition-colors">Skills & Tools</a>
              <a href="#henalo-digital" className="hover:text-teal-400 transition-colors">Henalo Digital</a>
              <a href="#education" className="hover:text-teal-400 transition-colors">Education</a>
              <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Col 3: Actions & Downloads */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
              Official Resources
            </span>
            <div className="flex flex-col gap-2.5">
              <a
                href={PERSONAL_INFO.cvUrl}
                download="Alozie_Onyedikachi_Henry_CV.pdf"
                className="inline-flex items-center text-xs font-semibold px-4 py-2.5 rounded-lg bg-[#102A43] border border-[#244D76] text-white hover:bg-[#1A3B5C] hover:border-teal-400 transition-colors w-fit"
              >
                <Download className="w-3.5 h-3.5 mr-2 text-teal-400" />
                Download Master CV (PDF)
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold px-4 py-2.5 rounded-lg bg-[#102A43] border border-[#244D76] text-white hover:bg-[#1A3B5C] hover:border-teal-400 transition-colors w-fit"
              >
                <Linkedin className="w-3.5 h-3.5 mr-2 text-teal-400" />
                Connect on LinkedIn
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            {PERSONAL_INFO.copyright}
          </p>
          <div className="flex items-center space-x-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center text-xs text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
