/** @format */

import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import {
  FaMapMarkedAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const Motion = motion;
  return (
    <div className="mt-20">
      <div
        id="contact"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12"
      >
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl text-white font-bold"
        >
          Let's discuss your <span className="text-red-500">projects</span>
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-400 text-2xl text-center py-6 mt-5"
        >
          Let's create something new, stunning, amazing
        </motion.p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <motion.div
            className="flex items-center space-x-4"
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="p-4 bg-red-500 rounded-full">
              <FaPhone className="text-white w-6 h-6 phoneRotate" />
            </div>
            <div>
              <p className="text-lg font-medium text-red-500">Call Me!</p>
              <p className="text-lg font-medium text-white">+923356028874</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4"
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="p-4 bg-red-500 rounded-full">
              <FaEnvelope className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-medium text-red-500">Email!</p>
              <a
                href="mailto:farqleet.dev@gmail.com"
                className="text-lg font-medium hover:underline text-white hover:text-red-400"
              >
                farqleet.dev@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4"
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="p-4 bg-red-500 rounded-full">
              <FaMapMarkedAlt className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-medium text-red-500">Address</p>
              <p className="text-lg font-medium text-white">
                Islamabad, Pakistan
              </p>
            </div>
          </motion.div>
        </div>
        <motion.form
          className="space-y-4 text-white"
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-red-500 bg-gray-900 p-4 rounded-md w-full focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-red-500 bg-gray-900 p-4 rounded-md w-full focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Number"
              className="border border-red-500 bg-gray-900 p-4 rounded-md w-full focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Budget"
              className="border border-red-500 bg-gray-900 p-4 rounded-md w-full focus:outline-none"
            />
          </div>
          <textarea
            placeholder="Message"
            className="border border-red-500 bg-gray-900 p-4 rounded-md w-full focus:outline-none"
          ></textarea>
          <motion.button
            ref={ref}
            whileHover={{ scale: 1.05 }}
            className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition duration-200 hover:cursor-pointer"
            type="submit"
          >
            Submit Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
