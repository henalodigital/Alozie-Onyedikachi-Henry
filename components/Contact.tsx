import React, { useState } from 'react';
import { PERSONAL_INFO, SOCIALS } from '../constants';
import { Phone, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate an API call to a form service like Formspree, Web3Forms, or custom backend
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
      
      // Reset form fields
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-blue-400 tracking-wider uppercase mb-2">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Let's work together.</h3>
            <p className="text-slate-400 text-lg mb-8 max-w-md">
              Available for freelance opportunities and full-time roles in Business Analysis and Digital Strategy.
            </p>
            
            <div className="space-y-6">
              <a href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`} className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="block text-sm text-slate-400">Call Me</span>
                  <span className="text-lg font-semibold">{PERSONAL_INFO.phone}</span>
                </div>
              </a>

              {SOCIALS.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center group">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="block text-sm text-slate-400">{social.platform}</span>
                      <span className="text-lg font-semibold">
                        {social.platform === 'LinkedIn' ? 'henalodigital' : PERSONAL_INFO.email}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-slate-900">
             <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input required type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input required type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea required id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Tell me about your project..."></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center ${
                    isSubmitted ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;