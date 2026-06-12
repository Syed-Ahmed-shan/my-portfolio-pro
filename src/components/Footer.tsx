'use client';

import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 mt-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-2xl font-bold tracking-tighter">
            Syed Ahmed Nawaz
          </h2>
          <p className="text-sm text-muted-foreground">
            Building the future, one line of code at a time.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <motion.a
            whileHover={{ y: -3 }}
            href="https://github.com/Syed-Ahmed-shan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaGithub className="w-6 h-6" />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href="https://www.linkedin.com/in/ahmed-syed-31a60a271/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaLinkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href="mailto:syedahmedshan8@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 mt-12 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
        <p>&copy; {currentYear} Syed Ahmed Nawaz. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed with precision.</p>
      </div>
    </footer>
  );
}
