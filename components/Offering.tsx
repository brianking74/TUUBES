import React from 'react';
import { Section, FadeIn } from './Section';

const OfferingCard: React.FC<{ title: string; subtitle: React.ReactNode; delay: number }> = ({ title, subtitle, delay }) => (
  <FadeIn delay={delay} className="h-full">
    <div className="h-full flex flex-col items-center justify-center p-12 border border-white/5 bg-[#111] hover:border-[#D4AF37]/50 transition-all duration-700 group cursor-default relative overflow-hidden">
      {/* Golden Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-[#D4AF37]/0 to-[#D4AF37]/5 group-hover:from-[#D4AF37]/10 transition-all duration-700" />
      
      <h3 className="relative z-10 text-2xl md:text-3xl font-bold tracking-[0.2em] mb-6 uppercase text-white group-hover:text-[#D4AF37] transition-colors text-center">
        {title}
      </h3>
      <div className="relative z-10 h-[1px] w-12 bg-white/20 mb-6 group-hover:w-24 group-hover:bg-[#D4AF37] transition-all duration-700" />
      <div className="relative z-10 text-xs md:text-sm font-light tracking-widest text-center uppercase text-gray-500 group-hover:text-gray-300 leading-loose transition-colors">
        {subtitle}
      </div>
    </div>
  </FadeIn>
);

export const Offering: React.FC = () => {
  return (
    <Section id="offering" className="bg-[#050505]">
      <FadeIn>
        <div className="flex flex-col items-center mb-24">
            <span className="text-[#D4AF37] tracking-widest text-xs uppercase mb-4">Elevate Your Brand</span>
            <h2 className="text-4xl md:text-6xl font-serif-accent italic text-white">
            Offering Upgrade
            </h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-white/5">
        <OfferingCard 
          title="Branding" 
          subtitle={<>Add your logo<br/>and branding</>}
          delay={0.2}
        />
        <OfferingCard 
          title="Packaging" 
          subtitle={<>Portion<br/>Control<br/>Convenience</>}
          delay={0.3}
        />
        <OfferingCard 
          title="Premium" 
          subtitle={<>Elevate your wine<br/>choices</>}
          delay={0.4}
        />
      </div>
    </Section>
  );
};