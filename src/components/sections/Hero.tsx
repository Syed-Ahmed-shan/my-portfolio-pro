'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    // Reveal animation for text
    const ctx = gsap.context(() => {
      gsap.from('.reveal-text', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
        delay: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Video Container */}
      <motion.div 
        style={{ y, opacity }} 
        className="absolute inset-0 z-0 w-full h-full object-cover"
      >
        <div className="absolute inset-0 bg-background/60 dark:bg-background/80 backdrop-blur-[2px] z-10" />
        {/* Replace the src with your actual video in public/videos folder */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/videos/hero-video.mp4"
          // Fallback background color if video is missing
          style={{ backgroundColor: 'var(--background)' }}
        >
          Your browser does not support the video tag.
        </video>
        
        {/* Abstract animated gradient fallback if video is not present */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/20 z-0 animate-pulse duration-10000" />
      </motion.div>

      <div className="container relative z-20 mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        <div className="overflow-hidden mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-8"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Available for new opportunities
          </motion.div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight mb-6">
          <div className="overflow-hidden">
            <span className="reveal-text block bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
              Syed Ahmed Nawaz
            </span>
          </div>
        </h1>

        <div className="overflow-hidden mb-8 max-w-3xl">
          <p className="reveal-text text-xl md:text-2xl text-muted-foreground font-medium">
            AI & Data Science Student <span className="mx-2">•</span> Full Stack Developer
            <br />
            QA Automation Engineer
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
          <a href="#projects">
            <MagneticButton className="flex items-center gap-2 group">
              View Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <MagneticButton variant="outline" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Download Resume
            </MagneticButton>
          </a>
        </div>
      </div>
    </section>
  );
}
