import { FaUser, FaEdit, FaSignOutAlt, FaChild, FaChartBar } from "react-icons/fa";
const TeacherProfilePage = () => {
      return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center p-6 pl-64">
          
          {/* Profile Header */}
          <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-4xl">
                <FaUser className="text-gray-600" />
              </div>
              <h2 className="mt-4 text-2xl font-semibold">Teacher Doe</h2>
              <p className="text-gray-600">johndoe@example.com</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <FaEdit /> Edit Profile
              </button>
            </div>
          </div>
    
          {/* Child Profiles Section */}
          <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-6 mt-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Children Profiles</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-gray-200 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <FaChild className="text-blue-600 text-2xl" />
                  <div>
                    <p className="font-semibold">Alice Doe</p>
                    <p className="text-gray-600 text-sm">Grade 3</p>
                  </div>
                </div>
                <button className="text-blue-600">View Progress</button>
              </div>
              <div className="flex items-center justify-between bg-gray-200 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <FaChild className="text-blue-600 text-2xl" />
                  <div>
                    <p className="font-semibold">Bob Doe</p>
                    <p className="text-gray-600 text-sm">Grade 5</p>
                  </div>
                </div>
                <button className="text-blue-600">View Progress</button>
              </div>
            </div>
          </div>
    
          {/* Learning Progress Section */}
          <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-6 mt-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Learning Progress</h3>
            <div className="flex items-center gap-4 justify-center">
              <div className="text-center">
                <FaChartBar className="text-blue-600 text-4xl" />
                <p className="mt-2 text-gray-600">Alice: 75%</p>
              </div>
              <div className="text-center">
                <FaChartBar className="text-blue-600 text-4xl" />
                <p className="mt-2 text-gray-600">Bob: 85%</p>
              </div>
            </div>
          </div>
    
          {/* Settings & Logout */}
          <div className="w-full max-w-3xl flex justify-between mt-6">
            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <FaEdit /> Edit Settings
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <FaSignOutAlt /> Log Out
            </button>
          </div>
          
        </div>
      );
    };
  
  export default TeacherProfilePage;
  