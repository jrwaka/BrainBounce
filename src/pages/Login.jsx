import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import BackButton from "../components/small_component/backButton";

const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string(),
  // role: z.enum(["parent", "teacher", "admin"]),
});

const ParentLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
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
      // Fetch users from backend
      const response = await axios.post("https://brainbounce.onrender.com/api/signIn", data);
      const user = response.data; // Ensure this matches API response format

      // Find user with matching email & password
      const tokenDecoded = user.token ? jwtDecode(user.token) : null;

      if (tokenDecoded) {
        // if (user.role !== data.role) {
        //   toast.error("Incorrect role selected for this account.");
        //   return;
        // }
        sessionStorage.setItem("user", JSON.stringify(user.token));
        console.log("Token",tokenDecoded);
        toast.success("Login successful!");

        // Redirect based on role
        switch (tokenDecoded.role) {
          case "Parent":
            navigate("/parent-landing-page");
            break;
          case "Teacher":
            navigate("/teacher-landing-page");
            break;
          case "Admin":
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
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
          <div>
            <input
              type="email"
              {...register("email")}
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-0.5 right-0.5 bottom-0.5 left-[87%] bg-white"
            >
              {showPassword ? <IoEyeOutline size={25} /> : <IoEyeOffOutline size={25} />}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          {/* <div>
            <select {...register("role")} className="border w-1/3 py-1 px-0.5 rounded-sm">
              <option value="" disabled defaultChecked>Select Role</option>
              <option value="parent">Parent</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
            {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
          </div> */}

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <button onClick={() => navigate("/SignUp")} className="text-blue-500 hover:text-blue-600">
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
