const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
require("dotenv").config();

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
}); 

const fileFilter = (req, file, cb) => {
  if (file.mimetype !== "application/pdf") {
    return cb(new Error("Only PDF files are allowed!"), false); 
  }
  cb(null, true);
};

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads", // Cloudinary folder name
    format: async (req, file) => "png", // Convert all to PNG (optional)
    public_id: (req, file) => file.originalname.split(".")[0], 
  },
});

const upload = multer({ storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 10 * 1024 * 1024}
 });

module.exports = { upload, cloudinary };
