import React from 'react';
import { CORE_COMPETENCIES } from '../constants';

const SkillsTicker: React.FC = () => {
  return (
    <div className="bg-slate-50 py-8 border-y border-slate-100 overflow-hidden relative">
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
        {/* Triple the list to create seamless infinite loop */}
        {[...CORE_COMPETENCIES, ...CORE_COMPETENCIES, ...CORE_COMPETENCIES].map((skill, index) => (
          <div key={index} className="mx-6 flex items-center">
            <span className="text-blue-500 mr-2 text-xl">•</span>
            <span className="text-base font-bold text-slate-700 whitespace-nowrap">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsTicker;
