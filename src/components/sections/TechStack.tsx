'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const techStack = [
  'Java', 'React', 'Next.js', 'Django', 'TensorFlow', 'PostgreSQL', 'Selenium', 'Tailwind CSS', 'Framer Motion'
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
            Powered By
          </p>
        </div>
        
        <div className="relative flex overflow-x-hidden group">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex space-x-12 animate-marquee whitespace-nowrap py-4"
          >
            {[...techStack, ...techStack, ...techStack].map((tech, idx) => (
              <span 
                key={idx} 
                className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground/10 hover:text-foreground/50 transition-colors duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}} />
    </section>
  );
}
