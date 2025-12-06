'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import HeroMask from './HeroMask';
import Background from './Background';

export default function Scene(): JSX.Element {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      gl={{ antialias: true, alpha: true }}
      className="w-full h-full"
    >
      <Suspense fallback={null}>
        <Background />
        <HeroMask />
      </Suspense>
    </Canvas>
  );
}
