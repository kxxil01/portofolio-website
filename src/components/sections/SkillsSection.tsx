'use client';

import { motion } from 'framer-motion';
import { FiCloud, FiCode, FiLock, FiServer, FiTerminal, FiGitBranch } from 'react-icons/fi';

const skills = [
  {
    category: 'Cloud Platforms',
    icon: <FiCloud className="h-8 w-8" />,
    items: ['AWS', 'Google Cloud Platform', 'Azure', 'DigitalOcean', 'Linode']
  },
  {
    category: 'Infrastructure as Code',
    icon: <FiCode className="h-8 w-8" />,
    items: ['Terraform', 'CloudFormation', 'Pulumi', 'Ansible', 'Chef']
  },
  {
    category: 'Containerization & Orchestration',
    icon: <FiServer className="h-8 w-8" />,
    items: ['Docker', 'Kubernetes', 'Helm', 'Istio', 'Podman']
  },
  {
    category: 'CI/CD',
    icon: <FiGitBranch className="h-8 w-8" />,
    items: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'ArgoCD', 'CircleCI']
  },
  {
    category: 'Security',
    icon: <FiLock className="h-8 w-8" />,
    items: ['Vault', 'SAST/DAST', 'OPA/Gatekeeper', 'Falco', 'Trivy']
  },
  {
    category: 'Monitoring & Observability',
    icon: <FiTerminal className="h-8 w-8" />,
    items: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'New Relic']
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills & Expertise
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
            Specialized in modern DevSecOps practices and cloud-native technologies
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
