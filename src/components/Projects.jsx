import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const projects = [
  {
    name: "MovieFlix - Online Movie Ticket Booking System",
    tech: "Spring Boot (Java), Next.js, PostgreSQL, Docker",
    image: "/portfolio-nibin/movieflix.png",
    description: "MovieFlix is a robust online movie ticket booking system featuring OTP-based and Google OAuth authentication, location-based theater discovery with Google Maps, rich movie details from TMDB, real-time seat selection, food & beverage ordering, and secure Razorpay payments with email confirmations and QR tickets. Deployed on Vercel (frontend) and Render (backend).",
    liveDemo: "https://movieflix-sooty.vercel.app/",
    githubRepo: "https://github.com/nibin-joseph05/movie-ticket-booking",
  },
  {
    name: "PlaySpot - Football Turf Booking System",
    tech: "Django (Python), PostgreSQL, NLP (TF-IDF, Cosine Similarity, Sentence Embeddings)",
    image: "/portfolio-nibin/playspot.png", 
    description: "PlaySpot is a comprehensive football turf booking system with user authentication, booking, reviews, and an admin panel. A key highlight is its NLP-driven FAQ Chatbot, leveraging TF-IDF, Cosine Similarity, and all-MiniLM-L6-v2 Sentence Embeddings for accurate semantic understanding. Hosted on Google Cloud Platform.",
    liveDemo: "https://playspot-py.duckdns.org/",
    githubRepo: "https://github.com/nibin-joseph05/PlaySpot",
  },
  {
    name: "Flask ML Model Predictor",
    tech: "Flask (Python), Scikit-learn, Pandas, NumPy",
    image: "/portfolio-nibin/flask-ml.png", 
    description: "A simple yet powerful web application integrating five different Machine Learning algorithms to predict and classify house prices. Features include Simple, Multiple, and Polynomial Regression for prediction, and K-Nearest Neighbors (KNN) and Logistic Regression for classification, with an interactive UI displaying predictions and R² scores/accuracy. Deployed on Render.",
    liveDemo: "https://ml-models-flask.onrender.com/",
    githubRepo: "https://github.com/nibin-joseph05/ML-Models-Flask",
  },
  {
    name: "Spice Shop - E-commerce Platform",
    tech: "Next.js, Spring Boot",
    image: "/portfolio-nibin/spice-shop.png", 
    description: "Currently under development, this project is a modern e-commerce platform designed for selling spices. It features a robust backend built with Spring Boot for handling business logic and APIs, and a dynamic, responsive frontend developed with Next.js for a seamless user experience.",
    
  },
  {
    name: "SMS Spam Detection",
    tech: "Python ML & Django",
    image: "/portfolio-nibin/sms-spam.png",
    description: "The SMS Spam Detection project is a machine learning-based system designed to automatically detect spam messages within a chat environment between students and mentors. This project integrates Natural Language Processing (NLP) and Machine Learning (ML) techniques to analyze and classify messages as spam or non-spam, providing a secure and efficient communication platform. The system consists of three main entities: Admin, Mentor, and Student, each with specific roles and functionalities.",
  },
  {
    name: "Campus Connect",
    tech: "Django & Python",
    image: "/portfolio-nibin/campus-connect.png",
    description: "Campus Connect is an online platform designed to enhance communication and collaboration within the university community. Through Campus Connect, students, faculty, and staff can easily access important resources, engage in discussions, and stay informed about campus events and announcements. The platform offers features such as group messaging, file sharing, event calendars, and academic support services. With its user-friendly interface and comprehensive functionality, Campus Connect aims to foster a sense of connectivity and belonging among members of the university, facilitating academic success and community engagement.",
  },
  {
    name: "Curry Powder Selling Website",
    tech: "Django & Python",
    image: "/portfolio-nibin/curry-powder.png",
    description: "The Curry Powder Selling App offers a revolutionary platform for purchasing a variety of high-quality curry powders from multiple vendors. With its intuitive interface, curated selection, and detailed product descriptions, the app empowers users to explore and discover new flavors with ease. Key features include vendor profiles, reviews and ratings, robust search and filter options, secure payment gateways, order tracking, and personalized recommendations. Additionally, the app prioritizes customer support, social sharing, promotions, recipe integration, sustainability initiatives, and community engagement to enhance the overall user experience and foster a vibrant community of culinary enthusiasts.",
  },
  {
    name: "Football Turf Booking Website (PHP)",
    tech: "PHP & MySQL",
    image: "/portfolio-nibin/football-turf.png",
    description: "This web-based application, developed using PHP and HTML, simplifies reserving football turf facilities. It offers a user-friendly interface for easy navigation and seamless reservations. Features include robust search by location, dynamic display of turf details from a MySQL database, image handling, and integrated booking functionality, improving user convenience and management efficiency.",
  },
];


export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Title */}
        <motion.h2
          className="text-5xl font-bold text-center text-pink-400 mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>

        <p className="text-lg text-gray-300 text-center mb-12">
          Check out some of my projects. These projects have helped me develop my skills and understand the industry better.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-xl bg-gray-800/70 backdrop-blur-lg shadow-lg hover:shadow-pink-500/50 transition-transform transform hover:scale-105 border border-gray-700 hover:border-pink-500 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Project Image with Overlay */}
              <div className="relative h-48 rounded-lg overflow-hidden group">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition duration-500"></div>
              </div>

              {/* Project Details */}
              <h3 className="text-2xl font-semibold text-pink-400 mt-4">{project.name}</h3>
              <p className="text-gray-300 text-sm mt-2">{project.tech}</p>
              <p className="text-gray-400 text-sm mt-2">{project.description}</p>

              {/* Live Demo and GitHub Links */}
              <div className="mt-4 flex flex-wrap gap-3">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-lg text-sm transition duration-300"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubRepo && (
                  <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg text-sm transition duration-300"
                  >
                    GitHub Repo
                  </a>
                )}
              </div>

              {/* Floating Effect */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-pink-500 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-400 rounded-full blur-3xl opacity-15"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}