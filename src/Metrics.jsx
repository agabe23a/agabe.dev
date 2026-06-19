import React, { useState, useEffect, useRef } from 'react';

// Custom, crash-proof counting animation component
const AnimatedCounter = ({ end, duration = 2000, decimals = 0, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    // Intersection Observer to start counting ONLY when the user sees it
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for a smooth human-like slowdown at the end
      const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(end * easeOut);

      if (percentage < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [end, duration, isVisible]);

  return (
    <span ref={counterRef} className="tabular-nums">
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
};

const Metrics = () => {
  const metricsData = [
    {
      label: "Projects Shipped",
      value: 45, // EDIT LATER: Put your actual number of projects here
      suffix: "+",
      description: "End-to-end systems deployed",
      svg: <svg className="w-6 h-6 text-cyan-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
    },
    {
      label: "Client Trust Score",
      value: 96,
      suffix: "%",
      description: "Satisfaction & retention rate",
      svg: <svg className="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
    },
    {
      label: "Active Users",
      value: 10, // EDIT LATER: Put a realistic number based on your apps
      suffix: "k+",
      description: "Interacting with my architecture",
      svg: <svg className="w-6 h-6 text-cyan-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    }
  ];

  return (
    <section className="relative z-20 -mt-16 px-6 max-w-6xl mx-auto hidden md:block">
      <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        
        {/* Human-Adaptive Live Status Bar */}
        <div className="flex items-center gap-3 mb-8 border-b border-slate-800/50 pb-4">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </div>
          <span className="text-slate-400 text-xs font-mono tracking-widest uppercase">System Status: Optimal & Adaptive</span>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {metricsData.map((metric, index) => (
            <div key={index} className="flex items-center gap-6 px-4 first:pl-0 last:pr-0 pt-4 md:pt-0 first:pt-0">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 shadow-inner">
                {metric.svg}
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white mb-1 tracking-tight">
                  <AnimatedCounter 
                    end={metric.value} 
                    decimals={metric.decimals} 
                    prefix={metric.prefix} 
                    suffix={metric.suffix} 
                  />
                </h4>
                <p className="text-cyan-500 text-sm font-semibold tracking-wide">{metric.label}</p>
                <p className="text-slate-500 text-xs mt-1">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Metrics;
