import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import Avatar from "react-avatar";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 hover:bg-gray-200 rounded-full cursor-pointer">
            <GiHamburgerMenu />
          </div>
          <img
            className="w-8"
            src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_256px.png"
            alt=""
          />
          <h1 className="text-2xl text-gray-500 font-medium">SwiftBox</h1>
        </div>
      </div>
      <div className="w-[50%] mr-60 ">
        <div className="flex items-center bg-[#e5e6e9] px-2 py-3 rounded-full">
          <IoIosSearch size={"24px"} className="text-gray-700" />
          <input
            type="text"
            placeholder="Search Mail"
            className="rounded-full w-full bg-transparent outline-none px-1"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <CiCircleQuestion size={"26px"} />
        </div>
        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <IoMdSettings size={"26px"} />
        </div>
        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <TbGridDots size={"26px"} />
        </div>
        <Avatar
          src="https://imgs.search.brave.com/oLZDzi1Pq8lizoaEwF_-VPAyxkQ2D9V_BYQDVhqf4Ko/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzc3LzA3LzAy/LzM2MF9GXzU3NzA3/MDI0OF9nSjRuNXJ4/MFdRelpCNk43ZFVz/Mkg3SENvNmdaVk13/Qi5qcGc"
          size="40"
          round={true}
        />
      </div>
    </div>
  );
};

export default Navbar;
