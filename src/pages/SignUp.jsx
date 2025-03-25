import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-hot-toast";
import BackButton from "../components/small_component/backButton";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const signUpSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    phoneNumber: z.string().min(10, "Phone number is required"),
    email: z.string().email("Invalid email address"),
    role: z.enum(["parent", "teacher"], { required_error: "Role is required" }),
    gradeLevel: z.string().optional(),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const SignUp = () => {
  //Show and hide password
  const [showPassword, setShowPassword] = useState(false);
  // Create User ID
  // const [userId, setUserId] = useState(null);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signUpSchema) });

  const role = watch("role");

  //Form Submission
  const onSubmit = async (data, event) => {
    const users = Object.keys(localStorage)
      .map((key) => {
        try {
          return JSON.parse(localStorage.getItem(key));
        } catch (error) {
          return null; // Skip non-JSON items
        }
      })
      .filter((user) => user !== null); // Remove invalid entries
  
    // Check if email already exists
    const existingUser = users.find((user) => user.email === data.email && user.role === data.role);
  
    if (existingUser) {
      toast.error("Email already exists. Please use a different email.");
      
      // Clear email input field
      event.target.email.value = ""; 
      return;
    }
  
    try {
      const ID = `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  
      if (data.role === "parent") {
        delete data.gradeLevel;
      }
  
      if (data.role === "teacher") {
        toast.success("Application received successfully! Check your email.");
        navigate("/apply");
      } else {
        toast.success("Signed Up Successfully!");
        navigate("/ParentLogin");
      }
  
      localStorage.setItem(ID, JSON.stringify(data));
      console.log(ID, data);
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };
  
  //Create a function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <img src="./src/assets/logo.png" alt="Logo" className="h-12 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
          {errors && <p className="text-red-500 text-sm text-center">{errors?.message}</p>}

          <input {...register("firstName")} placeholder="First Name" className="w-full p-2 border rounded focus:ring focus:ring-blue-300" />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}

          <input {...register("lastName")} placeholder="Last Name" className="w-full p-2 border rounded focus:ring focus:ring-blue-300" />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}

          <input {...register("phoneNumber")} placeholder="Phone Number" className="w-full p-2 border rounded focus:ring focus:ring-blue-300" />
          {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}

          <input {...register("email")} placeholder="Email" type="email" className="w-full p-2 border rounded focus:ring focus:ring-blue-300" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <select {...register("role")} className="w-full p-2 border rounded focus:ring focus:ring-blue-300">
            <option value="">Select Role</option>
            <option value="parent">Parent</option>
            <option value="teacher">Teacher</option>
          </select>
          {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}

          {role === "teacher" && (
            <select {...register("gradeLevel")} className="w-full p-2 border rounded focus:ring focus:ring-blue-300">
              <option value="">Select Grade Level</option>
              {[...Array(6)].map((_, i) => (
                <option key={i} value={`Primary ${i + 1}`}>{`Primary ${i + 1}`}</option>
              ))}
            </select>
          )}
          <div className="relative">
            <input {...register("password")} placeholder="Password" type={showPassword ? "text" : "password"} className="overflow-hidden w-full p-2 border rounded focus:ring focus:ring-blue-300" />
            <button onClick={togglePasswordVisibility} className="absolute top-0.5 right-0.5 bottom-0.5 left-[87%] bg-white">{showPassword?<IoEyeOutline className="place-self-center" size={25} />:<IoEyeOffOutline className="place-self-center" size={25} />}</button>
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          <input {...register("confirmPassword")} placeholder="Confirm Password" type="password" className="w-full p-2 border rounded focus:ring focus:ring-blue-300" />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
            {role === "teacher" ? "Apply" : "Sign Up"}
          </button>
        </form>
        
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Have an account?{' '}
            <button onClick={() => navigate("/ParentLogin")} className="text-blue-500 hover:text-blue-600">
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
