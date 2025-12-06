'use client';

import { useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { Group } from 'three';

export default function HeroMask(): JSX.Element {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF('/hero-mask.glb');

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.PI * 0.25;
    }
  }, []);

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload('/hero-mask.glb');
