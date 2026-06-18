import React from 'react';
import { EXPERIENCE_DATA } from './data'; // <-- Importing the database

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-950 px-6 relative border-t border-slate-900/50">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Timeline</span>
          </h2>
          <div className="h-1 w-24 bg-cyan-500 rounded-full"></div>
        </div>

        <div className="space-y-12">
          {EXPERIENCE_DATA.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-[50%] top-0 bottom-[-48px] w-px bg-slate-800 last:bottom-0 transform -translate-x-1/2"></div>
              <div className="md:hidden absolute left-0 top-0 bottom-[-48px] w-px bg-slate-800 last:bottom-0"></div>

              <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-[-8px] md:left-[50%] md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)] z-10 mt-1.5 md:mt-0"></div>

                <div className="md:w-[45%] bg-slate-900/40 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-colors group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                      {exp.iconSVG}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-cyan-500 text-sm font-semibold tracking-wide">{exp.entity}</p>
                    </div>
                  </div>
                  <div className="text-slate-500 text-xs font-mono mb-4">{exp.period}</div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;