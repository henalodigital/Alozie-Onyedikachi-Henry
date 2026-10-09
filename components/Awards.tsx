import React from 'react';
import { AWARDS_LIST } from '../constants';
import { FadeInSection } from './FadeInSection';
import { Award, Trophy, Star } from 'lucide-react';

const Awards: React.FC = () => {
  return (
    <section id="awards" className="py-20 bg-[#102A43] text-white relative overflow-hidden border-t border-[#1A3B5C]">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <FadeInSection>
          <div className="text-center mb-12 max-w-xl mx-auto">
            <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-2">
              Recognitions & Citations
            </h2>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              Honors & Institutional Awards
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Acknowledged for outstanding internship execution and community leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {AWARDS_LIST.map((award, index) => (
              <div 
                key={index} 
                className="flex flex-col sm:flex-row items-start sm:items-center p-7 bg-[#0A1826]/90 rounded-2xl border border-[#244D76] hover:border-teal-400/60 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[#1A3B5C] border border-[#33618D] flex flex-shrink-0 items-center justify-center text-teal-400 mb-4 sm:mb-0 sm:mr-6">
                  {index === 0 ? <Trophy className="w-7 h-7" /> : <Star className="w-7 h-7" />}
                </div>
                <div>
                  <div className="flex items-center space-x-2 text-xs font-bold text-teal-400 tracking-wider uppercase mb-1">
                    <span>{award.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{award.organization}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1.5 leading-snug">
                    {award.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {award.context}
                  </p>
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
