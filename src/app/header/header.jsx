"use client";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Navlinks from "./navlinks";

const Header = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);
  return (
    <nav className="bg-black bg-opacity-80 h-[62px] w-full px-10 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto z-30">
          <img
            className="w-30 h-[55px] mt-2 color-white cursor-pointer"
            src="https://clubrunner.blob.core.windows.net/00000002427/PhotoAlbum/branding/Interact-white.png"
            alt=""
          />
          <div
            className="text-white text-3xl md:hidden cursor-pointer "
            onClick={() => setOpen(!open)}
          >
            {!open ? <MenuIcon /> : <CloseIcon />}
          </div>
        </div>
        <div className="md:flex text-white items-center gap-5 font-semibold hidden">
          {/* <Navlinks/> */}
          <h1 className="cursor-pointer">Compass</h1>
          <h1 className="cursor-pointer">Explore</h1>
          <h1 className="cursor-pointer">Academy</h1>
          <h1 className="cursor-pointer">NFTs</h1>
          <h1 className="cursor-pointer">For Projects</h1>
        </div>
        <ul
          className={`md:hidden bg-black text-white overflow-scroll absolute w-full h-screen top-0 bottom-0 px-5 py-16 duration-500 z-10 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <Navlinks />
        </ul>
        <div className="md:flex items-center gap-5 hidden">
          <div className="bg-gray-500 rounded-3xl px-3">
            <SearchIcon className="text-gray-800" />
            <input
              className="w-[23rem] p-3 bg-gray-500 rounded-r-3xl border-none outline-none focus:ring-0 text-white"
              type="search"
              name="search"
              id="search"
              placeholder="Search For Ecosystems, trading quests etc.."
            />
          </div>
          <div className="cursor-pointer p-3 border border-red-500 rounded-3xl">
            <img
              className="h-5"
              src="https://www.intract.io/assets/broadcast_or-04af786c.svg"
              alt="intract"
            />
          </div>
          <div className="cursor-pointer ">
            <button className="text-black bg-white hover:bg-gray-200 px-5 font-semibold py-1 rounded border-2 border-black ">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
