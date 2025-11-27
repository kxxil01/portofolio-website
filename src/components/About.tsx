'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="about" className="py-20 container mx-auto px-4 max-w-4xl">
      <motion.div
        ref={cardRef}
        className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700/50 overflow-hidden group"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.1 }}
        onMouseMove={handleMouseMove}
      >
        {/* Spotlight Effect */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
          }}
        />

        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
            About Me
          </h2>

          <div className="space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p className="leading-[1.8]">
              I&apos;m a passionate <span className="font-semibold text-indigo-600 dark:text-indigo-400">DevSecOps and Platform Engineer</span> with expertise in designing and implementing secure, scalable infrastructure for modern applications. With a strong background in cloud technologies and security, I specialize in bridging the gap between development and operations while ensuring robust security practices are embedded throughout the software lifecycle.
            </p>

            <p className="leading-[1.8]">
              My approach combines automation, infrastructure as code, and security best practices to create resilient systems that can scale efficiently. I&apos;m particularly interested in Kubernetes orchestration, cloud-native architectures, and implementing zero-trust security models.
            </p>

            <p className="leading-[1.8]">
              I enjoy solving complex infrastructure challenges, optimizing CI/CD pipelines, and implementing monitoring solutions that provide actionable insights. My goal is to build systems that are not only secure and reliable but also enable development teams to deliver features rapidly and confidently.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
