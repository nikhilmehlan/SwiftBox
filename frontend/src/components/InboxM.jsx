import React from "react";
import { MdCropSquare, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoMdArrowDropdown, IoMdMore, IoMdRefresh } from "react-icons/io";

const InboxM = () => {
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
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
          <MdKeyboardArrowLeft size={'24px'} className="rounded-full hover:bg-gray-200 cursor-pointer"/>
          <MdKeyboardArrowRight size={'24px'} className="rounded-full hover:bg-gray-200 cursor-pointer"/>

        </div>
      </div>
    </div>
  );
};

export default InboxM;
