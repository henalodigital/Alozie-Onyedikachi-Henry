import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { FadeInSection } from './FadeInSection';
import { 
  GraduationCap, 
  Briefcase, 
  Target, 
  CheckCircle2, 
  Workflow, 
  BarChart3, 
  Globe, 
  ArrowRight 
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#F2F5F8]">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeInSection>
          
          {/* Section Header */}
          <div className="mb-16 max-w-3xl">
            <h2 className="text-xs font-bold text-[#167D75] uppercase tracking-wider mb-2">
              Professional Background
            </h2>
            <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
              About Alozie Onyedikachi Henry
            </h3>
            <p className="mt-3 text-base text-[#627D98] leading-relaxed">
              Bridging statistical thinking, structured operational execution, and modern digital technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left 7 Columns: Core Narrative */}
            <div className="lg:col-span-7 space-y-6 text-[#263746] text-base leading-relaxed">
              <div className="bg-white p-8 rounded-2xl border border-[#DCE4EA] shadow-sm space-y-4">
                <h4 className="font-display text-xl font-bold text-[#102A43]">
                  Solving Practical Problems Through Structured Process and Data
                </h4>
                <p>
                  I combine a foundation in <strong className="text-[#102A43]">Statistics from Lagos State University of Education (LASUED)</strong> with ongoing studies in <strong className="text-[#102A43]">Business Administration at the University of the People</strong>. This background equips me to approach operational bottlenecks not with guesswork, but with quantitative discipline, structured workflows, and measurable milestones.
                </p>
                <p>
                  At <strong className="text-[#102A43]">Hommaston Limited</strong>, I progressed from Training Intern to Lagos Training Coordinator for the national <strong className="text-[#102A43]">NCDMB Project 350</strong>, earning the <strong className="text-[#102A43]">Most Outstanding Intern (2025)</strong> recognition before moving into my current full-time role as Training Support Staff. In this capacity, I have contributed to over 100 training sessions, overseeing learner onboarding, Testmoz/LMS administration, attendance logistics, and stakeholder reporting.
                </p>
                <p>
                  Recognising the practical potential of artificial intelligence to eliminate administrative friction, I conducted a comprehensive AI needs assessment across Hommaston’s 23-member workforce and contributed to a 90-day adoption roadmap for tools like ChatGPT, Google Gemini, and Microsoft Copilot.
                </p>
                <p>
                  Beyond corporate operations, I lead <strong className="text-[#102A43]">Henalo Digital Enterprise</strong> as founder and freelance consultant, designing and deploying more than 5 production websites, establishing business documentation, and assisting companies like FeedCore Agro Limited with corporate incorporation and digital setups.
                </p>
              </div>

              {/* Education & Academic Foundation Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-xl border border-[#DCE4EA]">
                  <div className="w-9 h-9 rounded-lg bg-[#E6F4F3] text-[#167D75] flex items-center justify-center mb-3">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#167D75] uppercase tracking-wider block mb-1">
                    B.Sc. in Statistics
                  </span>
                  <h5 className="font-bold text-[#102A43] text-sm">
                    Lagos State University of Education
                  </h5>
                  <p className="text-xs text-[#627D98] mt-1">
                    Completed · Quantitative modeling, time-series forecasting, research methodology.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#DCE4EA]">
                  <div className="w-9 h-9 rounded-lg bg-[#E6F4F3] text-[#167D75] flex items-center justify-center mb-3">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#167D75] uppercase tracking-wider block mb-1">
                    B.Sc. in Business Administration
                  </span>
                  <h5 className="font-bold text-[#102A43] text-sm">
                    University of the People (Online)
                  </h5>
                  <p className="text-xs text-[#627D98] mt-1">
                    In Progress · Organizational behavior, operational strategy, management principles.
                  </p>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Dual-Audience Value Proposition */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* For Recruiters Box */}
              <div className="bg-[#102A43] text-white p-7 rounded-2xl border border-[#1A3B5C] shadow-lg">
                <div className="flex items-center space-x-2 text-teal-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Briefcase className="w-4 h-4" />
                  <span>For Hiring Managers & Recruiters</span>
                </div>
                <h4 className="font-display text-lg font-bold text-white mb-3">
                  Why Hire Alozie for Your Team?
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Proven reliability in corporate operations and cross-functional team coordination with a data-first mindset.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-200">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Experience managing 100+ training cohorts with zero tolerance for administrative disarray.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>LMS administration, attendee onboarding, assessment auditing, and status reporting.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Analytical competence with Excel, SPSS, and statistical forecasting frameworks.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Hands-on AI implementation that delivers real productivity, not theoretical hype.</span>
                  </li>
                </ul>
                <div className="mt-5 pt-4 border-t border-[#1A3B5C] flex items-center justify-between">
                  <a
                    href="#experience"
                    className="text-xs font-bold text-teal-400 hover:text-teal-300 inline-flex items-center"
                  >
                    Review Experience Timeline
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </a>
                  <a
                    href={PERSONAL_INFO.cvUrl}
                    download="Alozie_Onyedikachi_Henry_CV.pdf"
                    className="text-xs text-slate-300 hover:text-white underline"
                  >
                    Download CV
                  </a>
                </div>
              </div>

              {/* For SME Clients Box */}
              <div className="bg-white p-7 rounded-2xl border border-[#DCE4EA] shadow-sm">
                <div className="flex items-center space-x-2 text-[#167D75] text-xs font-bold uppercase tracking-wider mb-2">
                  <Globe className="w-4 h-4" />
                  <span>For Clients & Growing Businesses</span>
                </div>
                <h4 className="font-display text-lg font-bold text-[#102A43] mb-3">
                  Partnering Through Henalo Digital
                </h4>
                <p className="text-xs text-[#627D98] leading-relaxed mb-4">
                  End-to-end digital enablement for individuals, executives, and SMEs seeking credible market positioning.
                </p>
                <ul className="space-y-2.5 text-xs text-[#263746]">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#167D75] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Modern, responsive website design and deployment (5+ live deployments).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#167D75] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Business digitisation, Google Business Profiles, and structured record templates.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#167D75] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Professional brand identities, marketing collateral, and ATS-optimised CVs.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#167D75] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Practical AI productivity walkthroughs that save hours of administrative manual labor.</span>
                  </li>
                </ul>
                <div className="mt-5 pt-4 border-t border-[#DCE4EA] flex items-center justify-between">
                  <a
                    href="#henalo-digital"
                    className="text-xs font-bold text-[#167D75] hover:text-[#126B64] inline-flex items-center"
                  >
                    Explore Henalo Digital Services
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </a>
                  <a
                    href="#contact"
                    className="text-xs text-[#627D98] hover:text-[#102A43] underline"
                  >
                    Submit Project Enquiry
                  </a>
                </div>
              </div>

            </div>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default About;
