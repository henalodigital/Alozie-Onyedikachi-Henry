import React from 'react';
import { HENALO_SERVICES, HENALO_PROCESS, PERSONAL_INFO } from '../constants';
import { FadeInSection } from './FadeInSection';
import { 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Laptop, 
  Building2, 
  Palette, 
  Workflow, 
  FileText, 
  Sparkles,
  MessageSquare
} from 'lucide-react';

const serviceIcons = {
  'web-development': Laptop,
  'business-digitisation': Building2,
  'brand-identity': Palette,
  'ai-productivity': Workflow,
  'career-documentation': FileText,
};

const HenaloDigital: React.FC = () => {
  return (
    <section id="henalo-digital" className="py-24 bg-[#102A43] text-white relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#167D75]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#1A3B5C]/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <FadeInSection>
          
          {/* Section Brand Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-teal-400 uppercase tracking-widest mb-3">
              <Globe className="w-4 h-4" />
              <span>Henalo Digital Enterprise · Digital Consulting & Solutions</span>
            </div>
            <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Practical Digital Enablement for SMEs & Professionals
            </h3>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Helping businesses, consultants, and leaders establish credibility, modernize manual workflows, and scale their digital footprint.
            </p>
          </div>

          {/* 5 Core Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {HENALO_SERVICES.map((srv) => {
              const IconComp = serviceIcons[srv.id as keyof typeof serviceIcons] || Globe;
              return (
                <div
                  key={srv.id}
                  className="bg-[#0A1826]/90 border border-[#244D76] rounded-2xl p-7 hover:border-teal-400/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#1A3B5C] border border-[#33618D] flex items-center justify-center text-teal-400 mb-5">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h4 className="font-display text-xl font-bold text-white mb-2">
                      {srv.title}
                    </h4>

                    <p className="text-xs font-medium text-teal-300/90 mb-3">
                      {srv.tagline}
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed mb-5">
                      {srv.description}
                    </p>

                    {/* Deliverables checklist */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-[#1A3B5C]">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Key Deliverables
                      </span>
                      {srv.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sample Work Badge */}
                  <div className="pt-4 border-t border-[#1A3B5C]/80">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Track Record
                    </span>
                    <p className="text-xs font-medium text-slate-200 mt-0.5">
                      {srv.sampleWorkSummary}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 4-Step Engagement Process */}
          <div className="bg-[#0A1826]/70 border border-[#244D76] rounded-3xl p-8 sm:p-12 mb-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-2">
                Structured Execution
              </span>
              <h4 className="font-display text-2xl sm:text-3xl font-bold text-white">
                How We Deliver Projects
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                A transparent, step-by-step workflow designed to deliver results on time without scope creep.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {HENALO_PROCESS.map((st) => (
                <div key={st.number} className="relative">
                  <span className="font-display text-4xl font-extrabold text-[#244D76] block mb-2">
                    {st.number}
                  </span>
                  <h5 className="font-bold text-base text-white mb-2">
                    {st.title}
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Henalo Call to Action Banner */}
          <div className="bg-gradient-to-r from-[#167D75] to-[#126B64] rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="max-w-xl text-left">
              <h4 className="font-display text-2xl font-extrabold text-white">
                Ready to Digitise Your Business or Build a New Website?
              </h4>
              <p className="text-xs sm:text-sm text-teal-50 mt-1.5 leading-relaxed">
                Contact Henalo Digital Enterprise for websites, brand assets, or AI workflow assessments tailored to your scale.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3.5 bg-white text-[#102A43] font-bold text-xs sm:text-sm rounded-lg hover:bg-slate-100 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageSquare className="w-4 h-4 mr-2 text-[#167D75]" />
                Submit Project Enquiry
              </a>
              <a
                href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-3.5 bg-[#102A43] text-white font-semibold text-xs sm:text-sm rounded-lg hover:bg-[#1A3B5C] transition-colors border border-white/20"
              >
                Direct WhatsApp Line
              </a>
            </div>
          </div>

        </FadeInSection>
      </div>
    </section>
  );
};

export default HenaloDigital;
