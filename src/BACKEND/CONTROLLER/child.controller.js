const { child } = require("../MODELS/child.model")

const addChild = async (req, res) => {
  try {
    /////////////////CLOUDINARY CONTROLLER//////////


    const { secure_url } = await cloudinary.uploader.upload(req.file.path, {
      folder: "ProfilePictures",
    });

   
    const Child = new child({
      childName: req.body.productName,
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

const getchild = async (req, res) => {
  try {

    const Child = await child.findById();

    res.status(200).json(Child);
  } catch (error) {}
};

module.exports= { addChild, getChildren}