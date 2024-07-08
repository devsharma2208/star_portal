"use client";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LockIcon from "@mui/icons-material/Lock";
import Reward from "../reward/reward";

const AirDrop = () => {
  return (
    <div>
      <div className="py-[40px] px-20 relative w-full items-start mt-10 flex justify-between">
        <div className="mt-40 flex flex-col items-start justify-center gap-5">
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="w-[3.5rem] h-[3.5rem] rounded-full border border-gray-500 flex items-center justify-center">
              <CheckCircleIcon className="h-[4rem] w-20 text-gray-800" />
            </div>
            <div className="h-[11rem] w-[11rem] bg-black border border-gray-800 rounded-2xl flex items-center justify-center relative">
              <img
                className="h-40 w-40 rounded-2xl"
                src="https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/83bd377d91ff441aa6f7c46a63c88506.png"
                alt="cat"
              />
            </div>
            <div className="w-full text-right">
              <LockIcon className="mt-[-3rem] ml-[-1.9rem] z-20 absolute border border-gray-600 p-2 h-10 w-10 rounded-full bg-gray-800 text-gray-400" />
            </div>
          </div>
          <div className="flex flex-col font-semibold items-start gap-2 text-gray-600">
            <h1 className="text-xl text-gray-400">
              Intract Certified: Earner NFT
            </h1>
            <p className="w-40">Your proof of airdrop expertise</p>
          </div>
          <div className="px-8 bg-gray-800 py-2 cursor-not-allowed rounded-2xl text-gray-400">
            <button className="px-6 cursor-not-allowed">Claim</button>
          </div>
        </div>
        <div className="pr-60">
          <div className="flex bg-gray-900 w-[550px] px-5 py-5 rounded-t-3xl relative z-10 border-b border-gray-600 hover:bg-gray-800 cursor-pointer">
            <img
              className="h-[150px] w-[150px] rounded-3xl"
              src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/85903745c34d42d684a2dc505768afa7.png"
              alt=""
            />
            <div className="pl-10">
              <h1 className="font-semibold text-2xl">Bacis of Crpto</h1>
              <p className="font-semibold pt-3 text-gray-500">
                The safest and easiest place to start your crypto journy!
              </p>
              <p className="text-gray-500">
                ------------------------------------------
              </p>
              <button className="px-4 py-2 text-sm mt-5 bg-gray-700 font-semibold rounded-2xl">
                1490 XPs
              </button>
            </div>
          </div>
          <div className="w-[550px] px-5 py-10 relative z-10 rounded-b-3xl bg-gray-800 h-[23rem] overflow-scroll overflow-y-auto overflow-x-hidden flex flex-col gap-3">
            <div className="flex items-center gap-10 bg-gray-900 p-2 rounded-xl hover:bg-gray-700 cursor-pointer">
              <div>
                <img
                  className="h-[5rem] w-[7rem] rounded-2xl"
                  src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/6bb30883bc5042809b9d20926341f8ac.jpg"
                  alt=""
                />
              </div>
              <div className="text-gray-600">
                <h1 className="text-xl text-gray-200">
                  #1: What are airdrops, and...
                </h1>
                <p>----------------------------------</p>
                <h2 className="flex text-gray-400 items-center gap-2">
                  <span>11 Tasks</span>
                  <div className="p-1 border border-black rounded-full">
                    <p className="w-[10rem] rounded-full h-2 border-1 border-black bg-gray-400"></p>
                  </div>
                  <span>
                    <CheckCircleIcon />
                  </span>
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-10 bg-gray-900 p-2 rounded-xl hover:bg-gray-700 cursor-pointer">
              <div>
                <img
                  className="h-[5rem] w-[7rem] rounded-2xl"
                  src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/c8d2455592d04b4f897b30da15836d5d.jpg"
                  alt=""
                />
              </div>
              <div className="text-gray-600">
                <h1 className="text-xl text-gray-200">#2: Types of airdrops</h1>
                <p>----------------------------------</p>
                <h2 className="flex text-gray-400 items-center gap-2">
                  <span>5 Tasks</span>
                  <div className="p-1 border border-black rounded-full">
                    <p className="w-[10rem] rounded-full h-2 border-1 border-black bg-gray-400"></p>
                  </div>
                  <span>
                    <CheckCircleIcon />
                  </span>
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-10 bg-gray-900 p-2 rounded-xl hover:bg-gray-700 cursor-pointer">
              <div>
                <img
                  className="h-[5rem] w-[7rem] rounded-2xl"
                  src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d59b0ff5b37141b2baf3e5e39157f408.png"
                  alt=""
                />
              </div>
              <div className="text-gray-600">
                <h1 className="text-xl text-gray-200">
                  #3: How to earn huge $$$...
                </h1>
                <p>----------------------------------</p>
                <h2 className="flex text-gray-400 items-center gap-2">
                  <span>11 Tasks</span>
                  <div className="p-1 border border-black rounded-full">
                    <p className="w-[10rem] rounded-full h-2 border-1 border-black bg-gray-400"></p>
                  </div>
                  <span>
                    <CheckCircleIcon />
                  </span>
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-10 bg-gray-900 p-2 rounded-xl hover:bg-gray-700 cursor-pointer">
              <div>
                <img
                  className="h-[5rem] w-[7rem] rounded-2xl"
                  src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/27d77aa021174529a9eae082de8196c9.jpg"
                  alt=""
                />
              </div>
              <div className="text-gray-600">
                <h1 className="text-xl text-gray-200">
                  #4: Things to keep in mind...
                </h1>
                <p>----------------------------------</p>
                <h2 className="flex text-gray-400 items-center gap-2">
                  <span>7 Tasks</span>
                  <div className="p-1 border border-black rounded-full">
                    <p className="w-[10rem] rounded-full h-2 border-1 border-black bg-gray-400"></p>
                  </div>
                  <span>
                    <CheckCircleIcon />
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirDrop;
