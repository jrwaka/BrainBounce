import React, { useEffect } from "react";
import { FiEye } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { UseUser } from "./parentDashboard";

function Dashboard() {
  const navigate = useNavigate();
  const navigateToLink = () => {
    navigate("/studentDashboard");
  };
  const StudentList = UseUser() || [
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
  ]; // Get student list from context

  useEffect(() => {}, [StudentList]); // Runs when StudentList changes

  return (
    <>
      <div className="flex pl-64 h-screen w-full">
        {/* Main Content */}
        <div className="flex-1">
          <div className="p-6 mx-auto bg-blue-100 rounded-lg shadow-lg">
            {/* Welcome Message */}
            <h1 className="text-xl font-bold text-blue- mb-4">
              Hi, [Parent's Name]! 🎈 Ready to track your children's progress
              today? 🚀
            </h1>

            {/* Notifications Section */}
            <div className="mt-6 p-4 bg-white rounded-lg shadow">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-semibold">
                  Recent Notifications 📣
                </h2>
                <Link to="/parentDashboard/notifications">
                  <button className="text-blue-600 flex items-center gap-1">
                    View All <FiEye />
                  </button>
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 bg-gray-200 rounded-lg shadow">
                  <p className="text-gray-700">
                    Your child has completed the first 5 lessons! 🎉
                  </p>
                </div>
                <div className="p-4 bg-gray-200 rounded-lg shadow">
                  <p className="text-gray-700">
                    New lesson plans are available for this week!
                  </p>
                </div>
              </div>
            </div>

            {/* Children’s Progress */}
            <div className="mt-6 p-4 bg-white rounded-lg shadow">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-semibold">Child’s Progress 📊</h2>
                <Link to="/parentDashboard/student-progress">
                  <button className="text-blue-600 flex items-center gap-1">
                    View All <FiEye />
                  </button>
                </Link>
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

            {/* Child's Profile */}
            <div className="p-6 rounded-xl shadow-lg bg-white mt-6">
              {/* Table Title */}
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                Children Profiles
              </h2>

              {/* Table Container for Scrollability */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-lg shadow-md">
                  {/* Table Header */}
                  <thead>
                    <tr className="bg-gray-100 text-gray-700">
                      <th className="p-3 text-left">Student</th>
                      <th className="p-3 text-left">Name</th>
                      <th className="p-3 text-left">Level</th>
                      <th className="p-3 text-left">Current Course</th>
                      <th className="p-3 text-center">Action</th>
                    </tr>
                  </thead>

                  {/* Table Body */}
                  <tbody>
                    {StudentList.map((StudentList) => (
                      <tr
                        key={StudentList.id}
                        className="border-b hover:bg-gray-50 transition"
                      >
                        <td className="p-3">
                          <img
                            src={StudentList.image}
                            alt="Student"
                            className="w-14 h-14 rounded-full border border-gray-300 mx-auto"
                          />
                        </td>
                        <td className="p-3">{StudentList.name}</td>
                        <td className="p-3">{StudentList.grade}</td>
                        <td className="p-3">{StudentList.currentCourse}</td>
                        <td className="p-3 flex justify-center gap-2">
                          <button className="bg-yellow-400 text-gray-900 font-medium py-1 px-3 rounded-md shadow-md hover:bg-yellow-500 transition">
                            +Add Course
                          </button>
                          <button
                            onClick={navigateToLink}
                            className="bg-blue-600 text-white font-medium py-1 px-3 rounded-md shadow-md hover:bg-blue-700 transition"
                          >
                            Go To Workspace
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Add Children Button */}
              <div className="mt-6">
                <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 transition">
                  +Add Child
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
