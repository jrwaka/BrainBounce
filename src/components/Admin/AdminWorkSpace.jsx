import React from "react";
import { FiArrowRight, FiBook, FiEye, FiStar } from "react-icons/fi";

const AdminWorkSpace = () => {
  return (
    <div>
      {" "}
      <div className="flex-1 p-10">
        <div className="py-10 px-20 max-w-4xl mx-auto bg-blue-100 rounded-lg shadow-lg">
          {/* Welcome Message */}
          <h1 className="text-xl font-medium text-blue- mb-4">
            Welcome, Admin!
          </h1>

          <p className="text-gray-700">
            Here's a quick overview of the platform.
          </p>

          {/* Explore Different Lessons */}
          <div className="mt-6 p-4 bg-white rounded-lg shadow">
  
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-200 rounded-lg shadow hover:bg-blue-100">
                <h3 className="text-lg font-semibold">[Total Number]</h3>
                <p className="text-gray-700">Total Users</p>
              </div>

              <div className="p-4 bg-green-200 rounded-lg shadow hover:bg-green-100">
                <h3 className="text-lg font-semibold">[Total Number]</h3>
                <p className="text-gray-700">Active Lessons</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminWorkSpace;
