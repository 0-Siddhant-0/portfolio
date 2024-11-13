// components/ProjectsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Calendar, Building2, Construction, GitBranch, Image, FileCode } from 'lucide-react';
import projects from '../data/projects';

// Animation variants for container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// Animation variants for cards
const cardVariants = {
  hidden: { 
    opacity: 0,
    x: -20,
    y: 20
  },
  visible: { 
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1
    }
  }
};

const ResourceSection = ({ icon: Icon, title }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="flex items-center gap-2 px-3 py-2 rounded-md bg-[#1a1a1a]/50 border 
               border-[#4A90E2]/20 cursor-not-allowed group hover:border-[#4A90E2]/40
               transition-all duration-300"
  >
    <Icon className="w-4 h-4 text-[#4A90E2]" />
    <span className="text-[16px] text-gray-400">
      {title}
      <span className="ml-2 text-[#4A90E2]/70">(Coming Soon)</span>
    </span>
    <Construction className="w-4 h-4 text-[#4A90E2] ml-auto animate-pulse" />
  </motion.div>
);

const ProjectCard = ({ project }) => (
  <motion.div
    variants={cardVariants}
    className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-lg border border-[#2ECC71]/20 
               hover:border-[#2ECC71]/40 transition-all duration-300 overflow-hidden
               group relative"
  >
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-[28px] font-bold text-[#E74C3C] group-hover:text-[#FF6B6B] 
                     transition-colors">
          {project.title}
        </h3>

        {/* Meta Information */}
        <div className="flex flex-wrap gap-4 text-[16px] text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#F1C40F]" />
            <span>{project.date}</span>
          </div>
          {project.association && (
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#F1C40F]" />
              <span className="text-gray-300">{project.association}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="space-y-3">
          {project.description.map((point, idx) => (
            <motion.p 
              key={idx} 
              className="text-gray-300 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
            >
              <span className="text-[#2ECC71] mr-2">•</span>
              {point}
            </motion.p>
          ))}
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div 
        className="pt-4 border-t border-[#2ECC71]/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Code2 className="w-4 h-4 text-[#9B59B6]" />
          <span className="text-[16px] text-[#9B59B6]">Technologies Used</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="px-3 py-1 text-[16px] rounded-full bg-[#34495E] 
                       text-[#3498DB] border border-[#3498DB]/20
                       hover:border-[#3498DB]/40 hover:bg-[#34495E]/70 
                       transition-all"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Resource Links */}
      <motion.div 
        className="pt-4 border-t border-[#9B59B6]/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.3 }}
      >
        <h4 className="text-[16px] text-[#9B59B6] mb-3">Project Resources</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <ResourceSection icon={GitBranch} title="GitHub Repository" />
          <ResourceSection icon={Image} title="Diagrams & Schematics" />
          <ResourceSection icon={FileCode} title="Documentation" />
        </div>
      </motion.div>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
<h2 className="text-[32px] font-bold tracking-[0.2em] text-[#E67E22] relative inline-block">
  Projects
  <motion.div 
    className="absolute -bottom-4 left-0 w-full h-1 bg-[#E67E22]/50"
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
  />
</h2>

        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;