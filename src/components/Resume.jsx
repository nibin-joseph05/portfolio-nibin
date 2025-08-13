import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaSchool, FaRocket, FaBrain, FaCode } from "react-icons/fa";

const Resume = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const educationData = [
    {
      title: "Master's Degree 🎓",
      duration: "July 2024 - Present",
      college: "Marian College Kuttikkanam",
      description: "Currently pursuing Master of Computer Application (MCA) at Marian College Kuttikkanam, Idukki, Kerala, India.",
      icon: FaGraduationCap,
      status: "In Progress",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Bachelor's Degree 🎓",
      duration: "July 2021 - 2024",
      college: "St Antony's College Peruvanthanam",
      description: "Completed Bachelor Of Computer Application (BCA) at St Antony's College Peruvanthanam, Idukki, Kerala, India.",
      icon: FaUniversity,
      status: "Completed",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Schooling 🏫",
      duration: "2009 - 2021",
      college: "St Joseph Higher Secondary School Peruvanthanam",
      description: "Completed my schooling at St Joseph Higher Secondary School Peruvanthanam, Idukki, Kerala, India.",
      icon: FaSchool,
      status: "Completed",
      color: "from-purple-500 to-pink-600"
    },
  ];

  return (
    <section id="resume" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Title */}
        <motion.h2 
          className="text-6xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Education
          </span>
        </motion.h2>

        <motion.p
          className="text-2xl text-slate-300 text-center mb-20 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          My academic journey and qualifications
        </motion.p>

        {/* Education Timeline */}
        <div className="relative">
          {/* Enhanced Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-cyan-500 via-blue-600 to-purple-600 rounded-full shadow-2xl shadow-cyan-500/50"></div>

          {/* Education Items */}
          <div className="space-y-16">
            {educationData.map((item, index) => (
              <motion.div 
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                {/* Enhanced Timeline Dot */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-4 border-slate-900 z-10 shadow-2xl shadow-cyan-500/50"
                  whileHover={{ scale: 1.3 }}
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 rgba(6, 182, 212, 0.4)",
                      "0 0 0 20px rgba(6, 182, 212, 0)",
                      "0 0 0 0 rgba(6, 182, 212, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-10' : 'pl-10'}`}>
                  <motion.div 
                    className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.25)"
                    }}
                    style={{ y }}
                  >
                    {/* Enhanced Status Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <item.icon className="text-2xl text-white" />
                        </motion.div>
                        <h3 className="text-3xl font-semibold text-cyan-400">{item.title}</h3>
                      </div>
                      <motion.span 
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          item.status === 'Completed' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        }`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {item.status}
                      </motion.span>
                    </div>

                    <div className="space-y-4">
                      <motion.p 
                        className="text-cyan-300 font-medium text-lg"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        {item.duration}
                      </motion.p>
                      <motion.p 
                        className="text-slate-200 font-semibold text-xl"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {item.college}
                      </motion.p>
                      <motion.p 
                        className="text-slate-300 leading-relaxed"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        {item.description}
                      </motion.p>
                    </div>

                    {/* Gradient Border Effect */}
                    <motion.div 
                      className="absolute inset-0 border-2 border-transparent rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Additional Info */}
        <motion.div
          className="mt-20 bg-slate-800/30 backdrop-blur-xl rounded-3xl p-10 border border-slate-700/50 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.25)" }}
        >
          <h3 className="text-3xl font-semibold text-cyan-400 mb-8 text-center flex items-center justify-center gap-3">
            <FaBrain className="text-3xl" />
            Academic Highlights
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="text-center p-6 bg-slate-700/30 rounded-2xl border border-slate-600/50"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaRocket className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-200 mb-3">Current Focus</h4>
              <p className="text-slate-300">Advanced Machine Learning, Full-Stack Development, and Cloud Technologies</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 bg-slate-700/30 rounded-2xl border border-slate-600/50"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaCode className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-200 mb-3">Research Interests</h4>
              <p className="text-slate-300">NLP, AI/ML Applications, Web Development, and Software Engineering</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
