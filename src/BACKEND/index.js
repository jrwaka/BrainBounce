//importing the dependences
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// const http = require("http");
// const socketIo = require("socket.io");

const authRoute = require("./ROUTES/auth.route")
const courseRoute = require("./ROUTES/course.route")
const dashboardRoute = require("./ROUTES/dashboard.routes")
const userRoute = require("./ROUTES/user.route")
const childRoute = require("./ROUTES/child.route")

require("dotenv").config();
const port = process.env.port;
const connection_string = process.env.connection_string;

// const server = http.createServer(app);
// const io = require("socket.io")(`${port}`);






/////////CORS OPTIONS ///////
const corsOptions = {
  origin: "*", // Allow only requests from this origin
  methods: "GET, POST, PUT, DELETE, OPTIONS", // Allow only these HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow only these headers
};

app.use(cors(corsOptions));

app.use(express.json());

// io.on("connection", socket => {
//   console.log("a user connected");

  // socket.on("sendMessage", (data) => {
  //   const { senderId, receiverId, message } = data;

  //   const newMessage = new ChatMessage({
  //     sender: senderId,
  //     receiver: receiverId,
  //     message,
  //   });

  //   newMessage.save().then(() => {
  //     io.to(receiverId).emit("newMessage", newMessage);

  //     io.to(senderId).emit("newMessage", newMessage);
  //   });
  // });

  // socket.on("joinRoom", (userId) => {
  //   socket.join(userId); 
  //   console.log(`${userId} joined the room`);
  // });

 
  // socket.on("disconnect", () => {
  //   console.log("user disconnected");
  // });
// });

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