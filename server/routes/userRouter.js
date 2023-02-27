import express from "express";
import { deleteUser, dislikeVideo, getUser, likeVideo, subscribeUser, unSubscribeUser, updateUser } from "../controllers/userController.js";
import { verifyToken } from "../utils/verifyToken.js";

const userRouter = express.Router();

// UPDATE USER/CHANNEL
userRouter.put("/:id", verifyToken, updateUser);

// DELETE USER/CHANNEL
userRouter.delete("/:id", verifyToken, deleteUser);

// GET USER/CHANNEL
userRouter.get("/find/:id", getUser);

// SUBSCRIBE USER/CHANNEL
userRouter.put("/sub/:id", verifyToken, subscribeUser);

// SUBSCRIBE USER/CHANNEL
userRouter.put("/unsub/:id", verifyToken, unSubscribeUser);

// LIKE USER/CHANNEL
userRouter.put("/like/:videoId", verifyToken, likeVideo);

// DISLIKE USER/CHANNEL
userRouter.put("/dislike/:videoId", verifyToken, dislikeVideo);

export default userRouter;