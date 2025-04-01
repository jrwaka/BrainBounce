const { user } = require("../MODELS/user.model")
const { Otp } = require("../MODELS/otp.model")
const mongoose =require("mongoose")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")
const nodemailer = require("nodemailer")
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
    grade: req.body.grade,
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
  

const forgotPassword = async (req, res) => {
  try {
    const email = req.body.email;
    if (!email) {
      return res.status(400).json({ message: "Email is not provided" });
    }
    const users = await user.findOne({ email });
    if (!users) {
      return res.status(404).json({ message: "User not found" });
    } else {
      ////////////////////////////////////////////////////////////////////
      function generateOTP(length = 6) {
        return crypto
          .randomInt(0, 10 ** length)
          .toString()
          .padStart(length, "0");
      }
      ////////////////////////////////////////////////
      const otp = generateOTP();
      const otpExpiry = Date.now() + 5 * 60 * 1000; // Expires in 5 minutes
      const savedOTPs = new Otp({ email, otp });
      await savedOTPs.save();
      // console.log(savedOTPs);
      //////////////////////////////////////////////NODEMAILER//////////////////////////////////
      ////////message details/////
      const html = `
 <h1>Hello!, here is your verification OTP<h1/>
  <p>this is your verification OTP <b>${otp}</b>. It's valid within 5 minutes, do not share it with 3rd parties </p>
 `;
      console.log(html);
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        auth: {
          user: "kubwimanaalain790@gmail.com",
          pass: "whmo xbzp fzcx oqdg",
        },
      });

      const info = await transporter.sendMail({
        from: "BrainBounce",
        to: email,
        subject: "Authentication OTP",
        html: html,
      });
      console.log(info);

      //////////////////////////////////////////////////////////////////////////////////////////

      //  //////////////////////////////DECLARING REDIS FOR QUICK DATABASE AND EASY OTP DELETING MECHANISM////////////////

      //  const storeOTP = async (email, otp) => {
      //    await redisClient.setEx(`otp:${email}`, 300, otp); // 300 seconds = 5 minutes
      //  }

      //  storeOTP(email, otp);

      res.status(200).json({
        message: "OTP has been sent! Check your Email" + info,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: "Email and OTP are required" });
    }
    const savedOTP = await Otp.findOne({ otp, email });

    console.log(savedOTP);
    if (!savedOTP) {
      return res.status(404).json({ message: "the given otp is not found" });
    }

    res.status(200).json("successfully verified");

    //  // Retrieve OTP from Redis
    //  const storedOTP = await redisClient.get(`otp:${email}`);

    //  if (!storedOTP) {
    //    return res.status(400).json({ message: "OTP expired or not found" });
    //  }

    //  // Check if the OTP matches
    //  if (storedOTP !== otp) {
    //    return res.status(400).json({ message: "Invalid OTP" });
    //  }

    //  // If OTP is valid, you may delete it (optional for security)
    //  await Client.del(`otp:${email}`);

    //  res.status(200).json({ message: "OTP verified successfully" });
  } catch (error) {
    console.error("Error in OTP verification:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


module.exports= {
    signIn,
    signUp,
    forgotPassword,
    verifyOTP
}