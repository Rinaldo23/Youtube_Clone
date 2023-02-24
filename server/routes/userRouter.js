import express from "express";
import { deleteUser, updateUser } from "../controllers/userController.js";
import { verifyToken } from "../utils/verifyToken.js";

const userRouter = express.Router();

// UPDATE USER/CHANNEL
userRouter.put("/:id", verifyToken, updateUser);

// DELETE USER/CHANNEL
userRouter.delete("/:id", verifyToken, deleteUser);

export default userRouter;