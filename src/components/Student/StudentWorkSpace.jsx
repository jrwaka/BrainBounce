import React from "react";
import { FiArrowRight, FiBook, FiEye, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
import CourseNavBar from "../small_component/courseNavBar";
const StudentWorkSpace = () => {
  return (
    <div>
      {" "}
      <div className="w-full bg-slate-300 flex-1">
        <div className="max-w-4xl mx-auto bg-blue-100 rounded-lg shadow-lg">
          {/* Welcome Message */}
          <CourseNavBar />
          <h1 className="text-xl font-bold text-blue- mb-4">
            Hi, [Student's Name]! 🎈 Are you ready for a new adventure today? 🚀
          </h1>


          
        </div>
      </div>
    </div>
  );
};

export default StudentWorkSpace;
