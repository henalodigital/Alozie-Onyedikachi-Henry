import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Download, Compass, Award, Star } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-0 bg-slate-950 text-white overflow-hidden flex flex-col justify-between">
      {/* Abstract Glowing Nebula Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <FadeInSection className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-4xl">
        
        {/* Centered Circular Profile Image with Glowing Blue Halo */}
        <div className="relative mb-8 group">
          {/* Subtle glowing halo behind image */}
          <div className="absolute inset-x-0 -inset-y-2 bg-gradient-to-tr from-blue-600 to-teal-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full animate-spin-slow opacity-30 group-hover:opacity-50 blur-sm"></div>
          
          <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl">
            <img
              src="/profile.jpg"
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Professional fallback illustration
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop";
              }}
            />
          </div>
        </div>

        {/* Name and Professional Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none mb-4 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
          {PERSONAL_INFO.name}
        </h1>
        <h2 className="text-sm md:text-lg lg:text-xl font-semibold tracking-wide text-blue-400 uppercase mb-6 max-w-2xl px-4">
          {PERSONAL_INFO.headline}
        </h2>

        {/* Bio text */}
        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-10 max-w-2xl px-4 font-normal text-center mx-auto">
          {PERSONAL_INFO.subHeadline}
        </p>

        {/* Calls to Action */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <a
            href="#experience"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300 group"
          >
            <Compass className="w-5 h-5 mr-2 group-hover:rotate-45 transition-transform duration-300" />
            View Projects
          </a>
          <a
            href="/Alozie_Onyedikachi_Henry_CV.pdf"
            download="Alozie_Onyedikachi_Henry_CV.pdf"
            className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 border border-slate-800 text-white font-bold rounded-xl hover:bg-slate-850 hover:border-slate-700 hover:scale-[1.02] transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-1" />
            Download CV
          </a>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Hero;
