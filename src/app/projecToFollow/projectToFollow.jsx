import React from "react";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const ProjectToFollow = () => {
  return (
    <div className="text-white mt-20">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-300">
          Top Crypto Creators and Projects to Follow
        </h1>
        <p className="text-sm text-gray-400">
          Answers to your crypto doubts, straight from the experts
        </p>
      </div>

      <div className="flex m-10 gap-6">
        <div className="cursor-pointer">
          <div className="relative group">
            <div className="text-gray-400 text-xl absolute top-0 text-right px-5 z-2 py-5 w-full">
              <SlideshowOutlinedIcon className="border-2 border-gray-600 p-1 h-10 w-10 rounded-full bg-black" />
            </div>
            <img
              className="w-80 rounded-2xl"
              src="https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png"
              alt=""
            />
            <div className="text-gray-50 text-xl absolute bottom-0 px-5 left-0 z-2 bg-black font-semibold bg-opacity-30 py-5 w-full">
              How to plan your retirement with crypto?
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl">
              <PlayArrowIcon className="border-2 border-gray-800 p-1 text-gray-400 bg-gray-600 h-16 w-16 rounded-full" />
            </div>
          </div>
        </div>
        <div className="cursor-pointer">
          <div className="relative group">
            <div className="text-gray-400 text-xl absolute px-5 top-0 text-right z-2 py-5 w-full">
              <SlideshowOutlinedIcon className="border-2 border-gray-600 p-1 h-10 w-10 rounded-full bg-black" />
            </div>
            <img
              className="w-80 rounded-2xl"
              src="https://static.highongrowth.xyz/enterprise/undefined/58615645160e4aab89da48d9f62cedf8.png"
              alt=""
            />
            <div className="text-gray-50 text-xl absolute bottom-0 px-5 left-0 z-2 bg-black font-semibold bg-opacity-30 py-5 w-full">
              Why are there limited Bitcoin?
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl">
              <PlayArrowIcon className="border-2 border-gray-800 p-1 text-gray-400 bg-gray-600 h-16 w-16 rounded-full" />
            </div>
          </div>
        </div>
        <div className="cursor-pointer">
          <div className="relative group">
            <div className="text-gray-400 text-xl absolute px-5 top-0 text-right z-2 py-5 w-full">
              <SlideshowOutlinedIcon className="border-2 border-gray-600 p-1 h-10 w-10 rounded-full bg-black" />
            </div>
            <img
              className="w-80 rounded-2xl"
              src="https://static.highongrowth.xyz/enterprise/undefined/493018d95dd24096a4badafe9390eea7.png"
              alt=""
            />
            <div className="text-gray-50 text-xl absolute px-5 bottom-0 left-0 z-2 bg-black font-semibold bg-opacity-30 py-5 w-full">
              How does Uniswap actually work?
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl">
              <PlayArrowIcon className="border-2 border-gray-800 p-1 text-gray-400 bg-gray-600 h-16 w-16 rounded-full" />
            </div>
          </div>
        </div>
        <div className="cursor-pointer">
          <div className="relative group">
            <div className="text-gray-400 text-xl absolute px-5 top-0 text-right z-2 py-5 w-full">
              <SlideshowOutlinedIcon className="border-2 border-gray-600 p-1 h-10 w-10 rounded-full bg-black" />
            </div>
            <img
              className="w-80 rounded-2xl"
              src="https://static.highongrowth.xyz/enterprise/undefined/a9e03cd73a494e09864475c36318c03b.png"
              alt=""
            />
            <div className="text-gray-50 text-xl absolute px-5 bottom-0 left-0 z-2 bg-black font-semibold bg-opacity-30 py-5 w-full">
              How to spot crypto projects to invest in?
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl">
              <PlayArrowIcon className="border-2 border-gray-800 p-1 text-gray-400 bg-gray-600 h-16 w-16 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectToFollow;
