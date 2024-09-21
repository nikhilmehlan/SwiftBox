import React, { useState } from "react";
import {
  MdCropSquare,
  MdInbox,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { IoMdArrowDropdown, IoMdMore, IoMdRefresh } from "react-icons/io";
import { GoTag } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";
import Emails from "./Emails";

const mailType = [
  {
    icon: <MdInbox size={"20px"} />,
    text: "Primary",
  },
  {
    icon: <GoTag size={"20px"} />,
    text: "Promotions",
  },
  {
    icon: <FaUserFriends size={"20px"} />,
    text: "Socials",
  },
];
const InboxM = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4 my-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <MdCropSquare size={"20px"} />
            <IoMdArrowDropdown size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <IoMdRefresh size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>1 - 50 </span>
          <MdKeyboardArrowLeft
            size={"24px"}
            className="rounded-full hover:bg-gray-200 cursor-pointer"
          />
          <MdKeyboardArrowRight
            size={"24px"}
            className="rounded-full hover:bg-gray-200 cursor-pointer"
          />
        </div>
      </div>
      <div className="h-40vh overflow-y-auto">
        <div className="flex items-center gap-1">
          {mailType.map((item, index) => {
            return (
              <button
                onClick={() => setSelected(index)}
                className={` ${
                  selected == index
                    ? "border-b-4 border-b-blue-600 text-blue-600"
                    : "border-b-4 border-b-transparent-600 text-transparent-600"
                } flex items-center gap-5 p-4 w-52 hover:bg-gray-200`}
              >
                {item.icon}
                <span>{item.text}</span>
              </button>
            );
          })}
        </div>
        <div>
          <Emails/>
        </div>
      </div>
    </div>
  );
};

export default InboxM;
