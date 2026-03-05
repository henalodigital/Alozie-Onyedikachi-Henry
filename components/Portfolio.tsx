import React from 'react';
import { PROJECTS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">Portfolio Highlights</h2>
          <h3 className="text-3xl font-bold text-slate-900">Featured Projects</h3>
        </div>

        <div className="flex flex-col gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 md:items-start"
            >
              <div className="mt-1 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm">
                  0{index + 1}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-blue-600">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  <span>Successful Execution</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;