const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { course } = require("../MODELS/course.model");
const { child } = require("../MODELS/child.model");
const { User } = require("../MODELS/user.model");

require("dotenv").config();

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
    folder: "uploads",
    resource_type: "raw",
    format: async (req, file) => "pdf",
    public_id: (req, file) => file.originalname,
  },
});

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 40 * 1024 * 1024 },
});

const uploadCourse = async (req, res) => {
  try {

    const { courseName, grade } = req.body;
const teacherId = req.params.id
   
    // Check if files are uploaded
    if (!req.file) {
      return res
        .status(400)
        .json({ message: "A course file is required" });
    }

    ////Upload to Cloudinary
       const result = await cloudinary.uploader.upload(req.file.path, {
         resource_type: "raw", // Automatically determine the resource type (image, pdf, etc.)
       });
    let lessonLink = result.secure_url; // Cloudinary URL


    // // Process lesson files
    // const lessons = await Promise.all(
    //   req.files.map(async (file, index) => {
    //     // Upload to Cloudinary
    //     const result = await cloudinary.uploader.upload(file.path, {
    //       resource_type: "auto",
    //     });

    //     return {
    //       lessonTitle: req.body[`lessonTitle${index}`], // Get lesson title from request
    //       lessonLink: result.secure_url, // Cloudinary URL
    //       exercise: req.body[`exercise${index}`], // Exercise from request
    //     };
    //   })
    // );

    // Create course
 const downloadLink = `${lessonLink}?download=true`;

    const newCourse = new course({
      courseName,
      teacherId,
      grade,
      courseLink: downloadLink,
      // lessons,
    });

    await newCourse.save();

    return res
      .status(201)
      .json({ message: "Course uploaded successfully", course: newCourse });
  } catch (error) {
    console.error("Error uploading course:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const downloadCourse = async (req, res) => {
  try {
    const courseLink = req.body.courseLink
    if (!courseLink) { return res.status(400).json({message:"courseLink is required"})}

  //   function getPublicId(courseLink) {
  //     const regex = /\/upload\/(?:v\d+\/)?([^?]+)/;
  //     const match = courseLink.match(regex);
  //     return match ? match[1].replace(/\.[^/.]+$/, "") : null;
  //   }

  //   let public_id  = getPublicId(courseLink)
  //  console.log(public_id)
  //   if (!public_id) {
  //     return res.status(400).json({ error: "Public ID is missing" });
  //   }

  //      const fileUrl = cloudinary.url(public_id, {
  //        resource_type: "raw", // Raw file type (e.g., PDF)
  //        secure: true, // Use secure HTTPS URL
  //        sign_url: true, // Sign the URL for added security
  //        expiration: 3600, // The URL will expire in 1 hour (3600 seconds)
  //      });
  //   console.log(fileUrl)

    res.json({ download_url: fileUrl });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

const enrollCourse = async (req, res) => {
  const { childId, courseId } = req.body;

  try {
    // Find the child
    const childRecord = await Child.findById(childId);
    if (!childRecord) {
      return res.status(404).json({ message: "Child not found" });
    }

    // Check if the child is already enrolled in the course
    if (childRecord.courses.includes(courseId)) {
      return res
        .status(400)
        .json({ message: "Child is already enrolled in this course" });
    }

    // Enroll the child in the course
    childRecord.courses.push(courseId);
    await childRecord.save();

    // Get the parent's information to send a notification
    const parent = await User.findById(childRecord.parent);
    if (parent) {
      sendNotification(
        parent.email,
        "Enrollment Successful",
        `Your child ${childRecord.firstName} has been enrolled in a new course!`
      );
    }

    return res
      .status(200)
      .json({ message: "Course enrolled successfully", child: childRecord });
  } catch (error) {
    return res.status(500).json({
      message: "Error enrolling child in course",
      error: error.message,
    });
  }
};

const getCourses = async (req, res) => {
  try {
    const Courses = await course.find();

    res.status(200).json(Courses);
  } catch (error) {}
};
const getCourse = async (req, res) => {
  try {

    const id = req.params.id;

    if (!id) {
      return res.status(404).json("CourseId is missing");
    }
    const Course = await course.findById(id);

    if (!Course) {return res.status(404).json("Course is not found");}
    res.status(200).json(Course.courseLink);


  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateCourse = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(404).json("Course Id not found");
    }
    const Course = await course.findByIdAndUpdate(id, req.body);
    if (!Course) {
      return res.status(404).json("Course not found");
    } else {
      res.status(200).json("Course updated");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json(" courseId not found");
    }

    let item = await course.findById(id);
    let courseUrl = item.courseLink;


    function getPublicId(courseUrl) {
      const regex = /\/upload\/(?:v\d+\/)?([^?]+)/;
      const match = courseUrl.match(regex);
      return match ? match[1].replace(/\.[^/.]+$/, "") : null;
    }

    let publicId = getPublicId(courseUrl);
    console.log(publicId);
    ///////////////////////////////////////////////////////////////////////
    const result = await cloudinary.uploader.destroy(publicId);
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const Course = await course.findByIdAndDelete(id);

    res.status(200).json({ message: "Course deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getCoursesByGrade = async (req, res) => {
  try {
    const childGrade = req.params.grade
    const Courses = await course.find({ grade:childGrade});

    res.status(200).json(Courses);
  } catch (error) {}
};

const getCoursesByTeacher = async (req, res) => {
  try {
    const teacher_id = req.params.id;
    const Courses = await course.find({ teacherId: teacher_id });

    res.status(200).json(Courses);
  } catch (error) {}
};


module.exports = {
  uploadCourse,
  downloadCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse,
  getCoursesByGrade,
  getCoursesByTeacher
};
