import { useState } from "react";
import { FaUser, FaEdit, FaSignOutAlt, FaChild, FaChartBar, FaTimes } from "react-icons/fa";

const TeacherProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("Teacher Doe");
  const [email, setEmail] = useState("johndoe@example.com");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center p-6 pl-64">
      {/* Profile Header */}
      <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-6 text-center">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-4xl">
            <FaUser className="text-gray-600" />
          </div>
          <h2 className="mt-4 text-2xl font-semibold">{name}</h2>
          <p className="text-gray-600">{email}</p>
          <button 
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            onClick={() => setIsModalOpen(true)}
          >
            <FaEdit /> Edit Profile
          </button>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Edit Profile</h2>
              <button onClick={() => setIsModalOpen(false)}>
                <FaTimes className="text-gray-600" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border rounded-lg" 
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border rounded-lg" 
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button 
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                  onClick={() => setIsModalOpen(false)}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherProfilePage;
