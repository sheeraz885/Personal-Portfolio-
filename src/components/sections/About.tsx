import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Target, Heart, Zap } from 'lucide-react';
import { skills } from '../../data/portfolio';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    languages: skills.filter(skill => skill.category === 'languages'),
    tools: skills.filter(skill => skill.category === 'tools'),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  const SkillBubble: React.FC<{ skill: typeof skills[0]; index: number }> = ({ skill, index }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        scale: 1.15, 
        rotate: [0, -5, 5, 0],
        transition: { duration: 0.3 }
      }}
      className="relative group cursor-pointer"
    >
      {/* Glowing background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-600">
        {/* Icon with floating animation */}
        <motion.div
          animate={{ 
            y: [0, -5, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            delay: index * 0.2 
          }}
          className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300"
        >
          {skill.icon}
        </motion.div>
        
        <h3 className="font-bold text-gray-900 dark:text-white text-sm text-center mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {skill.name}
        </h3>
        
        {/* Animated progress bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 2, delay: index * 0.1, ease: "easeOut" }}
            className="h-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative overflow-hidden"
          >
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
          </motion.div>
        </div>
        
        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
          {skill.level}%
        </span>

        {/* Floating particles on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{ 
                scale: [0, 1, 0],
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
              }}
              transition={{ 
                duration: 1.5, 
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 2
              }}
              className="absolute top-1/2 left-1/2 w-1 h-1 bg-blue-400 rounded-full"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="about" ref={ref} className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 relative overflow-hidden">
      {/* Background decorations */}
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
          className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
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
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-r from-pink-200/20 to-yellow-200/20 rounded-full blur-3xl"
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
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-6"
          >
            <Zap className="w-4 h-4 mr-2" />
            Get to know me
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
           Passionate full-stack developer with strong skills in creating scalable and user-friendly web applications. 
           Dedicated to turning complex challenges into simple and effective solutions.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Main Bio Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl mr-4"
                  >
                    🚀
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      My Journey
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      From curiosity to expertise
                    </p>
                  </div>
                </div>
               
               <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I started my coding journey in 2024 during my web development training at Saylani. 
                 What began with simple HTML and CSS projects quickly grew into a passion for building 
                 functional and user-friendly web applications.
                </p>

               <p>
               I specialize in React, JavaScript, and modern frontend development. I enjoy creating clean, 
               responsive interfaces and constantly improving my skills by learning new technologies 
              like JavaScript and Firebase.
             </p>

             <p>
               Alongside coding, I also bring experience from the telecom and pharmaceutical industries, 
               where I developed strong communication, documentation, and problem-solving skills. 
              These experiences help me collaborate effectively and stay organized in my projects.
             </p>
              </div>


                {/* Values */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { icon: <Target className="w-5 h-5" />, label: 'Goal-Oriented', color: 'from-blue-500 to-cyan-500' },
                    { icon: <Heart className="w-5 h-5" />, label: 'User-Focused', color: 'from-pink-500 to-red-500' },
                    { icon: <Zap className="w-5 h-5" />, label: 'Innovation', color: 'from-yellow-500 to-orange-500' },
                    { icon: <Award className="w-5 h-5" />, label: 'Excellence', color: 'from-purple-500 to-indigo-500' }
                  ].map((value, index) => (
                    <motion.div
                      key={value.label}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`p-4 bg-gradient-to-r ${value.color} rounded-xl text-white text-center shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <div className="flex justify-center mb-2">
                        {value.icon}
                      </div>
                      <div className="text-sm font-semibold">
                        {value.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Projects Completed', value: '10+', icon: '🚀', color: 'from-blue-500 to-purple-500' },
                
                { label: 'Technologies', value: '10+', icon: '💻', color: 'from-orange-500 to-red-500' },
               
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-xl border border-gray-100 dark:border-gray-700">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      className="text-3xl mb-3"
                    >
                      {stat.icon}
                    </motion.div>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-10"
          >
            {Object.entries(skillCategories).map(([category, categorySkills]) => (
              <motion.div key={category} variants={itemVariants}>
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl mr-4"
                  >
                    {category === 'frontend' ? '🎨' : 
                     category === 'backend' ? '⚙️' : 
                     category === 'languages' ? '📝' : '🛠️'}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white capitalize">
                      {category === 'frontend' ? 'Frontend Development' : 
                       category === 'backend' ? 'Backend Development' : 
                       category === 'languages' ? 'Programming Languages' : 'Tools & Technologies'}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {categorySkills.length} technologies
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {categorySkills.map((skill, index) => (
                    <SkillBubble key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to work together?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                Let's create something amazing together. I'm always excited to take on new challenges.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Let's Talk
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;