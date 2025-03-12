import React, { useState, useEffect } from "react";


import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Animated Title */}
        <motion.h2
          className="text-5xl font-bold text-center text-pink-400 mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact
        </motion.h2>

        <p className="text-lg text-gray-300 text-center mb-12">
          I'd love to hear from you. Feel free to contact me!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            className="p-8 bg-gray-800/80 backdrop-blur-lg border border-gray-700 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <form className="space-y-6">
              {["Name", "Email", "Subject"].map((label, index) => (
                <div key={index} className="relative">
                  <input
                    type={label === "Email" ? "email" : "text"}
                    id={label.toLowerCase()}
                    className="peer w-full bg-transparent border border-gray-600 rounded-md py-3 px-4 text-white placeholder-transparent focus:outline-none focus:border-pink-400"
                    placeholder={label}
                    required
                  />
                  <label
                    htmlFor={label.toLowerCase()}
                    className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-sm peer-focus:text-pink-400"
                  >
                    {label}
                  </label>
                </div>
              ))}
              <div className="relative">
                <textarea
                  id="message"
                  className="peer w-full bg-transparent border border-gray-600 rounded-md py-3 px-4 text-white placeholder-transparent focus:outline-none focus:border-pink-400 h-32 resize-none"
                  placeholder="Message"
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-sm peer-focus:text-pink-400"
                >
                  Message
                </label>
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 bg-pink-600 text-lg font-semibold rounded-lg hover:bg-pink-700 transition-all"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                Submit
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="p-8 bg-gray-800/80 backdrop-blur-lg border border-gray-700 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl text-pink-400 font-semibold mb-6">
              Where to Find Me
            </h3>
            <div className="space-y-4 text-lg text-gray-300">
              <motion.p
                className="flex items-center space-x-2 hover:text-pink-400 transition"
                whileHover={{ scale: 1.05 }}
              >
                📍 Murinjapuzha, Kuttikanam, 685532, Idukki, Kerala, India
              </motion.p>
              <motion.p
                className="flex items-center space-x-2 hover:text-pink-400 transition"
                whileHover={{ scale: 1.05 }}
              >
                📧 <span className="text-white">nibinjoseph2019@gmail.com</span>
              </motion.p>
              <motion.p
                className="flex items-center space-x-2 hover:text-pink-400 transition"
                whileHover={{ scale: 1.05 }}
              >
                📧 <span className="text-white">nibinjoseph2003@gmail.com</span>
              </motion.p>
              <motion.p
                className="flex items-center space-x-2 hover:text-pink-400 transition"
                whileHover={{ scale: 1.05 }}
              >
                📞 Telegram (Nibin)
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
