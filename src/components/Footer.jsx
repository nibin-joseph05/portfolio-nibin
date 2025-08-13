import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      {/* Top border with gradient */}
      <div className="border-t-2 border-gradient-to-r from-cyan-500 to-blue-600 w-full mb-8"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              Nibin Joseph
            </h2>
            <p className="text-slate-400 text-sm">
              Full-Stack Developer & MCA Student
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">Connect With Me</h3>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/nibin-joseph05" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="https://www.linkedin.com/in/nibin-joseph05/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a 
                href="mailto:nibin.joseph.career@gmail.com" 
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block text-slate-400 hover:text-cyan-400 transition-colors">About</a>
              <a href="#resume" className="block text-slate-400 hover:text-cyan-400 transition-colors">Resume</a>
              <a href="#projects" className="block text-slate-400 hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#contact" className="block text-slate-400 hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Nibin Joseph. All Rights Reserved. 
            <span className="flex items-center gap-1">
              Made with <FaHeart className="text-red-500 animate-pulse" /> in Kerala, India
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
