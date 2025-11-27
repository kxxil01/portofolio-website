'use client';

import { motion } from 'framer-motion';
import { FiCloud, FiLock, FiCode, FiTerminal, FiDatabase, FiServer } from 'react-icons/fi';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const skillCard = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const skills = [
  {
    icon: FiCloud,
    title: "Cloud & Infrastructure",
    description: "Proficient in designing and implementing cloud-native solutions across major platforms including AWS, GCP, and Azure. Experienced with infrastructure as code using Terraform and Pulumi. Strong knowledge of containerization with Docker and orchestration with Kubernetes.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: FiLock,
    title: "Security",
    description: "Specialized in implementing security at every layer of the application stack. Experienced with HashiCorp Vault, SAST/DAST, and OPA. Proficient in container security scanning and runtime security monitoring.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: FiCode,
    title: "Programming",
    description: "Strong experience with Go (Golang) for microservices and CLI tools. Skilled in Python for automation and API development. Expert in Bash scripting for system automation.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: FiServer,
    title: "Distributed Systems",
    description: "Experience with distributed systems including blockchain technologies. Skilled in designing resilient, fault-tolerant architectures and managing distributed computing environments.",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: FiDatabase,
    title: "Data Engineering",
    description: "Proficient with PostgreSQL, MySQL, MongoDB, and time-series databases. Skilled in implementing high availability, replication, and disaster recovery strategies.",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: FiTerminal,
    title: "Automation & Monitoring",
    description: "Expert in infrastructure automation using Terraform and Ansible. Skilled in monitoring with Prometheus, Grafana, and ELK Stack. Proficient in distributed tracing with OpenTelemetry.",
    color: "from-indigo-500 to-blue-500"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I work with.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={skillCard}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${skill.color} blur-xl`} />

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className={`p-3 bg-gradient-to-br ${skill.color} rounded-lg text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg">{skill.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
