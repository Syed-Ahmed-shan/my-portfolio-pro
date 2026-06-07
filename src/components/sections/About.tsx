'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8">
            Enthusiastic AI & Data Science student.
            <br />
            <span className="text-muted-foreground">Passionate about software engineering and quality assurance.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 text-lg text-muted-foreground leading-relaxed">
            <div>
              <p className="mb-6">
                I am currently pursuing my B.Tech in Artificial Intelligence & Data Science at Viswam Engineering College. With a strong foundation in Java, Selenium Automation Testing, SQL, and Full Stack Development, I bridge the gap between building software and ensuring its quality.
              </p>
              <p>
                As the President of the AI & DS Student Association, I actively lead technical events, organize hackathons, and foster a community of tech enthusiasts.
              </p>
            </div>
            <div>
              <p className="mb-6">
                Trained professionally in Java Automation Testing with Selenium WebDriver by QSpiders, I bring rigorous testing methodologies (SDLC, STLC) alongside modern development frameworks.
              </p>
              <p>
                My goal is to contribute effectively as a Software Engineer, Full Stack Developer, or QA Automation Engineer by delivering scalable, high-quality solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
