const mongoose = require("mongoose");

const LearningProgressSchema = new mongoose.Schema({
  childId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Child",
    required: true,
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  completedLessons: { type: [mongoose.Schema.Types.ObjectId], default: [] },
  totalLessons: { type: Number, required: true },
  progressPercentage: { type: Number, default: 0 },
});
const progress =mongoose.model("LearningProgress", LearningProgressSchema);

module.exports = { progress }
