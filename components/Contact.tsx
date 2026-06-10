import React, { useState } from 'react';
import { PERSONAL_INFO, SOCIALS } from '../constants';
import { Phone, ArrowRight, CheckCircle2, Loader2, Linkedin, Mail } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Extract form data to draft email
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    setTimeout(() => {
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
      
      // Reset form fields
      form.reset();
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeInSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-sm font-bold text-blue-400 tracking-wider uppercase mb-2">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Let's build together.</h3>
            <p className="text-slate-400 text-base md:text-lg mb-8 max-w-md leading-relaxed">
              Available for freelance collaborations, technical implementation consults, and full-time roles in Digital Operations, AI Automation, and Project Management.
            </p>
            
            <div className="space-y-6">
              
              <a href={`https://wa.me/2348081452065`} target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center mr-4 border border-slate-800 group-hover:bg-green-600 group-hover:border-green-500 transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="block text-sm text-slate-400">Message me on</span>
                  <span className="text-base font-bold group-hover:text-green-400 transition-colors">WhatsApp</span>
                </div>
              </a>

              <a href={`tel:09026450406`} className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center mr-4 border border-slate-800 group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="block text-sm text-slate-400">Direct Line</span>
                  <span className="text-base font-bold group-hover:text-blue-400 transition-colors">Phone Call</span>
                </div>
              </a>

              {SOCIALS.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center group">
                    <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center mr-4 border border-slate-800 group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="block text-sm text-slate-400">Connect with me via</span>
                      <span className="text-base font-bold group-hover:text-blue-400 transition-colors">
                        {social.platform}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-3xl p-8 md:p-10 text-slate-900 shadow-xl border border-blue-50">
             <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">Name</label>
                  <input required type="text" id="name" name="name" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">Email</label>
                  <input required type="email" id="email" name="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">Message</label>
                  <textarea required id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Tell me about your project..."></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center ${
                    isSubmitted ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20'
                  } disabled:opacity-75 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      Message Sent Successfully!
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
        </FadeInSection>
      </div>
    </section>
  );
};

export default Contact;
