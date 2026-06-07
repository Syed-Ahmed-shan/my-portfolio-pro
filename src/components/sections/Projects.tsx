'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const projects = [
  {
    title: 'The Coca-Cola Cinematic Universe! 🥤✨',
    description: 'A scroll-driven storytelling experience blurring the lines between a traditional website and a high-budget 3D commercial. Features a custom 173-frame high-resolution video sequence tied to scroll progress.',
    tech: ['React', 'Vite', 'GSAP', 'Framer Motion', 'Lenis'],
    github: 'https://github.com/Syed-Ahmed-shan/Coco-Cola-3D-Website.git',
    linkedin: 'https://www.linkedin.com/posts/ahmed-syed-31a60a271_reactjs-frontenddevelopment-webdesign-activity-7468999288036016129-bUaM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJ53UYBitADLnl0_GX1ylBhwCuxuYVU4Gw',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Employee Management System',
    description: 'A comprehensive full-stack system designed to securely and efficiently manage employee tasks, attendance, and reporting. Built on a robust Java backend.',
    tech: ['Spring Boot', 'Spring Data JPA', 'MySQL', 'React', 'Java 17'],
    github: 'https://github.com/Syed-Ahmed-shan/employee-management-system.git',
    linkedin: null,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Student Tracking Marks App',
    description: 'A secure and scalable application designed to track, store, and manage student academic performance and marks efficiently.',
    tech: ['Spring Boot', 'Spring Security', 'MySQL', 'React', 'Java 17'],
    github: 'https://github.com/Syed-Ahmed-shan/student-tracking-marks-app.git',
    linkedin: null,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Tinylink URL Shortener',
    description: 'A lightning-fast, serverless URL shortening service built for high scalability, featuring automatic CI/CD and secure environment management.',
    tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'Prisma ORM', 'Neon Postgres'],
    github: 'https://github.com/Syed-Ahmed-shan/tinylink-url-shortener.git',
    linkedin: 'https://www.linkedin.com/posts/ahmed-syed-31a60a271_activity-7397976379453190144-8Hmd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJ53UYBitADLnl0_GX1ylBhwCuxuYVU4Gw',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Heart Disease Prediction System',
    description: 'A machine learning platform utilizing structured data models to predict heart disease risk with high accuracy.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    github: 'https://github.com/Syed-Ahmed-shan/heart-disease-prediction.git',
    linkedin: 'https://www.linkedin.com/posts/ahmed-syed-31a60a271_heart-disease-prediction-system-machine-activity-7346844622381379584-zOc-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJ53UYBitADLnl0_GX1ylBhwCuxuYVU4Gw',
    image: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Cyber Security Client Project',
    description: 'Developed for Trend Matric Solutions. Crafted a clean, modern, and pixel-perfect responsive UI with a strong focus on intuitive user experience.',
    tech: ['React', 'Tailwind CSS', 'UI/UX Design', 'Responsive'],
    github: null,
    linkedin: 'https://www.linkedin.com/posts/ahmed-syed-31a60a271_reactjs-tailwindcss-frontenddevelopment-activity-7338961435240144898-gooL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJ53UYBitADLnl0_GX1ylBhwCuxuYVU4Gw',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop'
  },
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col justify-between rounded-3xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
    >
      {/* Project Image Area - Smaller height for sleek look */}
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
      </div>
      
      <div className="relative flex flex-col h-full p-6 pt-0 -mt-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold tracking-tight leading-tight">{project.title}</h3>
        </div>
        
        <p className="text-muted-foreground text-sm mb-6 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-col gap-4 mt-auto">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t: string, i: number) => (
              <span key={i} className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider bg-muted text-muted-foreground rounded-full">
                {t}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex gap-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="flex flex-1 justify-center items-center gap-2 px-3 py-2 rounded-xl border border-border hover:bg-foreground hover:text-background transition-colors text-xs font-semibold">
                <FaGithub className="w-3.5 h-3.5" /> Code
              </a>
            )}
            {project.linkedin && (
              <a href={project.linkedin} target="_blank" rel="noreferrer" className="flex flex-1 justify-center items-center gap-2 px-3 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors text-xs font-semibold">
                <FaLinkedin className="w-3.5 h-3.5" /> Post
              </a>
            )}
          </div>
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
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Selected Works</h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            A showcase of my recent projects bridging AI, full-stack development, and rigorous automation testing.
          </p>
        </motion.div>

        {/* Changed to a 3-column grid for smaller, more professional cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
