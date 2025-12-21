
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Globe, 
  Terminal, 
  Zap, 
  Wind, 
  Mail, 
  Bot, 
  Sparkles 
} from 'lucide-react';

const TechStack = () => {
  const technologies = [
    { name: "React", icon: Globe },
    { name: "Node.js", icon: Terminal },
    { name: "Supabase", icon: Database },
    { name: "Resend", icon: Mail },
    { name: "Tailwind", icon: Wind },
    { name: "Workato", icon: Zap },
    { name: "Claude AI", icon: Bot },
    { name: "Horizons", icon: Sparkles },
    { name: "JavaScript", icon: Code2 },
  ];

  return (
    <section className="py-32 md:py-40 px-6 overflow-hidden relative bg-transparent">
      
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-24 relative z-10"
        >
          {/* Brutalist Monochrome Header */}
          <div className="inline-block border border-white/20 bg-black px-10 py-8">
            <span className="block font-mono text-xs text-white/60 tracking-wider mb-2 uppercase">
              // 03_ARSENAL
            </span>
            <h2 className="text-4xl font-black tracking-tight text-white mb-4 uppercase">
              Technical Arsenal.
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-mono text-sm">
              Core systems and operational technologies.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative"
            >
              
              {/* Monochrome Pill Container */}
              <div className="relative px-8 py-4 bg-black border border-white/20 hover:border-white hover:bg-white flex items-center gap-4 transition-all duration-300">
                <div className="relative flex items-center justify-center">
                  <tech.icon 
                    size={20}
                    className="transition-all duration-300 text-white group-hover:text-black"
                  />
                </div>
                <span className="text-[14px] font-mono uppercase tracking-wide text-white group-hover:text-black transition-colors font-bold">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
