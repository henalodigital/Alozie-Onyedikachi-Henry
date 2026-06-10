import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 8000); // Auto advance every 8s
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden relative border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">Word on the street</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Testimonials</h3>
          </div>

          <div className="relative bg-slate-50 p-8 md:p-14 rounded-3xl border border-slate-100 shadow-sm">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-blue-100" />
            
            <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'} relative z-10 text-center px-2 md:px-8`}>
              <p className="text-lg md:text-xl font-medium text-slate-700 leading-relaxed mb-8 italic">
                "{TESTIMONIALS[currentIndex].quote}"
              </p>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mb-3">
                  {TESTIMONIALS[currentIndex].name.charAt(0)}
                </div>
                <h4 className="text-base font-bold text-slate-900">{TESTIMONIALS[currentIndex].name}</h4>
                <span className="text-sm font-medium text-slate-500">{TESTIMONIALS[currentIndex].title}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center mt-10 gap-4 relative z-10">
              <button 
                onClick={handlePrev} 
                aria-label="Previous testimonial"
                className="p-2.5 rounded-full border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-colors bg-white shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 px-2">
                {TESTIMONIALS.map((_, idx) => (
                  <div key={idx} className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-blue-600' : 'w-2 bg-slate-200'}`} />
                ))}
              </div>
              <button 
                onClick={handleNext} 
                aria-label="Next testimonial"
                className="p-2.5 rounded-full border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-colors bg-white shadow-sm"
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
