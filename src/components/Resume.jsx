import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaSchool } from "react-icons/fa";

const Resume = () => {
  const educationData = [
    {
      title: "Master's Degree 🎓",
      duration: "July 2024 - Present",
      college: "Marian College Kuttikkanam",
      description: "Currently pursuing Master of Computer Application (MCA) at Marian College Kuttikkanam, Idukki, Kerala, India.",
      icon: FaGraduationCap,
      status: "In Progress"
    },
    {
      title: "Bachelor's Degree 🎓",
      duration: "July 2021 - 2024",
      college: "St Antony's College Peruvanthanam",
      description: "Completed Bachelor Of Computer Application (BCA) at St Antony's College Peruvanthanam, Idukki, Kerala, India.",
      icon: FaUniversity,
      status: "Completed"
    },
    {
      title: "Schooling 🏫",
      duration: "2009 - 2021",
      college: "St Joseph Higher Secondary School Peruvanthanam",
      description: "Completed my schooling at St Joseph Higher Secondary School Peruvanthanam, Idukki, Kerala, India.",
      icon: FaSchool,
      status: "Completed"
    },
  ];

  return (
    <section id="resume" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Title */}
        <motion.h2 
          className="text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Education
          </span>
        </motion.h2>

        <motion.p
          className="text-xl text-slate-300 text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          My academic journey and qualifications
        </motion.p>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>

          {/* Education Items */}
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div 
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <motion.div 
                    className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <item.icon className="text-2xl text-cyan-400" />
                        <h3 className="text-2xl font-semibold text-cyan-400">{item.title}</h3>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}>
                        {item.status}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <p className="text-cyan-300 font-medium">{item.duration}</p>
                      <p className="text-slate-200 font-semibold text-lg">{item.college}</p>
                      <p className="text-slate-300 leading-relaxed">{item.description}</p>
                    </div>

                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 border-2 border-transparent rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-center">Academic Highlights</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-4 bg-slate-700/50 rounded-lg">
              <h4 className="text-lg font-semibold text-slate-200 mb-2">Current Focus</h4>
              <p className="text-slate-300">Advanced Machine Learning, Full-Stack Development, and Cloud Technologies</p>
            </div>
            <div className="text-center p-4 bg-slate-700/50 rounded-lg">
              <h4 className="text-lg font-semibold text-slate-200 mb-2">Research Interests</h4>
              <p className="text-slate-300">NLP, AI/ML Applications, Web Development, and Software Engineering</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
