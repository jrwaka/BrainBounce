import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { IoAddOutline } from "react-icons/io5";

const TeacherLessonsSection = () => {
  const [lessons, setLessons] = useState([
    { id: 1, title: "Math Basics", fileUrl: "/downloads/math_basics.pdf" },
    { id: 2, title: "Science Fundamentals", fileUrl: "/downloads/science_fundamentals.pdf" },
    { id: 3, title: "History of Rwanda", fileUrl: "/downloads/history_rwanda.pdf" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseTitle, setCourseTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDownload = (fileUrl) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleAddCourse = () => {
    if (!courseTitle || !selectedFile) {
      alert("Please enter a course title and select a file.");
      return;
    }

    const newCourse = {
      id: lessons.length + 1,
      title: courseTitle,
      fileUrl: URL.createObjectURL(selectedFile), // Temporary URL
    };

    setLessons([...lessons, newCourse]);
    setCourseTitle("");
    setSelectedFile(null);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 pl-64">
      <h2 className="text-2xl font-bold mb-4">📚 Lessons</h2>
      <ul className="space-y-4">
        {lessons.map((lesson) => (
          <li key={lesson.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
            <span className="text-lg font-medium">{lesson.title}</span>
            <button
              onClick={() => handleDownload(lesson.fileUrl)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <FiDownload className="mr-2" /> Download
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mt-10"
      >
        <IoAddOutline className="mr-2" /> Add Course
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">Add New Course</h3>
            <input
              type="text"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
              placeholder="Enter course title"
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            {selectedFile && <p className="text-sm text-gray-700">📂 {selectedFile.name}</p>}
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCourse}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Add Course
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherLessonsSection;
