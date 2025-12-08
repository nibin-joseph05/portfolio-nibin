import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaRocket, FaCode, FaBrain } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8 sm:py-12 md:py-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 sm:top-10 left-10 sm:left-10 w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-10 right-10 sm:right-10 w-56 h-56 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Top border with gradient */}
      <div className="border-t-2 border-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 w-full mb-8 sm:mb-12 relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-50"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 sm:gap-12 items-center">
          {/* Enhanced Brand Section */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-2 sm:mb-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Nibin Joseph
            </motion.h2>
            <p className="text-slate-400 text-sm sm:text-base md:text-lg">
              Full-Stack Developer & MCA Student
            </p>
            <motion.div
              className="flex items-center justify-center md:justify-start gap-2 mt-2 sm:mt-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FaRocket className="text-cyan-400 text-sm sm:text-base" />
              <FaCode className="text-blue-400 text-sm sm:text-base" />
              <FaBrain className="text-purple-400 text-sm sm:text-base" />
            </motion.div>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-4 sm:mb-6 flex items-center justify-center gap-2 sm:gap-3">
              <FaRocket className="text-xl sm:text-2xl" />
              Connect With Me
            </h3>
            <div className="flex justify-center space-x-4 sm:space-x-6">
              {[
                { icon: FaGithub, href: "https://github.com/nibin-joseph05", color: "hover:shadow-cyan-500/50" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/nibin-joseph05/", color: "hover:shadow-blue-500/50" },
                { icon: FaEnvelope, href: "mailto:nibin.joseph.career@gmail.com", color: "hover:shadow-cyan-500/50" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`p-3 sm:p-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} border border-slate-700 hover:border-cyan-500 backdrop-blur-sm flex-shrink-0`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="text-lg sm:text-xl md:text-2xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Quick Links */}
          <motion.div 
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-4 sm:mb-6 flex items-center justify-center md:justify-end gap-2 sm:gap-3">
              <FaCode className="text-xl sm:text-2xl" />
              Quick Links
            </h3>
            <div className="space-y-2 sm:space-y-3 text-base sm:text-lg">
              {[
                { href: "#about", label: "About" },
                { href: "#experience", label: "Experience" },
                { href: "#resume", label: "Resume" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" }
              ].map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.href} 
                  className="block text-slate-400 hover:text-cyan-400 transition-colors font-medium"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Bottom Section */}
        <motion.div 
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-700/50 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-slate-400 text-sm sm:text-base md:text-lg flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            © {new Date().getFullYear()} Nibin Joseph. All Rights Reserved. 
            <motion.span 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Made with <FaHeart className="text-red-500 animate-pulse" /> in Kerala, India
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
