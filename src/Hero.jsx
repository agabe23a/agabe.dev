import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    // Added id="home" here for the Navbar to scroll to
    <section id="home" className="min-h-screen bg-slate-950 flex flex-col justify-center items-center px-6 relative overflow-hidden">
      
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center gap-2 mb-6"
        >
          <Terminal className="text-cyan-400 w-6 h-6" />
          {/* EDIT LATER: You can change this tag based on the job you are applying for */}
          <span className="text-cyan-400 tracking-widest uppercase text-sm font-semibold">
            Software Engineer * System Architect 
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Agabe Ngeywo</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {/* EDIT LATER: Generalized, high-impact pitch. Adaptable for web, mobile, or backend roles. */}
I build robust software systems that scale.
Specializing in backend architecture, APIs, and cloud infrastructure.  I transform complex technical challenges into secure, high-performance production products
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#projects" className="group relative px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-lg flex items-center gap-2 transition-all hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
            View My Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a href="#contact" className="px-8 py-4 bg-slate-900 border border-slate-800 text-white font-semibold rounded-lg hover:bg-slate-800 hover:border-slate-700 transition-all">
            Contact Me
          </a>

          {/* NEW: Download Resume Button */}
          <a href="/resume.pdf" download="Agabe_Kiprotich_Resume.pdf" className="px-8 py-4 bg-transparent border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all flex items-center gap-2">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download CV
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;