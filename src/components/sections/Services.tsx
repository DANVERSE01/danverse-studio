'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: 'Cinematic Advertising',
    description: 'Award-winning commercials and brand films',
    icon: '🎬',
  },
  {
    title: 'AI-Generated Films',
    description: 'Next-gen filmmaking with Midjourney & Runway',
    icon: '🤖',
  },
  {
    title: 'Motion Design & VFX',
    description: 'Dynamic visual effects for digital experiences',
    icon: '✨',
  },
  {
    title: 'Creative Direction',
    description: 'Full-service creative leadership',
    icon: '🎨',
  },
  {
    title: '3D Product Visualization',
    description: 'Interactive 3D product showcases',
    icon: '📦',
  },
];

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-light text-center mb-20 text-[#E5E5E5]"
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 border border-[#2A2A2A] hover:border-[#D4AF37]/50 transition-all duration-300 bg-[#111111]/50 backdrop-blur-sm"
            >
              <p className="text-4xl mb-4">{service.icon}</p>
              <h3 className="text-xl font-semibold mb-3 text-[#D4AF37]">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
