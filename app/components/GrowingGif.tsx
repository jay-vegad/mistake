'use client';

import { useState, useEffect } from 'react';

export default function GrowingGif() {
  const [isStarted, setIsStarted] = useState(false);
  const [videoCount, setVideoCount] = useState(1);

  useEffect(() => {
    if (!isStarted) return;

    const interval = setInterval(() => {
      setVideoCount(count => count * 2);
    }, 1000);

    return () => clearInterval(interval);
  }, [isStarted]);

  const handleStart = () => {
    setIsStarted(true);
  };

  return (
    <div 
      className="w-full min-h-screen bg-black p-2"
      onClick={!isStarted ? handleStart : undefined}
    >
      {!isStarted && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <button
            onClick={handleStart}
            className="bg-white text-black px-6 py-3 rounded-lg text-lg font-bold hover:bg-gray-200"
          >
            Click to Start
          </button>
        </div>
      )}
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