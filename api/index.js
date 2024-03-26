import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/user.route.js";

const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to  MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000!!!");
});

app.get("/test", (req, res) => {
  res.send("Hello World!!");
});

app.get("/test2", (req, res) => {
  res.json({
    message: "Hello World!!",
  });
});

app.use("/api/user", userRouter);

app.use("/api/testuser", userRouter);
