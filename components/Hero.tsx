import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../constants';
import { 
  ArrowRight, 
  Download, 
  Globe, 
  CheckCircle2, 
  Camera, 
  Upload, 
  User, 
  RefreshCw,
  Check
} from 'lucide-react';
import { FadeInSection } from './FadeInSection';

const STORAGE_KEY = 'henalo_custom_portrait';

const Hero: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [portraitUrl, setPortraitUrl] = useState<string | null>(null);
  const [loadFailed, setLoadFailed] = useState<boolean>(false);
  const [uploadNotice, setUploadNotice] = useState<string | null>(null);

  // Initialize portrait from localStorage or default configured path
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setPortraitUrl(saved);
        setLoadFailed(false);
        return;
      }
    } catch {
      // localStorage may fail in restricted sandboxes
    }

    if (PERSONAL_INFO.profileImage) {
      setPortraitUrl(PERSONAL_INFO.profileImage);
    } else {
      setLoadFailed(true);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file (PNG, JPG, JPEG, or WEBP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setPortraitUrl(result);
        setLoadFailed(false);
        try {
          localStorage.setItem(STORAGE_KEY, result);
        } catch {
          // Ignore storage quota issues
        }
        setUploadNotice('Picture updated! For your live Vercel site, place your image as public/profile.png.');
        setTimeout(() => setUploadNotice(null), 6000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetPicture = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setPortraitUrl(null);
    setLoadFailed(true);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const hasActiveImage = Boolean(portraitUrl && !loadFailed);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#102A43] text-white overflow-hidden">
      {/* Hidden file input for uploading genuine picture */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/png,image/jpeg,image/webp,image/jpg"
        className="hidden"
        aria-label="Upload executive portrait"
      />

      {/* Editorial background geometric accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#167D75]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#1A3B5C]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <FadeInSection className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Positioning & Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Positioning Kicker */}
            <div className="inline-flex items-center text-xs font-semibold tracking-wider text-teal-400 uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-teal-400 mr-2"></span>
              {PERSONAL_INFO.positioning}
            </div>

            {/* Name */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              {PERSONAL_INFO.name}
            </h1>

            {/* Headline */}
            <h2 className="text-xl sm:text-2xl font-medium text-slate-200 mb-6 leading-snug max-w-2xl">
              "{PERSONAL_INFO.heroHeadline}"
            </h2>

            {/* Introduction paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              {PERSONAL_INFO.heroIntro}
            </p>

            {/* Dual Audience Quick Anchors */}
            <div className="w-full bg-[#0A1826]/70 border border-[#244D76] rounded-xl p-4 mb-8">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">
                Targeted Expertise
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
                <div className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">For Recruiters & Operations:</span>
                    <p className="text-slate-300 text-[11px] mt-0.5">Programme coordination, LMS, workforce AI assessment, data analytics & reporting.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">For SME Clients (Henalo):</span>
                    <p className="text-slate-300 text-[11px] mt-0.5">Website development, business digitisation, branding & practical AI workflows.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-3.5 items-center w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#167D75] text-white text-sm font-bold rounded-lg shadow-sm hover:bg-[#126B64] transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                View My Projects
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#henalo-digital"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#1A3B5C] border border-[#33618D] text-white text-sm font-semibold rounded-lg hover:bg-[#244D76] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                <Globe className="w-4 h-4 mr-2 text-teal-400" />
                Work With Henalo
              </a>

              <a
                href={PERSONAL_INFO.cvUrl}
                download="Alozie_Onyedikachi_Henry_CV.pdf"
                className="inline-flex items-center justify-center px-5 py-3.5 text-slate-300 hover:text-white text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                <Download className="w-4 h-4 mr-2 text-teal-400" />
                Download CV
              </a>
            </div>

          </div>

          {/* Right Column: Executive Portrait Presentation Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative gradient aura */}
              <div className="absolute -inset-2 bg-gradient-to-b from-[#167D75]/40 to-[#102A43] rounded-2xl blur-lg opacity-50"></div>
              
              {/* Portrait Frame */}
              <div className="relative bg-[#0A1826] border-2 border-[#244D76] rounded-2xl overflow-hidden shadow-2xl group">
                
                {hasActiveImage ? (
                  <div className="relative">
                    <img
                      src={portraitUrl!}
                      alt="Alozie Onyedikachi Henry"
                      className="w-full h-auto aspect-[3/4] object-cover object-top"
                      onError={() => {
                        setLoadFailed(true);
                      }}
                    />

                    {/* Quick action overlay to update or remove image */}
                    <div className="absolute top-3 right-3 flex items-center space-x-2 bg-[#0A1826]/85 backdrop-blur-md p-1.5 rounded-lg border border-[#244D76] opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        title="Upload a new picture"
                        className="px-2.5 py-1 text-xs font-semibold bg-[#167D75] text-white rounded hover:bg-[#126B64] transition-colors flex items-center"
                      >
                        <Camera className="w-3.5 h-3.5 mr-1" />
                        Change
                      </button>
                      <button
                        type="button"
                        onClick={handleResetPicture}
                        title="Remove custom picture"
                        className="px-2 py-1 text-xs text-slate-300 hover:text-rose-400 rounded transition-colors"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Editorial Executive Monogram & Placeholder Card */
                  <div className="w-full aspect-[3/4] bg-gradient-to-b from-[#0F2236] to-[#0A1826] flex flex-col items-center justify-center p-8 text-center border-b border-[#1A3B5C]">
                    
                    {/* Executive Monogram Badge */}
                    <div className="relative mb-6">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#167D75] to-[#244D76] p-1 shadow-lg">
                        <div className="w-full h-full rounded-full bg-[#0A1826] flex items-center justify-center border border-[#167D75]/50">
                          <span className="font-display text-3xl font-extrabold text-white tracking-widest">
                            AOH
                          </span>
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#167D75] border-2 border-[#0A1826] flex items-center justify-center text-white">
                        <User className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-display text-lg font-bold text-white mb-1">
                      Alozie Onyedikachi Henry
                    </h3>
                    <p className="text-xs text-teal-400 font-semibold mb-3">
                      Executive Portfolio Portrait
                    </p>
                    <p className="text-xs text-slate-300 max-w-xs leading-relaxed mb-6">
                      Click below to select and preview your picture, or save your photo as <span className="font-mono text-teal-300 bg-[#163352]/70 px-1 py-0.5 rounded">public/profile.png</span>.
                    </p>

                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center px-4 py-2.5 bg-[#167D75] hover:bg-[#126B64] text-white text-xs font-bold rounded-lg shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-teal-400"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Select / Upload Your Picture
                    </button>
                  </div>
                )}

                {/* Sub-photo briefing strip */}
                <div className="p-4 bg-[#0A1826]/95 border-t border-[#1A3B5C] text-left">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-white tracking-wide">Alozie Onyedikachi Henry</span>
                    <span className="text-[11px] font-semibold text-teal-400">Lagos, Nigeria</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-snug">
                    Training Support Staff at <span className="text-white font-medium">Hommaston Limited</span> · Founder of <span className="text-white font-medium">Henalo Digital Enterprise</span>
                  </p>
                  <div className="mt-2.5 pt-2 border-t border-[#1A3B5C]/60 flex items-center justify-between text-[11px] text-slate-400">
                    <span>B.Sc. Statistics · LASUED</span>
                    <span>B.Sc. Business Admin (In Progress)</span>
                  </div>
                </div>
              </div>

              {/* Status / upload notification alert */}
              {uploadNotice && (
                <div className="mt-3 p-3 bg-teal-900/60 border border-teal-500/50 rounded-lg text-xs text-teal-200 flex items-center justify-between">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-teal-400 mr-2 flex-shrink-0" />
                    <span>{uploadNotice}</span>
                  </div>
                  <button
                    onClick={() => setUploadNotice(null)}
                    className="text-teal-400 hover:text-white ml-2 text-sm"
                  >
                    ×
                  </button>
                </div>
              )}

            </div>
          </div>

        </FadeInSection>
      </div>
    </section>
  );
};

export default Hero;
