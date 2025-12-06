'use client';

import { useEffect, useState } from 'react';

export default function Overlay(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) return <div className="w-full h-full bg-black" />;

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      >
        <source src="/noise-overlay.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
