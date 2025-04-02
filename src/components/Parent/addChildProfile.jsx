import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

const AddChildProfile = ({ closeForm }) => {

  const [hideForm, setHideForm] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleCloseForm = (stateForm) => {
    setHideForm(stateForm);
  }
  const onSubmit = async (data) => {
    try {
      const token = JSON.parse(sessionStorage.getItem("user"));
      const tokenDecoded = token ? jwtDecode(token) : null;
      const userID = tokenDecoded ? tokenDecoded.userId : null;
  
      if (!token) {
        console.error("No token found.");
        return; // Stop execution if no token
      }
  
      const formData = new FormData();
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("age", data.childAge);
      formData.append("grade", data.grade);
      formData.append("parentId", userID);
      formData.append("profilePicture", data.childPhoto[0]); // Append the file
  
      // Debugging formData
      console.log("FormData Content:");
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }
  
      const response = await axios.post(
        "https://brainbounce.onrender.com/api/addChild",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      toast.success("Child Profile Added Successfully!");
      reset();
      handleCloseForm(false);
    } catch (error) {
      console.error("Error adding child profile:", error);
      toast.error("Failed to add child profile");
    }
  };
  

  return (
    <>
    {
      hideForm && (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <img src="./src/assets/logo.png" alt="" className="h-12 mx-auto mb-4" />
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Add Child Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">First Name:</label>
          <input
            type="text"
            {...register("firstName", { required: "First name is required" })}
            className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
        </div>

        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">Last Name:</label>
          <input
            type="text"
            {...register("lastName", { required: "Last name is required" })}
            className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
        </div>

        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">Child Age:</label>
          <input
            type="number"
            {...register("childAge", { required: "Child age is required" })}
            className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
          />
          {errors.childAge && <p className="text-red-500 text-sm">{errors.childAge.message}</p>}
        </div>

        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">Grade:</label>
          <select
            {...register("grade", { required: "Grade is required" })}
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
          {errors.grade && <p className="text-red-500 text-sm">{errors.grade.message}</p>}
        </div>

        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">Child Photo:</label>
          <input
            type="file"
            {...register("childPhoto", { required: "Child photo is required" })}
            className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            accept="image/*"
          />
          {errors.childPhoto && (
            <p className="text-red-500 text-sm">{errors.childPhoto.message}</p>
          )}
        </div>

        <div className="flex justify-between gap-5">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Add Profile
          </button>
          <button
            type="button"
            onClick={closeForm}
            className="bg-slate-500 text-white p-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
      )
    }
  </>  
  );
};

export default AddChildProfile;