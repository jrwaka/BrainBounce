import React, { useState } from "react";

const AddChildProfile = ({closeForm, formState}) => {
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [grade, setGrade] = useState("");
  const [childPhoto, setChildPhoto] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleAddChildProfile = (e) => {
    e.preventDefault();
    setError(""); // Reset any previous errors

    // Simple validation for required fields
    if (!childName || !grade) {
      setError("All fields are required!");
      return;
    }

    // Proceed with the logic to save the child's profile (You can add Firebase logic here)
    alert("Child Profile Added Successfully!");
    // Redirect or clear form logic here
  };
  const changeFormState = () => {
    if (closeForm) {
      closeForm(); // Call the function passed from the parent
    }
  };  
  return (
    <>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border">
      <img src="./src/assets/logo.png" alt="" className="h-12 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Add Child Profile</h2>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        <form onSubmit={handleAddChildProfile} className="flex flex-col space-y-4">
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Child Name:</label>
            <input
              type="text"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              required
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Child Age:</label>
            <input
              type="number"
              value={childAge}
              onChange={(e) => setChildAge(e.target.value)}
              required
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Grade:</label>
            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            >
              <option value="">Select Grade</option>
              <option value="Grade 1">Primary 1</option>
              <option value="Grade 2">Primary 2</option>
              <option value="Grade 3">Primary 3</option>
              <option value="Grade 4">Primary 4</option>
              <option value="Grade 5">Primary 5</option>
              <option value="Grade 6">Primary 6</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Child Photo:</label>
            <input
              type="file"
              value={childPhoto}
              onChange={(e) => setChildPhoto(e.target.value)}
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="flex justify-between gap-5">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Add Profile
          </button>

          <button onClick={changeFormState} className="bg-slate-500 text-white p-2 rounded">
            Cancel
          </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddChildProfile;
