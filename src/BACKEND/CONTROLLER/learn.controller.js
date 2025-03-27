// controllers/learn.controller.js
const { progress } = require("../MODELS/progress.model");
const { course } = require("../MODELS/course.model");
const { child } = require("../MODELS/child.model");

// Function to enroll a child in a course and initialize progress
const enrollInCourse = async (req, res) => {
  try {
    const { childId, courseId } = req.body;

    // Check if the child exists
    const Child = await child.findById(childId);
    if (!Child) {
      return res.status(404).json({ message: "Child not found" });
    }

    // Check if the course exists
    const Course = await course.findById(courseId);
    if (!Course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Check if the child is already enrolled in the course
    const existingProgress = await progress.findOne({
      childId,
      courseId,
    });
    if (existingProgress) {
      return res
        .status(400)
        .json({ message: "Child is already enrolled in this course" });
    }

    // Create a new LearningProgress document
    const newProgress = new progress({
      childId,
      courseId,
      completedLessons: [],
      totalLessons: course.totalLessons, 
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
const completeLesson = async (req, res) => {
  try {
    const { childId, courseId, lessonId } = req.body;

    // Find the LearningProgress document for this child and course
    const Progress = await progress.findOne({ childId, courseId });
    if (!Progress) {
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
const getProgress = async (req, res) => {
  try {
    const { childId, courseId } = req.params;

    // Find the LearningProgress document for this child and course
    const Progress = await progress.findOne({
      childId,
      courseId,
    }).populate("courseId");
    if (!Progress) {
      return res.status(404).json({ message: "Progress not found" });
    }

    res.status(200).json({
      message: "Progress retrieved successfully",
      Progress,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  enrollInCourse,
  completeLesson,
  getProgress,
};
