import React from 'react';
import { PROJECTS, LEADERSHIP } from '../constants';
import { Award, Laptop, Users, GraduationCap, ArrowUpRight } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

const Projects: React.FC = () => {
  // Map icons dynamically based on project names
  const getProjectIcon = (title: string) => {
    if (title.toLowerCase().includes('summit') || title.toLowerCase().includes('sts')) {
      return <Users className="w-5 h-5 text-blue-600" />;
    }
    if (title.toLowerCase().includes('tax') || title.toLowerCase().includes('automation')) {
      return <Laptop className="w-5 h-5 text-teal-500" />;
    }
    if (title.toLowerCase().includes('school') || title.toLowerCase().includes('life')) {
      return <GraduationCap className="w-5 h-5 text-indigo-500" />;
    }
    return <Award className="w-5 h-5 text-purple-500" />;
  };

  return (
    <section id="projects" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">Key Initiatives</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Projects & Leadership</h3>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">Selected leadership highlights showing scale, execution skill, and real-world impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {PROJECTS.map((project, index) => (
              <div 
                key={index} 
                className="group relative p-8 bg-slate-50 hover:bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center">
                    {getProjectIcon(project.title)}
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{project.period}</span>
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
                <p className="text-xs font-semibold text-blue-500/80 mb-4 tracking-wide uppercase">{project.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          {/* Association Leadership Section */}
          <div className="border-t border-slate-100 pt-16">
            <h4 className="text-lg font-bold text-slate-900 mb-8 max-w-xs uppercase tracking-wider text-center md:text-left">
              Student Assembly Leadership
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {LEADERSHIP.map((leader, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-slate-50/50 rounded-2xl border border-slate-100/80 flex flex-col md:flex-row gap-4 items-start"
                >
                  <div className="mt-1 p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h5 className="font-bold text-slate-900 text-base">{leader.role}</h5>
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full w-fit">
                        {leader.date}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-500 mb-3">{leader.organization}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{leader.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Projects;
