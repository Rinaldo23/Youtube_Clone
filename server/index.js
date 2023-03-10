import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
import videoRouter from "./routes/videoRouter.js";
import commentRouter from "./routes/commentRouter.js";
import cors from "cors";

// Creating express application
const app = express();

// To Read .env file
dotenv.config();

// Creating Connection with Database
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to DB");
    } catch (err) {
        throw (err);
    }
}

// Connect automatically after any issues || Optional 
mongoose.connection.on("disconnected", () => {
    console.log("MongoDB Disconnected");
});

mongoose.connection.on("connected", () => {
    console.log("MongoDB Connected");
});

// Middlewares
app.use(cors());
app.use(cookieParser());
// IMPORTANT -To accept any json data from outside  
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/videos", videoRouter);
app.use("/api/comments", commentRouter);

// Error Handling
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success: false,
        status,
        message,
        stack: err.stack
    });
});

// Creating a connection to Server
app.listen(8800, () => {
    connect();
    console.log("Connected to Server");
});