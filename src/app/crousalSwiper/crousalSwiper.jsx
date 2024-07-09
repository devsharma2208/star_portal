"use client";
import React, { useState } from "react";

const images = [
  {
    iconName: "Base",
    image:
      "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/ce207cd4fdbe49c1afc60981212ddda7.png",
  },
  {
    iconName: "OP Mainnet",
    image:
      "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/56d18896939849568372724f6e46a1d2.png",
  },
  {
    iconName: "OP Mainnet",
    image:
      "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4855cfbb35f04cf6b673fa618c2e3860.png",
  },
  {
    iconName: "Ethereum",
    image:
      "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/090b75a96c0b49e1b74ef9ca02d1e8a2.png",
  },
];

const CarouselSwiper = () => {
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
    <div className="relative w-[48rem] overflow-hidden text-white">
      <div
        className="flex gap-2 transition-transform duration-500 text-gray-400 cursor-pointer"
        style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-1/3 flex-shrink-0 p-2 bg-gray-600 rounded-2xl"
          >
            <img
              className="w-80 h-auto"
              src={src.image}
              alt={`Image ${index + 1}`}
            />
            <p className="pt-5">{src.iconName}</p>
            <h1 className="text-bold border-b border-gray-400 pb-2">
              $DEGEN Meets Orbit
            </h1>
            <div className="py-5">
              <button className="py-2 px-4 bg-gray-800 rounded-3xl mr-4">
                4 task
              </button>
              <button className="py-2 px-4 bg-gray-800 rounded-3xl ">
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
