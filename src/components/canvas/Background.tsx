'use client';

import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { EquirectangularReflectionMapping } from 'three';
import { RGBELoader } from 'three-stdlib';

export default function Background(): JSX.Element {
  const { scene } = useThree();

  useEffect(() => {
    const loader = new RGBELoader();
    loader.load('/studio_small_09_1k.hdr', (texture) => {
      texture.mapping = EquirectangularReflectionMapping;
      scene.environment = texture;
      scene.background = texture;
    });
  }, [scene]);

  return null;
}
