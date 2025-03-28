import { createContext, useContext, useEffect } from "react";
import { FiBarChart2, FiBell, FiBook, FiGrid, FiPower, FiUser } from "react-icons/fi";
import { Link, Outlet, useNavigate } from "react-router-dom";
import NavBar from "../small_component/navBar";

const UserContext = createContext();
const TeacherDashboard = () => {
  const navigate = useNavigate();

  const handleGoToParent = () => {
    navigate(".."); // Navigates to the parent route
  };
  const userData = {
    userName: "John Doe",
    userImage: "/src/assets/Profile_Images/1.jpeg",
    notifications: [
      { id: 1, message: "New order received" },
      { id: 2, message: "Product out of stock" },
    ],
  };

  // useEffect(() => {
  //   const currentUser = JSON.parse(sessionStorage.getItem("user"));
  //   if (!currentUser || currentUser.role !== "teacher") {
  //     toast.error("Unauthorized access! Redirecting...");
  //     navigate("/landing-page", { replace: true });
  //   }
  // }, [navigate]);

  // const handleSignOut = () => {
  //   sessionStorage.removeItem("user");
  //   toast.success("Signed out successfully!");
  //   navigate("/landing-page", { replace: true });
  // };

  const RegisteredStudent = [
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
  return (
    <UserContext.Provider value={RegisteredStudent}>
      <div className="flex">
        <div>
          {/* Sidebar */}
          <div className="w-64 fixed inset-y-0 left-0 h-full bg-black text-white p-6 flex flex-col justify-between">
            <Link
              to={handleGoToParent}
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
                  to="TrainerDashboard"
                  className="flex items-center hover:text-yellow-400"
                >
                  <FiGrid className="mr-2" /> Dashboard
                </Link>
              </li>
              <li className="mb-10">
                <Link
                  to="teacherProfilePage"
                  className="flex items-center hover:text-yellow-400"
                >
                  <FiUser className="mr-2" /> Profile
                </Link>
              </li>

              <li className="mb-10">
                <Link
                  to="teacherLessonsSection"
                  className="flex items-center hover:text-yellow-400"
                >
                  <FiBook className="mr-2" /> Lessons & Content
                </Link>
              </li>

              <li className="mb-10">
                <Link
                  to="TeacherStudentProgressPages"
                  className="flex items-center hover:text-yellow-400"
                >
                  <FiBarChart2 className="mr-2" /> Child’s Progress
                </Link>
              </li>
              {/* <li className="mb-10">
                <Link
                  to="teacherNotificationsPage"
                  className="flex items-center hover:text-yellow-400"
                >
                  <FiBell className="mr-2" /> Notifications
                </Link>
              </li> */}
            </ul>

            <div className="mt-auto">
              <button
                // onClick={handleSignOut}
                className="flex items-center hover:text-yellow-400"
              >
                <FiPower className="mr-2" /> Sign Out
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6">
          <NavBar userData={userData} />
          <Outlet context={{ RegisteredStudent }} />
        </div>
      </div>
    </UserContext.Provider>
  );
};
export const UseUser = () => useContext(UserContext);
export default TeacherDashboard;
