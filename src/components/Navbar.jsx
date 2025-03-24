/** @format */

import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "motion/react";
import { Link } from "react-scroll";

const Navbar = () => {
  const Motion = motion.div;
  const variations = {
    open: { clipPath: "circle(1000px at 43px 43px)" },
    transition: {
      type: "spring",
      duration: 1,
      stiffness: 20,
    },
    closed: {
      clipPath: "circle(25px at 43px 37px)",
      transition: { type: "spring", duration: 1 },
    },
  };
  const [menu, setMenu] = useState(false);
  const NavItems = [
    { text: "Home", to: "home" },
    { text: "About", to: "about" },
    { text: "Projects", to: "projects" },
    { text: "Contact", to: "contact" },
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-white"
      >
        <div className="container mx-auto justify-between py-4 hidden md:flex items-center ">
          <div className="text-2xl font-bold flex items-center space-x-2">
            <span className="md:ms-4">Farqleet</span>
            <span className="text-red-500">Ahmed</span>
          </div>
          <div>
            <ul className="hidden md:flex space-x-4 list-none justify-between items-center text-base lg:text-lg">
              {NavItems.map(({ text, to }, index) => (
                <li
                  className="hover:text-red-400 cursor-pointer hover:underline duration-200"
                  key={index}
                >
                  <Link to={to} smooth={true} offset={-70} duration={500}>
                    {" "}
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button className="bg-red-400 hover:bg-red-500 cursor-pointer duration-200 text-white px-4 py-2 bold rounded-full md:me-4">
            Download CV
          </button>
        </div>
      </motion.div>

      <div className="flex md:hidden justify-between ">
        <motion.div animate={menu ? "open" : "closed"}>
          <motion.div
            variants={variations}
            className="bg-white h-screen w-2/3 fixed text-black z-10"
          >
            <div
              className="px-7 py-6 cursor-pointer"
              onClick={() => setMenu(!menu)}
            >
              {menu ? (
                <IoCloseSharp className="text-3xl" />
              ) : (
                <IoMenu className="text-3xl" />
              )}
            </div>
            {menu && (
              <div className="flex flex-col justify-center items-center">
                <ul className="space-y-6 list-none text-lg">
                  {NavItems.map(({ text, to }, index) => (
                    <li
                      className="hover:text-red-400 cursor-pointer duration-200"
                      key={index}
                    >
                      <Link to={to} smooth={true} offset={-70} duration={500}>
                        {" "}
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>

                <button className="bg-red-500 hover:bg-red-600 text-white text-balance px-4 py-2 bold rounded-full mt-6">
                  Download CV
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
        <div className=" items-center text-lg font-bold space-x-2 gap-6 py-6 px-3">
          <span className=" text-white">Farqleet</span>
          <span className=" text-red-500">Ahmed</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
