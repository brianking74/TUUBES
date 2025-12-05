import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Recycle, Leaf, Clock } from 'lucide-react';

export const Product: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track scroll over a long distance (300vh)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Rotate the tube 360 degrees as user scrolls
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1.1, 1.1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  // Card Transforms
  const y1 = useTransform(scrollYProgress, [0.1, 0.3], ["100%", "0%"]);
  const o1 = useTransform(scrollYProgress, [0.1, 0.3, 0.35], [0, 1, 0]);

  const y2 = useTransform(scrollYProgress, [0.3, 0.5], ["100%", "0%"]);
  const o2 = useTransform(scrollYProgress, [0.3, 0.5, 0.55], [0, 1, 0]);

  const y3 = useTransform(scrollYProgress, [0.5, 0.7], ["100%", "0%"]);
  const o3 = useTransform(scrollYProgress, [0.5, 0.7, 0.75], [0, 1, 0]);

  const y4 = useTransform(scrollYProgress, [0.7, 0.9], ["100%", "0%"]);
  const o4 = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

  return (
    <section ref={containerRef} id="product" className="relative h-[400vh] bg-[#050505]">
      
      {/* Sticky Content Wrapper */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.15)_0%,_rgba(0,0,0,0)_60%)]" />
        <h2 className="absolute top-10 md:top-20 text-xs md:text-sm font-light tracking-[0.5em] text-[#D4AF37] uppercase z-20">
            The Experience
        </h2>

        {/* The Rotating Tube */}
        <motion.div 
            style={{ rotate: rotation, scale, opacity }}
            className="relative z-10 w-[200px] md:w-[300px] lg:w-[400px] aspect-[1/3]"
        >
             {/* Using a cutout tube image with transparent background */}
             <img 
                src="https://images.unsplash.com/photo-1615486511484-92e13b1d95b0?q=80&w=800&auto=format&fit=crop" 
                alt="Product"
                className="w-full h-full object-cover rounded-full shadow-[0_0_50px_rgba(212,175,55,0.3)] border border-[#D4AF37]/20"
                style={{ 
                    // Simulate a cylinder via CSS mask or just distinct shape
                    clipPath: "inset(0% 0% 0% 0% round 100px)" 
                }}
             />
             {/* Gloss overlay */}
             <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/10 rounded-full pointer-events-none" />
        </motion.div>

        {/* Feature Cards Floating Over/Around */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-20 flex flex-col justify-center items-center">
            
            {/* Feature 1 */}
            <motion.div style={{ y: y1, opacity: o1 }} className="absolute left-10 md:left-[15%] top-1/2 -translate-y-1/2 max-w-xs text-left">
                <Clock className="w-10 h-10 text-[#D4AF37] mb-4" />
                <h3 className="text-3xl font-serif-accent italic text-white mb-2">Preservation</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Advanced Argon gas technology ensures zero oxidation. The first glass tastes just like the bottle was just opened.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div style={{ y: y2, opacity: o2 }} className="absolute right-10 md:right-[15%] top-1/2 -translate-y-1/2 max-w-xs text-right">
                <Leaf className="w-10 h-10 text-[#D4AF37] mb-4 ml-auto" />
                <h3 className="text-3xl font-serif-accent italic text-white mb-2">Sustainable</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Reducing carbon footprint with efficient transport and less material usage per liter than traditional glass.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div style={{ y: y3, opacity: o3 }} className="absolute left-10 md:left-[15%] top-1/2 -translate-y-1/2 max-w-xs text-left">
                <ShieldCheck className="w-10 h-10 text-[#D4AF37] mb-4" />
                <h3 className="text-3xl font-serif-accent italic text-white mb-2">Safety First</h3>
                <p className="text-gray-400 text-sm leading-relaxed">BPA-free PET or medical-grade glass. 100% inert atmosphere guaranteed.</p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div style={{ y: y4, opacity: o4 }} className="absolute bottom-20 text-center">
                <Recycle className="w-10 h-10 text-[#D4AF37] mb-4 mx-auto" />
                <h3 className="text-3xl font-serif-accent italic text-white mb-2">Infinitely Recyclable</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">A circular economy approach to luxury wine consumption.</p>
            </motion.div>

        </div>
      </div>
    </section>
  );
};