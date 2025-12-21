import React from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  // Generate random stars for static background to ensure performance
  // We use multiple layers for depth
  const starsSmall = [...Array(100)].map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
  }));

  const starsMedium = [...Array(40)].map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden bg-[#050511]">
      {/* Deep Space Base Gradient - continuously shifting */}
      <motion.div 
        className="absolute inset-0 opacity-40"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, #1a1a40 0%, #050511 100%)',
            'radial-gradient(circle at 60% 40%, #2a1a50 0%, #050511 100%)',
            'radial-gradient(circle at 40% 60%, #1a2a50 0%, #050511 100%)',
            'radial-gradient(circle at 50% 50%, #1a1a40 0%, #050511 100%)'
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Nebula Layers - Large colorful blurs */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-blue-900/20 blur-[100px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[40%] -right-[20%] w-[80vw] h-[80vw] rounded-full bg-purple-900/10 blur-[120px]"
        animate={{
          x: [0, -50, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-indigo-900/20 blur-[100px]"
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />

      {/* Small Stars Layer */}
      {starsSmall.map((star) => (
        <motion.div
          key={`small-${star.id}`}
          className="absolute w-[1px] h-[1px] bg-white rounded-full"
          style={{ left: star.left, top: star.top }}
          animate={{ opacity: [0.1, 0.8, 0.1] }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Medium Stars Layer */}
      {starsMedium.map((star) => (
        <motion.div
          key={`med-${star.id}`}
          className="absolute w-[2px] h-[2px] bg-cyan-200/50 rounded-full blur-[0.5px]"
          style={{ left: star.left, top: star.top }}
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Cosmic Dust / Floating Particles - Fewer for performance */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`dust-${i}`}
          className="absolute w-1 h-1 bg-white/20 rounded-full blur-[1px]"
          initial={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;