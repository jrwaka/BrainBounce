const { child } = require("../MODELS/child.model")
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const storage = multer.diskStorage({});
const upload = multer({ storage });

require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const addChild = async (req, res) => {
  try {
    /////////////////CLOUDINARY CONTROLLER//////////


    const { secure_url } = await cloudinary.uploader.upload(req.file.path, {
      folder: "ProfilePictures",
    });

   
    const Child = new child({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      parentId:req.body.parentId,
      grade: req.body.grade,
      age: req.body.age,
      profilePicture: secure_url,
    });

   
    await Child.save();

    if (!Child) {
      return res.status(400).json({ message: "Encountered an error while saving a child" });
    } else {
      res.status(201).json({ message: "child profile  Created successfully" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getChildren = async (req, res) => {
  try {
    const Children = await child.find();

    res.status(200).json(Children);
  } catch (error) {
    res.status(404).json({ message : error.message})
  }
};

const getChild = async (req, res) => {
  try {
    const id = req.params.id
    const Child = await child.findById(id);

    res.status(200).json(Child);
  } catch (error) {}
};

module.exports= { addChild, getChildren, getChild}