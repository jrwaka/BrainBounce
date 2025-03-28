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
    const { courseName, teacherId, grade } = req.body;

    // Check if files are uploaded
    if (!req.files || req.files.length === 0) {
      return res
        .status(400)
        .json({ message: "At least one lesson file is required" });
    }

    // Process lesson files
    const lessons = await Promise.all(
      req.files.map(async (file, index) => {
        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(file.path, {
          resource_type: "auto",
        });

        return {
          lessonTitle: req.body[`lessonTitle${index}`], // Get lesson title from request
          lessonLink: result.secure_url, // Cloudinary URL
          exercise: req.body[`exercise${index}`], // Exercise from request
        };
      })
    );

    // Create course
    const newCourse = new course({
      courseName,
      teacherId,
      grade,
      lessons,
    });

    await newCourse.save();

    return res
      .status(201)
      .json({ message: "Course uploaded successfully", course: newCourse });
  } catch (error) {
    console.error("Error uploading course:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
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
