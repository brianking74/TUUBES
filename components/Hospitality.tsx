import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Wine, Package, Grid, PenTool } from 'lucide-react';

export const Hospitality: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const benefits = [
    {
      id: 1,
      icon: <Wine className="w-6 h-6" />,
      title: "Logistics",
      heading: "Stop Shipping Glasses.",
      desc: "Significantly reduce breakage and weight. A standard pallet holds 3x more wine in tubes than bottles."
    },
    {
      id: 2,
      icon: <Package className="w-6 h-6" />,
      title: "Storage",
      heading: "Space-Efficient.",
      desc: "Maximize your inventory space. Ideal for airlines, minibars, and event catering where space is premium."
    },
    {
      id: 3,
      icon: <Grid className="w-6 h-6" />,
      title: "Variety",
      heading: "Curated Flights.",
      desc: "Offer premium tasting flights without opening multiple bottles. Perfect for room service and gift sets."
    }
  ];

  return (
    <section ref={containerRef} id="hospitality" className="relative bg-[#080808] text-[#e5e5e5]">
      
      {/* Sticky Image Section (Right Side Desktop) */}
      <div className="lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-screen sticky top-0 h-[50vh] w-full overflow-hidden">
        <motion.div style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }} className="absolute inset-0">
             <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover grayscale brightness-50" />
        </motion.div>
        <motion.div style={{ opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 1]) }} className="absolute inset-0">
             <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover grayscale brightness-50" />
        </motion.div>
        <motion.div style={{ opacity: useTransform(scrollYProgress, [0.6, 0.9], [0, 1]) }} className="absolute inset-0">
             <img src="https://images.unsplash.com/photo-1474722883778-792e7990302f?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover grayscale brightness-50" />
        </motion.div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-transparent" />
      </div>

      {/* Scrolling Text Section (Left Side Desktop) */}
      <div className="relative z-10 w-full lg:w-1/2">
        <div className="flex flex-col">
            {benefits.map((benefit, index) => (
                <div key={benefit.id} className="min-h-screen flex flex-col justify-center px-8 md:px-20 py-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ margin: "-20%" }}
                    >
                        <div className="flex items-center space-x-4 mb-6 text-[#D4AF37]">
                            <div className="p-3 border border-[#D4AF37]/30 rounded-full">
                                {benefit.icon}
                            </div>
                            <span className="text-xs font-bold tracking-[0.2em] uppercase">{benefit.title}</span>
                        </div>
                        <h3 className="text-4xl md:text-6xl font-serif-accent italic mb-6 leading-tight">
                            {benefit.heading}
                        </h3>
                        <p className="text-gray-400 leading-loose max-w-md">
                            {benefit.desc}
                        </p>
                    </motion.div>
                </div>
            ))}
        </div>
      </div>

    </section>
  );
};