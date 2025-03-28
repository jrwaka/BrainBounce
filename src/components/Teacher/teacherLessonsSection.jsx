import React, { useState, useEffect } from "react";
import { FiDownload, FiTrash2 } from "react-icons/fi";
import { IoAddOutline } from "react-icons/io5";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import AddCourse from "../small_component/addCourse";

const TeacherLessonsSection = () => {
  const [lessons, setLessons] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch lessons from JSON server
  const fetchLessons = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/courses");
      setLessons(response.data);
      setIsLoading(false);
    } catch (error) {
      toast.error("Failed to fetch courses");
      console.error("Error fetching lessons:", error);
      setIsLoading(false);
    }
  };

  // Fetch lessons on component mount
  useEffect(() => {
    fetchLessons();
  }, []);

  // Handle file download for JSON server
  const handleDownload = (lesson) => {
    try {
      // With JSON server, we need to handle the file differently
      // since the actual file isn't stored in the server
      
      // For files stored as base64 strings in db.json
      if (typeof lesson.fileUrl === 'string' && lesson.fileUrl.startsWith('data:')) {
        // Handle base64 encoded files
        const link = document.createElement('a');
        link.href = lesson.fileUrl;
        link.download = `${lesson.title.replace(/\s+/g, '_')}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success(`Downloaded ${lesson.title}`);
      } 
      // For files referenced by path in db.json
      else {
        // Use the file path stored in db.json
        window.open(`${lesson.fileUrl}`, '_blank');
        toast.success(`Opened ${lesson.title}`);
      }
    } catch (error) {
      console.error("Download failed:", error);
      toast.error("Download failed. Please try again.");
    }
  };

  // Delete course from JSON server
  const handleDeleteCourse = async (courseId) => {
    try {
      await axios.delete(`http://localhost:3001/courses/${courseId}`);
      toast.success("Course deleted successfully");
      fetchLessons(); // Refresh courses after deletion
    } catch (error) {
      console.error("Delete course failed:", error);
      toast.error("Failed to delete course");
    }
  };

  return (
    <div className="p-6 pl-64 relative">
      <Toaster position="top-right" />
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">📚 Courses</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <IoAddOutline className="mr-2" /> Add Course
        </button>
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
            <li 
              key={lesson.id} 
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition-colors"
            >
              <span className="text-lg font-medium flex-grow">{lesson.title}</span>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => handleDownload(lesson)}
                  className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <FiDownload className="mr-2" /> Download
                </button>
                
                <button
                  onClick={() => handleDeleteCourse(lesson.id)}
                  className="flex items-center px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  <FiTrash2 />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <AddCourse 
        stateObjectData={{ isModalOpen, lessons }} 
        functionObjectData={{ 
          setIsModalOpen, 
          setLessons,
          fetchLessons // Pass the fetchLessons function to refresh after adding
        }} 
      />
    </div>
  );
};

export default TeacherLessonsSection;