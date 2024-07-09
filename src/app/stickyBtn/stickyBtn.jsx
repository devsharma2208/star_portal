import React from "react";

const StickyBtn = () => {
  return (
    <div className="flex justify-center sticky bottom-10 z-30">
      <div className="bg-gray-400 text-gray-200 rounded-3xl bg-opacity-50">
        <button className="hover:bg-gray-800 hover:text-white px-10 py-3 rounded-3xl">Essentials</button>
        <button className="hover:bg-gray-800 hover:text-white px-10 py-3 rounded-3xl">Alpha Hub</button>
      </div>
    </div>
  );
};

export default StickyBtn;
