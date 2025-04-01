const { user } = require("../MODELS/user.model");



const getUsers = async (req, res) => {
  try {
    const users = await user.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getUser = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) return res.status(404).json({ message: "User not found" });
    const users = await user.findById(id);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
   ers
    const { id } = req.params;

   
    if (!id) {
      return res.status(404).json({ message: "User ID is missing" });
    }

  

  
    const users = await user.findByIdAndDelete(id);

    if (!users) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ message: "User deleted successfully", users });
  } catch (error) {
    console.error("Error deleting User:", error);
    res.status(500).json({ message: "Unable to delete User" });
  }
};

const getTeachers = async (req, res) => {
  try {
   const teachers = await user.find({ role: "Teacher" });
    console.log(teachers);
    if (teachers.length === 0) {
      return res.status(404).json({ message: "No teachers found" });
    }
    res.status(200).json(teachers);
  } catch (err) {
    res.status(500).json({ message: "FAILED TO GET TEACHERS"});
  }
}; 

const getTeachersByGrade = async (req, res) => {
  try {
    const Grade = req.body.grade
    const Teachers = await user.find({ grade: Grade });
    res.status(200).json(Teachers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getUsers,
  getUser,
  deleteUser,
  getTeachers,
  getTeachersByGrade,
};
