import React, { useState, useEffect } from 'react';
import { TESTIMONIALS_DATA } from '../constants';
import { Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
      setIsAnimating(false);
    }, 250);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
      setIsAnimating(false);
    }, 250);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 9000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-[#F2F5F8] border-b border-[#DCE4EA]">
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold text-[#167D75] uppercase tracking-wider mb-2">
              Stakeholder & Client Feedback
            </h2>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#102A43]">
              Professional Endorsements
            </h3>
            <p className="text-xs sm:text-sm text-[#627D98] mt-1.5">
              Reflections on training execution, community communication, and digital project delivery.
            </p>
          </div>

          <div className="relative bg-white p-8 sm:p-12 rounded-3xl border border-[#DCE4EA] shadow-sm">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-[#E6F4F3]" />
            
            <div className={`transition-opacity duration-250 ${isAnimating ? 'opacity-0' : 'opacity-100'} relative z-10 text-center px-2 sm:px-6`}>
              <p className="text-base sm:text-lg font-medium text-[#263746] leading-relaxed mb-6 italic">
                "{current.quote}"
              </p>
              
              <div className="flex flex-col items-center">
                <h4 className="text-base font-bold text-[#102A43]">
                  {current.author}
                </h4>
                <span className="text-xs font-semibold text-[#167D75] mt-0.5">
                  {current.role}
                </span>
                <span className="text-[11px] text-[#627D98] mt-0.5">
                  {current.context}
                </span>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#DCE4EA]/60 relative z-10">
              <button 
                onClick={handlePrev} 
                aria-label="Previous endorsement"
                className="p-2 rounded-lg border border-[#DCE4EA] text-[#627D98] hover:text-[#102A43] hover:bg-[#F2F5F8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#167D75]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#167D75] ${
                      idx === currentIndex ? 'w-6 bg-[#167D75]' : 'w-2 bg-[#CBD5E1]'
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={handleNext} 
                aria-label="Next endorsement"
                className="p-2 rounded-lg border border-[#DCE4EA] text-[#627D98] hover:text-[#102A43] hover:bg-[#F2F5F8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#167D75]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Testimonials;
