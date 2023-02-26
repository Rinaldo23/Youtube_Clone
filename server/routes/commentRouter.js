import express from "express";
import { addComment } from "../controllers/commentController.js";
import { verifyToken } from "../utils/verifyToken.js";

const commentRouter = express.Router();

// CREATE COMMENT
commentRouter.post("/", verifyToken, addComment);

export default commentRouter;