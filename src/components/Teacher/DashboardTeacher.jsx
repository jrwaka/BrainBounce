import { createContext, useContext, useState, useEffect } from "react";
import { FiBarChart2, FiBook, FiGrid, FiPower, FiUser, FiMenu, FiX } from "react-icons/fi";
import { Link, Outlet, useNavigate } from "react-router-dom";
import NavBar from "../small_component/navBar";

const UserContext = createContext();

const TeacherDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const navigate = useNavigate();

  const handleGoToParent = () => {
    navigate("..");
  };

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

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shouldToggleSidebar = screenSize < 1024; // Toggle sidebar for screens smaller than laptops (1024px)

  return (
    <UserContext.Provider value={RegisteredStudent}>
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`w-64 fixed inset-y-0 left-0 h-full bg-black text-white p-6 flex flex-col justify-between transition-transform transform ${
            shouldToggleSidebar && !isSidebarOpen ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          {/* Menu Close Button */}
          {shouldToggleSidebar && (
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-white p-2 self-end mb-6"
            >
              <FiX className="h-6 w-6" />
            </button>
          )}

          <Link
            to={handleGoToParent}
            className="flex items-center hover:text-yellow-400 mb-6"
          >
            <img src="/src/assets/logo-white.png" className="h-12" alt="Logo" />
          </Link>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-12 flex-1">
            <li>
              <Link to="TrainerDashboard" className="flex items-center hover:text-yellow-400">
                <FiGrid className="mr-2" /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="teacherProfilePage" className="flex items-center hover:text-yellow-400">
                <FiUser className="mr-2" /> Profile
              </Link>
            </li>
            <li>
              <Link to="teacherLessonsSection" className="flex items-center hover:text-yellow-400">
                <FiBook className="mr-2" /> Lessons & Content
              </Link>
            </li>
            <li>
              <Link to="TeacherStudentProgressPages" className="flex items-center hover:text-yellow-400">
                <FiBarChart2 className="mr-2" /> Child’s Progress
              </Link>
            </li>
          </ul>

          {/* Sign Out Button */}
          <div className="mt-auto">
            <button className="flex items-center hover:text-yellow-400">
              <FiPower className="mr-2" /> Sign Out
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Menu Button - Fixed When Scrolling */}
          {shouldToggleSidebar && (
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-black p-4 fixed top-4 left-4 z-50 rounded-full"
            >
              <FiMenu className="h-6 w-6" />
            </button>
          )}

          <NavBar userData={userData} />
          <Outlet context={{ RegisteredStudent }} />
        </div>
      </div>
    </UserContext.Provider>
  );
};

export const UseUser = () => useContext(UserContext);

export default TeacherDashboard;
