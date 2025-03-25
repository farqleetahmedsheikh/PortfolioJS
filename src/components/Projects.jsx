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

  const items = [
    {
      img: RockGameImg,
      title: "Rock Paper Scissor Game",
      text: "Rock paper scissor, a classic hand game, is implemented using JavaScript. Challenge your friends and see who wins!",
      link: "https://farqleetahmedsheikh.github.io/Rock-Paper-Scissor/",
    },
    {
      img: TicTacGameImg,
      title: "Tic Tac Toe Game",
      text: "Tic Tac Toe, a classic two-player game, is implemented using JavaScript. Challenge your friends and see who can get three in a row first!",
      link: "https://farqleetahmedsheikh.github.io/Tic-Tac-Toe/",
    },
    {
      img: WeatherImg,
      title: "Weather Forcast Web App",
      text: "A web application that provides real-time weather forecasts for any location. Built with React and OpenWeatherMap API, it displays current weather conditions, temperature, humidity, and more.",
      link: "https://farqleetahmedsheikh.github.io/Weather-WebApp/",
    },
    {
      img: CurrencyConvImg,
      title: "Currency Convertor Web App",
      text: "A web application that allows users to convert currencies in real-time. Built with JavaScript and an external currency API, it supports multiple currencies and provides up-to-date exchange rates.",
      link: "https://farqleetahmedsheikh.github.io/Currency-Convertor/",
    },
  ];
  return (
    <div id="projects">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:ms-20 gap-24">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <img className="rounded-t-lg" src={item.img} alt={item.title} />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.text}
              </p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
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
        ))}
      </div>
    </div>
  );
};

export default Projects;
