import { FiBarChart2, FiBook, FiPower, FiUser } from "react-icons/fi";
import { MdMenuBook } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-54 bg-black text-white p-6">
        <Link
          to="studentDashboard"
          className="flex items-center hover:text-yellow-400"
        >
          <img
            src="/src/assets/logo-white.png"
            className="mb-10  object-center object-cover"
            alt=""
          />
        </Link>
        <ul>
          <li className="mb-4">
            <Link
              to="StudentWorkSpace"
              className="flex items-center hover:text-yellow-400"
            >
              <MdMenuBook size={25} className="mr-2" /> Workspace
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="studentProfileSection"
              className="flex items-center hover:text-yellow-400"
            >
              <FiUser className="mr-2" /> Profile
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="studentLessonsSection"
              className="flex items-center hover:text-yellow-400"
            >
              <FiBook className="mr-2" /> Lessons
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="progressSection"
              className="flex items-center hover:text-yellow-400"
            >
              <FiBarChart2 className="mr-2" /> Progress
            </Link>
          </li>

          <li className="mb-4">
            <Link
              to="../parentDashboard"
              className="flex items-center hover:text-yellow-400"
            >
              <FiPower className="mr-2" /> Sign Out
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <Outlet />
    </div>
  );
};

export default StudentDashboard;
