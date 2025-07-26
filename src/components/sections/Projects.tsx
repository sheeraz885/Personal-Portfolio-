import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ExternalLink, 
  Github, 
  Star, 
  Eye, 
  GitBranch, 
  Calendar, 
  Zap, 
  X,
  Play,
  Code,
  Award,
  Users,
  Clock,
  Heart,
  Share2,
  Download
} from 'lucide-react';
import { projects } from '../../data/portfolio';
import { Project } from '../../types';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects', icon: '🚀', color: 'from-purple-500 to-pink-500' },
    { id: 'fullstack', label: 'Full Stack', icon: '⚡', color: 'from-blue-500 to-cyan-500' },
    { id: 'frontend', label: 'Frontend', icon: '🎨', color: 'from-green-500 to-teal-500' },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number],
      },
    },
  };

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: 100 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.5, opacity: 0, y: 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative w-full max-w-6xl h-full md:h-[90vh] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2 md:p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
          >
            <X size={20} className="md:w-6 md:h-6" />
          </motion.button>

          <div className="flex flex-col lg:flex-row h-full overflow-y-auto">
            {/* Left Side - Image & Actions (Mobile: comes first) */}
            <div className="relative w-full lg:w-1/2 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-6 md:p-8 flex flex-col">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
              </div>

              <div className="relative z-10 flex-1 flex flex-col">
                {/* Project Image */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative mb-6 md:mb-8 rounded-2xl overflow-hidden shadow-2xl flex-shrink-0"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 md:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Floating Play Button */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white border-2 border-white/30"
                    >
                      <Play size={20} className="md:w-6 md:h-6" fill="currentColor" />
                    </motion.button>
                  </motion.div>
                </motion.div>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8 flex-shrink-0">
                  {[
                    { icon: <Eye size={14} className="md:w-4 md:h-4" />, label: 'Views', value: '200' },
                    { icon: <Star size={14} className="md:w-4 md:h-4" />, label: 'Stars', value: '50+' },
                    { icon: <GitBranch size={14} className="md:w-4 md:h-4" />, label: 'Forks', value: '23' }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + (index * 0.1) }}
                      className="text-center p-2 md:p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                    >
                      <div className="flex justify-center mb-1 md:mb-2 text-white/80">
                        {stat.icon}
                      </div>
                      <div className="text-lg md:text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-white/70">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="relative z-10 flex flex-col sm:flex-row gap-3 md:gap-4 mt-auto flex-shrink-0">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white text-gray-900 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all text-sm md:text-base"
                    >
                      <ExternalLink size={16} className="md:w-5 md:h-5" />
                      Live Demo
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all text-sm md:text-base"
                    >
                      <Github size={16} className="md:w-5 md:h-5" />
                      Source
                    </motion.a>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-1/2 p-6 md:p-8 overflow-y-auto">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {/* Header */}
                <div className="mb-4 md:mb-6">
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-lg md:text-xl"
                    >
                      🚀
                    </motion.div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h2>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full capitalize">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="px-2 py-1 text-xs bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 text-yellow-800 dark:text-yellow-200 rounded-full flex items-center gap-1">
                            <Star size={10} fill="currentColor" />
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6 md:mb-8">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2 md:mb-3 flex items-center gap-2">
                    <Award size={16} className="md:w-5 md:h-5 text-blue-500" />
                    Project Overview
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-3 md:mb-4">
                    {project.longDescription}
                  </p>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6 md:mb-8">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
                    <Code size={16} className="md:w-5 md:h-5 text-purple-500" />
                    Technologies Used
                  </h3>
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    {project.tags.map((tag, index) => (
                      <motion.div
                        key={tag}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5 + (index * 0.05) }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center gap-2 p-2 md:p-3 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-xl border border-gray-200 dark:border-gray-700"
                      >
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xs md:text-sm font-bold">
                          {tag.charAt(0)}
                        </div>
                        <span className="font-medium text-xs md:text-sm text-gray-700 dark:text-gray-300">
                          {tag}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                  <div className="space-y-2 md:space-y-4">
                    <h4 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <Users size={14} className="md:w-4 md:h-4 text-green-500" />
                      Team Size
                    </h4>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Solo Project</p>
                  </div>
                  <div className="space-y-2 md:space-y-4">
                    <h4 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <Clock size={14} className="md:w-4 md:h-4 text-orange-500" />
                      Duration
                    </h4>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">2 months</p>
                  </div>
                </div>

                {/* Additional Actions */}
                <div className="flex gap-2 md:gap-3 pt-4 md:pt-6 border-t border-gray-200 dark:border-gray-700">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1 md:gap-2 px-3 py-1 md:px-4 md:py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-xs md:text-sm"
                  >
                    <Heart size={14} className="md:w-4 md:h-4" />
                    Like
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1 md:gap-2 px-3 py-1 md:px-4 md:py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-xs md:text-sm"
                  >
                    <Share2 size={14} className="md:w-4 md:h-4" />
                    Share
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1 md:gap-2 px-3 py-1 md:px-4 md:py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-xs md:text-sm"
                  >
                    <Download size={14} className="md:w-4 md:h-4" />
                    Download
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <motion.div
        layout
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="group relative"
      >
        <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-60 transition-opacity duration-300" />
        
        <motion.div
          whileHover={{ 
            y: -20,
            transition: { 
              type: "spring",
              stiffness: 400,
              damping: 15,
              mass: 0.5
            }
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 will-change-transform"
          onClick={() => setSelectedProject(project)}
        >
          <div className="relative h-64 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="absolute top-4 left-4"
            >
              {project.featured && (
                <div className="flex items-center space-x-2 px-3 py-1.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Star size={12} fill="currentColor" />
                  </motion.div>
                  <span>Featured</span>
                </div>
              )}
            </motion.div>

            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              {project.tags.slice(0, 3).map((tag, i) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index * 0.1) + (i * 0.1) }}
                  whileHover={{ scale: 1.1, x: -5 }}
                  className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-white text-xs rounded-full border border-white/20 shadow-lg"
                >
                  {tag}
                </motion.div>
              ))}
              {project.tags.length > 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index * 0.1) + 0.3 }}
                  className="px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full shadow-lg"
                >
                  +{project.tags.length - 3}
                </motion.div>
              )}
            </div>

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center"
                >
                  <div className="text-center space-y-4">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                      className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto shadow-2xl"
                    >
                      👁️
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-white font-medium"
                    >
                      Click to view details
                    </motion.p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center justify-between text-white text-xs">
                <div className="flex items-center space-x-4">
                  {[
                    { icon: <Eye size={12} />, value: '2.4k' },
                    { icon: <Star size={12} />, value: '156' },
                    { icon: <GitBranch size={12} />, value: '23' }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className="flex items-center space-x-1 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full"
                    >
                      {stat.icon}
                      <span>{stat.value}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center space-x-1 bg-green-500/80 backdrop-blur-sm px-2 py-1 rounded-full"
                >
                  <Calendar size={12} />
                  <span>2020</span>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full -translate-y-16 translate-x-16 opacity-60" />
            
            <div className="space-y-3 relative z-10">
              <div className="flex items-start justify-between">
                <motion.h3 
                  className="text-xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500"
                  whileHover={{ scale: 1.02 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center space-x-1 text-xs text-green-600 dark:text-green-400"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Live</span>
                </motion.div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="inline-flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                  <Zap size={10} />
                  <span className="capitalize font-medium">{project.category}</span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  • Professional Project
                </div>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors relative z-10">
              {project.description}
            </p>

            <div className="space-y-3 relative z-10">
              <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <Code size={12} />
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (index * 0.05) + (i * 0.05) }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="group/tag relative px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-all duration-300 cursor-default border border-gray-200 dark:border-gray-600 overflow-hidden"
                  >
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">{tag}</span>
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 relative z-10">
              <div className="flex space-x-3">
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Demo</span>
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm font-medium transition-colors"
                  >
                    <Github size={14} />
                    <span>Code</span>
                  </motion.a>
                )}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-1 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium transition-all duration-300"
              >
                <span>View Details</span>
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="projects" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.2, 1, 1.2]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-300/20 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: 180,
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-40 left-40 w-96 h-96 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-blue-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium mb-8 shadow-lg backdrop-blur-sm border border-purple-200 dark:border-purple-700"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="mr-3"
            >
              <Zap className="w-4 h-4" />
            </motion.div>
            Featured Work & Projects
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              Creative
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Explore my latest work showcasing innovative solutions, cutting-edge technologies, 
            and creative problem-solving approaches that push the boundaries of web development.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative overflow-hidden px-8 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 shadow-lg ${
                  selectedCategory === category.id
                    ? 'text-white shadow-2xl'
                    : 'text-gray-700 dark:text-gray-300 bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-700 backdrop-blur-sm border border-gray-200 dark:border-gray-600'
                }`}
              >
                {selectedCategory === category.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative flex items-center space-x-3">
                  <motion.span 
                    className="text-xl"
                    animate={selectedCategory === category.id ? { rotate: [0, 360] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {category.icon}
                  </motion.span>
                  <span>{category.label}</span>
                </span>
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                />
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-8xl mb-6"
            >
              🔍
            </motion.div>
            <p className="text-gray-500 dark:text-gray-400 text-xl font-medium">
              No projects found in this category.
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
              Try selecting a different category to explore more projects.
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="relative group inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-75 transition-all duration-1000" />
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-2xl border border-gray-100 dark:border-gray-700">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-6"
              >
                🚀
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to bring your ideas to life?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's collaborate on your next project and create something extraordinary together. 
                I'm passionate about turning innovative concepts into reality.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg"
              >
                <span className="flex items-center space-x-2">
                  <span>Start a Project</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;