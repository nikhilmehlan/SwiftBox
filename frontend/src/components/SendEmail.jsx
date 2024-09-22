import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import { setOpen } from "../redux/appSlice";

const SendEmail = () => {
    const {open} = useSelector(store => store.app);
    const dispatch=useDispatch()
  return (
    <div className={`${open ? 'block' : 'hidden' } bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>

      <div className="flex items-center justify-between px-3 py-2 bg-[#dee0e2] ">
        <h1>New Message</h1>
        <div onClick={()=>dispatch(setOpen(false))} className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <RxCross2 size={'20px'}/>
        </div>
      </div>
      <form action="" className="flex flex-col p-3 gap-2">
        <input type="text" placeholder="To" className="outline-none py-1"/>
        <input type="text" placeholder="Subject" className="outline-none py-1"/>
        <textarea rows={'10'} cols={'30'} className="outline-none py-1"></textarea>
      </form>
    </div>
  );
};

export default SendEmail;
