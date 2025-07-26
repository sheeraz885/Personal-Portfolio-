import { Project, Experience, Skill } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'State Egency website',
    description: 'A responsive real estate website with property listings, user profiles, wishlist, inquiries, and admin CRUD features built using HTML, CSS, and JavaScript.',
    longDescription: 'A responsive real estate website built with HTML, CSS, and JavaScript. Features include property listings, search, wishlist, user profile, inquiries, and an admin panel with full CRUD for listings, users, and messages.',
    image: 'https://i.postimg.cc/65vVTM5h/state.png',
    tags: ['HTML', 'CSS', 'JS'],
    category: 'frontend',
    liveUrl: 'https://sheeraz885.github.io/E-state-Egency/homeverse-master/index.html',
    githubUrl: 'https://github.com/sheeraz885/E-state-Egency',
    featured: true
  },
  {
    id: '2',
    title: 'Food-Resturant Website',
    description: 'I craft responsive, modern frontend UIs using React, JavaScript, and Tailwind CSS for food restaurants and business websites.',
    longDescription: 'I create high-quality frontend UIs using React, JavaScript & Tailwind CSS. Focused on responsive design and modern styling, I build fast, attractive web interfaces for Food Resturant and business needs',
    image: 'https://i.postimg.cc/BvGBjj5r/food.png',
    tags: ['React', 'JavaScript', 'Tailwind CSS'],
    category: 'frontend',
    liveUrl: 'https://elegant-licorice-6307dc.netlify.app/',
    githubUrl: 'https://github.com/sheeraz885/Food-Resturant',
    featured: true
  },
  {
    id: '3',
    title: 'Tech Store Website',
    description: 'TeachStore builds fast, responsive UIs with React, TypeScript, and Tailwind CSS for e-commerce and business sites.',
    longDescription: 'I create high-quality frontend UIs using React, TypeScript & Tailwind CSS. Focused on responsive design and modern styling, I build fast, attractive web interfaces for e-commerce and business needs.',
    image: 'https://i.postimg.cc/mkqQBk26/web-stack-website.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    category: 'frontend',
    liveUrl: 'https://jovial-macaron-1f7051.netlify.app/',
    githubUrl: 'https://github.com/sheeraz885/Mobistore',
    featured: false
  },
  {
    id: '4',
    title: 'Car Rental Website',
    description: 'Beautiful weather app with forecasts and interactive maps',
    longDescription: 'A modern, responsive car rental website frontend built with React and Tailwind CSS, showcasing vehicle listings, booking forms, and sleek UI for rental services.',
    image: 'https://i.postimg.cc/J7d3b6cc/car-rent.png',
    tags: ['React', 'Tailwind CSS'],
    category: 'frontend',
    liveUrl: 'https://vocal-alpaca-3a3854.netlify.app/',
    githubUrl: 'https://github.com/sheeraz885/Car-Rental-Website',
    featured: false
  },
  {
    id: '6',
    title: 'Dimon App-Landing-Page',
    description: 'Dimon App is an Apple-style React landing page using Tailwind CSS with a sticky navbar, smooth scroll, and modern, responsive UI.',
    longDescription: 'Dimon App is a pixel-perfect Apple style landing page built with React, Tailwind CSS, and JavaScript. It features a sticky navbar, responsive hero section, smooth scroll, reusable components, and modern UI perfect for showcasing front-end skills',
    image: 'https://i.postimg.cc/T3cDWF8n/dimon.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    category: 'frontend',
    liveUrl: 'https://sparkly-paletas-def8ea.netlify.app/',
    githubUrl: 'https://github.com/sheeraz885/Dimon---App-Landing-Page',
    featured: true
  },
  {
    id: '7',
    title: 'Quiz-App',
    description: 'A quiz app using HTML, CSS, and JavaScript with multiple-choice questions on web development, score tracking, and a user-friendly interface.',
    longDescription: 'A quiz app built with HTML, CSS, and JavaScript. It features quizzes on HTML, CSS, and JavaScript, where users can answer multiple-choice questions. The app tracks progress, displays scores, and offers a user-friendly interface for learning and testing web development knowledge.',
    image: 'https://i.postimg.cc/HxFcgC51/quiz.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'frontend',
    liveUrl: 'https://sheeraz885.github.io/Quiz-App/',
    githubUrl: 'https://github.com/sheeraz885/Quiz-App',
    featured: true
  },
  {
    id: '8',
    title: 'TechWave',
    description: 'TechWave A modern HTML & CSS tech store website featuring sleek navigation, banners, trending products, brand showcase, and newsletter signup',
    longDescription: 'TechWave - A modern and responsive tech store website built with HTML and CSS. Features include a sleek navigation bar, banners, trending products, a brand showcase, and a newsletter signup. Ideal for showcasing electronics and gadgets with a clean UI',
    image: 'https://i.postimg.cc/ZKtBs44r/techwave.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'frontend',
    liveUrl: 'https://sheeraz885.github.io/TechWave-Website/',
    githubUrl: 'https://github.com/sheeraz885/TechWave-Website',
    featured: true
  },

  {
    id: '9',
    title: 'Shop cart',
    description: 'Full-featured MERN stack shopping cart with auth, product/cart management, responsive UI, and Redux state control.',
    longDescription: 'Full-featured MERN stack shopping cart app with React for frontend, Node.js & Express for backend, and MongoDB for data storage. Includes user authentication, product management, cart functionality, and responsive UI using Redux for state management.',
    image: 'https://i.postimg.cc/kGznMr7W/shpcart.png',
    tags: ['React', 'Redux', 'TypeScript','Express','Mongodb'],
    category: 'Full Stack',
    liveUrl: 'https://shopcart.reactbd.com/',
    githubUrl: 'https://github.com/sheeraz885/Shop-cart-website',
    featured: true
  },

   {
    id: '10',
    title: 'Smart Learn Education Website',
    description: 'Modern ReactJS educational website with responsive design, course listings, testimonials, and interactive UI—perfect for online learning platforms.',
    longDescription: 'A modern educational website built with ReactJS featuring responsive design, course listings, testimonials, and interactive UI. Ideal for showcasing online learning platforms or institutions. Clean layout, smooth navigation, and fully optimized for all devices.',
    image: 'https://i.postimg.cc/MZP009sR/e-education.png',
    tags: ['React', 'Taillwind CSS', 'JavaScript'],
    category: 'fronted',
    liveUrl: 'https://educational-website-reactjs.netlify.app/',
    githubUrl: 'https://github.com/sheeraz885/SmartLearn/tree/main',
    featured: true
  },
];

