"use client";
import React from "react";

const Carousel = () => {
  return (
    <div>
      <div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://www.intract.io/assets/intract-academy-background-5547a705.png"
            alt=""
          />
        </div>
        <div className="absolute top-20 left-0 w-full h-auto flex flex-col items-center text-white font-bold mt-60">
          <div className="bg-gray-500 md:mt-[-3rem] lg:mt-[-3rem] mt-[-10rem]">
            <img
              className="md:h-20 h-10 lg:h-20 bg-transparent"
              src="https://www.intract.io/assets/academy-animated-logo-57b2ae61.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
