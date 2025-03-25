/** @format */

import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import RockGameImg from "../assets/rockpapergame.png";
import WeatherImg from "../assets/weatherWebapp.png";
import CurrencyConvImg from "../assets/currency-convertor.png";
import TicTacGameImg from "../assets/tictacgame.png";

const Projects = () => {
  const Motion = motion.div;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div id="projects">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:ms-20 gap-24">
        <motion.div
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        //   initial={{ opacity: 0, scale: 0 }}
        //   animate={{ opacity: 1, scale: 1 }}
        //   transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img className="rounded-t-lg" src={RockGameImg} alt="" />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Rock Paper Scissor Game
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Rock paper scissor, a classic hand game, is implemented using
              JavaScript. Challenge your friends and see who wins!
            </p>
            <a
              href="https://farqleetahmedsheikh.github.io/Rock-Paper-Scissor/"
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:cursor-pointer"
            >
              View Project
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </motion.div>
        <motion.div
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          ref={ref}
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <img className="rounded-t-lg" src={WeatherImg} alt="" />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Weather Forcast Web App
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A web application that provides real-time weather forecasts for
              any location. Built with React and OpenWeatherMap API, it displays
              current weather conditions, temperature, humidity, and more.
            </p>
            <button
              href="https://farqleetahmedsheikh.github.io/Weather-WebApp/"
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:cursor-pointer"
            >
              View Project
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </motion.div>
        <motion.div
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        //   ref={ref}
        //   initial={{ opacity: 0, scale: 0 }}
        //   animate={inView ? { opacity: 1, scale: 1 } : {}}
        //   transition={{ delay: 0.5, duration: 0.5 }}
        >
          <img className="rounded-t-lg" src={TicTacGameImg} alt="" />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Tic Tac Toe Game
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Tic Tac Toe, a classic two-player game, is implemented using
              JavaScript. Challenge your friends and see who can get three in a
              row first!
            </p>
            <button
              href="https://farqleetahmedsheikh.github.io/Tic-Tac-Toe/"
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:cursor-pointer"
            >
              View Project
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        <motion.div
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        //   ref={ref}
        //   initial={{ opacity: 0, scale: 0 }}
        //   animate={inView ? { opacity: 1, scale: 1 } : {}}
        //   transition={{ delay: 0.5, duration: 0.5 }}
        >
          <img className="rounded-t-lg" src={CurrencyConvImg} alt="" />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Currency Convertor Web App
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A web application that allows users to convert currencies in
              real-time. Built with JavaScript and an external currency API, it
              supports multiple currencies and provides up-to-date exchange
              rates.
            </p>
            <button
              href="https://farqleetahmedsheikh.github.io/Currency-Convertor/"
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:cursor-pointer"
            >
              View Project
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
