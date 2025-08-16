import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane, FaRocket, FaBrain, FaCode, FaClock, FaGlobe } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
  
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  
    if (!serviceID || !templateID || !publicKey) {
      console.error("EmailJS environment variables are missing.");
      setStatus("Configuration error. Please check your API keys.");
      return;
    }
  
    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Email sending error:", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "nibin.joseph.career@gmail.com",
      link: "mailto:nibin.joseph.career@gmail.com",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Kerala, India",
      link: null,
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: FaPhone,
      title: "Available for",
      value: "Freelance & Full-time",
      link: null,
      color: "from-purple-500 to-pink-600"
    }
  ];

  const quickInfo = [
    { icon: FaRocket, label: "Available for", value: "Full-time positions, Freelance projects, Collaborations", color: "from-cyan-500 to-blue-600" },
    { icon: FaClock, label: "Response time", value: "Within 24 hours", color: "from-green-500 to-emerald-600" },
    { icon: FaGlobe, label: "Timezone", value: "IST (UTC+5:30)", color: "from-purple-500 to-pink-600" },
    { icon: FaCode, label: "Preferred", value: "Remote work, Hybrid opportunities", color: "from-orange-500 to-red-600" }
  ];

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden"
    >
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Get In Touch
          </span>
        </motion.h2>
        
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-slate-300 text-center mb-12 sm:mb-16 md:mb-20 max-w-4xl sm:max-w-5xl mx-auto px-2 sm:px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have a project in mind? Let's collaborate and bring your ideas to life! 💬
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-slate-800/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-700/50 shadow-2xl"
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <FaRocket className="text-2xl sm:text-3xl" />
                Let's Connect
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-700/30 hover:bg-slate-700/50 transition-colors"
                    whileHover={{ x: 10, scale: 1.02 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r ${info.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <info.icon className="text-lg sm:text-xl md:text-2xl text-white" />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-slate-200 font-semibold text-sm sm:text-base md:text-lg">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-cyan-300 hover:text-cyan-200 transition-colors text-sm sm:text-base md:text-lg break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-300 text-sm sm:text-base md:text-lg">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Quick Info */}
            <motion.div 
              className="bg-slate-800/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-700/50 shadow-2xl"
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <FaBrain className="text-2xl sm:text-3xl" />
                Quick Info
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {quickInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-colors"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${item.color} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <item.icon className="text-white text-sm sm:text-base" />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <p className="text-slate-300 text-xs sm:text-sm">{item.label}</p>
                      <p className="text-white font-medium text-sm sm:text-base">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            className="bg-slate-800/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-700/50 shadow-2xl"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.25)" }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
              <FaCode className="text-2xl sm:text-3xl" />
              Send Message
            </h3>
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              {[
                { label: "Name", type: "text", name: "name" },
                { label: "Email", type: "email", name: "email" },
                { label: "Subject", type: "text", name: "subject" },
              ].map(({ label, type, name }, index) => (
                <motion.div 
                  key={name} 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="peer w-full bg-slate-700/50 border border-slate-600 rounded-lg sm:rounded-xl py-3 sm:py-4 md:py-5 px-3 sm:px-4 md:px-5 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all backdrop-blur-sm text-sm sm:text-base"
                    placeholder={label}
                    required
                  />
                  <label
                    className="absolute left-3 sm:left-4 md:left-5 top-3 sm:top-4 md:top-5 text-slate-400 text-xs sm:text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-focus:top-1 peer-focus:left-3 peer-focus:text-xs peer-focus:text-cyan-400 sm:peer-placeholder-shown:top-4 sm:peer-placeholder-shown:left-4 sm:peer-focus:top-2 sm:peer-focus:left-4 md:peer-placeholder-shown:top-5 md:peer-placeholder-shown:left-5 md:peer-focus:top-3 md:peer-focus:left-5"
                  >
                    {label}
                  </label>
                </motion.div>
              ))}
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="peer w-full bg-slate-700/50 border border-slate-600 rounded-lg sm:rounded-xl py-3 sm:py-4 md:py-5 px-3 sm:px-4 md:px-5 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all h-32 sm:h-40 resize-none backdrop-blur-sm text-sm sm:text-base"
                  placeholder="Message"
                  required
                ></textarea>
                <label
                  className="absolute left-3 sm:left-4 md:left-5 top-3 sm:top-4 md:top-5 text-slate-400 text-xs sm:text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-focus:top-1 peer-focus:left-3 peer-focus:text-xs peer-focus:text-cyan-400 sm:peer-placeholder-shown:top-4 sm:peer-placeholder-shown:left-4 sm:peer-focus:top-2 sm:peer-focus:left-4 md:peer-placeholder-shown:top-5 md:peer-placeholder-shown:left-5 md:peer-focus:top-3 md:peer-focus:left-5"
                >
                  Message
                </label>
              </motion.div>
              
              <motion.button
                type="submit"
                className="w-full py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-semibold rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center gap-2 sm:gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <FaPaperPlane className="text-base sm:text-lg md:text-xl" />
                Send Message
              </motion.button>
              
              {status && (
                <motion.p
                  className={`text-center mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg font-medium ${
                    status.includes("successfully") 
                      ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                      : status.includes("error") || status.includes("Failed")
                      ? "bg-red-500/20 text-red-400 border border-red-500/30"
                      : "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {status}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
