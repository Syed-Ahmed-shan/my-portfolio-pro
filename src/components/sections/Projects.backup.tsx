'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const projects = [
  {
    title: 'Smart Health Monitoring System',
    description: 'AI-powered healthcare platform with disease prediction, monitoring dashboards, alerts, explainable AI, and report generation.',
    tech: ['React', 'Django', 'PostgreSQL', 'TensorFlow', 'SHAP', 'OpenCV'],
    github: '#',
    live: '#',
  },
  {
    title: 'Employee Task Management',
    description: 'Role-based employee management platform with task assignment, attendance, reporting, and analytics.',
    tech: ['React', 'Django', 'PostgreSQL'],
    github: '#',
    live: '#',
  },
  {
    title: 'Multi-Disease Prediction System',
    description: 'Machine learning platform predicting heart, lung, and brain diseases using structured data and medical images.',
    tech: ['Python', 'Scikit-learn', 'TensorFlow', 'Django'],
    github: '#',
    live: '#',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Modern full-stack e-commerce application with authentication, cart, wishlist, and payment-ready architecture.',
    tech: ['Next.js', 'Django', 'PostgreSQL'],
    github: '#',
    live: '#',
  },
  {
    title: 'SBI Automation & Manual Testing',
    description: 'Automated login, navigation, and validation workflows using Selenium WebDriver along with comprehensive manual testing.',
    tech: ['Java', 'Selenium', 'TestNG', 'SDLC/STLC'],
    github: '#',
    live: '#',
  },
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['0 1', '1.2 1'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity }}
      className="group relative flex flex-col justify-between p-8 rounded-[2rem] bg-card border border-border overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6 flex justify-between items-start">
          <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
          <div className="flex gap-3">
            <a href={project.github} className="p-2 rounded-full glass hover:bg-foreground hover:text-background transition-colors" aria-label="GitHub">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href={project.live} className="p-2 rounded-full glass hover:bg-foreground hover:text-background transition-colors" aria-label="Live Demo">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <p className="text-muted-foreground text-lg mb-8 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t: string, i: number) => (
            <span key={i} className="px-3 py-1 text-xs font-medium bg-muted rounded-full text-foreground/80">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Selected Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent projects bridging AI, full-stack development, and rigorous automation testing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
