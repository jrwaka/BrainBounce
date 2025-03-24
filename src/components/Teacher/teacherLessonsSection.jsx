import { FiDownload } from "react-icons/fi";
import { IoAddOutline } from "react-icons/io5";
const lessons = [
  { id: 1, title: "Math Basics", fileUrl: "/downloads/math_basics.pdf" },
  { id: 2, title: "Science Fundamentals", fileUrl: "/downloads/science_fundamentals.pdf" },
  { id: 3, title: "History of Rwanda", fileUrl: "/downloads/history_rwanda.pdf" },
];

const TeacherLessonsSection = () => {
  const handleDownload = (fileUrl) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.split("/").pop(); // Extracts filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
      <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mt-10">
              <IoAddOutline className="mr-2" /> Add Course
        </button>
    </div>
  );
};

export default TeacherLessonsSection;
