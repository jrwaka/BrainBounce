import { useState } from "react";
import { FaUser, FaEdit, FaSignOutAlt, FaChild, FaChartBar } from "react-icons/fa";

const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [parentData, setParentData] = useState({ name: "John Doe", email: "johndoe@example.com" });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleClose = () => {
        setIsEditing(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center p-6 pl-64">
            {/* Profile Header */}
            <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-6 text-center">
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-4xl">
                        <FaUser className="text-gray-600" />
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold">{parentData.name}</h2>
                    <p className="text-gray-600">{parentData.email}</p>
                    <button onClick={handleEditClick} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                        <FaEdit /> Edit Profile
                    </button>
                </div>
            </div>

            {/* Child Profiles Section */}
            <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-6 mt-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Children Profiles</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between bg-gray-200 p-4 rounded-lg">
                        <div className="flex items-center gap-3">
                            <FaChild className="text-blue-600 text-2xl" />
                            <div>
                                <p className="font-semibold">Alice Doe</p>
                                <p className="text-gray-600 text-sm">Grade 3</p>
                            </div>
                        </div>
                        <button className="text-blue-600">View Progress</button>
                    </div>
                    <div className="flex items-center justify-between bg-gray-200 p-4 rounded-lg">
                        <div className="flex items-center gap-3">
                            <FaChild className="text-blue-600 text-2xl" />
                            <div>
                                <p className="font-semibold">Bob Doe</p>
                                <p className="text-gray-600 text-sm">Grade 5</p>
                            </div>
                        </div>
                        <button className="text-blue-600">View Progress</button>
                    </div>
                </div>
            </div>

            {/* Learning Progress Section */}
            <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-6 mt-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Learning Progress</h3>
                <div className="flex items-center gap-4 justify-center">
                    <div className="text-center">
                        <FaChartBar className="text-blue-600 text-4xl" />
                        <p className="mt-2 text-gray-600">Alice: 75%</p>
                    </div>
                    <div className="text-center">
                        <FaChartBar className="text-blue-600 text-4xl" />
                        <p className="mt-2 text-gray-600">Bob: 85%</p>
                    </div>
                </div>
            </div>


            {/* Edit Profile Modal */}
            {isEditing && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-xl shadow-md w-96">
                        <h3 className="text-xl font-semibold mb-4">Edit Profile</h3>
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            value={parentData.name}
                            onChange={(e) => setParentData({ ...parentData, name: e.target.value })}
                            className="w-full p-2 border rounded-lg mt-1 mb-3"
                        />
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            value={parentData.email}
                            onChange={(e) => setParentData({ ...parentData, email: e.target.value })}
                            className="w-full p-2 border rounded-lg mt-1 mb-3"
                        />
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

export default ProfilePage;
