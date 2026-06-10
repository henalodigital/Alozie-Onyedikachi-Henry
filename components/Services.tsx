import React from 'react';
import { SERVICES } from '../constants';
import { FadeInSection } from './FadeInSection';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">My Service Blueprint</h2>
            <h3 className="text-3xl font-bold text-slate-900">Core Expertise</h3>
            <p className="mt-4 text-slate-600">Delivering peak organizational and digital value through tailored modern systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index} 
                  className="p-8 bg-white rounded-2xl border border-blue-100 hover:border-blue-400 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-start"
                >
                  <div className="w-12 h-12 bg-blue-50/80 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Services;
