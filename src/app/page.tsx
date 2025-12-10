'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

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
      <div className="animate-pulse text-[#D4AF37] text-2xl font-light tracking-widest">
        DANVERSE
      </div>
    </div>
  );
}

export const metadata = {
  title: 'DANVERSE | Creative Director & Filmmaker',
  description: 'Cinematic AI-powered visual experiences and creative direction',
};

export default function Home() {
  return (
    <main className="relative w-full bg-[#0A0A0A]">
      <Suspense fallback={<LoadingScreen />}>
        <Hero />
      </Suspense>

      <Suspense fallback={null}>
        <Services />
      </Suspense>

      <Suspense fallback={null}>
        <Portfolio />
      </Suspense>

      <Suspense fallback={null}>
        <About />
      </Suspense>

      <Suspense fallback={null}>
        <CTA />
      </Suspense>
    </main>
  );
}
