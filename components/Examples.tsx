import React from 'react';
import { Section, FadeIn } from './Section';

const images = [
  "https://images.unsplash.com/photo-1599639668393-241a9657cb59?q=80&w=600&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1635348810594-3f495e883e41?q=80&w=600&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1595245433963-16256200506f?q=80&w=600&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=600&auto=format&fit=crop", 
];

export const Examples: React.FC = () => {
  return (
    <Section id="examples" className="bg-[#0a0a0a] py-32">
       <FadeIn>
        <div className="flex justify-between items-end mb-20 px-4 max-w-7xl mx-auto w-full">
            <h2 className="text-4xl md:text-5xl font-light tracking-[0.2em] uppercase text-white">
            Case Studies
            </h2>
            <div className="hidden md:block text-[#D4AF37] text-xs tracking-[0.3em] uppercase">See what is possible</div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        {images.map((src, index) => (
          <FadeIn key={index} delay={index * 0.15} className="w-full aspect-[4/5]">
            <div className="w-full h-full overflow-hidden relative group border-r border-[#222] last:border-r-0">
              <img 
                src={src} 
                alt={`Example ${index + 1}`}
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
              <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                <p className="text-xs tracking-[0.2em] text-[#D4AF37] uppercase mb-2">Project 0{index + 1}</p>
                <h3 className="text-xl font-serif-accent italic">Luxury Client</h3>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};