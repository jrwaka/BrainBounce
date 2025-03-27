const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  lessonTitle: { type: String, required: true },
  lessonLink: { type: String, required: true },
  exercise: { type: String, required: true },
});

const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  grade: { type: String, required: true },
  lessons: [lessonSchema],
  totalLessons: { type: Number, default: 0 }, // Store the total number of lessons
});

// Pre-save hook to calculate totalLessons before saving the document
courseSchema.pre("save", function (next) {
  this.totalLessons = this.lessons.length; // Set totalLessons based on the lessons array length
  next();
});

const course = mongoose.model("Course", courseSchema);

module.exports = { course }
