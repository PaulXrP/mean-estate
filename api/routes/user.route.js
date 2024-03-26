import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test3", (req, res) => {
  res.json({
    message: "Hello JS Backend!!",
  });
});

router.get('/test4', test)

export default router;
