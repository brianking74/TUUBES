import React from 'react';
import { Section, FadeIn } from './Section';

export const Vision: React.FC = () => {
  return (
    <Section id="vision" className="py-32 bg-[#0a0a0a] border-b border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <div className="order-2 lg:order-1 relative">
            <FadeIn direction="right">
                <div className="relative h-[600px] w-full overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1596137947174-a5d2d63e5996?q=80&w=800&auto=format&fit=crop" 
                        alt="Dark Grapes" 
                        className="w-full h-full object-cover grayscale opacity-60" 
                    />
                     <div className="absolute inset-0 border border-[#D4AF37]/20 m-4" />
                </div>
            </FadeIn>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#D4AF37]/10 blur-[80px]" />
        </div>

        <div className="order-1 lg:order-2">
            <FadeIn>
            <h2 className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase mb-4">Our Vision</h2>
            <p className="text-4xl md:text-5xl font-serif-accent text-white leading-tight mb-8">
                Redefining the art of wine.<br/>
                <span className="text-gray-500 italic">One tube at a time.</span>
            </p>
            </FadeIn>
            <FadeIn delay={0.2}>
            <p className="text-sm md:text-base text-gray-400 tracking-widest leading-loose max-w-md uppercase">
                Tuubes strives to deliver premium, sustainable packaging that seamlessly blends innovation and convenience. We're committed to nurturing the planet while elevating your enjoyment.
            </p>
            </FadeIn>
        </div>

      </div>
    </Section>
  );
};