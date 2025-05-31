'use client';

import { FiGithub, FiMail, FiCloud, FiLock, FiCode, FiTerminal } from 'react-icons/fi';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import Image from 'next/image';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

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

// Magnetic button component for social icons
// 3D floating card component
function FloatingCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const card = ref.current;
    const rect = card.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    
    // Calculate rotation based on mouse position relative to card center
    const rotateY = ((e.clientX - cardCenterX) / (rect.width / 2)) * 5; // Max 5 degrees
    const rotateX = -((e.clientY - cardCenterY) / (rect.height / 2)) * 5; // Max 5 degrees
    
    setRotateX(rotateX);
    setRotateY(rotateY);
    setScale(1.02); // Subtle zoom effect
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setScale(1);
  };

  return (
    <motion.div
      ref={ref}
      className={`${className || ''} transition-transform will-change-transform`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
        transformStyle: 'preserve-3d',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

function MagneticButton({ 
  children, 
  href, 
  target, 
  rel, 
  className 
}: { 
  children: React.ReactNode; 
  href: string; 
  target?: string; 
  rel?: string; 
  className?: string; 
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const element = ref.current;
    if (!element) return;
    
    const { left, top, width, height } = element.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };
  
  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };
  
  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x * 0.3, y: position.y * 0.3 }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.a>
  );
}

