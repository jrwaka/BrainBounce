import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { jwtDecode } from "jwt-decode";

function AddCourse({ functionObjectData, onSubmit, formState }) {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
  const selectedFiles = watch("file");

  // if (!showForm) {
  //   return null;
  // }

  return (
    <>{ formState && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
        <Toaster position="top-right" reverseOrder={false} />
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h3 className="text-xl font-bold mb-4">Add New Course</h3>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <input
              type="text"
              {...register("courseTitle", { required: "Course title is required" })}
              placeholder="Enter course title"
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            {errors.courseTitle && <p className="text-red-500 text-sm">{errors.courseTitle.message}</p>}

            <input
              type="file"
              {...register("file", { required: "At least one file is required" })}
              multiple
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            {errors.file && <p className="text-red-500 text-sm">{errors.file.message}</p>}
            {selectedFiles?.length > 0 &&
              Array.from(selectedFiles).map((file, index) => (
                <p key={index} className="text-sm text-gray-700">📂 {file.name}</p>
              ))}

            <input
              type="text"
              {...register("grade", { required: "Grade level is required" })}
              placeholder="Enter grade level"
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            {errors.grade && <p className="text-red-500 text-sm">{errors.grade.message}</p>}

            <div className="flex justify-end space-x-2 mt-4">
              <button
                type="button"
                onClick={() => functionObjectData.handlingShowingForm(false)}
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
    )

    }
      
    </>
  );
}

export default AddCourse;
