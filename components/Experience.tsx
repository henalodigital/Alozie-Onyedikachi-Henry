import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <FadeInSection>
          <div className="mb-20 text-center">
            <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">My Career Path</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Professional Experience</h3>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">A successful record of operations coordination, client satisfaction, and strategic digital interventions.</p>
          </div>

          <div className="relative border-l-2 border-blue-200 ml-4 md:ml-8 space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-12 group">
                
                {/* Floating blue timeline progression icon */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-blue-600 border-4 border-slate-50 flex items-center justify-center text-white shadow-md shadow-blue-500/30 group-hover:bg-teal-500 group-hover:scale-110 transition-all duration-300">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* White card with subtle shadow */}
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-semibold text-slate-500 mt-1">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center space-x-1.5 text-blue-600 bg-blue-50/50 px-3 py-1.5 rounded-lg text-xs font-bold w-fit mt-1 md:mt-0">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.date}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mt-4">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start text-slate-600 text-sm leading-relaxed">
                        <span className="text-blue-500 mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
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
