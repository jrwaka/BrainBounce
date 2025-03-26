import { useState } from "react";
import { FaUserPlus, FaEdit, FaTrash, FaUsers, FaTimes } from "react-icons/fa";

const usersData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Teacher", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Parent", status: "Inactive" },
];

const AdminProfileSection = () => {
  const [users, setUsers] = useState(usersData);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const [deletingUser, setDeletingUser] = useState(null);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) &&
    (roleFilter ? user.role === roleFilter : true)
  );

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDelete = (user) => {
    setDeletingUser(user);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center p-6">
      {/* Header */}
      <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-6 text-center">
        <h2 className="text-2xl font-semibold flex items-center justify-center gap-2">
          <FaUsers /> Manage Users
        </h2>
      </div>

      {/* Controls */}
      <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-6 mt-6">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="w-40 px-3 py-2 border rounded"
          >
            <option value="">All Roles</option>
            <option value="Teacher">Teacher</option>
            <option value="Parent">Parent</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-6 mt-6">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.role}</td>
                <td className="border p-2">
                  <span className={user.status === "Active" ? "text-green-500" : "text-red-500"}>
                    {user.status}
                  </span>
                </td>
                <td className="border p-2 flex justify-center gap-2">
                  <button onClick={() => handleEdit(user)} className="bg-yellow-500 text-white p-2 rounded flex items-center gap-1 hover:bg-yellow-600 transition">
                    <FaEdit /> <span>Edit</span>
                  </button>
                  <button onClick={() => handleDelete(user)} className="bg-red-500 text-white p-2 rounded flex items-center gap-1 hover:bg-red-600 transition">
                    <FaTrash /> <span>Delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit User Modal */}
      {editingUser && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold">Edit User</h3>
            <input className="w-full border p-2 mt-2" defaultValue={editingUser.name} />
            <input className="w-full border p-2 mt-2" defaultValue={editingUser.email} />
            <div className="flex justify-end mt-4 gap-2">
              <button onClick={() => setEditingUser(null)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deletingUser && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
            <h3 className="text-xl font-semibold">Delete User?</h3>
            <p className="text-gray-600">Are you sure you want to delete {deletingUser.name}?</p>
            <div className="flex justify-center mt-4 gap-2">
              <button onClick={() => setDeletingUser(null)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
              <button className="bg-red-600 text-white px-4 py-2 rounded">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProfileSection;
