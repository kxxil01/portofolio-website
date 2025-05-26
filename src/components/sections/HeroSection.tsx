'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-indigo-600 dark:text-indigo-400">Kurniadi</span> Ilham
          </motion.h1>
          
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            DevSecOps & Platform Engineer
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Building secure, scalable infrastructure and automating deployment pipelines for modern applications.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              href="/#contact" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              href="/#projects" 
              className="bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 font-medium py-3 px-6 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors"
            >
              View Projects
            </Link>
          </motion.div>
          
          <motion.div 
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="https://github.com/kurniadiilham" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/kurniadiilham" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://twitter.com/kurniadiilham" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="Twitter"
            >
              <FiTwitter className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="/#about" aria-label="Scroll to About section">
          <FiArrowDown className="h-6 w-6 text-gray-600 dark:text-gray-400" />
        </Link>
      </div>
    </section>
  );
}
