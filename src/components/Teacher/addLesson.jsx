import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createEditor } from "slate";
import { withReact } from "slate-react";
import Example from "./textingEditor";


const LessonForm = () => {
  const { register, handleSubmit, watch } = useForm();
  const [videoFile, setVideoFile] = useState(null);
  const [content, GetContent] = useState(""); // State for storing content from TextEditor
  const lessonType = watch("lessonType", "text");

  const handleGettingContent = (newContent) => {
    GetContent(newContent);
  }
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("lessonType", data.lessonType);

    if (lessonType === "text") {
      formData.append("content", content); // Use the content from TextEditor
    } else if (lessonType === "video" && videoFile) {
      formData.append("video", videoFile);
    }

    // Handle form submission (e.g., send to backend)
    console.log("Form Data Submitted");
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 w-full ">
      <label className="block">
        Title:
        <input
          type="text"
          {...register("title", { required: true })}
          className="border p-2 w-full"
        />
      </label>

      <label className="block">
        Lesson Type:
        <select {...register("lessonType")} className="border p-2 w-full">
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
      </label>

      {lessonType === "text" && (
        <Example GetContent={handleGettingContent} /> // Integrate the TextEditor here
      )}

      {lessonType === "video" && (
        <label className="block">
          Upload Video:
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files[0])}
            className="border p-2 w-full"
          />
        </label>
      )}

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Submit
      </button>
    </form>
  );
};

const AddLesson = () => {
  return (
    <div>
      <LessonForm />
    </div>
  );
};

export default AddLesson;
