import express from "express";
import { addComment, deleteComment, getComments } from "../controllers/commentController.js";
import { verifyToken } from "../utils/verifyToken.js";

const commentRouter = express.Router();

// CREATE COMMENT
commentRouter.post("/", verifyToken, addComment);

// DELETE COMMENT
commentRouter.delete("/:videoId/:commentId/:token", verifyToken, deleteComment);

// GET COMMENTS
commentRouter.get("/:videoId", getComments);

export default commentRouter;