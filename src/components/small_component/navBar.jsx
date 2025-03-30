import React from "react";
import { FaRegMessage } from "react-icons/fa6";
import { FiBell, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
function NavBar({
  userData,
  showingChatBox,
  setIsSidebarOpen,
  showNotification,
  hiddingNotification,
}) {
  return (
    <div className="flex items-center md:justify-between justify-around mb-2 gap-4">
      <div>
        <div className="justify-start block  md:ml-0  ml-4 ">
          {window.innerWidth <= 1024 && (
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-black top-4 left-4 z-50 rounded-full"
            >
              <FiMenu className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>
      <div className="flex md:justify-end items-center justify-evenly  flex-1 mr-4 md:mr-0 gap-4">
        <span className="flex items-center md:gap-4  flex-4/10 md:flex-none justify-end gap-4">
          <Link to={"/parent-landing-page"}>Home</Link>

          <button
            onClick={() => (showingChatBox(), hiddingNotification(true))}
            className="relative"
          >
            <FaRegMessage size={20} />{" "}
            <span className="border border-red-400 w-4 h-4 rounded-full absolute -top-[4px] -right-[3px] bg-amber-500 flex justify-center items-center p-[3px] text-[10px]">
              1
            </span>
          </button>

          <button className="relative" onClick={() => showNotification()}>
            <FiBell size={30} />{" "}
            <span className="border border-red-400 w-4 h-4 rounded-full absolute top-0 right-0 bg-amber-500 flex justify-center items-center p-1 text-[10px]">
              1
            </span>
          </button>
        </span>
        <div className="  md:flex-none  md:mr-0 flex flex-col justify-center items-center">
          <img
            src={userData.userImage}
            alt=""
            className="md:w-14 md:h-14 w-10 h-10 rounded-full object-center object-cover"
          />
          <p className="font-semibold">{userData.userName}</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
