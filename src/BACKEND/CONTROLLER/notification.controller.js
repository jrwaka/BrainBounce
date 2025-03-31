const {notification }= require("../MODELS/notification.model");

const getNotifications = async (req, res) => {
  try {
    const notifications = await notification.find({
      parent_id: req.user.id,
      read_status: false,
    }).sort({ date_sent: -1 }); // Sort by newest first
    res.status(200).json(notifications);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching notifications", error: err.message });
  }
};

const markAsRead = async (req, res) => {
  try {
    const notificationId = req.params.id;
    const Notification = await notification.findById(notificationId);

    if (!Notification) {
      return res.status(404).json({ message: "Notification not found" });
    }

    Notification.read_status = true;
    await Notification.save();
    res.status(200).json({ message: "Notification marked as read" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating notification", error: err.message });
  }
};


module.exports= {
    getNotifications,
    markAsRead,
}
