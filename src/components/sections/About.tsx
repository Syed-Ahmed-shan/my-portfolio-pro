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
      I recently graduated with a B.Tech in Artificial Intelligence & Data Science from Viswam Engineering College. I have hands-on experience in Python application development, Java, Full Stack Development (MERN), and building intelligent, scalable web applications using Object-Oriented Programming, REST APIs, and SQL databases.
    </p>
    <p>
      Beyond development, I actively integrate modern AI technologies such as Large Language Models (LLMs), LangChain, and Retrieval-Augmented Generation (RAG) to create intelligent, user-centric solutions. As the President of the AI & DS Student Association, I have led technical events, hackathons, and innovation-driven initiatives.
    </p>
  </div>

  <div>
    <p className="mb-6">
      My technical expertise includes Spring Boot, Microservices, Django, Flask, FastAPI, Selenium WebDriver, SDLC, STLC, and cloud platforms including AWS, GCP, and Azure. I focus on writing clean, maintainable code while building secure, scalable, and high-performance applications.
    </p>
    <p>
      I am passionate about software engineering, automation scripting, AI-powered application development, and delivering impactful digital solutions. I am eager to contribute as a Software Engineer, Full Stack Developer, Backend Developer, AI Engineer, or QA Automation Engineer.
    </p>
  </div>
</div>
        </motion.div>
      </div>
    </section>
  );
}
