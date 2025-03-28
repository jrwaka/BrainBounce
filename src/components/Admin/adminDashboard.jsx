import { FiBarChart2, FiBook, FiGrid, FiPower, FiUser } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 fixed inset-y-0 left-0 bg-black text-white p-6 flex flex-col justify-between">
        {/* Logo */}
        <Link
          to="adminWorkSpace"
          className="flex items-center justify-center hover:text-yellow-400">
          <img
            src="/src/assets/logo-white.png"
            className="object-center object-cover mb-12"
            alt="Logo"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex-1 space-y-8">
          <li>
            <Link
              to="adminWorkSpace"
              className="flex items-center hover:text-yellow-400 transition"
            >
              <FiGrid size={20} className="mr-3" /> Dashboard
            </Link> 
          </li>
          <li>
            <Link
              to="adminProfileSection"
              className="flex items-center hover:text-yellow-400 transition"
            >
              <FiUser size={20} className="mr-3" /> Manage Users
            </Link>
          </li>
          <li>
            <Link
              to="adminLessonsSection"
              className="flex items-center hover:text-yellow-400 transition"
            >
              <FiBook size={20} className="mr-3" /> Lessons & Content
            </Link>
          </li>
          {/* <li>
            <Link
              to="adminProgress"
              className="flex items-center hover:text-yellow-400 transition"
            >
              <FiBarChart2 size={20} className="mr-3" /> Progress
            </Link>
          </li> */}
        </ul>

        {/* Sign Out Button at the Bottom */}
        <div>
          <Link
            to="../parentDashboard"
            className="flex items-center hover:text-yellow-400 transition"
          >
            <FiPower size={20} className="mr-3" /> Sign Out
          </Link>
        </div>
      </div>

      {/* Main Content - Pushes Content to the Right */}
      <div className="ml-64 flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
