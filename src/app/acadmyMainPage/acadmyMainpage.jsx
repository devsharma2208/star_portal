import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LockIcon from "@mui/icons-material/Lock";
import AirDrop from "../airDrops/airDrop";
const AcadmyMainPage = () => {
  return (
    <div className="static">
      <div className="w-full relative">
        {/* Background Image */}
        <div>
          <img
            className="w-full h-90 object-cover"
            src="https://www.intract.io/assets/intract-academy-background-5547a705.png"
            alt="main"
          />
        </div>
        {/* Overlay Content */}
        <div className="absolute top-20 left-0 w-full h-full flex flex-col items-center text-white font-bold mt-40">
          {/* <h6 className="text-semibold text-2xl pl-[-20px] text-left w-40 text-gray-400">Intract</h6>
          <h1 className="text-4xl">Academy</h1> */}
          <div className=" bg-gray-500">
            <img
              className="h-20 bg-transparent"
              src="https://www.intract.io/assets/academy-animated-logo-57b2ae61.gif"
              alt="intract"
            />
          </div>
          <div>
            <h2 className="w-[650px] text-center py-10 text-gray-500 text-xl">
              <span className="text-gray-300"> Intract users </span>have
              together made more than
              <span className="text-gray-300"> $100 million</span> in web3. Join
              them and
              <span className="text-gray-300"> learn how to earn crypto!</span>
            </h2>
          </div>
          <div>
            <button className="px-[60px] py-2 font-semibold bg-blue-700 rounded-xl flex items-center gap-2">
              Get Started <ArrowRightAltIcon />
            </button>
          </div>
          <div className="py-[50px] relative w-full items-start mt-10 flex justify-between flex-wrap">
            <div>
              <div className="flex ml-20 bg-gray-900 w-[550px] px-5 py-5 rounded-t-3xl relative z-10 border-b border-gray-600 hover:bg-gray-800 cursor-pointer">
                <img
                  className="h-[150px] w-[150px] rounded-3xl"
                  src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png"
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
              <div className="ml-20 w-[550px] px-5 py-10 relative z-10 rounded-b-3xl bg-gray-800 h-[23rem] overflow-scroll overflow-y-auto overflow-x-hidden flex flex-col gap-3">
                <div className="flex items-center gap-10 bg-gray-900 p-2 rounded-xl hover:bg-gray-700 cursor-pointer">
                  <div>
                    <img
                      className="h-[5rem] w-[7rem] rounded-2xl"
                      src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png"
                      alt=""
                    />
                  </div>
                  <div className="text-gray-600">
                    <h1 className="text-xl text-gray-200">
                      #1: But What is crypto and...
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
                      src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d425fe7f548542289fbd8919c89bc0ae.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text-gray-600">
                    <h1 className="text-xl text-gray-200">
                      #2: Setting up your own we...
                    </h1>
                    <p>----------------------------------</p>
                    <h2 className="flex text-gray-400 items-center gap-2">
                      <span>8 Tasks</span>
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
                      src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/67e4ee7d187545ccbd28b4a159076068.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text-gray-600">
                    <h1 className="text-xl text-gray-200">
                      #3: What the heck is a...
                    </h1>
                    <p>----------------------------------</p>
                    <h2 className="flex text-gray-400 items-center gap-2">
                      <span>8 Tasks</span>
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
                      src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/a0ad2f15685642b985913a3aef4208ff.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text-gray-600">
                    <h1 className="text-xl text-gray-200">
                      #4: Swapping and bridging...
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
                      src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/23c818f39768450298bb540fc3043bf7.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text-gray-600">
                    <h1 className="text-xl text-gray-200">
                      #5: NFTs and why they're...
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
                      src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/71ae875a31a54215af6e14fd113c60f6.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text-gray-600">
                    <h1 className="text-xl text-gray-200 font-bold">
                      #6: Doing quests and winni...
                    </h1>
                    <p>----------------------------------</p>
                    <h2 className="flex text-gray-400 items-center gap-2">
                      <span>8 Tasks</span>
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
            {/* <div className="absolute mt-[-11rem]">
            <img
              className="block mx-auto"
              src="https://miro.medium.com/v2/resize:fit:572/1*KMpe-RMd6bSo8FUJIKLuOw.gif"
              alt="dot line"
            />
          </div> */}
            <div className="mt-40 mr-20 flex flex-col items-start justify-center gap-5">
              <div className="flex flex-col items-center justify-center gap-5">
                <div className="w-[3.5rem] h-[3.5rem] rounded-full border border-gray-500 flex items-center justify-center">
                  <CheckCircleIcon className="h-[4rem] w-20 text-gray-800" />
                </div>
                <div className="h-[11rem] w-[11rem] bg-black border border-gray-800 rounded-2xl flex items-center justify-center relative">
                  <img
                    className="h-40 w-40 rounded-2xl"
                    src="https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/1b1912563b964393b0478949efad5ed3.png"
                    alt="cat"
                  />
                </div>
                <div className="w-full text-right">
                  <LockIcon className="mt-[-3rem] ml-[-1.9rem] z-20 absolute border border-gray-600 p-2 h-10 w-10 rounded-full bg-gray-800 text-gray-400" />
                </div>
              </div>
              <div className="flex flex-col font-semibold items-start gap-2 text-gray-600">
                <h1 className="text-xl text-gray-400">
                  Intract Certified: Learner NFT
                </h1>
                <p className="w-60">Your crypto black-belt certificate</p>
              </div>
              <div className="px-8 bg-gray-800 py-2 cursor-not-allowed rounded-2xl text-gray-400">
                <button className="px-6 cursor-not-allowed">Claim</button>
              </div>
            </div>
          </div>
          <AirDrop />
        </div>
      </div>
    </div>
  );
};

export default AcadmyMainPage;
