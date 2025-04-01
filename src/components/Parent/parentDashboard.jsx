import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiUpArrow } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { FiBarChart2, FiGrid, FiPower, FiUser } from "react-icons/fi";
import { IoSettingsSharp } from "react-icons/io5";
import { Link, Outlet, useNavigate } from "react-router-dom";
import ChatBox from "../small_component/chatBox";
import NavBar from "../small_component/navBar";
import NotificationsPage from "./notificationsPage";

const UserContext = createContext();

const ParentDashboard = () => {
  const [showChatBox, setShowChatBox] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const navigate = useNavigate();

  // Check user authentication
  useEffect(() => {
    const currentUser = JSON.parse(sessionStorage.getItem("user"));
    if (!currentUser) {
      toast.error("Unauthorized access! Redirecting...");
      navigate("/landing-page", { replace: true });
    }
  }, [navigate]);
  useEffect(() => {}, [showChatBox]);

  const handleSignOut = () => {
    sessionStorage.removeItem("user");
    toast.success("Signed out successfully!");
    navigate("/landing-page", { replace: true });
  };

  const userData = {
    userName: "John Doe",
    userImage: "/src/assets/Profile_Images/1.jpeg",
    notifications: [
      { id: 1, message: "New order received" },
      { id: 2, message: "Product out of stock" },
    ],
  };

  const StudentList = [
    {
      id: 1,
      image: "/src/assets/Profile_Images/child.png",
      name: "JP",
      grade: "Primary 1",
      currentCourse: "Math 101",
    },
    {
      id: 2,
      image: "/src/assets/Profile_Images/child.png",
      name: "Jane Smith",
      grade: "Primary 2",
      currentCourse: "Science 202",
    },
  ];

  const toggleChatBox = () => {
    setShowChatBox((prevShowChatBox) => !prevShowChatBox);
  };
  const toggleNotificationBox = () => {
    setShowNotification((prevState) => !prevState);
  };

  return (
    <UserContext.Provider value={StudentList}>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 fixed inset-y-0 left-0 h-full bg-black text-white p-6 flex flex-col justify-between">
          <Link
            to="Dashboard"
            className="flex items-center hover:text-yellow-400"
          >
            <img
              src="/src/assets/logo-white.png"
              className="mb-10 h-12"
              alt=""
            />
          </Link>

          {/* Navigation Links */}
          <ul className="flex-1">
            <li className="mb-10">
              <Link
                to="Dashboard"
                className="flex items-center hover:text-yellow-400"
              >
                <FiGrid className="mr-2" />
                Dashboard
              </Link>
            </li>
            <li className="mb-10">
              <Link
                to="parent-profile"
                className="flex items-center hover:text-yellow-400"
              >
                <FiUser className="mr-2" /> Profile
              </Link>
            </li>
            <li className="mb-10">
              <Link
                to="student-progress"
                className="flex items-center hover:text-yellow-400"
              >
                <FiBarChart2 className="mr-2" /> Child’s Progress
              </Link>
            </li>
          </ul>

          <div className="mt-auto">
            <button
              onClick={handleSignOut}
              className="flex items-center hover:text-yellow-400"
            >
              <FiPower className="mr-2" /> Sign Out
            </button>
          </div>
        </div>

        <div className="flex-1 mt-[89px] lg:ml-[16rem] ">
          <div
            className=" fixed top-0 right-0 left-[16rem]  bg-white
          "
          >
            {" "}
            <NavBar
              showNotification={toggleNotificationBox}
              hiddingNotification={setShowNotification}
              showingChatBox={toggleChatBox}
              userData={userData}
              setIsSidebarOpen={setShowChatBox}
            />
          </div>

          {showChatBox && (
            <div className="fixed flex border border-blue-500 justify-center items-center bg-blue-500 left-[60%] right-2 overflow-hidden rounded-xl shadow-md shadow-gray-600 top-0">
              <div className="bg-white h-full w-full max-w-[50rem] rounded-xl overflow-hidden">
                <ChatBox hidingChatBox={toggleChatBox} />
              </div>
            </div>
          )}
          {!showNotification && (
            <div className="bg-white border-2 border-gray-300 fixed right-0 top-[68px] bottom-20 rounded p-2  flex flex-col w-[26rem]">
              <div className="absolute pointer-events-none right-[86px] -top-[18px]">
                <BiUpArrow fill="rgb(227 227 227)" size={23} />
              </div>
              {/* Open button */}
              {/* <button
                onClick={() => setShowNotification(false)}
                className="bg-gray-600 text-white absolute top-0 left-0 overflow-hidden cursor-pointer"
              >
                <IoMdClose size={25} />
              </button> */}
              <div className=" flex justify-end gap-4 px-4 py-2">
                <span className=" cursor-pointer">
                  <IoSettingsSharp />
                </span>
                <span className=" cursor-pointer">
                  <FaCheck />
                </span>
              </div>
              <div className="flex-1">
                <NotificationsPage />
              </div>
              <div className=" flex justify-end">
                <Link
                  onClick={() => setShowNotification(true)}
                  to="notificationsPage"
                  className="bg-blue-400 place-self-end rounded-sm px-2 py-1 text-white"
                >
                  View More
                </Link>
              </div>
            </div>
          )}

          <Outlet context={{ StudentList }} />
        </div>
      </div>
    </UserContext.Provider>
  );
};

export const UseUser = () => useContext(UserContext);
export default ParentDashboard;
