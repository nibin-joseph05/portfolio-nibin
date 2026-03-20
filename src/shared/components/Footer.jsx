import React from "react";
import { motion } from "framer-motion";


export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10 sm:py-12 md:py-16 relative overflow-hidden">
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
          className="absolute bottom-10 sm:bottom-10 right-10 sm:right-10 w-56 h-56 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
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
      <div className="border-t-2 border-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 w-full mb-8 sm:mb-12 relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 opacity-50"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10 flex flex-col items-center">
        {/* Simplified Social Links */}
        <motion.div 
          className="w-full max-w-2xl px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {[
              { href: "https://linktr.ee/nibin__", label: "Linktree" },
              { href: "https://www.linkedin.com/in/nibin-joseph05/", label: "LinkedIn" },
              { href: "https://github.com/nibin-joseph05", label: "GitHub" },
              { href: "https://www.instagram.com/_.n_.i_.b_.i_.n", label: "Instagram" },
              { href: "mailto:nibin.joseph.career@gmail.com", label: "Email" }
            ].map((social, index) => (
              <motion.a 
                key={index}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 bg-slate-900/50 hover:bg-slate-700/50 rounded-xl border border-slate-700 text-center text-[9px] font-bold uppercase tracking-widest text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all font-sans min-w-[100px]"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(6, 182, 212, 0.15)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {social.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Minimalist Bottom Section */}
        <motion.div 
          className="mt-12 sm:mt-16 pt-8 border-t border-slate-800/50 w-full text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.3em] font-sans">
            Nibin Joseph • Last Updated: March 2026
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
