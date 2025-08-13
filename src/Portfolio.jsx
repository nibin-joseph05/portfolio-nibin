import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Resume from "./components/Resume";

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans">
      {loading && (
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-slate-900 text-white z-50">
          <div className="w-16 h-16 border-4 border-slate-300 border-t-cyan-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-2xl font-bold text-slate-200 animate-pulse drop-shadow-lg">
            Loading Portfolio...
          </p>
        </div>
      )}

      <Navbar />

      {/* Hero Section */}
      <section id="top" className="relative flex justify-center items-center h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/portfolio-nibin/main-image.jpg')" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute text-center z-10"
        >
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-2xl">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Nibin Joseph</span>
          </h1>
          <p className="text-2xl mb-2 text-slate-300 drop-shadow-xl">👋 Full-Stack Developer</p>
          <p className="text-xl mt-4 font-light text-slate-200 drop-shadow-2xl mb-8">
            <Typewriter
              options={{
                strings: [
                  "MCA Student at Marian College",
                  "Java & Spring Boot Expert",
                  "Python & Django Developer",
                  "React & Next.js Enthusiast",
                  "Machine Learning Practitioner"
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30
              }}
            />
          </p>
          
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://github.com/nibin-joseph05"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <FaGithub className="text-2xl text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/nibin-joseph05/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <FaLinkedin className="text-2xl text-white" />
            </a>
            <a
              href="mailto:nibin.joseph.career@gmail.com"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <FaEnvelope className="text-2xl text-white" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg font-semibold rounded-lg transition-all duration-300 uppercase tracking-wide drop-shadow-lg hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25"
            >
              Get In Touch
            </a>
            <button
              onClick={() => setCvModalOpen(true)}
              className="px-8 py-4 border-2 border-cyan-500 text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-cyan-500 hover:text-white uppercase tracking-wide drop-shadow-lg hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25"
            >
              View Resume
            </button>
          </div>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-15 animate-pulse delay-1000"></div>
      </section>

      <About />
      <Resume />  
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />

      {/* CV Modal */}
      {cvModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
          <motion.div 
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">My Resume</h2>
              <button
                onClick={() => setCvModalOpen(false)}
                className="text-gray-600 hover:text-red-500 text-3xl font-bold transition-colors"
              >
                &times;
              </button>
            </div>
            <div className="p-6">
              <iframe
                src="/portfolio-nibin/nibin-resume.pdf"
                className="w-full h-96 rounded-lg border border-gray-200"
                title="Resume Preview"
              ></iframe>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end">
              <a
                href="/portfolio-nibin/nibin-resume.pdf"
                download
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
