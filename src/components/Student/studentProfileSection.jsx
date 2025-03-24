import { useState } from "react";
import { FaUser, FaEdit, FaSignOutAlt, FaChartBar } from "react-icons/fa";

const ProfileSection = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [childData, setChildData] = useState({ name: "Alice Doe", age: 9, grade: "Primary 3" });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleClose = () => {
        setIsEditing(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center p-6">
            {/* Profile Header */}
            <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-6 text-center">
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-4xl">
                        <FaUser className="text-gray-600" />
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold">John Doe</h2>
                    <p className="text-gray-600">johndoe@example.com</p>
                    <button onClick={handleEditClick} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                        <FaEdit /> Edit Profile
                    </button>
                </div>
            </div>

            {/* Learning Progress Section */}
            <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-6 mt-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Learning Progress</h3>
                <div className="flex items-center gap-4 justify-center">
                    <div className="text-center">
                        <FaChartBar className="text-blue-600 text-4xl" />
                        <p className="mt-2 text-gray-600">Mathematics: 75%</p>
                    </div>
                    <div className="text-center">
                        <FaChartBar className="text-blue-600 text-4xl" />
                        <p className="mt-2 text-gray-600">Science: 85%</p>
                    </div>
                </div>
            </div>

            {/* Edit Profile Modal */}
            {isEditing && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
                    <div className="bg-white p-6 rounded-xl shadow-md w-96">
                        <h3 className="text-xl font-semibold mb-4">Edit Child Profile</h3>
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            value={childData.name}
                            onChange={(e) => setChildData({ ...childData, name: e.target.value })}
                            className="w-full p-2 border rounded-lg mt-1 mb-3"
                        />
                        <label className="block text-gray-700">Age</label>
                        <input
                            type="number"
                            value={childData.age}
                            onChange={(e) => setChildData({ ...childData, age: e.target.value })}
                            className="w-full p-2 border rounded-lg mt-1 mb-3"
                        />
                        <label className="block text-gray-700">Grade Level</label>
                        <select
                            value={childData.grade}
                            onChange={(e) => setChildData({ ...childData, grade: e.target.value })}
                            className="w-full p-2 border rounded-lg mt-1 mb-3"
                        >
                            <option>Primary 1</option>
                            <option>Primary 2</option>
                            <option>Primary 3</option>
                            <option>Primary 4</option>
                            <option>Primary 5</option>
                            <option>Primary 6</option>
                        </select>
                        <div className="flex justify-end gap-2">
                            <button onClick={handleClose} className="bg-gray-400 text-white px-4 py-2 rounded-lg">Cancel</button>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileSection;
