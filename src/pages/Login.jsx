import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, z } from "zod";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import BackButton from "../components/small_component/backButton";

const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  role: z.enum(["parent", "teacher", "admin"], "Role is required"),
});

const ParentLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      // Retrieve all users from localStorage
      const users = Object.keys(localStorage)
        .map((key) => {
          try {
            return JSON.parse(localStorage.getItem(key));
          } catch (error) {
            return null; // Skip non-JSON items
          }
        })
        .filter((user) => user !== null); // Remove invalid entries
  
      // Find user with matching email & password
      const user = users.find(
        (user) => user.email === data.email && user.password === data.password
      );
  
      if (user) {
        sessionStorage.setItem("user", JSON.stringify(user));
        toast.success("Login successful!");
  
        // Redirect based on role
        switch (user.role) {
          case "parent":
            navigate("/parent-landing-page");
            break;
          case "teacher":
            navigate("/teacher-landing-page");
            break;
          case "admin":
            navigate("/adminDashboard");
            break;
          default:
            toast.error("Invalid role detected.");
        }
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <img src="./src/assets/logo.png" alt="" className="h-12 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Email:</label>
            <input
              type="email"
              {...register("email")}
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Password:</label>
            <input
              type="password"
              {...register("password")}
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Role:</label>
            <select
              {...register("role")}
              className="border w-1/3 py-1 px-0.5 rounded-sm"
            >
              <option value="parent">Parent</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
            {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account? {" "}
            <button
              onClick={() => navigate("/SignUp")}
              className="text-blue-500 hover:text-blue-600"
            >
              Sign Up
            </button>
          </p>
          <BackButton data={{ Title: "Back To Home", path: "../landing-page", width: "w-fit" }} />
        </div>
      </div>
    </div>
  );
};

export default ParentLogin;