import express from "express";
import { googleAuth, signin, signup } from "../controllers/authController.js";

const authRouter = express.Router();

// Create a User/Channel - SIGNUP/REGISTER
authRouter.post("/signup", signup);

// SIGNIN/LOGIN
authRouter.post("/signin", signin);

//GOOGLE AUTH
authRouter.post("/google", googleAuth);

export default authRouter;