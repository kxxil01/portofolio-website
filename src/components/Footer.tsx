'use client';

import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">
              <span className="text-indigo-600 dark:text-indigo-400">Kurniadi</span> Ilham
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              DevSecOps and Platform Engineer specializing in secure infrastructure, cloud architecture, and automation.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/#about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                About
              </Link>
              <Link href="/#skills" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Skills
              </Link>
              <Link href="/#experience" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Experience
              </Link>
              <Link href="/#projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Projects
              </Link>
              <Link href="/#contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/kurniadiilham" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/kurniadiilham" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/kurniadiilham" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Email: <a href="mailto:contact@kurniadi-ilham.dev" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">contact@kurniadi-ilham.dev</a>
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            © {currentYear} Kurniadi Ilham. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
