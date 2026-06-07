'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function VideoHero({ onVideoEnd }: { onVideoEnd: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    // The user strictly requested auto-scroll after exactly 9 seconds.
    const timer = setTimeout(() => {
      onVideoEnd();
    }, 9000);

    return () => clearTimeout(timer);
  }, [onVideoEnd]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen overflow-hidden bg-background"
    >
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 z-0 w-full h-full"
      >
        <video
          ref={videoRef}
          autoPlay
          playsInline
          onEnded={onVideoEnd}
          className="w-full h-full object-cover"
          src="/videos/hero-video.mp4"
          style={{ backgroundColor: 'var(--background)' }}
        />
        <div className="absolute inset-0 bg-background/20 dark:bg-background/40 z-10 pointer-events-none" />
      </motion.div>
      
      {/* Skip Button */}
      <button 
        onClick={onVideoEnd}
        className="absolute bottom-8 right-8 z-20 px-4 py-2 text-sm font-medium rounded-full glass hover:bg-white/10 transition-colors"
      >
        Skip Video
      </button>
    </section>
  );
}
