import { FaUser, FaBook, FaChartBar, FaClock, FaStar, FaArrowLeft } from "react-icons/fa";
const StudentProgressPage = () => {
    return <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center p-6 pl-64">
      
    {/* Header Section */}
    <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-6 text-center relative">
      <button className="absolute left-4 top-4 text-blue-600 flex items-center gap-2">
        <FaArrowLeft /> Back
      </button>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-4xl">
          <FaUser className="text-gray-600" />
        </div>
        <h2 className="mt-4 text-2xl font-semibold">Alice Doe</h2>
        <p className="text-gray-600">Grade 3</p>
      </div>
    </div>

    {/* Progress Overview */}
    <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-6 mt-6">
      <h3 className="text-xl font-semibold mb-4 text-center">Learning Progress</h3>
      <div className="flex justify-around">
        <div className="text-center">
          <FaChartBar className="text-blue-600 text-4xl" />
          <p className="mt-2 text-gray-600">Overall Progress: 75%</p>
        </div>
        <div className="text-center">
          <FaClock className="text-blue-600 text-4xl" />
          <p className="mt-2 text-gray-600">Time Spent: 12 hrs</p>
        </div>
      </div>
    </div>

    {/* Completed Lessons */}
    <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-6 mt-6">
      <h3 className="text-xl font-semibold mb-4 text-center">Completed Lessons</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between bg-gray-200 p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <FaBook className="text-green-600 text-2xl" />
            <p className="font-semibold">Math: Addition & Subtraction</p>
          </div>
          <p className="text-gray-600 text-sm">Score: 90%</p>
        </div>
        <div className="flex items-center justify-between bg-gray-200 p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <FaBook className="text-green-600 text-2xl" />
            <p className="font-semibold">Science: Water Cycle</p>
          </div>
          <p className="text-gray-600 text-sm">Score: 85%</p>
        </div>
        <div className="flex items-center justify-between bg-gray-200 p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <FaBook className="text-green-600 text-2xl" />
            <p className="font-semibold">English: Reading Comprehension</p>
          </div>
          <p className="text-gray-600 text-sm">Score: 92%</p>
        </div>
      </div>
    </div>

    {/* Performance Insights */}
    <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-6 mt-6">
      <h3 className="text-xl font-semibold mb-4 text-center">Performance Insights</h3>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 bg-green-100 p-4 rounded-lg">
          <FaStar className="text-green-600 text-2xl" />
          <p>Strong in Math & Reading</p>
        </div>
        <div className="flex items-center gap-3 bg-yellow-100 p-4 rounded-lg">
          <FaStar className="text-yellow-600 text-2xl" />
          <p>Needs improvement in Science</p>
        </div>
      </div>
    </div>

  </div>;
  };
  
  export default StudentProgressPage;
  