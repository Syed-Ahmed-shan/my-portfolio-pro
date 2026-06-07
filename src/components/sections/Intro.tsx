'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import dynamic from 'next/dynamic';

const Typewriter = dynamic(() => import('typewriter-effect'), { ssr: false });

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="intro"
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-32 pb-20 bg-background z-20 overflow-hidden"
    >
      <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center relative">
        
        {/* Background Image for Mobile / Right Content for Desktop */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:relative lg:translate-x-0 lg:translate-y-0 lg:top-auto lg:left-auto flex justify-center items-center w-full z-0 opacity-10 lg:opacity-100 pointer-events-none lg:pointer-events-auto"
        >
          {/* Decorative background blur */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-50 animate-pulse" />
          
          {/* Cinematic Tech Border Container */}
          <div className="relative group w-[300px] h-[400px] md:w-[400px] md:h-[500px] lg:w-[450px] lg:h-[550px] rounded-[2.5rem] p-[2px] overflow-hidden hover:scale-[1.02] transition-transform duration-500 shadow-2xl">
            
            {/* Spinning Gradient Border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              className="absolute inset-[-100%] w-[300%] h-[300%] bg-[conic-gradient(from_0deg,transparent_0_140deg,#3b82f6_180deg,transparent_180deg_320deg,#a855f7_360deg)] opacity-70 lg:group-hover:opacity-100 transition-opacity"
            />
            
            {/* Inner Glass Container */}
            <div className="relative w-full h-full rounded-[2.4rem] overflow-hidden bg-background/95 backdrop-blur-xl pt-4 px-4 flex items-end justify-center z-10">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
              <img 
                src="/resume/my_model.png" 
                alt="Syed Ahmed Nawaz" 
                className="relative z-10 w-full h-full object-cover object-bottom rounded-t-[2rem]"
              />
            </div>
          </div>
        </motion.div>

        {/* Left Content (Text) */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left relative z-10 w-full p-8 lg:p-0 rounded-[2.5rem] lg:rounded-none bg-background/60 backdrop-blur-xl lg:bg-transparent lg:backdrop-blur-none border border-border/50 lg:border-transparent shadow-2xl lg:shadow-none">
          <div className="overflow-hidden mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/80 backdrop-blur-md text-sm font-medium mb-4 shadow-sm"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Available for new opportunities
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight mb-6 h-[180px] md:h-[220px] lg:h-[280px]"
          >
            <div className="block bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50 drop-shadow-sm">
              <Typewriter
                options={{
                  strings: ['Syed Ahmed Nawaz', 'Software Engineer'],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10 max-w-xl"
          >
            <p className="text-xl md:text-2xl text-foreground lg:text-muted-foreground font-medium leading-relaxed drop-shadow-md lg:drop-shadow-none">
              AI & Data Science Student <span className="mx-2 text-primary/50">•</span> Full Stack Developer
              <br />
              QA Automation Engineer
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a href="#projects">
              <MagneticButton className="flex items-center gap-2 group">
                View Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
            </a>
            <a href="/resume/AhmedSyedResume.pdf" download="AhmedSyedResume.pdf" target="_blank" rel="noopener noreferrer">
              <MagneticButton variant="outline" className="flex items-center gap-2 bg-background/50 backdrop-blur-md">
                <FileText className="w-4 h-4" />
                Download Resume
              </MagneticButton>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
