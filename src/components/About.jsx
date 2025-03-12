import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.h2
          className="text-5xl font-bold text-center text-pink-400 mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* Profile Image */}
          <div className="relative">
            <div
              className="w-48 h-48 rounded-full bg-cover bg-center border-4 border-pink-500 shadow-lg shadow-pink-500/50"
              style={{ backgroundImage: "url('/my-pic.jpeg')" }}
            />
            <div className="absolute inset-0 w-full h-full rounded-full border-4 border-transparent animate-pulse"></div>
          </div>

          {/* About Text */}
          <div className="lg:w-3/5 text-center lg:text-left mt-6 lg:mt-0">
            <p className="mt-4 text-gray-300 text-lg leading-8">
              A Master of Computer Application (MCA) student from Marian College Kuttikkanam (Autonomous) with excellent academic background and a diverse skill set. Experienced in Web, Flutter, and Android Development. Well-versed in Flutter, Python, PHP, Java, C++, and basics of JavaScript & CSS.
            </p>

            {/* Profile Details */}
            <div className="mt-6 space-y-2 text-lg">
              <p>
                <strong className="text-pink-400">Full Name:</strong> Nibin Joseph
              </p>
              <p>
                <strong className="text-pink-400">Birth Date:</strong> November 5th, 2003
              </p>
              <p>
                <strong className="text-pink-400">Email:</strong> nibin.joseph.career@gmail.com, nibinjoseph2019@gmail.com
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <div className="mt-12">
          <motion.h3
            className="text-4xl font-semibold text-center text-pink-400 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Skills
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center text-gray-200">
            {["PHP", "Python Django", "HTML, CSS", "Java", "Spring-boot", "React + Vite", "Next.js", "Machine Learning"].map((skill, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg hover:shadow-pink-500/50 transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Language Proficiency */}
        <div className="mt-12">
          <motion.h3
            className="text-4xl font-semibold text-center text-pink-400 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Language Proficiency
          </motion.h3>

          <div className="text-lg text-gray-300 space-y-4">
            {[
              { lang: "English", level: "Read, Write, Speak (Fluent)" },
              { lang: "Malayalam", level: "Read, Write, Speak (Native)" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg hover:shadow-pink-500/50 transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <strong className="text-pink-400">{item.lang}:</strong> {item.level}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
