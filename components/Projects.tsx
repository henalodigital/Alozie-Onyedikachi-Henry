import React, { useState } from 'react';
import { CASE_STUDIES } from '../constants';
import { CaseStudy } from '../types';
import { FadeInSection } from './FadeInSection';
import { CaseStudyModal } from './CaseStudyModal';
import { 
  ArrowRight, 
  ExternalLink, 
  BarChart3, 
  Workflow, 
  GraduationCap, 
  Globe, 
  Building2, 
  FileSpreadsheet, 
  Layers, 
  CheckCircle2, 
  FileText 
} from 'lucide-react';

const categoryIcons = {
  'Data & Analytics': BarChart3,
  'AI & Workflow': Workflow,
  'Training Operations': GraduationCap,
  'Web Development': Globe,
  'Business Digitisation': Building2,
};

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const categories = [
    'All',
    'Data & Analytics',
    'AI & Workflow',
    'Training Operations',
    'Web Development',
    'Business Digitisation',
  ];

  const filteredProjects = activeCategory === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((cs) => cs.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-white border-b border-[#DCE4EA]">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeInSection>
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold text-[#167D75] uppercase tracking-wider mb-2">
                Documented Evidence & Case Studies
              </h2>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
                Featured Projects & Practical Solutions
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#627D98] leading-relaxed">
                Detailed breakdowns of statistical forecasting, workforce AI enablement, training coordination, web deployment, and business digitisation.
              </p>
            </div>

            <div className="mt-6 md:mt-0">
              <span className="text-xs font-semibold text-[#627D98]">
                Showing {filteredProjects.length} of {CASE_STUDIES.length} verified studies
              </span>
            </div>
          </div>

          {/* Interactive Category Filter Tabs (Zero-Pill, Clean Segmented Controls) */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-[#F2F5F8] border border-[#DCE4EA] rounded-xl mb-12 w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#167D75] ${
                  activeCategory === cat
                    ? 'bg-[#102A43] text-white shadow-sm'
                    : 'text-[#263746] hover:bg-white/80 hover:text-[#102A43]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Case Study Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((cs) => {
              const IconComp = categoryIcons[cs.category] || Layers;
              return (
                <div
                  key={cs.id}
                  className="bg-[#F2F5F8] border border-[#DCE4EA] rounded-2xl p-7 hover:border-[#167D75] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Unboxed Metadata Header (No static pill enclosure) */}
                    <div className="flex items-center justify-between text-xs text-[#627D98] mb-3">
                      <div className="flex items-center space-x-2">
                        <IconComp className="w-4 h-4 text-[#167D75]" />
                        <span className="font-semibold text-[#167D75]">{cs.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{cs.period}</span>
                      </div>
                      <span className="text-[11px] font-medium text-[#627D98]">
                        {cs.evidenceType}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h4 className="font-display text-xl sm:text-2xl font-bold text-[#102A43] mb-1.5 group-hover:text-[#167D75] transition-colors">
                      {cs.title}
                    </h4>
                    <p className="text-xs font-medium text-[#627D98] mb-4">
                      {cs.subtitle}
                    </p>

                    {/* Overview snippet */}
                    <p className="text-sm text-[#263746] leading-relaxed mb-6">
                      {cs.overview}
                    </p>

                    {/* Visual Architecture / Evidence Card Graphic */}
                    <div className="bg-white p-4 rounded-xl border border-[#DCE4EA] mb-6">
                      <div className="flex items-center justify-between text-xs font-bold text-[#102A43] mb-2 pb-2 border-b border-[#DCE4EA]/60">
                        <span className="flex items-center">
                          <Layers className="w-3.5 h-3.5 mr-1.5 text-[#167D75]" />
                          Methodology & Scope
                        </span>
                        <span className="text-[11px] text-[#627D98] font-normal">{cs.organization}</span>
                      </div>
                      
                      <div className="space-y-1.5 text-xs text-[#263746]">
                        <div className="flex items-start">
                          <span className="font-semibold text-[#102A43] min-w-[70px]">Role:</span>
                          <span className="text-[#627D98]">{cs.role}</span>
                        </div>
                        <div className="flex items-start">
                          <span className="font-semibold text-[#102A43] min-w-[70px]">Approach:</span>
                          <span className="text-[#627D98] line-clamp-2">{cs.approach.slice(0, 2).join(' · ')}</span>
                        </div>
                      </div>

                      {/* Tools Tag Strip */}
                      <div className="mt-3 pt-2 border-t border-[#DCE4EA]/60 flex flex-wrap gap-1.5">
                        {cs.toolsAndMethods.slice(0, 4).map((tool, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-medium bg-[#F2F5F8] text-[#263746] px-2.5 py-0.5 rounded border border-[#DCE4EA]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Verified Outcome Quote Box */}
                    <div className="p-3.5 bg-white/80 rounded-xl border-l-4 border-[#167D75] text-xs text-[#263746] mb-6">
                      <span className="font-bold text-[#102A43] block mb-0.5">Verified Outcome:</span>
                      <p className="text-slate-600 leading-relaxed">{cs.verifiedOutcome}</p>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-[#DCE4EA] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedCaseStudy(cs)}
                      className="inline-flex items-center text-xs font-bold text-[#167D75] hover:text-[#126B64] group-hover:translate-x-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#167D75] rounded"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedCaseStudy(cs)}
                      className="text-xs font-medium text-[#627D98] hover:text-[#102A43] underline"
                    >
                      Inspect Deliverables
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </FadeInSection>
      </div>

      {/* Interactive Case Study Detail Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
};

export default Projects;
