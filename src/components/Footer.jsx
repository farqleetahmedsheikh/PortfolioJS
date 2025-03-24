/** @format */

import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const Motion = motion;
  return (
    <motion.div
      className="mt-48 flex justify-between items-center p-5 text-white border-t-2 border-red-500"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <p> &copy;2025 All Rights Reserved </p>
      <p> Farqleet Ahmed Sheikh </p>
      <div className="flex justify-center space-x-4 text-white mt-4 ">
        <a className="hover:text-red-500" href="">
          {" "}
          <FaGithub className="w-8 h-8" />
        </a>
        <a href="" className="hover:text-red-500">
          <FaLinkedin className="w-8 h-8" />
        </a>
      </div>
    </motion.div>
  );
};

export default Footer;
