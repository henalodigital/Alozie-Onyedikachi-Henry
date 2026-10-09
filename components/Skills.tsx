import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { FadeInSection } from './FadeInSection';
import { BarChart3, Workflow, Laptop, Palette, CheckCircle2 } from 'lucide-react';

const categoryIcons = [BarChart3, Workflow, Laptop, Palette];

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  return (
    <section id="skills" className="py-24 bg-white border-b border-[#DCE4EA]">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeInSection>
          
          {/* Header */}
          <div className="mb-14 max-w-2xl">
            <h2 className="text-xs font-bold text-[#167D75] uppercase tracking-wider mb-2">
              Capabilities & Tooling
            </h2>
            <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
              Skills, Methodologies & Technology Stack
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#627D98] leading-relaxed">
              Organised by practical operational discipline. Categorised with verified proficiency levels and applied contexts.
            </p>
          </div>

          {/* Category Tabs (Clean Segmented Selector) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const IconComp = categoryIcons[idx];
              const isSelected = selectedCategory === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedCategory(idx)}
                  className={`p-4 rounded-xl border text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#167D75] ${
                    isSelected
                      ? 'bg-[#102A43] text-white border-[#102A43] shadow-md'
                      : 'bg-[#F2F5F8] text-[#263746] border-[#DCE4EA] hover:border-[#167D75] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center space-x-2.5 mb-2">
                    <IconComp className={`w-4 h-4 ${isSelected ? 'text-teal-400' : 'text-[#167D75]'}`} />
                    <span className="font-display text-xs font-bold uppercase tracking-wider">
                      Category 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base leading-snug">
                    {cat.name}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Active Category Display */}
          <div className="bg-[#F2F5F8] border border-[#DCE4EA] rounded-2xl p-7 sm:p-9">
            <div className="mb-6 pb-4 border-b border-[#DCE4EA] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="font-display text-2xl font-bold text-[#102A43]">
                  {SKILL_CATEGORIES[selectedCategory].name}
                </h4>
                <p className="text-xs sm:text-sm text-[#627D98] mt-1">
                  {SKILL_CATEGORIES[selectedCategory].description}
                </p>
              </div>
              <span className="text-xs font-semibold text-[#167D75] bg-white px-3 py-1 rounded-lg border border-[#DCE4EA] w-fit">
                {SKILL_CATEGORIES[selectedCategory].skills.length} Documented Competencies
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SKILL_CATEGORIES[selectedCategory].skills.map((skill, sIdx) => {
                const isCore = skill.level === 'Core Strength';
                const isWorking = skill.level === 'Working Knowledge';
                return (
                  <div
                    key={sIdx}
                    className="bg-white p-5 rounded-xl border border-[#DCE4EA] hover:border-[#167D75] hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm sm:text-base text-[#102A43]">
                        {skill.name}
                      </span>
                      <span
                        className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                          isCore
                            ? 'bg-[#E6F4F3] text-[#167D75]'
                            : isWorking
                            ? 'bg-slate-100 text-[#263746]'
                            : 'bg-amber-50 text-amber-800'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-[#627D98] leading-relaxed">
                      {skill.context}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </FadeInSection>
      </div>
    </section>
  );
};

export default Skills;
