import { FiPower } from "react-icons/fi";
import { MdMenuBook } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 fixed inset-y-0 left-0 bg-black text-white p-6 flex flex-col justify-between shadow-lg">
        {/* Logo */}
        <Link to="studentWorkSpace" className="flex items-center justify-center mb-8 hover:text-yellow-400">
          <img src="/src/assets/logo-white.png" className="w-48 h-auto" alt="Logo" />
        </Link>

        {/* Navigation Links */}
        <ul className="flex-1 space-y-6">
          <li>
            <Link to="StudentWorkSpace" className="flex items-center p-3 rounded-lg hover:bg-yellow-400 hover:text-black transition">
              <MdMenuBook size={22} className="mr-3" /> Workspace
            </Link>
          </li>
          
          {/* Future Use */}
          {/* <li>
            <Link to="studentProfileSection" className="flex items-center p-3 rounded-lg hover:bg-yellow-400 hover:text-black transition">
              <FiUser size={22} className="mr-3" /> Profile
            </Link>
          </li>
          <li>
            <Link to="studentLessonsSection" className="flex items-center p-3 rounded-lg hover:bg-yellow-400 hover:text-black transition">
              <FiBook size={22} className="mr-3" /> Lessons
            </Link>
          </li>
          <li>
            <Link to="progressSection" className="flex items-center p-3 rounded-lg hover:bg-yellow-400 hover:text-black transition">
              <FiBarChart2 size={22} className="mr-3" /> Progress
            </Link>
          </li> */}
        </ul>

        {/* Sign Out Button */}
        <div className="border-t border-gray-600 pt-4">
          <Link to="../parentDashboard" className="flex items-center p-3 rounded-lg hover:bg-red-500 hover:text-white transition">
            <FiPower size={22} className="mr-3" /> Sign Out
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-6 overflow-y-auto flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default StudentDashboard;
