
import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Bryce Rambach - Structural Engineer</title>
        <meta name="description" content="Bryce Rambach - Developer, Designer, and Automation Engineer. Crafting digital experiences with precision and purpose." />
      </Helmet>
      
      {/* Global Texture Overlay */}
      <div className="film-grain" />

      {/* Structural Brutalist Background - Video Loop */}
      <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-[#080808]">
        {/* Subtle, slow-moving abstract video/visual equivalent using CSS for performance */}
        {/* Simulating organic smoke/liquid movement with very slow shifting gradients */}
        <div className="absolute inset-0 bg-[#080808] opacity-90 z-10" />
        
        {/* Using a high-quality abstract video element would be ideal, but for this environment
            we will use a CSS-based "video" simulation to ensure no broken links and high performance.
            This creates a shifting, deep-sea like atmosphere. */}
        <div className="absolute inset-0 z-0">
             {/* Base dark layer */}
             <div className="absolute inset-0 bg-[#050505]"></div>
             
             {/* Slow moving "smoke" blobs */}
             <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_rgba(40,40,40,0.1)_0%,_transparent_50%)] animate-spin-slow duration-[120s]" style={{ animationDuration: '200s' }}></div>
             <div className="absolute top-[-20%] right-[-20%] w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_rgba(30,30,30,0.08)_0%,_transparent_60%)] animate-pulse duration-[15s]" style={{ animationDuration: '30s' }}></div>
        </div>
      </div>

      {/* Main Content Wrapper - Ensure normal document flow for scrolling */}
      <div className="relative w-full overflow-x-hidden selection:bg-white selection:text-black bg-transparent">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
        <Toaster />
      </div>
    </>
  );
}

export default App;
