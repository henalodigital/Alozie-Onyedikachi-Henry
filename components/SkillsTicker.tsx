import React from 'react';
import { SKILLS } from '../constants';

const SkillsTicker: React.FC = () => {
  return (
    <div className="bg-slate-50 py-10 border-y border-slate-200 overflow-hidden relative">
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
      
      <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
        {/* Double the list to create seamless loop */}
        {[...SKILLS, ...SKILLS, ...SKILLS].map((skill, index) => (
          <div key={index} className="mx-6 flex items-center">
            <span className="text-slate-400 mr-2 text-xl">•</span>
            <span className="text-lg font-semibold text-slate-700 whitespace-nowrap">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsTicker;