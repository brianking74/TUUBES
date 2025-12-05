import React from 'react';
import { Section, FadeIn } from './Section';

export const Sustainability: React.FC = () => {
  return (
    <Section className="bg-[#050505] py-32 border-t border-white/5">
      <div className="text-center max-w-5xl mx-auto px-6">
        <FadeIn>
          <span className="block text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase mb-6">Eco-Conscious</span>
          <h2 className="text-4xl md:text-7xl font-serif-accent text-white mb-24">
            Sustainable Luxury
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          <FadeIn delay={0.2}>
            <div className="border-l border-[#D4AF37] pl-6 h-full">
                <h3 className="text-xl font-bold tracking-[0.2em] uppercase mb-6 text-white">Material</h3>
                <p className="text-sm text-gray-500 tracking-wide leading-relaxed">
                Glass or RPET, both 100% recyclable. Plastic tubes are unbreakable and mail-friendly. Glass tubes offer the pinnacle of luxury tasting tools.
                </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="border-l border-[#D4AF37] pl-6 h-full">
                <h3 className="text-xl font-bold tracking-[0.2em] uppercase mb-6 text-white">Preservation</h3>
                <p className="text-sm text-gray-500 tracking-wide leading-relaxed">
                Long shelf-life guaranteed. Organoleptic qualities are preserved perfectly through our advanced sealing process.
                </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="border-l border-[#D4AF37] pl-6 h-full">
                <h3 className="text-xl font-bold tracking-[0.2em] uppercase mb-6 text-white">Bottling</h3>
                <p className="text-sm text-gray-500 tracking-wide leading-relaxed">
                Strict standards. 100% inert atmosphere. The quality of the product is maintained from the barrel to the tube.
                </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};