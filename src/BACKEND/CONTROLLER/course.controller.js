const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const storage = multer.diskStorage({});
const upload = multer({ storage });
const {course} = require("../MODELS/course.model")

require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const uploadCourse = async (req, res) => {
  try {
    const { courseName, Teacher, lessons } = req.body;

    // Check if the necessary fields are provided
    if (
      !courseName ||
      !Teacher ||
      !lessons ||
      !Array.isArray(lessons)
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Missing required fields (courseName, Teacher, courseLink, and lessons are required)",
      });
    }

    // Check if all lessons have the required fields (lessonTitle and quiz)
    const invalidLesson = lessons.find(
      (lesson) => !lesson.lessonTitle || !lesson.quiz
    );
    if (invalidLesson) {
      return res.status(400).json({
        success: false,
        message: "Each lesson must have a title and quiz",
      });
    }

    // Check if the number of files matches the number of lessons
    if (req.files && req.files.length !== lessons.length) {
      return res.status(400).json({
        success: false,
        message:
          "The number of files uploaded does not match the number of lessons",
      });
    }

    // Upload each lesson file to Cloudinary and associate the lesson link
    const lessonsWithLinks = await Promise.all(
      lessons.map(async (lesson, index) => {
        // Upload the file to Cloudinary
        const file = req.files[index]; // Get the file corresponding to this lesson
        const cloudinaryResult = await cloudinary.uploader.upload(file.path, {
          folder: "courses",
        });

        // Return the lesson with the lessonLink set to the Cloudinary URL
        return {
          ...lesson,
          lessonLink: cloudinaryResult.secure_url, // Use Cloudinary's URL
        };
      })
    );

    // Create the course object to save
    const newCourse = new Course({
      courseName,
      Teacher,
      courseLink,
      lessons: lessonsWithLinks, // Updated lessons with the uploaded links
    });

    // Save the course to the database
    const savedCourse = await newCourse.save();

    // Return the saved course
    res.json({ success: true, data: savedCourse });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Upload failed", error: error.message });
  }
};

const downloadCourse = async (req, res) => {
  try {
    const { public_id } = req.query; // Get public_id from request

    if (!public_id) {
      return res.status(400).json({ error: "Public ID is required" });
    }

  
    const fileUrl = cloudinary.url(public_id, {
      resource_type: "raw", 
      secure: true, 
    });

    res.json({ download_url: fileUrl });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = {
  upload,
  uploadCourse,
  downloadCourse,
};
