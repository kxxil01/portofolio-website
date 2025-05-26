'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    title: 'Senior Platform Engineer',
    company: 'TechCorp',
    location: 'Remote',
    period: '2022 - Present',
    description: [
      'Led the migration of legacy infrastructure to Kubernetes, resulting in 40% reduction in deployment time',
      'Implemented GitOps workflows with ArgoCD and Flux, improving deployment reliability by 60%',
      'Designed and implemented a zero-trust security model for cloud infrastructure',
      'Built comprehensive observability stack with Prometheus, Grafana, and OpenTelemetry'
    ]
  },
  {
    title: 'DevSecOps Engineer',
    company: 'CloudSolutions Inc.',
    location: 'Remote',
    period: '2020 - 2022',
    description: [
      'Automated security scanning in CI/CD pipelines, reducing vulnerabilities by 75%',
      'Developed infrastructure as code templates using Terraform for multi-cloud deployments',
      'Implemented secrets management with HashiCorp Vault and integrated with CI/CD pipelines',
      'Created custom Kubernetes operators for automating application lifecycle management'
    ]
  },
  {
    title: 'DevOps Engineer',
    company: 'InnovateTech',
    location: 'Remote',
    period: '2018 - 2020',
    description: [
      'Designed and implemented CI/CD pipelines using Jenkins and GitHub Actions',
      'Containerized legacy applications and migrated to Docker-based deployment',
      'Automated infrastructure provisioning with Terraform and AWS CloudFormation',
      'Implemented monitoring and alerting systems using Prometheus and Grafana'
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Work Experience
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
            My professional journey in DevSecOps and Platform Engineering
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-indigo-600 dark:border-indigo-400 ml-3 md:ml-6 pl-8 md:pl-16">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="mb-12 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute -left-11 md:-left-20 top-0 w-8 h-8 bg-indigo-600 dark:bg-indigo-400 rounded-full flex items-center justify-center">
                  <FiBriefcase className="text-white" />
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">{exp.company}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <FiCalendar className="mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <FiMapPin className="mr-1" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mr-2 mt-2"></span>
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
