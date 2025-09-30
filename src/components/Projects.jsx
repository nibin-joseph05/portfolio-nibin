import { motion, useScroll, useTransform } from "framer-motion";
import React, { useState, useEffect, useCallback } from "react";
import { FaExternalLinkAlt, FaGithub, FaEye, FaRocket, FaCode, FaBrain, FaDatabase, FaCloud } from "react-icons/fa";

const projects = [
  {
    name: "Xpose - AI-Enabled Smart Crime Reporting System",
    tech: "Flutter, Spring Boot, FastAPI, Go, PostgreSQL, LevelDB, Gemini API, BERT",
    image: "/portfolio-nibin/xpose.png",
    description: "A comprehensive crime reporting platform with AI-powered spam detection and urgency classification. Features anonymous reporting, multilingual support via Gemini API, immutable blockchain storage using Go and LevelDB, and real-time notifications. The system includes Flutter mobile app, Spring Boot backend, FastAPI ML microservice, and Next.js admin/police dashboards.",
    featured: true,
    status: "In Development",
    icon: FaBrain,
    color: "from-purple-500 to-pink-600"
  },
  {
    name: "Lyfex – Camera-based Health Snapshot",
    tech: "React Native (Expo), FastAPI, OpenCV, WebSocket",
    image: "/portfolio-nibin/lyfex.png",
    description: "Lyfex is a friendly, mobile-first AI wellness assistant that estimates heart rate, breathing rate, stress, emotion, alertness, and hydration/skin from the front camera. It runs locally with a FastAPI backend analyzing frames via computer vision and returns metrics to the app in real time.",
    githubRepo: "https://github.com/nibin-joseph05/Lyfex",
    featured: true,
    status: "Completed",
    icon: FaBrain,
    color: "from-teal-500 to-emerald-600"
  },
  {
    name: "MovieFlix - Online Movie Ticket Booking System",
    tech: "Spring Boot (Java), Next.js, PostgreSQL, Docker",
    image: "/portfolio-nibin/movieflix.png",
    description: "MovieFlix is a robust online movie ticket booking system featuring OTP-based and Google OAuth authentication, location-based theater discovery with Google Maps, rich movie details from TMDB, real-time seat selection, food & beverage ordering, and secure Razorpay payments with email confirmations and QR tickets. Deployed on Vercel (frontend) and Render (backend).",
    liveDemo: "https://movieflix-sooty.vercel.app/",
    githubRepo: "https://github.com/nibin-joseph05/movie-ticket-booking",
    featured: true,
    icon: FaRocket,
    color: "from-cyan-500 to-blue-600"
  },
  {
    name: "PlaySpot - Football Turf Booking System",
    tech: "Django (Python), PostgreSQL, NLP (TF-IDF, Cosine Similarity, Sentence Embeddings)",
    image: "/portfolio-nibin/playspot.png", 
    description: "PlaySpot is a comprehensive football turf booking system with user authentication, booking, reviews, and an admin panel. A key highlight is its NLP-driven FAQ Chatbot, leveraging TF-IDF, Cosine Similarity, and all-MiniLM-L6-v2 Sentence Embeddings for accurate semantic understanding. Hosted on Google Cloud Platform.",
    liveDemo: "https://playspot-py.duckdns.org/",
    githubRepo: "https://github.com/nibin-joseph05/PlaySpot",
    featured: true,
    icon: FaCode,
    color: "from-green-500 to-teal-600"
  },
  {
    name: "Flask ML Model Predictor",
    tech: "Flask (Python), Scikit-learn, Pandas, NumPy",
    image: "/portfolio-nibin/flask-ml.png", 
    description: "A simple yet powerful web application integrating five different Machine Learning algorithms to predict and classify house prices. Features include Simple, Multiple, and Polynomial Regression for prediction, and K-Nearest Neighbors (KNN) and Logistic Regression for classification, with an interactive UI displaying predictions and R² scores/accuracy. Deployed on Render.",
    liveDemo: "https://ml-models-flask.onrender.com/",
    githubRepo: "https://github.com/nibin-joseph05/ML-Models-Flask",
    featured: true,
    icon: FaBrain,
    color: "from-pink-500 to-red-600"
  },
  {
    name: "Spice Shop - E-commerce Platform",
    tech: "Next.js, Spring Boot",
    image: "/portfolio-nibin/spice-shop.png", 
    description: "Currently under development, this project is a modern e-commerce platform designed for selling spices. It features a robust backend built with Spring Boot for handling business logic and APIs, and a dynamic, responsive frontend developed with Next.js for a seamless user experience.",
    featured: false,
    icon: FaRocket,
    color: "from-orange-500 to-red-600"
  },
  {
    name: "SMS Spam Detection",
    tech: "Python ML & Django",
    image: "/portfolio-nibin/sms-spam.png",
    description: "The SMS Spam Detection project is a machine learning-based system designed to automatically detect spam messages within a chat environment between students and mentors. This project integrates Natural Language Processing (NLP) and Machine Learning (ML) techniques to analyze and classify messages as spam or non-spam, providing a secure and efficient communication platform.",
    githubRepo: "https://github.com/nibin-joseph05/SMS-SPAM-Detection",
    featured: false,
    icon: FaBrain,
    color: "from-purple-500 to-indigo-600"
  },
  {
    name: "Campus Connect",
    tech: "Django & Python",
    image: "/portfolio-nibin/campus-connect.png",
    description: "Campus Connect is an online platform designed to enhance communication and collaboration within the university community. Through Campus Connect, students, faculty, and staff can easily access important resources, engage in discussions, and stay informed about campus events and announcements.",
    githubRepo: "https://github.com/nibin-joseph05/CampusConnect",
    featured: false,
    icon: FaCode,
    color: "from-blue-500 to-cyan-600"
  },
  {
    name: "Curry Powder Selling Website",
    tech: "Django & Python",
    image: "/portfolio-nibin/curry-powder.png",
    description: "The Curry Powder Selling App offers a revolutionary platform for purchasing a variety of high-quality curry powders from multiple vendors. With its intuitive interface, curated selection, and detailed product descriptions, the app empowers users to explore and discover new flavors with ease.",
    featured: false,
    icon: FaRocket,
    color: "from-yellow-500 to-orange-600"
  },
  {
    name: "JeztConnect – Flutter App for Jezt Technologies",
    tech: "Flutter (Dart), REST API, Token Auth",
    image: "/portfolio-nibin/jezt.png",
    description: "A Flutter application demonstrating login with Company ID, dashboard data fetching, pull-to-refresh, and logout with token-based authentication. Includes animated splash, polished UI, and graceful error handling.",
    liveDemo: "https://drive.google.com/drive/u/1/folders/1JMtRKaBrT7M5yKHrGW7TH3-NIa76h90a",
    githubRepo: "https://github.com/nibin-joseph05/JeztConnect",
    featured: false,
    icon: FaRocket,
    color: "from-indigo-500 to-blue-600"
  },
  {
    name: "Football Turf Booking Website (PHP)",
    tech: "PHP & MySQL",
    image: "/portfolio-nibin/football-turf.png",
    description: "This web-based application, developed using PHP and HTML, simplifies reserving football turf facilities. It offers a user-friendly interface for easy navigation and seamless reservations. Features include robust search by location, dynamic display of turf details from a MySQL database, image handling, and integrated booking functionality.",
    featured: false,
    icon: FaDatabase,
    color: "from-green-500 to-emerald-600"
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Optimized hover handling
  const handleProjectHover = useCallback((projectName) => {
    setHoveredProject(projectName);
  }, []);

  // Image modal handlers
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
    <section id="projects" className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
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
          className="absolute bottom-10 sm:bottom-10 right-10 sm:right-10 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl"
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
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Featured Projects
          </span>
        </motion.h2>

        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 text-center mb-6 sm:mb-8 md:mb-12 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          Check out some of my projects that showcase my skills and passion for building impactful applications
        </motion.p>

        {/* Featured Projects */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <motion.h3 
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-400 mb-4 sm:mb-6 md:mb-8 text-center flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <FaRocket className="text-lg sm:text-xl md:text-2xl" />
            <span className="hidden sm:inline">Featured Projects</span>
            <span className="sm:hidden">Featured</span>
          </motion.h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={index}
                className="group relative bg-slate-800/20 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02
                }}
                onHoverStart={() => handleProjectHover(project.name)}
                onHoverEnd={() => handleProjectHover(null)}
              >
                {/* Project Image with Optimized Effects */}
                <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover cursor-zoom-in"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    onClick={() => openImage(project.image, project.name)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent pointer-events-none"></div>
                  
                  {/* Floating Project Icon */}
                  <motion.div
                    className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-cyan-500/90 to-blue-500/90 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <project.icon className="text-xs sm:text-sm md:text-lg text-white" />
                  </motion.div>
                  
                  {/* Tech Stack Badge */}
                  <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
                    <span className="px-2 sm:px-3 py-1 bg-slate-800/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-slate-600">
                      {project.tech.split(',')[0]}
                    </span>
                  </div>

                  {/* Status Badge */}
                  {project.status && (
                    <div className="absolute top-10 sm:top-12 md:top-16 right-2 sm:right-3 md:right-4">
                      <span className="px-2 sm:px-3 py-1 bg-yellow-500/90 text-white text-xs font-semibold rounded-full border border-yellow-400">
                        {project.status}
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-3 sm:p-4 md:p-6">
                  <motion.div
                    className="flex items-center justify-between mb-2 sm:mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors leading-tight">
                      {project.name}
                    </h3>
                  </motion.div>
                  
                  <motion.p 
                    className="text-xs sm:text-sm md:text-base text-slate-300 mb-3 sm:mb-4 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>
                  
                  {/* Optimized Tech Stack */}
                  <div className="mb-3 sm:mb-4">
                    <p className="text-slate-400 text-xs sm:text-sm font-medium mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.split(', ').slice(0, 4).map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-2 py-1 bg-slate-700/50 text-cyan-300 text-xs rounded border border-slate-600 backdrop-blur-sm"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + techIndex * 0.05, duration: 0.3, ease: "easeOut" }}
                          viewport={{ once: true }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.tech.split(', ').length > 4 && (
                        <span className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs rounded border border-slate-600">
                          +{project.tech.split(', ').length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Optimized Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    {project.liveDemo && (
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-cyan-500/25 text-xs sm:text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        Live Demo
                      </motion.a>
                    )}
                    {project.githubRepo && (
                      <motion.a
                        href={project.githubRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 px-3 sm:px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg border border-slate-600 text-xs sm:text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub />
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <motion.h3 
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-400 mb-4 sm:mb-6 md:mb-8 text-center flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <FaCode className="text-lg sm:text-xl md:text-2xl" />
            <span className="hidden sm:inline">Other Projects</span>
            <span className="sm:hidden">Other</span>
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={index}
                className="group bg-slate-800/20 backdrop-blur-xl rounded-lg sm:rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02
                }}
              >
                {/* Project Image */}
                <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover cursor-zoom-in"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    onClick={() => openImage(project.image, project.name)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none"></div>
                  
                  {/* Project Icon */}
                  <motion.div
                    className="absolute top-2 sm:top-3 left-2 sm:left-3 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-cyan-500/90 to-blue-500/90 rounded-lg flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <project.icon className="text-xs sm:text-sm text-white" />
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-3 sm:p-4">
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold text-cyan-400 mb-1 sm:mb-2 group-hover:text-cyan-300 transition-colors leading-tight">
                    {project.name}
                  </h4>
                  <div className="text-xs sm:text-sm text-slate-300 mb-2 sm:mb-3 leading-relaxed">
                    <span className={`${expandedProject === project.name ? '' : 'line-clamp-3'}`}>{project.description}</span>{' '}
                    <button
                      className="inline text-cyan-400 hover:text-cyan-300 text-xs font-medium"
                      onClick={() => setExpandedProject(expandedProject === project.name ? null : project.name)}
                    >
                      {expandedProject === project.name ? 'Show less' : 'Read more'}
                    </button>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="mb-2 sm:mb-3">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.split(', ').slice(0, 2).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-slate-700/50 text-cyan-300 text-xs rounded border border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.split(', ').length > 2 && (
                        <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-slate-700/50 text-slate-400 text-xs rounded border border-slate-600">
                          +{project.tech.split(', ').length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-1 sm:gap-2">
                    {project.liveDemo && (
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-2 py-1 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs rounded transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        Demo
                      </motion.a>
                    )}
                    {project.githubRepo && (
                      <motion.a
                        href={project.githubRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-2 py-1 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 text-xs rounded transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub className="text-xs" />
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
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