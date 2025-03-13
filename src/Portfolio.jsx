import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
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
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {loading && (
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-gray-900 text-white">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-pink-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-2xl font-bold text-gray-200 animate-pulse drop-shadow-lg">
            Loading Portfolio...
          </p>
        </div>
      )}

      <Navbar />

      {/* Hero Section */}
      <section id="top" className="relative flex justify-center items-center h-screen bg-gray-900">
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/portfolio-nibin/main-image.jpg')" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute text-center"
        >
          <h1 className="text-6xl font-bold text-gray-100 mt-3 drop-shadow-2xl">
            I<span className="text-pink-400">'</span>m Nibin Joseph<span className="text-pink-400">.</span>
          </h1>
          <p className="text-4xl mt-4 font-light text-gray-200 drop-shadow-2xl">
            <Typewriter
              options={{
                strings: [
                  "MCA Student",
                  "Full-Stack Developer",
                  "Java & Spring Boot",
                  "React & Next.js",
                  "Vite | Flask | Django"
                ],
                autoStart: true,
                loop: true
              }}
            />
          </p>
          <div className="mt-6 flex space-x-4 justify-center">
            <a
              href="#contact"
              className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-lg rounded-lg transition uppercase tracking-wide drop-shadow-lg"
            >
              Contact Me
            </a>
            <button
              onClick={() => setCvModalOpen(true)}
              className="px-6 py-3 border border-pink-600 text-lg rounded-lg transition hover:bg-pink-600 uppercase tracking-wide drop-shadow-lg"
            >
              View / Download CV
            </button>
          </div>
        </motion.div>
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-lg max-w-3xl w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">My CV</h2>
              <button
                onClick={() => setCvModalOpen(false)}
                className="text-gray-600 hover:text-red-500 text-2xl"
              >
                &times;
              </button>
            </div>
            <iframe
              src="nibinresume.pdf"
              className="w-full h-96 mt-4"
              title="CV Preview"
            ></iframe>
            <div className="mt-4 flex justify-end">
              <a
                href="nibinresume.pdf"
                download
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white text-lg rounded-lg transition"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
