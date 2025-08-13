import { motion, useScroll, useTransform } from "framer-motion";
import React, { useState, useEffect } from "react";
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
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-6xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Featured Projects
          </span>
        </motion.h2>

        <motion.p
          className="text-2xl text-slate-300 text-center mb-20 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Check out some of my projects that showcase my skills and passion for building impactful applications
        </motion.p>

        {/* Featured Projects */}
        <div className="mb-20">
          <motion.h3 
            className="text-4xl font-semibold text-cyan-400 mb-12 text-center flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <FaRocket className="text-3xl" />
             Featured Projects
          </motion.h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={index}
                className="group relative bg-slate-800/20 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20"
                initial={{ opacity: 0, y: 100, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1.2, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  y: -20,
                  rotateY: 5,
                  scale: 1.02
                }}
                onHoverStart={() => setHoveredProject(project.name)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                {/* Project Image with Enhanced Effects */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
                  
                  {/* Floating Project Icon */}
                  <motion.div
                    className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-r from-cyan-500/90 to-blue-500/90 rounded-2xl flex items-center justify-center shadow-2xl"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <project.icon className="text-2xl text-white" />
                  </motion.div>
                  
                  {/* Tech Stack Badge */}
                  <div className="absolute top-6 right-6">
                    <span className="px-4 py-2 bg-slate-800/80 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-slate-600">
                      {project.tech.split(',')[0]}
                    </span>
                  </div>

                  {/* Status Badge */}
                  {project.status && (
                    <div className="absolute top-20 right-6">
                      <span className="px-4 py-2 bg-yellow-500/90 text-white text-sm font-semibold rounded-full border border-yellow-400">
                        {project.status}
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <motion.div
                    className="flex items-center justify-between mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-3xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      {project.name}
                    </h3>
                  </motion.div>
                  
                  <motion.p 
                    className="text-slate-300 text-base mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>
                  
                  {/* Enhanced Tech Stack */}
                  <div className="mb-8">
                    <p className="text-slate-400 text-sm font-medium mb-3">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.split(', ').map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-700/50 text-cyan-300 text-xs rounded-lg border border-slate-600 backdrop-blur-sm"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + techIndex * 0.05, duration: 0.4, ease: "easeOut" }}
                          viewport={{ once: true }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex gap-4">
                    {project.liveDemo && (
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-cyan-500/25"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        Live Demo
                      </motion.a>
                    )}
                    {project.githubRepo && (
                      <motion.a
                        href={project.githubRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg border border-slate-600"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub />
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Floating Particles */}
                <motion.div
                  className="absolute -top-10 -left-10 w-20 h-20 bg-cyan-500 rounded-full blur-3xl opacity-20"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <motion.h3 
            className="text-4xl font-semibold text-cyan-400 mb-12 text-center flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <FaCode className="text-3xl" />
            💻 Other Projects
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={index}
                className="group bg-slate-800/20 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  y: -10,
                  rotateY: 3,
                  scale: 1.02
                }}
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                  
                  {/* Project Icon */}
                  <motion.div
                    className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-cyan-500/90 to-blue-500/90 rounded-xl flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <project.icon className="text-lg text-white" />
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.name}
                  </h4>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.split(', ').slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-slate-700/50 text-cyan-300 text-xs rounded border border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.split(', ').length > 3 && (
                        <span className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs rounded border border-slate-600">
                          +{project.tech.split(', ').length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.liveDemo && (
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-sm rounded-lg transition-colors"
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
                        className="flex items-center gap-1 px-3 py-1.5 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 text-sm rounded-lg transition-colors"
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
  );
}