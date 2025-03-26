const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  message: { type: String, required: true },
  child: { type: mongoose.Schema.Types.ObjectId, ref: "Child" },
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});
const notification = mongoose.model("Notification", notificationSchema);
module.exports = { notification }
