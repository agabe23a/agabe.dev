import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'];

  // The ScrollSpy Engine
  useEffect(() => {
    const handleScroll = () => {
      // 1. Handle Navbar Background opacity
      setIsScrolled(window.scrollY > 50);

      // 2. Track Active Section
      const scrollPosition = window.scrollY + 150; // Offset for navbar height

      // Check which section is currently in view
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const sectionId = navLinks[i].toLowerCase();
        const sectionElement = document.getElementById(sectionId);
        
        if (sectionElement && sectionElement.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break; // Stop loop once we find the highest visible section
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Run once on mount to set initial state
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50 py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo / Branding */}
        <a href="#home" className="flex items-center gap-2 z-50 relative group">
          <Terminal className="text-cyan-500 w-6 h-6 group-hover:text-cyan-400 transition-colors" />
          <span className="text-white font-bold tracking-widest text-xl">AGABE<span className="text-cyan-500">.DEV</span></span>
        </a>

        {/* Desktop Navigation (ScrollSpy Enabled) */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.toLowerCase();
            return (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className={`text-sm font-semibold tracking-wide transition-all duration-300 relative px-2 py-1 ${isActive ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}
              >
                {link}
                {/* Glowing Active Underline */}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></span>
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-cyan-400 z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

      </div>

      {/* Mobile Menu Overlay - FIXED Z-INDEX & OPACITY */}
      <div className={`fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-[100] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        
        {/* Close Button Inside Mobile Menu */}
        <button 
          className="absolute top-6 right-6 text-slate-400 hover:text-cyan-400"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>

        {navLinks.map((link) => {
          const isActive = activeSection === link.toLowerCase();
          return (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              onClick={() => setMobileMenuOpen(false)}
              className={`text-3xl font-bold tracking-wide transition-colors ${isActive ? 'text-cyan-400' : 'text-slate-300 hover:text-white'}`}
            >
              {link}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;