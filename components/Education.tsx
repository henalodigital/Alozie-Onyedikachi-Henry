import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import { GraduationCap, Award } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeInSection className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education Column */}
          <div>
            <div className="mb-10">
              <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">Academics</h2>
              <h3 className="text-3xl font-bold text-slate-900">Education</h3>
            </div>
            
            <div className="space-y-8">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 relative">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{edu.degree}</h4>
                    <h5 className="text-md font-medium text-slate-500 mb-2">{edu.institution}</h5>
                    <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {edu.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
             <div className="mb-10">
              <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">Qualifications</h2>
              <h3 className="text-3xl font-bold text-slate-900">Certifications</h3>
            </div>

            <div className="space-y-6">
              {CERTIFICATIONS.map((cert, index) => (
                <div key={index} className="flex items-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-slate-800">{cert}</span>
                </div>
              ))}
            </div>
          </div>

        </FadeInSection>
      </div>
    </section>
  );
};

export default Education;
