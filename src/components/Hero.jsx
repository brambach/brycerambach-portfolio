
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

const Hero = () => {
  const [isHoveringName, setIsHoveringName] = useState(false);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact-protocol');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-transparent pt-20 md:pt-0">
      
      {/* Asymmetrical Grid Layout */}
      <div className="w-full h-full md:grid md:grid-cols-12 md:gap-0 relative z-10">
        
        {/* Left Column: Vertical Architectural/Imagery Band */}
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "100%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:block relative md:col-span-4 lg:col-span-3 h-[50vh] md:h-screen w-full md:w-full border-r border-white/10 overflow-hidden"
        >
          {/* Vertical Image Band */}
          <div className="absolute inset-0 w-full h-full grayscale mix-blend-luminosity brightness-75 contrast-125">
             <img 
               src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
               alt="Abstract structural architecture"
               className="w-full h-full object-cover object-center"
             />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/40" />
          
          {/* Decorative Technical Markers */}
          <div className="absolute top-8 left-8 text-[10px] font-mono text-white/60 writing-vertical-rl rotate-180 tracking-widest uppercase">
            System_Architecture_V2.0
          </div>
        </motion.div>

        {/* Right Column: Massive Typography & Interactive Elements */}
        <div className="relative md:col-span-8 lg:col-span-9 flex flex-col justify-center px-6 md:px-0 z-20 pt-20 md:pt-0 pb-20 md:pb-0">
          
          {/* Massive Overlapping Headline */}
          {/* Negative margin pulls it over the image band on desktop */}
          <motion.div 
            className="relative md:-ml-24 lg:-ml-32 xl:-ml-40 z-30 pointer-events-none select-none mix-blend-difference"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <h1
              className="font-black text-white leading-[0.9] md:leading-[0.8] tracking-tighter uppercase break-words"
              style={{ fontSize: "clamp(2rem, 8vw, 8rem)" }}
              onMouseEnter={() => setIsHoveringName(true)}
              onMouseLeave={() => setIsHoveringName(false)}
            >
               <span className="block">Bryce</span>
               <span className="block md:ml-[1.5em]">Rambach</span>
            </h1>
          </motion.div>

          {/* Sub-headline / Role - Offset to Right */}
          <motion.div 
            className="md:pl-20 mt-8 md:mt-12 flex flex-col items-start md:items-end md:pr-24 lg:pr-32"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="font-mono text-sm md:text-lg text-white font-bold tracking-widest uppercase mb-2">
              <span className="text-gray-500 mr-2">//</span>
              Software Engineer.
            </div>
            <p className="font-mono text-xs md:text-sm text-gray-500 max-w-sm text-left md:text-right leading-relaxed">
              Constructing robust digital systems.<br/>
              Specializing in scalable architecture & brutalist design.
            </p>
          </motion.div>

          {/* Magnetic CTA - Offset Position */}
          <motion.div
            className="mt-16 md:mt-24 md:pl-20 flex md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <MagneticButton
              onClick={handleScrollToContact} // Changed onClick to smooth scroll
              className="relative px-8 md:px-12 py-4 md:py-6 bg-white text-black text-sm md:text-lg font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-gray-200 flex items-center gap-4 group/btn rounded-none shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              Get in touch
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-2" />
            </MagneticButton>
          </motion.div>

        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        className="hidden md:block absolute bottom-8 right-12 text-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono tracking-widest uppercase writing-vertical-rl">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
