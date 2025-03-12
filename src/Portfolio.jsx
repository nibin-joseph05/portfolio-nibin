import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 text-white text-2xl font-bold">
          Loading Portfolio...
        </div>
      )}

      <Navbar />

      {/* Hero Section */}
      <section id="top" className="relative flex justify-center items-center h-screen bg-gray-900">
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/main-image.jpg')" }}
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
            <a
              href="nibinresume.pdf"
              className="px-6 py-3 border border-pink-600 text-lg rounded-lg transition hover:bg-pink-600 uppercase tracking-wide drop-shadow-lg"
            >
              Download CV
            </a>
          </div>

          {/* Social Media Links */}
          <div className="mt-8 flex space-x-12 justify-center text-5xl">
            <a
              href="https://www.linkedin.com/in/nibin-joseph05/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition drop-shadow-lg"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/nibin-joseph05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition drop-shadow-lg"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/_.n_.i_.b_.i_.n?igsh=MzNqcTliaG91NzRv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-600 transition drop-shadow-lg"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
