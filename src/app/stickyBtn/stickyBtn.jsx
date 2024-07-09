"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const StickyBtn = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleData1 = () => {
    dispatch({
      type: "TOGGLE",
      toggle: false,
    });
  };
  const handleData2 = () => {
    dispatch({
      type: "TOGGLE",
      toggle: true,
    });
  };
  return (
    <div className="flex justify-center sticky bottom-10 z-30">
      <div className="bg-gray-400 text-gray-200 rounded-3xl bg-opacity-50">
        <button
          className={`hover:bg-gray-800 hover:text-white px-10 py-3 rounded-3xl ${
            selector && !selector.toggle && "bg-gray-800"
          }`}
          onClick={handleData1}
        >
          Essentials
        </button>
        <button
          className={`hover:bg-gray-800 hover:text-white px-10 py-3 rounded-3xl ${
            selector && selector.toggle && "bg-gray-800"
          }`}
          onClick={handleData2}
        >
          Alpha Hub
        </button>
      </div>
    </div>
  );
};

export default StickyBtn;
