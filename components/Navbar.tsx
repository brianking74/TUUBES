import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Vision', href: '#vision' },
  { label: 'Product', href: '#product' },
  { label: 'Offering', href: '#offering' },
  { label: 'Hospitality', href: '#hospitality' },
  { label: 'Examples', href: '#examples' },
  { label: 'Connect', href: '#connect' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled ? 'bg-[#050505]/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-[0.2em] text-white uppercase group">
            Tuubes<span className="text-[#D4AF37]">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[10px] font-bold tracking-[0.2em] text-gray-500 hover:text-[#D4AF37] transition-colors uppercase"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] bg-[#050505] flex flex-col items-center justify-center border-l border-[#D4AF37]/20"
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-[#D4AF37]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col space-y-8 text-center">
               {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-serif-accent italic text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                {item.label}
              </a>
            ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};