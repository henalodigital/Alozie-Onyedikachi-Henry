import React from 'react';
import { BADGES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-2/3">
            <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">About Me</h2>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Analytic Mind. Strategic Vision.</h3>
            
            <div className="prose prose-lg text-slate-600 leading-relaxed mb-8">
              <p className="mb-4">
                Forward-thinking Business Analyst and Training Operations Specialist with expertise in statistics, AI-driven process automation, and digital media strategy.
              </p>
              <p>
                Proven track record of improving efficiency in corporate and educational environments, supporting national-scale capacity-building projects, and translating complex data into actionable insights. Skilled at bridging business strategy, technology, and training operations to deliver measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {BADGES.map((badge, index) => (
                <div key={index} className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-3xl mr-4">{badge.icon}</span>
                  <div>
                    <h4 className="font-bold text-slate-900">{badge.title}</h4>
                    <p className="text-sm text-slate-500">{badge.year} • {badge.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/3 w-full">
            <div className="bg-slate-900 p-8 rounded-2xl text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
               <h3 className="text-xl font-bold mb-6 relative z-10">Core Competencies</h3>
               <ul className="space-y-4 relative z-10">
                 <li className="flex items-center space-x-3">
                   <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                   <span className="text-slate-300">Statistical Analysis</span>
                 </li>
                 <li className="flex items-center space-x-3">
                   <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                   <span className="text-slate-300">Project Management</span>
                 </li>
                 <li className="flex items-center space-x-3">
                   <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                   <span className="text-slate-300">Operational Strategy</span>
                 </li>
                 <li className="flex items-center space-x-3">
                   <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                   <span className="text-slate-300">Digital Transformation</span>
                 </li>
               </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;