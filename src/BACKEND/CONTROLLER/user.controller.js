const { user } = require("../MODELS/user.model");



const getUsers = async (req, res) => {
  try {
    const users = await user.find({});
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
};
const getUser = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) return res.status(404).json({ message: "User not found" });
    const users = await user.findById(id);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  getUser,
};
