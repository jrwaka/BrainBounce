// controllers/learn.controller.js
const LearningProgress = require("../models/LearningProgress");
const Course = require("../models/Course");
const Child = require("../models/Child");

// Function to enroll a child in a course and initialize progress
exports.enrollInCourse = async (req, res) => {
  try {
    const { childId, courseId } = req.body;

    // Check if the child exists
    const child = await Child.findById(childId);
    if (!child) {
      return res.status(404).json({ message: "Child not found" });
    }

    // Check if the course exists
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Check if the child is already enrolled in the course
    const existingProgress = await LearningProgress.findOne({
      childId,
      courseId,
    });
    if (existingProgress) {
      return res
        .status(400)
        .json({ message: "Child is already enrolled in this course" });
    }

    // Create a new LearningProgress document
    const newProgress = new LearningProgress({
      childId,
      courseId,
      completedLessons: [],
      totalLessons: course.totalLessons, // Assumes the Course model has a `totalLessons` field
      progressPercentage: 0,
    });

    await newProgress.save();

    res
      .status(201)
      .json({
        message: "Child successfully enrolled in the course",
        progress: newProgress,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Function to mark a lesson as completed and track progress
exports.completeLesson = async (req, res) => {
  try {
    const { childId, courseId, lessonId } = req.body;

    // Find the LearningProgress document for this child and course
    const progress = await LearningProgress.findOne({ childId, courseId });
    if (!progress) {
      return res
        .status(404)
        .json({ message: "Progress not found for this child and course" });
    }

    // Check if the lesson is already completed
    if (progress.completedLessons.includes(lessonId)) {
      return res.status(400).json({ message: "Lesson already completed" });
    }

    // Mark the lesson as completed
    progress.completedLessons.push(lessonId);

    // Calculate the new progress percentage
    const completedPercentage =
      (progress.completedLessons.length / progress.totalLessons) * 100;
    progress.progressPercentage = completedPercentage;

    // Save the updated progress
    await progress.save();

    res.status(200).json({ message: "Lesson marked as completed", progress });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Function to get the progress of a child in a specific course
exports.getProgress = async (req, res) => {
  try {
    const { childId, courseId } = req.params;

    // Find the LearningProgress document for this child and course
    const progress = await LearningProgress.findOne({
      childId,
      courseId,
    }).populate("courseId");
    if (!progress) {
      return res.status(404).json({ message: "Progress not found" });
    }

    res.status(200).json({
      message: "Progress retrieved successfully",
      progress,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};
