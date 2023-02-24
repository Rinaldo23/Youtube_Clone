import express from "express";
import { updateUser } from "../controllers/userController.js";
import { verifyToken } from "../utils/verifyToken.js";

const userRouter = express.Router();

// UPDATE USER/CHANNEL
userRouter.put("/:id", verifyToken, updateUser);

export default userRouter;