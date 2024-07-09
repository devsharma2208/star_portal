import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CarouselSwiper from "../crousalSwiper/crousalSwiper";
const Narratives = () => {
  return (
    <div>
      <div className="text-xl px-20">
        <h1 className="text-white">Popular Narratives</h1>
      </div>
      <div className="flex flex-wrap items-center bg-gray-800 md:m-10 lg:m-10 mt-5 p-2 rounded-3xl">
        <div>
          <div className="flex bg-gray-900 md:w-[380px] lg:w-[380px] h-[27rem] w-auto rounded-xl relative z-10 border-b border-gray-600 hover:bg-gray-700 cursor-pointer">
            <div className=" px-10 py-10">
              <h1 className="text-2xl text-white">Exploring Farcaster</h1>
              <p className="text-sm text-gray-500 py-5 font-semibold">
                Farcaster is a decentralized social network built on OP,
                enabling users to own their identity and d...
              </p>
              <p className="text-gray-500">
                ---------------------------------------------------
              </p>

              <button className="px-4 py-2 text-white text-sm  mt-8 md:text-base lg:text-sm mt-2 bg-gray-700 font-semibold md:rounded-2xl rounded-xl">
                390 XPs
              </button>
              <button className="md:px-[60px]  text-white lg:px-[60px] px-6 py-2 mt-20 ml-8 md:text-normal text-sm bg-blue-700 rounded-xl flex items-center gap-2">
                Start here <ArrowRightAltIcon />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="py-10 px-10 mt-10 flex items-center w-full rounded-3xl">
            <CarouselSwiper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Narratives;
