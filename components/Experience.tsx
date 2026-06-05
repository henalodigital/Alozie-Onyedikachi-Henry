import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">Career Journey</h2>
            <h3 className="text-3xl font-bold text-slate-900">Professional Experience</h3>
          </div>

          <div className="flex flex-col gap-8">
            {EXPERIENCES.map((exp, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 md:items-start"
              >
                <div className="mt-1 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <Briefcase className="w-6 h-6" />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap mt-2 md:mt-0 w-fit">
                      {exp.date}
                    </span>
                  </div>
                  <h5 className="text-md font-medium text-slate-500 mb-4">{exp.company}</h5>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start text-slate-600 leading-relaxed text-sm">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Experience;