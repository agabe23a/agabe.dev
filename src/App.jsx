import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Metrics from './Metrics';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isBooting, setIsBooting] = useState(true);

  // 1. The Lightning-Fast Boot Sequence (800ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBooting(false);
    }, 800); 
    return () => clearTimeout(timer);
  }, []);

  // 2. Scroll tracking for the "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- THE FAST LOADING UI ---
  if (isBooting) {
    return (
      <div className="bg-slate-950 h-screen w-screen flex items-center justify-center relative">
        <svg className="animate-spin h-40 w-40 text-cyan-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
          <path className="opacity-100" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    );
  }

  // --- THE MAIN APPLICATION ---
  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-cyan-500/30 relative">
      <Navbar />
      <Hero />
      <Metrics />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        {showTopBtn && (
          <button onClick={scrollToTop} className="p-3 bg-slate-900 border border-slate-700 text-slate-400 rounded-full hover:text-cyan-400 hover:border-cyan-500 transition-all shadow-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
          </button>
        )}
        <a href="https://wa.me/254111302860" target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center p-4 bg-green-500 text-white rounded-full hover:bg-green-400 transition-all shadow-[0_0_20px_rgba(34,197,94,0.4)] group">
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </a>
      </div>
    </div>
  );
}

export default App;