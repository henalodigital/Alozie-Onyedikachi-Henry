import React from 'react';
import { BADGES } from '../constants';
import { FadeInSection } from './FadeInSection';

const Awards: React.FC = () => {
  return (
    <section id="awards" className="py-24 bg-slate-950 text-white overflow-hidden relative border-t border-slate-900">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-amber-500 tracking-wider uppercase mb-2">Honors & Recognitions</h2>
            <h3 className="text-3xl md:text-4xl font-bold">Awards</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BADGES.map((badge, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center p-8 bg-slate-900/80 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-colors group">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex flex-shrink-0 items-center justify-center text-3xl mb-4 sm:mb-0 sm:mr-6 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                  {badge.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-widest uppercase text-amber-500 mb-1">{badge.year}</p>
                  <h4 className="text-xl font-bold text-white mb-1 leading-tight">{badge.title}</h4>
                  <p className="text-sm text-slate-400">{badge.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Awards;
