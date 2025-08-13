import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

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
      link: "mailto:nibin.joseph.career@gmail.com"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Kerala, India",
      link: null
    },
    {
      icon: FaPhone,
      title: "Available for",
      value: "Freelance & Full-time",
      link: null
    }
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-slate-900 text-white"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Get In Touch
          </span>
        </motion.h2>
        
        <motion.p
          className="text-xl text-slate-300 text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Have a project in mind? Let's collaborate and bring your ideas to life! 💬
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Let's Connect</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <info.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="text-slate-200 font-semibold">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-cyan-300 hover:text-cyan-200 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-300">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Quick Info</h3>
              <div className="space-y-3 text-slate-300">
                <p><strong>🎯 Available for:</strong> Full-time positions, Freelance projects, Collaborations</p>
                <p><strong>⏰ Response time:</strong> Within 24 hours</p>
                <p><strong>🌍 Timezone:</strong> IST (UTC+5:30)</p>
                <p><strong>💼 Preferred:</strong> Remote work, Hybrid opportunities</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Send Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {[
                { label: "Name", type: "text", name: "name" },
                { label: "Email", type: "email", name: "email" },
                { label: "Subject", type: "text", name: "subject" },
              ].map(({ label, type, name }) => (
                <div key={name} className="relative">
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="peer w-full bg-slate-700/50 border border-slate-600 rounded-lg py-4 px-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder={label}
                    required
                  />
                  <label
                    className="absolute left-4 top-4 text-slate-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-400"
                  >
                    {label}
                  </label>
                </div>
              ))}
              
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="peer w-full bg-slate-700/50 border border-slate-600 rounded-lg py-4 px-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all h-32 resize-none"
                  placeholder="Message"
                  required
                ></textarea>
                <label
                  className="absolute left-4 top-4 text-slate-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-400"
                >
                  Message
                </label>
              </div>
              
              <motion.button
                type="submit"
                className="w-full py-4 text-lg font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane />
                Send Message
              </motion.button>
              
              {status && (
                <motion.p
                  className={`text-center mt-4 p-3 rounded-lg ${
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
