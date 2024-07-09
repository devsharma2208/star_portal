"use client"
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CarouselSwiper from "../crousalSwiper/crousalSwiper";
const Narratives = () => {
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
  return (
    <div>
      <div className="text-xl px-20">
        <h1 className="text-white">Popular Narratives</h1>
      </div>
      <div className="flex flex-wrap items-center bg-gray-800 md:m-10 lg:m-10 mt-5 p-2 rounded-3xl">
        <div>
          <div className="flex bg-gray-900 md:w-[380px] lg:w-[380px] h-[27rem] w-auto rounded-xl relative z-10 border-b border-gray-600 hover:bg-gray-700 cursor-pointer">
            <div className=" px-10 py-10">
              <h1 className="md:text-2xl lg:text-2xl text-normal text-white">
                Exploring Farcaster
              </h1>
              <p className="text-sm text-gray-500 py-5 font-semibold">
                Farcaster is a decentralized social network built on OP,
                enabling users to own their identity and d...
              </p>
              <p className="text-gray-500">
                ----------------------------------
              </p>

              <button className="px-4 py-2 text-white text-sm  mt-8 md:text-base lg:text-sm mt-2 bg-gray-700 font-semibold md:rounded-2xl rounded-xl">
                390 XPs
              </button>
              <div className="flex w-full justify-center">
                <button className="md:px-[60px] text-white lg:px-[60px] px-6 py-2 mt-20 md:text-normal text-sm bg-blue-700 rounded-xl flex items-center gap-2">
                  Start here <ArrowRightAltIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="py-10 md:px-10 mt-10 flex items-center w-full rounded-3xl overflow-hidden">
            <CarouselSwiper images={images} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Narratives;
