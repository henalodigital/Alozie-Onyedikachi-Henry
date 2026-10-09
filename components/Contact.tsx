import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { FadeInSection } from './FadeInSection';
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Copy, 
  ExternalLink,
  Info
} from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    enquiryType: 'Recruiter: Business Operations / Programme Coordination',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct pre-filled email
    const subject = encodeURIComponent(`[Portfolio Enquiry - ${formData.enquiryType}] from ${formData.name}`);
    const bodyContent = `Name: ${formData.name}
Email: ${formData.email}
Organisation / Role: ${formData.organization || 'Not specified'}
Enquiry Type: ${formData.enquiryType}

Message:
${formData.message}

---
Sent via Alozie Onyedikachi Henry Portfolio`;

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;
    
    // Open mailto
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#102A43] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <FadeInSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left 5 Columns: Direct Contact Channels & Credibility */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-2">
                  Initiate a Conversation
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Get in Touch
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                  Whether you are a recruiter evaluating candidate suitability for operations roles, or a business seeking digital consulting through Henalo Digital Enterprise, I welcome your message.
                </p>
              </div>

              {/* Direct Channels Cards */}
              <div className="space-y-4">
                
                {/* Email Channel */}
                <div className="p-5 bg-[#0A1826]/90 border border-[#244D76] rounded-2xl flex items-center justify-between">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#1A3B5C] flex items-center justify-center text-teal-400 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase block">Direct Email</span>
                      <a 
                        href={`mailto:${PERSONAL_INFO.email}`} 
                        className="text-sm font-semibold text-white hover:text-teal-400 transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-[#1A3B5C] hover:bg-[#244D76] text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? <CheckCircle2 className="w-4 h-4 text-teal-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Channel */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 bg-[#0A1826]/90 border border-[#244D76] rounded-2xl flex items-center justify-between hover:border-teal-400/80 transition-colors group block"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#1A3B5C] flex items-center justify-center text-teal-400 flex-shrink-0 group-hover:bg-[#167D75] group-hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase block">LinkedIn Profile</span>
                      <span className="text-sm font-semibold text-white group-hover:text-teal-400 transition-colors">
                        linkedin.com/in/henryalozie
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-teal-400" />
                </a>

                {/* WhatsApp & Phone Channel */}
                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 bg-[#0A1826]/90 border border-[#244D76] rounded-2xl flex items-center justify-between hover:border-teal-400/80 transition-colors group block"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#1A3B5C] flex items-center justify-center text-teal-400 flex-shrink-0 group-hover:bg-[#167D75] group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase block">Phone & WhatsApp</span>
                      <span className="text-sm font-semibold text-white group-hover:text-teal-400 transition-colors">
                        {PERSONAL_INFO.phone}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-teal-400" />
                </a>

                {/* Location */}
                <div className="p-4 bg-[#0A1826]/50 border border-[#244D76]/60 rounded-xl flex items-center space-x-3 text-xs text-slate-300">
                  <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>Based in <strong>Lagos, Nigeria</strong> · Available for on-site, hybrid, or remote engagements worldwide.</span>
                </div>

              </div>
            </div>

            {/* Right 7 Columns: Dual-Purpose Contact Form */}
            <div className="lg:col-span-7 bg-white text-[#263746] p-8 sm:p-10 rounded-3xl border border-[#DCE4EA] shadow-xl">
              <h4 className="font-display text-2xl font-bold text-[#102A43] mb-2">
                Send a Direct Enquiry
              </h4>
              <p className="text-xs sm:text-sm text-[#627D98] mb-6">
                Fill in your details below. This form generates a pre-formatted message sent directly to <strong className="text-[#102A43]">henalodigital@gmail.com</strong>.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Samuel Adebayo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-[#DCE4EA] text-sm text-[#263746] focus:outline-none focus:ring-2 focus:ring-[#167D75] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-[#DCE4EA] text-sm text-[#263746] focus:outline-none focus:ring-2 focus:ring-[#167D75] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Organization & Enquiry Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-org" className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      placeholder="e.g. Organization or Project Name"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-[#DCE4EA] text-sm text-[#263746] focus:outline-none focus:ring-2 focus:ring-[#167D75] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-type" className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-1.5">
                      Enquiry Purpose *
                    </label>
                    <select
                      id="contact-type"
                      required
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-[#DCE4EA] text-sm text-[#263746] bg-white focus:outline-none focus:ring-2 focus:ring-[#167D75] focus:border-transparent transition-all"
                    >
                      <option value="Recruiter: Business Operations / Programme Coordination">Recruitment: Operations / Programme Coordination</option>
                      <option value="Recruiter: Business Analysis / Data Analytics">Recruitment: Business Analysis / Analytics</option>
                      <option value="Client: Website Design & Development (Henalo)">Client: Website Design & Development (Henalo)</option>
                      <option value="Client: AI Productivity & Workflow Improvement">Client: AI Productivity Consulting</option>
                      <option value="Client: Business Digitisation & Documentation">Client: Business Digitisation & Setup</option>
                      <option value="General Professional Enquiry">General Professional Enquiry</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-msg" className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-msg"
                    rows={4}
                    required
                    placeholder="Describe the opportunity, project scope, timeline, or key objectives..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#DCE4EA] text-sm text-[#263746] focus:outline-none focus:ring-2 focus:ring-[#167D75] focus:border-transparent transition-all"
                  />
                </div>

                {/* Notice & Transparent Architecture Callout */}
                <div className="bg-[#F2F5F8] p-3 rounded-lg border border-[#DCE4EA] flex items-start space-x-2 text-xs text-[#627D98]">
                  <Info className="w-4 h-4 text-[#167D75] mt-0.5 flex-shrink-0" />
                  <span>
                    Submitting this form immediately launches your email client pre-populated with your message for direct transmission to <strong>{PERSONAL_INFO.email}</strong>.
                  </span>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-lg bg-[#167D75] hover:bg-[#126B64] text-white font-bold text-sm flex items-center justify-center space-x-2 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#102A43]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry via Email</span>
                </button>

                {formSubmitted && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                    <span>Your email draft has been generated. If your client did not open automatically, copy my address: <strong>{PERSONAL_INFO.email}</strong>.</span>
                  </div>
                )}

              </form>
            </div>

          </div>

        </FadeInSection>
      </div>
    </section>
  );
};

export default Contact;
