import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';
import { ExperienceItem } from '../types';
import { FadeInSection } from './FadeInSection';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award, 
  Users, 
  Briefcase, 
  ArrowUpRight 
} from 'lucide-react';

const Experience: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Corporate Experience', 'Henalo & Consulting', 'Leadership & Community'];

  const filteredExperiences = filter === 'All'
    ? EXPERIENCES
    : EXPERIENCES.filter((exp) => exp.category === filter);

  return (
    <section id="experience" className="py-24 bg-[#F2F5F8]">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeInSection>
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold text-[#167D75] uppercase tracking-wider mb-2">
                Career History
              </h2>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
                Professional Experience & Leadership
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#627D98] leading-relaxed">
                Reverse-chronological timeline of roles in training support, programme coordination, digital consulting, and student governance.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-white border border-[#DCE4EA] rounded-xl mt-6 md:mt-0 w-fit">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#167D75] ${
                    filter === cat
                      ? 'bg-[#102A43] text-white shadow-sm'
                      : 'text-[#263746] hover:bg-[#F2F5F8]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline List */}
          <div className="space-y-6">
            {filteredExperiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#DCE4EA] rounded-2xl p-7 hover:border-[#167D75] hover:shadow-md transition-all duration-200"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[11px] font-bold text-[#167D75] uppercase tracking-wider block mb-1">
                      {exp.category}
                    </span>
                    <h4 className="font-display text-xl font-bold text-[#102A43]">
                      {exp.role}
                    </h4>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#627D98] mt-1">
                      <span className="font-semibold text-[#263746] flex items-center">
                        <Building2 className="w-3.5 h-3.5 mr-1 text-[#167D75]" />
                        {exp.organization}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center">
                        <MapPin className="w-3.5 h-3.5 mr-1 text-[#627D98]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Period tag */}
                  <div className="flex items-center text-xs font-semibold text-[#102A43] bg-[#F2F5F8] border border-[#DCE4EA] px-3.5 py-1.5 rounded-lg w-fit">
                    <Calendar className="w-3.5 h-3.5 mr-1.5 text-[#167D75]" />
                    {exp.period}
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2 text-xs sm:text-sm text-[#263746] leading-relaxed mb-4">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#167D75] mt-2 mr-2.5 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Verified Highlight badge if exists */}
                {exp.verifiedHighlight && (
                  <div className="pt-3 border-t border-[#DCE4EA]/70 flex items-center text-xs font-medium text-[#102A43] bg-[#E6F4F3]/40 p-2.5 rounded-lg">
                    <Award className="w-4 h-4 text-[#167D75] mr-2 flex-shrink-0" />
                    <span><strong className="text-[#102A43]">Milestone:</strong> {exp.verifiedHighlight}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

        </FadeInSection>
      </div>
    </section>
  );
};

export default Experience;
