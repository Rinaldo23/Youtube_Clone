import express from "express";
import { addVideo, addView, deleteVideo, getByTag, getVideo, randomVideos, searchVideos, subscribedChannelVideos, trendingVideos, updateVideo } from "../controllers/videoController.js";
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
videoRouter.get("/random/:token", randomVideos);

// TRENDING VIDEOS
videoRouter.get("/trend/:token", trendingVideos);

// SUBSCRIBED CHANNEL VIDEOS
videoRouter.get("/sub/:token", verifyToken, subscribedChannelVideos);

// GET VIDEOS BY TAGS
videoRouter.get("/tags", getByTag);

// GET VIDEOS BY SEARCH
videoRouter.get("/search", searchVideos);

export default videoRouter;