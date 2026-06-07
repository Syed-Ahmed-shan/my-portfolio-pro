'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, Loader2 } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // These environment variables need to be set in your .env.local file
      // Make sure they are prefixed with NEXT_PUBLIC_
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Let's build something extraordinary.
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you have a project in mind, a role to fill, or just want to chat about AI and tech, I'd love to hear from you.
            </p>
            <div className="p-8 rounded-3xl bg-muted/50 border border-border">
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-2">Direct Contact</p>
              <a href="mailto:syedahmedshan8@gmail.com" className="text-xl md:text-2xl font-bold hover:text-foreground/70 transition-colors">
                syedahmedshan8@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 md:p-10 rounded-[2.5rem] bg-card border border-border shadow-2xl shadow-foreground/5"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium ml-1">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    required
                    className="px-5 py-4 rounded-2xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    required
                    className="px-5 py-4 rounded-2xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="px-5 py-4 rounded-2xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  className="px-5 py-4 rounded-2xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-none"
                  placeholder="Hello, I would like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 w-full py-4 rounded-full bg-foreground text-background font-medium hover:scale-[1.02] active:scale-[0.98] transition-transform disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center text-green-600 font-medium mt-2">
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center text-red-500 font-medium mt-2">
                  Something went wrong. Please make sure EmailJS is configured or try emailing me directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
