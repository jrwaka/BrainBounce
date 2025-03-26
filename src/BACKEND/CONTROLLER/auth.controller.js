const { user } = require("../MODELS/user.model")
const mongoose =require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
require("dotenv").config()

const signUp = async (req, res) => {
  try {
    const hashedpassword = await bcrypt.hash(req.body.password, 10);
    const User = new user({
      firstName: req.body.firstName,
      secondName: req.body.secondName,
      password: hashedpassword,
      email: req.body.email,
      role: req.body.role,
    });

    await User.save();

    res.status(201).json("user created");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const signIn = async (req, res) => {
  try {
    const email = req.body.email;  
    const password = req.body.password;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email or Password is not provided" });
    }

    //check if User exists with this email

    const users = await user.findOne({ email });
    if (!users) {
      res.status(404).json({ message: "User not found" });
    }

    ////comparing the passwords
    const userId = users._id.toString();
    const role = users.role;
    

    const isMatch = await bcrypt.compare(password, users.password);

    if (!isMatch) {
      res.status(400).json({ message: "Incorrect credentials" });
    } else {
      const token = jwt.sign(
        { email: email, userId , role:role},
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "1h",
        }
      );
      res.status(200).json({ message: "Success", token });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports= {
    signIn,
    signUp
}