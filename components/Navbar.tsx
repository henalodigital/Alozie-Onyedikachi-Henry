import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Case Studies', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills & Tools', href: '#skills' },
    { name: 'Henalo Digital', href: '#henalo-digital' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#102A43]/95 backdrop-blur-md shadow-md py-3.5 border-b border-[#244D76]'
            : 'bg-[#102A43] py-5 border-b border-[#1A3B5C]/60'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          {/* Brand Identity */}
          <a
            href="#home"
            className="flex flex-col group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-sm"
          >
            <span className="font-display font-extrabold text-white text-lg tracking-tight group-hover:text-teal-400 transition-colors">
              Alozie Onyedikachi Henry
            </span>
            <span className="text-[11px] font-medium text-slate-300 tracking-wider uppercase">
              Operations · Coordination · Digital
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-200 hover:text-white transition-colors relative py-1 hover:border-b-2 hover:border-[#167D75] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={PERSONAL_INFO.cvUrl}
              download="Alozie_Onyedikachi_Henry_CV.pdf"
              className="inline-flex items-center text-xs font-semibold px-3.5 py-2 rounded-lg border border-[#33618D] text-slate-200 hover:bg-[#1A3B5C] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              <Download className="w-3.5 h-3.5 mr-1.5 text-teal-400" />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center text-xs font-bold px-4 py-2 rounded-lg bg-[#167D75] text-white hover:bg-[#126B64] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Get in Touch
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="lg:hidden p-2 text-slate-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-[#102A43] border-b border-[#244D76] px-6 py-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-slate-200 hover:text-white py-1.5 border-b border-[#1A3B5C]/50"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={PERSONAL_INFO.cvUrl}
                  download="Alozie_Onyedikachi_Henry_CV.pdf"
                  className="flex items-center justify-center text-xs font-semibold py-2.5 rounded-lg border border-[#33618D] text-slate-200"
                  onClick={() => setIsOpen(false)}
                >
                  <Download className="w-4 h-4 mr-2 text-teal-400" />
                  Download Master CV
                </a>
                <a
                  href="#contact"
                  className="flex items-center justify-center text-xs font-bold py-2.5 rounded-lg bg-[#167D75] text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Work With Me / Enquire
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
