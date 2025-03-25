import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/small_component/backButton";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [gradeLevel, setGradeLevel] = useState(""); // New state for grade level
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Handle form submission
  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (!firstName || !lastName || !phoneNumber || !email || !role || !password || !confirmPassword) {
      setError("All fields are required!");
      return;
    }

    // If role is teacher, ensure grade level is selected
    if (role === "teacher" && !gradeLevel) {
      setError("Please select a grade level.");
      return;
    }

    alert("Sign Up Successful!");
    navigate(role === "teacher" ? "/apply" : "/add-child");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <img src="./src/assets/logo.png" alt="Logo" className="h-12 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Sign Up</h2>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        <form onSubmit={handleSignUp} className="flex flex-col space-y-4">
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full p-1 border rounded focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-full p-1 border rounded focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Phone Number:</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="w-full p-1 border rounded focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-1 border rounded focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Role:</label>
            <select 
              className="border w-full p-1 rounded focus:ring focus:ring-blue-300"
              value={role} 
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="parent">Parent</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          {/* Grade level dropdown (only visible if Teacher is selected) */}
          {role === "teacher" && (
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-1">Grade Level:</label>
              <select
                className="border w-full p-1 rounded focus:ring focus:ring-blue-300"
                value={gradeLevel}
                onChange={(e) => setGradeLevel(e.target.value)}
              >
                <option value="">Select Grade Level</option>
                <option value="Primary 1">Primary 1</option>
                <option value="Primary 2">Primary 2</option>
                <option value="Primary 3">Primary 3</option>
                <option value="Primary 4">Primary 4</option>
                <option value="Primary 5">Primary 5</option>
                <option value="Primary 6">Primary 6</option>
              </select>
            </div>
          )}

          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-1 border rounded focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-1 border rounded focus:ring focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            {role === "teacher" ? "Apply" : "Add Child Profile"}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Have an account?{" "}
            <button
              onClick={() => navigate("/ParentLogin")}
              className="text-blue-500 hover:text-blue-600"
            >
              Login
            </button>
          </p>
          <BackButton data={{ Title: "Back To Home", width: "w-fit", path: "../landing-page" }} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
