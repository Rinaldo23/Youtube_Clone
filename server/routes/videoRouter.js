import express from "express";
import { addVideo, addView, deleteVideo, getVideo, randomVideos, trendingVideos, updateVideo } from "../controllers/videoController.js";
import { verifyToken } from "../utils/verifyToken.js"

const videoRouter = express.Router();

// CREATE VIDEO
videoRouter.post("/", verifyToken, addVideo);

// UPDATE VIDEO
videoRouter.put("/:id", verifyToken, updateVideo);

// DELETE VIDEO
videoRouter.delete("/:id", verifyToken, deleteVideo);

// GET VIDEO
videoRouter.get("/find/:id", getVideo);

// VIEW VIDEO
videoRouter.put("/view/:id", addView);

// RANDOM VIDEOS
videoRouter.get("/random", randomVideos);

// TRENDING VIDEOS
videoRouter.get("/trend", trendingVideos);

export default videoRouter;