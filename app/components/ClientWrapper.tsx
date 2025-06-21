'use client';

import dynamic from 'next/dynamic';

const GrowingGif = dynamic(() => import('./GrowingGif'), {
  ssr: false
});

export default function ClientWrapper() {
  return <GrowingGif />;
} 