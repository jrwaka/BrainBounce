import { useState } from "react";
import { FiDownload, FiPlus, FiTrash, FiX } from "react-icons/fi";

const AdminLessonsSection = () => {
  const [lessons, setLessons] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newLesson, setNewLesson] = useState({ title: "", file: null });

  const handleDownload = (file) => {
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url); // Clean up memory
  };

  const handleAddLesson = () => {
    if (!newLesson.title || !newLesson.file) {
      alert("Please fill in all fields.");
      return;
    }

    const lessonToAdd = { id: lessons.length + 1, ...newLesson };
    setLessons([...lessons, lessonToAdd]);
    setNewLesson({ title: "", file: null });
    setShowModal(false);
  };

  const handleDeleteLesson = (id) => {
    setLessons(lessons.filter((lesson) => lesson.id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">📚 Lessons</h2>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          <FiPlus className="mr-2" /> Add Lesson
        </button>
      </div>

      <ul className="space-y-4">
        {lessons.map((lesson) => (
          <li key={lesson.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
            <span className="text-lg font-medium">{lesson.title}</span>
            <div className="flex space-x-2">
              <button
                onClick={() => handleDownload(lesson.file)}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <FiDownload className="mr-2" /> Download
              </button>
              <button
                onClick={() => handleDeleteLesson(lesson.id)}
                className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                <FiTrash className="mr-2" /> Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal for Adding Lesson */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FiX size={24} />
            </button>
            <h3 className="text-xl font-semibold mb-4">Add New Lesson</h3>
            <input
              type="text"
              placeholder="Lesson Title"
              value={newLesson.title}
              onChange={(e) => setNewLesson({ ...newLesson, title: e.target.value })}
              className="w-full p-2 border rounded mb-3"
            />
            <input
              type="file"
              accept=".pdf,.docx"
              onChange={(e) => setNewLesson({ ...newLesson, file: e.target.files[0] })}
              className="w-full p-2 border rounded mb-3"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleAddLesson}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Add Lesson
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLessonsSection;
