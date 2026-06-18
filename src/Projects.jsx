import React from 'react';
import { PROJECTS_DATA } from './data'; // <-- Importing the database

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Architecture</span>
          </h2>
          <div className="h-1 w-24 bg-cyan-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <div key={index} className="group relative bg-slate-900/40 rounded-2xl p-8 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-4 text-xs font-bold tracking-widest text-cyan-500 uppercase">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-950 rounded-full border border-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;