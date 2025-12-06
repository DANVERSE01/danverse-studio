import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'DANVERSE STUDIO | Cinematic AI Creative Agency',
  description: 'Next.js 14 Cinematic AI Creative Agency Hero Experience with R3F, Lenis, and Post-Processing',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
