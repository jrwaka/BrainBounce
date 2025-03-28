import { FaUser, FaArrowLeft } from "react-icons/fa";

const TeacherStudentProgress = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center p-6 pl-64">
            {/* Header Section */}
            <div className="w-full max-w-5xl bg-white shadow-md rounded-xl p-6 text-center relative">
                <button className="absolute left-4 top-4 text-blue-600 flex items-center gap-2">
                    <FaArrowLeft /> Back
                </button>
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-4xl">
                        <FaUser className="text-gray-600" />
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold">Teacher Doe</h2>
                    <p className="text-gray-600">Grade 3</p>
                </div>
            </div>

            {/* Students Progress Table */}
            <div className="w-full max-w-5xl bg-white shadow-md rounded-xl p-6 mt-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Class Progress Overview</h3>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-left">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">Student Name</th>
                                <th className="border border-gray-300 px-4 py-2">Overall Progress</th>
                                <th className="border border-gray-300 px-4 py-2">Time Spent</th>
                                <th className="border border-gray-300 px-4 py-2">Best Subject</th>
                                <th className="border border-gray-300 px-4 py-2">Needs Improvement</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[{ name: "Alice Doe", progress: "80%", time: "10 hrs", best: "Math", improvement: "Science" },
                            { name: "Bob Doe", progress: "85%", time: "12 hrs", best: "English", improvement: "Math" },
                            { name: "Charlie Doe", progress: "70%", time: "8 hrs", best: "Science", improvement: "Reading" }].map((student, index) => (
                                <tr key={index} className="odd:bg-white even:bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{student.progress}</td>
                                    <td className="border border-gray-300 px-4 py-2">{student.time}</td>
                                    <td className="border border-gray-300 px-4 py-2">{student.best}</td>
                                    <td className="border border-gray-300 px-4 py-2">{student.improvement}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TeacherStudentProgress;