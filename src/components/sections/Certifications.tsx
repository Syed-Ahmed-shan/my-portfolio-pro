'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  'Java Automation Testing with Selenium – QSpiders',
  'NPTEL Software Engineering',
  'MERN Stack – AlgoPrep',
  'IBM Cloud Fundamentals',
  'NPTEL Internet of Things (IoT)',
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Certifications</h2>
          <p className="text-muted-foreground text-lg">Continuous learning and professional growth.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex items-center gap-3 px-6 py-4 rounded-full bg-card border border-border shadow-sm hover:shadow-md transition-all cursor-default"
            >
              <Award className="w-5 h-5 text-foreground/70" />
              <span className="font-medium text-sm md:text-base">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
