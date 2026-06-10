import React from 'react';
import { BADGES, CORE_COMPETENCIES, PERSONAL_INFO } from '../constants';
import { FadeInSection } from './FadeInSection';
import { CheckCircle2, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeInSection className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Main Biography Content */}
          <div className="lg:col-span-7">
            <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">Who I Am</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Bridging Operational Strategy, Technology, and Training.
            </h3>
            
            <div className="prose prose-slate text-slate-600 md:text-base leading-relaxed mb-8 text-justify">
              <p className="mb-4">
                Innovative Digital Operations Specialist and AI Implementation Strategist with a strong foundation in digital skills, front-end development, and business analysis. Highly proficient in leveraging versatile artificial intelligence tools and advanced prompt engineering to automate complex workflows, design dynamic web environments, and scale office productivity.
              </p>
              <p className="mb-4">
                Experienced in coordinating technical training programs, managing complex stakeholder communications, and leading high-profile technology summits. Recognized for a hands-on approach to problem-solving, utilizing AI-assisted technologies to maneuver operational challenges, optimize executive profiles, and deliver rapid, end-to-end digital solutions—from initial UI/UX design to live deployment.
              </p>
            </div>
          </div>

          {/* Competency Card with Bullet Tags */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-slate-950 p-8 md:p-10 rounded-3xl text-white relative overflow-hidden shadow-2xl border border-slate-900">
              <div className="absolute top-0 right-0 w-44 h-44 bg-blue-500 rounded-full blur-3xl opacity-10 -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-400 rounded-full blur-3xl opacity-10 -ml-10 -mb-10"></div>
              
              <h3 className="text-xl font-bold mb-6 relative z-10 text-white flex items-center">
                <span className="w-2.5 h-2.5 bg-blue-400 rounded-full mr-2"></span>
                Core Competencies
              </h3>
              
              <div className="flex flex-col gap-3 relative z-10">
                {CORE_COMPETENCIES.map((comp, idx) => (
                  <div key={idx} className="flex items-start space-x-3 bg-slate-900 px-4 py-3 rounded-xl border border-slate-850 hover:bg-slate-850 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-200">{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </FadeInSection>
      </div>
    </section>
  );
};

export default About;
