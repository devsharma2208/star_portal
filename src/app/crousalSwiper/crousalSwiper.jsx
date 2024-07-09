"use client";
import React, { useState } from "react";

const CarouselSwiper = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 3 < images.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="relative md:w-[48rem] lg:w-[48rem] w-[20.5rem] overflow-hidden text-white">
      <div
        className="flex gap-2 transition-transform duration-500 text-gray-400 cursor-pointer"
        style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-1/3 flex-shrink-0 p-2 bg-gray-700 rounded-2xl"
          >
            <img
              className="w-80 h-auto"
              src={src.image}
              alt={`Image ${index + 1}`}
            />
            <p className="pt-5">{src.iconName}</p>
            <h1 className="md:font-extrabold lg:font-extrabold font-semibold border-b border-gray-400 pb-2 md:text-normal text-sm text-gray-200">
              $DEGEN Meets Orbit
            </h1>
            <div className="py-5">
              <button className="md:py-2 md:px-4 py-1 px-2 md:text-normal text-sm bg-gray-800 rounded-3xl mr-4">
                4 task
              </button>
              <button className="md:py-2 md:px-4 py-1 px-2 md:text-normal md:mt-0 lg:mt-0 mt-2 text-sm bg-gray-800 rounded-3xl mr-4">
                70 XPs
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 ${
          currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        &lt;
      </button>
      <button
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 ${
          currentIndex + 3 >= images.length
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
        onClick={handleNext}
        disabled={currentIndex + 3 >= images.length}
      >
        &gt;
      </button>
    </div>
  );
};

export default CarouselSwiper;
