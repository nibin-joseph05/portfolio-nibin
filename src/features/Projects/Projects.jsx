import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useCallback, memo } from "react";

import { IMAGES } from "../../core/constants/assets";

const ProjectCard = memo(({ project, index, isFeatured, onImageClick, isExpanded, onExpand }) => (
  <motion.div
    className={`${isFeatured ? 'group relative bg-slate-800/20 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20' : 'group bg-slate-800/20 backdrop-blur-xl rounded-lg sm:rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10'}`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
  >
    <div className={`relative ${isFeatured ? 'h-40 sm:h-56 md:h-64' : 'h-32 sm:h-40 md:h-48'} overflow-hidden`}>
      <img 
        src={project.image} 
        alt={project.name} 
        loading="lazy"
        className="w-full h-full object-cover cursor-zoom-in transition-transform duration-500 group-hover:scale-110"
        onClick={() => onImageClick(project.image, project.name)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
      
      {project.status && (
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 text-[10px] font-bold rounded-full border ${project.status === 'Active' ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400' : 'bg-slate-700/50 border-slate-600 text-slate-400'}`}>
            {project.status}
          </span>
        </div>
      )}
    </div>

    <div className={`p-4 ${isFeatured ? 'sm:p-6 md:p-8' : 'sm:p-5'}`}>
      <h3 className={`font-bold text-white mb-2 ${isFeatured ? 'text-xl sm:text-2xl' : 'text-lg'} group-hover:text-cyan-400 transition-colors`}>
        {project.name}
      </h3>
      <p className={`text-slate-300 mb-4 text-sm leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}>
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.split(',').slice(0, 4).map((tech, idx) => (
          <span key={idx} className="text-[10px] font-bold px-2 py-1 bg-slate-900/50 text-cyan-500 rounded border border-slate-700">
            {tech.trim()}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        {project.githubRepo && (
          <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-slate-900/50 rounded-lg text-xs font-bold text-slate-300 hover:text-white transition-colors border border-slate-700">
            GitHub
          </a>
        )}
        {project.liveDemo && (
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-cyan-500/10 rounded-lg text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors border border-cyan-500/30">
            Live Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
));

const projects = [
  {
    name: "AURA — AI-Powered Safety, Wellness & Community Platform",
    tech: "Flutter, Kotlin, Spring Boot, Next.js, Go (Blockchain), PostgreSQL, Firebase, Gemini AI",
    image: IMAGES.AURA,
    description: "AURA is a full-stack platform designed to integrate personal safety, community wellness, and real-time communication into a unified ecosystem. Features pulse-trigger SOS alerts, live GPS tracking, blockchain-based immutable event logging, WebSockets messaging, and an AI-powered wellness feed.",
    githubRepo: "https://github.com/nibin-joseph05/Aura",
    featured: true,
    status: "Active",
    color: "from-blue-500 to-indigo-600"
  },
  {
    name: "Xpose - AI-Enabled Smart Crime Reporting System",
    tech: "Flutter, Spring Boot, FastAPI, Go, PostgreSQL, LevelDB, Gemini API, BERT",
    image: IMAGES.XPOSE,
    description: "A comprehensive crime reporting platform featuring AI-powered spam detection and urgency classification. Integrates anonymous reporting, multilingual support via Gemini API, and immutable blockchain storage with real-time police/admin notifications.",
    githubRepo: "https://github.com/nibin-joseph05/Xpose",
    featured: true,
    status: "Completed",
    color: "from-blue-600 to-cyan-700"
  },
  {
    name: "Lyfex – Camera-based Health Snapshot",
    tech: "React Native (Expo), FastAPI, OpenCV, WebSocket",
    image: IMAGES.LYFEX,
    description: "Mobile-first AI wellness assistant estimating heart rate, stress, and emotion from camera feed. Uses computer vision and real-time WebSocket communication for instantaneous health metric feedback.",
    githubRepo: "https://github.com/nibin-joseph05/Lyfex",
    featured: true,
    status: "Completed",
    color: "from-cyan-600 to-blue-700"
  },
  {
    name: "MovieFlix - Online Movie Ticket Booking System",
    tech: "Spring Boot (Java), Next.js, PostgreSQL, Docker",
    image: IMAGES.MOVIEFLIX,
    description: "Robust booking system with OAuth authentication, location-based theater discovery, real-time seat selection, and Razorpay integration. Features QR-based tickets and automated email confirmations.",
    liveDemo: "https://movieflix-sooty.vercel.app/",
    githubRepo: "https://github.com/nibin-joseph05/movie-ticket-booking",
    featured: true,
    color: "from-cyan-500 to-blue-600"
  },
  {
    name: "PlaySpot - Football Turf Booking System",
    tech: "Django (Python), PostgreSQL, NLP (TF-IDF, Cosine Similarity, Sentence Embeddings)",
    image: IMAGES.FOOTBALL_TURF, 
    description: "Comprehensive turf booking platform with an NLP-driven FAQ Chatbot. Uses semantic embedding techniques for accurate user query understanding and real-time availability management.",
    liveDemo: "https://playspot-py.duckdns.org/",
    githubRepo: "https://github.com/nibin-joseph05/PlaySpot",
    featured: true,
    color: "from-blue-500 to-cyan-600"
  },
  {
    name: "Flask ML Model Predictor",
    tech: "Flask (Python), Scikit-learn, Pandas, NumPy",
    image: IMAGES.FLASK_ML, 
    description: "Web application integrating multiple regression and classification algorithms for predictive analytics. Features an interactive UI for real-time model evaluation and house price estimation.",
    liveDemo: "https://ml-models-flask.onrender.com/",
    githubRepo: "https://github.com/nibin-joseph05/ML-Models-Flask",
    featured: true,
    color: "from-cyan-600 to-blue-700"
  },
  {
    name: "Spice Shop - E-commerce Platform",
    tech: "Next.js, Spring Boot, MySQL",
    image: IMAGES.SPICE_SHOP, 
    description: "Modern e-commerce solution for spice retail featuring a Spring Boot backend for secure business logic and a dynamic Next.js frontend for high-performance user interaction.",
    featured: false,
    color: "from-cyan-500 to-blue-500"
  },
  {
    name: "FitTrack – Offline Gym Progress Tracking App",
    tech: "Flutter (Dart), Hive, Riverpod, Clean Architecture",
    image: IMAGES.FIT_TRACK,
    description: "Fully offline-first Flutter application for tracking workouts, sets, reps, and strength progression. Implemented using Clean Architecture with modular feature-based structure and Hive for local persistence.",
    githubRepo: "https://github.com/nibin-joseph05/FitTrack",
    featured: false,
    color: "from-blue-500 to-cyan-600"
  },
  {
    name: "JeztConnect – Flutter App for Jezt Technologies",
    tech: "Flutter (Dart), REST API, Token Auth",
    image: IMAGES.JEZT,
    description: "Business analytics dashboard with token-based authentication and real-time data fetching. Focuses on polished UI animations and graceful error handling for enterprise use.",
    liveDemo: "https://drive.google.com/drive/u/1/folders/1JMtRKaBrT7M5yKHrGW7TH3-NIa76h90a",
    githubRepo: "https://github.com/nibin-joseph05/JeztConnect",
    featured: false,
    color: "from-cyan-400 to-blue-600"
  }
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const handleProjectHover = useCallback((projectName) => {
    setHoveredProject(projectName);
  }, []);

  const openImage = useCallback((src, alt) => {
    setSelectedImage({ src, alt });
  }, []);
  const closeImage = useCallback(() => {
    setSelectedImage(null);
  }, []);

  useEffect(() => {
    if (!selectedImage) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeImage();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedImage, closeImage]);

  return (
    <>
    <section id="projects" className="py-8 sm:py-10 md:py-12 bg-slate-900 text-white relative overflow-hidden">
      {/* Optimized Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 sm:top-10 left-10 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/8 to-blue-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-10 right-10 sm:right-10 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-gradient-to-r from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600">
            Featured Projects
          </span>
        </motion.h2>

        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 text-center mb-4 sm:mb-6 md:mb-8 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          Check out some of my projects that showcase my skills and passion for building impactful applications
        </motion.p>

        {/* Featured Projects Grid */}
        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                index={index} 
                isFeatured={true}
                onImageClick={openImage}
                isExpanded={expandedProject === project.name}
                onExpand={() => setExpandedProject(expandedProject === project.name ? null : project.name)}
              />
            ))}
          </div>
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            More Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                index={index} 
                isFeatured={false}
                onImageClick={openImage}
                isExpanded={expandedProject === project.name}
                onExpand={() => setExpandedProject(expandedProject === project.name ? null : project.name)}
              />
            ))}
          </div>
        </div>

        {/* View More on GitHub Button */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/nibin-joseph05?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl text-white font-black uppercase tracking-widest text-xs hover:border-cyan-500/50 hover:bg-slate-800/60 transition-all group"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
    {selectedImage && (
      <motion.div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeImage}
      >
        <motion.div 
          className="relative w-full flex items-center justify-center"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          onClick={(e) => e.stopPropagation()}
        >
          <img 
            src={selectedImage.src} 
            alt={selectedImage.alt} 
            className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
          />
          <button 
            className="absolute -top-3 -right-3 bg-slate-900 text-white px-3 py-1 rounded-full border border-slate-700 hover:bg-slate-800"
            onClick={closeImage}
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    )}
    </>
  );
}