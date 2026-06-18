import React from 'react';

// 1. PROJECTS DATA
export const PROJECTS_DATA = [
  {
    title: "NetVora SaaS Platform",
    category: "Infrastructure & Billing",
    description: "A multi-tenant hotspot management and billing system. Architected the backend infrastructure to handle localized ISP management, secure authentication, and seamless user provisioning.",
    tech: ["Python", "React", "Node.js", "Networking APIs", "Tailwind"]
  },
  {
    title: "Quantitative Trading Architecture",
    category: "FinTech & Automation",
    description: "A highly resilient, automated algorithmic trading engine. Engineered for professional execution with real-time API integrations, strict risk-management parameters, and low-latency processing.",
    tech: ["Python", "Pandas", "Broker APIs", "System Architecture"]
  },
  {
    title: "Skybridge-Proxy Network",
    category: "Security & Routing",
    description: "A mobile-first application delivering secure IP mapping and proxy services. Developed the core routing logic and established a full CI/CD pipeline for automated APK distribution.",
    tech: ["Python", "CI/CD", "Linux/Termux", "Network Protocols"]
  },
  {
    title: "Enterprise Smart Scan",
    category: "High-Concurrency Web Systems",
    description: "A live, highly concurrent web application designed to digitize secure paperwork. Implemented robust state management to handle simultaneous users while integrating logic to prevent data manipulation.",
    tech: ["Python", "JavaScript", "Full-Stack Ecosystem", "Real-time Processing"]
  }
];

// 2. SKILLS DATA
export const SKILLS_DATA = [
  { name: "Python", category: "Backend & Automation" },
  { name: "JavaScript / TypeScript", category: "Core Language" },
  { name: "React", category: "Frontend Framework" },
  { name: "Node.js", category: "Server Environment" },
  { name: "Flutter", category: "Mobile Development" },
  { name: "PHP", category: "Backend" },
  { name: "HTML & CSS", category: "UI Architecture" },
  { name: "Tailwind CSS", category: "Styling Engine" }
];

// 3. EXPERIENCE DATA
export const EXPERIENCE_DATA = [
  {
    role: "Lead Full-Stack Engineer",
    entity: "B2B SaaS & Infrastructure",
    period: "2025 - Present",
    description: "Architecting multi-tenant platforms and secure proxy routing networks. Directing backend infrastructure for complex billing systems and distributed IP mapping protocols.",
    iconSVG: <svg className="w-5 h-5 text-cyan-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>
  },
  {
    role: "Systems & Automation Developer",
    entity: "Quantitative Trading Architecture",
    period: "2024 - 2026",
    description: "Engineered automated execution pipelines for financial markets using Python. Integrated real-time broker APIs with strict risk-management parameters for high-performance trading.",
    iconSVG: <svg className="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
  },
  {
    role: "Software Engineer",
    entity: "Enterprise Web Systems",
    period: "2023 - 2025",
    description: "Developed highly concurrent web applications focused on secure data digitization. Optimized state management and implemented logic to ensure data integrity under heavy concurrent user loads.",
    iconSVG: <svg className="w-5 h-5 text-cyan-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
  }
];
