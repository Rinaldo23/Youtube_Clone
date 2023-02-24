import express from "express";
import { signup } from "../controllers/authController.js";

const authRouter = express.Router();

// Create a User/Channel
authRouter.post("/signup", signup);

export default authRouter;