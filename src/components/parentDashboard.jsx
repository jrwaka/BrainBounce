import { Link, Outlet } from "react-router-dom";
import { FiBook, FiBarChart2, FiUser, FiGrid, FiPower, FiEye, FiBell } from "react-icons/fi";

const ParentDashboard = () => {
  return (
    <div className="flex h-screen font-family">
      {/* Sidebar */}
      <div className="w-54 bg-black text-white p-6">
        <Link to="/dashboard" className="flex items-center hover:text-yellow-400">
          <img src="./src/assets/logo-white.png" className="mb-10 h-12" alt="" />
        </Link>
        <ul>
          <li className="mb-4">
            <Link to="/dashboard" className="flex items-center hover:text-yellow-400">
              <FiGrid className="mr-2" /> Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/dashboard/profile" className="flex items-center hover:text-yellow-400">
              <FiUser className="mr-2" /> Profile
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/dashboard/student-progress" className="flex items-center hover:text-yellow-400">
              <FiBarChart2 className="mr-2" /> Child’s Progress
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/dashboard/notifications" className="flex items-center hover:text-yellow-400">
              <FiBell className="mr-2" /> Notifications
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/dashboard/learning-goals" className="flex items-center hover:text-yellow-400">
              <FiBook className="mr-2" /> Learning Goals
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/dashboard/signout" className="flex items-center hover:text-yellow-400">
              <FiPower className="mr-2" /> Sign Out
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <div className="py-10 px-20 max-w-4xl mx-auto bg-blue-100 rounded-lg shadow-lg">
          {/* Welcome Message */}
          <h1 className="text-xl font-bold text-blue- mb-4">
            Hi, [Parent's Name]! 🎈 Ready to track your children's progress today? 🚀
          </h1>

          {/* Notifications Section */}
          <div className="mt-6 p-4 bg-white rounded-lg shadow">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold">Recent Notifications 📣</h2>
              <button className="text-blue-600 flex items-center gap-1">
                View All <FiEye />
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 bg-gray-200 rounded-lg shadow">
                <p className="text-gray-700">Your child has completed the first 5 lessons! 🎉</p>
              </div>
              <div className="p-4 bg-gray-200 rounded-lg shadow">
                <p className="text-gray-700">New lesson plans are available for this week!</p>
              </div>
            </div>
          </div>

          {/* Children’s Progress */}
          <div className="mt-6 p-4 bg-white rounded-lg shadow">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold">Children’s Progress 📊</h2>
              <button className="text-blue-600 flex items-center gap-1">
                View All <FiEye />
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 bg-blue-200 rounded-lg shadow">
                <h3 className="font-semibold">Child's Name - 80% Progress</h3>
                <p>They are doing great in their math lessons!</p>
              </div>
              <div className="p-4 bg-green-200 rounded-lg shadow">
                <h3 className="font-semibold">Child's Name - 65% Progress</h3>
                <p>Working on reading comprehension!</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          {/* <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2">
              <FiBook /> Set Learning Goals
            </button>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2">
              <FiBarChart2 /> Track Progress
            </button>
          </div> */}
        </div>
      </div>

      {/* Render child components based on route */}
      <Outlet />
    </div>
  );
};

export default ParentDashboard;
