'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    title: 'President',
    organization: 'AI & DS Student Association',
    period: 'Present',
    description: 'Organizing hackathons, conducting technical workshops, managing technical events, and leading student leadership activities.',
  },
  {
    title: 'Java Automation Testing Trainee',
    organization: 'QSpiders',
    period: 'Recent',
    description: 'Professional training covering Core Java, Selenium WebDriver, TestNG, JDBC Basics, Manual Testing, and Automation Framework basics.',
  },
  {
    title: 'Class Representative (CR)',
    organization: 'Viswam Engineering College',
    period: '2022 – Present',
    description: 'Facilitating student coordination, academic communication with faculty, and event management.',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <div className="mb-20 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Leadership & Training</h2>
          <p className="text-muted-foreground text-lg">
            My journey through professional training and leadership roles.
          </p>
        </div>

        <div className="relative border-l border-border ml-4 md:ml-8 space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
              className="relative pl-8 md:pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 rounded-full bg-foreground left-[-8.5px] top-1.5 shadow-[0_0_0_4px_var(--background)]" />
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                <h3 className="text-2xl font-bold">{exp.title}</h3>
                <span className="text-muted-foreground font-medium">{exp.organization}</span>
              </div>
              
              <div className="inline-block px-3 py-1 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-4">
                {exp.period}
              </div>
              
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
