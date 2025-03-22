import { createContext, useContext, useState } from "react";
import { FiBarChart2, FiBell, FiGrid, FiPower, FiUser } from "react-icons/fi";
import { Link, Outlet, useNavigate } from "react-router-dom";
import NavBar from "../small_component/navBar";
import ChatBox from "../small_component/chatBox";

const UserContext = createContext();
const ParentDashboard = () => {
const [showChatBox, setShowChatBox] = useState(false);
  const navigator = useNavigate();
  const handleGoToParent = () => {
    console.log("hello");
    navigator("..");
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
      image: "/src/assets/Profile_Images/child.png", // Replace with actual image path
      name: "JP",
      grade: "Primary 1",
      currentCourse: "Math 101",
    },
    {
      id: 2,
      image: "/src/assets/Profile_Images/child.png", // Replace with actual image path
      name: "Jane Smith",
      grade: "Primary 2",
      currentCourse: "Science 202",
    },
  ];

  const showingChatBox = () => {
    setShowChatBox(true);
  };

  const hidingChatBox = () => {
    setShowChatBox(false);
  };
  return (
    <UserContext.Provider value={StudentList}>
      <div className="flex">
        <div>
          {/* Sidebar */}
          <div className="w-64 fixed inset-y-0 left-0 h-full bg-y text-white bg-black p-6 flex flex-col justify-between">
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
              <li className="mb-10">
                <Link
                  to="notifications"
                  className="flex items-center hover:text-yellow-400"
                >
                  <FiBell className="mr-2" /> Notifications
                </Link>
              </li>
            </ul>

            <div className="mt-auto">
              <Link
                to="/parentDashboard/signout"
                className="flex items-center hover:text-yellow-400"
              >
                <FiPower className="mr-2" /> Sign Out
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6">
          <NavBar showingChatBox={showingChatBox} userData={userData} />
          {showChatBox && (
            <div className="fixed flex border-t-2 border-blue-500 justify-center items-center backdrop:blur-sm bg-blue-300 left-[60%] right-[0%] overflow-hidden rounded-xl shadow-md shadow-gray-600">
            <div className="bg-white h-full w-full max-w-[50rem] rounded-xl overflow-hidden">
              <ChatBox hidingChatBox={hidingChatBox} />
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
