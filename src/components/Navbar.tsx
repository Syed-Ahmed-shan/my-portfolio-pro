'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-4' : 'py-6'
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className={cn(
            'flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300',
            isScrolled ? 'glass shadow-lg' : 'bg-transparent'
          )}
        >
          {/* Logo */}
          <a href="#" className="text-xl font-bold tracking-tighter">
            SAN<span className="text-muted-foreground">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/Syed-Ahmed-shan" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground transition-colors hover:scale-110">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/ahmed-syed-31a60a271/" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground transition-colors hover:scale-110">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <div className="w-px h-5 bg-border mx-1"></div>
            <ThemeToggle />
            <a
              href="#contact"
              className="px-5 py-2 text-sm font-medium bg-foreground text-background rounded-full hover:scale-105 transition-transform"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle & Actions */}
          <div className="flex md:hidden items-center gap-3">
            <a href="https://github.com/Syed-Ahmed-shan" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground transition-colors">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/ahmed-syed-31a60a271/" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <div className="w-px h-4 bg-border mx-0.5"></div>
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -mr-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 p-4 mt-2 mx-6 rounded-3xl glass shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 px-5 py-3 text-center text-sm font-medium bg-foreground text-background rounded-full"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
