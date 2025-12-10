'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(textRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: 'power4.out',
    })
      .from(
        textRef.current?.querySelectorAll('h1, p'),
        {
          opacity: 0,
          x: -30,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
        },
        0.2
      );
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0A0A0A] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[#0A0A0A]" />

      <div
        ref={textRef}
        className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-light tracking-tighter mb-6 text-[#E5E5E5]">
            DANVERSE
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-300 mb-4">
            Creative Director & Filmmaker
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Crafting AI-Powered Cinematic Experiences
          </p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-3 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold uppercase tracking-widest hover:bg-[#D4AF37]/10 transition-all duration-300"
        >
          Explore My Work
        </motion.button>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <p className="text-gray-400 text-sm">Scroll to explore</p>
      </motion.div>
    </section>
  );
}
