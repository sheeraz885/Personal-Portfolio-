import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Sparkles, Zap, Rocket, Star } from 'lucide-react';
import { useTypewriter } from '../../hooks/useTypewriter';

const Hero: React.FC = () => {
  const typewriterText = useTypewriter('Full Stack Developer', 100, 50, 3000);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Floating particles animation
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            initial={{
              x: `${particle.x}%`,
              y: `${particle.y}%`,
              scale: 0,
            }}
            animate={{
              y: [`${particle.y}%`, `${particle.y - 20}%`, `${particle.y}%`],
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-20 left-20 w-32 h-32 border border-blue-200/30 dark:border-blue-700/30 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
            y: [0, -20, 0],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-20 right-20 w-24 h-24 border-2 border-purple-200/30 dark:border-purple-700/30 rotate-45"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-pink-300/20 to-yellow-300/20 rounded-full blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-medium border border-green-200 dark:border-green-700 shadow-lg backdrop-blur-sm"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 bg-green-500 rounded-full mr-3"
              />
              <Sparkles className="w-4 h-4 mr-2" />
              Available for new opportunities
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="block text-gray-800 dark:text-gray-200"
              >
                Hi, I'm
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8, type: "spring", stiffness: 100 }}
                className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative"
              >
                Sheeraz Ahmed
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                  className="absolute -top-4 -right-4 text-yellow-400"
                >
                  <Star size={32} fill="currentColor" />
                </motion.div>
              </motion.span>
            </h1>

            {/* Typewriter Effect */}
            <div className="text-2xl sm:text-4xl lg:text-5xl text-gray-600 dark:text-gray-300 mb-8 h-16 flex items-center justify-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <span className="font-mono bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {typewriterText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                  className="ml-1 text-blue-500"
                >
                  |
                </motion.span>
                
                {/* Floating Icons */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -right-16 top-1/2 transform -translate-y-1/2 text-blue-500"
                >
                  <Code size={24} />
                </motion.div>
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -left-16 top-1/2 transform -translate-y-1/2 text-purple-500"
                >
                  <Zap size={24} />
                </motion.div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              I craft exceptional digital experiences with modern technologies, turning complex problems 
              into elegant solutions. Passionate about creating scalable applications and mentoring the 
              next generation of developers.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)',
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl text-lg font-semibold shadow-2xl transition-all duration-300"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative flex items-center">
                  <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  View My Work
                </span>
              </motion.button>

              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  borderColor: '#3B82F6',
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl text-lg font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg"
              >
                <span className="flex items-center">
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    className="mr-2"
                  >
                    💬
                  </motion.div>
                  Get In Touch
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 mt-16 mb-16"
          >
            {[
              { label: 'Projects Completed', value: '10+', icon: '🚀' },
              // { label: 'Happy Clients', value: '30+', icon: '😊' },
              // { label: 'Year Experience', value: '6+', icon: '⭐' },
              { label: 'Technologies', value: '10+', icon: '💻' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.4 + (index * 0.1), duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToAbout}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors p-2 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg"
            >
              <ChevronDown size={32} />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Floating Action Bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="relative"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full shadow-2xl flex items-center justify-center text-2xl hover:shadow-pink-500/25 transition-all duration-300"
          >
            👋
          </motion.button>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full opacity-20 blur-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;