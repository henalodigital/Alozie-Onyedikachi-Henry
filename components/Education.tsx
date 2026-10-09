import React from 'react';
import { EDUCATION_LIST, CERTIFICATIONS_LIST } from '../constants';
import { GraduationCap, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-white border-b border-[#DCE4EA]">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeInSection className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Education Column (7 cols) */}
          <div className="lg:col-span-6">
            <div className="mb-10">
              <h2 className="text-xs font-bold text-[#167D75] uppercase tracking-wider mb-2">
                Academic Background
              </h2>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#102A43]">
                Degrees & Formal Education
              </h3>
              <p className="text-xs sm:text-sm text-[#627D98] mt-1.5">
                Strong quantitative foundations paired with contemporary business administration.
              </p>
            </div>
            
            <div className="space-y-6">
              {EDUCATION_LIST.map((edu, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-[#F2F5F8] rounded-2xl border border-[#DCE4EA] hover:border-[#167D75] transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#DCE4EA] flex items-center justify-center text-[#167D75] flex-shrink-0">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-bold text-[#102A43] leading-snug">
                          {edu.degree}
                        </h4>
                        <h5 className="text-xs font-semibold text-[#627D98]">
                          {edu.institution}
                        </h5>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#102A43] bg-white border border-[#DCE4EA] px-3 py-1 rounded-md">
                      {edu.date}
                    </span>
                  </div>
                  
                  {edu.details && (
                    <p className="text-xs text-[#263746]/80 leading-relaxed pt-2 border-t border-[#DCE4EA]/60">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Professional Certifications Column (6 cols) */}
          <div className="lg:col-span-6">
            <div className="mb-10">
              <h2 className="text-xs font-bold text-[#167D75] uppercase tracking-wider mb-2">
                Accreditations
              </h2>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#102A43]">
                Professional Certifications
              </h3>
              <p className="text-xs sm:text-sm text-[#627D98] mt-1.5">
                Industry-recognised credentials in business analysis, AI prompting, and data literacy.
              </p>
            </div>

            <div className="space-y-3.5">
              {CERTIFICATIONS_LIST.map((cert, index) => (
                <div 
                  key={index} 
                  className="p-4 bg-[#F2F5F8] rounded-xl border border-[#DCE4EA] hover:border-[#167D75] transition-all flex items-start space-x-3.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#DCE4EA] flex items-center justify-center text-[#167D75] flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-[#102A43]">
                        {cert.title}
                      </h4>
                      <span className="text-[11px] font-semibold text-[#167D75] bg-white px-2 py-0.5 rounded border border-[#DCE4EA]">
                        {cert.issuer}
                      </span>
                    </div>
                    {cert.credentialNote && (
                      <p className="text-xs text-[#627D98] mt-1 leading-snug">
                        {cert.credentialNote}
                      </p>
                    )}
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

export default Education;
