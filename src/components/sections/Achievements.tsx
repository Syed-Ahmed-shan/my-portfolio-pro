'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Users, Code, Star } from 'lucide-react';

const achievements = [
  { icon: Trophy, value: 'President', label: 'AI & DS Association' },
  { icon: Users, value: 'Class Rep', label: '2022 - Present' },
  { icon: Code, value: '4+', label: 'Major Projects' },
  { icon: Star, value: '4+', label: 'Certifications' },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="p-4 rounded-2xl bg-muted mb-4">
                <item.icon className="w-6 h-6 text-foreground" />
              </div>
              <div className="text-3xl md:text-4xl font-bold tracking-tighter mb-2">
                {item.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
