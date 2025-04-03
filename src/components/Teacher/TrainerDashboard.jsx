import React, { useEffect, useState } from "react";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { UseUser } from "./DashboardTeacher";
import { jwtDecode } from "jwt-decode";

function TrainerDashboard() {
  const [userName, setUserName] = useState("");
  const ListOfStudent = UseUser();
  useEffect(() => {

  }, [ListOfStudent]);
  const displayingUserName=(name) => {
    setUserName(name);
  }
    useEffect(() => {
    const token = sessionStorage.getItem("user");
    const tokenDecoded = jwtDecode(token);
    const currentEmail = tokenDecoded.email;
    const currentRole = tokenDecoded.role;
    const currentName = tokenDecoded.firstName;
    const name = displayingUserName(currentName);
  }, []);

  return (
    <>
      <div className="flex h-full ">
        <div className="flex-1">
          <div className="md:p-6 px-2 mx-auto bg-blue-100 m:rounded-lg shadow-lg">
            <h1 className="lg:text-xl text-lg lg:font-bold font-semibold text-blue- mb-4 lg:mr-0 mr-4 lg:ml-0 ml-4 ">
              Welcome Teacher {userName}!
            </h1>
           
            {/* Lesson Management */}
            <div className="mt-6 p-4 bg-white rounded-lg shadow lg:ml-0 ml-4 lg:mr-0 mr-4">
              <div className="flex justify-between items-center mb-3">
                <h2 className="lg:text-xl font-semibold">Lesson Management ✏️</h2>
                <Link to="/DashboardTeacher/teacherLessonsSection">
                  <button className="text-blue-600 flex items-center gap-1">
                    Create Lesson ➕
                  </button>
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="lg:p-4 p-2 bg-yellow-200 rounded-lg shadow">
                  <h3 className="font-semibold">Interactive Learning</h3>
                  <p>Design engaging lessons tailored to different grade levels.</p>
                </div>
                <div className="lg:p-4 p-2 bg-purple-200 rounded-lg shadow">
                  <h3 className="font-semibold">Curriculum Alignment</h3>
                  <p>Ensure lessons align with educational standards and objectives.</p>
                </div>
              </div>
            </div>


            
          </div>
        </div>
      </div>
    </>
  );
}

export default TrainerDashboard;
