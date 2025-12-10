'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Coca-Cola Summer Campaign',
    client: 'Coca-Cola Egypt',
    role: 'Creative Director',
    thumbnail: '/images/project-1.jpg',
    videoUrl: '/videos/coca-cola.mp4',
    tags: ['Cinematic', 'Commercial', 'AI-Generated'],
    year: '2025',
  },
  {
    id: 2,
    title: 'Tech Startup Showcase',
    client: 'Innovation Labs',
    role: 'Creative Director & 3D Dev',
    thumbnail: '/images/project-2.jpg',
    videoUrl: '/videos/tech-showcase.mp4',
    tags: ['3D', 'Product Viz', 'Motion'],
    year: '2024',
  },
  {
    id: 3,
    title: 'Fashion Brand Film',
    client: 'Luxury Wear Co.',
    role: 'Director & VFX',
    thumbnail: '/images/project-3.jpg',
    videoUrl: '/videos/fashion-film.mp4',
    tags: ['Fashion', 'VFX', 'Cinematic'],
    year: '2024',
  },
  {
    id: 4,
    title: 'AI Music Video',
    client: 'Independent Artist',
    role: 'AI Creative Lead',
    thumbnail: '/images/project-4.jpg',
    videoUrl: '/videos/music-video.mp4',
    tags: ['AI-Generated', 'Music', 'Experimental'],
    year: '2024',
  },
  {
    id: 5,
    title: 'Corporate Training Video',
    client: 'Fortune 500 Corp',
    role: 'Creative Director',
    thumbnail: '/images/project-5.jpg',
    videoUrl: '/videos/corporate.mp4',
    tags: ['Corporate', 'Educational', 'Motion'],
    year: '2023',
  },
  {
    id: 6,
    title: 'Real Estate VR Experience',
    client: 'Luxury Realty',
    role: 'Tech Director & 3D Developer',
    thumbnail: '/images/project-6.jpg',
    videoUrl: '/videos/realestate.mp4',
    tags: ['3D', 'VR', 'Real Estate'],
    year: '2023',
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-light text-center mb-20"
        >
          Portfolio
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden cursor-pointer aspect-video bg-[#111111] border border-[#2A2A2A] hover:border-[#D4AF37]/50 transition-all duration-300"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black text-2xl mb-4 group-hover:scale-110 transition-transform">
                  ▶
                </div>
                <p className="text-sm text-[#D4AF37] uppercase tracking-widest">Watch Project</p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.client}</p>
                <div className="flex gap-2 mt-2">
                  {project.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="text-xs bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-[#111111] border border-[#2A2A2A] overflow-hidden"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform"
              >
                <X size={20} />
              </button>

              <video
                src={selectedProject.videoUrl}
                controls
                autoPlay
                className="w-full aspect-video bg-black"
              />

              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-light text-[#D4AF37] mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-400">{selectedProject.client}</p>
                  </div>
                  <span className="text-gray-500 text-sm">{selectedProject.year}</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-gray-500">Role:</span>
                  <span className="text-sm text-white font-medium">{selectedProject.role}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 border border-[#D4AF37]/30 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
