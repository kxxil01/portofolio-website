'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Image from 'next/image';

const projects = [
  {
    title: 'Cloud Infrastructure Automation',
    description: 'A comprehensive IaC framework using Terraform modules for multi-cloud deployments with built-in security controls and compliance checks.',
    tags: ['Terraform', 'AWS', 'GCP', 'Security', 'CI/CD'],
    image: '/placeholder-project.jpg',
    github: 'https://github.com/kurniadiilham/cloud-infra-automation',
    demo: 'https://cloud-infra.kurniadi-ilham.dev'
  },
  {
    title: 'Kubernetes Security Scanner',
    description: 'An open-source tool that scans Kubernetes clusters for security misconfigurations, vulnerabilities, and compliance issues with detailed remediation guidance.',
    tags: ['Kubernetes', 'Go', 'Security', 'Docker'],
    image: '/placeholder-project.jpg',
    github: 'https://github.com/kurniadiilham/k8s-security-scanner',
    demo: 'https://k8s-scanner.kurniadi-ilham.dev'
  },
  {
    title: 'GitOps Pipeline Framework',
    description: 'A GitOps-based CI/CD framework that automates application deployments to Kubernetes with built-in security scanning, testing, and observability.',
    tags: ['GitOps', 'ArgoCD', 'GitHub Actions', 'Kubernetes'],
    image: '/placeholder-project.jpg',
    github: 'https://github.com/kurniadiilham/gitops-pipeline',
    demo: 'https://gitops.kurniadi-ilham.dev'
  },
  {
    title: 'Observability Stack Automation',
    description: 'A Helm-based solution for deploying a complete observability stack (Prometheus, Grafana, Loki, Tempo) with pre-configured dashboards and alerts.',
    tags: ['Prometheus', 'Grafana', 'Helm', 'Kubernetes'],
    image: '/placeholder-project.jpg',
    github: 'https://github.com/kurniadiilham/observability-stack',
    demo: 'https://observability.kurniadi-ilham.dev'
  },
  {
    title: 'Secure Microservices Template',
    description: 'A production-ready template for building secure microservices with built-in authentication, authorization, and observability.',
    tags: ['Microservices', 'Security', 'Go', 'Docker'],
    image: '/placeholder-project.jpg',
    github: 'https://github.com/kurniadiilham/secure-microservices',
    demo: 'https://microservices.kurniadi-ilham.dev'
  },
  {
    title: 'Infrastructure Monitoring Dashboard',
    description: 'A comprehensive monitoring dashboard for cloud infrastructure with cost optimization recommendations and security insights.',
    tags: ['Grafana', 'Prometheus', 'AWS', 'Cost Optimization'],
    image: '/placeholder-project.jpg',
    github: 'https://github.com/kurniadiilham/infra-monitoring',
    demo: 'https://monitoring.kurniadi-ilham.dev'
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Showcasing my work in DevSecOps, infrastructure automation, and platform engineering
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <p className="text-sm">Project screenshot</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 h-24 overflow-hidden">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <FiGithub className="mr-1" /> Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <FiExternalLink className="mr-1" /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
