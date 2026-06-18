import React from 'react';
import { SKILLS_DATA } from './data'; // <-- Importing the database

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-950 px-6 relative border-t border-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Arsenal</span>
          </h2>
          <div className="h-1 w-24 bg-cyan-500 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {SKILLS_DATA.map((tech, index) => (
            <div key={index} className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300 group flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {tech.name}
              </h3>
              <p className="text-xs text-slate-500 tracking-wider uppercase font-semibold">
                {tech.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;