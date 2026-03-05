import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-slate-900/95 backdrop-blur-sm py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`text-xl font-bold tracking-tighter ${scrolled ? 'text-slate-900' : 'text-white'}`}>
          HENALO<span className="text-blue-500">DIGITAL</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${scrolled ? 'text-slate-600' : 'text-slate-300'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
              scrolled 
                ? 'bg-slate-900 text-white hover:bg-slate-800' 
                : 'bg-white text-slate-900 hover:bg-slate-100'
            }`}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? 'text-slate-900' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-4 flex flex-col items-center space-y-4">
           {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-600 font-medium hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="px-6 py-2 bg-slate-900 text-white rounded-md font-semibold hover:bg-slate-800"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;