import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FiDownload, FiTrash2 } from "react-icons/fi";
import { IoAddOutline } from "react-icons/io5";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import AddCourse from "../small_component/addCourse";
import {jwtDecode} from "jwt-decode";
import { Link } from "react-router-dom";

const TeacherLessonsSection = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [lessons, setLessons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const token = JSON.parse(sessionStorage.getItem("user"));
      if (!token) throw new Error("No token found");

      const decoded = jwtDecode(token);
      const userId = decoded.userId; // Ensure this matches your token structure

  useEffect(() => {
    fetchLessons(userId);
  }, [refresh]);

  const fetchLessons = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://brainbounce.onrender.com/api/getCourses/${id}`,
        
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token
          }
         }
        );
      setLessons(response.data);
    } catch (error) {
      toast.error("Failed to fetch courses");
    } finally {
      setIsLoading(false);
    }
  };

  const handlingShowingForm = (formState)=>{
    setShowForm(formState)
  }

  const onSubmit = async (data) => {
    try {

      // Construct FormData
      const formData = new FormData();
      formData.append("courseName", data.courseTitle);
      formData.append("teacherId", userId);
      formData.append("grade", data.grade);

      // Append files
      Array.from(data.file).forEach((file) => {
        formData.append("courseFiles", file);
      });

      // Send to backend
      const response = await axios.post(
        `https://brainbounce.onrender.com/api/uploadCourse/${userId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token
            "Content-Type": "multipart/form-data", } 
        }
      );

      toast.success("Course added successfully!");
      setRefresh(prev => !prev);
      reset();
      handlingShowingForm(false);
    } catch (error) {
      toast.error("An error occurred while adding the course.");
    }
  };

  console.log(lessons);
  const handleDownload = async (lessonLink) => {
    try {
      const token = JSON.parse(sessionStorage.getItem("user"));
      if (!token) {
        toast.error("Unauthorized: No token found.");
        return;
      }
  
      if (!lessonLink) {
        console.error("Error: lessonLink is undefined or empty");
        toast.error("Error: Lesson link is missing.");
        return;
      }
  
      const response = await axios.post(
        "https://brainbounce.onrender.com/api/downloadCourse",
        { courseLink: lessonLink }, // ✅ Send as JSON
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // ✅ Change content type
          }
        }
      );
  
      console.log("Response:", response);
      const url= response.data.download_url;
      console.log(url);
  
      // const url = window.URL.createObjectURL(response.data);
      // const link = document.createElement("a");
  
      // const filename = response.headers["content-disposition"]
      //   ? response.headers["content-disposition"].split("filename=")[1]
      //   : "lesson.pdf";
  
      // link.href = url;
      // link.setAttribute("download", filename);
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);
  
      toast.success("Downloading lesson...");
    } catch (error) {
      console.error("Download failed:", error);
      toast.error("Download failed. Please try again.");
    }
  };
  
  

  const handleDeleteCourse = async (_id) => {
    try {
      await axios.delete(`https://brainbounce.onrender.com/api/course/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token
          "Content-Type": "multipart/form-data", } });
          
      toast.success("Course deleted successfully");
      fetchLessons(userId);
    } catch (error) {
      toast.error("Failed to delete course");
    }
  };

  return (
    <div className="p-6 relative">
      <Toaster position="top-right" />
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">📚 Courses</h2>
        
        <div className="flex gap-4">
          <button
            onClick={() => handlingShowingForm(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <IoAddOutline className="mr-2" /> Add Course
          </button>

          {/* <Link 
            to="../addLesson" 
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <IoAddOutline className="mr-2" /> Add Lesson
          </Link> */}
        </div>

      </div>
      {isLoading ? (
        <div className="text-center text-gray-500">Loading courses...</div>
      ) : lessons.length === 0 ? (
        <div className="text-center text-gray-500 p-8 bg-gray-100 rounded-lg">
          No courses available. Click "Add Course" to get started.
        </div>
      ) : (
        <ul className="space-y-4">
          {lessons.map((lesson) => (
            <li key={lesson._id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition-colors">
              <span className="text-lg font-medium flex-grow">{lesson.courseName}</span>
              <div className="flex space-x-2">
                <a
                  // onClick={() => handleDownload(lesson.courseLink)}
                  href={lesson.courseLink}
                  target="_blank"
                  className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <FiDownload className="mr-2" /> Download
                </a>
                <button
                  onClick={() => handleDeleteCourse(lesson._id)}
                  className="flex items-center px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  <FiTrash2 />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <AddCourse functionObjectData={{ handlingShowingForm }} onSubmit={onSubmit} formState={showForm} />
    </div>
  );
};

export default TeacherLessonsSection;
