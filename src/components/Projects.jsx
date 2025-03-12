import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const projects = [
  {
    name: "GuestInMe Nightlife Application",
    tech: "Flutter & Firebase",
    image: "/guestinme.jpg",
  },
  {
    name: "SMS Spam Detection",
    tech: "Python ML & Flask",
    image: "/sms-spam.jpg",
  },
  {
    name: "Show World Film Directory (App)",
    tech: "React Native",
    image: "/showworld-app.jpg",
  },
  {
    name: "Campus Connect",
    tech: "Django & React",
    image: "/campus-connect.jpg",
  },
  {
    name: "Show World Film Directory (Website)",
    tech: "Next.js & Node.js",
    image: "/showworld-web.jpg",
  },
  {
    name: "Curry Powder Selling Website",
    tech: "Django & PostgreSQL",
    image: "/curry.jpg",
  },
  {
    name: "Football Turf Booking Website",
    tech: "PHP & MySQL",
    image: "/turf.jpg",
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
