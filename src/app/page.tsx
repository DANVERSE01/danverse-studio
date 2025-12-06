'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false });
const Overlay = dynamic(() => import('@/components/dom/Overlay'));

export default function Home(): ReactNode {
  return (
    <main className="relative w-full h-screen bg-black">
      <Scene />
      <Overlay />
    </main>
  );
}
