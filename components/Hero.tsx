import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Download, Briefcase } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-900 text-white overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 skew-x-12 translate-x-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h2 className="text-blue-400 font-semibold tracking-wide uppercase mb-4 text-sm md:text-base">
            Portfolio
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 text-white">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light mb-4">
            {PERSONAL_INFO.headline}
          </p>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">
            {PERSONAL_INFO.subHeadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-lg shadow-lg hover:bg-slate-100 hover:scale-105 transition-all duration-200 group"
            >
              <Briefcase className="w-5 h-5 mr-2 group-hover:text-blue-600 transition-colors" />
              Hire Me
            </a>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-800 hover:border-slate-500 transition-all duration-200">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;