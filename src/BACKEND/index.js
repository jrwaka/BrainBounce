//importing the dependences
const express = require("express");
const app = express();
// const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const authRoute = require("./ROUTES/auth.route")
const courseRoute = require("./ROUTES/course.route")
const dashboardRoute = require("./ROUTES/dashboard.routes")
const userRoute = require("./ROUTES/user.route")



require("dotenv").config();
const port = process.env.port;
const connection_string = process.env.connection_string;

app.use(express.json());

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});

//Routes
app.use("/api", authRoute);
app.use("/api", courseRoute);
app.use("/api", dashboardRoute);
app.use("/api", userRoute);

mongoose
  .connect(connection_string)
  .then(() => {
    console.log("Successfully connected to the Database");
  })
  .catch((error) => {
    console.log("Failed to connect to the Database", error);
    console.log(`your connection string is:`, connection_string);
  });