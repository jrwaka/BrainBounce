import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import BackButton from "../components/small_component/backButton";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Handle form submission
  const handleSignUp = (e) => {
    e.preventDefault();
    setError(""); // Reset any previous errors

    // Validate password and confirm password match
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Simple validation for required fields
    if (!firstName || !lastName || !phoneNumber || !email || !role || !password || !confirmPassword) {
      setError("All fields are required!");
      return;
    }
    // After successful signup, redirect to Add Child Profile page
    alert("Sign Up Successful!");
    navigate("/add-child"); // Redirect to the Add Child Profile page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <img src="./src/assets/logo.png" alt="" className="h-12 mx-auto mb-4" />
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
              name="role" 
              className="border w-1/3 py-1 px-0.5 rounded-sm" 
              value={role} 
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="parent">Parent</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

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
        </form>

        <div className="text-center mt-4">
          <button
            onClick={() => navigate(role === "teacher" ? "/apply" : "/add-child")} // Change button text based on role
            className="w-full bg-blue-500 text-white p-1 rounded hover:bg-blue-600 transition"
          >
            {role === "teacher" ? "Apply" : "Add Child Profile"}
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Have an account?{" "}
            <button
              onClick={() => navigate("/ParentLogin")} // Redirect to the Login page
              className="text-blue-500 hover:text-blue-600"
            >
              Login
            </button>
          </p>
          <BackButton data={{Title:"Back To Home", width:"w-fit", path:"../landing-page"}}/>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
