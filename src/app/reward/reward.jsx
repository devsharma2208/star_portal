"use client";
import React from "react";
import AlarmIcon from "@mui/icons-material/Alarm";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const Reward = () => {
  return (
    <div className="relative text-white w-full flex md:justify-end justify-center text-right md:mt-[85rem] mt-[148rem] py-10 md:px-10 gap-20 md:pr-20 flex-wrap border-b border-dotted border-gray-600 mb-5">
      <div>
        <div className="flex flex-col items-end max-w-full">
          <div className="bg-gray-800 p-5 rounded-xl text-gray-400 font-xl">
            <h1 className="border-b border-dotted border-gray-100 pb-3 text-start">
              <AlarmIcon className="text-orange-500" />{" "}
              <span>Reward unlocks in</span>
            </h1>
            <div className="flex justify-end gap-5 mt-5 text-3xl bg-gray-900 px-9 py-2 border-2 border-black rounded-xl">
              <div className="flex flex-col items-center justify-center">
                <p>00</p>
                <p className="text-lg">Days</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>00</p>
                <p className="text-lg">Hrs</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>00</p>
                <p className="text-lg">Mins</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>00</p>
                <p className="text-lg">Sec</p>
              </div>
            </div>
          </div>
          <div className="mt-3 flex flex-col items-center justify-center bg-gray-800 p-2 text-gray-400 rounded-xl">
            <div>
              <img
                className="w-80 h-80 rounded-xl"
                src="https://www.intract.io/assets/kol-reward-12e6ae06.gif"
                alt="reward"
              />
            </div>
            <div className="text-start text-sm pt-3">
              <div className="flex justify-between border-b border-dotted border-gray-100 pb-3">
                <h1>Exclusive Community</h1>
                <h1>
                  <SportsEsportsIcon className="text-lg bg-blue-400 text-white p-1 rounded-full mr-1" />
                  Earndrop
                </h1>
              </div>
              <div className="mt-2">
                <h1 className="flex justify-between">
                  <span> Complete all Essential quests</span>{" "}
                  <CheckCircleIcon />
                </h1>
              </div>
              <div className="mt-2">
                <h1 className="">
                  Complete at least 1 Alpha Hub quest today
                  <CheckCircleIcon />
                </h1>
              </div>

              <button className="mt-2 bg-gray-800 border-2 border-gray-600 w-full p-2 rounded-xl">
                Claim Now
              </button>
            </div>
          </div>
        </div>

        <div></div>
      </div>
      <div className="w-80 text-left md:mt-20 md:mr-10 text-gray-400">
        <div className="bg-gray-800 text-sm h-auto p-5 rounded-xl">
          <div className="border-b border-dotted border-gray-100 pb-3 font-semibold tracking-wider">
            <h3>
              Reword Info <InfoOutlinedIcon className="text-lg ml-2" />
            </h3>
          </div>
          <div className="mt-5 text-gray-200">
            <h2>Free access to paid KOL (crypto earning) communities!</h2>
          </div>
          <div className="mt-5">
            <h4>
              Win access to exclusive earning communities of some of the the
              greatest earners in crypto for a month, every 24 hours. Get access
              to unmatched insights, a close-knit community of the best airdrop
              earners, and more.
            </h4>
          </div>
          <div className="mt-5">
            <h4>
              To win: make sure you've connected your Twitter and Discord
              accounts - and follow our criteria!
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reward;