export default function Home() {
  const email = 'kurniadii01@gmail.com';
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  
  // Static job title
  const jobTitle = "DevSecOps & Platform Engineer";
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        {/* Header */}
        <motion.header 
          className="mb-20 text-center"
          initial="hidden"
          animate="visible"
          variants={container}
          style={{ y: headerY }}
        >
          <motion.div 
            className="mb-10 relative inline-block"
            variants={item}
          >
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full blur opacity-75"
              animate={{
                background: [
                  'linear-gradient(90deg, rgba(229,231,235,1) 0%, rgba(209,213,219,1) 100%)',
                  'linear-gradient(180deg, rgba(229,231,235,1) 0%, rgba(209,213,219,1) 100%)',
                  'linear-gradient(270deg, rgba(229,231,235,1) 0%, rgba(209,213,219,1) 100%)',
                  'linear-gradient(360deg, rgba(229,231,235,1) 0%, rgba(209,213,219,1) 100%)'
                ]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.h1 
              className="relative text-4xl font-bold py-2 px-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Kurniadi Ilham
            </motion.h1>
          </motion.div>
          
          <motion.div 
            className="text-xl text-gray-600 dark:text-gray-400 flex flex-col items-center justify-center mb-6"
            variants={item}
          >
            <div className="min-h-[1.5rem] inline-flex mb-2">
              {jobTitle}
            </div>
            <div className="flex items-center justify-center">
              <Image 
                src="/id-flag.svg" 
                alt="Indonesia" 
                width={24} 
                height={16} 
                className="inline-block mr-2" 
              />
              <span className="text-sm opacity-70">GMT+7</span>
            </div>
          </motion.div>
          
          <div className="flex justify-center space-x-6 mt-4">
            <MagneticButton 
              href={`mailto:${email}`} 
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-300"
            >
              <FiMail className="h-6 w-6" />
            </MagneticButton>
            <MagneticButton 
              href="https://github.com/kxxil01" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-300"
            >
              <FiGithub className="h-6 w-6" />
            </MagneticButton>
            <MagneticButton 
              href="https://www.linkedin.com/in/kurniadi-ilham/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-300"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </MagneticButton>
          </div>  
          {/* Email address is shown in the icon above */}
        </motion.header>
        
        {/* About Section */}
        <FloatingCard className="mb-12">
          <motion.section
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl font-medium mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
              About
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I&apos;m a passionate DevSecOps and Platform Engineer with expertise in designing and implementing secure, scalable infrastructure for modern applications. With a strong background in cloud technologies and security, I specialize in bridging the gap between development and operations while ensuring robust security practices are embedded throughout the software lifecycle.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              My approach combines automation, infrastructure as code, and security best practices to create resilient systems that can scale efficiently. I&apos;m particularly interested in Kubernetes orchestration, cloud-native architectures, and implementing zero-trust security models.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I enjoy solving complex infrastructure challenges, optimizing CI/CD pipelines, and implementing monitoring solutions that provide actionable insights. My goal is to build systems that are not only secure and reliable but also enable development teams to deliver features rapidly and confidently.
            </p>
          </motion.section>
        </FloatingCard>
        
        {/* Skills Section */}
        <motion.section 
          className="mb-16 relative overflow-hidden rounded-lg p-6 bg-white dark:bg-gray-800 shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 -z-10 rounded-lg"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <h2 className="text-2xl font-medium mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
            Skills
          </h2>
          
          <div className="space-y-8">
            <motion.div 
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center mb-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, type: "spring" }}
                >
                  <FiCloud className="h-5 w-5 mr-3 text-gray-700 dark:text-gray-300" />
                </motion.div>
                <h3 className="font-medium text-lg">Cloud & Infrastructure</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 pl-8 leading-relaxed">
                Proficient in designing and implementing cloud-native solutions across major platforms including AWS, GCP, and Azure. Experienced with infrastructure as code using Terraform and Pulumi. Strong knowledge of containerization with Docker and orchestration with Kubernetes. Skilled in designing resilient, scalable, and secure cloud architectures that optimize for both performance and cost.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center mb-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, type: "spring" }}
                >
                  <FiLock className="h-5 w-5 mr-3 text-gray-700 dark:text-gray-300" />
                </motion.div>
                <h3 className="font-medium text-lg">Security</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 pl-8 leading-relaxed">
                Specialized in implementing security at every layer of the application stack. Experienced with HashiCorp Vault for secrets management, static and dynamic application security testing (SAST/DAST), and implementing policy as code with Open Policy Agent (OPA) and Gatekeeper. Proficient in container security scanning with Trivy and runtime security monitoring with Falco. Skilled in implementing compliance automation and security posture management across cloud environments.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center mb-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, type: "spring" }}
                >
                  <FiCode className="h-5 w-5 mr-3 text-gray-700 dark:text-gray-300" />
                </motion.div>
                <h3 className="font-medium text-lg">Programming & Development</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 pl-8 leading-relaxed">
                Proficient in multiple programming languages with a focus on infrastructure and automation. Strong experience with Go (Golang) for developing microservices, CLI tools, and Kubernetes operators. Skilled in Python for automation, data processing, and API development. Expert in Bash scripting for system automation and DevOps workflows. Experienced in developing robust, maintainable code with comprehensive test coverage and documentation.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center mb-3">
                <svg className="h-5 w-5 mr-3 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="font-medium text-lg">Distributed Systems</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 pl-8 leading-relaxed">
                Experience with distributed systems including blockchain technologies. Skilled in designing and implementing resilient, fault-tolerant distributed architectures. Knowledge of consensus algorithms, data replication strategies, and distributed transaction models. Proficient in managing the complexities of distributed computing environments while ensuring system reliability and performance.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center mb-3">
                <svg className="h-5 w-5 mr-3 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
                <h3 className="font-medium text-lg">Database & Data Engineering</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 pl-8 leading-relaxed">
                Experienced in designing and managing database systems across various paradigms. Proficient with relational databases (PostgreSQL, MySQL), NoSQL solutions (MongoDB, DynamoDB, Cassandra), and time-series databases (InfluxDB, TimescaleDB). Skilled in implementing database high availability, replication, and disaster recovery strategies. Knowledge of data modeling, query optimization, and database performance tuning. Experience with data pipeline design and ETL processes for efficient data workflows.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center mb-3">
                <svg className="h-5 w-5 mr-3 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <h3 className="font-medium text-lg">Automation & Orchestration</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 pl-8 leading-relaxed">
                Expert in designing and implementing automation solutions across the entire infrastructure stack. Proficient in infrastructure automation using Terraform, Ansible, and Pulumi. Experience with workflow automation using Airflow, Argo Workflows, and custom solutions. Skilled in creating self-healing systems with automated remediation capabilities. Focus on building repeatable, idempotent automation that reduces manual intervention and improves reliability.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center mb-3">
                <FiTerminal className="h-5 w-5 mr-3 text-gray-700 dark:text-gray-300" />
                <h3 className="font-medium text-lg">Monitoring & Observability</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 pl-8 leading-relaxed">
                Skilled in implementing comprehensive monitoring and observability solutions using Prometheus, Grafana, and the ELK Stack (Elasticsearch, Logstash, Kibana). Experience with commercial solutions like Datadog and New Relic. Proficient in implementing distributed tracing with OpenTelemetry and Jaeger. Focused on creating actionable alerts and dashboards that provide real insights into system health and performance.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
