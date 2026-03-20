import React from "react";
import { motion } from "framer-motion";


const ArchitectureNode = ({ title, description, color }) => (
  <motion.div
    className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 flex flex-col items-center text-center w-full max-w-[280px]"
    whileHover={{ y: -5, borderColor: "rgba(6, 182, 212, 0.5)" }}
    transition={{ duration: 0.3 }}
  >
    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${color} mb-4 shadow-lg`}>
    </div>
    <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const Connector = () => (
  <div className="hidden lg:flex items-center justify-center w-12 h-full">
    <div className="w-0.5 h-12 bg-gradient-to-b from-cyan-500/50 to-blue-500/50"></div>
  </div>
);

const HorizontalConnector = () => (
  <div className="hidden lg:flex items-center justify-center flex-1">
    <motion.div 
      className="h-0.5 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 w-full"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    />
  </div>
);

export default function SystemArchitecture() {
  return (
    <section id="architecture" className="py-20 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600">
              System Architecture
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A high-level overview of the AURA platform's distributed and secure ecosystem.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-8">
          {/* Top Layer: Clients */}
          <div className="flex flex-wrap justify-center gap-8 w-full">
            <ArchitectureNode 
              title="Mobile Application"
              description="Cross-platform Flutter & Native Kotlin app for SOS, health tracking, and community engagement."
              color="from-cyan-500 to-blue-600"
            />
            <ArchitectureNode 
              title="Admin Dashboard"
              description="Next.js powered command center for emergency management and system monitoring."
              color="from-blue-600 to-indigo-700"
            />
          </div>

          <div className="w-1 h-12 bg-gradient-to-b from-cyan-500/50 to-blue-500/50 hidden lg:block"></div>

          {/* Middle Layer: API & Logic */}
          <div className="flex flex-col items-center gap-4 w-full">
            <ArchitectureNode 
              title="Spring Boot Backend"
              description="High-performance REST API & WebSocket server handling real-time SOS alerts and data orchestrations."
              color="from-blue-600 to-cyan-700"
            />
          </div>

          <div className="w-1 h-12 bg-gradient-to-b from-blue-500/50 to-cyan-500/50 hidden lg:block"></div>

          {/* Bottom Layer: Data & Blockchain */}
          <div className="flex flex-wrap justify-center gap-8 w-full">
            <ArchitectureNode 
              title="PostgreSQL"
              description="Secure relational storage for user profiles, wellness logs, and application state."
              color="from-blue-600 to-indigo-700"
            />
            <ArchitectureNode 
              title="Blockchain Layer"
              description="Go-based implementation for immutable event logging and verified safety records."
              color="from-cyan-600 to-blue-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
