'use client';

import { useState } from 'react';
import Loader from '@/components/Loader';
import Intro from '@/components/sections/Intro';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Certifications from '@/components/sections/Certifications';
import TechStack from '@/components/sections/TechStack';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      
      <main className={`min-h-screen ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}>
          <Intro />
          <About />
          <TechStack />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Education />
          <Certifications />
          <Contact />
        </div>
      </main>
    </>
  );
}
