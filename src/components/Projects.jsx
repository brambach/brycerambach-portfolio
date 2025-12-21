
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Projects = () => {
  const { toast } = useToast();

  const projects = [
    {
      id: "01",
      title: "AGENCY_OS",
      category: "Portfolio System",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop",
      href: "#"
    },
    {
      id: "02",
      title: "EMAIL_LOGIC",
      category: "Backend Automation",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
      href: "#"
    },
    {
      id: "03",
      title: "PAYROLL_V1",
      category: "Enterprise Arch",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
      href: "#"
    },
    {
      id: "04",
      title: "GITHUB_REPO",
      category: "Open Source",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2670&auto=format&fit=crop",
      href: "https://github.com/brambach"
    }
  ];

  const handleProjectClick = (href) => {
    if (href === "#") {
      toast({
        title: "🚧 Restricted Access",
        description: "Project documentation is currently private.",
      });
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <section id="projects" className="relative w-full bg-black z-10 py-20 md:py-32">
      {/* Section Header */}
      <div className="px-6 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto border-l-4 border-white pl-8 py-2"
        >
          <span className="block font-mono text-xs text-gray-500 tracking-widest mb-2 uppercase">
            // INDEX_02
          </span>
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9]">
            Selected<br />Works
          </h2>
        </motion.div>
      </div>

      {/* Editorial List Layout - Full Width Strips */}
      <div className="flex flex-col border-t border-white/20">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative w-full h-[40vh] md:h-[60vh] overflow-hidden cursor-pointer border-b border-white/20"
            onClick={() => handleProjectClick(project.href)}
          >
            {/* Background Image - Grayscale to Color Snap */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale transition-none duration-0 group-hover:grayscale-0 group-hover:scale-105 transform ease-linear" 
              />
              {/* Mandatory 30% Black Overlay for strict legibility */}
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
              
              {/* Category Tag */}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-8 left-8 font-mono text-xs font-bold bg-white text-black px-2 py-1 uppercase tracking-widest">
                {project.category}
              </span>

              {/* ID Number */}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-8 right-8 font-mono text-xl font-bold text-white/80">
                {project.id}
              </span>

              {/* Massive Title */}
              <div className="overflow-hidden relative">
                <h3 className="text-5xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">
                  {project.title}
                </h3>
              </div>
              
              {/* View Indicator */}
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-3">
                <span className="bg-white text-black text-sm font-bold uppercase tracking-[0.2em] px-6 py-3">
                  View Project
                </span>
              </div>
            </div>
            
            {/* Corner Icon */}
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-0">
               <ArrowUpRight className="w-12 h-12 text-white" />
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
