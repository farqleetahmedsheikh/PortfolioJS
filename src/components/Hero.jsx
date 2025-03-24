/** @format */

import React from "react";
import { motion } from "motion/react";
import HeroPic from "../assets/hero.png";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const Motion = motion.div;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div id="home" className="text-white py-10">
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        src={HeroPic}
        alt="Hero-Pic"
        className="mx-auto w-2/3 md:w-1/3 lg:w-1/4"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-3xl lg:text-5xl flex flex-col gap-4 font-bold mb-4"
        >
          Your Vision, My Code
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-red-500"
          >
            Building Digital Experiences That Captivate.
          </motion.span>
        </motion.h1>

        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-2xl text-gray-400"
        >
          I am a full-stack developer who specializes in building web <br />
          applications that are fast, responsive, and accessible to all users.
        </motion.p>

        <motion.button
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-red-400 hover:bg-red-500 text-white text-balance px-4 py-2 bold rounded-full mt-6 hover:cursor-pointer"
        >
          Hire Me!
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
