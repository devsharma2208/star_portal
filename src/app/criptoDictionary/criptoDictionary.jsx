import React from "react";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
const CriptoDictionary = () => {
  return (
    <div className="text-gray-400 m-20">
      <div className="text-center">
        <h1 className="text-2xl text-gray-300">Crypto Dictionary</h1>
        <p className="text-sm">Your one-stop to catch up on all crypto terms</p>
      </div>
      <div className="relative cursor-pointer mt-10">
        <img
          className="w-auto h-auto"
          src="https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg"
          alt="crpto"
        />
        <div className="absolute bottom-0 left-0 flex justify-between w-full items-center p-5">
          <div>
            <h1 className="text-2xl font-bold text-gray-200">Web3 + Degen Glossary</h1>
            <p className="text-sm text-gray-400">Your own crypto dictionary</p>
          </div>
          <div>
            <MenuBookOutlinedIcon className="w-10 h-10 border p-2 text-white border-gray-400 bg-gray-600 rounded-full"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CriptoDictionary;
