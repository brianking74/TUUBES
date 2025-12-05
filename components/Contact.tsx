import React from 'react';
import { Section, FadeIn } from './Section';

export const Contact: React.FC = () => {
  return (
    <Section id="connect" className="relative min-h-[70vh] flex items-center justify-center bg-[#050505] overflow-hidden">
       
      <div className="relative z-10 text-center px-4">
        <FadeIn>
          <h2 className="text-5xl md:text-8xl font-serif-accent italic text-[#e5e5e5] mb-8">
            Start the<br/>
            <span className="text-[#D4AF37]">Revolution</span>
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <p className="text-xs md:text-sm tracking-[0.3em] text-gray-500 uppercase mb-12">
            Sip without boundaries. Join Tuubes today.
          </p>
          
          <button className="px-16 py-5 border border-[#D4AF37] text-[#D4AF37] text-xs tracking-[0.3em] uppercase hover:bg-[#D4AF37] hover:text-black transition-all duration-500">
            Inquire Now
          </button>
        </FadeIn>
      </div>

      <footer className="absolute bottom-10 left-0 w-full flex justify-between px-10 text-[10px] text-gray-700 tracking-widest uppercase">
        <span>© {new Date().getFullYear()} TUUBES</span>
        <span>Made for Luxury</span>
      </footer>
    </Section>
  );
};