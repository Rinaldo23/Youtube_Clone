import express from "express";
import { addVideo, deleteVideo, updateVideo } from "../controllers/videoController.js";
import { verifyToken } from "../utils/verifyToken.js"

const videoRouter = express.Router();

// CREATE VIDEO
videoRouter.post("/", verifyToken, addVideo);

// UPDATE VIDEO
videoRouter.put("/:id", verifyToken, updateVideo);

// DELETE VIDEO
videoRouter.delete("/:id", verifyToken, deleteVideo);

export default videoRouter;