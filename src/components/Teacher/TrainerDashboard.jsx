import React, { useEffect } from "react";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { UseUser } from "./DashboardTeacher";

function TrainerDashboard() {
  const ListOfStudent = UseUser();
  useEffect(() => {}, [ListOfStudent]);

  return (
    <>
      <div className="flex lg:pl-64 h-screen w-full">
        <div className="flex-1">
          <div className="p-6 mx-auto bg-blue-100 rounded-lg shadow-lg">
            <h1 className="text-xl font-bold text-blue- mb-4">
              Hi, [Teacher's Name]! 🎈 Ready to track your children's progress
              today? 🚀
            </h1>
            <div className="mt-6 p-4 bg-white rounded-lg shadow">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-semibold">
                  Recent Notifications 📣
                </h2>
                <Link to="/DashboardTeacher/teacherNotificationsPage">
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
            <div className="mt-6 p-4 bg-white rounded-lg shadow">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-semibold">Child’s Progress 📊</h2>
                <Link to="/DashboardTeacher/teacherStudentProgressPages">
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
            <div className="p-6 rounded-xl shadow-lg bg-white mt-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                Children Profiles
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-lg shadow-md">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700">
                      <th className="p-3 text-left">Student</th>
                      <th className="p-3 text-left">Name</th>
                      <th className="p-3 text-left">Level</th>
                      <th className="p-3 text-left">Current Course</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ListOfStudent.map((ListOfStudent) => (
                      <tr
                        key={ListOfStudent.id}
                        className="border-b hover:bg-gray-50 transition"
                      >
                        <td className="p-3">
                          <img
                            src={ListOfStudent.image}
                            alt="Student"
                            className="w-14 h-14 rounded-full border border-gray-300 mx-auto"
                          />
                        </td>
                        <td className="p-3">{ListOfStudent.name}</td>
                        <td className="p-3">{ListOfStudent.grade}</td>
                        <td className="p-3">{ListOfStudent.currentCourse}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrainerDashboard;
