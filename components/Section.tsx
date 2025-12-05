import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  backgroundImage?: string;
  darken?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id, backgroundImage, darken = false }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} id={id} className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20 ${className}`}>
      {backgroundImage && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            style={{ y: yBg, backgroundImage: `url(${backgroundImage})` }}
            className="absolute inset-[-20%] bg-cover bg-center opacity-40"
          />
          {darken && <div className="absolute inset-0 bg-black/60 z-0" />}
        </div>
      )}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; direction?: 'up' | 'down' | 'left' | 'right'; className?: string }> = ({ children, delay = 0, direction = 'up', className = "" }) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay } 
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};