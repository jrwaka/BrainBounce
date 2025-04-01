//importing the dependences
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const authRoute = require("./ROUTES/auth.route")
const courseRoute = require("./ROUTES/course.route")
const dashboardRoute = require("./ROUTES/dashboard.routes")
const userRoute = require("./ROUTES/user.route")
const childRoute = require("./ROUTES/child.route")






require("dotenv").config();
const port = process.env.port;
const connection_string = process.env.connection_string;

/////////CORS OPTIONS ///////
const corsOptions = {
  origin: "*", // Allow only requests from this origin
  methods: "GET, POST, PUT, DELETE, OPTIONS", // Allow only these HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow only these headers
};

app.use(cors(corsOptions));

app.use(express.json());

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});

//Routes
app.use("/api", authRoute);
app.use("/api", courseRoute);
app.use("/api", dashboardRoute);
app.use("/api", userRoute);
app.use("/api", childRoute);

mongoose
  .connect(connection_string)
  .then(() => {
    console.log("Successfully connected to the Database");
  })
  .catch((error) => {
    console.log("Failed to connect to the Database", error);
    console.log(`your connection string is:`, connection_string);
  });