export const experience: Experience[] = [
  {
    id: '1',
    company: 'FreelanceWork',
    position: 'Full Stack Developer',
    duration: '2024',
    description: [
      'Delivered 15+ custom web applications for various clients',
      'Specialized in e-commerce and business automation solutions',
      'Maintained 98% client satisfaction rate',
      'Worked with diverse technology stacks based on client needs'
    ],
    technologies: ['React', 'MongoDB', 'MySQL'],
    logo: '💼'
  },
  {
    id: '2',
    company: 'TechGropse',
    position: 'Frontend Developer',
    duration: '2019 - 2024',
    description: [
      'Built responsive web applications from design to deployment',
      'Optimized performance resulting in 25% faster load times',
      'Integrated third-party APIs and payment systems'
    ],
    technologies: ['React', 'JavaScript', 'Styled Components', 'TypeScript'],
    logo: '🚀'
  },
];

export const skills: Skill[] = [
  { name: 'React', level: 95, category: 'frontend', icon: '⚛️' },
  { name: 'TypeScript', level: 90, category: 'languages', icon: '📘' },
  { name: 'Node.js', level: 85, category: 'backend', icon: '🟢' },
  { name: 'Next.js', level: 88, category: 'frontend', icon: '▲' },
  { name: 'Python', level: 75, category: 'languages', icon: '🐍' },
  { name: 'C++', level: 78, category: 'languages', icon: '' },
  { name: 'MYSQL', level: 82, category: 'backend', icon: '🐘' },
  { name: 'MongoDB', level: 78, category: 'backend', icon: '🍃' },
  { name: 'Git', level: 92, category: 'tools', icon: '📚' },
  { name: 'Figma', level: 70, category: 'tools', icon: '🎨' }
];