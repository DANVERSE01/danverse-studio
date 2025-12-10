'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Mail, ArrowRight } from 'lucide-react';

export default function CTA() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const handleBookCall = () => {
    window.open('https://calendly.com/danverse-studio/consultation', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:hello@danverse.ai';
  };

  return (
    <section ref={ref} className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-light mb-6">
            Ready to Create
            <br />
            <span className="text-[#D4AF37]">Magic?</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Let's transform your vision into a cinematic reality. Whether it's a brand film, AI-generated
            content, or an interactive 3D experience — I'm here to bring it to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookCall}
              className="group flex items-center gap-3 px-8 py-4 bg-[#D4AF37] text-black font-semibold uppercase tracking-widest hover:bg-[#B8860B] transition-all duration-300"
            >
              <Calendar size={20} />
              <span>Book a Call</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEmail}
              className="flex items-center gap-3 px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold uppercase tracking-widest hover:bg-[#D4AF37]/10 transition-all duration-300"
            >
              <Mail size={20} />
              <span>Send Email</span>
            </motion.button>
          </div>

          {/* Social Proof / Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-[#2A2A2A]"
          >
            {[
              { label: 'Projects Delivered', value: '50+' },
              { label: 'Happy Clients', value: '30+' },
              { label: 'Years Experience', value: '5+' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-light text-[#D4AF37] mb-2">{stat.value}</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
