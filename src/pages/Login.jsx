import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebaseConfig"; // Import Firebase config
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import BackButton from "../components/small_component/backButton";

const ParentLogin = () => {
  const [email, setEmail] = useState(""); // email state
  const [password, setPassword] = useState(""); // password state
  const [role, setRole] = useState("");
  const [error, setError] = useState(""); // error state

  const auth = getAuth(app);
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state before each attempt

    try {
      await signInWithEmailAndPassword(auth, email, password, role);
      alert("Login Successful!");
      // Redirect to parent dashboard or another page after login
    } catch (err) {
      setError("Invalid email or password."); // Error message on failure
    }
  };

  const handleSignupRedirect = () => {
    navigate("/SignUp"); // Redirect to the signup page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <img src="./src/assets/logo.png" alt="" className="h-12 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Login</h2>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Email:</label>
            <input
              type="email"
              value={email} // Bind the email input field
              onChange={(e) => setEmail(e.target.value)} // Update email state
              required
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Password:</label>
            <input
              type="password"
              value={password} // Bind the password input field
              onChange={(e) => setPassword(e.target.value)} // Update password state
              required
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Role:</label>
            <select name="role" id="" className="border w-1/3 py-1 px-0.5 rounded-sm" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="parent">Parent</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={handleSignupRedirect}
              className="text-blue-500 hover:text-blue-600"
            >
              Sign Up
            </button>
          </p>
          <BackButton data={{Title: "Back To Home", path: "../landing-page", width:"w-fit"}}/>
        </div>
      </div>
    </div>
  );
};

export default ParentLogin;
