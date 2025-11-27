'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiMail, FiLinkedin, FiArrowDown } from 'react-icons/fi';
import MagneticButton from './MagneticButton';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export default function Hero() {
  const email = 'kurniadii01@gmail.com';
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  const jobTitle = "DevSecOps & Platform Engineer";

  // Staggered text animation variants
  const letterContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.5 }
    }
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 200 }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-300/30 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300/30 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-pink-300/30 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <motion.div
        className="container mx-auto px-4 text-center z-10"
        initial="hidden"
        animate="visible"
        variants={container}
        style={{ y }}
      >
        <motion.div
          className="mb-8 relative inline-block"
          variants={item}
        >
          <motion.div
            className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-20"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.h1
            className="relative text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 py-2 tracking-tight"
            variants={letterContainer}
            initial="hidden"
            animate="visible"
          >
            {Array.from("Kurniadi Ilham").map((char, index) => (
              <motion.span key={index} variants={letter} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        <motion.div
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 flex flex-col items-center justify-center mb-10 space-y-4"
          variants={item}
        >
          <div className="font-light tracking-wide">
            {jobTitle}
          </div>
          <div className="flex items-center justify-center space-x-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700">
            <Image
              src="/id-flag.svg"
              alt="Indonesia"
              width={20}
              height={14}
              className="rounded-sm"
            />
            <span className="text-sm font-medium">Jakarta, Indonesia (GMT+7)</span>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-6 mb-16"
          variants={item}
        >
          <MagneticButton
            href={`mailto:${email}`}
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            <FiMail className="h-6 w-6" />
          </MagneticButton>
          <MagneticButton
            href="https://github.com/kxxil01"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            <FiGithub className="h-6 w-6" />
          </MagneticButton>
          <MagneticButton
            href="https://www.linkedin.com/in/kurniadi-ilham/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            <FiLinkedin className="h-6 w-6" />
          </MagneticButton>
        </motion.div>

        <motion.div
          variants={item}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiArrowDown className="h-6 w-6 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
