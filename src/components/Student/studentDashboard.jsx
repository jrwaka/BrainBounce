import { Link, Outlet } from "react-router-dom";
import { FiBook, FiBarChart2, FiDownload, FiUser, FiGrid, FiStar, FiArrowRight, FiSmile, FiEye, FiLogOut, FiPower } from "react-icons/fi";

const StudentDashboard = () => {
  return (
    <div className="flex h-screen font-family">
      {/* Sidebar */}
      <div className="w-54 bg-black text-white p-6">
      <Link to="/student-dashboard" className="flex items-center hover:text-yellow-400">
        <img src="./src/assets/logo-white.png" className="mb-10 h-12" alt="" />
        </Link>
        <ul>
          <li className="mb-4">
            <Link to="/student-dashboard" className="flex items-center hover:text-yellow-400">
              <FiGrid className="mr-2" /> Dashboard
            </Link>
        </li>
          <li className="mb-4">
            <Link to="/student-dashboard/profile" className="flex items-center hover:text-yellow-400">
              <FiUser className="mr-2" /> Profile
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/student-dashboard/lessons" className="flex items-center hover:text-yellow-400">
              <FiBook className="mr-2" /> Lessons
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/student-dashboard/progress" className="flex items-center hover:text-yellow-400">
              <FiBarChart2 className="mr-2" /> Progress
            </Link>
          </li>

          <li className="mb-4">
            <Link to="/student-dashboard/progress" className="flex items-center hover:text-yellow-400">
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
        Hi, [Student's Name]! 🎈 Are you ready for a new adventure today? 🚀
      </h1>

      {/* Progress Bar */}
      <div className="bg-gray-200 h-4 rounded-full mb-4">
        <div className="bg-blue-800 h-4 rounded-full w-3/5"></div>
      </div>
      <p className="text-gray-700">You are 60% done with this week’s learning! Keep it up! 🎉</p>

      {/* Next Lesson Preview */}
      <div className="mt-6 p-4 bg-white rounded-lg shadow flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Next up: The Magic of Fractions 🎩✨</h2>
          <p className="text-gray-600">Unlock new math tricks!</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          Start Now <FiArrowRight />
        </button>
      </div>


      {/* Quick Action Buttons */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2">
          <FiBook /> Start Learning
        </button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2">
          <FiStar /> See My Progress
        </button>
      </div>
       
     {/* Explore Different Lessons */}
     <div className="mt-6 p-4 bg-white rounded-lg shadow">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold">Explore Different Lessons 📚</h2>
          <button className="text-blue-600 flex items-center gap-1">
            View All <FiEye />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-200 rounded-lg shadow hover:bg-blue-100">
            <h3 className="text-lg font-semibold">Math Adventures 🔢</h3>
            <p className="text-gray-700">Learn cool math tricks!</p>
        </div>

        <div className="p-4 bg-green-200 rounded-lg shadow hover:bg-green-100">
            <h3 className="text-lg font-semibold">Story Time 📖</h3>
            <p className="text-gray-700">Explore fun stories!</p>
        </div>

        <div className="p-4 bg-yellow-200 rounded-lg shadow hover:bg-yellow-100">
            <h3 className="text-lg font-semibold">Science Wonders 🔬</h3>
            <p className="text-gray-700">Discover amazing science facts!</p>
        </div>

        <div className="p-4 bg-red-200 rounded-lg shadow hover:bg-red-100">
            <h3 className="text-lg font-semibold">Art & Creativity 🎨</h3>
            <p className="text-gray-700">Unleash your imagination!</p>
        </div>
        </div>
      </div>
      </div>


      </div>
      <Outlet/>
    
    </div>
  );
};

export default StudentDashboard;
