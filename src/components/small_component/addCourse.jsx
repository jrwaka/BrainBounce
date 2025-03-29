import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

function AddCourse({ functionObjectData, stateObjectData }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const selectedFile = watch("file");

  const onSubmit = async (data) => {
    if (!data.courseTitle || !data.file?.[0]) {
      toast.error("Please enter a course title and select a file.");
      return;
    }

    const newCourse = {
      title: data.courseTitle,
      fileUrl: data.file[file.name], // Temporary file URL
    };

    console.log("New Course Data:", newCourse);

    try {
      const response = await axios.post(
        "http://localhost:3001/courses",
        newCourse,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Course added successfully:", response.data);

      //   functionObjectData.setLessons([...stateObjectData.lessons, response.data]);

      toast.success("Course added successfully!");

      // Reset form and refresh the course list
      reset();
      //   functionObjectData.setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding course:", error);
      toast.error("An error occurred while adding the course.");
    }
  };

  // If modal is not open, don't render anything
  if (stateObjectData.isModalOpen === false) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <Toaster position="top-right" reverseOrder={false} />

      {stateObjectData.isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">Add New Course</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                {...register("courseTitle", {
                  required: "Course title is required",
                })}
                placeholder="Enter course title"
                className="w-full p-2 border border-gray-300 rounded mb-2"
              />
              {errors.courseTitle && (
                <p className="text-red-500 text-sm">
                  {errors.courseTitle.message}
                </p>
              )}

              <input
                type="file"
                {...register("file", { required: "File is required" })}
                className="w-full p-2 border border-gray-300 rounded mb-2"
              />
              {errors.file && (
                <p className="text-red-500 text-sm">{errors.file.message}</p>
              )}
              {selectedFile?.[0] && (
                <p className="text-sm text-gray-700">
                  📂 {selectedFile[0].name}
                </p>
              )}

              <div className="flex justify-end space-x-2 mt-4">
                <button
                  type="button"
                  onClick={() => functionObjectData.setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Add Course
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddCourse;
