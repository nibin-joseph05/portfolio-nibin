import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaGithub, FaEye } from "react-icons/fa";

const projects = [
  {
    name: "Xpose - AI-Enabled Smart Crime Reporting System",
    tech: "Flutter, Spring Boot, FastAPI, Go, PostgreSQL, LevelDB, Gemini API, BERT",
    image: "/portfolio-nibin/xpose.png",
    description: "A comprehensive crime reporting platform with AI-powered spam detection and urgency classification. Features anonymous reporting, multilingual support via Gemini API, immutable blockchain storage using Go and LevelDB, and real-time notifications. The system includes Flutter mobile app, Spring Boot backend, FastAPI ML microservice, and Next.js admin/police dashboards.",
    featured: true,
    status: "In Development"
  },
  {
    name: "MovieFlix - Online Movie Ticket Booking System",
    tech: "Spring Boot (Java), Next.js, PostgreSQL, Docker",
    image: "/portfolio-nibin/movieflix.png",
    description: "MovieFlix is a robust online movie ticket booking system featuring OTP-based and Google OAuth authentication, location-based theater discovery with Google Maps, rich movie details from TMDB, real-time seat selection, food & beverage ordering, and secure Razorpay payments with email confirmations and QR tickets. Deployed on Vercel (frontend) and Render (backend).",
    liveDemo: "https://movieflix-sooty.vercel.app/",
    githubRepo: "https://github.com/nibin-joseph05/movie-ticket-booking",
    featured: true
  },
  {
    name: "PlaySpot - Football Turf Booking System",
    tech: "Django (Python), PostgreSQL, NLP (TF-IDF, Cosine Similarity, Sentence Embeddings)",
    image: "/portfolio-nibin/playspot.png", 
    description: "PlaySpot is a comprehensive football turf booking system with user authentication, booking, reviews, and an admin panel. A key highlight is its NLP-driven FAQ Chatbot, leveraging TF-IDF, Cosine Similarity, and all-MiniLM-L6-v2 Sentence Embeddings for accurate semantic understanding. Hosted on Google Cloud Platform.",
    liveDemo: "https://playspot-py.duckdns.org/",
    githubRepo: "https://github.com/nibin-joseph05/PlaySpot",
    featured: true
  },
  {
    name: "Flask ML Model Predictor",
    tech: "Flask (Python), Scikit-learn, Pandas, NumPy",
    image: "/portfolio-nibin/flask-ml.png", 
    description: "A simple yet powerful web application integrating five different Machine Learning algorithms to predict and classify house prices. Features include Simple, Multiple, and Polynomial Regression for prediction, and K-Nearest Neighbors (KNN) and Logistic Regression for classification, with an interactive UI displaying predictions and R² scores/accuracy. Deployed on Render.",
    liveDemo: "https://ml-models-flask.onrender.com/",
    githubRepo: "https://github.com/nibin-joseph05/ML-Models-Flask",
    featured: true
  },
  {
    name: "Spice Shop - E-commerce Platform",
    tech: "Next.js, Spring Boot",
    image: "/portfolio-nibin/spice-shop.png", 
    description: "Currently under development, this project is a modern e-commerce platform designed for selling spices. It features a robust backend built with Spring Boot for handling business logic and APIs, and a dynamic, responsive frontend developed with Next.js for a seamless user experience.",
    featured: false
  },
  {
    name: "SMS Spam Detection",
    tech: "Python ML & Django",
    image: "/portfolio-nibin/sms-spam.png",
    description: "The SMS Spam Detection project is a machine learning-based system designed to automatically detect spam messages within a chat environment between students and mentors. This project integrates Natural Language Processing (NLP) and Machine Learning (ML) techniques to analyze and classify messages as spam or non-spam, providing a secure and efficient communication platform.",
    githubRepo: "https://github.com/nibin-joseph05/SMS-SPAM-Detection",
    featured: false
  },
  {
    name: "Campus Connect",
    tech: "Django & Python",
    image: "/portfolio-nibin/campus-connect.png",
    description: "Campus Connect is an online platform designed to enhance communication and collaboration within the university community. Through Campus Connect, students, faculty, and staff can easily access important resources, engage in discussions, and stay informed about campus events and announcements.",
    githubRepo: "https://github.com/nibin-joseph05/CampusConnect",
    featured: false
  },
  {
    name: "Curry Powder Selling Website",
    tech: "Django & Python",
    image: "/portfolio-nibin/curry-powder.png",
    description: "The Curry Powder Selling App offers a revolutionary platform for purchasing a variety of high-quality curry powders from multiple vendors. With its intuitive interface, curated selection, and detailed product descriptions, the app empowers users to explore and discover new flavors with ease.",
    featured: false
  },
  {
    name: "Football Turf Booking Website (PHP)",
    tech: "PHP & MySQL",
    image: "/portfolio-nibin/football-turf.png",
    description: "This web-based application, developed using PHP and HTML, simplifies reserving football turf facilities. It offers a user-friendly interface for easy navigation and seamless reservations. Features include robust search by location, dynamic display of turf details from a MySQL database, image handling, and integrated booking functionality.",
    featured: false
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Title */}
        <motion.h2
          className="text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Featured Projects
          </span>
        </motion.h2>

        <motion.p
          className="text-xl text-slate-300 text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Check out some of my projects that showcase my skills and passion for building impactful applications
        </motion.p>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-cyan-400 mb-8 text-center">🚀 Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={index}
                className="group relative bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  
                  {/* Tech Stack Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-cyan-500/90 text-white text-xs font-semibold rounded-full">
                      {project.tech.split(',')[0]}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      {project.name}
                    </h3>
                    {project.status && (
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded-full text-xs font-semibold">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-slate-400 text-sm font-medium mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.split(', ').map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-slate-700/50 text-cyan-300 text-xs rounded-md border border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        Live Demo
                      </a>
                    )}
                    {project.githubRepo && (
                      <a
                        href={project.githubRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        <FaGithub />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-semibold text-cyan-400 mb-8 text-center">💻 Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={index}
                className="group bg-slate-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.name}
                  </h4>
                  <p className="text-slate-300 text-sm mb-3 leading-relaxed line-clamp-3">
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
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-sm rounded transition-colors"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        Demo
                      </a>
                    )}
                    {project.githubRepo && (
                      <a
                        href={project.githubRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 text-sm rounded transition-colors"
                      >
                        <FaGithub className="text-xs" />
                        Code
                      </a>
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