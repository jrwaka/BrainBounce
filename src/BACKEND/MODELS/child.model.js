const mongoose = require("mongoose");

const childSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:{ type: String, required : true}, 

  grade: {
    type: String,
    required: true,
  },
  parentId: {
    type :mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
  ,
  age: { type: Number, required: true },
  profilePicture: { type:String, default : null },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  progress: [
    {  
      type: mongoose.Schema.Types.ObjectId,
      ref: "Progress",
    },
  ],
});
const child =mongoose.model("Child", childSchema);
module.exports = { child }
