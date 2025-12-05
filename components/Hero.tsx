import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Section } from './Section';

interface HeroProps {
  loading?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ loading = false }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <Section className="relative h-screen flex items-center justify-center overflow-hidden p-0">
      {/* Parallax Background */}
      <div ref={containerRef} className="absolute inset-0 z-0 bg-[#050505]">
        <motion.div 
          style={{ y, scale }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1605218427368-4a558a5da2d9?q=80&w=2560&auto=format&fit=crop" 
            alt="Dark Texture"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#050505]" />
        </motion.div>
      </div>
      
      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-4 mix-blend-difference"
      >
        <div className="overflow-hidden mb-2">
            <motion.h1 
              initial={{ y: "120%" }}
              animate={!loading ? { y: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
              className="text-[15vw] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37] to-[#8a6e18] uppercase tracking-tighter"
            >
              TUUBES
            </motion.h1>
        </div>
        
        <div className="overflow-hidden">
            <motion.p 
            initial={{ y: "100%" }}
            animate={!loading ? { y: 0 } : {}}
            transition={{ delay: 0.8, duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="text-sm md:text-xl font-light tracking-[0.5em] text-white uppercase max-w-3xl mx-auto"
            >
            Sip Without Boundaries
            </motion.p>
        </div>
      </motion.div>
    </Section>
  );
};