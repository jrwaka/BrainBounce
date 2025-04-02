const ChatMessage = require("../models/chatMessage");

// Controller to fetch chat messages between users
const getChatMessages = async (req, res) => {
  try {
    const { userId, receiverId } = req.params; // Retrieve sender and receiver from URL params
    const messages = await ChatMessage.find({
      $or: [
        { sender: userId, receiver: receiverId },
        { sender: receiverId, receiver: userId },
      ],
    }).sort({ timestamp: 1 }); // Sort messages by timestamp

    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ message: "Error fetching messages", error: err });
  }
};

// Controller to send a new chat message
const sendMessage = async (req, res) => {
  try {
    const { senderId, receiverId, message } = req.body;

    // Create a new chat message
    const newMessage = new ChatMessage({
      sender: senderId,
      receiver: receiverId,
      message,
    });

    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ message: "Error sending message", error: err });
  }
};

module.exports = { getChatMessages, sendMessage };
