"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import GlareHover from "../../blocks/Animations/GlareHover/GlareHover";
import FlowingMenu from "@/components/FlowingMenu/FlowingMenu";

const Hero = () => {
  const images = ["/b1.png", "/b2.png", "/b3.png"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const menuItems = [
    {
      text: "Event Gallery Now Live",
      link: "/",
      image: "/",
    },
  ];

  // Background Slideshow Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Countdown Timer Logic
  useEffect(() => {
    const targetDate = new Date("2026-12-18T00:00:00");
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => time.toString().padStart(2, "0");

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[510px] overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex]}
                alt="Conference Background"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Centered Card */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.25}
            glareAngle={-30}
            glareSize={250}
            transitionDuration={800}
            playOnce={false}
            className="rounded-2xl max-w-xl w-full"
          >
            <div className="bg-black/20 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-4 md:p-5 w-full text-center transition-all duration-300 hover:scale-[1.02]">
              {/* Title */}
              <div className="mb-4">
                <h1 className="text-xl md:text-3xl font-bold leading-tight mb-1 text-white">
                  3<sup className="text-sm md:text-lg">rd</sup> International
                  Conference on Recent Trends in
                </h1>
                <h2 className="text-lg md:text-2xl font-bold text-blue-400 mb-1">
                  Microelectronics, Automation,
                </h2>
                <h2 className="text-lg md:text-2xl font-bold text-blue-400 mb-2">
                  Computing and Communications Systems
                </h2>
                <h3 className="text-base md:text-xl font-bold text-gray-200">
                  (ICMACC 2026)
                </h3>
              </div>

              {/* Date and Location */}
              <div className="mb-4">
                <p className="text-sm md:text-lg font-semibold text-gray-200">
                  <span className="text-red-400">
                    18<sup>th</sup>
                  </span>
                  <span className="mx-1">-</span>
                  <span className="text-red-400">
                    21<sup>st</sup>
                  </span>
                  <span className="ml-1 text-red-400">
                    December 2026, Hyderabad
                  </span>
                </p>
              </div>

              {/* Countdown Timer */}
              <div className="flex justify-center space-x-3 md:space-x-4">
                {["Days", "Hrs", "Mins", "Secs"].map((label, index) => {
                  const values = [
                    timeLeft.days,
                    timeLeft.hours,
                    timeLeft.minutes,
                    timeLeft.seconds,
                  ];
                  return (
                    <div key={label} className="text-center">
                      <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 md:p-3 min-w-[55px] md:min-w-[70px] border border-white/20 shadow-md">
                        <div className="text-lg md:text-xl font-bold text-white">
                          {formatTime(values[index])}
                        </div>
                        <div className="text-[10px] md:text-xs text-gray-300 mt-1">
                          {label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </GlareHover>
        </div>
      </section>

      {/* Flowing Menu Outside Hero */}
    </>
  );
};

export default Hero;
