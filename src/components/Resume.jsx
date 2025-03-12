import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  const educationData = [
    {
      title: "Master's Degree 🎓",
      duration: "July 2024 - Present",
      college: "Marian College Kuttikkanam",
      description: "Currently pursuing Master of Computer Application (MCA) at Marian College Kuttikkanam, Idukki, Kerala, India.",
    },
    {
      title: "Bachelor's Degree 🎓",
      duration: "July 2021 - 2024",
      college: "St Antony's College Peruvanthanam",
      description: "Completed Bachelor Of Computer Application (BCA) at St Antony's College Peruvanthanam, Idukki, Kerala, India.",
    },
    {
      title: "Schooling 🏫",
      duration: "2009 - 2021",
      college: "St Joseph Higher Secondary School Peruvanthanam",
      description: "Completed my schooling at St Joseph Higher Secondary School Peruvanthanam, Idukki, Kerala, India.",
    },
  ];

  return (
    <section id="resume" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Title */}
        <motion.h2 
          className="text-5xl font-bold text-center text-pink-400 mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Resume
        </motion.h2>

        <p className="text-lg text-gray-300 text-center mb-12">
          More of my credentials
        </p>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              className="relative p-6 bg-gray-800/80 backdrop-blur-lg border border-gray-700 rounded-lg shadow-lg hover:shadow-pink-500/50 transition-transform transform hover:scale-[1.05]"
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
              transition={{ duration: 0.4 }}
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 border-2 border-transparent rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 opacity-30 hover:opacity-50 transition-opacity"></div>

              <h3 className="text-2xl font-semibold text-pink-400 flex items-center">
                {item.title}
              </h3>
              <p className="text-gray-400 italic">{item.duration}</p>
              <p className="mt-2 text-gray-200 font-medium">{item.college}</p>
              <p className="mt-2 text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
