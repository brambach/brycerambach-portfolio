
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const specs = [
    { label: "Backend", value: "Node.js, Supabase, PostgreSQL, Python" },
    { label: "Frontend", value: "React, Tailwind, Framer Motion, Vite" },
    { label: "Automation", value: "Workato, n8n, Custom APIs, Webhooks" },
    { label: "AI & Tools", value: "Claude, Horizons, ChatGPT, GitHub Copilot" },
    { label: "Design", value: "Figma, UI/UX Principles, Design Systems" },
  ];

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden bg-transparent">
      {/* Solid Structural Block - No Glass */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto panel-structural p-8 md:p-16 relative border-l-4 border-l-white"
      >
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start relative z-10">
          
          {/* Narrative Column */}
          <div className="space-y-10">
            <span className="block font-mono text-xs text-gray-500 tracking-widest uppercase">
              // 01_ABOUT_ME
            </span>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase leading-none">
              Engineered<br />for Impact.
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-gray-400 font-normal">
              <p>
                In a digital landscape of noise, I focus on <span className="text-white font-semibold underline decoration-1 underline-offset-4">clarity and structure.</span>
              </p>
              <p>
                My work exists at the intersection of heavy engineering and brutalist design. I build automated ecosystems that are robust, scalable, and unapologetically functional.
              </p>
            </div>
          </div>

          {/* Specs / Competencies Column */}
          <div className="relative">
            {/* Structural List Container */}
            <div className="bg-[#050505] p-6 md:p-10 border border-white/10">
              <h3 className="text-sm font-bold text-white mb-8 tracking-widest uppercase flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="w-2 h-2 bg-white block"></span>
                Core Competencies
              </h3>
              
              <div className="space-y-6">
                {specs.map((spec, index) => (
                  <div key={index} className="flex flex-col gap-2 border-b border-white/5 last:border-0 pb-4 last:pb-0 group">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                      {spec.label}
                    </span>
                    <span className="text-[15px] text-gray-300 font-mono group-hover:text-white transition-colors">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default About;
