import React from "react";

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
      <div>
        <div className="relative">
          <img
            className="w-80"
            src="https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png"
            alt=""
          />
          <div className="text-gray-200 absolute bottom-0 left-2 z-2 bg-black bg-opacity-50 px-2 py-1">
            How to plan your retirement with crypto?
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectToFollow;
