import React, { useEffect, useState } from "react";
import { FiEye } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import AddChildProfile from "./addChildProfile";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import toast from "react-hot-toast";

function Dashboard() {
  const [addChildren, setAddChildren] = useState(false);
  const [childrenList, setChildrenList] = useState([]);
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();
  const navigateToLink = (grade) => {
    navigate(`/studentDashboard/StudentWorkSpace?grade=${grade}`);
  };

  const gettingUserId = () => {
    const token = JSON.parse(sessionStorage.getItem("user"));
    const tokenDecoded = token ? jwtDecode(token) : null;
    return tokenDecoded ? tokenDecoded.userId : null;
  };

  const fetchingChild = async (userId) => {
    const token = JSON.parse(sessionStorage.getItem("user"));
    try {
      const response = await axios.get(
        `https://brainbounce.onrender.com/api/children/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setChildrenList(response.data);
      // toast.success("Child Profile Fetched Successfully!");
    } catch (error) {
      console.error("Error fetching child profile:", error);
      toast.error("Failed to fetch child profile");
    }
  };
  console.log(childrenList);
  useEffect(() => {
    const userId = gettingUserId();
    if (userId) fetchingChild(userId);
  }, []);

  useEffect(() => {
    const token = sessionStorage.getItem("user");
    if (token) {
      const tokenDecoded = jwtDecode(token);
      setUserName(tokenDecoded.firstName || "");
    }
  }, []);

  const handleAddChild = () => {
    setAddChildren((prev) => !prev);
  };

  return (
    <div className="flex h-screen w-full ">
      <div className="flex-1 w-full ">
        <div className="p-6 mx-auto bg-blue-100 rounded-lg shadow-lg mt-32">
          <h1 className="text-xl font-bold text-blue- mb-4">
            Welcome to the Parent Dashboard, {userName}!
          </h1>
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
                    <th className="p-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {childrenList.length > 0 ? (
                    childrenList.map((child, index) => (
                      <tr
                        key={index}
                        className="border-b hover:bg-gray-50 transition"
                      >
                        <td className="p-3">
                          <img
                            src={child.profilePicture}
                            alt="Student"
                            className="w-16 h-16 rounded-full object-center object-cover border border-gray-300 mx-auto"
                          />
                        </td>
                        <td className="p-3">{child.firstName} {child.lastName}</td>
                        <td className="p-3">{child.grade}</td>
                        <td className="p-3 flex justify-center gap-2">
                          <button
                            onClick={() => navigateToLink(child.grade)}
                            className="bg-blue-600 text-white font-medium py-1 px-3 rounded-md shadow-md hover:bg-blue-700 transition"
                          >
                            Go To Workspace
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="p-3 text-center text-gray-500">
                        No children profiles found, Click Add Child Button to Add a Child.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="mt-6 relative">
              <button
                onClick={handleAddChild}
                className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 transition"
              >
                +Add Child
              </button>
              {addChildren && (
                <div className="absolute w-2/3 rounded-lg transform transition-all duration-300 ease-in-out scale-100 translate-x-80 -translate-y-[100%]">
                  <AddChildProfile closeForm={handleAddChild} formState={addChildren} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
