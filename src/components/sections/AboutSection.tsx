'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square max-w-md mx-auto md:ml-0"
          >
            <div className="absolute inset-0 bg-indigo-600 dark:bg-indigo-400 rounded-lg transform translate-x-4 translate-y-4"></div>
            <div className="relative h-full w-full bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              {/* Replace with your actual photo */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                <p className="text-sm">Your photo here</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Kurniadi Ilham</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate DevSecOps and Platform Engineer with expertise in building secure, scalable infrastructure and automating deployment pipelines for modern applications.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              My focus is on implementing security best practices throughout the development lifecycle, containerization, infrastructure as code, and cloud-native solutions. I enjoy solving complex infrastructure challenges and optimizing deployment workflows.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              When I'm not working on infrastructure, you can find me contributing to open-source projects, exploring new technologies, or sharing knowledge with the tech community.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">Remote</p>
              </div>
              <div>
                <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Email</h4>
                <p className="text-gray-600 dark:text-gray-300">contact@kurniadi-ilham.dev</p>
              </div>
              <div>
                <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Experience</h4>
                <p className="text-gray-600 dark:text-gray-300">5+ Years</p>
              </div>
              <div>
                <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Availability</h4>
                <p className="text-gray-600 dark:text-gray-300">Full-time</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
