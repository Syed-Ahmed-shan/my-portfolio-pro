'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const educationList = [
  {
    degree: 'B.Tech – Artificial Intelligence & Data Science',
    institution: 'Viswam Engineering College, Madanapalli',
    period: '2022 – 2026',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Bharathi Junior College, Madanapalli',
    period: '2020 – 2022',
  },
  {
    degree: 'SSC',
    institution: 'Indian Public School',
    period: '2019 – 2020',
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-32 bg-muted/20">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 rounded-3xl bg-background border border-border flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-muted-foreground">{edu.institution}</p>
              </div>
              <div className="mt-8 font-mono text-sm text-muted-foreground bg-muted w-fit px-3 py-1 rounded-full">
                {edu.period}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
