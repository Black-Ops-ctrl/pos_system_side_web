/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bannerOne from "../../assets/png/img_banner_one.webp";
import bannerTwo from "../../assets/png/img_banner_two.webp";

const slides = [bannerOne, bannerTwo];

const Slider = ({ width = '100%' }) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [paused]);

  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);

  return (
    <div
      className="relative w-full overflow-hidden mt-4 sm:mt-8 md:mt-10 lg:mt-12 block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Responsive height with proper image fit */}
      <div className="w-full h-[20vh] sm:h-[20vh] md:h-[50vh] lg:h-[70vh]">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={slides[current]}
            alt="POS Banner"
            className="w-full h-full object-contain rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full border border-greyColor cursor-pointer transition-all ${
              current === index ? "bg-primary scale-125" : "bg-primary/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;