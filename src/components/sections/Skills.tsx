'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming & Databases',
    skills: ['Java', 'Core Java (OOP, Collections, Exceptions)', 'SQL', 'PostgreSQL', 'CRUD Operations', 'Joins'],
  },
  {
    title: 'Automation & Testing',
    skills: ['Selenium WebDriver', 'TestNG', 'XPath', 'CSS Selectors', 'Manual Testing', 'SDLC & STLC', 'Defect Reporting'],
  },
  {
    title: 'Web & Full Stack',
    skills: ['Next.js', 'React', 'Django', 'Tailwind CSS', 'HTML/CSS', 'JavaScript'],
  },
  {
    title: 'AI & Data Science',
    skills: ['TensorFlow', 'Scikit-learn', 'OpenCV', 'SHAP', 'Machine Learning', 'Data Analysis'],
  },
  {
    title: 'Tools & Version Control',
    skills: ['Git', 'GitHub', 'IntelliJ IDEA', 'Eclipse', 'Automation Frameworks'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Skills & Expertise</h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl">
            A comprehensive overview of my technical capabilities across software development, AI, and quality assurance.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-8 rounded-3xl glass hover:bg-muted/50 transition-colors group"
            >
              <h3 className="text-xl font-semibold mb-6 group-hover:text-foreground/80 transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-background border border-border text-foreground/80 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
