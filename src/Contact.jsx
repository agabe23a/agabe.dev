import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 px-6 relative border-t border-slate-900/50">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Context & Social Links */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Scaleable Architecture.</span>
            </h2>
            <div className="h-1 w-24 bg-cyan-500 rounded-full mb-8"></div>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md">
              Whether you need a high-performance algorithmic trading system, a multi-tenant SaaS backend, or secure infrastructure, my inbox is open. Let's discuss your execution requirements.
            </p>

            <div className="space-y-6">
              <a href="mailto:agabe4013@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group w-max">
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 group-hover:border-cyan-500/50 transition-all duration-300 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <span className="font-mono text-sm tracking-wide">Initiate Secure Comm</span>
              </a>

              {/* Social Icons in Left Column */}
              <div className="flex gap-4 pt-4">
                <a href="#agabe23a" className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-slate-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5.6 3.3 6.6 6.5 7a4.8 4.8 0 0 0-1 3.03V22"/><path d="M9 20c-5 1.5-5-2.5-7-3"/></svg>
                </a>
                <a href="#agabe.dev" className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-slate-400 hover:text-blue-500 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#agabe.dev" className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Web3Forms Live Integration */}
          <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 relative overflow-hidden shadow-2xl">
            <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px] pointer-events-none"></div>

            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6 relative z-10">
              <input type="hidden" name="access_key" value="db2ed7c7-7a5b-4c9c-8b43-4b22ea3ca7b1" />
              <input type="hidden" name="subject" value="New Contract Request from Portfolio" />
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">System Designation (Name)</label>
                <input 
                  type="text" id="name" name="name" required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                  placeholder="Mark Johnson"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Return Vector (Email)</label>
                <input 
                  type="email" id="email" name="email" required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                  placeholder="mark@company.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Payload (Message)</label>
                <textarea 
                  id="message" name="message" required rows="4"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300 resize-none"
                  placeholder="Detail your architectural requirements..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-cyan-500 text-slate-950 font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] group"
              >
                Execute Request
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* --- THE MASTER FOOTER --- */}
      <div className="max-w-6xl mx-auto mt-32 pt-12 border-t border-slate-800/80">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="text-cyan-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>
              <span className="text-white font-bold tracking-widest text-lg">AGABE<span className="text-cyan-500">.DEV</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Building scalable software, resilient systems, and modern digital infrastructure for businesses that demand reliability, performance, and growth.
            </p>
          </div>

          <div className="md:ml-auto">
            <h4 className="text-white font-bold mb-4 tracking-wider uppercase text-sm">System Nodes</h4>
            <nav className="flex flex-col space-y-3">
              {['Home', 'About', 'Projects', 'Skills', 'Experience'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm w-max">
                  &gt; {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:ml-auto">
            <h4 className="text-white font-bold mb-4 tracking-wider uppercase text-sm">Secure Comms</h4>
            
            {/* All 6 Social Icons */}
            <div className="flex gap-3 flex-wrap">
              <a href="#agabe23a" target="_blank" className="p-2 bg-slate-900 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-slate-500 transition-all"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5.6 3.3 6.6 6.5 7a4.8 4.8 0 0 0-1 3.03V22"/><path d="M9 20c-5 1.5-5-2.5-7-3"/></svg></a>
              <a href="#Agabe Ngeywo" target="_blank" className="p-2 bg-slate-900 rounded-lg border border-slate-800 text-slate-400 hover:text-blue-500 hover:border-blue-500/50 transition-all"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
              <a href="#agabe17125" target="_blank" className="p-2 bg-slate-900 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-slate-500 transition-all"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg></a>
              <a href="#agabez" target="_blank" className="p-2 bg-slate-900 rounded-lg border border-slate-800 text-slate-400 hover:text-pink-500 hover:border-pink-500/50 transition-all"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href="#Agabe Ngeywo" target="_blank" className="p-2 bg-slate-900 rounded-lg border border-slate-800 text-slate-400 hover:text-blue-600 hover:border-blue-600/50 transition-all"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="mailto:agabe4013@gmail.com" className="p-2 bg-slate-900 rounded-lg border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></a>
            </div>

          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800/50 text-slate-500 text-xs font-mono">
          <p>© {new Date().getFullYear()} Agabe Dev. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">System Status: <span className="text-cyan-500">Online & Remote Ready</span></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;