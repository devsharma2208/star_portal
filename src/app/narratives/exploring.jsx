"use client"
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CarouselSwiper from "../crousalSwiper/crousalSwiper";
const Exploring = () => {
  const images = [
    {
      iconName: "Base",
      image:
        "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/125ffff4430441ebb904badccf01e89a.png",
    },
    {
      iconName: "OP Mainnet",
      image:
        "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/3407575394924b6c8331b53a3842f3d3.png",
    },
    {
      iconName: "OP Mainnet",
      image:
        "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/39b34dbae97d402bb24eb54b372bde1c.png",
    },
  ];
  return (
    <div>
      <div className="flex flex-wrap items-center bg-gray-800 md:m-10 lg:m-10 mt-5 p-2 rounded-3xl">
        <div>
          <div className="flex bg-gray-900 md:w-[380px] lg:w-[380px] h-[27rem] w-auto rounded-xl relative z-10 border-b border-gray-600 hover:bg-gray-700 cursor-pointer">
            <div className=" px-10 py-10">
              <h1 className="md:text-2xl lg:text-2xl text-normal text-white">
                Exploring Lens Protocol
              </h1>
              <p className="text-sm text-gray-500 py-5 font-semibold">
                Lens Protocol is a decentralized social graph that empowers
                developers to create social media applications on the
                blockchain. It ensures data ownership,...
              </p>
              <p className="text-gray-500">
                ---------------------------------------------------
              </p>

              <button className="px-4 py-2 text-white text-sm  mt-8 md:text-base lg:text-sm mt-2 bg-gray-700 font-semibold md:rounded-2xl rounded-xl">
                70 XPs
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
          <div className="py-10 md:px-10 mt-10 flex items-center w-full rounded-3xl">
            <CarouselSwiper images={images} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exploring;
