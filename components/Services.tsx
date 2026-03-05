import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">What I Do</h2>
          <h3 className="text-3xl font-bold text-slate-900">Professional Services</h3>
          <p className="mt-4 text-slate-600">Delivering value through data, automation, and structured training operations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:animate-subtle-bounce" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;