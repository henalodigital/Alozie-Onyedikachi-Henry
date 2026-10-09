import React, { useEffect } from 'react';
import { CaseStudy } from '../types';
import { X, CheckCircle2, Layers, Wrench, FileText, TrendingUp, ExternalLink, Calendar, Building2 } from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#DCE4EA] flex flex-col relative text-[#263746]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#DCE4EA] flex items-center justify-between z-10">
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#167D75]">
            <span>{caseStudy.category}</span>
            <span aria-hidden="true">·</span>
            <span>{caseStudy.evidenceType}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#627D98] hover:text-[#102A43] hover:bg-[#F2F5F8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#167D75]"
            aria-label="Close case study details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Title Area */}
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#627D98] mb-2">
              <span className="flex items-center">
                <Building2 className="w-3.5 h-3.5 mr-1 text-[#167D75]" />
                {caseStudy.organization}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1 text-[#167D75]" />
                {caseStudy.period}
              </span>
            </div>
            <h3 id="case-study-title" className="font-display text-2xl sm:text-3xl font-extrabold text-[#102A43] leading-tight">
              {caseStudy.title}
            </h3>
            <p className="text-sm font-medium text-[#167D75] mt-1">
              {caseStudy.subtitle}
            </p>
          </div>

          {/* Key Metrics / Snapshot Strip */}
          {caseStudy.keyMetrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[#F2F5F8] p-4 rounded-xl border border-[#DCE4EA]">
              {caseStudy.keyMetrics.map((km, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <span className="text-[11px] font-bold text-[#627D98] uppercase block">
                    {km.label}
                  </span>
                  <span className="text-base font-extrabold text-[#102A43]">
                    {km.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Overview & Objective */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-bold text-[#167D75] uppercase tracking-wider mb-1">
                Project Overview
              </h4>
              <p className="text-sm text-[#263746] leading-relaxed">
                {caseStudy.overview}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold text-[#167D75] uppercase tracking-wider mb-1">
                The Core Challenge & Objective
              </h4>
              <p className="text-sm text-[#263746] leading-relaxed bg-[#F8FAFC] p-4 rounded-xl border border-[#DCE4EA]/80">
                {caseStudy.problem}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold text-[#167D75] uppercase tracking-wider mb-1">
                My Role & Direct Responsibilities
              </h4>
              <p className="text-sm font-semibold text-[#102A43]">
                {caseStudy.role}
              </p>
            </div>
          </div>

          {/* Approach & Process */}
          <div>
            <h4 className="text-xs font-bold text-[#167D75] uppercase tracking-wider mb-3 flex items-center">
              <Layers className="w-4 h-4 mr-1.5" />
              Approach & Step-by-Step Methodology
            </h4>
            <div className="space-y-2.5">
              {caseStudy.approach.map((step, idx) => (
                <div key={idx} className="flex items-start text-xs sm:text-sm text-[#263746]">
                  <span className="w-5 h-5 rounded-full bg-[#E6F4F3] text-[#167D75] font-bold text-[11px] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    {idx + 1}
                  </span>
                  <p className="leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Methods */}
          <div>
            <h4 className="text-xs font-bold text-[#167D75] uppercase tracking-wider mb-2.5 flex items-center">
              <Wrench className="w-4 h-4 mr-1.5" />
              Tools, Methods & Platforms
            </h4>
            <div className="flex flex-wrap gap-2">
              {caseStudy.toolsAndMethods.map((tool, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium bg-[#F2F5F8] text-[#102A43] border border-[#DCE4EA] px-3 py-1.5 rounded-lg"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="text-xs font-bold text-[#167D75] uppercase tracking-wider mb-2.5 flex items-center">
              <FileText className="w-4 h-4 mr-1.5" />
              Documented Deliverables
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#263746]">
              {caseStudy.deliverables.map((del, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#167D75] mr-2 mt-0.5 flex-shrink-0" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Outcome Banner */}
          <div className="bg-[#102A43] text-white p-5 rounded-xl border border-[#1A3B5C]">
            <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-2 flex items-center">
              <TrendingUp className="w-4 h-4 mr-1.5" />
              Verified Outcome
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {caseStudy.verifiedOutcome}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-md px-6 py-4 border-t border-[#DCE4EA] flex items-center justify-between z-10">
          <span className="text-xs text-[#627D98]">
            Evidence verified from master curriculum vitae and project records.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold rounded-lg bg-[#102A43] text-white hover:bg-[#1A3B5C] transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
