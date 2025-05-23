import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  FiBarChart2,
  FiBook,
  FiGrid,
  FiPower,
  FiUser,
  FiX,
} from "react-icons/fi";
import { Link, Outlet, useNavigate } from "react-router-dom";
import NavBar from "../small_component/navBar";

const UserContext = createContext();

const TeacherDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const navigate = useNavigate();

  // ✅ Role-based access control for "teacher"
  useEffect(() => {
    const currentUser = JSON.parse(sessionStorage.getItem("user"));
    if (!currentUser) {
      // ✅ Fix: Check "teacher" role
      toast.error("Unauthorized access! Redirecting...");
      navigate("/landing-page", { replace: true });
    }
  }, [navigate]);

  const handleGoToParent = () => {
    navigate("..");
  };

  const handleSignOut = () => {
    sessionStorage.removeItem("user");
    toast.success("Signed out successfully!");
    navigate("/landing-page", { replace: true });
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const userData = {
    userName: "John Doe",
    userImage: "/src/assets/Profile_Images/1.jpeg",
    notifications: [
      { id: 1, message: "New order received" },
      { id: 2, message: "Product out of stock" },
    ],
  };

  const RegisteredStudent = [
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

  return (
    <UserContext.Provider value={RegisteredStudent}>
      <div className="flex bg-white w-fit md:w-full h-fit min-w-[320px]">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 h-full bg-[rgba(0,0,0,0.5)] text-white flex flex-col justify-between transition-transform transform lg:w-fit w-full z-50 ${
            screenSize <= 1024 && !isSidebarOpen
              ? "-translate-x-full"
              : "translate-x-0"
          }`}
          onClick={() => setIsSidebarOpen(false)}
        >
          <div
            className="w-64 h-full p-6 bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Menu Close Button */}
            {screenSize <= 1024 && (
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  setIsSidebarOpen(false);
                }}
                className="text-white p-2 self-end mb-6"
              >
                <FiX className="h-6 w-6" />
              </button>
            )}

            <button
              onClick={handleGoToParent}
              className="flex items-center hover:text-yellow-400 mb-6"
            >
              <img
                src="/src/assets/logo-white.png"
                className="h-12"
                alt="Logo"
              />
            </button>

            {/* Navigation Links */}
            <ul className="flex flex-col gap-12 flex-1">
              <li>
                <Link
                  to="TrainerDashboard"
                  className="flex items-center hover:text-yellow-400"
                >
                  <FiGrid className="mr-2" /> Dashboard
                </Link>
              </li>
              {/* <li>
                <Link
                  to="teacherProfilePage"
                  className="flex items-center hover:text-yellow-400"
                >
                  <FiUser className="mr-2" /> Profile
                </Link>
              </li> */}
              <li>
                <Link
                  to="teacherLessonsSection"
                  className="flex items-center hover:text-yellow-400"
                >
                  <FiBook className="mr-2" /> Lessons & Content
                </Link>
              </li>
              {/* <li>
                <Link
                  to="TeacherStudentProgressPages"
                  className="flex items-center hover:text-yellow-400"
                >
                  <FiBarChart2 className="mr-2" /> Child’s Progress
                </Link>
              </li> */}
            </ul>

            {/* Sign Out Button */}
            <div className="self-end absolute bottom-5">
              <button
                onClick={handleSignOut}
                className="flex items-center hover:text-yellow-400 md:cursor-pointer"
              >
                <FiPower className="mr-2" /> Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64 md:p-6">
          <Outlet context={{ RegisteredStudent }} />
        </div>
      </div>
    </UserContext.Provider>
  );
};

export const UseUser = () => useContext(UserContext);

export default TeacherDashboard;
