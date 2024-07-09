import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import TelegramIcon from "@mui/icons-material/Telegram";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
const Footer = () => {
  return (
    <div className="text-white mt-10">
      <div className="flex flex-wrap md:flex-nowrap justify-between m-10 text-gray-600 border-b border-t border-gray-600 py-10">
        <div className="cursor-pointer">
          <h1 className="text-gray-300 text-2xl font-bold mt-5">intract.</h1>
          <p className="text-sm">
            We are your personal guide for exploring web3 projects & earning
            100x rewards
          </p>
        </div>
        <div className="flex flex-wrap md:flex-row flex-col lg:flex-row w-full justify-between md:mr-20 lg:mr-20">
          <div>
            <h1 className="text-gray-300 mt-5 font-semibold ">INTRACT</h1>
            <p className="text-sm mt-1">Explore Quests</p>
            <p className="text-sm mt-1">Comunities</p>
            <p className="text-sm mt-1">Alpha Hub</p>
          </div>
          <div>
            <h1 className="text-gray-300 mt-5 font-semibold ">EARN</h1>
            <p className="text-sm mt-1">Refer & Earn</p>
            <p className="text-sm mt-1">Leaderboard</p>
            <p className="text-sm mt-1">Achievements</p>
          </div>
          <div>
            <h1 className="text-gray-300 mt-5 font-semibold ">ABOUT</h1>
            <p className="text-sm mt-1">Product Roadmap</p>
            <p className="text-sm mt-1">Affiliate Program</p>
            <p className="text-sm mt-1">Sign up Program</p>
            <p className="text-sm mt-1">Growth Community</p>
            <p className="text-sm mt-1">Blogs</p>
          </div>
          <div>
            <h1 className="text-gray-300 mt-5 font-semibold ">SUPPORT</h1>
            <p className="text-sm mt-1">Help Center</p>
            <p className="text-sm mt-1">Create your quest</p>
            <p className="text-sm mt-1">Terms of Service</p>
            <p className="text-sm mt-1">Privacy Policy</p>
            <p className="text-sm mt-1">Community Guidelines</p>
          </div>
        </div>
      </div>
      <div className="m-10 text-gray-600 text-sm text-normal border-b border-gray-600 pb-10">
        <span className="text-gray-300 font-semibold ">Disclaimer: </span>
        Crypto Products, Virtual Digital Assets, and NFTs are unregulated and
        can be highly risky. There may be no regulatory recourse for any loss
        from such transactions. We advise the viewer to proceed with caution.
        Nothing in this website or any communication published by us amounts to,
        is intended to be, or should be construed as investment or purchase
        advice of any kind or financial advice or promotion under any applicable
        laws. Any decision made based on the content provided on this website or
        any communication published by us shall not be attributable to us.
      </div>
      <div className="m-10 flex flex-wrap gap-5 items-center justify-between text-gray-600 text-sm text-normal pb-5">
        <h1 className="text-gray-300 font-semibold">CREATED BY INTRACT</h1>
        <div className="flex gap-5">
          <TwitterIcon className="cursor-pointer border border-gray-500 p-2 h-10 w-10 rounded-xl bg-gray-800 text-white" />
          <SportsEsportsIcon className="cursor-pointer border border-gray-500 p-2 h-10 w-10 rounded-xl bg-gray-800 text-white" />
          <TelegramIcon className="cursor-pointer border border-gray-500 p-2 h-10 w-10 rounded-xl bg-gray-800 text-white" />
          <GraphicEqIcon className="cursor-pointer border border-gray-500 p-2 h-10 w-10 rounded-xl bg-gray-800 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
