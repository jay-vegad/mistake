'use client';

import { useState, useEffect } from 'react';

export default function GrowingGif() {
  const [videoCount, setVideoCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVideoCount(count => count * 2);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black p-2">
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: videoCount }).map((_, index) => (
          <video
            key={index}
            src="/fun.mp4"
            width={200}
            height={200}
            autoPlay
            loop
            playsInline
            muted={false}
            controls={false}
            style={{
              width: '200px',
              height: '200px',
              objectFit: 'cover'
            }}
          />
        ))}
      </div>
    </div>
  );
} 