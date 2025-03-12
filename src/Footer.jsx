import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-4">
        <h2 className="text-2xl font-semibold">Let's Connect</h2>

        {/* Social Links */}
        <div className="flex space-x-6 text-xl">
          <a href="https://github.com/nibinjoseph" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/nibinjoseph" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:nibin@example.com" className="hover:text-pink-500 transition">
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Nibin Joseph. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
