'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden border-2 border-[#D4AF37]/30">
              <Image
                src="/images/portrait.jpg"
                alt="DANVERSE Creative Director"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#D4AF37]/20 -z-10" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-8">
              About Me
            </h2>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p className="text-lg">
                I'm a <span className="text-[#D4AF37] font-semibold">Creative Director</span> and{' '}
                <span className="text-[#D4AF37] font-semibold">Filmmaker</span> specialized in crafting
                cinematic experiences at the intersection of art and technology.
              </p>

              <p>
                Based in <span className="text-white">Alexandria, Egypt</span>, I lead{' '}
                <span className="text-[#D4AF37]">DANVERSE</span> — a creative studio where we transform
                brand stories into unforgettable visual narratives using AI-powered production pipelines.
              </p>

              <p>
                From award-winning commercials to experimental AI films, my work bridges{' '}
                <span className="text-white">traditional cinematography</span> with cutting-edge tools
                like Midjourney, Runway, and React Three Fiber.
              </p>

              <p>
                I believe the future of filmmaking isn't about replacing human creativity — it's about
                <span className="text-[#D4AF37] italic"> amplifying it</span>.
              </p>

              <div className="pt-8">
                <h3 className="text-xl text-white font-semibold mb-4">Core Expertise</h3>
                <ul className="space-y-2">
                  {[
                    'Cinematic Direction & Storytelling',
                    'AI-Powered Film Production',
                    'Motion Design & VFX',
                    '3D Web Development (React Three Fiber)',
                    'Creative Technology Leadership',
                  ].map((skill, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <span className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
