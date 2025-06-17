import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      {/* White line at the top */}
      <div className="border-t-2 border-white w-full mb-4"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-4">
        <h2 className="text-2xl font-semibold">Let's Connect</h2>

        {/* Social Links */}
        <div className="flex space-x-6 text-xl">
          <a href="https://github.com/nibin-joseph05" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/nibin-joseph05/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FaLinkedin />
          </a>
          <a href="nibin.joseph.career@gmail.com" className="hover:text-pink-500 transition">
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Nibin Joseph. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
