import React from 'react';
import { KEY_METRICS } from '../constants';
import { FadeInSection } from './FadeInSection';
import { Award, TrendingUp, Users, Cpu, Globe, CheckCircle2 } from 'lucide-react';

const icons = [Users, Cpu, Users, TrendingUp, Globe, Award];

const KeyAchievements: React.FC = () => {
  return (
    <section className="py-16 bg-white border-y border-[#DCE4EA]">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeInSection>
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="text-xs font-bold text-[#167D75] uppercase tracking-wider mb-2">
              Verified Evidence & Impact
            </h2>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#102A43]">
              Career Highlights & Operational Milestones
            </h3>
            <p className="text-sm text-[#627D98] mt-2">
              Quantifiable responsibilities and verified contributions across corporate training, student leadership, and client engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {KEY_METRICS.map((metric, idx) => {
              const IconComponent = icons[idx % icons.length];
              return (
                <div
                  key={idx}
                  className="bg-[#F2F5F8] border border-[#DCE4EA] rounded-xl p-6 hover:border-[#167D75] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
                        {metric.value}
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-white border border-[#DCE4EA] flex items-center justify-center text-[#167D75]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>
                    <h4 className="text-base font-bold text-[#102A43] mb-2">
                      {metric.label}
                    </h4>
                    <p className="text-xs text-[#263746]/80 leading-relaxed">
                      {metric.context}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#DCE4EA]/70 flex items-center text-[11px] font-medium text-[#167D75]">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                    <span>Documented in Master CV</span>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default KeyAchievements;
