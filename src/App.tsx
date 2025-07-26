import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      const current = sectionElements.find((element, index) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) {
        const currentSection = sections[sectionElements.indexOf(current)];
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SEO Meta Tags (would be better handled with React Helmet in a real project)
  useEffect(() => {
    document.title = 'Sheeaz Ahmed - Full Stack Developer Portfolio';
    
    const metaTags = [
      { name: 'description', content: 'Professional full-stack developer specializing in React, Node.js, and modern web technologies. View my portfolio and get in touch for your next project.' },
      { name: 'keywords', content: 'full stack developer, react developer, node.js, web development, portfolio, javascript, typescript' },
      { name: 'author', content: 'Alex Johnson' },
      { property: 'og:title', content: 'Sheeraz Ahmed - Full Stack Developer Portfolio' },
      { property: 'og:description', content: 'Professional full-stack developer specializing in React, Node.js, and modern web technologies.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Sheeraz Ahmed - Full Stack Developer Portfolio' },
      { name: 'twitter:description', content: 'Professional full-stack developer specializing in React, Node.js, and modern web technologies.' },
    ];

    metaTags.forEach(tag => {
      const element = document.querySelector(`meta[name="${tag.name}"], meta[property="${tag.property}"]`);
      if (element) {
        if (tag.name) element.setAttribute('content', tag.content);
        if (tag.property) element.setAttribute('content', tag.content);
      } else {
        const newElement = document.createElement('meta');
        if (tag.name) newElement.setAttribute('name', tag.name);
        if (tag.property) newElement.setAttribute('property', tag.property);
        newElement.setAttribute('content', tag.content);
        document.head.appendChild(newElement);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <Navigation 
        activeSection={activeSection} 
        onSectionClick={setActiveSection}
      />

      {/* Main Content */}
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-colors"
            aria-label="Scroll to top"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Loading Screen for Better UX */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed inset-0 z-50 bg-white dark:bg-gray-900 flex items-center justify-center pointer-events-none"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-blue-600 dark:text-blue-400"
        >
          <span className="font-mono">&lt;Dev/&gt;</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default App;