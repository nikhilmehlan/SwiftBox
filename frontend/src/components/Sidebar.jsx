import React,  { useState }  from "react";
import { LuPencil } from "react-icons/lu";
import { MdMore, MdMoveToInbox, MdOutlineDrafts } from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { LuSendHorizonal } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { setOpen } from "../redux/appSlice";
const SidebarItems = [
  {
    icon: <MdMoveToInbox size={"20px"} color="black" />,
    text: "Inbox",
  },
  {
    icon: <IoStarOutline size={"20px"} color="black" />,
    text: "Starred",
  },
  {
    icon: <GoClock size={"20px"} color="black" />,
    text: "Snoozed",
  },
  {
    icon: <LuSendHorizonal size={"20px"} color="black" />,
    text: "Sent",
  },
  {
    icon: <MdOutlineDrafts size={"20px"} color="black" />,
    text: "Drafts",
  },
  {
    icon: <MdMore size={"20px"} color="black" />,
    text: "More",
  },
];
const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const dispatch=useDispatch();
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button onClick={()=>dispatch(setOpen(true))} className="flex items-center gap-2 bg-[#C2E6FE] p-4 rounded-2xl hover:shadow-md">
          <LuPencil size={"24px"} />
          Compose
        </button>
      </div>
      <div className="text-gray-600">
        {SidebarItems.map((item, index) => {
          return (
            <div  onClick={() => setSelected(index)}
            className={` ${
              selected == index
                ? "bg-blue-200"
                : "text-gray-600"
            } flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 hover:cursor-pointer hover:bg-gray-200`}>
              {item.icon}
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
