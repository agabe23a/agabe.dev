import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Server } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code2 className="w-8 h-8 text-cyan-400" />,
      title: "Python Engineering",
      description: "Developing robust APIs, automation pipelines, and professional algorithmic trading systems focused on high-performance execution."
    },
    {
      icon: <Layers className="w-8 h-8 text-blue-500" />,
      title: "Full-Stack Ecosystem",
      description: "Architecting multi-tenant B2B SaaS platforms using React, Node.js, and modern JavaScript frameworks for seamless user experiences."
    },
    {
      icon: <Server className="w-8 h-8 text-cyan-500" />,
      title: "Systems & Infrastructure",
      description: "Deploying secure, scalable architectures, proxy routing configurations, and working deeply within Linux environments."
    }
  ];

  return (
    <section className="py-24 bg-slate-950 px-6 relative border-t border-slate-900/50">
      <section id="about" className="py-24 bg-slate-950 ..."></section>
      <div className="max-w-5xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Philosophy</span>
          </h2>
          <div className="h-1 w-24 bg-cyan-500 rounded-full mb-8"></div>
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
            My engineering philosophy is rooted in scalability, reliability, and continuous improvement. I enjoy designing robust systems that bridge complex business requirements with practical technical solutions. Whether building backend services, optimizing APIs, or developing full-stack applications, I focus on creating secure, maintainable, and high-performance software that delivers real-world value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all group"
            >
              <div className="mb-6 p-4 bg-slate-950 rounded-xl inline-block group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.1)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{skill.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;