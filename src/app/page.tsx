'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamic imports for sections
const Hero = dynamic(() => import('@/components/sections/Hero'), {
  loading: () => <LoadingScreen />,
});
const Services = dynamic(() => import('@/components/sections/Services'));
const Portfolio = dynamic(() => import('@/components/sections/Portfolio'));
const About = dynamic(() => import('@/components/sections/About'));
const CTA = dynamic(() => import('@/components/sections/CTA'));

function LoadingScreen() {
  return (
    <div className="h-screen w-full bg-[#0A0A0A] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#D4AF37]/20 border-t-[#D4AF37] rounded-full animate-spin" />
        <p className="text-[#D4AF37] text-sm tracking-widest uppercase">Loading Experience...</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Suspense fallback={<LoadingScreen />}>
        <Hero />
      </Suspense>
      <Services />
      <Portfolio />
      <About />
      <CTA />
    </main>
  );
}
