import { useState, useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import { IoAddOutline } from "react-icons/io5";
import AddCourse from "../small_component/addCourse";
import axios from "axios";

const TeacherLessonsSection = () => {
  const [lessons, setLessons] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseTitle, setCourseTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  // Fetch lessons using useEffect on component mount
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get("http://localhost:3001/courses");
        console.log("Lessons fetched successfully:", response.data);
        setLessons(response.data); // Update lessons state with fetched data
      } catch (error) {
        console.error("Error fetching lessons:", error);
      }
    };

    fetchLessons(); // Call fetch function when the component mounts
  }, []); // Empty dependency array ensures this runs only once

  const handleDownload = (lessonId) => {
    const fileUrl = `http://localhost:3001/courses/${lessonId}`; // Constructing the file download URL using lesson ID
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = `lesson_${lessonId}.pdf`; // You can customize the file name if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log(`Downloading lesson ${lessonId}`);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="p-6 pl-64">
      <h2 className="text-2xl font-bold mb-4">📚 Lessons</h2>
      <ul className="space-y-4">
        {lessons.map((lesson) => (
          <li key={lesson.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
            <span className="text-lg font-medium">{lesson.title}</span>
            <button
              onClick={() => handleDownload(lesson.id)} // Passing lesson.id to handleDownload
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <FiDownload className="mr-2" /> Download
            </button>
          </li>
        ))}
      </ul>
      <div>
        <AddCourse stateObjectData={{ isModalOpen: isModalOpen }} functionObjectData={{ setIsModalOpen: setIsModalOpen }} />
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mt-10"
        >
          <IoAddOutline className="mr-2" /> Add Course
        </button>
      </div>
    </div>
  );
};

export default TeacherLessonsSection;
