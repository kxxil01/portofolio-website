'use client';

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 mb-2">
              Kurniadi Ilham
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              DevSecOps & Platform Engineer
            </p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="mailto:kurniadii01@gmail.com"
              className="text-gray-500 hover:text-indigo-500 transition-colors"
              aria-label="Email"
            >
              <FiMail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/kxxil01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-500 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/kurniadi-ilham/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-500 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            &copy; {currentYear} Kurniadi Ilham. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
