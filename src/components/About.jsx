/** @format */

import React from "react";
import AboutImg from "../assets/aboutME.png";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const Motion = motion.div;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div id="about" className="text-white py-16">
      <div className="container mx-auto text-center px-4">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-8 "
        >
          About Me
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-3xl font-bold mb-8 text-red-500"
        >
          🚀 Let’s craft something amazing together!
        </motion.p>
        <motion.div
          ref={ref}
          className="flex flex-col md:flex-row justify-center items-center"
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.div
            className="flex justify-center mb-5"
            ref={ref}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <img
              src={AboutImg}
              alt="About Img"
              className="w-2/3 sm:w-1/2 md:w-10/12"
            />
          </motion.div>
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="md:w-1/2 text-gray-400 text-lg md:me-16 lg:text-2xl"
          >
            I’m Farqleet Ahmed Sheikh, a Front-End Developer passionate about
            creating sleek, interactive, and user-friendly web experiences. With
            expertise in HTML, CSS, JavaScript, and React, I bring designs to
            life with clean and efficient code. I’m always exploring new
            technologies to enhance user experience and build better digital
            solutions.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
