const mongoose = require("mongoose")


const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    secondName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["Parent", "Teacher", "Admin"],
      required: true,
    },
    grade: {
      type: String,
      default: null,
      required : function () {
        return this.role === "Teacher";
      },
    },
  },
  { timestamps: true }
);
const user = mongoose.model("User", userSchema);
module.exports = { user, }
