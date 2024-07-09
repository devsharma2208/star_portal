"use client"
import React from "react";

const Navlinks = () => {
  const links = [
    {
      name: "Compass",
    },
    {
      name: "Explore",
    },
    {
      name: "Academy",
    },
    {
      name: "NFTs",
    },
    {
      name: "For Projects",
    },
    
  ];
  return (
    <div className="px-8 py-5">
      {links.map((link) => (
        <div className="text-white bg-black pb-5">
          <div className=" text-left md:cursor-pointer group">
            <h1 className="font-semibold font-sans ">{link.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navlinks;
